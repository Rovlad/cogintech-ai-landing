import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Cookie Policy</h1>
        
        <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
          <p>
            This Cookie Policy (hereinafter – Policy) describes the types of Cookies, purposes of their use, 
            how the Company processes data collected during the use of the website by Visitors and ways to 
            opt out of Cookie processing.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Terms and Definitions</h2>
          <p>The following terms are used in this Policy:</p>
          
          <p><strong>Company</strong> – Cogintech.ltd</p>
          
          <p><strong>Site Visitor (Visitor)</strong> – a person who has visited and uses the Site.</p>
          
          <p>
            <strong>Site</strong> – a set of software and hardware for computers that ensure publication 
            for public viewing of information and data, united by a common purpose, through technical means 
            used for communication between computers on the Internet network. The Site is located on the 
            Internet at: cogintech.com
          </p>
          
          <p>
            <strong>Cookies</strong> – a small piece of data that the Site requests from the browser used 
            on the Visitor's computer or mobile device. Cookies reflect the Visitor's preferences or 
            actions on the Site, as well as information about their equipment, date and time of the session. 
            Cookies are stored locally on the Visitor's computer or mobile device. The Visitor can delete 
            saved Cookies in the settings of the corresponding browser.
          </p>
          
          <p>
            <strong>IP address</strong> – a unique network address of a node in a computer network built 
            on the IP protocol.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. General Provisions</h2>
          <p>
            When first visiting the Site using a new browser or in private browsing mode, a banner is 
            provided that warns the Visitor about the collection of Cookies and requests the Visitor's 
            consent to process their Cookies.
          </p>
          
          <p>
            By clicking the "Accept All" button or continuing to use the Site, the Visitor provides 
            consent to the processing of their Cookies and confirms agreement with the provisions of 
            this Policy. Continuing to use the Site means the Visitor following any link posted on 
            the Site, or clicking any button on the Site, as well as viewing content on any page of the Site.
          </p>
          
          <p>
            The Visitor may refuse to use Cookies in their browser settings (you can learn about this 
            option in the "Help" section of the corresponding browser). In this case, the Site will use 
            only those Cookies that are strictly necessary for its functioning and the services it offers, 
            however, such refusal may lead to incorrect operation of the Site.
          </p>
          
          <p>
            The Policy applies only to the Site. The Company does not control and is not responsible 
            for third-party sites that the Visitor may navigate to via links available on the Site.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. Data Processing on the Site</h2>
          <p>
            The Policy establishes the Company's obligations for non-disclosure and ensuring the 
            protection of confidentiality of Visitor data that the Company may receive during the 
            Visitor's visit to the Site.
          </p>
          
          <p>The Company protects data that is automatically transmitted to it when the Visitor visits Site pages on which a statistical script system ("pixel") is installed, including:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>IP address</li>
            <li>Browser information and page address (or other program that accesses the Site display)</li>
            <li>Access time</li>
            <li>Referrer (address of the previous page)</li>
            <li>Other information from Cookies (depending on the type of Cookies listed in section 4 of the Policy)</li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Types of Cookies Used by the Company</h2>
          
          <h3 className="text-xl font-medium text-foreground mt-6 mb-3">4.1 Session Cookies</h3>
          <p>
            Such Cookies exist only in temporary memory during the time when the Visitor is on the 
            Site page. Browsers usually delete session Cookies after the Visitor closes the Site window. 
            Session Cookies allow the Site to remember information about the Visitor's choice on the 
            previous Site page to avoid the need to re-enter information.
          </p>
          
          <h3 className="text-xl font-medium text-foreground mt-6 mb-3">4.2 Persistent Cookies</h3>
          <p>
            Cookies that are stored on the Visitor's computer and are not deleted when the browser 
            is closed. Persistent Cookies can save user settings for the Site, allowing these preferences 
            to be used in future browsing sessions. Such Cookies allow identifying the Visitor as a 
            unique user of the Site, and when returning to the Site help remember information about 
            the Visitor and previously performed actions.
          </p>
          
          <h3 className="text-xl font-medium text-foreground mt-6 mb-3">4.3 Statistical Cookies</h3>
          <p>
            Such Cookies include information about how the Visitor uses the Site. For example, which 
            pages the Visitor visits, which links they follow. The main purpose of such Cookies is 
            to improve Site functions.
          </p>
          
          <h3 className="text-xl font-medium text-foreground mt-6 mb-3">4.4 Essential Cookies</h3>
          <p>
            The minimum set of Cookies whose use is necessary for the correct operation of the Site.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Purposes of Visitor Data Collection</h2>
          <p>Cookies are used by the Company to improve the operation of the Site.</p>
          <p>
            Information about Visitors' actions is processed to improve the Company's products and 
            services, determine Visitors' preferences, and provide targeted information about the 
            Company's products and services.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">6. Additional Terms</h2>
          <p>The Site owner has the right to make changes to the Policy.</p>
          <p>
            The new Policy takes effect from the date of its posting on the Site, unless otherwise 
            provided by the new version of the Policy.
          </p>
          <p>The current Policy is posted on the Internet at: cogintech.com</p>
          <p>
            If you have questions related to the processing of Visitor personal data or the exercise 
            of personal data subject rights, the Visitor may contact the Company by sending a request 
            to the email address: cogintech@gmail.com. The response time to the request is 10 (ten) working days.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CookiePolicy;