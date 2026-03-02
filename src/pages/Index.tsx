import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import AssessmentFormats from "@/components/AssessmentFormats";
import StepFlow from "@/components/StepFlow";
import BusinessZones from "@/components/BusinessZones";
import PainFilters from "@/components/PainFilters";
import FAQSection from "@/components/FAQSection";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <AssessmentFormats />
      <StepFlow />
      <BusinessZones />
      <PainFilters />
      <FAQSection />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
