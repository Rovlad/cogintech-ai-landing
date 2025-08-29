import { Calendar, Zap, Shield, DollarSign } from "lucide-react";

const ValueMetrics = () => {
  const metrics = [
    {
      value: "Up to 30%",
      label: "less engineering effort",
      description: "Reduce manual work with automated data processing and report generation",
      icon: Calendar
    },
    {
      value: "10×",
      label: "faster access to information",
      description: "Find critical documents and data in seconds, not hours",
      icon: Zap
    },
    {
      value: "Higher",
      label: "report consistency",
      description: "AI-powered standardization ensures reliable, client-ready outputs",
      icon: Shield
    },
    {
      value: "Shorter",
      label: "delivery cycles",
      description: "Get from raw data to professional reports in days, not weeks",
      icon: DollarSign
    }
  ];

  return (
    <section id="results" className="py-16 bg-gradient-to-b from-cogintech-blue/5 to-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Outcomes you can <span className="text-green-600">aim for</span> from day one
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Based on internal benchmarks and early user feedback.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center p-6 rounded-xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
                  <metric.icon className="h-6 w-6 text-green-600" />
                </div>
              </div>
              <div className="text-4xl font-bold text-cogintech-orange mb-2">
                {metric.value}
              </div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">
                {metric.label}
              </h3>
              <p className="text-sm text-foreground/70">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueMetrics;