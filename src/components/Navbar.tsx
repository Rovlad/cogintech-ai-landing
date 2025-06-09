
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  // Определяем, находимся ли мы на страницах Company или Resources
  const companyPages = ['/about-us', '/our-team', '/careers', '/news', '/contact'];
  const resourcesPages = ['/case-studies', '/technology', '/blog', '/privacy-policy', '/terms-of-service'];
  
  const isCompanyPage = companyPages.includes(location.pathname);
  const isResourcesPage = resourcesPages.includes(location.pathname);

  const handleLogoClick = () => {
    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleRequestConsultation = () => {
    if (isHomePage) {
      document.getElementById('lead-form')?.scrollIntoView({
        behavior: 'smooth'
      });
    } else {
      // Navigate to home page and then scroll to form
      window.location.href = '/#lead-form';
    }
  };

  return (
    <nav className="py-3 border-b border-border sticky top-0 bg-background/95 backdrop-blur-sm z-50">
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" onClick={handleLogoClick}>
            <img 
              src="/lovable-uploads/ad840850-7ba3-4ea9-94b2-bcc7d798cc9b.png" 
              alt="Cognitive Industrial Technologies Logo" 
              className="h-10 mr-2"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          {isHomePage ? (
            <>
              <a href="#solution" className="text-base text-foreground/80 hover:text-cogintech-blue transition-colors">Solution</a>
              <a href="#demo" className="text-base text-foreground/80 hover:text-cogintech-blue transition-colors">Demo</a>
              <a href="#testimonials" className="text-base text-foreground/80 hover:text-cogintech-blue transition-colors">Results</a>
              <a href="#pricing" className="text-base text-foreground/80 hover:text-cogintech-blue transition-colors">Pricing</a>
              
              {/* Company Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-base text-foreground/80 hover:text-cogintech-blue transition-colors">
                  Company <ChevronDown className="ml-1 h-3 w-3" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-background border border-border shadow-lg z-50">
                  <DropdownMenuItem asChild>
                    <Link to="/about-us" className="cursor-pointer text-base">About Us</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/our-team" className="cursor-pointer text-base">Our Team</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/careers" className="cursor-pointer text-base">Careers</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/news" className="cursor-pointer text-base">News</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/contact" className="cursor-pointer text-base">Contact</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Resources Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-base text-foreground/80 hover:text-cogintech-blue transition-colors">
                  Resources <ChevronDown className="ml-1 h-3 w-3" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-background border border-border shadow-lg z-50">
                  <DropdownMenuItem asChild>
                    <Link to="/case-studies" className="cursor-pointer text-base">Case Studies</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/technology" className="cursor-pointer text-base">Technology</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/blog" className="cursor-pointer text-base">Blog</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/privacy-policy" className="cursor-pointer text-base">Privacy Policy</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/terms-of-service" className="cursor-pointer text-base">Terms of Service</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : isCompanyPage ? (
            <>
              <Link to="/" className="text-base text-foreground/80 hover:text-cogintech-blue transition-colors">Home</Link>
              <Link to="/about-us" className="text-base text-foreground/80 hover:text-cogintech-blue transition-colors">About Us</Link>
              <Link to="/our-team" className="text-base text-foreground/80 hover:text-cogintech-blue transition-colors">Our Team</Link>
              <Link to="/careers" className="text-base text-foreground/80 hover:text-cogintech-blue transition-colors">Careers</Link>
              <Link to="/news" className="text-base text-foreground/80 hover:text-cogintech-blue transition-colors">News</Link>
              <Link to="/contact" className="text-base text-foreground/80 hover:text-cogintech-blue transition-colors">Contact</Link>
              
              {/* Resources Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-base text-foreground/80 hover:text-cogintech-blue transition-colors">
                  Resources <ChevronDown className="ml-1 h-3 w-3" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-background border border-border shadow-lg z-50">
                  <DropdownMenuItem asChild>
                    <Link to="/case-studies" className="cursor-pointer text-base">Case Studies</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/technology" className="cursor-pointer text-base">Technology</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/blog" className="cursor-pointer text-base">Blog</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/privacy-policy" className="cursor-pointer text-base">Privacy Policy</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/terms-of-service" className="cursor-pointer text-base">Terms of Service</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : isResourcesPage ? (
            <>
              <Link to="/" className="text-base text-foreground/80 hover:text-cogintech-blue transition-colors">Home</Link>
              <Link to="/case-studies" className="text-base text-foreground/80 hover:text-cogintech-blue transition-colors">Case Studies</Link>
              <Link to="/technology" className="text-base text-foreground/80 hover:text-cogintech-blue transition-colors">Technology</Link>
              <Link to="/blog" className="text-base text-foreground/80 hover:text-cogintech-blue transition-colors">Blog</Link>
              <Link to="/privacy-policy" className="text-base text-foreground/80 hover:text-cogintech-blue transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="text-base text-foreground/80 hover:text-cogintech-blue transition-colors">Terms of Service</Link>
              
              {/* Company Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-base text-foreground/80 hover:text-cogintech-blue transition-colors">
                  Company <ChevronDown className="ml-1 h-3 w-3" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-background border border-border shadow-lg z-50">
                  <DropdownMenuItem asChild>
                    <Link to="/about-us" className="cursor-pointer text-base">About Us</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/our-team" className="cursor-pointer text-base">Our Team</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/careers" className="cursor-pointer text-base">Careers</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/news" className="cursor-pointer text-base">News</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/contact" className="cursor-pointer text-base">Contact</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              <Link to="/" className="text-base text-foreground/80 hover:text-cogintech-blue transition-colors">Home</Link>
              <Link to="/about-us" className="text-base text-foreground/80 hover:text-cogintech-blue transition-colors">About Us</Link>
              <Link to="/our-team" className="text-base text-foreground/80 hover:text-cogintech-blue transition-colors">Our Team</Link>
              <Link to="/careers" className="text-base text-foreground/80 hover:text-cogintech-blue transition-colors">Careers</Link>
              <Link to="/news" className="text-base text-foreground/80 hover:text-cogintech-blue transition-colors">News</Link>
              <Link to="/contact" className="text-base text-foreground/80 hover:text-cogintech-blue transition-colors">Contact</Link>
            </>
          )}
          <Button 
            className="bg-cogintech-orange hover:bg-cogintech-orange/90 text-base px-4 py-2"
            onClick={handleRequestConsultation}
          >
            Request Consultation
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 right-0 bg-background border-b border-border animate-fade-in z-50">
          <div className="container py-3 flex flex-col space-y-2">
            {isHomePage ? (
              <>
                <a 
                  href="#solution" 
                  className="py-1 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Solution
                </a>
                <a 
                  href="#demo" 
                  className="py-1 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Demo
                </a>
                <a 
                  href="#testimonials" 
                  className="py-1 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Results
                </a>
                <a 
                  href="#pricing" 
                  className="py-1 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Pricing
                </a>
                
                {/* Company Section in Mobile */}
                <div className="border-t border-border pt-3 mt-2">
                  <div className="text-xs font-semibold text-foreground mb-2">Company</div>
                  <Link 
                    to="/about-us" 
                    className="block py-1 pl-3 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About Us
                  </Link>
                  <Link 
                    to="/our-team" 
                    className="block py-1 pl-3 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Our Team
                  </Link>
                  <Link 
                    to="/careers" 
                    className="block py-1 pl-3 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Careers
                  </Link>
                  <Link 
                    to="/news" 
                    className="block py-1 pl-3 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    News
                  </Link>
                  <Link 
                    to="/contact" 
                    className="block py-1 pl-3 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </div>

                {/* Resources Section in Mobile */}
                <div className="border-t border-border pt-3 mt-2">
                  <div className="text-xs font-semibold text-foreground mb-2">Resources</div>
                  <Link 
                    to="/case-studies" 
                    className="block py-1 pl-3 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Case Studies
                  </Link>
                  <Link 
                    to="/technology" 
                    className="block py-1 pl-3 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Technology
                  </Link>
                  <Link 
                    to="/blog" 
                    className="block py-1 pl-3 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Blog
                  </Link>
                  <Link 
                    to="/privacy-policy" 
                    className="block py-1 pl-3 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Privacy Policy
                  </Link>
                  <Link 
                    to="/terms-of-service" 
                    className="block py-1 pl-3 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Terms of Service
                  </Link>
                </div>
              </>
            ) : isCompanyPage ? (
              <>
                <Link 
                  to="/" 
                  className="py-1 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/about-us" 
                  className="py-1 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link 
                  to="/our-team" 
                  className="py-1 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Our Team
                </Link>
                <Link 
                  to="/careers" 
                  className="py-1 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Careers
                </Link>
                <Link 
                  to="/news" 
                  className="py-1 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  News
                </Link>
                <Link 
                  to="/contact" 
                  className="py-1 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                
                {/* Resources Section in Mobile */}
                <div className="border-t border-border pt-3 mt-2">
                  <div className="text-xs font-semibold text-foreground mb-2">Resources</div>
                  <Link 
                    to="/case-studies" 
                    className="block py-1 pl-3 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Case Studies
                  </Link>
                  <Link 
                    to="/technology" 
                    className="block py-1 pl-3 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Technology
                  </Link>
                  <Link 
                    to="/blog" 
                    className="block py-1 pl-3 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Blog
                  </Link>
                  <Link 
                    to="/privacy-policy" 
                    className="block py-1 pl-3 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Privacy Policy
                  </Link>
                  <Link 
                    to="/terms-of-service" 
                    className="block py-1 pl-3 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Terms of Service
                  </Link>
                </div>
              </>
            ) : isResourcesPage ? (
              <>
                <Link 
                  to="/" 
                  className="py-1 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/case-studies" 
                  className="py-1 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Case Studies
                </Link>
                <Link 
                  to="/technology" 
                  className="py-1 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Technology
                </Link>
                <Link 
                  to="/blog" 
                  className="py-1 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link 
                  to="/privacy-policy" 
                  className="py-1 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Privacy Policy
                </Link>
                <Link 
                  to="/terms-of-service" 
                  className="py-1 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Terms of Service
                </Link>
                
                {/* Company Section in Mobile */}
                <div className="border-t border-border pt-3 mt-2">
                  <div className="text-xs font-semibold text-foreground mb-2">Company</div>
                  <Link 
                    to="/about-us" 
                    className="block py-1 pl-3 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About Us
                  </Link>
                  <Link 
                    to="/our-team" 
                    className="block py-1 pl-3 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Our Team
                  </Link>
                  <Link 
                    to="/careers" 
                    className="block py-1 pl-3 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Careers
                  </Link>
                  <Link 
                    to="/news" 
                    className="block py-1 pl-3 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    News
                  </Link>
                  <Link 
                    to="/contact" 
                    className="block py-1 pl-3 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </div>
              </>
            ) : (
              <>
                <Link 
                  to="/" 
                  className="py-1 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/about-us" 
                  className="py-1 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link 
                  to="/our-team" 
                  className="py-1 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Our Team
                </Link>
                <Link 
                  to="/careers" 
                  className="py-1 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Careers
                </Link>
                <Link 
                  to="/news" 
                  className="py-1 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  News
                </Link>
                <Link 
                  to="/contact" 
                  className="py-1 text-base text-foreground/80 hover:text-cogintech-blue transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </>
            )}
            <Button 
              className="bg-cogintech-orange hover:bg-cogintech-orange/90 w-full text-base mt-3"
              onClick={() => {
                setIsMenuOpen(false);
                handleRequestConsultation();
              }}
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
