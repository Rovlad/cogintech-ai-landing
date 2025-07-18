import { AlertTriangle, FileX, Users } from "lucide-react";

const PainAmplifier = () => {
  const painPoints = [
    {
      icon: FileX,
      title: "Information Chaos",
      description: "Critical data scattered across multiple systems, making decisions slow and error-prone."
    },
    {
      icon: AlertTriangle,
      title: "No Holistic View",
      description: "Fragmented insights prevent seeing the full picture of equipment health and risk."
    },
    {
      icon: Users,
      title: "Overloaded Engineers",
      description: "Teams spend 70% of time searching for information instead of solving problems."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-gray-50/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Why do <span className="text-red-600">sudden failures</span> keep happening?
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Three critical gaps in traditional integrity management are costing your organization millions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <div key={index} className="text-center p-6 rounded-xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <point.icon className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{point.title}</h3>
              <p className="text-foreground/70">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainAmplifier;