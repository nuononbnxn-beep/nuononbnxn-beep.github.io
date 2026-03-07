import whatsappLogo from '@/assets/whatsapp-logo.png';

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5573988043664"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp (73) 9 8804-3664"
      className="fixed bottom-6 right-6 z-50 w-20 h-20 rounded-full hover:scale-110 transition-transform"
    >
      <img src={whatsappLogo} alt="WhatsApp" className="w-full h-full object-contain" style={{ filter: 'drop-shadow(0 0 2px white) drop-shadow(0 0 2px white) drop-shadow(0 0 1px white)' }} />
    </a>
  );
}
