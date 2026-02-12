import { useState, useCallback } from "react";
import FlipCard from "@/components/FlipCard";

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

const BusinessZones = () => {
  const [activatedCards, setActivatedCards] = useState<Set<number>>(new Set());
  const [cardHeights, setCardHeights] = useState<Record<number, number>>({});

  const handleActivate = (index: number) => {
    setActivatedCards(prev => new Set(prev).add(index));
  };

  const handleMeasure = useCallback((index: number, height: number) => {
    setCardHeights(prev => {
      if (prev[index] === height) return prev;
      return { ...prev, [index]: height };
    });
  }, []);

  const maxHeight = Object.values(cardHeights).length > 0
    ? Math.max(...Object.values(cardHeights))
    : undefined;

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
              data={zone} 
              index={index}
              activatedCards={activatedCards}
              onActivate={handleActivate}
              minHeight={maxHeight}
              onMeasure={handleMeasure}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessZones;
