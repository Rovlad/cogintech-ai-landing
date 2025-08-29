
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleNewsletterSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    try {
      // Newsletter signup logic will go here
      toast({
        title: "Subscribed!",
        description: "You'll receive updates on new AI engineering features.",
      });
      setEmail("");
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <footer className="bg-cogintech-dark text-white/70 py-12 border-t border-white/10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-xl font-bold text-white">Cogintech</span>
              <span className="ml-1 text-cogintech-teal font-medium">Ltd.</span>
            </div>
            <p className="mb-6 max-w-md text-lg">
              Cogintech – AI-native document intelligence for engineering services.
            </p>
            
            {/* Newsletter Subscription */}
            <div id="newsletter-signup" className="mb-6">
              <h4 className="text-white font-semibold mb-3">Subscribe for Updates on AI Engineering Tools</h4>
              <form onSubmit={handleNewsletterSignup} className="flex gap-2 max-w-sm">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  required
                />
                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="bg-cogintech-teal hover:bg-cogintech-teal/90 text-white"
                >
                  {isLoading ? "..." : "Subscribe"}
                </Button>
              </form>
            </div>
            
            <div className="text-sm">
              © {currentYear} Cognitive Industrial Technologies Ltd. All rights reserved.
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about-us" className="hover:text-cogintech-teal transition-colors">About</Link></li>
              <li><Link to="/blog" className="hover:text-cogintech-teal transition-colors">Blog</Link></li>
              <li><Link to="/careers" className="hover:text-cogintech-teal transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-cogintech-teal transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy-policy" className="hover:text-cogintech-teal transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-cogintech-teal transition-colors">Terms of Service</Link></li>
              <li><Link to="/cookie-policy" className="hover:text-cogintech-teal transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/10 text-center text-sm">
          <div className="max-w-3xl mx-auto">
            <p>
              Our AI platform helps engineering service companies reduce reporting time, improve data reliability, and free engineers from routine tasks to focus on high-value client work.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
