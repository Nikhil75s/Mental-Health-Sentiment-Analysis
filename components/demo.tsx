"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react"
import { Progress } from "@/components/ui/progress"

type EmotionScore = {
  emotion: string
  score: number
  color: string
}

export default function Demo() {
  const [text, setText] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [result, setResult] = useState<{
    mainEmotion: string
    description: string
    scores: EmotionScore[]
  } | null>(null)

  const analyzeText = async () => {
    if (!text.trim()) return

    setIsAnalyzing(true)

    // Simulate API call with timeout
    setTimeout(() => {
      // Mock response - in a real app, this would come from your backend
      const mockResult = {
        mainEmotion:
          text.toLowerCase().includes("anxious") || text.toLowerCase().includes("worry")
            ? "Mild Anxiety"
            : text.toLowerCase().includes("sad") || text.toLowerCase().includes("depress")
              ? "Moderate Depression"
              : "Neutral",
        description:
          text.toLowerCase().includes("anxious") || text.toLowerCase().includes("worry")
            ? "Your text indicates some signs of anxiety. Consider using relaxation techniques."
            : text.toLowerCase().includes("sad") || text.toLowerCase().includes("depress")
              ? "Your text shows indicators of depression. Regular exercise and social connection may help."
              : "Your text doesn't show significant emotional distress.",
        scores: [
          {
            emotion: "Anxiety",
            score: text.toLowerCase().includes("anxious") || text.toLowerCase().includes("worry") ? 65 : 25,
            color: "text-yellow-500",
          },
          {
            emotion: "Depression",
            score: text.toLowerCase().includes("sad") || text.toLowerCase().includes("depress") ? 58 : 18,
            color: "text-blue-500",
          },
          {
            emotion: "Stress",
            score: text.toLowerCase().includes("stress") || text.toLowerCase().includes("overwhelm") ? 72 : 30,
            color: "text-red-500",
          },
          {
            emotion: "Positive",
            score: text.toLowerCase().includes("happy") || text.toLowerCase().includes("good") ? 80 : 45,
            color: "text-green-500",
          },
        ],
      }

      setResult(mockResult)
      setIsAnalyzing(false)
    }, 2000)
  }

  return (
    <section id="demo" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Try Our Sentiment Analysis</h2>
          <p className="text-lg text-muted-foreground">
            Enter some text about how you're feeling, and our AI will analyze the emotional content. This is a
            demonstration of our real-time text analysis capabilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Input Your Text</CardTitle>
              <CardDescription>Share your thoughts, feelings, or a journal entry for analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="Example: I've been feeling overwhelmed with work lately and finding it hard to sleep. I worry about deadlines and feel anxious most days."
                className="min-h-[200px] resize-none"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </CardContent>
            <CardFooter>
              <Button onClick={analyzeText} disabled={!text.trim() || isAnalyzing} className="w-full">
                {isAnalyzing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  "Analyze Sentiment"
                )}
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Analysis Results</CardTitle>
              <CardDescription>AI-powered emotional sentiment detection</CardDescription>
            </CardHeader>
            <CardContent>
              {isAnalyzing ? (
                <div className="flex flex-col items-center justify-center min-h-[200px]">
                  <Loader2 className="h-8 w-8 animate-spin text-primary mb-4" />
                  <p>Processing your text...</p>
                </div>
              ) : result ? (
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    {result.mainEmotion === "Neutral" ? (
                      <CheckCircle2 className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    ) : (
                      <AlertCircle className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                    )}
                    <div>
                      <h3 className="text-lg font-semibold">{result.mainEmotion}</h3>
                      <p className="text-muted-foreground">{result.description}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-medium">Emotional Indicators</h4>
                    {result.scores.map((item) => (
                      <div key={item.emotion} className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>{item.emotion}</span>
                          <span className={item.color}>{item.score}%</span>
                        </div>
                        <Progress value={item.score} className="h-2" />
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center text-center min-h-[200px] text-muted-foreground">
                  <p>Enter your text and click "Analyze Sentiment" to see results</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 bg-card border rounded-xl p-6 md:p-8 max-w-5xl mx-auto">
          <h3 className="text-xl font-bold mb-4">How It Works</h3>
          <div className="space-y-4">
            <p>
              Our sentiment analysis system uses a combination of natural language processing (NLP) and machine learning
              models to analyze text:
            </p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Your text is preprocessed to normalize and clean the input</li>
              <li>Our NLP pipeline extracts key features and linguistic patterns</li>
              <li>Multiple ML models (including Naive Bayes, SVM, BERT, and GPT) analyze the text</li>
              <li>The system identifies emotional content and mental health indicators</li>
              <li>Results are presented with scores for different emotional states</li>
            </ol>
            <p className="text-sm text-muted-foreground mt-4">
              Note: This demo provides a simplified version of our full analysis capabilities. The production system
              includes more comprehensive analysis, historical tracking, and personalized insights.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
