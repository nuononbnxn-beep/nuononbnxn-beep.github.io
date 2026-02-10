import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import client24Horas from '@/assets/clients/24-horas.png';
import clientJequitibaMarca from '@/assets/clients/jequitiba-marca.png';
import clientAcaiExpresso from '@/assets/clients/acai-expresso.jpg';
import clientBomD from '@/assets/clients/bom-d.png';
import clientJequitibaChocolate from '@/assets/clients/jequitiba-chocolate.png';
import clientSucoGabriela from '@/assets/clients/suco-gabriela.jpg';

const clients = [
  { name: '24 Horas', logo: client24Horas },
  { name: 'Jequitibá', logo: clientJequitibaMarca },
  { name: 'Açaí Expresso', logo: clientAcaiExpresso },
  { name: 'Sucos Bom D+', logo: clientBomD },
  { name: 'Jequitibá Chocolate Gourmet', logo: clientJequitibaChocolate },
  { name: 'Suco Gabriela', logo: clientSucoGabriela },
];

export function Portfolio() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 1,
    containScroll: 'trimSnaps',
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section id="portfolio" className="section-padding bg-muted/30">
      <div className="container-prime">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Nosso Portfólio
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
            Empresas que{' '}
            <span className="text-primary">confiam</span> em nós
          </h2>
          <p className="text-muted-foreground text-lg">
            Temos orgulho de trabalhar com empresas que buscam excelência e qualidade.
          </p>
        </div>

        {/* Clients Carousel */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="flex-[0_0_40%] sm:flex-[0_0_28%] md:flex-[0_0_20%] lg:flex-[0_0_16%] min-w-0"
                >
                  <div className="bg-card rounded-xl p-6 flex items-center justify-center border border-border/50 hover:border-primary/30 hover:shadow-card transition-all duration-300 aspect-square group">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-w-full max-h-20 object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            className="absolute -left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card border border-border shadow-md items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors hidden md:flex"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card border border-border shadow-md items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors hidden md:flex"
            aria-label="Próximo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
