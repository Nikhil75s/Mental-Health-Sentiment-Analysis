import { Card, CardContent } from "@/components/ui/card"

export default function Architecture() {
  return (
    <section id="architecture" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">System Architecture</h2>
          <p className="text-lg text-muted-foreground">
            Our platform combines modern frontend technologies with powerful backend services and machine learning
            capabilities.
          </p>
        </div>

        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="p-6 md:p-8">
              <div className="w-full bg-background rounded-lg p-4 md:p-8 border">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                  {/* Input Layer */}
                  <div className="flex flex-col items-center text-center">
                    <div className="w-full max-w-[200px] aspect-square bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <div className="text-primary font-semibold">Data Input</div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <p>Text Analysis</p>
                      <p>PHQ-9 & GAD-7</p>
                      <p>User Journals</p>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="hidden md:block text-primary">→</div>
                  <div className="block md:hidden text-primary">↓</div>

                  {/* Processing Layer */}
                  <div className="flex flex-col items-center text-center">
                    <div className="w-full max-w-[200px] aspect-square bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <div className="text-primary font-semibold">Processing</div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <p>NLP Pipeline</p>
                      <p>ML Models</p>
                      <p>Data Normalization</p>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="hidden md:block text-primary">→</div>
                  <div className="block md:hidden text-primary">↓</div>

                  {/* Analysis Layer */}
                  <div className="flex flex-col items-center text-center">
                    <div className="w-full max-w-[200px] aspect-square bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <div className="text-primary font-semibold">Analysis</div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <p>Sentiment Scoring</p>
                      <p>Emotion Detection</p>
                      <p>Pattern Recognition</p>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="hidden md:block text-primary">→</div>
                  <div className="block md:hidden text-primary">↓</div>

                  {/* Results Layer */}
                  <div className="flex flex-col items-center text-center">
                    <div className="w-full max-w-[200px] aspect-square bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <div className="text-primary font-semibold">Results</div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <p>Visualizations</p>
                      <p>Clinical Insights</p>
                      <p>Recommendations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-card border rounded-xl p-6 md:p-8">
            <h3 className="text-xl font-bold mb-4">Frontend Architecture</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>React.js with Next.js for server-side rendering</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Tailwind CSS for responsive, modern UI design</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Interactive components for text analysis and surveys</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Data visualization with Chart.js or D3.js</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Progressive Web App capabilities for offline access</span>
              </li>
            </ul>
          </div>

          <div className="bg-card border rounded-xl p-6 md:p-8">
            <h3 className="text-xl font-bold mb-4">Backend Architecture</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Node.js + Express for API endpoints and routing</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>MongoDB for storing user data and analysis results</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Python FastAPI microservice for ML model execution</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>JWT authentication for secure access control</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>RESTful API design with comprehensive documentation</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
