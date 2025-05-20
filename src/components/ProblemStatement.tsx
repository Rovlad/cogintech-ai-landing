
import { Card, CardContent } from "@/components/ui/card";

const ProblemStatement = () => {
  const problems = [
    {
      title: "High Expert Labor Costs",
      description: "Traditional analysis requires highly specialized engineers, leading to significant labor expenses and resource constraints."
    },
    {
      title: "Slow Report Delivery",
      description: "Manual inspection analysis takes 30-60 days, delaying critical maintenance decisions and increasing risk exposure."
    },
    {
      title: "Human Error Risk",
      description: "Even experienced engineers can miss critical details when reviewing thousands of data points from complex inspections."
    },
    {
      title: "Disorganized Data",
      description: "Historical inspection records stored across multiple systems create information silos and hinder comprehensive analysis."
    },
    {
      title: "Inconsistent Reporting",
      description: "Varying formats and standards across reports make it difficult to compare results and identify trends over time."
    },
    {
      title: "Limited Quality Control in Review",
      description: "Typically, reports are reviewed only once by a single expert, which limits verification. Without layered, repeated checks, issues can slip through — compromising safety and increasing liability."
    }
  ];

  return (
    <section className="section bg-gradient-to-b from-background to-muted">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="section-title">
            The <span className="text-cogintech-blue">Challenges</span> in Equipment Integrity Management
          </h2>
          <p className="text-lg text-foreground/80">
            Oil and gas companies face significant inefficiencies and risks in their current inspection processes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <Card key={index} className="border border-border hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-cogintech-blue/10 flex items-center justify-center mb-4">
                  <span className="text-cogintech-blue font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{problem.title}</h3>
                <p className="text-foreground/80">{problem.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center">
          <div className="bg-cogintech-dark/5 rounded-lg p-6 border border-cogintech-blue/20">
            <h3 className="text-xl font-semibold mb-3">The Result?</h3>
            <p className="text-lg">
              Companies are <span className="font-semibold text-cogintech-blue">overspending on analysis</span>, while 
              still facing <span className="font-semibold text-cogintech-blue">delayed insights</span> and 
              <span className="font-semibold text-cogintech-blue"> increased safety risks</span> due to outdated reporting processes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
