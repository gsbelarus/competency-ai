import { useState } from "react";
import FlipCard from "@/components/FlipCard";

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

const Features = () => {
  const [activatedCards, setActivatedCards] = useState<Set<number>>(new Set());

  const handleActivate = (index: number) => {
    setActivatedCards(prev => new Set(prev).add(index));
  };

  return (
    <section className="py-24 bg-background">
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
            <FlipCard
              key={index}
              data={feature}
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
