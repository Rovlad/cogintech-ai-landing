
import Navbar from "@/components/Navbar";
import SEOHead from "@/components/SEOHead";
import NewHero from "@/components/new-landing/NewHero";
import PainAmplifier from "@/components/new-landing/PainAmplifier";
import ValueMetrics from "@/components/new-landing/ValueMetrics";
import HowItWorks from "@/components/new-landing/HowItWorks";
import MCPSection from "@/components/new-landing/MCPSection";
import EarlyAdopters from "@/components/new-landing/SocialProof";
import SecurityAndIntegration from "@/components/new-landing/SecurityAndIntegration";
import BookDemo from "@/components/new-landing/BookDemo";
import FAQ from "@/components/new-landing/FAQ";
import Footer from "@/components/Footer";

const NewLanding = () => {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <SEOHead 
        title="AI for Engineering Services – Faster Reporting & Consistent Quality"
        description="Cut reporting time from weeks to days. AI-powered tools for engineering service companies: faster reports, less manual work, higher client trust."
        keywords="AI for engineering services, engineering document management, inspection report automation, faster client reporting, test access AI platform, demo AI for service companies, engineering productivity tool, reduce reporting time engineering, standardize report quality, AI for technical documentation"
        ogTitle="AI for Engineering Services – Faster Reporting & Consistent Quality"
        ogDescription="Cut reporting time from weeks to days. AI-powered tools for engineering service companies: faster reports, less manual work, higher client trust."
        ogImage="/lovable-uploads/22fc09d7-63fe-4527-885a-d78c38ec2e86.png"
      />
      <Navbar />
        <NewHero />
        <PainAmplifier />
        <ValueMetrics />
        <HowItWorks />
        <MCPSection />
        <EarlyAdopters />
        <SecurityAndIntegration />
        <BookDemo />
        <FAQ />
      <Footer />
    </div>
  );
};

export default NewLanding;
