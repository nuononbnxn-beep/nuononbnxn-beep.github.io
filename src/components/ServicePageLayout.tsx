import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';
import flowerWatermark from '@/assets/flower-watermark.png';
import type { LucideIcon } from 'lucide-react';

interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface MethodologyStep {
  text: string;
}

interface ServicePageProps {
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  whatIsTitle: string;
  whatIsContent: string[];
  targetTitle: string;
  targetIntro: string;
  targetItems: string[];
  services: ServiceItem[];
  servicesTitle: string;
  benefits: string[];
  methodology: MethodologyStep[];
  methodologyIntro: string;
  ctaTitle: string;
  ctaSubtitle: string;
  ctaButton: string;
  seoKeywords: string[];
}

export function ServicePageLayout({
  heroTitle,
  heroSubtitle,
  heroImage,
  whatIsTitle,
  whatIsContent,
  targetTitle,
  targetIntro,
  targetItems,
  services,
  servicesTitle,
  benefits,
  methodology,
  methodologyIntro,
  ctaTitle,
  ctaSubtitle,
  ctaButton,
}: ServicePageProps) {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <img src={flowerWatermark} alt="" aria-hidden="true" className="pointer-events-none fixed right-[-120px] top-[30%] w-[500px] h-[500px] object-contain opacity-[0.04] z-0 select-none" />
      <Header />
      <main className="relative z-10 pt-20">
        {/* Hero */}
        <section className="relative py-20 overflow-hidden">
          <img src={heroImage} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/70" />
          <div className="container-prime relative text-center">
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4 drop-shadow-lg">
              {heroTitle}
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8 drop-shadow">
              {heroSubtitle}
            </p>
            <Button variant="prime" size="lg" asChild>
              <a href="https://wa.me/5573988043664" target="_blank" rel="noopener noreferrer" className="gap-2">
                <MessageCircle className="w-4 h-4" />
                Fale com um consultor
              </a>
            </Button>
          </div>
        </section>

        {/* O que é */}
        <section className="section-padding">
          <div className="container-prime max-w-4xl">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">Sobre</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">{whatIsTitle}</h2>
            {whatIsContent.map((p, i) => (
              <p key={i} className="text-muted-foreground text-lg mb-4 leading-relaxed">{p}</p>
            ))}
          </div>
        </section>

        {/* Para quem */}
        <section className="section-padding bg-muted/30">
          <div className="container-prime max-w-4xl">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">Público-alvo</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">{targetTitle}</h2>
            <p className="text-muted-foreground text-lg mb-8">{targetIntro}</p>
            <div className="space-y-3">
              {targetItems.map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border/50">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Serviços */}
        <section className="section-padding">
          <div className="container-prime">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">O que fazemos</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">{servicesTitle}</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {services.map((service, i) => (
                <div key={i} className="p-6 rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-card transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section className="section-padding bg-muted/30">
          <div className="container-prime max-w-4xl">
            <div className="text-center mb-12">
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">Benefícios</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                Benefícios que sua empresa vai <span className="text-primary">conquistar</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-card border border-primary/10">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <p className="text-foreground font-medium text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Metodologia */}
        <section className="section-padding">
          <div className="container-prime max-w-3xl">
            <div className="text-center mb-12">
              <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">Metodologia</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Nossa <span className="text-primary">Metodologia</span>
              </h2>
              <p className="text-muted-foreground text-lg">{methodologyIntro}</p>
            </div>
            <div className="space-y-4">
              {methodology.map((step, i) => (
                <div key={i} className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border/50">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0 text-primary-foreground font-bold">
                    {i + 1}
                  </div>
                  <p className="text-foreground font-medium">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary">
          <div className="container-prime text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
              {ctaTitle}
            </h2>
            <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
              {ctaSubtitle}
            </p>
            <a
              href="https://wa.me/5573988043664"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-secondary text-secondary-foreground font-bold px-8 py-4 rounded-lg hover:bg-secondary/90 transition-colors text-lg shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="w-5 h-5" />
              {ctaButton}
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
