import whatsappLogo from '@/assets/whatsapp-logo.png';

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5573988043664"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full hover:scale-110 transition-transform"
    >
      <img src={whatsappLogo} alt="WhatsApp" className="w-full h-full object-contain drop-shadow-lg" />
    </a>
  );
}
