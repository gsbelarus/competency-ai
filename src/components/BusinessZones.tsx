import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ArrowRight, Users, Cog, ShoppingCart, ShieldCheck } from "lucide-react";

import recruitmentImg from "@/assets/zones/recruitment.jpg";
import trainingImg from "@/assets/zones/training.jpg";
import productionImg from "@/assets/zones/production.jpg";
import safetyImg from "@/assets/zones/safety.jpg";
import itSecurityImg from "@/assets/zones/it-security.jpg";
import financeImg from "@/assets/zones/finance.jpg";
import salesImg from "@/assets/zones/sales.jpg";
import managementImg from "@/assets/zones/management.jpg";
import legalImg from "@/assets/zones/legal.jpg";
import qualityImg from "@/assets/zones/quality.jpg";
import erpSystemsImg from "@/assets/zones/erp-systems.jpg";
import cultureImg from "@/assets/zones/culture.jpg";
import contractorsImg from "@/assets/zones/contractors.jpg";
import expertsImg from "@/assets/zones/experts.jpg";
import callCenterImg from "@/assets/zones/call-center.jpg";
import regionalImg from "@/assets/zones/regional.jpg";

interface Zone {
  image: string;
  title: string;
  category: string;
  goal: string;
}

interface Cluster {
  icon: typeof Users;
  title: string;
  color: "primary" | "accent" | "chart-3" | "chart-4";
  zones: Zone[];
}

const clusters: Cluster[] = [
  {
    icon: Users,
    title: "Люди и развитие",
    color: "primary",
    zones: [
      { image: recruitmentImg, title: "Подбор и адаптация", category: "HR / Recruitment", goal: "Снижение риска ошибочного найма" },
      { image: trainingImg, title: "Обучение и развитие", category: "L&D / Training", goal: "Измеримая эффективность обучения" },
      { image: managementImg, title: "Менеджмент", category: "Management", goal: "Выравнивание управленческого уровня" },
      { image: expertsImg, title: "Ключевые эксперты", category: "Critical Roles", goal: "Снижение bus-factor" },
      { image: cultureImg, title: "Корпоративная культура", category: "Culture & Ethics", goal: "Снижение репутационных рисков" },
    ],
  },
  {
    icon: Cog,
    title: "Операции и безопасность",
    color: "accent",
    zones: [
      { image: productionImg, title: "Производство", category: "Operations", goal: "Снижение брака и аварий" },
      { image: safetyImg, title: "Охрана труда", category: "HSE / BHP", goal: "Снижение травматизма" },
      { image: qualityImg, title: "Качество и стандарты", category: "QA / ISO / GMP", goal: "Успешное прохождение аудитов" },
      { image: contractorsImg, title: "Подрядчики и партнёры", category: "Outsourcing", goal: "Контроль рисков вне штата" },
      { image: regionalImg, title: "Региональные представители", category: "Regional Offices", goal: "Единые стандарты в регионах" },
    ],
  },
  {
    icon: ShoppingCart,
    title: "Коммерция и клиент",
    color: "chart-3",
    zones: [
      { image: salesImg, title: "Продажи и сервис", category: "Sales / CS", goal: "Повышение конверсии" },
      { image: callCenterImg, title: "Контактный центр", category: "Call Center", goal: "Повышение качества обслуживания" },
    ],
  },
  {
    icon: ShieldCheck,
    title: "Управление и контроль",
    color: "chart-4",
    zones: [
      { image: itSecurityImg, title: "ИТ и информационная безопасность", category: "IT / InfoSec", goal: "Снижение человеческого фактора" },
      { image: financeImg, title: "Финансы и комплаенс", category: "Finance / Compliance", goal: "Снижение регуляторных рисков" },
      { image: legalImg, title: "Юридическая функция", category: "Legal", goal: "Снижение правовых последствий" },
      { image: erpSystemsImg, title: "Корпоративные ИТ-системы", category: "ERP / CRM", goal: "Снижение потерь от ошибок" },
    ],
  },
];

const colorMap: Record<string, string> = {
  primary: "text-primary bg-primary/10 border-primary/20",
  accent: "text-accent bg-accent/10 border-accent/20",
  "chart-3": "text-[hsl(173,80%,40%)] bg-[hsl(173,80%,40%)]/10 border-[hsl(173,80%,40%)]/20",
  "chart-4": "text-[hsl(43,96%,56%)] bg-[hsl(43,96%,56%)]/10 border-[hsl(43,96%,56%)]/20",
};

const BusinessZones = () => {
  const [openCluster, setOpenCluster] = useState<number | null>(null);

  return (
    <section id="zones" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">16 бизнес-зон</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Охват всего{" "}
            <span className="gradient-text">предприятия</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            4 кластера покрывают все ключевые бизнес-процессы — от найма до комплаенса
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-4">
          {clusters.map((cluster, ci) => {
            const isOpen = openCluster === ci;
            const colors = colorMap[cluster.color];
            
            return (
              <div key={ci} className="rounded-xl border border-border/50 bg-card/50 overflow-hidden transition-all duration-300 hover:border-border">
                {/* Cluster Header */}
                <button
                  onClick={() => setOpenCluster(isOpen ? null : ci)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${colors}`}>
                      <cluster.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{cluster.title}</h3>
                      <span className="text-sm text-muted-foreground">{cluster.zones.length} зон</span>
                    </div>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Expanded Zones */}
                <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-6 pb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {cluster.zones.map((zone, zi) => (
                      <div
                        key={zi}
                        className="group flex items-start gap-3 p-4 rounded-lg border border-border/30 bg-background/50 hover:border-border hover:bg-background transition-all duration-200"
                      >
                        <img
                          src={zone.image}
                          alt={zone.title}
                          className="w-12 h-12 rounded-lg object-cover shrink-0"
                        />
                        <div className="min-w-0">
                          <h4 className="text-sm font-semibold text-foreground leading-tight mb-0.5">{zone.title}</h4>
                          <p className="text-xs text-muted-foreground mb-1">{zone.category}</p>
                          <p className="text-xs text-primary">{zone.goal}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BusinessZones;
