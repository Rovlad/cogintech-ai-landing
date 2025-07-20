
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import CookieConsent from "./components/CookieConsent";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import OurTeam from "./pages/OurTeam";
import Careers from "./pages/Careers";
import News from "./pages/News";
import Contact from "./pages/Contact";
import CaseStudies from "./pages/CaseStudies";
import Technology from "./pages/Technology";
import Blog from "./pages/Blog";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import NewLanding from "./pages/NewLanding";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<NewLanding />} />
          <Route path="/old-landing" element={<Index />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CookieConsent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
