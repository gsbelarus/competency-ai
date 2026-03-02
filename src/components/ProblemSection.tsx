import { UserX, AlertTriangle, Scale, Brain, Database, TrendingDown } from "lucide-react";

const problems = [
  { icon: UserX, title: "Ошибочный найм", desc: "Потери до 200% годовой зарплаты" },
  { icon: AlertTriangle, title: "Производственные аварии", desc: "Пробелы в обучении персонала" },
  { icon: Scale, title: "Регуляторные штрафы", desc: "Несоответствие AML и ОТ" },
  { icon: Brain, title: "Утечка знаний", desc: "Зависимость от ключевых людей" },
  { icon: Database, title: "ERP-ошибки", desc: "Незнание корпоративных систем" },
  { icon: TrendingDown, title: "Падение конверсии", desc: "Менеджеры не знают продукт" },
];

const ProblemSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-accent uppercase tracking-wider mb-4 block">Проблема</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Невидимые пробелы в компетенциях
            <br />
            <span className="text-muted-foreground">стоят компании миллионов</span>
          </h2>
        </div>

        {/* Desktop: honeycomb-style grid */}
        <div className="hidden md:grid grid-cols-3 gap-8 max-w-4xl mx-auto">
          {problems.map((p, i) => (
            <div key={i} className="group flex flex-col items-center text-center">
              <div className="w-28 h-28 rounded-full border border-accent/30 group-hover:border-accent/60 transition-all duration-500 flex items-center justify-center relative mb-4">
                <div className="absolute inset-2 rounded-full bg-accent/5 group-hover:bg-accent/10 transition-colors duration-500" />
                <p.icon className="w-7 h-7 text-accent group-hover:scale-110 transition-transform duration-300 relative z-10" />
              </div>
              <div className="text-sm font-semibold text-foreground mb-1">{p.title}</div>
              <div className="text-xs text-muted-foreground">{p.desc}</div>
            </div>
          ))}
        </div>

        {/* Mobile: flowing list */}
        <div className="md:hidden space-y-6 max-w-md mx-auto">
          {problems.map((p, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full border border-accent/30 bg-accent/5 flex items-center justify-center shrink-0">
                <p.icon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">{p.title}</div>
                <div className="text-xs text-muted-foreground">{p.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
