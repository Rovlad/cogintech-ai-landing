import { MessageSquare, Zap, Brain } from "lucide-react";

const AIAssistant = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
            <MessageSquare className="w-8 h-8 text-primary" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Instant answers with our AI assistant
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Ask simple questions in natural language and get insights instantly. No special training required.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-background/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4 mx-auto">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Natural Language</h3>
              <p className="text-muted-foreground">
                Simply ask "Show me corrosion trends" or "What's the status of Pipeline A?" - no complex commands needed.
              </p>
            </div>
            
            <div className="bg-background/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
              <div className="flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-full mb-4 mx-auto">
                <Brain className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Instant Insights</h3>
              <p className="text-muted-foreground">
                Get immediate answers backed by AI analysis of your inspection data, reports, and historical trends.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAssistant;