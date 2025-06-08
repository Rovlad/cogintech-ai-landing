import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
const Contact = () => {
  return <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="section">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div>
                <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
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
                  
                  <Button type="submit" className="w-full bg-cogintech-orange hover:bg-cogintech-orange/90">
                    Submit
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>;
};
export default Contact;