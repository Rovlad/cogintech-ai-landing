
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
              <li><a href="#" className="hover:text-cogintech-teal transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-cogintech-teal transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-cogintech-teal transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-cogintech-teal transition-colors">News</a></li>
              <li><a href="#" className="hover:text-cogintech-teal transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-cogintech-teal transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-cogintech-teal transition-colors">Technology</a></li>
              <li><a href="#" className="hover:text-cogintech-teal transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-cogintech-teal transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-cogintech-teal transition-colors">Terms of Service</a></li>
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
