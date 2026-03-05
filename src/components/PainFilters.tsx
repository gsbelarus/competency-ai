import { useState } from "react";

const pains = [
  { label: "Ошибочный найм", zones: ["Подбор и адаптация"] },
  { label: "Травматизм", zones: ["Охрана труда", "Производство"] },
  { label: "Регуляторные риски", zones: ["Финансы и комплаенс", "Качество и стандарты"] },
  { label: "Конверсия продаж", zones: ["Продажи и сервис", "Контактный центр"] },
  { label: "Пройти аудит", zones: ["Качество и стандарты", "Охрана труда"] },
  { label: "Bus-factor", zones: ["Ключевые эксперты", "Обучение и развитие"] },
  { label: "ERP-ошибки", zones: ["Корпоративные ИТ-системы"] },
];

interface PainFiltersProps {
  onZoneSelect?: (zoneName: string) => void;
}

const PainFilters = ({ onZoneSelect }: PainFiltersProps) => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-xl font-semibold text-foreground mb-2">Какую проблему решаете?</h3>
          <p className="text-sm text-muted-foreground">Нажмите на боль — увидите, какие зоны её закрывают</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {pains.map((pain, i) => (
            <button
              key={i}
              onClick={() => setActive(active === i ? null : i)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                active === i
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-card/50 text-muted-foreground border-border/50 hover:border-border hover:text-foreground'
              }`}
            >
              {pain.label}
            </button>
          ))}
        </div>

        {active !== null && (
          <div className="flex flex-wrap justify-center gap-2 animate-fade-in">
            {pains[active].zones.map((zone, zi) => (
              <button
                key={zi}
                onClick={() => onZoneSelect?.(zone)}
                className="px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors cursor-pointer"
              >
                {zone}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PainFilters;
