import { ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const NewHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-cogintech-teal/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-cogintech-blue/10 rounded-full blur-3xl"></div>
      
      <div className="container relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
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
          </div>
          
          <div className="relative aspect-[2/1] rounded-xl overflow-hidden bg-white border border-gray-200 cursor-pointer hover:opacity-90 transition-opacity shadow-sm" onClick={() => setIsModalOpen(true)}>
            <img 
              src="/lovable-uploads/dashboard.png" 
              alt="Drag & drop to dashboard workflow demonstration" 
              className="w-full h-full object-contain" 
            />
          </div>
        </div>
        
        {/* Statistics row spanning full width */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-4">
              <span className="text-red-600 font-bold text-lg">-30%</span>
            </div>
            <span className="text-lg font-medium">Downtime Reduction</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <span className="text-green-600 font-bold text-lg">$10M</span>
            </div>
            <span className="text-lg font-medium">Annual Savings</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <span className="text-blue-600 font-bold text-lg">95%+</span>
            </div>
            <span className="text-lg font-medium">Accuracy Rate</span>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50" onClick={() => setIsModalOpen(false)}>
          <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/40 text-white rounded-full p-3 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            <img 
              src="/lovable-uploads/dashboard.png" 
              alt="Drag & drop to dashboard workflow demonstration" 
              className="max-w-full max-h-full object-contain" 
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default NewHero;