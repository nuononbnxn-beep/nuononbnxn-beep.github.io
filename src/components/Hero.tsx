import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowRight, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroSlide1 from '@/assets/hero/slide-1.jpg';
import heroSlide2 from '@/assets/hero/slide-2.jpg';
import heroSlide3 from '@/assets/hero/slide-3.jpg';

const slides = [
  {
    image: heroSlide1,
    title: 'Sua consultoria Prime',
    subtitle: 'Excelência em consultoria industrial para negócios que valorizam resultados, qualidade e evolução contínua.',
    cta: { text: 'Conheça nossos serviços', href: '#servicos' },
  },
  {
    image: heroSlide2,
    title: 'Prime Alimentos',
    subtitle: 'Consultoria especializada para o setor de processamento de alimentos e bebidas com foco em qualidade e regulamentação.',
    cta: { text: 'Saiba mais', href: '#servicos' },
  },
  {
    image: heroSlide3,
    title: 'Prime Organizacional',
    subtitle: 'Diagnósticos e soluções para micro, pequenas e médias empresas que buscam excelência.',
    cta: { text: 'Saiba mais', href: '#servicos' },
  },
];

const highlights = [
  'Consultoria especializada',
  'Clientes satisfeitos em 8 estados brasileiros',
  'Especialistas em regularização',
];

const stats = [
  { value: '+9', label: 'Anos de experiência' },
  { value: '8+', label: 'Estados atendidos e EUA' },
  { value: '+150', label: 'Empresas atendidas' },
];

export function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);

    const interval = setInterval(() => emblaApi.scrollNext(), 5000);
    return () => {
      clearInterval(interval);
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  return (
    <section id="home" className="relative pt-20">
      {/* Carousel */}
      <div className="relative overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div key={index} className="relative flex-[0_0_100%] min-w-0">
              <div className="relative h-[480px] md:h-[560px] lg:h-[620px]">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-foreground/60" />
                <div className="relative h-full flex items-center">
                  <div className="container-prime">
                    <div className="max-w-2xl">
                      <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4 drop-shadow-lg">
                        {slide.title}
                      </h1>
                      <p className="text-lg md:text-xl text-white/90 mb-8 drop-shadow">
                        {slide.subtitle}
                      </p>
                      <Button variant="prime" size="lg" asChild>
                        <a href={slide.cta.href} className="gap-2">
                          {slide.cta.text}
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={scrollPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/40 transition-colors"
          aria-label="Slide anterior"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/40 transition-colors"
          aria-label="Próximo slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === selectedIndex ? 'bg-primary' : 'bg-white/50'
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Highlights strip */}
      <div className="bg-accent py-4">
        <div className="container-prime">
          <div className="flex flex-wrap justify-center gap-6">
            {highlights.map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-foreground/80">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats blocks */}
      <div className="container-prime py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`rounded-xl p-8 text-center ${
                index === 1
                  ? 'bg-secondary text-secondary-foreground'
                  : 'bg-primary text-primary-foreground'
              }`}
            >
              <div className="text-4xl md:text-5xl font-heading font-bold mb-2">{stat.value}</div>
              <div className="text-sm font-medium opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
