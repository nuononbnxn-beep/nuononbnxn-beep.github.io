import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import imgOrganizacional from '@/assets/services/organizacional.jpg';
import imgAlimentos from '@/assets/services/alimentos.jpg';
import imgProducao from '@/assets/services/producao.jpg';
import imgAmbiental from '@/assets/services/ambiental.jpg';
import imgCursos from '@/assets/services/cursos.jpg';

const services = [
  {
    image: imgOrganizacional,
    title: 'Prime Organizacional',
    shortDesc: 'Consultoria para micro, pequenas e médias empresas que buscam excelência...',
    fullDesc: 'Consultoria direcionada para micro, pequenas e médias empresas que buscam a excelência em seus negócios, partindo de diagnósticos até as resoluções de problemas nas cinco grandes áreas de atuação.',
    areas: ['Estratégia', 'Marketing', 'Finanças', 'Operação', 'Gestão de Pessoas'],
  },
  {
    image: imgAlimentos,
    title: 'Prime Alimentos',
    shortDesc: 'Consultoria voltada ao setor de processamento de alimentos e bebidas...',
    fullDesc: 'Consultoria voltada ao setor de processamento de alimentos e bebidas, serviços de alimentação, indústrias, agroindústrias, restaurantes, padarias e afins.',
    areas: ['Auditoria', 'Projetos', 'Qualidade', 'Regulamentação', 'Novos Produtos'],
  },
  {
    image: imgProducao,
    title: 'Prime Produção e Qualidade',
    shortDesc: 'Ferramentas da qualidade para tornar seu negócio mais competitivo...',
    fullDesc: 'Implementação de ferramentas da qualidade mais adequadas para seu negócio, utilizando técnicas diversas para torná-lo mais competitivo e eficiente.',
    areas: ['Padronização', 'Processos', 'Eficiência', 'Competitividade'],
  },
  {
    image: imgAmbiental,
    title: 'Prime Ambiental',
    shortDesc: 'Concilie seu processo produtivo com questões ambientais...',
    fullDesc: 'Conciliar o processo produtivo com questões ambientais é fator de grande importância para o desempenho das empresas, atendendo consumidores cada vez mais conscientes.',
    areas: ['Sustentabilidade', 'Licenciamento', 'Gestão Ambiental'],
  },
  {
    image: imgCursos,
    title: 'Prime Cursos',
    shortDesc: 'Cursos online, presenciais e in company para desenvolver profissionais...',
    fullDesc: 'Diversos cursos online, presenciais ou in company para desenvolver profissionais nos setores de produção, qualidade, segurança alimentar e legislação.',
    areas: ['Online', 'Presencial', 'In Company', 'Certificação'],
  },
];

export function Services() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'start',
    slidesToScroll: 1,
    containScroll: 'trimSnaps',
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section id="servicos" className="section-padding bg-muted/30">
      <div className="container-prime">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
            Soluções completas para o{' '}
            <span className="text-primary">sucesso</span> do seu negócio
          </h2>
          <p className="text-muted-foreground text-lg">
            Oferecemos consultoria especializada em diversas áreas para impulsionar sua empresa.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0"
                >
                  <a
                    href="#contato"
                    className="group block bg-card rounded-xl overflow-hidden border border-border/50 transition-all duration-300 hover:shadow-card-hover hover:scale-[1.03] hover:-translate-y-1 hover:border-primary/30 h-full"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3 line-clamp-2 group-hover:line-clamp-none transition-all">
                        {service.shortDesc}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {service.areas.slice(0, 3).map((area, idx) => (
                          <span
                            key={idx}
                            className="text-xs font-medium px-2.5 py-1 rounded-full bg-accent text-accent-foreground"
                          >
                            {area}
                          </span>
                        ))}
                        {service.areas.length > 3 && (
                          <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-muted text-muted-foreground">
                            +{service.areas.length - 3}
                          </span>
                        )}
                      </div>
                      <span className="flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                        Saiba mais
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
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
