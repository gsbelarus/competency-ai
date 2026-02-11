import { useState, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";

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

const AntiCheatFlipCard = ({ card, index, activatedCards, onActivate }: {
  card: typeof cards[0];
  index: number;
  activatedCards: Set<number>;
  onActivate: (index: number) => void;
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const isActivated = activatedCards.has(index);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = useCallback(() => {
    if (!isActivated) onActivate(index);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setIsFlipped(true);
  }, [isActivated, index, onActivate]);

  const handleMouseLeave = useCallback(() => {
    timerRef.current = setTimeout(() => {
      setIsFlipped(false);
      timerRef.current = null;
    }, 8000);
  }, []);

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
              src={card.image}
              alt={card.title}
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
              {card.title}
            </h3>
            <span className="text-xs text-secondary-foreground/70">
              {card.category}
            </span>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-xl bg-card text-card-foreground flex flex-col p-5 shadow-lg border border-border">
          <p className="text-sm leading-relaxed flex-1 text-muted-foreground">
            {card.description}
          </p>
          <div className="flex items-center gap-2 mb-3 mt-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="text-xs font-medium text-primary">
              {card.goal}
            </span>
          </div>
          <Button variant="default" size="sm" className="w-full">
            Попробовать
          </Button>
        </div>
      </div>
    </div>
  );
};

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
            <AntiCheatFlipCard
              key={index}
              card={card}
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
