import { Mail, Phone, MapPin, Instagram, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const contactInfo = [
  {
    icon: Mail,
    label: 'E-mail',
    value: 'contato@suaprime.com',
    href: 'mailto:contato@suaprime.com',
  },
  {
    icon: Phone,
    label: 'Celular / WhatsApp',
    value: '(73) 9 8804-3664',
    href: 'tel:+5573988043664',
  },
  {
    icon: MapPin,
    label: 'Locais atendidos',
    value: 'Bahia, Sergipe, Alagoas, Ceará, Piauí, Pernambuco, Maranhão, Minas Gerais e Massachusetts/EUA',
    href: null,
  },
];

/* ============================================
   REDES SOCIAIS - Edite os links abaixo:
   - Instagram: coloque o link do perfil (ex: https://instagram.com/seuperfil)
   - WhatsApp: coloque o número com DDI (ex: https://wa.me/5573988043664)
   ============================================ */
const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com/SEU_PERFIL_AQUI', label: 'Instagram' },
  { icon: MessageCircle, href: 'https://wa.me/5573988043664', label: 'WhatsApp' },
];

export function Contact() {
  return (
    <section id="contato" className="section-padding">
      <div className="container-prime">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Content */}
          <div>
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Fale Conosco
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              Vamos conversar sobre o{' '}
              <span className="text-primary">seu projeto</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Entre em contato conosco para agendar uma consultoria ou tirar suas dúvidas. 
              Estamos prontos para ajudar seu negócio a alcançar o sucesso.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    {info.href ? (
                      <a 
                        href={info.href}
                        className="font-semibold text-foreground hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="font-semibold text-foreground text-sm leading-relaxed">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm text-muted-foreground mb-4">Redes sociais</p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center text-foreground/70 hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-card">
            <h3 className="text-xl font-heading font-bold text-foreground mb-6">
              Fale com um especialista
            </h3>
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                  Serviço de interesse
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                >
                  <option value="">Selecione um serviço</option>
                  <option value="organizacional">Prime Organizacional</option>
                  <option value="alimentos">Prime Alimentos</option>
                  <option value="producao">Prime Produção e Qualidade</option>
                  <option value="ambiental">Prime Ambiental</option>
                  <option value="cursos">Prime Cursos</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                  placeholder="Conte-nos sobre sua necessidade..."
                />
              </div>
              <Button variant="prime" size="lg" className="w-full">
                Enviar mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
