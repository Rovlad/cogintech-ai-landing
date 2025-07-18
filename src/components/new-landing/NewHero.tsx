import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const NewHero = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-cogintech-teal/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-cogintech-blue/10 rounded-full blur-3xl"></div>
      
      <div className="container relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 max-w-2xl">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight lg:text-5xl">
                <span className="text-red-600">Stop losing $40M/yr</span><br />
                to sudden failures
              </h1>
              <p className="text-xl text-foreground/80">
                Cut unplanned downtime by <span className="font-semibold text-cogintech-orange">30%</span> and save <span className="font-semibold text-green-600">$10M</span> with AI-powered integrity management.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-cogintech-orange hover:bg-cogintech-orange/90 text-white font-medium px-8 py-6"
                onClick={() => {
                  // TODO: Open HubSpot popup with 4 fields (name, email, role, company)
                  document.getElementById('demo-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Book 15-min Live Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-cogintech-blue text-cogintech-blue hover:bg-cogintech-blue/5 font-medium px-8 py-6"
                onClick={() => document.getElementById('sandbox')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Try Sandbox
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-8 pt-4 text-sm">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mr-3">
                  <span className="text-red-600 font-bold">-30%</span>
                </div>
                <span>Downtime Reduction</span>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                  <span className="text-green-600 font-bold">$10M</span>
                </div>
                <span>Annual Savings</span>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-bold">95%+</span>
                </div>
                <span>Accuracy Rate</span>
              </div>
            </div>
          </div>
          
          <div className="relative aspect-[3/2] rounded-xl overflow-hidden bg-gradient-to-b from-gray-200 to-gray-300">
            <img 
              src="/lovable-uploads/import_pdf.gif" 
              alt="Drag & drop to dashboard workflow demonstration" 
              className="w-full h-full object-contain" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewHero;