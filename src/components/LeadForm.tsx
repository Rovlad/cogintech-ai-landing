import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { User } from "lucide-react";
import { Link } from "react-router-dom";
import { YandexSmartCaptcha, SmartCaptchaRef } from "./SmartCaptcha";
import { useSecureForm } from "@/hooks/useSecureForm";
import { useEmailValidation } from "@/hooks/useEmailValidation";
const LeadForm = () => {
  const { toast } = useToast();
  const { validateEmail } = useEmailValidation();
  const { csrfToken, isSubmitting, honeypot, setHoneypot, submitForm } = useSecureForm({ formType: 'lead' });
  
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    role: '',
    email: '',
    phone: '',
    comments: ''
  });
  
  const [agreements, setAgreements] = useState({
    privacyPolicy: false,
    termsOfService: false
  });
  
  const captchaRef = useRef<SmartCaptchaRef>(null);
  const [captchaToken, setCaptchaToken] = useState<string>("");
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
  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      role: value
    }));
  };
  
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

    // Если токена нет, запускаем капчу
    if (!captchaToken) {
      captchaRef.current?.execute();
      return;
    }

    const success = await submitForm(formData, captchaToken);
    
    if (success) {
      // Reset form
      setFormData({
        name: '',
        company: '',
        role: '',
        email: '',
        phone: '',
        comments: ''
      });
      
      // Reset agreements
      setAgreements({
        privacyPolicy: false,
        termsOfService: false
      });
      setCaptchaToken("");
      setEmailValidation({ isValid: true });
    }
  };
  
  const isFormValid = agreements.privacyPolicy && agreements.termsOfService;
  return <section id="lead-form" className="section bg-cogintech-dark text-white">
      <div className="container px-0 sm:px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-4 sm:px-0">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Inspection Process?
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Request a free consultation with our team to learn how Cogintech's AI solution can be tailored to your specific needs.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-cogintech-teal/20 flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <span className="text-cogintech-teal">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Free Initial Assessment</h3>
                    <p className="text-white/80">We'll evaluate your current process and provide a detailed cost-savings projection.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-cogintech-teal/20 flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <span className="text-cogintech-teal">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Custom Demo</h3>
                    <p className="text-white/80">See our AI analyze one of your actual inspection reports (under NDA).</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-cogintech-teal/20 flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <span className="text-cogintech-teal">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Implementation Plan</h3>
                    <p className="text-white/80">Receive a tailored proposal with clear timelines and fixed-price data migration.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 p-6 bg-white/5 border border-white/10 rounded-lg">
                <div className="flex items-center mb-4">
                  <User className="h-5 w-5 text-cogintech-teal mr-2" />
                  <span className="font-semibold">Contact Directly</span>
                </div>
                <p className="text-white/80 mb-3">
                  Prefer to speak with someone immediately? Reach out to our solutions team:
                </p>
                <div className="space-y-1 text-white/80">
                  <div>Email: <a href="mailto:vr@cogintech.com" className="text-cogintech-teal hover:underline">vr@cogintech.com</a></div>
                  
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-lg p-4 sm:p-8 w-full">
              <h3 className="text-2xl font-bold mb-6">Request a Free Consultation</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Honeypot field - скрытое поле для защиты от ботов */}
                <div style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none' }}>
                  <label htmlFor="website">Website (do not fill this out)</label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} required className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-cogintech-teal mt-1 w-full" placeholder="John Smith" />
                </div>
                
                <div>
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" name="company" value={formData.company} onChange={handleChange} required className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-cogintech-teal mt-1 w-full" placeholder="Acme Oil & Gas Ltd." />
                </div>
                
                <div>
                  <Label htmlFor="role">Your Role</Label>
                  <Select required onValueChange={handleSelectChange} value={formData.role}>
                    <SelectTrigger className="bg-white/10 border-white/20 text-white focus:ring-cogintech-teal mt-1 w-full">
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent className="bg-cogintech-dark border-white/20">
                      <SelectItem value="technical_lead">Technical Lead</SelectItem>
                      <SelectItem value="reliability_engineer">Reliability Engineer</SelectItem>
                      <SelectItem value="operations_manager">Operations Manager</SelectItem>
                      <SelectItem value="director">Director</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                    className={`bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-cogintech-teal mt-1 w-full ${
                      !emailValidation.isValid ? 'border-red-500' : ''
                    }`}
                    placeholder="vr@cogintech.com" 
                  />
                  {!emailValidation.isValid && emailValidation.error && (
                    <p className="text-red-400 text-sm mt-1">{emailValidation.error}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-cogintech-teal mt-1 w-full" placeholder="Enter your phone number" />
                </div>
                
                <div>
                  <Label htmlFor="comments">Additional Comments (Optional)</Label>
                  <Textarea id="comments" name="comments" value={formData.comments} onChange={handleChange} className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-cogintech-teal h-24 mt-1 w-full" placeholder="Tell us about your current inspection analysis process..." />
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Checkbox 
                      id="privacy-policy"
                      checked={agreements.privacyPolicy}
                      onCheckedChange={handleAgreementChange('privacyPolicy')}
                      className="mt-1"
                    />
                    <label htmlFor="privacy-policy" className="text-sm text-white/80 leading-relaxed">
                      I agree to the{' '}
                      <Link 
                        to="/privacy-policy" 
                        className="text-cogintech-teal hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Privacy Policy
                      </Link>
                    </label>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Checkbox 
                      id="terms-of-service"
                      checked={agreements.termsOfService}
                      onCheckedChange={handleAgreementChange('termsOfService')}
                      className="mt-1"
                    />
                    <label htmlFor="terms-of-service" className="text-sm text-white/80 leading-relaxed">
                      I agree to the{' '}
                      <Link 
                        to="/terms-of-service" 
                        className="text-cogintech-teal hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Terms of Service
                      </Link>
                    </label>
                  </div>
                </div>

                {/* Невидимая капча */}
                <YandexSmartCaptcha ref={captchaRef} onSuccess={setCaptchaToken} />
                
                <Button 
                  type="submit" 
                  className="w-full bg-cogintech-orange hover:bg-cogintech-orange/90 text-white disabled:opacity-50 disabled:cursor-not-allowed" 
                  disabled={isSubmitting || !isFormValid || !emailValidation.isValid || !csrfToken}
                >
                  {isSubmitting ? "Submitting..." : "Submit Request"}
                </Button>
                
                {/* CSRF токен (скрытое поле) */}
                <input type="hidden" name="csrf_token" value={csrfToken} />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default LeadForm;