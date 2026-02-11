import spectrogramImg from "@/assets/anti-cheat/spectrogram.jpg";
import faceMeshImg from "@/assets/anti-cheat/face-mesh.jpg";
import textAnalysisImg from "@/assets/anti-cheat/text-analysis.jpg";

const AntiCheat = () => {
  return (
    <section className="py-24 bg-secondary/5 relative overflow-hidden">
      {/* Background decorative images blended into section */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={spectrogramImg}
          alt=""
          aria-hidden="true"
          className="absolute -left-16 top-8 w-[420px] opacity-[0.12] mix-blend-multiply"
        />
        <img
          src={faceMeshImg}
          alt=""
          aria-hidden="true"
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[340px] opacity-[0.10] mix-blend-multiply"
        />
        <img
          src={textAnalysisImg}
          alt=""
          aria-hidden="true"
          className="absolute left-1/4 bottom-4 w-[400px] opacity-[0.10] mix-blend-multiply"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Объективная оценка и контроль
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Запатентованные модели античитинга обеспечивают достоверность каждого результата
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-10">
          {/* Text analysis */}
          <div className="flex items-start gap-6">
            <div className="shrink-0 w-20 h-20 rounded-lg overflow-hidden border border-border/50 bg-card/60 backdrop-blur-sm flex items-center justify-center">
              <img src={textAnalysisImg} alt="Анализ текста" className="w-full h-full object-cover opacity-60 grayscale" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-1">Анализ текстов и транскрипций</h3>
              <p className="text-muted-foreground leading-relaxed">
                Собственные NLP-модели анализируют транскрипции экзаменов и интервью, выявляя паттерны, характерные для заученных или продиктованных ответов. Алгоритмы сравнивают стилистику, лексическое разнообразие и структуру речи, чтобы отличить подлинные знания от подготовленных шпаргалок.
              </p>
            </div>
          </div>

          {/* Audio analysis */}
          <div className="flex items-start gap-6">
            <div className="shrink-0 w-20 h-20 rounded-lg overflow-hidden border border-border/50 bg-card/60 backdrop-blur-sm flex items-center justify-center">
              <img src={spectrogramImg} alt="Спектрограмма" className="w-full h-full object-cover opacity-60 grayscale" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-1">Анализ аудиозаписей</h3>
              <p className="text-muted-foreground leading-relaxed">
                Спектральный анализ аудиопотока выявляет посторонние голоса, подсказки через наушники и фоновые звуки, указывающие на использование запрещённых средств. Модели обучены на тысячах записей и распознают даже тщательно замаскированные попытки обмана.
              </p>
            </div>
          </div>

          {/* Video analysis */}
          <div className="flex items-start gap-6">
            <div className="shrink-0 w-20 h-20 rounded-lg overflow-hidden border border-border/50 bg-card/60 backdrop-blur-sm flex items-center justify-center">
              <img src={faceMeshImg} alt="Биометрия лица" className="w-full h-full object-cover opacity-60 grayscale" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-1">Анализ видеозаписей</h3>
              <p className="text-muted-foreground leading-relaxed">
                Компьютерное зрение отслеживает направление взгляда, мимику и движения кандидата в реальном времени. Контрольные точки на лице фиксируют отвлечения, чтение с экрана или присутствие посторонних лиц в кадре — всё это позволяет объективно оценить честность прохождения оценки.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground/70 italic">
            Все модели защищены патентами и разработаны на основе собственных исследований
          </p>
        </div>
      </div>
    </section>
  );
};

export default AntiCheat;
