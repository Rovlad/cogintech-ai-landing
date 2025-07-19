import { Shield, Server, Lock, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const SecurityIT = () => {
  const { toast } = useToast();
  const features = [
    {
      icon: Server,
      title: "Flexible Deployment",
      description: "On-premises, cloud, or hybrid deployment options to meet your security requirements."
    },
    {
      icon: Lock,
      title: "Enterprise Security",
      description: "Encryption at rest and in transit, with SOC-2 compliance certification in progress."
    },
    {
      icon: Shield,
      title: "Data Protection",
      description: "Your data stays under your control. We provide the tools, you own the insights."
    },
    {
      icon: FileText,
      title: "API Integration",
      description: "Seamless integration with existing systems through comprehensive REST APIs."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-gray-50/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Built for <span className="text-cogintech-blue">enterprise security</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            IT and InfoSec approved architecture with enterprise-grade security and compliance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4 p-6 rounded-xl bg-white shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-cogintech-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <feature.icon className="h-6 w-6 text-cogintech-blue" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-foreground/70">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            className="border-cogintech-blue text-cogintech-blue hover:bg-cogintech-blue/5"
            onClick={() => {
              toast({
                title: "Coming Soon",
                description: "API Documentation is coming soon! Stay tuned for updates.",
              });
            }}
          >
            View API Documentation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SecurityIT;