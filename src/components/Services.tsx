import { Building2, UtensilsCrossed, Cog, Leaf, GraduationCap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Building2,
    title: 'Prime Organizacional',
    description: 'Consultoria direcionada para micro, pequenas e médias empresas que buscam a excelência em seus negócios, partindo de diagnósticos até as resoluções de problemas nas cinco grandes áreas de atuação.',
    areas: ['Estratégia', 'Marketing', 'Finanças', 'Operação', 'Gestão de Pessoas'],
    color: 'primary',
  },
  {
    icon: UtensilsCrossed,
    title: 'Prime Alimentos',
    description: 'Consultoria voltada ao setor de processamento de alimentos e bebidas, serviços de alimentação, indústrias, agroindústrias, restaurantes, padarias e afins.',
    areas: ['Auditoria', 'Projetos', 'Qualidade', 'Regulamentação', 'Novos Produtos'],
    color: 'secondary',
  },
  {
    icon: Cog,
    title: 'Prime Produção e Qualidade',
    description: 'Implementação ou instalação de ferramentas da qualidade mais adequadas para seu negócio, utilizando as mais diversas técnicas para torná-lo mais competitivo e eficiente.',
    areas: ['Padronização', 'Processos', 'Eficiência', 'Competitividade'],
    color: 'primary',
  },
  {
    icon: Leaf,
    title: 'Prime Ambiental',
    description: 'Conciliar o processo produtivo com questões ambientais é fator de grande importância para o desempenho das empresas, atendendo consumidores cada vez mais conscientes.',
    areas: ['Sustentabilidade', 'Licenciamento', 'Gestão Ambiental'],
    color: 'secondary',
  },
  {
    icon: GraduationCap,
    title: 'Prime Cursos',
    description: 'Diversos cursos online, presenciais ou in company, com o objetivo de desenvolver profissionais nos setores de produção, qualidade, segurança alimentar e legislação.',
    areas: ['Online', 'Presencial', 'In Company', 'Certificação'],
    color: 'primary',
  },
];

export function Services() {
  return (
    <section id="servicos" className="section-padding bg-muted/30">
      <div className="container-prime">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
            Soluções completas para o{' '}
            <span className="text-primary">sucesso</span> do seu negócio
          </h2>
          <p className="text-muted-foreground text-lg">
            Oferecemos consultoria especializada em diversas áreas para impulsionar sua empresa ao próximo nível.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="card-service group"
            >
              {/* Icon */}
              <div 
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${
                  service.color === 'primary' 
                    ? 'bg-primary/10 text-primary' 
                    : 'bg-secondary/20 text-secondary'
                }`}
              >
                <service.icon className="w-7 h-7" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {service.areas.map((area, idx) => (
                  <span 
                    key={idx}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-accent text-accent-foreground"
                  >
                    {area}
                  </span>
                ))}
              </div>

              {/* Link */}
              <Button variant="ghost" size="sm" className="group/btn p-0 h-auto text-primary hover:text-primary/80 hover:bg-transparent">
                <span className="flex items-center gap-2">
                  Saiba mais
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </span>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
