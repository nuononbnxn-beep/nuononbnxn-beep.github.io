import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Award, Eye, Heart, Clock, MapPin, Wallet, Star, Handshake, Lightbulb, Shield } from 'lucide-react';
import whyPrimeImage from '@/assets/why-prime.jpg';

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

const values = [
  {
    icon: Shield,
    title: 'Ética',
    description: 'Agimos com integridade em todas as relações, mantendo a confiança de nossos clientes e parceiros.',
  },
  {
    icon: Star,
    title: 'Excelência',
    description: 'Buscamos constantemente a excelência em tudo o que fazemos, superando expectativas.',
  },
  {
    icon: Lightbulb,
    title: 'Inovação',
    description: 'Buscamos soluções criativas e inovadoras para os desafios de nossos clientes.',
  },
  {
    icon: Handshake,
    title: 'Respeito',
    description: 'Valorizamos cada pessoa e empresa com quem nos relacionamos, construindo parcerias duradouras.',
  },
];

export default function WhyPrimePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative py-20 bg-primary">
          <div className="container-prime text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
              Por que a Prime?
            </h1>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              Conheça nossos diferenciais, missão, visão e valores que nos guiam desde 2015.
            </p>
          </div>
        </section>

        {/* About + Image */}
        <section className="section-padding">
          <div className="container-prime">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                  Sobre Nós
                </span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                  Nossos diferenciais fazem a{' '}
                  <span className="text-primary">diferença</span>
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  Desde 2015, a Prime Consultoria atende às necessidades de empresas em diversos setores. 
                  Nosso compromisso com a excelência e dedicação ao sucesso de nossos clientes nos torna a escolha certa.
                </p>
                <p className="text-muted-foreground text-lg">
                  Atuamos em mais de 8 estados brasileiros e nos Estados Unidos, com mais de 150 empresas atendidas 
                  e mais de 9 anos de experiência acumulada em consultoria industrial e organizacional.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={whyPrimeImage}
                  alt="Equipe Prime Consultoria"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-padding bg-muted/30">
          <div className="container-prime">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                Propósito
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                Missão e Visão
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="flex gap-4 p-6 rounded-xl bg-card border border-primary/10 shadow-card">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl">🎯</span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground text-xl mb-2">Missão</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Desenvolver pessoas e empresas até que se tornem referência em seu setor ou segmento.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-6 rounded-xl bg-card border border-secondary/20 shadow-card">
                <div className="w-14 h-14 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl">👁️</span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground text-xl mb-2">Visão</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Atender todo o Brasil com nossa metodologia de desenvolvimento de pessoas e negócios em até 5 anos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding">
          <div className="container-prime">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                Nossos Valores
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                O que nos <span className="text-primary">guia</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-card transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-secondary" />
                  </div>
                  <h4 className="font-heading font-bold text-foreground mb-2">{value.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="section-padding bg-muted/30">
          <div className="container-prime">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                Diferenciais
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                Por que escolher a <span className="text-primary">Prime</span>?
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-card transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-heading font-bold text-foreground mb-2 text-lg">
                    {benefit.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary">
          <div className="container-prime text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
              Pronto para transformar seu negócio?
            </h2>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
              Entre em contato e descubra como a Prime pode impulsionar seus resultados.
            </p>
            <a
              href="/#contato"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground font-bold px-8 py-4 rounded-lg hover:bg-secondary/90 transition-colors text-lg"
            >
              Fale com um especialista
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
