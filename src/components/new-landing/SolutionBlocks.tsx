import { Button } from "@/components/ui/button";
import { FileText, BarChart3, Brain, X } from "lucide-react";
import { useState } from "react";

const SolutionBlocks = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const solutions = [
    {
      icon: FileText,
      title: "Document Manager",
      description: "Centralize all integrity documents with AI-powered search and instant access to critical information.",
      benefits: "Find any document in seconds, not hours.",
      video: "/lovable-uploads/import_pdf.mp4", // MP4 video
      ctaText: "See Document Manager"
    },
    {
      icon: BarChart3,
      title: "Dashboard + AI Assistant",
      description: "Real-time equipment health monitoring with intelligent insights and predictive alerts.",
      benefits: "Prevent failures before they happen.",
      video: "/lovable-uploads/dashboard.mp4", // MP4 video
      ctaText: "View Dashboard Demo"
    },
    {
      icon: Brain,
      title: "Smart AI Tools",
      description: "Advanced corrosion loop analysis and risk assessment. Recent case: prevented $30k failure at offshore platform.",
      benefits: "AI-powered analysis saves millions.",
      video: "/lovable-uploads/corrosion_loops.mp4", // MP4 video
      ctaText: "Try AI Tools"
    }
  ];

  return (
    <section id="solution" className="py-16">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            See how <span className="gradient-text">AI transforms</span> your workflow
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Three core tools that eliminate information chaos and prevent costly failures.
          </p>
        </div>
        
        <div className="space-y-24">
          {solutions.map((solution, index) => (
            <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-cogintech-orange/10 rounded-lg flex items-center justify-center">
                    <solution.icon className="h-6 w-6 text-cogintech-orange" />
                  </div>
                  <h3 className="text-2xl font-bold">{solution.title}</h3>
                </div>
                
                <p className="text-lg text-foreground/80">{solution.description}</p>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-green-700 font-medium">{solution.benefits}</p>
                </div>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-cogintech-blue text-cogintech-blue hover:bg-cogintech-blue/5"
                  onClick={() => document.getElementById('demo-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {solution.ctaText}
                </Button>
              </div>
              
              <div 
                className={`relative aspect-[2/1] rounded-xl overflow-hidden bg-white border border-gray-200 shadow-sm cursor-pointer hover:opacity-90 transition-opacity ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}
                onClick={() => {
                  setSelectedImage(solution.video);
                  setIsModalOpen(true);
                }}
                role="button"
                tabIndex={0}
                aria-label={`Открыть видео демонстрацию: ${solution.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedImage(solution.video);
                    setIsModalOpen(true);
                  }
                }}
              >
                <video 
                  src={solution.video} 
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                  className="w-full h-full object-contain"
                  aria-label={`Демонстрация: ${solution.title}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50" onClick={() => setIsModalOpen(false)}>
          <div className="relative w-full h-full flex items-center justify-center p-4" onClick={(e) => e.stopPropagation()}>
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
                src={selectedImage} 
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

export default SolutionBlocks;