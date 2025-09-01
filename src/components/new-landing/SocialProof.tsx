import { Button } from "@/components/ui/button";
import { Rocket, Users, Zap, CheckCircle, Play, Mail } from "lucide-react";

const EarlyAdopters = () => {
  return (
    <section id="early-adopters" className="py-20 bg-gradient-to-br from-cogintech-dark/95 via-cogintech-dark to-cogintech-blue/20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Be the First to Experience AI-Powered Engineering Services
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            We're opening a limited number of MVP slots this quarter:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Live Demo Card */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-8 text-center hover:bg-white/10 transition-all duration-300">
            <div className="w-16 h-16 bg-cogintech-orange/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-cogintech-orange" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">Live Demo with Your Team</h3>
            <p className="text-white/70 mb-6">
              Walk through a real scenario with your files.
            </p>
            <Button 
              size="lg"
              className="w-full bg-cogintech-orange hover:bg-cogintech-orange/90 text-white font-semibold"
              onClick={() => document.getElementById('demo-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book Demo
            </Button>
          </div>

          {/* Test Access Card */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-8 text-center hover:bg-white/10 transition-all duration-300">
            <div className="w-16 h-16 bg-cogintech-teal/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Play className="w-8 h-8 text-cogintech-teal" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">Test Access (Sandbox)</h3>
            <p className="text-white/70 mb-6">
              Hands-on with sample data. No setup required.
            </p>
            <Button 
              size="lg"
              variant="outline"
              className="w-full border-cogintech-teal bg-cogintech-teal/10 text-cogintech-teal hover:bg-cogintech-teal hover:text-white font-semibold"
              onClick={() => window.open('https://sandbox.cogintech.com', '_blank')}
            >
              Get Test Access
            </Button>
          </div>

          {/* Subscribe Card */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-8 text-center hover:bg-white/10 transition-all duration-300">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">Subscribe for Updates</h3>
            <p className="text-white/70 mb-6">
              Product news, features and tips.
            </p>
            <Button 
              size="lg"
              variant="outline"
              className="w-full border-white/40 text-white hover:bg-white/10 font-semibold"
              onClick={() => document.getElementById('newsletter-signup')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Subscribe to News
            </Button>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-4 bg-white/10 text-white px-8 py-4 rounded-full text-lg font-semibold">
            <Rocket className="w-6 h-6" />
            Limited slots available.
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarlyAdopters;