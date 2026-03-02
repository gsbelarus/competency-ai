import { Target, Cpu, FileCheck, BarChart3 } from "lucide-react";

const principles = [
  {
    icon: Target,
    title: "Стандартизированная модель",
    desc: "Единая матрица компетенций для каждой должности и роли на предприятии",
  },
  {
    icon: Cpu,
    title: "AI-оценка",
    desc: "Искусственный интеллект оценивает знания и поведенческие индикаторы",
  },
  {
    icon: FileCheck,
    title: "Протоколирование",
    desc: "Полная документация результатов для аудитов и регуляторных проверок",
  },
  {
    icon: BarChart3,
    title: "Аналитика",
    desc: "Детальные отчёты по подразделениям, ролям и уровням компетенций",
  },
];

const SolutionSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">Решение</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Единый контур оценки
            <br />
            <span className="gradient-text">компетенций</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            CompetenceIQ создаёт системный подход к управлению знаниями на всех уровнях организации
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {principles.map((p, i) => (
            <div
              key={i}
              className="group relative p-6 rounded-xl border border-border/50 bg-card/50 hover:border-primary/30 hover:bg-card transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <p.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              <div className="absolute top-4 right-4 text-5xl font-bold text-border/30">
                {String(i + 1).padStart(2, '0')}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
