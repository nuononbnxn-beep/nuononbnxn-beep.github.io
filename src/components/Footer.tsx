import logoPrime from '@/assets/logo-prime.jpeg';
import { Instagram, MessageCircle } from 'lucide-react';

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const footerLinks = {
  services: [
    { name: 'Prime Organizacional', id: 'servicos' },
    { name: 'Prime Alimentos', id: 'servicos' },
    { name: 'Prime Produção e Qualidade', id: 'servicos' },
    { name: 'Prime Ambiental', id: 'servicos' },
    { name: 'Prime Cursos', id: 'servicos' },
  ],
  company: [
    { name: 'Quem Somos', id: 'quem-somos' },
    { name: 'Portfólio', id: 'portfolio' },
    { name: 'Contato', id: 'contato' },
  ],
};

/* ============================================
   REDES SOCIAIS - Edite os links abaixo:
   - Instagram: coloque o link do perfil (ex: https://instagram.com/seuperfil)
   - WhatsApp: coloque o número com DDI (ex: https://wa.me/5573988043664)
   ============================================ */
const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com/SEU_PERFIL_AQUI', label: 'Instagram' },
  { icon: MessageCircle, href: 'https://wa.me/5573988043664', label: 'WhatsApp' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background/90">
      <div className="container-prime py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img 
              src={logoPrime} 
              alt="Prime Engenharia e Consultoria" 
              className="h-16 w-auto mb-4 rounded-lg"
            />
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Seu sucesso é nossa prioridade. Consultoria especializada desde 2015.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-background mb-4">Serviços</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm text-background/70 hover:text-primary transition-colors bg-transparent border-none cursor-pointer p-0"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold text-background mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm text-background/70 hover:text-primary transition-colors bg-transparent border-none cursor-pointer p-0"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-background mb-4">Contato</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li>
                <a href="mailto:contato@suaprime.com" className="hover:text-primary transition-colors">
                  contato@suaprime.com
                </a>
              </li>
              <li>
                <a href="tel:+5573988043664" className="hover:text-primary transition-colors">
                  (73) 9 8804-3664
                </a>
              </li>
              <li className="leading-relaxed">
                Locais atendidos: Bahia, Sergipe, Alagoas, Ceará, Piauí, Pernambuco, Maranhão, Minas Gerais e Massachusetts/EUA
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/50">
            © {currentYear} Prime Engenharia e Consultoria. Todos os direitos reservados.
          </p>
          <p className="text-sm text-background/50">
            CNPJ: XX.XXX.XXX/0001-XX
          </p>
        </div>
      </div>
    </footer>
  );
}
