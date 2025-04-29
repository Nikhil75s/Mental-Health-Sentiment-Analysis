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
      </div>
    </section>
  )
}
