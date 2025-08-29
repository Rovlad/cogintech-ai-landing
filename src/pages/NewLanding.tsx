
import Navbar from "@/components/Navbar";
import SEOHead from "@/components/SEOHead";
import NewHero from "@/components/new-landing/NewHero";
import PainAmplifier from "@/components/new-landing/PainAmplifier";
import ValueMetrics from "@/components/new-landing/ValueMetrics";
import HowItWorks from "@/components/new-landing/HowItWorks";
import EarlyAdopters from "@/components/new-landing/SocialProof";
import SecurityAndIntegration from "@/components/new-landing/SecurityAndIntegration";
import BookDemo from "@/components/new-landing/BookDemo";
import FAQ from "@/components/new-landing/FAQ";
import Footer from "@/components/Footer";

const NewLanding = () => {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <SEOHead 
        title="Double Your Engineering Productivity with AI | Cogintech"
        description="Cut reporting time from weeks to days. Free up your engineers and impress your clients. Book a 15-min demo."
        keywords="AI for engineering service companies, engineering productivity AI, inspection report automation demo, AI demo engineering services, test access AI platform, subscribe engineering AI news"
        ogTitle="Double Your Engineering Productivity with AI"
        ogDescription="Cut reporting time from weeks to days. Free up your engineers and impress your clients."
        ogImage="/lovable-uploads/22fc09d7-63fe-4527-885a-d78c38ec2e86.png"
      />
      <Navbar />
        <NewHero />
        <PainAmplifier />
        <ValueMetrics />
        <HowItWorks />
        <EarlyAdopters />
        <SecurityAndIntegration />
        <BookDemo />
        <FAQ />
      <Footer />
    </div>
  );
};

export default NewLanding;
