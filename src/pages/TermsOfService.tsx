
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="section">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
              
              <div className="prose max-w-none">
                <p className="mb-4">Last Updated: May 20, 2025</p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
                <p className="mb-4">
                  Welcome to Cognitive Industrial Technologies Ltd. ("Cogintech", "we", "us", or "our"). These Terms of Service ("Terms") govern your access to and use of our website, products, and services, so please read them carefully.
                </p>
                <p className="mb-4">
                  By accessing or using our services, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use our services.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">2. Use of Services</h2>
                <p className="mb-4">
                  Our services are provided for business and professional use. You may use our services only as permitted by these Terms and any applicable law, regulation, or generally accepted practices or guidelines in the relevant jurisdictions.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">3. Your Account</h2>
                <p className="mb-4">
                  To access certain features of our services, you may need to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">4. Intellectual Property</h2>
                <p className="mb-4">
                  Our services and their contents, features, and functionality are owned by Cogintech and are protected by copyright, trademark, and other intellectual property laws. These Terms do not grant you any right, title, or interest in or to our services or their content.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">5. User Content</h2>
                <p className="mb-4">
                  You retain ownership of any content you submit to our services. By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, and distribute the content in connection with providing our services.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">6. Confidentiality</h2>
                <p className="mb-4">
                  We understand the sensitive nature of the industrial data processed through our services. We maintain strict confidentiality protocols and appropriate security measures to protect your data. For more information, please refer to our Privacy Policy.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">7. Limitation of Liability</h2>
                <p className="mb-4">
                  In no event shall Cogintech be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, or use, arising out of or in connection with these Terms or our services, whether based on contract, tort, negligence, strict liability, or otherwise.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">8. Disclaimer of Warranties</h2>
                <p className="mb-4">
                  Our services are provided "as is" and "as available" without any warranties of any kind, either express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">9. Termination</h2>
                <p className="mb-4">
                  We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms. Upon termination, your right to use our services will immediately cease.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">10. Governing Law</h2>
                <p className="mb-4">
                  These Terms shall be governed by and construed in accordance with the laws of the State of Texas, without regard to its conflict of law principles. Any dispute arising from these Terms shall be subject to the exclusive jurisdiction of the courts in Houston, Texas.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">11. Changes to Terms</h2>
                <p className="mb-4">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms on our website. Your continued use of our services after any such changes constitutes your acceptance of the new Terms.
                </p>
                
                <h2 className="text-2xl font-semibold mt-8 mb-4">12. Contact Us</h2>
                <p className="mb-4">
                  If you have any questions about these Terms, please contact us at:
                </p>
                <div className="bg-muted p-4 rounded-md mb-4">
                  <p>Email: legal@cogintech.com</p>
                  <p>Address: 1234 Technology Drive, Suite 500, Houston, TX 77002</p>
                  <p>Phone: +1 (713) 555-1234</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;
