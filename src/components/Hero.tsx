import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const highlights = [
  'Consultoria especializada',
  'Atendimento em Bahia e Sergipe',
  'Preço justo e acessível',
];

export function Hero() {
  return (
    <section id="home" className="relative pt-20 overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 -z-10"
        style={{ background: 'var(--gradient-hero)' }}
      />
      
      {/* Decorative elements */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl -z-10" />

      <div className="container-prime section-padding">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/20 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-accent-foreground">
              Seu sucesso é nossa prioridade
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6 animate-slide-up">
            Sua consultoria{' '}
            <span className="text-primary">Prime</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Você acreditaria se eu lhe dissesse que a chave do sucesso de seu negócio pode estar mais perto do que você imagina?
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 text-sm text-foreground/80"
              >
                <CheckCircle2 className="w-4 h-4 text-primary" />
                {item}
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Button variant="prime" size="lg" asChild>
              <a href="#servicos" className="gap-2">
                Conheça nossos serviços
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#quem-somos">Saiba mais sobre nós</a>
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-10 border-t border-border/50">
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">+9</div>
            <div className="text-sm text-muted-foreground">Anos de experiência</div>
          </div>
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">5</div>
            <div className="text-sm text-muted-foreground">Áreas de atuação</div>
          </div>
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">2</div>
            <div className="text-sm text-muted-foreground">Estados atendidos</div>
          </div>
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.7s' }}>
            <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Comprometimento</div>
          </div>
        </div>
      </div>
    </section>
  );
}
