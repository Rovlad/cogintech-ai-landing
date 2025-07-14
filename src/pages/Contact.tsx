
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
import { YandexSmartCaptcha } from "@/components/SmartCaptcha";

const Contact = () => {
  const [agreements, setAgreements] = useState({
    privacyPolicy: false,
    termsOfService: false
  });
  const [captchaToken, setCaptchaToken] = useState<string>("");
  
  const handleAgreementChange = (field: 'privacyPolicy' | 'termsOfService') => (checked: boolean) => {
    setAgreements(prev => ({
      ...prev,
      [field]: checked
    }));
    // Сбрасываем токен капчи если снимаем галку
    if (!checked) {
      setCaptchaToken("");
    }
  };
  
  const isFormValid = agreements.privacyPolicy && agreements.termsOfService && captchaToken;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-64 md:h-80 bg-gradient-to-r from-cogintech-blue to-cogintech-orange flex items-center">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2426&q=80" 
              alt="Contact Us - Technology Office" 
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="container relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Get in touch with our AI experts and discover how we can transform your industrial operations
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-bold mb-4">Let's Talk</h2>
                <p className="text-lg mb-8">
                  Have questions about our AI-powered solutions? Get in touch with our team, and we'll be happy to help.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Headquarters</h3>
                    <address className="not-italic">
                      Mansion House<br />
                      Manchester Road<br />
                      Altrincham<br />
                      Cheshire<br />
                      WA14 4RW<br />
                      United Kingdom
                    </address>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Email</h3>
                    <p>vr@cogintech.com</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-card p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block mb-1 font-medium">First Name</label>
                      <input type="text" id="firstName" className="w-full p-2 border border-border rounded-md" placeholder="Enter your first name" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block mb-1 font-medium">Last Name</label>
                      <input type="text" id="lastName" className="w-full p-2 border border-border rounded-md" placeholder="Enter your last name" />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block mb-1 font-medium">Company</label>
                    <input type="text" id="company" className="w-full p-2 border border-border rounded-md" placeholder="Enter your company name" />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-1 font-medium">Email</label>
                    <input type="email" id="email" className="w-full p-2 border border-border rounded-md" placeholder="Enter your email address" />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block mb-1 font-medium">Phone</label>
                    <input type="tel" id="phone" className="w-full p-2 border border-border rounded-md" placeholder="Enter your phone number" />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block mb-1 font-medium">Message</label>
                    <textarea id="message" rows={4} className="w-full p-2 border border-border rounded-md" placeholder="How can we help you?"></textarea>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Checkbox 
                        id="contact-privacy-policy"
                        checked={agreements.privacyPolicy}
                        onCheckedChange={handleAgreementChange('privacyPolicy')}
                        className="mt-1"
                      />
                      <label htmlFor="contact-privacy-policy" className="text-sm leading-relaxed">
                        I agree to the{' '}
                        <Link 
                          to="/privacy-policy" 
                          className="text-cogintech-blue hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Privacy Policy
                        </Link>
                      </label>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Checkbox 
                        id="contact-terms-of-service"
                        checked={agreements.termsOfService}
                        onCheckedChange={handleAgreementChange('termsOfService')}
                        className="mt-1"
                      />
                      <label htmlFor="contact-terms-of-service" className="text-sm leading-relaxed">
                        I agree to the{' '}
                        <Link 
                          to="/terms-of-service" 
                          className="text-cogintech-blue hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Terms of Service
                        </Link>
                      </label>
                    </div>
                  </div>

                  {agreements.privacyPolicy && agreements.termsOfService && (
                    <YandexSmartCaptcha onSuccess={setCaptchaToken} />
                  )}
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-cogintech-orange hover:bg-cogintech-orange/90 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={!isFormValid}
                  >
                    Submit
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
