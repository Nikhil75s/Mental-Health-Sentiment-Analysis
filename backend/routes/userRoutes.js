import express from "express"
import { registerUser, loginUser, getUserProfile, updateUserProfile } from "../controllers/userController.js"
import { protect } from "../middleware/authMiddleware.js"

const router = express.Router()

// Auth routes
router.post("/register", registerUser)
router.post("/login", loginUser)

// Profile routes (protected)
router.get("/profile", protect, getUserProfile)
router.put("/profile", protect, updateUserProfile)

// Results route (protected)
router.get("/results", protect, (req, res) => {
  // This route will aggregate results from both text analysis and surveys
  res.json({ message: "Results endpoint" })
})

export default router
