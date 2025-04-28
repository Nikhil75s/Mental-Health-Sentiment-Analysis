import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"
import textRoutes from "./routes/textRoutes.js"
import surveyRoutes from "./routes/surveyRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import contactRoutes from "./routes/contactRoutes.js"
import { errorHandler } from "./middleware/errorMiddleware.js"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.use("/api/analyze-text", textRoutes)
app.use("/api/survey", surveyRoutes)
app.use("/api/user", userRoutes)
app.use("/api/contact", contactRoutes)

// Root route
app.get("/", (req, res) => {
  res.send("Mental Health Sentiment Analysis API is running")
})

// Error handler
app.use(errorHandler)

// Connect to MongoDB and start server
const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/mental_health_sentiment")
    console.log("Connected to MongoDB")
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
    })
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error.message)
    process.exit(1)
  }
}

startServer()

export default app
