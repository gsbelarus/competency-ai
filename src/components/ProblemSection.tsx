import { UserX, AlertTriangle, Scale, Brain, Database, TrendingDown } from "lucide-react";

const problems = [
  { icon: UserX, title: "Ошибочный найм", desc: "Потери до 200% годовой зарплаты на каждого неудачного кандидата" },
  { icon: AlertTriangle, title: "Производственные аварии", desc: "Несоблюдение процедур из-за пробелов в обучении персонала" },
  { icon: Scale, title: "Регуляторные штрафы", desc: "Несоответствие требованиям AML, ОТ и отраслевых стандартов" },
  { icon: Brain, title: "Утечка знаний", desc: "Зависимость от ключевых сотрудников без системы передачи знаний" },
  { icon: Database, title: "Потери в ERP и CRM", desc: "Ошибки ввода данных из-за незнания корпоративных систем" },
  { icon: TrendingDown, title: "Снижение конверсии", desc: "Менеджеры не знают продуктовую линейку и скрипты продаж" },
];

const ProblemSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-destructive/80 uppercase tracking-wider mb-4 block">Проблема</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Невидимые пробелы в компетенциях
            <br />
            <span className="text-muted-foreground">стоят компании миллионов</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {problems.map((problem, i) => (
            <div
              key={i}
              className="group p-6 rounded-xl border border-border/50 bg-card/50 hover:border-destructive/30 hover:bg-card transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center mb-4 group-hover:bg-destructive/20 transition-colors">
                <problem.icon className="w-5 h-5 text-destructive/70" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">{problem.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{problem.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
