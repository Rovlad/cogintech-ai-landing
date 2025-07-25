import { Button } from "@/components/ui/button";
import { MessageSquare, X } from "lucide-react";
import { useState } from "react";

const AIAssistant = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const solution = {
    icon: MessageSquare,
    title: "AI Assistant",
    description: "Ask simple questions in natural language and get insights instantly. No special training required.",
    benefits: "Get instant answers from your data without complex commands.",
    video: "/lovable-uploads/dashboard.mp4", // Using Dashboard + AI Assistant video
    ctaText: "Try AI Assistant"
  };

  return (
    <section className="py-16">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-cogintech-orange/10 rounded-lg flex items-center justify-center">
                <solution.icon className="h-6 w-6 text-cogintech-orange" />
              </div>
              <h3 className="text-2xl font-bold">Instant answers with our {solution.title}</h3>
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
            className="relative aspect-[2/1] rounded-xl overflow-hidden bg-white border border-gray-200 shadow-sm cursor-pointer hover:opacity-90 transition-opacity"
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

export default AIAssistant;