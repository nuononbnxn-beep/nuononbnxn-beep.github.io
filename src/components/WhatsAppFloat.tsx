import whatsappLogo from '@/assets/whatsapp-logo.png';

export function WhatsAppFloat() {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=5573988043664&text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es!"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp (73) 9 8804-3664"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full hover:scale-110 transition-transform"
    >
      <img src={whatsappLogo} alt="WhatsApp" className="w-full h-full object-contain" />
    </a>
  );
}
