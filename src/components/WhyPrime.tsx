import { Award, Eye, Heart, Clock, MapPin, Wallet } from 'lucide-react';

const benefits = [
  {
    icon: Award,
    title: 'Qualidade',
    description: 'A qualidade no atendimento é um de nossos maiores compromissos. Sua satisfação é nosso objetivo, garantindo a qualidade de seu produto ou serviço.',
  },
  {
    icon: Eye,
    title: 'Transparência',
    description: 'Seu sucesso é nossa prioridade. Garantimos transparência total, de maneira clara e direta, propondo soluções visando única e exclusivamente seu sucesso.',
  },
  {
    icon: Heart,
    title: 'Comprometimento',
    description: 'O comprometimento é fator primordial para o sucesso. Tornamos seu problema o nosso problema, contribuindo significativamente para a resolução.',
  },
  {
    icon: Clock,
    title: 'Pontualidade',
    description: 'Primamos pela eficiência. Com processo de atendimento baseado no just in time, garantimos seu serviço no menor tempo praticável.',
  },
  {
    icon: MapPin,
    title: 'Disponibilidade',
    description: 'A Prime vai onde nosso cliente está. Disponibilizamos um consultor para atender sua demanda onde seu negócio estiver – zona rural ou urbana.',
  },
  {
    icon: Wallet,
    title: 'Preço Justo',
    description: 'A Prime representa uma opção viável condizente com seu negócio. Consultoria de qualidade com preço acessível. Solicite orçamento e comprove.',
  },
];

export function WhyPrime() {
  return (
    <section id="por-que-prime" className="section-padding">
      <div className="container-prime">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Por que a Prime?
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Nossos diferenciais fazem a{' '}
              <span className="text-primary">diferença</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Desde 2015, a Prime Consultoria atende às necessidades de empresas em diversos setores. 
              Nosso compromisso com a excelência e dedicação ao sucesso de nossos clientes nos torna a escolha certa.
            </p>

            {/* Mission/Vision/Values */}
            <div className="space-y-4">
              <div className="flex gap-4 p-4 rounded-xl bg-accent/50 border border-primary/10">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🎯</span>
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-foreground mb-1">Missão</h4>
                  <p className="text-sm text-muted-foreground">
                    Desenvolver pessoas e empresas até que se tornem referência em seu setor ou segmento.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded-xl bg-secondary/10 border border-secondary/20">
                <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">👁️</span>
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-foreground mb-1">Visão</h4>
                  <p className="text-sm text-muted-foreground">
                    Atender todo o Brasil com nossa metodologia de desenvolvimento de pessoas e negócios em até 5 anos.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Benefits Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="p-5 rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-card transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-heading font-semibold text-foreground mb-2">
                  {benefit.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
