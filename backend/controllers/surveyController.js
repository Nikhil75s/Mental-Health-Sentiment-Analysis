import Survey from "../models/surveyModel.js"
import fetch from "node-fetch"

// ML service URL
const ML_SERVICE_URL = process.env.ML_SERVICE_URL || "http://localhost:8000"

// Submit survey (PHQ-9 or GAD-7)
export const submitSurvey = async (req, res) => {
  try {
    const { answers } = req.body
    const surveyType = req.path.includes("phq9") ? "phq9" : "gad7"

    if (!answers || Object.keys(answers).length === 0) {
      return res.status(400).json({ message: "Survey answers are required" })
    }

    // Call ML service to process survey
    const response = await fetch(`${ML_SERVICE_URL}/process-survey`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ survey_type: surveyType, answers }),
    })

    if (!response.ok) {
      throw new Error(`ML service responded with status: ${response.status}`)
    }

    const result = await response.json()

    // Save survey to database if user is authenticated
    if (req.user) {
      const survey = new Survey({
        user: req.user._id,
        surveyType,
        answers,
        result,
      })

      await survey.save()
    }

    res.json(result)
  } catch (error) {
    console.error("Error processing survey:", error)
    res.status(500).json({ message: "Failed to process survey", error: error.message })
  }
}

// Get survey history for authenticated user
export const getSurveyHistory = async (req, res) => {
  try {
    const surveys = await Survey.find({ user: req.user._id }).sort({ createdAt: -1 }).limit(20)

    res.json(surveys)
  } catch (error) {
    console.error("Error fetching survey history:", error)
    res.status(500).json({ message: "Failed to fetch survey history", error: error.message })
  }
}
