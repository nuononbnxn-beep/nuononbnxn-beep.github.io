import { MessageCircle } from 'lucide-react';

export function WhatsAppStrip() {
  return (
    <section className="bg-primary py-5">
      <div className="container-prime flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
        <p className="text-primary-foreground font-medium text-center sm:text-left">
          Toque no botão para falar conosco por WhatsApp e tire sua dúvida agora mesmo!
        </p>
        <a
          href="https://wa.me/5573988043664"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-background text-foreground font-bold px-6 py-3 rounded-lg hover:bg-background/90 transition-colors whitespace-nowrap border-2 border-background"
        >
          <MessageCircle className="w-4 h-4" />
          FALE CONOSCO
        </a>
      </div>
    </section>
  );
}
