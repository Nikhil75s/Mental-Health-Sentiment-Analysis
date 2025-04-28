import mongoose from "mongoose"

const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    organization: {
      type: String,
    },
    inquiryType: {
      type: String,
      required: true,
      enum: ["general", "demo", "partnership", "technical", "research"],
    },
    message: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "new",
      enum: ["new", "in-progress", "completed"],
    },
  },
  {
    timestamps: true,
  },
)

const Contact = mongoose.model("Contact", contactSchema)

export default Contact
