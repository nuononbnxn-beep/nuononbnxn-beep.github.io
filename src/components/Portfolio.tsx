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
  return (
    <section id="portfolio" className="section-padding bg-muted/30">
      <div className="container-prime">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Nosso Portfólio
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
            Empresas que{' '}
            <span className="text-primary">confiam</span> em nós
          </h2>
          <p className="text-muted-foreground text-lg">
            Temos orgulho de trabalhar com empresas que buscam excelência e qualidade em seus negócios.
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 flex items-center justify-center border border-border/50 hover:border-primary/30 hover:shadow-card transition-all duration-300 aspect-square group"
            >
              <img 
                src={client.logo} 
                alt={client.name}
                className="max-w-full max-h-20 object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Quer fazer parte do nosso portfólio de sucesso?
          </p>
          <a 
            href="#contato"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors"
          >
            Entre em contato conosco
            <span className="text-lg">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
