
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <nav className="py-4 border-b border-border sticky top-0 bg-background/95 backdrop-blur-sm z-50">
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img 
              src="/lovable-uploads/ad840850-7ba3-4ea9-94b2-bcc7d798cc9b.png" 
              alt="Cognitive Industrial Technologies Logo" 
              className="h-12 mr-2"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {isHomePage ? (
            <>
              <a href="#solution" className="text-foreground/80 hover:text-cogintech-blue transition-colors">Solution</a>
              <a href="#demo" className="text-foreground/80 hover:text-cogintech-blue transition-colors">Demo</a>
              <a href="#testimonials" className="text-foreground/80 hover:text-cogintech-blue transition-colors">Results</a>
              <a href="#pricing" className="text-foreground/80 hover:text-cogintech-blue transition-colors">Pricing</a>
            </>
          ) : (
            <>
              <Link to="/about-us" className="text-foreground/80 hover:text-cogintech-blue transition-colors">About Us</Link>
              <Link to="/our-team" className="text-foreground/80 hover:text-cogintech-blue transition-colors">Our Team</Link>
              <Link to="/careers" className="text-foreground/80 hover:text-cogintech-blue transition-colors">Careers</Link>
              <Link to="/news" className="text-foreground/80 hover:text-cogintech-blue transition-colors">News</Link>
              <Link to="/contact" className="text-foreground/80 hover:text-cogintech-blue transition-colors">Contact</Link>
            </>
          )}
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
            {isHomePage ? (
              <>
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
              </>
            ) : (
              <>
                <Link 
                  to="/about-us" 
                  className="py-2 text-foreground/80 hover:text-cogintech-blue transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link 
                  to="/our-team" 
                  className="py-2 text-foreground/80 hover:text-cogintech-blue transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Our Team
                </Link>
                <Link 
                  to="/careers" 
                  className="py-2 text-foreground/80 hover:text-cogintech-blue transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Careers
                </Link>
                <Link 
                  to="/news" 
                  className="py-2 text-foreground/80 hover:text-cogintech-blue transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  News
                </Link>
                <Link 
                  to="/contact" 
                  className="py-2 text-foreground/80 hover:text-cogintech-blue transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </>
            )}
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
