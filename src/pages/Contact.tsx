
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
import { useSecureForm } from "@/hooks/useSecureForm";
import { useEmailValidation } from "@/hooks/useEmailValidation";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const { validateEmail } = useEmailValidation();
  const { csrfToken, isSubmitting, honeypot, setHoneypot, submitForm } = useSecureForm({ formType: 'contact' });
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [agreements, setAgreements] = useState({
    privacyPolicy: false,
    termsOfService: false
  });
  
  const [emailValidation, setEmailValidation] = useState<{isValid: boolean, error?: string}>({ isValid: true });
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Валидация email в реальном времени
    if (name === 'email' && value) {
      const validation = await validateEmail(value);
      setEmailValidation(validation);
    } else if (name === 'email' && !value) {
      setEmailValidation({ isValid: true });
    }
  };
  
  const handleAgreementChange = (field: 'privacyPolicy' | 'termsOfService') => (checked: boolean) => {
    setAgreements(prev => ({
      ...prev,
      [field]: checked
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Проверяем валидность email перед отправкой
    if (!emailValidation.isValid) {
      toast({
        title: "Invalid Email",
        description: emailValidation.error || "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }

    const success = await submitForm(formData);
    
    if (success) {
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        phone: '',
        message: ''
      });
      
      // Reset agreements
      setAgreements({
        privacyPolicy: false,
        termsOfService: false
      });
      setEmailValidation({ isValid: true });
    }
  };
  
  const isFormValid = agreements.privacyPolicy && agreements.termsOfService;
  
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
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot field - скрытое поле для защиты от ботов */}
                  <div style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none' }}>
                    <label htmlFor="contact-website">Website (do not fill this out)</label>
                    <input
                      type="text"
                      id="contact-website"
                      name="website"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block mb-1 font-medium">First Name</label>
                      <input 
                        type="text" 
                        id="firstName" 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full p-2 border border-border rounded-md" 
                        placeholder="Enter your first name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block mb-1 font-medium">Last Name</label>
                      <input 
                        type="text" 
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange} 
                        className="w-full p-2 border border-border rounded-md" 
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block mb-1 font-medium">Company</label>
                    <input 
                      type="text" 
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange} 
                      className="w-full p-2 border border-border rounded-md" 
                      placeholder="Enter your company name" 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-1 font-medium">Email</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange} 
                      className={`w-full p-2 border border-border rounded-md ${
                        !emailValidation.isValid ? 'border-red-500' : ''
                      }`}
                      placeholder="Enter your email address"
                      required
                    />
                    {!emailValidation.isValid && emailValidation.error && (
                      <p className="text-red-500 text-sm mt-1">{emailValidation.error}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block mb-1 font-medium">Phone</label>
                    <input 
                      type="tel" 
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange} 
                      className="w-full p-2 border border-border rounded-md" 
                      placeholder="Enter your phone number" 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block mb-1 font-medium">Message</label>
                    <textarea 
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange} 
                      rows={4} 
                      className="w-full p-2 border border-border rounded-md" 
                      placeholder="How can we help you?"
                    />
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

                   <Button 
                     type="submit" 
                     className="w-full bg-cogintech-orange hover:bg-cogintech-orange/90 disabled:opacity-50 disabled:cursor-not-allowed"
                     disabled={isSubmitting || !isFormValid || !emailValidation.isValid || !csrfToken}
                   >
                     {isSubmitting ? "Submitting..." : "Submit"}
                   </Button>
                  
                  {/* CSRF токен (скрытое поле) */}
                  <input type="hidden" name="csrf_token" value={csrfToken} />
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
