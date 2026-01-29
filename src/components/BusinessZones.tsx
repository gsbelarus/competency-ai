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

const businessZones = [
  {
    image: recruitmentImg,
    title: "Подбор и адаптация",
    category: "HR / Recruitment",
    description: "Автоматизированное тестирование кандидатов на этапе найма позволяет объективно оценить профессиональные знания и соответствие требованиям позиции. Система проводит входное тестирование новых сотрудников, отслеживает прогресс адаптации и проводит итоговую аттестацию после испытательного срока. Это снижает риск ошибочного найма и сокращает время на принятие решений о кандидатах.",
    goal: "Снижение риска ошибочного найма"
  },
  {
    image: trainingImg,
    title: "Обучение и развитие",
    category: "L&D / Training",
    description: "Контроль усвоения учебных материалов через тестирование после каждого модуля обучения. Система позволяет измерить реальную эффективность программ развития персонала и рассчитать ROI инвестиций в обучение. Регулярная проверка знаний помогает выявить пробелы и своевременно скорректировать программы развития сотрудников.",
    goal: "Измеримая эффективность обучения"
  },
  {
    image: productionImg,
    title: "Производство",
    category: "Operations",
    description: "Проверка знаний технологических карт, стандартных операционных процедур и правил работы с оборудованием. Система контролирует допуски к выполнению критических операций и обеспечивает документальное подтверждение квалификации персонала. Регулярное тестирование снижает количество производственного брака и предотвращает аварийные ситуации.",
    goal: "Снижение брака и аварий"
  },
  {
    image: safetyImg,
    title: "Охрана труда",
    category: "HSE / BHP",
    description: "Автоматизация проведения инструктажей по технике безопасности с обязательным тестированием. Система фиксирует результаты проверок и формирует документальное подтверждение прохождения инструктажей для каждого сотрудника. Это обеспечивает соответствие требованиям законодательства и снижает риск производственного травматизма.",
    goal: "Снижение травматизма"
  },
  {
    image: itSecurityImg,
    title: "ИТ и информационная безопасность",
    category: "IT / InfoSec",
    description: "Тестирование сотрудников на знание политик информационной безопасности, правил работы с конфиденциальными данными и защиты от фишинговых атак. Система помогает контролировать осведомлённость персонала о процедурах работы с доступами и снижает риски, связанные с человеческим фактором в сфере ИБ.",
    goal: "Снижение человеческого фактора"
  },
  {
    image: financeImg,
    title: "Финансы и комплаенс",
    category: "Finance / Compliance",
    description: "Проверка знаний финансовых процедур, регуляторных требований и внутренних политик компании. Система обеспечивает контроль осведомлённости сотрудников о требованиях AML, антикоррупционном законодательстве и правилах финансовой отчётности. Регулярное тестирование минимизирует регуляторные риски и штрафные санкции.",
    goal: "Снижение регуляторных рисков"
  },
  {
    image: salesImg,
    title: "Продажи и сервис",
    category: "Sales / CS",
    description: "Контроль знаний продуктовой линейки, скриптов продаж и условий коммерческих договоров. Система помогает поддерживать высокий уровень экспертизы менеджеров по продажам и обеспечивает соблюдение стандартов клиентского обслуживания. Регулярные проверки повышают конверсию и качество работы с клиентами.",
    goal: "Повышение конверсии"
  },
  {
    image: managementImg,
    title: "Менеджмент",
    category: "Management",
    description: "Оценка знаний руководителей в области внутренних политик, управления конфликтами и применения KPI. Система помогает выравнивать управленческий уровень и развивать лидерские компетенции. Тестирование менеджеров обеспечивает единообразное понимание корпоративных стандартов на всех уровнях управления.",
    goal: "Выравнивание управленческого уровня"
  },
  {
    image: legalImg,
    title: "Юридическая функция",
    category: "Legal",
    description: "Проверка знаний типовых договоров, процедур согласования и зон правовой ответственности. Система помогает сотрудникам различных подразделений понимать юридические аспекты своей работы и своевременно привлекать юристов. Это снижает риски правовых последствий и ускоряет процессы согласования.",
    goal: "Снижение правовых последствий"
  },
  {
    image: qualityImg,
    title: "Качество и стандарты",
    category: "QA / ISO / GMP",
    description: "Контроль знаний стандартов качества, процедур аудита и требований сертификаций ISO, GMP и других. Система обеспечивает готовность персонала к внешним и внутренним проверкам и поддерживает культуру качества в организации. Регулярное тестирование гарантирует успешное прохождение аудитов.",
    goal: "Успешное прохождение аудитов"
  },
  {
    image: erpSystemsImg,
    title: "Корпоративные ИТ-системы",
    category: "ERP / CRM",
    description: "Обучение и проверка навыков работы с корпоративными системами ERP, CRM, WMS и другими. Система контролирует правильность использования ИТ-инструментов и снижает количество ошибок при вводе данных. Это повышает качество данных и эффективность бизнес-процессов организации.",
    goal: "Снижение потерь от ошибок"
  },
  {
    image: cultureImg,
    title: "Корпоративная культура",
    category: "Culture & Ethics",
    description: "Проверка знаний кодекса корпоративного поведения, этических стандартов и политик разнообразия. Система помогает поддерживать единые ценности компании и контролирует осведомлённость о каналах whistleblowing. Регулярное тестирование укрепляет корпоративную культуру и снижает репутационные риски.",
    goal: "Снижение репутационных рисков"
  },
  {
    image: contractorsImg,
    title: "Подрядчики и партнёры",
    category: "Outsourcing",
    description: "Контроль знаний внешних исполнителей о стандартах и требованиях компании. Система обеспечивает проверку подрядчиков перед допуском к работам и корпоративным системам. Это позволяет минимизировать риски, связанные с привлечением внешнего персонала, и поддерживать единые стандарты качества.",
    goal: "Контроль рисков вне штата"
  },
  {
    image: expertsImg,
    title: "Ключевые эксперты",
    category: "Critical Roles",
    description: "Документирование и проверка уникальных знаний ключевых специалистов компании. Система помогает актуализировать экспертизу и выявлять области для передачи знаний в рамках succession planning. Это снижает зависимость организации от отдельных сотрудников и обеспечивает непрерывность бизнес-процессов.",
    goal: "Снижение bus-factor"
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
      // Delay flip until color transition completes (0.4s)
      setTimeout(() => {
        setIsFlipped(true);
      }, 400);
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
          <h4 className="text-sm font-semibold mb-2 text-foreground">
            {zone.title}
          </h4>
          <p className="text-xs leading-relaxed flex-1 text-muted-foreground">
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
            Система контроля знаний эффективно интегрируется в 14 ключевых бизнес-процессов, 
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
