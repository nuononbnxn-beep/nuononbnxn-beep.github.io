import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import whyPrimeImage from '@/assets/why-prime.jpg';

export function WhyPrime() {
  return (
    <section id="quem-somos" className="section-padding">
      <div className="container-prime">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Por que a Prime?
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Nossos diferenciais geram resultados concretos para{' '}
              <span className="text-primary">sua empresa</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-4">
              Desde 2015, a Prime Consultoria atua lado a lado com indústrias que buscam organização, 
              conformidade e alta performance. Com presença em 8 estados brasileiros e em Massachusetts (EUA), 
              transformamos desafios operacionais em eficiência, segurança e crescimento estruturado.
            </p>
            <p className="text-muted-foreground text-lg mb-8">
              Se sua empresa precisa evoluir processos e ganhar competitividade, a Prime é o próximo passo.
            </p>
            <Button variant="prime" size="lg" asChild>
              <Link to="/por-que-prime" className="gap-2">
                Conheça mais sobre a Prime
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          {/* Right - Photo */}
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
  );
}
