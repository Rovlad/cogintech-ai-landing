import React, { useState } from "react";
import { ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

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
                <span className="bg-gradient-to-r from-cogintech-blue to-cogintech-teal bg-clip-text text-transparent">Double Your Engineering Productivity</span><br />
                with AI
              </h1>
              <p className="text-xl text-foreground/80">
                AI-Powered Engineering Workbench for Oil & Gas Engineers - <span className="font-semibold text-cogintech-teal">Boost your engineering team efficiency by 30% with intelligent document and data management and AI assistants and tools</span>
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-cogintech-orange hover:bg-cogintech-orange/90 text-white font-medium px-8 py-6"
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Test Access
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-cogintech-blue text-cogintech-blue hover:bg-cogintech-blue/5 font-medium px-8 py-6"
                onClick={() => document.getElementById('book-demo')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book a 15-min Demo
              </Button>
            </div>
          </div>
          
          <div 
            className="relative aspect-[2/1] rounded-xl overflow-hidden bg-white border border-gray-200 cursor-pointer hover:opacity-90 transition-opacity shadow-sm" 
            onClick={() => setIsModalOpen(true)}
            role="button"
            tabIndex={0}
            aria-label="Открыть видео демонстрацию загрузки файла в дашборд"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setIsModalOpen(true);
              }
            }}
          >
            <video 
              src="/lovable-uploads/file_to_dashboard.mp4"
              autoPlay 
              muted 
              loop 
              playsInline
              className="w-full h-full object-contain"
              aria-label="Демонстрация: перетаскивание файла в дашборд"
            />
          </div>
        </div>
        
        {/* Statistics row spanning full width */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-cogintech-orange/20 flex items-center justify-center">
              <span className="text-cogintech-orange font-bold text-sm">30%</span>
            </div>
            <div className="text-2xl font-bold text-cogintech-orange mb-1">Up to 30%</div>
            <div className="text-sm text-foreground/70">less engineering effort</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-cogintech-teal/20 flex items-center justify-center">
              <span className="text-cogintech-teal font-bold text-sm">10×</span>
            </div>
            <div className="text-2xl font-bold text-cogintech-teal mb-1">10× faster</div>
            <div className="text-sm text-foreground/70">access to information</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-cogintech-blue/20 flex items-center justify-center">
              <span className="text-cogintech-blue font-bold text-xs">95%+</span>
            </div>
            <div className="text-2xl font-bold text-cogintech-blue mb-1">Higher</div>
            <div className="text-sm text-foreground/70">report consistency</div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50" onClick={() => setIsModalOpen(false)}>
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/40 text-white rounded-full p-3 transition-colors"
              aria-label="Закрыть видео"
              title="Закрыть видео"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
            <div className="w-full h-full flex items-center justify-center">
              <video 
                src="/lovable-uploads/file_to_dashboard.mp4" 
                autoPlay 
                muted 
                loop 
                playsInline
                className="w-auto h-auto max-w-full max-h-full object-contain" 
                style={{ maxWidth: '95vw', maxHeight: '95vh' }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default NewHero;