import { Brain, HeartPulse, LineChart } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Understanding Mental Health Through AI</h2>
          <p className="text-lg text-muted-foreground">
            Our system applies advanced sentiment analysis to mental wellness, providing valuable insights for early
            intervention and continuous monitoring.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader className="pb-2">
              <Brain className="h-12 w-12 text-primary mb-4" />
              <CardTitle>NLP & Machine Learning</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                We use state-of-the-art natural language processing and machine learning models (Naive Bayes, SVM, BERT,
                GPT) to analyze text and identify mental health indicators.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <HeartPulse className="h-12 w-12 text-primary mb-4" />
              <CardTitle>Clinical Relevance</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Our system integrates validated clinical screening tools like PHQ-9 and GAD-7 to provide comprehensive
                mental health assessments aligned with medical standards.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <LineChart className="h-12 w-12 text-primary mb-4" />
              <CardTitle>Continuous Monitoring</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Track mental health trends over time with our visualization tools, enabling proactive intervention and
                personalized care strategies.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 bg-card border rounded-xl p-6 md:p-8 shadow-sm">
          <h3 className="text-2xl font-bold mb-4">Why Sentiment Analysis Matters in Mental Health</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-muted-foreground mb-4">
                Language patterns and emotional expressions in text can reveal important indicators of mental health
                conditions before they become severe. By analyzing these patterns, our system can:
              </p>
              <ul className="space-y-2 list-disc pl-5">
                <li>Detect early signs of depression, anxiety, and stress</li>
                <li>Monitor response to treatment and interventions</li>
                <li>Provide objective data to complement clinical assessments</li>
                <li>Enable remote monitoring for telehealth applications</li>
              </ul>
            </div>
            <div>
              <p className="text-muted-foreground mb-4">
                In clinical settings, our technology serves as a valuable supplementary tool that can:
              </p>
              <ul className="space-y-2 list-disc pl-5">
                <li>Support healthcare providers with data-driven insights</li>
                <li>Reduce the burden of manual screening and assessment</li>
                <li>Improve access to mental health resources</li>
                <li>Facilitate earlier intervention and potentially better outcomes</li>
                <li>Bridge gaps between appointments with continuous monitoring</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
