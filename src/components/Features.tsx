import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, MessageSquare, ClipboardCheck, Layers } from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "Матрицы знаний",
    description: "Гибко настраиваемые матрицы компетенций для каждой должности и роли. Структурированные вопросы с различными уровнями сложности."
  },
  {
    icon: ClipboardCheck,
    title: "Онлайн-ассессменты",
    description: "Проведение тестирований в любое время из любой точки мира. Автоматическая проверка и детальная аналитика результатов."
  },
  {
    icon: MessageSquare,
    title: "AI-интервью",
    description: "Интеллектуальный ассистент проводит структурированные интервью, оценивает ответы и формирует объективные заключения."
  },
  {
    icon: Brain,
    title: "Аналитика и отчёты",
    description: "Глубокий анализ компетенций команды, выявление пробелов в знаниях и персонализированные рекомендации по развитию."
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Инструменты системы
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Комплексное решение для оценки и развития компетенций вашего персонала
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="w-7 h-7 text-accent-foreground group-hover:text-primary transition-colors duration-300" />
                </div>
                <CardTitle className="text-xl text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
