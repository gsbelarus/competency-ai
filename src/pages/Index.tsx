import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import BusinessZones from "@/components/BusinessZones";
import AntiCheat from "@/components/AntiCheat";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <BusinessZones />
      <Features />
      <AntiCheat />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
