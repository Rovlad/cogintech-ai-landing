
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-cogintech-dark text-white/70 py-12 border-t border-white/10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-xl font-bold text-white">Cogintech</span>
              <span className="ml-1 text-cogintech-teal font-medium">Ltd.</span>
            </div>
            <p className="mb-4 max-w-md">
              Transforming equipment integrity analysis with AI to reduce costs, improve accuracy, and deliver faster insights for the oil and gas industry.
            </p>
            <div className="text-sm">
              © {currentYear} Cognitive Industrial Technologies Ltd. All rights reserved.
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about-us" className="hover:text-cogintech-teal transition-colors">About Us</Link></li>
              <li><Link to="/our-team" className="hover:text-cogintech-teal transition-colors">Our Team</Link></li>
              <li><Link to="/careers" className="hover:text-cogintech-teal transition-colors">Careers</Link></li>
              <li><Link to="/news" className="hover:text-cogintech-teal transition-colors">News</Link></li>
              <li><Link to="/contact" className="hover:text-cogintech-teal transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/case-studies" className="hover:text-cogintech-teal transition-colors">Case Studies</Link></li>
              <li><Link to="/technology" className="hover:text-cogintech-teal transition-colors">Technology</Link></li>
              <li><Link to="/blog" className="hover:text-cogintech-teal transition-colors">Blog</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-cogintech-teal transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-cogintech-teal transition-colors">Terms of Service</Link></li>
              <li><Link to="/cookie-policy" className="hover:text-cogintech-teal transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/10 text-center text-sm">
          <div className="max-w-3xl mx-auto">
            <p>
              Cogintech is a registered trademark of Cognitive Industrial Technologies Ltd. Our AI-powered solutions help oil and gas companies reduce inspection costs, improve analysis accuracy, and accelerate report delivery.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
