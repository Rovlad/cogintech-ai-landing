import Navbar from "@/components/Navbar";
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