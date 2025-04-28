import jwt from "jsonwebtoken"
import User from "../models/userModel.js"

// Protect routes - verify JWT token
export const protect = async (req, res, next) => {
  let token

  // Check if token exists in Authorization header
  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      // Get token from header
      token = req.headers.authorization.split(" ")[1]

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET || "your_jwt_secret")

      // Get user from token
      req.user = await User.findById(decoded.id).select("-password")

      next()
    } catch (error) {
      console.error("Error authenticating token:", error)
      res.status(401).json({ message: "Not authorized, token failed" })
    }
  }

  if (!token) {
    res.status(401).json({ message: "Not authorized, no token" })
  }
}
