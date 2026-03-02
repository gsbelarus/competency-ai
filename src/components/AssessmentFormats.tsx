import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, FileText, Target, MessageSquare, ShieldCheck, Search, BookOpen } from "lucide-react";
import { useState } from "react";

const AssessmentFormats = () => {
  const [activeTab, setActiveTab] = useState<"self" | "interview">("self");

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
        </div>

        {/* Toggle switch */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-full p-1 glass">
            <button
              onClick={() => setActiveTab("self")}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === "self"
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Self-assessment
            </button>
            <button
              onClick={() => setActiveTab("interview")}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === "interview"
                  ? "bg-accent text-accent-foreground shadow-lg"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              AI-интервью
            </button>
          </div>
        </div>

        {/* Content area - morphing display */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Self-assessment view */}
            <div className={`transition-all duration-500 ${activeTab === "self" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 absolute inset-0 pointer-events-none"}`}>
              <div className="flex flex-col lg:flex-row items-center gap-12">
                {/* Left: visual */}
                <div className="flex-1 relative">
                  <div className="w-64 h-64 mx-auto relative">
                    {/* Orbiting features */}
                    {[
                      { icon: Clock, label: "5–7 мин", angle: 0 },
                      { icon: Search, label: "Пробелы", angle: 90 },
                      { icon: FileText, label: "Отчёт", angle: 180 },
                      { icon: BookOpen, label: "Развитие", angle: 270 },
                    ].map((item, i) => {
                      const rad = (item.angle * Math.PI) / 180;
                      const x = 50 + 42 * Math.cos(rad);
                      const y = 50 + 42 * Math.sin(rad);
                      return (
                        <div
                          key={i}
                          className="absolute w-16 h-16 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center"
                          style={{ left: `${x}%`, top: `${y}%` }}
                        >
                          <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-1">
                            <item.icon className="w-5 h-5 text-primary" />
                          </div>
                          <span className="text-[10px] font-medium text-muted-foreground whitespace-nowrap">{item.label}</span>
                        </div>
                      );
                    })}
                    {/* Center */}
                    <div className="absolute inset-[25%] rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center">
                      <Target className="w-10 h-10 text-primary" />
                    </div>
                    {/* Orbit ring */}
                    <div className="absolute inset-[10%] rounded-full border border-dashed border-primary/15" />
                  </div>
                </div>

                {/* Right: text + CTA */}
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-3xl font-bold text-foreground mb-3">Self-assessment</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Быстрая самооценка компетенций. За 5–7 минут система выявит ключевые пробелы, 
                    сформирует персональный отчёт и предложит рекомендации по развитию.
                  </p>
                  <div className="space-y-3 mb-8">
                    {["Быстрое выявление пробелов", "Персональный отчёт с визуализацией", "Рекомендации по развитию"].map((t, i) => (
                      <div key={i} className="flex items-center gap-3 justify-center lg:justify-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-sm text-foreground">{t}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="hero" size="xl" className="glow-primary group">
                    Пройти self-assessment
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Interview view */}
            <div className={`transition-all duration-500 ${activeTab === "interview" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 absolute inset-0 pointer-events-none"}`}>
              <div className="flex flex-col lg:flex-row items-center gap-12">
                {/* Left: visual */}
                <div className="flex-1 relative">
                  <div className="w-64 h-64 mx-auto relative">
                    {/* Chat bubbles floating */}
                    <div className="absolute top-4 left-4 px-4 py-2 rounded-2xl rounded-bl-none bg-accent/10 border border-accent/20 text-xs text-accent max-w-[140px]">
                      Расскажите о вашем опыте...
                    </div>
                    <div className="absolute top-20 right-0 px-4 py-2 rounded-2xl rounded-br-none bg-card border border-border text-xs text-foreground max-w-[130px]">
                      В моей практике...
                    </div>
                    <div className="absolute bottom-20 left-0 px-4 py-2 rounded-2xl rounded-bl-none bg-accent/10 border border-accent/20 text-xs text-accent max-w-[150px]">
                      Как вы оцениваете риски?
                    </div>
                    <div className="absolute bottom-4 right-4 px-4 py-2 rounded-2xl rounded-br-none bg-card border border-border text-xs text-foreground max-w-[120px]">
                      Я анализирую...
                    </div>
                    {/* Center AI avatar */}
                    <div className="absolute inset-[30%] rounded-full bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/20 flex items-center justify-center">
                      <MessageSquare className="w-8 h-8 text-accent" />
                    </div>
                  </div>
                </div>

                {/* Right: text + CTA */}
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-3xl font-bold text-foreground mb-3">Интервью с интервьюером</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Структурированная беседа с AI-интервьюером. Глубинная оценка знаний, 
                    поведенческих индикаторов и профессиональных компетенций с протоколом.
                  </p>
                  <div className="space-y-3 mb-8">
                    {["Структурированное интервью", "Поведенческая оценка", "Протокол и заключение"].map((t, i) => (
                      <div key={i} className="flex items-center gap-3 justify-center lg:justify-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        <span className="text-sm text-foreground">{t}</span>
                      </div>
                    ))}
                  </div>
                  <Button size="xl" className="bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-xl font-semibold glow-accent">
                    Провести интервью
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssessmentFormats;
