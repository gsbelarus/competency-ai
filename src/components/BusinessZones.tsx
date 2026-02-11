import { useState } from "react";
import { Button } from "@/components/ui/button";

// Import zone images
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

const businessZones = [
  {
    image: recruitmentImg,
    title: "Подбор и адаптация",
    category: "HR / Recruitment",
    description: "Тестирование кандидатов на этапе найма для объективной оценки знаний и соответствия требованиям. Входное тестирование новых сотрудников, отслеживание адаптации и итоговая аттестация после испытательного срока снижают риск ошибочного найма.",
    goal: "Снижение риска ошибочного найма"
  },
  {
    image: trainingImg,
    title: "Обучение и развитие",
    category: "L&D / Training",
    description: "Контроль усвоения материалов через тестирование после каждого модуля обучения. Измерение эффективности программ развития и расчёт ROI инвестиций в обучение. Выявление пробелов позволяет своевременно корректировать программы развития сотрудников.",
    goal: "Измеримая эффективность обучения"
  },
  {
    image: productionImg,
    title: "Производство",
    category: "Operations",
    description: "Проверка знаний технологических карт, операционных процедур и правил работы с оборудованием. Контроль допусков к критическим операциям и документальное подтверждение квалификации персонала снижают производственный брак и предотвращают аварийные ситуации.",
    goal: "Снижение брака и аварий"
  },
  {
    image: safetyImg,
    title: "Охрана труда",
    category: "HSE / BHP",
    description: "Автоматизация инструктажей по технике безопасности с обязательным тестированием. Фиксация результатов проверок и формирование документального подтверждения прохождения инструктажей обеспечивают соответствие законодательству и снижают риск производственного травматизма.",
    goal: "Снижение травматизма"
  },
  {
    image: itSecurityImg,
    title: "ИТ и информационная безопасность",
    category: "IT / InfoSec",
    description: "Тестирование на знание политик информационной безопасности, правил работы с конфиденциальными данными и защиты от фишинга. Контроль осведомлённости о процедурах работы с доступами снижает риски человеческого фактора в сфере ИБ.",
    goal: "Снижение человеческого фактора"
  },
  {
    image: financeImg,
    title: "Финансы и комплаенс",
    category: "Finance / Compliance",
    description: "Проверка знаний финансовых процедур, регуляторных требований и внутренних политик. Контроль осведомлённости о требованиях AML, антикоррупционном законодательстве и правилах финансовой отчётности минимизирует регуляторные риски и штрафные санкции.",
    goal: "Снижение регуляторных рисков"
  },
  {
    image: salesImg,
    title: "Продажи и сервис",
    category: "Sales / CS",
    description: "Контроль знаний продуктовой линейки, скриптов продаж и условий коммерческих договоров. Поддержание экспертизы менеджеров и соблюдение стандартов клиентского обслуживания повышают конверсию и качество работы с клиентами.",
    goal: "Повышение конверсии"
  },
  {
    image: managementImg,
    title: "Менеджмент",
    category: "Management",
    description: "Оценка знаний руководителей в области внутренних политик, управления конфликтами и применения KPI. Выравнивание управленческого уровня и развитие лидерских компетенций обеспечивают единое понимание корпоративных стандартов на всех уровнях.",
    goal: "Выравнивание управленческого уровня"
  },
  {
    image: legalImg,
    title: "Юридическая функция",
    category: "Legal",
    description: "Проверка знаний типовых договоров, процедур согласования и зон правовой ответственности. Помощь сотрудникам в понимании юридических аспектов работы снижает правовые риски и ускоряет процессы согласования документов.",
    goal: "Снижение правовых последствий"
  },
  {
    image: qualityImg,
    title: "Качество и стандарты",
    category: "QA / ISO / GMP",
    description: "Контроль знаний стандартов качества, процедур аудита и требований сертификаций ISO, GMP и других. Обеспечение готовности персонала к проверкам поддерживает культуру качества и гарантирует успешное прохождение внешних аудитов.",
    goal: "Успешное прохождение аудитов"
  },
  {
    image: erpSystemsImg,
    title: "Корпоративные ИТ-системы",
    category: "ERP / CRM",
    description: "Проверка навыков работы с корпоративными системами ERP, CRM, WMS и другими. Контроль правильности использования ИТ-инструментов снижает количество ошибок при вводе данных и повышает эффективность бизнес-процессов организации.",
    goal: "Снижение потерь от ошибок"
  },
  {
    image: cultureImg,
    title: "Корпоративная культура",
    category: "Culture & Ethics",
    description: "Проверка знаний кодекса корпоративного поведения, этических стандартов и политик разнообразия. Контроль осведомлённости о каналах whistleblowing укрепляет корпоративную культуру и снижает репутационные риски компании.",
    goal: "Снижение репутационных рисков"
  },
  {
    image: contractorsImg,
    title: "Подрядчики и партнёры",
    category: "Outsourcing",
    description: "Контроль знаний внешних исполнителей о стандартах и требованиях компании. Проверка подрядчиков перед допуском к работам и корпоративным системам минимизирует риски привлечения внешнего персонала и поддерживает единые стандарты качества.",
    goal: "Контроль рисков вне штата"
  },
  {
    image: expertsImg,
    title: "Ключевые эксперты",
    category: "Critical Roles",
    description: "Документирование и проверка уникальных знаний ключевых специалистов компании. Актуализация экспертизы и выявление областей для передачи знаний в рамках succession planning снижают зависимость организации от отдельных сотрудников.",
    goal: "Снижение bus-factor"
  },
  {
    image: callCenterImg,
    title: "Контактный центр",
    category: "Call Center",
    description: "Оценка качества работы операторов: знание скриптов поддержки и продаж, владение продуктовой линейкой, грамотность речи и соблюдение стандартов вежливости. Регулярное тестирование поддерживает единый уровень обслуживания клиентов.",
    goal: "Повышение качества обслуживания"
  },
  {
    image: regionalImg,
    title: "Региональные представители",
    category: "Regional Offices",
    description: "Контроль знаний региональных представителей с учётом специфики локальных рынков и законодательства. Проверка осведомлённости о нормативных актах, конкурентной среде и стратегических целях компании обеспечивает единые стандарты на удалённых площадках.",
    goal: "Единые стандарты в регионах"
  }
];

