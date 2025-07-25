import { Button } from "@/components/ui/button";
import { Rocket, Users, Zap, CheckCircle } from "lucide-react";

const SocialProof = () => {
  return (
    <section id="testimonials" className="py-16">
      <div className="container">
        <div className="bg-gradient-to-br from-cogintech-blue/5 via-cogintech-teal/5 to-cogintech-blue/10 rounded-2xl border border-cogintech-blue/20 p-12 text-center relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-cogintech-blue/5 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-cogintech-teal/5 rounded-full translate-y-12 -translate-x-12"></div>
          
          <div className="relative z-10">
            <div className="flex justify-center mb-6">
              <div className="bg-cogintech-blue/10 p-4 rounded-full">
                <Rocket className="w-8 h-8 text-cogintech-blue" />
              </div>
            </div>
            
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cogintech-blue to-cogintech-teal bg-clip-text text-transparent">
              Join Early Adopters
            </h2>
            
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto mb-4">
              Be among the first to experience revolutionary AI-driven integrity management with leading enterprises.
            </p>
            
            <p className="text-sm font-semibold text-cogintech-blue/80 mb-8">
              Limited slots available
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-cogintech-teal" />
                <span className="text-foreground/80">Exclusive pilot access</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-cogintech-blue" />
                <span className="text-foreground/80">Direct expert support</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-cogintech-teal" />
                <span className="text-foreground/80">Early bird benefits</span>
              </div>
            </div>
            
            <Button 
              size="lg"
              className="bg-gradient-to-r from-cogintech-blue to-cogintech-teal hover:from-cogintech-blue/90 hover:to-cogintech-teal/90 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => document.getElementById('demo-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Join the Program
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;