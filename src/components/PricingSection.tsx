
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  const features = [
    "AI-powered inspection analysis",
    "24-hour report delivery for critical findings",
    "Multi-agent verification system (95%+ accuracy)",
    "Natural language data querying",
    "Unlimited users and analysis requests",
    "Customized reporting templates",
    "Historical data integration",
    "API access for your systems"
  ];

  return (
    <section id="pricing" className="section bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="section-title">
            Transparent <span className="text-cogintech-blue">Pricing</span> with Guaranteed ROI
          </h2>
          <p className="text-lg text-foreground/80">
            Our solution is priced to ensure you achieve at least a 25% cost reduction compared to your current process.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-cogintech-blue to-cogintech-teal rounded-xl overflow-hidden shadow-lg">
            <div className="bg-white/95 m-1 rounded-lg">
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Enterprise Solution</h3>
                    <p className="text-foreground/80">Tailored to your organization's specific needs</p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <div className="text-3xl font-bold text-cogintech-blue">Custom Pricing</div>
                    <div className="text-foreground/60">Guaranteed cost reduction</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-4 text-lg">Included Features:</h4>
                    <ul className="space-y-3">
                      {features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-cogintech-blue/5 rounded-lg p-6 border border-cogintech-blue/20">
                    <h4 className="font-semibold mb-4 text-lg">Our Pricing Promise:</h4>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-cogintech-blue/10 flex items-center justify-center mr-3 flex-shrink-0">
                          <span className="text-cogintech-blue font-bold">1</span>
                        </div>
                        <span>Our solution will be <span className="font-semibold">at least 25% cheaper</span> than your current inspection analysis process.</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-cogintech-blue/10 flex items-center justify-center mr-3 flex-shrink-0">
                          <span className="text-cogintech-blue font-bold">2</span>
                        </div>
                        <span><span className="font-semibold">Fixed-price data migration</span> ensures predictable onboarding costs with no surprises.</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-cogintech-blue/10 flex items-center justify-center mr-3 flex-shrink-0">
                          <span className="text-cogintech-blue font-bold">3</span>
                        </div>
                        <span>Flexible payment options including per-report, subscription, or enterprise licensing.</span>
                      </li>
                    </ul>
                    
                    <div className="mt-6">
                      <Button 
                        className="w-full bg-cogintech-orange hover:bg-cogintech-orange/90 text-white"
                        onClick={() => document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })}
                      >
                        Request Custom Quote
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center max-w-2xl mx-auto">
            <p className="text-lg">
              Not ready for a full implementation? Ask about our <span className="font-semibold text-cogintech-blue">proof-of-concept package</span> to test our solution with your actual inspection data.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
