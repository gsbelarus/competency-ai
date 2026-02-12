import { useState, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export interface FlipCardData {
  image: string;
  title: string;
  category: string;
  description: string;
  goal: string;
}

interface FlipCardProps {
  data: FlipCardData;
  index: number;
  activatedCards: Set<number>;
  onActivate: (index: number) => void;
}

const FlipCard = ({ data, index, activatedCards, onActivate }: FlipCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const isActivated = activatedCards.has(index);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (isPanelOpen) return;
    if (!isActivated) onActivate(index);
    clearTimer();
    setIsFlipped(true);
  }, [isActivated, index, onActivate, clearTimer, isPanelOpen]);

  const handleMouseLeave = useCallback(() => {
    if (isPanelOpen) return;
    setIsFlipped(prev => {
      if (prev) {
        timerRef.current = setTimeout(() => {
          setIsFlipped(false);
          timerRef.current = null;
        }, 8000);
      }
      return prev;
    });
  }, [isPanelOpen]);

  const handleClick = useCallback(() => {
    if (isPanelOpen) return;
    clearTimer();
    setIsFlipped(prev => !prev);
  }, [clearTimer, isPanelOpen]);

  const openPanel = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    clearTimer();
    setIsPanelOpen(true);
  }, [clearTimer]);

  const closePanel = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPanelOpen(false);
  }, []);

  return (
    <div
      className="perspective-1000 h-80"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}
      >
        {/* Front Side */}
        <div className="absolute inset-0 backface-hidden rounded-xl overflow-hidden shadow-lg border border-border flex flex-col">
          <div className="flex-[2] relative overflow-hidden">
            <img
              src={data.image}
              alt={data.title}
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
            <h3 className="text-base font-semibold text-secondary-foreground leading-tight mb-1">
              {data.title}
            </h3>
            <span className="text-sm text-secondary-foreground/70">
              {data.category}
            </span>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-xl bg-card text-card-foreground flex flex-col p-5 shadow-lg border border-border overflow-hidden">
          <p className="text-sm leading-relaxed text-muted-foreground flex-1 overflow-hidden">
            {data.description}
          </p>
          <div className="mt-auto pt-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              <span className="text-xs font-medium text-primary">
                {data.goal}
              </span>
            </div>
            <Button
              variant="default"
              size="sm"
              className="w-full"
              onClick={openPanel}
            >
              Попробовать
            </Button>
          </div>

          {/* Sliding Panel */}
          <div
            className={`absolute inset-0 rounded-xl bg-card border border-border shadow-lg flex flex-col items-center justify-center gap-3 p-5 transition-transform duration-300 ease-out overflow-hidden ${isPanelOpen ? 'translate-y-0' : 'translate-y-full'}`}
          >
            <img
              src={data.image}
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-25 grayscale-[50%] pointer-events-none"
            />
            <button
              onClick={closePanel}
              className="absolute top-3 right-3 z-10 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Закрыть"
            >
              <X className="w-4 h-4" />
            </button>
            <Button variant="default" size="sm" className="relative z-10 w-full" onClick={(e) => e.stopPropagation()}>
              Пройти Селф-ассессмент
            </Button>
            <Button variant="default" size="sm" className="relative z-10 w-full" onClick={(e) => e.stopPropagation()}>
              Провести Интервью
            </Button>
            <Button variant="default" size="sm" className="relative z-10 w-full" onClick={(e) => e.stopPropagation()}>
              Загрузить файл для анализа
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
