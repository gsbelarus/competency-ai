import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, FileText, Target, MessageSquare, ShieldCheck, Search, BookOpen } from "lucide-react";

const AssessmentFormats = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-accent uppercase tracking-wider mb-4 block">Форматы оценки</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Два способа{" "}
            <span className="gradient-text">проверить знания</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Выберите подходящий формат — быстрый self-assessment или глубокое AI-интервью
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Self-Assessment Card */}
          <div className="group relative rounded-2xl border border-primary/20 bg-card/80 p-8 hover:border-primary/40 transition-all duration-300 glow-primary overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-2">Self-assessment</h3>
              <p className="text-muted-foreground mb-8">Быстрая самооценка компетенций с персонализированным отчётом</p>

              <div className="space-y-4 mb-8">
                {[
                  { icon: Clock, text: "5–7 минут на прохождение" },
                  { icon: Search, text: "Быстрое выявление пробелов" },
                  { icon: FileText, text: "Персональный отчёт" },
                  { icon: BookOpen, text: "Рекомендации по развитию" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm text-foreground">{item.text}</span>
                  </div>
                ))}
              </div>

              <Button variant="hero" size="xl" className="w-full group/btn glow-primary">
                Пройти self-assessment
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Interview Card */}
          <div className="group relative rounded-2xl border border-accent/20 bg-card/80 p-8 hover:border-accent/40 transition-all duration-300 glow-accent overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                <MessageSquare className="w-7 h-7 text-accent" />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-2">Интервью с интервьюером</h3>
              <p className="text-muted-foreground mb-8">Структурированная беседа с AI для глубинной оценки знаний</p>

              <div className="space-y-4 mb-8">
                {[
                  { icon: MessageSquare, text: "Структурированное интервью" },
                  { icon: Target, text: "Поведенческая оценка" },
                  { icon: Search, text: "Глубинная проверка знаний" },
                  { icon: ShieldCheck, text: "Протокол и заключение" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-sm text-foreground">{item.text}</span>
                  </div>
                ))}
              </div>

              <Button size="xl" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-xl font-semibold">
                Провести интервью
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssessmentFormats;
