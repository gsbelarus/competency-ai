import { Button } from "@/components/ui/button";
import { Brain, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Brain className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold text-foreground">Competence<span className="text-primary">IQ</span></span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#zones" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Зоны</a>
            <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Возможности</a>
            <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Контакты</a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm" className="text-muted-foreground">Войти</Button>
            <Button variant="default" size="sm">Узнать цены</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border/30">
            <div className="flex flex-col gap-3">
              <a href="#zones" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2">Зоны</a>
              <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2">Возможности</a>
              <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2">Контакты</a>
              <div className="flex flex-col gap-2 pt-3 border-t border-border/30">
                <Button variant="ghost" size="sm" className="justify-start">Войти</Button>
                <Button variant="default" size="sm">Узнать цены</Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
