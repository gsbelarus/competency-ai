import { Brain } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Brain className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold text-foreground">Competence<span className="text-primary">IQ</span></span>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              AI-система управления компетенциями персонала для enterprise-масштаба
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Продукт</h4>
            <ul className="space-y-2">
              {["Возможности", "Тарифы", "Интеграции", "API"].map(link => (
                <li key={link}><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Компания</h4>
            <ul className="space-y-2">
              {["О нас", "Контакты", "Блог", "Карьера"].map(link => (
                <li key={link}><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">© 2025 CompetenceIQ. Все права защищены.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Политика конфиденциальности</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
