
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemStatement from "@/components/ProblemStatement";
import Solution from "@/components/Solution";
import DemoSection from "@/components/DemoSection";
import Testimonials from "@/components/Testimonials";
import PricingSection from "@/components/PricingSection";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <Navbar />
      <Hero />
      <ProblemStatement />
      <Solution />
      <DemoSection />
      <Testimonials />
      <PricingSection />
      <LeadForm />
      <Footer />
    </div>
  );
};

export default Index;
