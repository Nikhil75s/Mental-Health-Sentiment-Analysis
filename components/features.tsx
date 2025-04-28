import { Globe, BarChart3, Shield, Cloud, Zap, FileText, Layers, RefreshCw } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Real-time & Batch Analysis",
    description: "Process text inputs instantly or analyze large datasets in batch mode for comprehensive insights.",
  },
  {
    icon: Globe,
    title: "Multilingual Support",
    description:
      "Analyze text in multiple languages to serve diverse populations and global mental health initiatives.",
  },
  {
    icon: Layers,
    title: "Emotion Classification",
    description: "Identify specific emotional states including anxiety, depression, stress, and positive sentiments.",
  },
  {
    icon: FileText,
    title: "Medical Survey Integration",
    description: "Incorporate standardized assessments like PHQ-9 and GAD-7 with automatic scoring and interpretation.",
  },
  {
    icon: BarChart3,
    title: "Visualization Dashboards",
    description: "Track mental health trends over time with intuitive charts and actionable insights.",
  },
  {
    icon: Cloud,
    title: "Secure Cloud Deployment",
    description: "Access the system from anywhere with enterprise-grade security and data protection.",
  },
  {
    icon: RefreshCw,
    title: "API Integration",
    description: "Seamlessly connect with existing health platforms and electronic health records.",
  },
  {
    icon: Shield,
    title: "Privacy-Focused Design",
    description: "Built with data protection and patient confidentiality as core principles.",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Features</h2>
          <p className="text-lg text-muted-foreground">
            Our mental health sentiment analysis system offers a wide range of capabilities designed for clinical and
            personal use.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card border rounded-xl p-6 transition-all hover:shadow-md hover:border-primary/50"
            >
              <feature.icon className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
