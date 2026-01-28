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
    description: "Проверка знаний кандидатов, входное тестирование, аттестация после испытательного срока",
    goal: "Снижение риска ошибочного найма"
  },
  {
    image: trainingImg,
    title: "Обучение и развитие",
    category: "L&D / Training",
    description: "Контроль усвоения материалов, подтверждение квалификации, измерение ROI обучения",
    goal: "Измеримая эффективность обучения"
  },
  {
    image: productionImg,
    title: "Производство",
    category: "Operations",
    description: "Знание технологических карт, SOP, работа с оборудованием и допуски к операциям",
    goal: "Снижение брака и аварий"
  },
  {
    image: safetyImg,
    title: "Охрана труда",
    category: "HSE / BHP",
    description: "Инструктажи, контроль техники безопасности, документальное подтверждение проверок",
    goal: "Снижение травматизма"
  },
  {
    image: itSecurityImg,
    title: "ИТ и информационная безопасность",
    category: "IT / InfoSec",
    description: "Политики ИБ, защита от phishing, работа с доступами и IT-процедурами",
    goal: "Снижение человеческого фактора"
  },
  {
    image: financeImg,
    title: "Финансы и комплаенс",
    category: "Finance / Compliance",
    description: "Финансовые процедуры, регуляторные требования, AML и антикоррупция",
    goal: "Снижение регуляторных рисков"
  },
  {
    image: salesImg,
    title: "Продажи и сервис",
    category: "Sales / CS",
    description: "Знание продуктов, скрипты продаж, условия договоров и стандарты общения",
    goal: "Повышение конверсии"
  },
  {
    image: managementImg,
    title: "Менеджмент",
    category: "Management",
    description: "Внутренние политики, управление конфликтами, KPI и лидерские компетенции",
    goal: "Выравнивание управленческого уровня"
  },
  {
    image: legalImg,
    title: "Юридическая функция",
    category: "Legal",
    description: "Типовые договоры, процедуры согласования, зоны риска и ответственности",
    goal: "Снижение правовых последствий"
  },
  {
    image: qualityImg,
    title: "Качество и стандарты",
    category: "QA / ISO / GMP",
    description: "Стандарты качества, процедуры аудита, соответствие сертификациям",
    goal: "Успешное прохождение аудитов"
  },
  {
    image: erpSystemsImg,
    title: "Корпоративные ИТ-системы",
    category: "ERP / CRM",
    description: "Работа с ERP, CRM, WMS, снижение ошибок при использовании систем",
    goal: "Снижение потерь от ошибок"
  },
  {
    image: cultureImg,
    title: "Корпоративная культура",
    category: "Culture & Ethics",
    description: "Кодекс поведения, этика, политики diversity и whistleblowing",
    goal: "Снижение репутационных рисков"
  },
  {
    image: contractorsImg,
    title: "Подрядчики и партнёры",
    category: "Outsourcing",
    description: "Стандарты компании для внешних исполнителей, допуск к системам",
    goal: "Контроль рисков вне штата"
  },
  {
    image: expertsImg,
    title: "Ключевые эксперты",
    category: "Critical Roles",
    description: "Подтверждение уникальных знаний, актуальность экспертизы, succession planning",
    goal: "Снижение bus-factor"
  }
];

const FlipCard = ({ zone }: { zone: typeof businessZones[0] }) => {
  return (
    <div className="group perspective-1000 h-72">
      <div className="relative w-full h-full transition-transform duration-500 transform-style-3d group-hover:rotate-y-180">
        {/* Front Side */}
        <div className="absolute inset-0 backface-hidden rounded-xl overflow-hidden shadow-lg border border-border flex flex-col">
          {/* Top 2/3 - Thematic image */}
          <div className="flex-[2] relative overflow-hidden">
            <img 
              src={zone.image} 
              alt={zone.title}
              className="w-full h-full object-cover"
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
        <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-xl bg-primary text-primary-foreground flex flex-col p-5 shadow-lg">
          <p className="text-sm leading-relaxed flex-1">
            {zone.description}
          </p>
          <div className="flex items-center gap-2 mb-3 mt-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary-foreground/70" />
            <span className="text-xs font-medium text-primary-foreground/90">
              {zone.goal}
            </span>
          </div>
          <Button 
            variant="secondary" 
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
            <FlipCard key={index} zone={zone} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessZones;
