import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const PricingSandbox = () => {
  return (
    <section id="sandbox" className="py-16">
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
              <div className="space-y-2">
                <Label htmlFor="sandbox-email">Work Email</Label>
                <Input 
                  id="sandbox-email" 
                  type="email" 
                  placeholder="your.email@company.com"
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sandbox-company">Company Name</Label>
                <Input 
                  id="sandbox-company" 
                  type="text" 
                  placeholder="Your Company"
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sandbox-role">Your Role</Label>
                <Input 
                  id="sandbox-role" 
                  type="text" 
                  placeholder="e.g., Integrity Engineer"
                  required 
                />
              </div>
              <Button 
                className="w-full bg-cogintech-orange hover:bg-cogintech-orange/90 text-white"
                onClick={() => {
                  // TODO: Implement sandbox form submission
                  alert('Sandbox access will be implemented with form handling');
                }}
              >
                Get Instant Sandbox Access
              </Button>
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