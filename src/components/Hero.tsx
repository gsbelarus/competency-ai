import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Layers } from "lucide-react";

const markers = [
  { icon: Layers, text: "16 бизнес-зон" },
  { icon: Shield, text: "Протоколирование" },
  { icon: Clock, text: "Отчёт за 5–15 минут" },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/8 rounded-full blur-[120px]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">AI-Powered Competency Management</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-[1.1] tracking-tight">
            Управляйте{" "}
            <span className="shimmer-text">компетенциями</span>
            <br />
            на всём предприятии —
            <br />
            <span className="text-muted-foreground">с помощью ИИ</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            Подбор, обучение, производство, ИБ, комплаенс и ещё 11 зон 
            в единой системе контроля знаний и рисков
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <Button variant="hero" size="xl" className="group glow-primary">
              Пройти self-assessment
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="hero-outline" size="xl">
              Провести интервью
            </Button>
          </div>

          <a href="#zones" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-16">
            Посмотреть зоны применения
            <ArrowRight className="w-4 h-4" />
          </a>

          {/* Markers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {markers.map((marker, i) => (
              <div key={i} className="flex items-center justify-center gap-3 p-4 rounded-xl glass">
                <marker.icon className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm font-medium text-foreground">{marker.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
