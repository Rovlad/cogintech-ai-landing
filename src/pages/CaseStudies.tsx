
import Navbar from "@/components/Navbar";
import SEOHead from "@/components/SEOHead";
import Footer from "@/components/Footer";
import { Clock, Sparkles } from "lucide-react";

const CaseStudies = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead 
        title="Customer Success Stories & ROI Results - Coming Soon | Cogintech"
        description="Real customer case studies showing 30% cost reduction, 95%+ accuracy, and $40M savings in unplanned shutdowns. Leading oil & gas companies trust Cogintech."
        keywords="case studies, customer success, ROI results, oil gas savings, equipment integrity ROI, NDT cost reduction"
        ogTitle="Customer Success Stories & ROI Results - Coming Soon"
        ogDescription="Real customer case studies showing 30% cost reduction and $40M savings in unplanned shutdowns."
        ogImage="/lovable-uploads/22fc09d7-63fe-4527-885a-d78c38ec2e86.png"
      />
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-br from-cogintech-blue/20 to-cogintech-teal/20 rounded-full animate-pulse"></div>
              </div>
              <div className="relative flex items-center justify-center">
                <div className="w-20 h-20 bg-gradient-to-br from-cogintech-blue to-cogintech-teal rounded-full flex items-center justify-center">
                  <Clock className="w-10 h-10 text-white" />
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-cogintech-teal" />
              <h1 className="text-5xl md:text-6xl font-bold gradient-text">
                Coming Soon
              </h1>
              <Sparkles className="w-6 h-6 text-cogintech-blue" />
            </div>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              We're working on something amazing
            </p>
            
            <div className="bg-card rounded-lg p-8 shadow-md border">
              <h2 className="text-2xl font-semibold mb-4">Case Studies</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Discover how leading oil and gas companies are achieving significant cost savings and safety improvements with our AI-powered equipment integrity solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="text-sm text-muted-foreground">
                  📊 Real customer results
                </div>
                <div className="text-sm text-muted-foreground">
                  💰 Cost reduction metrics
                </div>
                <div className="text-sm text-muted-foreground">
                  🛡️ Safety improvements
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <p className="text-sm text-muted-foreground">
                Want to be notified when our case studies are published?{" "}
                <a href="/contact" className="text-cogintech-blue hover:underline font-medium">
                  Contact us
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CaseStudies;
