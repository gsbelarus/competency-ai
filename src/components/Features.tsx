import { useState } from "react";
import { Button } from "@/components/ui/button";

import knowledgeMatrixImg from "@/assets/features/knowledge-matrix.jpg";
import onlineAssessmentImg from "@/assets/features/online-assessment.jpg";
import aiInterviewImg from "@/assets/features/ai-interview.jpg";
import analyticsImg from "@/assets/features/analytics.jpg";

const features = [
  {
    image: knowledgeMatrixImg,
    title: "Матрицы знаний",
    category: "Knowledge Matrix",
    description: "Гибко настраиваемые матрицы компетенций для каждой должности и роли. Структурированные вопросы с различными уровнями сложности обеспечивают точную оценку профессиональных знаний сотрудников.",
    goal: "Точная оценка компетенций"
  },
  {
    image: onlineAssessmentImg,
    title: "Онлайн-ассессменты",
    category: "Online Assessment",
    description: "Проведение тестирований в любое время из любой точки мира. Автоматическая проверка и детальная аналитика результатов позволяют оперативно оценивать уровень знаний и принимать решения.",
    goal: "Тестирование без границ"
  },
  {
    image: aiInterviewImg,
    title: "AI-интервью",
    category: "AI Interview",
    description: "Интеллектуальный ассистент проводит структурированные интервью, оценивает ответы и формирует объективные заключения. Искусственный интеллект обеспечивает единый стандарт оценки для всех кандидатов.",
    goal: "Объективная оценка кандидатов"
  },
  {
    image: analyticsImg,
    title: "Аналитика и отчёты",
    category: "Analytics & Reports",
    description: "Глубокий анализ компетенций команды, выявление пробелов в знаниях и персонализированные рекомендации по развитию. Визуализация данных помогает руководителям принимать обоснованные решения.",
    goal: "Данные для решений"
  }
];

const FeatureFlipCard = ({ feature, index, activatedCards, onActivate }: {
  feature: typeof features[0];
  index: number;
  activatedCards: Set<number>;
  onActivate: (index: number) => void;
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const isActivated = activatedCards.has(index);

  const handleMouseEnter = () => {
    if (!isActivated) {
      onActivate(index);
      setTimeout(() => {
        setIsFlipped(true);
      }, 1000);
    } else {
      setIsFlipped(true);
    }
  };

  const handleMouseLeave = () => {
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
          <div className="flex-[2] relative overflow-hidden">
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full h-full object-cover transition-all duration-[400ms] ease-out"
              style={{
                filter: isActivated
                  ? 'none'
                  : 'grayscale(100%) sepia(30%) saturate(200%) hue-rotate(220deg) brightness(1.1)',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
          </div>

          <div className="flex-1 bg-secondary px-4 py-3 flex flex-col justify-center">
            <h3 className="text-sm font-semibold text-secondary-foreground leading-tight mb-1">
              {feature.title}
            </h3>
            <span className="text-xs text-secondary-foreground/70">
              {feature.category}
            </span>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-xl bg-card text-card-foreground flex flex-col p-5 shadow-lg border border-border">
          <p className="text-sm leading-relaxed flex-1 text-muted-foreground">
            {feature.description}
          </p>
          <div className="flex items-center gap-2 mb-3 mt-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-xs font-medium text-primary">
              {feature.goal}
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

const Features = () => {
  const [activatedCards, setActivatedCards] = useState<Set<number>>(new Set());

  const handleActivate = (index: number) => {
    setActivatedCards(prev => new Set(prev).add(index));
  };

  return (
    <section className="relative py-24 bg-background">
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-muted/30 to-background" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-muted/30 to-background" />
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Инструменты системы
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Комплексное решение для оценки и развития компетенций вашего персонала
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureFlipCard
              key={index}
              feature={feature}
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

export default Features;
