import mongoose from "mongoose"

const textAnalysisSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    result: {
      mainEmotion: String,
      description: String,
      scores: [
        {
          emotion: String,
          score: Number,
          color: String,
        },
      ],
      raw_scores: Object,
    },
  },
  {
    timestamps: true,
  },
)

const TextAnalysis = mongoose.model("TextAnalysis", textAnalysisSchema)

export default TextAnalysis
