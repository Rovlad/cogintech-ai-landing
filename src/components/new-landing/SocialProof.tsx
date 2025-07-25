import { Button } from "@/components/ui/button";

const SocialProof = () => {
  return (
    <section id="testimonials" className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Join Early Adopters
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            We are currently running pilot programs with leading enterprises. Join them and be among the first to experience AI-driven integrity management.
          </p>
        </div>
        
        <div className="text-center mb-8">
          <Button 
            variant="outline" 
            size="lg"
            className="border-cogintech-blue text-cogintech-blue hover:bg-cogintech-blue/5"
            onClick={() => document.getElementById('demo-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Join
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;