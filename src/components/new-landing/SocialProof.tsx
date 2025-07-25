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
        
        
        <div className="bg-gradient-to-r from-cogintech-blue/10 to-cogintech-teal/10 rounded-xl p-8 text-center">
          <blockquote className="text-xl italic text-foreground/80 mb-4">
            "Cogintech's AI platform helped us reduce unplanned downtime by 35% in the first six months. 
            The ROI was immediate and substantial."
          </blockquote>
          <div className="flex items-center justify-center space-x-2">
            <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
            <div>
              <div className="font-semibold">VP of Operations</div>
              <div className="text-sm text-foreground/70">Major Oil & Gas Company</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;