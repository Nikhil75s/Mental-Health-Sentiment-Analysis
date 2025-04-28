import express from "express"
import { submitSurvey, getSurveyHistory } from "../controllers/surveyController.js"
import { protect } from "../middleware/authMiddleware.js"

const router = express.Router()

// Routes for PHQ-9 and GAD-7 surveys
router.post("/phq9", submitSurvey)
router.post("/gad7", submitSurvey)

// Route to get survey history (protected)
router.get("/history", protect, getSurveyHistory)

export default router
