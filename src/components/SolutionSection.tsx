import { Target, Cpu, FileCheck, BarChart3 } from "lucide-react";

const principles = [
  { icon: Target, num: "01", title: "Стандартизированная модель", desc: "Единая матрица компетенций для каждой должности и роли" },
  { icon: Cpu, num: "02", title: "AI-оценка", desc: "Искусственный интеллект оценивает знания и поведение" },
  { icon: FileCheck, num: "03", title: "Протоколирование", desc: "Полная документация для аудитов и проверок" },
  { icon: BarChart3, num: "04", title: "Аналитика", desc: "Детальные отчёты по подразделениям и ролям" },
];

const SolutionSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">Решение</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Единый контур оценки{" "}
            <span className="gradient-text">компетенций</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            CompetenceIQ создаёт системный подход к управлению знаниями на всех уровнях
          </p>
        </div>

        {/* Pipeline: horizontal flowing items connected by a line */}
        <div className="max-w-5xl mx-auto relative">
          {/* Connecting line - desktop */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-0">
            {principles.map((p, i) => (
              <div key={i} className="relative flex flex-col items-center text-center group">
                {/* Node on the line */}
                <div className="relative mb-6">
                  {/* Outer ring */}
                  <div className="w-24 h-24 rounded-full border border-primary/20 group-hover:border-primary/50 transition-all duration-500 flex items-center justify-center relative">
                    <div className="absolute inset-2 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-500" />
                    <p.icon className="w-8 h-8 text-primary relative z-10 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  {/* Step number badge */}
                  <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-background border border-primary/30 flex items-center justify-center">
                    <span className="text-xs font-bold text-primary">{p.num}</span>
                  </div>
                </div>

                {/* Arrow connector (mobile) */}
                {i < principles.length - 1 && (
                  <div className="md:hidden w-px h-8 bg-gradient-to-b from-primary/30 to-transparent -mt-3 mb-3" />
                )}

                <h3 className="text-base font-semibold text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-[200px]">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
