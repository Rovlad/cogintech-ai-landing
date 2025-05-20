
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="py-4 border-b border-border sticky top-0 bg-background/95 backdrop-blur-sm z-50">
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/ad840850-7ba3-4ea9-94b2-bcc7d798cc9b.png" 
            alt="Cognitive Industrial Technologies Logo" 
            className="h-12 mr-2"
          />
          <div className="hidden lg:block">
            <span className="text-xl font-bold text-cogintech-blue">Cogintech</span>
            <span className="ml-1 text-cogintech-teal font-medium">Ltd.</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#solution" className="text-foreground/80 hover:text-cogintech-blue transition-colors">Solution</a>
          <a href="#demo" className="text-foreground/80 hover:text-cogintech-blue transition-colors">Demo</a>
          <a href="#testimonials" className="text-foreground/80 hover:text-cogintech-blue transition-colors">Results</a>
          <a href="#pricing" className="text-foreground/80 hover:text-cogintech-blue transition-colors">Pricing</a>
          <Button className="bg-cogintech-orange hover:bg-cogintech-orange/90">
            Request Consultation
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border animate-fade-in">
          <div className="container py-4 flex flex-col space-y-4">
            <a 
              href="#solution" 
              className="py-2 text-foreground/80 hover:text-cogintech-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Solution
            </a>
            <a 
              href="#demo" 
              className="py-2 text-foreground/80 hover:text-cogintech-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Demo
            </a>
            <a 
              href="#testimonials" 
              className="py-2 text-foreground/80 hover:text-cogintech-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Results
            </a>
            <a 
              href="#pricing" 
              className="py-2 text-foreground/80 hover:text-cogintech-blue transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <Button 
              className="bg-cogintech-orange hover:bg-cogintech-orange/90 w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Request Consultation
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
