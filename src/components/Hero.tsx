import { Button } from "@/components/ui/button";
import { Brain, Sparkles, Users } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-foreground/90 via-foreground/70 to-primary/30" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary-foreground">AI-Powered Competency Management</span>
          </div>
          
          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Управляйте{" "}
            <span className="shimmer-text">компетенциями</span>
            <br />с помощью ИИ
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Интеллектуальная система оценки знаний персонала: матрицы компетенций, 
            онлайн-ассессменты и AI-интервью для всех бизнес-процессов вашего предприятия
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button variant="hero" size="xl">
              Запросить демо
            </Button>
            <Button variant="hero-outline" size="xl" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              Узнать больше
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center p-6 rounded-xl bg-card/10 backdrop-blur-sm border border-primary-foreground/10">
              <Brain className="w-8 h-8 text-primary mb-3" />
              <div className="text-3xl font-bold text-primary-foreground">16+</div>
              <div className="text-sm text-primary-foreground/70">Зон применения</div>
            </div>
            <div className="flex flex-col items-center p-6 rounded-xl bg-card/10 backdrop-blur-sm border border-primary-foreground/10">
              <Users className="w-8 h-8 text-primary mb-3" />
              <div className="text-3xl font-bold text-primary-foreground">1000+</div>
              <div className="text-sm text-primary-foreground/70">Пользователей</div>
            </div>
            <div className="flex flex-col items-center p-6 rounded-xl bg-card/10 backdrop-blur-sm border border-primary-foreground/10">
              <Sparkles className="w-8 h-8 text-primary mb-3" />
              <div className="text-3xl font-bold text-primary-foreground">95%</div>
              <div className="text-sm text-primary-foreground/70">Точность оценки</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-muted/30 to-transparent" />
    </section>
  );
};

export default Hero;
