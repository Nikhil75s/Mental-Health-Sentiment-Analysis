import mongoose from "mongoose"

const surveySchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    surveyType: {
      type: String,
      enum: ["phq9", "gad7"],
      required: true,
    },
    answers: {
      type: Object,
      required: true,
    },
    result: {
      score: Number,
      severity: String,
      color: String,
    },
  },
  {
    timestamps: true,
  },
)

const Survey = mongoose.model("Survey", surveySchema)

export default Survey
