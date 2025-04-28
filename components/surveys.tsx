"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react"

// PHQ-9 questions
const phq9Questions = [
  "Little interest or pleasure in doing things",
  "Feeling down, depressed, or hopeless",
  "Trouble falling or staying asleep, or sleeping too much",
  "Feeling tired or having little energy",
  "Poor appetite or overeating",
  "Feeling bad about yourself - or that you are a failure or have let yourself or your family down",
  "Trouble concentrating on things, such as reading the newspaper or watching television",
  "Moving or speaking so slowly that other people could have noticed. Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual",
  "Thoughts that you would be better off dead, or of hurting yourself in some way",
]

// GAD-7 questions
const gad7Questions = [
  "Feeling nervous, anxious, or on edge",
  "Not being able to stop or control worrying",
  "Worrying too much about different things",
  "Trouble relaxing",
  "Being so restless that it's hard to sit still",
  "Becoming easily annoyed or irritable",
  "Feeling afraid as if something awful might happen",
]

// Response options for both surveys
const responseOptions = [
  { value: "0", label: "Not at all" },
  { value: "1", label: "Several days" },
  { value: "2", label: "More than half the days" },
  { value: "3", label: "Nearly every day" },
]

export default function Surveys() {
  const [activeTab, setActiveTab] = useState("phq9")
  const [phq9Answers, setPhq9Answers] = useState<Record<number, string>>({})
  const [gad7Answers, setGad7Answers] = useState<Record<number, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [phq9Result, setPhq9Result] = useState<{ score: number; severity: string; color: string } | null>(null)
  const [gad7Result, setGad7Result] = useState<{ score: number; severity: string; color: string } | null>(null)

  const handlePhq9Change = (questionIndex: number, value: string) => {
    setPhq9Answers({ ...phq9Answers, [questionIndex]: value })
  }

  const handleGad7Change = (questionIndex: number, value: string) => {
    setGad7Answers({ ...gad7Answers, [questionIndex]: value })
  }

  const calculatePhq9Score = () => {
    if (Object.keys(phq9Answers).length < phq9Questions.length) {
      return null
    }

    const score = Object.values(phq9Answers).reduce((sum, value) => sum + Number.parseInt(value, 10), 0)

    let severity = ""
    let color = ""

    if (score >= 0 && score <= 4) {
      severity = "Minimal depression"
      color = "text-green-500"
    } else if (score >= 5 && score <= 9) {
      severity = "Mild depression"
      color = "text-yellow-500"
    } else if (score >= 10 && score <= 14) {
      severity = "Moderate depression"
      color = "text-orange-500"
    } else if (score >= 15 && score <= 19) {
      severity = "Moderately severe depression"
      color = "text-red-500"
    } else {
      severity = "Severe depression"
      color = "text-red-700"
    }

    return { score, severity, color }
  }

  const calculateGad7Score = () => {
    if (Object.keys(gad7Answers).length < gad7Questions.length) {
      return null
    }

    const score = Object.values(gad7Answers).reduce((sum, value) => sum + Number.parseInt(value, 10), 0)

    let severity = ""
    let color = ""

    if (score >= 0 && score <= 4) {
      severity = "Minimal anxiety"
      color = "text-green-500"
    } else if (score >= 5 && score <= 9) {
      severity = "Mild anxiety"
      color = "text-yellow-500"
    } else if (score >= 10 && score <= 14) {
      severity = "Moderate anxiety"
      color = "text-orange-500"
    } else {
      severity = "Severe anxiety"
      color = "text-red-500"
    }

    return { score, severity, color }
  }

  const submitSurvey = () => {
    setIsSubmitting(true)

    // Simulate API call with timeout
    setTimeout(() => {
      if (activeTab === "phq9") {
        setPhq9Result(calculatePhq9Score())
      } else {
        setGad7Result(calculateGad7Score())
      }
      setIsSubmitting(false)
    }, 1500)
  }

  const resetSurvey = () => {
    if (activeTab === "phq9") {
      setPhq9Answers({})
      setPhq9Result(null)
    } else {
      setGad7Answers({})
      setGad7Result(null)
    }
  }

  const isPhq9Complete = Object.keys(phq9Answers).length === phq9Questions.length
  const isGad7Complete = Object.keys(gad7Answers).length === gad7Questions.length

  return (
    <section id="surveys" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Medical Screening Surveys</h2>
          <p className="text-lg text-muted-foreground">
            Complete these validated clinical screening tools to assess symptoms of depression and anxiety. These
            surveys are commonly used in healthcare settings for initial assessment.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle>Mental Health Screening Tools</CardTitle>
            <CardDescription>
              Select a survey to complete. Your responses are confidential and will be used to provide a preliminary
              assessment.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="phq9" value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="phq9">PHQ-9 (Depression)</TabsTrigger>
                <TabsTrigger value="gad7">GAD-7 (Anxiety)</TabsTrigger>
              </TabsList>

              <TabsContent value="phq9" className="mt-6">
                {phq9Result ? (
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      {phq9Result.score < 5 ? (
                        <CheckCircle2 className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                      ) : (
                        <AlertCircle className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                      )}
                      <div>
                        <h3 className="text-lg font-semibold">
                          Your PHQ-9 Score: <span className={phq9Result.color}>{phq9Result.score}</span>
                        </h3>
                        <p className="text-muted-foreground">
                          Assessment: <span className={phq9Result.color}>{phq9Result.severity}</span>
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Score Interpretation</h4>
                      <div className="w-full bg-muted h-6 rounded-full overflow-hidden">
                        <div className="flex h-full text-xs">
                          <div className="bg-green-500 w-1/5 flex items-center justify-center text-white">0-4</div>
                          <div className="bg-yellow-500 w-1/5 flex items-center justify-center text-white">5-9</div>
                          <div className="bg-orange-500 w-1/5 flex items-center justify-center text-white">10-14</div>
                          <div className="bg-red-500 w-1/5 flex items-center justify-center text-white">15-19</div>
                          <div className="bg-red-700 w-1/5 flex items-center justify-center text-white">20-27</div>
                        </div>
                      </div>
                      <div className="flex justify-between text-xs mt-1">
                        <span>Minimal</span>
                        <span>Mild</span>
                        <span>Moderate</span>
                        <span>Mod. Severe</span>
                        <span>Severe</span>
                      </div>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Next Steps</h4>
                      <p className="text-sm mb-2">
                        {phq9Result.score < 5
                          ? "Your score indicates minimal symptoms of depression. Continue monitoring your mental health."
                          : phq9Result.score < 10
                            ? "Your score indicates mild symptoms of depression. Consider discussing with a healthcare provider."
                            : "Your score indicates significant symptoms of depression. We recommend consulting with a healthcare professional."}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Note: This is not a diagnostic tool. Only a qualified healthcare professional can provide a
                        proper diagnosis.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <p className="text-sm text-muted-foreground mb-4">
                      Over the last 2 weeks, how often have you been bothered by any of the following problems?
                    </p>

                    {phq9Questions.map((question, index) => (
                      <div key={`phq9-${index}`} className="space-y-3">
                        <p className="font-medium">{question}</p>
                        <RadioGroup
                          value={phq9Answers[index] || ""}
                          onValueChange={(value) => handlePhq9Change(index, value)}
                        >
                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
                            {responseOptions.map((option) => (
                              <div key={`phq9-${index}-${option.value}`} className="flex items-center space-x-2">
                                <RadioGroupItem value={option.value} id={`phq9-${index}-${option.value}`} />
                                <Label htmlFor={`phq9-${index}-${option.value}`}>{option.label}</Label>
                              </div>
                            ))}
                          </div>
                        </RadioGroup>
                      </div>
                    ))}
                  </div>
                )}
              </TabsContent>

              <TabsContent value="gad7" className="mt-6">
                {gad7Result ? (
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      {gad7Result.score < 5 ? (
                        <CheckCircle2 className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                      ) : (
                        <AlertCircle className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                      )}
                      <div>
                        <h3 className="text-lg font-semibold">
                          Your GAD-7 Score: <span className={gad7Result.color}>{gad7Result.score}</span>
                        </h3>
                        <p className="text-muted-foreground">
                          Assessment: <span className={gad7Result.color}>{gad7Result.severity}</span>
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Score Interpretation</h4>
                      <div className="w-full bg-muted h-6 rounded-full overflow-hidden">
                        <div className="flex h-full text-xs">
                          <div className="bg-green-500 w-1/3 flex items-center justify-center text-white">0-4</div>
                          <div className="bg-yellow-500 w-1/3 flex items-center justify-center text-white">5-9</div>
                          <div className="bg-orange-500 w-1/6 flex items-center justify-center text-white">10-14</div>
                          <div className="bg-red-500 w-1/6 flex items-center justify-center text-white">15-21</div>
                        </div>
                      </div>
                      <div className="flex justify-between text-xs mt-1">
                        <span>Minimal</span>
                        <span>Mild</span>
                        <span>Moderate</span>
                        <span>Severe</span>
                      </div>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Next Steps</h4>
                      <p className="text-sm mb-2">
                        {gad7Result.score < 5
                          ? "Your score indicates minimal symptoms of anxiety. Continue monitoring your mental health."
                          : gad7Result.score < 10
                            ? "Your score indicates mild symptoms of anxiety. Consider discussing with a healthcare provider."
                            : "Your score indicates significant symptoms of anxiety. We recommend consulting with a healthcare professional."}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Note: This is not a diagnostic tool. Only a qualified healthcare professional can provide a
                        proper diagnosis.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <p className="text-sm text-muted-foreground mb-4">
                      Over the last 2 weeks, how often have you been bothered by any of the following problems?
                    </p>

                    {gad7Questions.map((question, index) => (
                      <div key={`gad7-${index}`} className="space-y-3">
                        <p className="font-medium">{question}</p>
                        <RadioGroup
                          value={gad7Answers[index] || ""}
                          onValueChange={(value) => handleGad7Change(index, value)}
                        >
                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
                            {responseOptions.map((option) => (
                              <div key={`gad7-${index}-${option.value}`} className="flex items-center space-x-2">
                                <RadioGroupItem value={option.value} id={`gad7-${index}-${option.value}`} />
                                <Label htmlFor={`gad7-${index}-${option.value}`}>{option.label}</Label>
                              </div>
                            ))}
                          </div>
                        </RadioGroup>
                      </div>
                    ))}
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex justify-between">
            {(activeTab === "phq9" && phq9Result) || (activeTab === "gad7" && gad7Result) ? (
              <Button variant="outline" onClick={resetSurvey}>
                Reset Survey
              </Button>
            ) : (
              <Button
                onClick={submitSurvey}
                disabled={
                  isSubmitting || (activeTab === "phq9" && !isPhq9Complete) || (activeTab === "gad7" && !isGad7Complete)
                }
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  "Submit Survey"
                )}
              </Button>
            )}
          </CardFooter>
        </Card>

        <div className="mt-12 text-center max-w-3xl mx-auto">
          <p className="text-sm text-muted-foreground">
            <strong>Disclaimer:</strong> These screening tools are provided for educational and informational purposes
            only. They are not intended to diagnose any health condition or to replace the expertise and judgment of
            healthcare professionals. Always consult with a qualified healthcare provider for proper diagnosis and
            treatment of any medical condition.
          </p>
        </div>
      </div>
    </section>
  )
}
