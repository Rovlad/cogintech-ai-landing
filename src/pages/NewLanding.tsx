
import Navbar from "@/components/Navbar";
import SEOHead from "@/components/SEOHead";
import NewHero from "@/components/new-landing/NewHero";
import PainAmplifier from "@/components/new-landing/PainAmplifier";
import SolutionBlocks from "@/components/new-landing/SolutionBlocks";
import ValueMetrics from "@/components/new-landing/ValueMetrics";
import SocialProof from "@/components/new-landing/SocialProof";
import SecurityIT from "@/components/new-landing/SecurityIT";
import PricingSandbox from "@/components/new-landing/PricingSandbox";
import FAQ from "@/components/new-landing/FAQ";
import BookDemo from "@/components/new-landing/BookDemo";
import Footer from "@/components/Footer";

const NewLanding = () => {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <SEOHead 
        title="AI Integrity Platform – cut failures 30% | Cogintech"
        description="Stop losing $40M to unplanned shutdowns. Book a 15-min demo."
        keywords="AI inspection, corrosion analysis, pipeline inspection, NDT, artificial intelligence, industrial inspection, equipment integrity"
        ogTitle="AI Integrity Platform – cut failures 30%"
        ogDescription="Stop losing $40M to unplanned shutdowns. Book a 15-min demo."
        ogImage="/lovable-uploads/22fc09d7-63fe-4527-885a-d78c38ec2e86.png"
      />
      <Navbar />
      <NewHero />
      <PainAmplifier />
      <SolutionBlocks />
      <ValueMetrics />
      <SocialProof />
      <SecurityIT />
      <PricingSandbox />
      <FAQ />
      <BookDemo />
      <Footer />
    </div>
  );
};

export default NewLanding;
