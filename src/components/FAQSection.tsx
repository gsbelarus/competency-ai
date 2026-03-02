import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Сколько времени занимает внедрение системы?",
    a: "Базовое внедрение занимает 2–4 недели. Включает настройку матриц компетенций под ваши роли, интеграцию с HR-системой и обучение администраторов.",
  },
  {
    q: "Можно ли интегрировать с нашей HR-системой?",
    a: "Да, CompetenceIQ поддерживает интеграцию через API с основными HR-системами: SAP SuccessFactors, 1С, Битрикс24, а также любые системы с REST API.",
  },
  {
    q: "Как обеспечивается объективность оценки?",
    a: "Система использует многослойную валидацию: стандартизированные вопросы, AI-анализ ответов, античитинг-модели и поведенческие индикаторы. Все результаты протоколируются.",
  },
  {
    q: "Подходит ли для компаний с распределённой структурой?",
    a: "Да, система спроектирована для enterprise-масштаба. Поддержка региональных подразделений, локальных нормативов и многоуровневой аналитики по филиалам.",
  },
  {
    q: "Какие форматы отчётов доступны?",
    a: "Персональные отчёты по сотрудникам, сводные по подразделениям, карты пробелов, матрицы рисков и отчёты для регуляторных аудитов в формате PDF и Excel.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">FAQ</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Частые вопросы
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-xl border border-border/50 bg-card/50 px-6 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left text-base font-medium text-foreground hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
