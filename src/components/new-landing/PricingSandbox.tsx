import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useSecureForm } from "@/hooks/useSecureForm";
import { useEmailValidation } from "@/hooks/useEmailValidation";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const PricingSandbox = () => {
  const { toast } = useToast();
  const { validateEmail } = useEmailValidation();
  const { csrfToken, isSubmitting, honeypot, setHoneypot, submitForm } = useSecureForm({ formType: 'sandbox' });
  
  const [formData, setFormData] = useState({
    email: '',
    company: '',
    role: ''
  });
  
  const [agreements, setAgreements] = useState({
    privacyPolicy: false,
    termsOfService: false
  });
  
  const [emailValidation, setEmailValidation] = useState<{isValid: boolean, error?: string}>({ isValid: true });

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
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
        email: '',
        company: '',
        role: ''
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
    <section id="pricing" className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Try before you buy
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Get instant access to a read-only sandbox environment with sample data.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Pricing Info */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Enterprise Pricing</CardTitle>
                <CardDescription>
                  Flexible pricing based on your infrastructure scale
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Small operations (1-50 assets)</span>
                    <span className="font-semibold">$5K-15K/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Medium operations (50-200 assets)</span>
                    <span className="font-semibold">$15K-40K/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Large operations (200+ assets)</span>
                    <span className="font-semibold">Custom pricing</span>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <p className="text-sm text-foreground/70">
                    All plans include: AI analysis, 24/7 support, custom integrations, and dedicated success manager.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Sandbox Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Access Sandbox Environment</CardTitle>
              <CardDescription>
                Explore our platform with real-world sample data
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <form onSubmit={handleSubmit} className="space-y-4">
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

                <div className="space-y-2">
                  <Label htmlFor="sandbox-email">Work Email</Label>
                  <Input 
                    id="sandbox-email" 
                    name="email"
                    type="email" 
                    placeholder="your.email@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={!emailValidation.isValid ? 'border-red-500' : ''}
                  />
                  {!emailValidation.isValid && emailValidation.error && (
                    <p className="text-red-500 text-sm">{emailValidation.error}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="sandbox-company">Company Name</Label>
                  <Input 
                    id="sandbox-company" 
                    name="company"
                    type="text" 
                    placeholder="Your Company"
                    value={formData.company}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="sandbox-role">Your Role</Label>
                  <Input 
                    id="sandbox-role" 
                    name="role"
                    type="text" 
                    placeholder="e.g., Integrity Engineer"
                    value={formData.role}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Checkbox 
                      id="privacy-policy-sandbox"
                      checked={agreements.privacyPolicy}
                      onCheckedChange={handleAgreementChange('privacyPolicy')}
                      className="mt-1"
                    />
                    <label htmlFor="privacy-policy-sandbox" className="text-sm text-foreground/80 leading-relaxed">
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
                      id="terms-of-service-sandbox"
                      checked={agreements.termsOfService}
                      onCheckedChange={handleAgreementChange('termsOfService')}
                      className="mt-1"
                    />
                    <label htmlFor="terms-of-service-sandbox" className="text-sm text-foreground/80 leading-relaxed">
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

                <Button 
                  type="submit"
                  className="w-full bg-cogintech-orange hover:bg-cogintech-orange/90 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isSubmitting || !isFormValid || !emailValidation.isValid || !csrfToken}
                >
                  {isSubmitting ? "Submitting..." : "Get Instant Sandbox Access"}
                </Button>
                
                {/* CSRF токен (скрытое поле) */}
                <input type="hidden" name="csrf_token" value={csrfToken} />
              </form>
              <p className="text-xs text-foreground/60 text-center">
                You'll receive login credentials within 2 minutes
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSandbox;