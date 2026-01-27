import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {businessZones.map((zone, index) => (
            <Card 
              key={index} 
              className="group bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col"
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between mb-2">
                  <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <zone.icon className="w-6 h-6 text-accent-foreground group-hover:text-primary transition-colors duration-300" />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded-md">
                    {zone.category}
                  </span>
                </div>
                <CardTitle className="text-lg text-card-foreground leading-tight">
                  {zone.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <CardDescription className="text-muted-foreground text-sm leading-relaxed flex-1">
                  {zone.description}
                </CardDescription>
                <div className="mt-4 pt-3 border-t border-border">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-xs font-medium text-primary">
                      {zone.goal}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessZones;
