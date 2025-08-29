import { Search, Timer, Target } from "lucide-react";

const PainAmplifier = () => {
  const painPoints = [
    {
      icon: Search,
      title: "Document Search",
      description: "Engineers spend up to 30% of their time searching across PDFs, spreadsheets and folders."
    },
    {
      icon: Timer,
      title: "Slow Delivery",
      description: "Client reports take weeks, slowing delivery and hurting satisfaction."
    },
    {
      icon: Target,
      title: "Inconsistent Quality",
      description: "Inconsistent documentation makes quality and compliance hard to guarantee."
    }
  ];

  return (
    <section id="problem" className="py-16 bg-gradient-to-b from-background to-gray-50/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Why service companies lose <span className="text-red-600">time and margin</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Three critical gaps are eating into your engineering productivity and client satisfaction.
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
        
        {/* Optional pull quote */}
        <div className="mt-16 text-center">
          <blockquote className="text-lg italic text-foreground/60 max-w-2xl mx-auto">
            "We spend hours just finding past reports."
          </blockquote>
          <p className="text-sm text-foreground/50 mt-2">— Service company owner</p>
        </div>
      </div>
    </section>
  );
};

export default PainAmplifier;