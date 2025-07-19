const ValueMetrics = () => {
  const metrics = [
    {
      value: "30%",
      label: "Reduction in unplanned failures",
      description: "Prevent costly equipment breakdowns with predictive insights"
    },
    {
      value: "100x",
      label: "Faster information search",
      description: "Find critical documents and data in seconds, not hours"
    },
    {
      value: "95%+",
      label: "Analysis accuracy",
      description: "AI-powered precision in integrity assessments"
    },
    {
      value: "$10M",
      label: "Average annual savings",
      description: "Typical cost reduction from prevented failures and efficiency gains"
    }
  ];

  return (
    <section id="results" className="py-16 bg-gradient-to-b from-cogintech-blue/5 to-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Quantified <span className="text-green-600">value</span> from day one
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Real results from customers using our AI-powered integrity management platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center p-6 rounded-xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
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