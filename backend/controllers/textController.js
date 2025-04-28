import TextAnalysis from "../models/textAnalysisModel.js"
import fetch from "node-fetch"

// ML service URL
const ML_SERVICE_URL = process.env.ML_SERVICE_URL || "http://localhost:8000"

// Analyze text using ML service
export const analyzeText = async (req, res) => {
  try {
    const { text } = req.body

    if (!text) {
      return res.status(400).json({ message: "Text is required" })
    }

    // Call ML service
    const response = await fetch(`${ML_SERVICE_URL}/analyze-text`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    })

    if (!response.ok) {
      throw new Error(`ML service responded with status: ${response.status}`)
    }

    const analysisResult = await response.json()

    // Save analysis to database if user is authenticated
    if (req.user) {
      const textAnalysis = new TextAnalysis({
        user: req.user._id,
        text,
        result: analysisResult,
      })

      await textAnalysis.save()
    }

    res.json(analysisResult)
  } catch (error) {
    console.error("Error analyzing text:", error)
    res.status(500).json({ message: "Failed to analyze text", error: error.message })
  }
}

// Get text analysis history for authenticated user
export const getTextAnalysisHistory = async (req, res) => {
  try {
    const textAnalyses = await TextAnalysis.find({ user: req.user._id }).sort({ createdAt: -1 }).limit(20)

    res.json(textAnalyses)
  } catch (error) {
    console.error("Error fetching text analysis history:", error)
    res.status(500).json({ message: "Failed to fetch analysis history", error: error.message })
  }
}
