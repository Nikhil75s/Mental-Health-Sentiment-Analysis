import express from "express"
import { analyzeText, getTextAnalysisHistory } from "../controllers/textController.js"
import { protect } from "../middleware/authMiddleware.js"

const router = express.Router()

// Route to analyze text
router.post("/", analyzeText)

// Route to get analysis history (protected)
router.get("/history", protect, getTextAnalysisHistory)

export default router
