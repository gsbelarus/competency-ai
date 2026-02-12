import { useState } from "react";
import FlipCard from "@/components/FlipCard";

import textAnalysisImg from "@/assets/anti-cheat/text-analysis.jpg";
import audioAnalysisImg from "@/assets/anti-cheat/audio-analysis.jpg";
import videoAnalysisImg from "@/assets/anti-cheat/video-analysis.jpg";
import plagiarismImg from "@/assets/anti-cheat/plagiarism.jpg";

const cards = [
  {
    image: textAnalysisImg,
    title: "Анализ текстов и транскрипций",
    category: "Text Analysis",
    description: "NLP-модели анализируют транскрипции экзаменов и интервью, выявляя паттерны заученных или продиктованных ответов. Сравнение стилистики и лексики отличает подлинные знания от шпаргалок.",
    goal: "Выявление подсказок в речи"
  },
  {
    image: audioAnalysisImg,
    title: "Анализ аудиозаписей",
    category: "Audio Analysis",
    description: "Спектральный анализ аудиопотока выявляет посторонние голоса, подсказки через наушники и фоновые звуки. Модели обучены на тысячах записей и распознают даже замаскированные попытки обмана.",
    goal: "Контроль звуковой среды"
  },
  {
    image: videoAnalysisImg,
    title: "Анализ видеозаписей",
    category: "Video Analysis",
    description: "Компьютерное зрение отслеживает направление взгляда, мимику и движения кандидата. Контрольные точки на лице фиксируют чтение с экрана и присутствие посторонних лиц в кадре.",
    goal: "Контроль поведения в кадре"
  },
  {
    image: plagiarismImg,
    title: "Поиск плагиата",
    category: "Plagiarism Detection",
    description: "Сравнение ответов кандидатов между собой и с базой открытых источников выявляет заимствования и совпадения. Алгоритм учитывает перефразирование и частичное копирование текста.",
    goal: "Проверка оригинальности"
  }
];

const AntiCheat = () => {
  const [activatedCards, setActivatedCards] = useState<Set<number>>(new Set());

  const handleActivate = (index: number) => {
    setActivatedCards(prev => new Set(prev).add(index));
  };

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Объективная оценка и контроль
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Запатентованные модели античитинга обеспечивают достоверность каждого результата
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <FlipCard
              key={index}
              data={card}
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

export default AntiCheat;
