import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Shield, Star, Lightbulb, Handshake, Eye, Heart } from 'lucide-react';
import whyPrimeImage from '@/assets/why-prime.jpg';

const values = [
  { icon: Shield, title: 'Ética', description: 'Transparência em todas as ações.' },
  { icon: Star, title: 'Compromisso', description: 'Resultados que fazem a diferença.' },
  { icon: Eye, title: 'Transparência', description: 'Comunicação clara e direta.' },
  { icon: Lightbulb, title: 'Proatividade', description: 'Agir com estratégia e precisão técnica.' },
  { icon: Heart, title: 'Versatilidade', description: 'Soluções adaptadas a cada realidade.' },
  { icon: Handshake, title: 'Coletividade', description: 'Trabalho colaborativo com clientes e equipe.' },
];

const differentials = [
  'Expertise Técnica desde 2015',
  'Equipe multidisciplinar especializada',
  'Abordagem prática e orientada a resultados',
  'Metodologias reconhecidas pelo mercado',
  'Atuação internacional e nacional',
  'Foco em conformidade, padronização e desempenho',
];

const methodology = [
  'Diagnóstico técnico especializado',
  'Planejamento estratégico orientado por dados',
  'Implementação de soluções personalizadas',
  'Monitoramento de resultados',
  'Acompanhamento e melhoria contínua',
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
              Consultoria Industrial Especializada
            </h1>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              Desde 2015 impulsionando desempenho, conformidade e resultados de industriais de todos os tamanhos no Brasil e nos EUA.
            </p>
          </div>
        </section>

        {/* Nossa História */}
        <section className="section-padding">
          <div className="container-prime">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                  Nossa História
                </span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                  De alimentos à <span className="text-primary">excelência industrial</span>
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  A Prime Consultoria foi fundada em 2015 com foco inicial em atender às demandas técnicas da indústria alimentícia. 
                  À medida que avançamos, identificamos a necessidade de aplicar nossa expertise em outras áreas industriais, 
                  expandindo nossos serviços para qualidade, produção e gestão ambiental.
                </p>
                <p className="text-muted-foreground text-lg">
                  Hoje, atendemos empresas de diversos setores e portes com o mesmo compromisso de excelência e foco em resultados concretos.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img src={whyPrimeImage} alt="Equipe Prime Consultoria" className="w-full h-auto object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Missão & Visão */}
        <section className="section-padding bg-muted/30">
          <div className="container-prime">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">Propósito</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Missão e Visão</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="flex gap-4 p-6 rounded-xl bg-card border border-primary/10 shadow-card">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-3xl">🎯</span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground text-xl mb-2">Missão</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Desenvolver pessoas e empresas com soluções técnicas que geram competitividade, eficiência operacional e vantagem estratégica no mercado.
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
                    Ser referência nacional e internacional em consultoria industrial, ofertando metodologias que transformam desafios em crescimento estruturado.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Valores */}
        <section className="section-padding">
          <div className="container-prime">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">Nossos Valores</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                O que nos <span className="text-primary">guia</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <div key={index} className="text-center p-6 rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-card transition-all duration-300">
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

        {/* Metodologia */}
        <section className="section-padding bg-muted/30">
          <div className="container-prime">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">Metodologia</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                Como <span className="text-primary">transformamos</span> empresas
              </h2>
            </div>
            <div className="max-w-2xl mx-auto space-y-4">
              {methodology.map((step, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0 text-primary-foreground font-bold">
                    {index + 1}
                  </div>
                  <p className="text-foreground font-medium">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Diferenciais */}
        <section className="section-padding">
          <div className="container-prime">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">Diferenciais</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                Diferenciais <span className="text-primary">Prime</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {differentials.map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-accent border border-primary/10">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <p className="text-foreground font-medium text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Presença Geográfica */}
        <section className="section-padding bg-muted/30">
          <div className="container-prime text-center max-w-3xl mx-auto">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">Presença</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Atuação <span className="text-primary">consolidada</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Com presença ativa em 8 estados brasileiros — Bahia, Sergipe, Alagoas, Ceará, Piauí, Pernambuco, 
              Maranhão e Minas Gerais — e em Massachusetts (EUA), a Prime combina visão técnica com abrangência operacional.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary">
          <div className="container-prime text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
              Pronto para levar sua empresa ao próximo nível?
            </h2>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
              Fale com um consultor especializado.
            </p>
            <a
              href="/#contato"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground font-bold px-8 py-4 rounded-lg hover:bg-secondary/90 transition-colors text-lg"
            >
              Fale com um consultor
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
