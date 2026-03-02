import { UserX, AlertTriangle, Scale, Brain, Database, TrendingDown } from "lucide-react";

const problems = [
  { icon: UserX, title: "Ошибочный найм", desc: "Потери до 200% годовой зарплаты", x: "10%", y: "15%", size: "lg" },
  { icon: AlertTriangle, title: "Производственные аварии", desc: "Пробелы в обучении персонала", x: "55%", y: "5%", size: "md" },
  { icon: Scale, title: "Регуляторные штрафы", desc: "Несоответствие AML и ОТ", x: "78%", y: "30%", size: "lg" },
  { icon: Brain, title: "Утечка знаний", desc: "Зависимость от ключевых людей", x: "5%", y: "60%", size: "md" },
  { icon: Database, title: "ERP-ошибки", desc: "Незнание корпоративных систем", x: "40%", y: "65%", size: "sm" },
  { icon: TrendingDown, title: "Падение конверсии", desc: "Менеджеры не знают продукт", x: "72%", y: "70%", size: "md" },
];

const sizeMap = {
  sm: { ring: "w-24 h-24 md:w-28 md:h-28", icon: "w-5 h-5", dot: "w-2 h-2" },
  md: { ring: "w-28 h-28 md:w-32 md:h-32", icon: "w-6 h-6", dot: "w-2.5 h-2.5" },
  lg: { ring: "w-32 h-32 md:w-36 md:h-36", icon: "w-7 h-7", dot: "w-3 h-3" },
};

const ProblemSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-destructive/80 uppercase tracking-wider mb-4 block">Проблема</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Невидимые пробелы в компетенциях
            <br />
            <span className="text-muted-foreground">стоят компании миллионов</span>
          </h2>
        </div>

        {/* Desktop: constellation layout */}
        <div className="hidden lg:block relative h-[500px] max-w-5xl mx-auto">
          {/* Connecting lines via SVG */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            <line x1="22%" y1="30%" x2="55%" y2="20%" stroke="hsl(var(--border))" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
            <line x1="67%" y1="20%" x2="85%" y2="42%" stroke="hsl(var(--border))" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
            <line x1="22%" y1="30%" x2="17%" y2="72%" stroke="hsl(var(--border))" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
            <line x1="17%" y1="72%" x2="52%" y2="77%" stroke="hsl(var(--border))" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
            <line x1="52%" y1="77%" x2="82%" y2="82%" stroke="hsl(var(--border))" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
            <line x1="85%" y1="42%" x2="82%" y2="82%" stroke="hsl(var(--border))" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
          </svg>

          {problems.map((p, i) => {
            const s = sizeMap[p.size as keyof typeof sizeMap];
            return (
              <div
                key={i}
                className="absolute group"
                style={{ left: p.x, top: p.y, transform: 'translate(-50%, -50%)' }}
              >
                {/* Orbit ring */}
                <div className={`${s.ring} rounded-full border border-destructive/15 group-hover:border-destructive/40 transition-all duration-500 flex items-center justify-center relative`}>
                  {/* Pulsing glow */}
                  <div className="absolute inset-0 rounded-full bg-destructive/5 group-hover:bg-destructive/10 transition-colors duration-500" />
                  
                  {/* Orbiting dot */}
                  <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 ${s.dot} rounded-full bg-destructive/60`} />
                  
                  {/* Center icon */}
                  <p.icon className={`${s.icon} text-destructive/60 group-hover:text-destructive group-hover:scale-110 transition-all duration-300 relative z-10`} />
                </div>

                {/* Label */}
                <div className="absolute left-1/2 -translate-x-1/2 mt-2 text-center whitespace-nowrap">
                  <div className="text-sm font-semibold text-foreground group-hover:text-destructive/90 transition-colors">{p.title}</div>
                  <div className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">{p.desc}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile: flowing list */}
        <div className="lg:hidden space-y-6 max-w-md mx-auto">
          {problems.map((p, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full border border-destructive/20 bg-destructive/5 flex items-center justify-center shrink-0">
                <p.icon className="w-6 h-6 text-destructive/70" />
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
