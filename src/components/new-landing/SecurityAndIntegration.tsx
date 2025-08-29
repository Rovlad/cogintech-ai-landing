import React from "react";
import { Shield, Cloud, Users, Settings, Lock, Zap } from "lucide-react";

const SecurityAndIntegration = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-cogintech-light/20 via-background to-cogintech-blue/5">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Enterprise-Ready 
            <span className="text-cogintech-blue"> Security & Integration</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Built for engineering service companies that need both flexibility and security
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Cloud or On-Prem */}
          <div className="bg-card/50 backdrop-blur-sm border border-cogintech-blue/20 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-cogintech-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Cloud className="w-8 h-8 text-cogintech-blue" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-foreground">Cloud or On-Prem Deployment</h3>
            <p className="text-foreground/70">
              Choose between secure cloud hosting or on-premises deployment. 
              Both options provide the same powerful AI capabilities with enterprise-grade security.
            </p>
          </div>

          {/* Role-Based Access */}
          <div className="bg-card/50 backdrop-blur-sm border border-cogintech-teal/20 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-cogintech-teal/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-cogintech-teal" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-foreground">Role-Based Access Control</h3>
            <p className="text-foreground/70">
              Granular permissions ensure team members only access relevant projects and data. 
              Perfect for managing client confidentiality and project isolation.
            </p>
          </div>

          {/* Integration */}
          <div className="bg-card/50 backdrop-blur-sm border border-cogintech-blue/20 rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-cogintech-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Settings className="w-8 h-8 text-cogintech-blue" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-foreground">ERP, DMS, CMMS Integration</h3>
            <p className="text-foreground/70">
              Seamless API connections with your existing business systems. 
              No data silos, no manual imports – everything flows automatically.
            </p>
          </div>
        </div>

        {/* Security Features Grid */}
        <div className="bg-gradient-to-br from-cogintech-dark/10 to-cogintech-blue/10 rounded-2xl p-8 border border-cogintech-blue/20">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Enterprise Security Standards
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-cogintech-teal/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-cogintech-teal" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">SOC 2 Type II Compliant</h4>
                  <p className="text-foreground/70 text-sm">
                    Audited security controls and data protection measures
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-cogintech-blue/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Lock className="w-5 h-5 text-cogintech-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">End-to-End Encryption</h4>
                  <p className="text-foreground/70 text-sm">
                    AES-256 encryption in transit and at rest
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-cogintech-teal/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-cogintech-teal" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">GDPR & CCPA Ready</h4>
                  <p className="text-foreground/70 text-sm">
                    Full compliance with international data privacy regulations
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-cogintech-blue/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-cogintech-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Multi-Factor Authentication</h4>
                  <p className="text-foreground/70 text-sm">
                    SSO integration and MFA for enhanced security
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-cogintech-teal/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-cogintech-teal" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Regular Security Audits</h4>
                  <p className="text-foreground/70 text-sm">
                    Continuous monitoring and third-party security assessments
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-cogintech-blue/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Lock className="w-5 h-5 text-cogintech-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Data Isolation</h4>
                  <p className="text-foreground/70 text-sm">
                    Client data is completely isolated and never commingled
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            <strong>Peace of mind for your clients:</strong> All data processing happens in secure, 
            isolated environments with full audit trails and compliance documentation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SecurityAndIntegration;