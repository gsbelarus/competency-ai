import { Button } from "@/components/ui/button";
import { 
  Users, 
  GraduationCap, 
  Factory, 
  Shield, 
  Server, 
  Calculator, 
  ShoppingCart, 
  UserCog, 
  Scale, 
  Award, 
  Monitor, 
  Heart, 
  Handshake, 
  Star
} from "lucide-react";

const businessZones = [
  {
    icon: Users,
    title: "Подбор и адаптация",
    category: "HR / Recruitment",
    description: "Проверка знаний кандидатов, входное тестирование, аттестация после испытательного срока",
    goal: "Снижение риска ошибочного найма"
  },
  {
    icon: GraduationCap,
    title: "Обучение и развитие",
    category: "L&D / Training",
    description: "Контроль усвоения материалов, подтверждение квалификации, измерение ROI обучения",
    goal: "Измеримая эффективность обучения"
  },
  {
    icon: Factory,
    title: "Производство",
    category: "Operations",
    description: "Знание технологических карт, SOP, работа с оборудованием и допуски к операциям",
    goal: "Снижение брака и аварий"
  },
  {
    icon: Shield,
    title: "Охрана труда",
    category: "HSE / BHP",
    description: "Инструктажи, контроль техники безопасности, документальное подтверждение проверок",
    goal: "Снижение травматизма"
  },
  {
    icon: Server,
    title: "ИТ и информационная безопасность",
    category: "IT / InfoSec",
    description: "Политики ИБ, защита от phishing, работа с доступами и IT-процедурами",
    goal: "Снижение человеческого фактора"
  },
  {
    icon: Calculator,
    title: "Финансы и комплаенс",
    category: "Finance / Compliance",
    description: "Финансовые процедуры, регуляторные требования, AML и антикоррупция",
    goal: "Снижение регуляторных рисков"
  },
  {
    icon: ShoppingCart,
    title: "Продажи и сервис",
    category: "Sales / CS",
    description: "Знание продуктов, скрипты продаж, условия договоров и стандарты общения",
    goal: "Повышение конверсии"
  },
  {
    icon: UserCog,
    title: "Менеджмент",
    category: "Management",
    description: "Внутренние политики, управление конфликтами, KPI и лидерские компетенции",
    goal: "Выравнивание управленческого уровня"
  },
  {
    icon: Scale,
    title: "Юридическая функция",
    category: "Legal",
    description: "Типовые договоры, процедуры согласования, зоны риска и ответственности",
    goal: "Снижение правовых последствий"
  },
  {
    icon: Award,
    title: "Качество и стандарты",
    category: "QA / ISO / GMP",
    description: "Стандарты качества, процедуры аудита, соответствие сертификациям",
    goal: "Успешное прохождение аудитов"
  },
  {
    icon: Monitor,
    title: "Корпоративные ИТ-системы",
    category: "ERP / CRM",
    description: "Работа с ERP, CRM, WMS, снижение ошибок при использовании систем",
    goal: "Снижение потерь от ошибок"
  },
  {
    icon: Heart,
    title: "Корпоративная культура",
    category: "Culture & Ethics",
    description: "Кодекс поведения, этика, политики diversity и whistleblowing",
    goal: "Снижение репутационных рисков"
  },
  {
    icon: Handshake,
    title: "Подрядчики и партнёры",
    category: "Outsourcing",
    description: "Стандарты компании для внешних исполнителей, допуск к системам",
    goal: "Контроль рисков вне штата"
  },
  {
    icon: Star,
    title: "Ключевые эксперты",
    category: "Critical Roles",
    description: "Подтверждение уникальных знаний, актуальность экспертизы, succession planning",
    goal: "Снижение bus-factor"
  }
];

const FlipCard = ({ zone }: { zone: typeof businessZones[0] }) => {
  const IconComponent = zone.icon;
  
  return (
    <div className="group perspective-1000 h-72">
      <div className="relative w-full h-full transition-transform duration-500 transform-style-3d group-hover:rotate-y-180">
        {/* Front Side */}
        <div className="absolute inset-0 backface-hidden rounded-xl overflow-hidden shadow-lg border border-border flex flex-col">
          {/* Top 2/3 - Icon on light background */}
          <div className="flex-[2] bg-gradient-to-br from-accent to-card flex items-center justify-center relative">
            <div className="absolute inset-0 bg-primary/5" />
            <div className="w-20 h-20 rounded-2xl bg-card/80 backdrop-blur-sm flex items-center justify-center shadow-md border border-border/50">
              <IconComponent className="w-10 h-10 text-primary" />
            </div>
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
