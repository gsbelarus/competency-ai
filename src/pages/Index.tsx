import { useState } from "react";
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
  const [activeCluster, setActiveCluster] = useState<number | null>(null);

  const handleZoneSelect = (zoneName: string) => {
    // Find cluster index containing this zone
    const clusterMap: Record<string, number> = {
      "Подбор и адаптация": 0, "Обучение и развитие": 0, "Менеджмент": 0, "Ключевые эксперты": 0, "Корпоративная культура": 0,
      "Производство": 1, "Охрана труда": 1, "Качество и стандарты": 1, "Подрядчики": 1, "Региональные офисы": 1,
      "Продажи и сервис": 2, "Контактный центр": 2,
      "ИТ-безопасность": 3, "Финансы и комплаенс": 3, "Юридическая функция": 3, "Корпоративные ИТ-системы": 3,
    };
    // Handle partial matches
    let idx = clusterMap[zoneName];
    if (idx === undefined) {
      for (const [key, val] of Object.entries(clusterMap)) {
        if (key.includes(zoneName) || zoneName.includes(key)) { idx = val; break; }
      }
    }
    if (idx !== undefined) {
      setActiveCluster(idx);
      setTimeout(() => {
        document.getElementById("zones")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <AssessmentFormats />
      <StepFlow />
      <BusinessZones activeCluster={activeCluster} setActiveCluster={setActiveCluster} />
      <PainFilters onZoneSelect={handleZoneSelect} />
      <FAQSection />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;

export default Index;
