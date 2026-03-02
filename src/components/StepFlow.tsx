import { Layers, ClipboardCheck, Cpu, FileBarChart } from "lucide-react";

const steps = [
  { icon: Layers, title: "Выберите зону или роль", desc: "Укажите бизнес-зону или конкретную должность для оценки" },
  { icon: ClipboardCheck, title: "Self-assessment или интервью", desc: "Выберите формат: быстрый тест или глубокое AI-интервью" },
  { icon: Cpu, title: "AI-анализ ответов", desc: "Искусственный интеллект обрабатывает и оценивает результаты" },
  { icon: FileBarChart, title: "Отчёт + карта компетенций", desc: "Получите детальный отчёт с картой пробелов и рекомендациями" },
];

const StepFlow = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">Как это работает</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            4 шага к{" "}
            <span className="gradient-text">результату</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Desktop: horizontal stepper */}
          <div className="hidden lg:grid grid-cols-4 gap-0 relative">
            {/* Connector line */}
            <div className="absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-primary/50 via-accent/50 to-primary/50" />
            
            {steps.map((step, i) => (
              <div key={i} className="relative flex flex-col items-center text-center px-4">
                <div className="w-20 h-20 rounded-2xl bg-card border border-border flex items-center justify-center mb-6 relative z-10 group-hover:border-primary/50 transition-colors">
                  <step.icon className="w-8 h-8 text-primary" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </div>
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Mobile: vertical stepper */}
          <div className="lg:hidden space-y-0">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-4 relative">
                {/* Vertical line */}
                {i < steps.length - 1 && (
                  <div className="absolute left-5 top-16 bottom-0 w-px bg-border" />
                )}
                <div className="shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center relative z-10">
                    <step.icon className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div className="pb-8">
                  <div className="text-xs font-medium text-primary mb-1">Шаг {i + 1}</div>
                  <h3 className="text-base font-semibold text-foreground mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepFlow;
