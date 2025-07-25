import React, { useState } from "react";
import { Shield, Server, Lock, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import { useSecureForm } from "@/hooks/useSecureForm";

const SecurityIT = () => {
  const { toast } = useToast();
  const { submitForm, isSubmitting, honeypot, setHoneypot } = useSecureForm({ 
    formType: 'api-subscription' 
  });
  
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  
  const [agreements, setAgreements] = useState({
    privacyPolicy: false,
    termsOfService: false
  });
  
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAgreementChange = (field: 'privacyPolicy' | 'termsOfService') => (checked: boolean) => {
    setAgreements(prev => ({
      ...prev,
      [field]: checked
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!agreements.privacyPolicy || !agreements.termsOfService) {
      toast({
        title: "Agreement Required",
        description: "Please accept both Privacy Policy and Terms of Service",
        variant: "destructive"
      });
      return;
    }

    const success = await submitForm({
      ...formData,
      comment: "API news subscription"
    });

    if (success) {
      setFormData({ name: '', email: '' });
      setAgreements({ privacyPolicy: false, termsOfService: false });
      setIsDialogOpen(false);
    }
  };

  const isFormValid = formData.name && formData.email && agreements.privacyPolicy && agreements.termsOfService;
  const features = [
    {
      icon: Server,
      title: "Flexible Deployment",
      description: "On-premises, cloud, or hybrid deployment options to meet your security requirements."
    },
    {
      icon: Lock,
      title: "Enterprise Security",
      description: "Encryption at rest and in transit, with SOC-2 compliance certification in progress."
    },
    {
      icon: Shield,
      title: "Data Protection",
      description: "Your data stays under your control. We provide the tools, you own the insights."
    },
    {
      icon: FileText,
      title: "API Integration",
      description: "Seamless integration with existing systems through comprehensive REST APIs."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-gray-50/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Built for <span className="text-cogintech-blue">enterprise security</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            IT and InfoSec approved architecture with enterprise-grade security and compliance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4 p-6 rounded-xl bg-white shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-cogintech-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <feature.icon className="h-6 w-6 text-cogintech-blue" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-foreground/70">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button 
                variant="outline" 
                size="lg"
                className="border-cogintech-blue text-cogintech-blue hover:bg-cogintech-blue/5"
              >
                View API Documentation
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>API Documentation Coming Soon</DialogTitle>
              </DialogHeader>
              
              <div className="space-y-6">
                <p className="text-foreground/70">
                  Our comprehensive API documentation is in development. Subscribe to get notified when it's available!
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input 
                      id="name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      required 
                      placeholder="Enter your name"
                      className="mt-1"
                    />
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
                      placeholder="Enter your email"
                      className="mt-1"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <Checkbox 
                        id="privacy-policy"
                        checked={agreements.privacyPolicy}
                        onCheckedChange={handleAgreementChange('privacyPolicy')}
                        className="mt-1"
                      />
                      <label htmlFor="privacy-policy" className="text-sm text-foreground/70 leading-relaxed">
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
                        id="terms-of-service"
                        checked={agreements.termsOfService}
                        onCheckedChange={handleAgreementChange('termsOfService')}
                        className="mt-1"
                      />
                      <label htmlFor="terms-of-service" className="text-sm text-foreground/70 leading-relaxed">
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

                  {/* Honeypot field - hidden from users */}
                  <input
                    type="text"
                    name="website"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    style={{ display: 'none' }}
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={!isFormValid || isSubmitting}
                  >
                    {isSubmitting ? "Subscribing..." : "Subscribe for Updates"}
                  </Button>
                </form>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default SecurityIT;