const FlipCard = ({ zone, index, activatedCards, onActivate }: { 
  zone: typeof businessZones[0]; 
  index: number;
  activatedCards: Set<number>;
  onActivate: (index: number) => void;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const isActivated = activatedCards.has(index);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (!isActivated) {
      onActivate(index);
      // Delay flip: 0.4s color transition + 0.6s pause = 1s total
      setTimeout(() => {
        setIsFlipped(true);
      }, 1000);
    } else {
      setIsFlipped(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsFlipped(false);
  };

  return (
    <div 
      className="perspective-1000 h-72"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}
      >
        {/* Front Side */}
        <div className="absolute inset-0 backface-hidden rounded-xl overflow-hidden shadow-lg border border-border flex flex-col">
          {/* Top 2/3 - Thematic image with lavender monochrome effect */}
          <div className="flex-[2] relative overflow-hidden">
            <img 
              src={zone.image} 
              alt={zone.title}
              className="w-full h-full object-cover transition-all duration-[400ms] ease-out"
              style={{
                filter: isActivated 
                  ? 'none' 
                  : 'grayscale(100%) sepia(30%) saturate(200%) hue-rotate(220deg) brightness(1.1)',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
          </div>
          
          {/* Bottom 1/3 - Title on dark background */}
          <div className="flex-1 bg-secondary px-4 py-3 flex flex-col justify-center">
            <h3 className="text-sm font-semibold text-secondary-foreground leading-tight mb-1">
              {zone.title}
            </h3>
            <span className="text-xs text-secondary-foreground/70">
              {zone.category}
            </span>
          </div>
        </div>
        
        {/* Back Side */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-xl bg-card text-card-foreground flex flex-col p-5 shadow-lg border border-border">
          <p className="text-sm leading-relaxed flex-1 text-muted-foreground">
            {zone.description}
          </p>
          <div className="flex items-center gap-2 mb-3 mt-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-xs font-medium text-primary">
              {zone.goal}
            </span>
          </div>
          <Button 
            variant="default" 
            size="sm"
            className="w-full"
          >
            Попробовать
          </Button>
        </div>
      </div>
    </div>
  );
};

const BusinessZones = () => {
  const [activatedCards, setActivatedCards] = useState<Set<number>>(new Set());

  const handleActivate = (index: number) => {
    setActivatedCards(prev => new Set(prev).add(index));
  };

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Зоны применения на предприятии
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Система контроля знаний эффективно интегрируется в 16 ключевых бизнес-процессов, 
            обеспечивая комплексное управление компетенциями
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {businessZones.map((zone, index) => (
            <FlipCard 
              key={index} 
              zone={zone} 
              index={index}
              activatedCards={activatedCards}
              onActivate={handleActivate}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessZones;
