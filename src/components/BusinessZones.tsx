import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Users, Cog, ShoppingCart, ShieldCheck } from "lucide-react";

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
  description: string;
  goal: string;
}

const clusters = [
  {
    icon: Users,
    title: "Люди и развитие",
    color: "primary" as const,
    zones: [
      { image: recruitmentImg, title: "Подбор и адаптация", category: "HR", description: "Оценка hard- и soft-skills кандидатов до оффера. Выявление несоответствий профилю должности и снижение текучести на испытательном сроке.", goal: "Снижение риска ошибочного найма" },
      { image: trainingImg, title: "Обучение и развитие", category: "L&D", description: "Проверка усвоения материала после тренингов и курсов. Объективное измерение прогресса и выявление пробелов в знаниях.", goal: "Измеримая эффективность обучения" },
      { image: managementImg, title: "Менеджмент", category: "Management", description: "Диагностика управленческих компетенций руководителей всех уровней. Выявление зон роста и формирование индивидуальных планов развития.", goal: "Выравнивание управленческого уровня" },
      { image: expertsImg, title: "Ключевые эксперты", category: "Critical", description: "Документирование и верификация экспертных знаний критически важных сотрудников. Подготовка преемников и снижение зависимости от отдельных людей.", goal: "Снижение bus-factor" },
      { image: cultureImg, title: "Корпоративная культура", category: "Culture", description: "Проверка знания ценностей, политик и стандартов поведения компании. Раннее выявление рисков нарушения этических норм.", goal: "Снижение репутационных рисков" },
    ],
  },
  {
    icon: Cog,
    title: "Операции и безопасность",
    color: "accent" as const,
    zones: [
      { image: productionImg, title: "Производство", category: "Operations", description: "Контроль знания технологических процессов и регламентов. Предотвращение ошибок, ведущих к браку и простоям оборудования.", goal: "Снижение брака и аварий" },
      { image: safetyImg, title: "Охрана труда", category: "HSE", description: "Регулярная проверка знаний правил безопасности и действий в аварийных ситуациях. Соответствие требованиям надзорных органов.", goal: "Снижение травматизма" },
      { image: qualityImg, title: "Качество и стандарты", category: "QA/ISO", description: "Верификация знания стандартов ISO, ГОСТ и внутренних СОП. Подготовка персонала к внешним и внутренним аудитам.", goal: "Успешное прохождение аудитов" },
      { image: contractorsImg, title: "Подрядчики", category: "Outsource", description: "Проверка квалификации и знания стандартов компании у внешних подрядчиков перед допуском к работам.", goal: "Контроль рисков вне штата" },
      { image: regionalImg, title: "Региональные офисы", category: "Regional", description: "Единые стандарты оценки для распределённых команд. Контроль уровня компетенций вне зависимости от географии.", goal: "Единые стандарты" },
    ],
  },
  {
    icon: ShoppingCart,
    title: "Коммерция и клиент",
    color: "chart-3" as const,
    zones: [
      { image: salesImg, title: "Продажи и сервис", category: "Sales", description: "Оценка знания продуктовой линейки, техник продаж и стандартов обслуживания. Выявление точек роста для увеличения конверсии.", goal: "Повышение конверсии" },
      { image: callCenterImg, title: "Контактный центр", category: "Call Center", description: "Проверка скриптов, знания продуктов и навыков работы с возражениями. Контроль качества коммуникации с клиентами.", goal: "Качество обслуживания" },
    ],
  },
  {
    icon: ShieldCheck,
    title: "Управление и контроль",
    color: "chart-4" as const,
    zones: [
      { image: itSecurityImg, title: "ИТ-безопасность", category: "InfoSec", description: "Проверка знания политик информационной безопасности, правил работы с данными и реагирования на инциденты.", goal: "Снижение человеческого фактора" },
      { image: financeImg, title: "Финансы и комплаенс", category: "Compliance", description: "Контроль знания регуляторных требований, правил AML/KYC и внутренних финансовых процедур.", goal: "Снижение регуляторных рисков" },
      { image: legalImg, title: "Юридическая функция", category: "Legal", description: "Верификация знания законодательства, договорных процессов и политик комплаенса юридической командой.", goal: "Снижение правовых рисков" },
      { image: erpSystemsImg, title: "ИТ-системы", category: "ERP/CRM", description: "Проверка навыков работы в корпоративных системах: ERP, CRM, BI. Снижение ошибок ввода данных и ускорение адаптации.", goal: "Снижение потерь от ошибок" },
    ],
  },
];

const colorStyles: Record<string, { accent: string; bg: string; border: string }> = {
  primary: { accent: "text-primary", bg: "bg-primary/10", border: "border-primary/20" },
  accent: { accent: "text-accent", bg: "bg-accent/10", border: "border-accent/20" },
  "chart-3": { accent: "text-[hsl(173,80%,40%)]", bg: "bg-[hsl(173,80%,40%)]/10", border: "border-[hsl(173,80%,40%)]/20" },
  "chart-4": { accent: "text-[hsl(43,96%,56%)]", bg: "bg-[hsl(43,96%,56%)]/10", border: "border-[hsl(43,96%,56%)]/20" },
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
            4 кластера покрывают все ключевые процессы
          </p>
        </div>

        {/* Hexagonal cluster grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {clusters.map((cluster, ci) => {
            const isOpen = openCluster === ci;
            const cs = colorStyles[cluster.color];

            return (
              <div
                key={ci}
                className={`relative overflow-hidden rounded-2xl transition-all duration-500 ${
                  isOpen ? "md:col-span-2" : ""
                }`}
              >
                {/* Cluster button */}
                <button
                  onClick={() => setOpenCluster(isOpen ? null : ci)}
                  className={`w-full p-8 text-left transition-all duration-300 border rounded-2xl ${
                    isOpen ? `${cs.border} bg-card/80` : "border-border/30 bg-card/40 hover:bg-card/60 hover:border-border"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-2xl ${cs.bg} flex items-center justify-center`}>
                        <cluster.icon className={`w-7 h-7 ${cs.accent}`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{cluster.title}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-sm text-muted-foreground">{cluster.zones.length} зон</span>
                          <span className="text-muted-foreground/30">•</span>
                          <span className={`text-xs font-medium ${cs.accent}`}>
                            {cluster.zones.map(z => z.category).join(" · ")}
                          </span>
                        </div>
                      </div>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                  </div>

                  {/* Expanded zones */}
                  {isOpen && (
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 animate-fade-in" onClick={e => e.stopPropagation()}>
                      {cluster.zones.map((zone, zi) => (
                        <div
                          key={zi}
                          className="group/zone relative overflow-hidden rounded-xl bg-background/50 hover:bg-background transition-all duration-300"
                        >
                          {/* Zone image strip */}
                          <div className="h-24 overflow-hidden">
                            <img
                              src={zone.image}
                              alt={zone.title}
                              className="w-full h-full object-cover group-hover/zone:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 h-24 bg-gradient-to-t from-background/90 to-transparent" />
                          </div>

                          <div className="p-4 -mt-6 relative z-10">
                            <h4 className="text-sm font-semibold text-foreground mb-1">{zone.title}</h4>
                            <p className={`text-xs ${cs.accent} mb-3`}>{zone.goal}</p>
                            <div className="flex gap-2">
                              <Button variant="default" size="sm" className="text-xs h-7 px-3">Пройти тест</Button>
                              <Button variant="outline" size="sm" className="text-xs h-7 px-3">Интервью</Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BusinessZones;
