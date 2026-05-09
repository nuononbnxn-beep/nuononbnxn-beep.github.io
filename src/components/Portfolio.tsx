import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import client24Horas from "@/assets/clients/24-horas.png";
import clientAcaiExpresso from "@/assets/clients/acai-expresso.jpg";
import clientBomD from "@/assets/clients/bom-d.png";
import clientJequitibaChocolate from "@/assets/clients/jequitiba-chocolate.png";
import clientBahiaSucos from "@/assets/clients/Bahia.Sucos.png";
import clientDegPolpas from "@/assets/clients/Deg_Polpas.png";
import clientFrututti from "@/assets/clients/Frututti.jfif";
import clientNatureFrutti from "@/assets/clients/Nature.Frutti.png";
import clientPolpaDoVale from "@/assets/clients/Polpa.do.Vale.png";
import clientPolpaLidery from "@/assets/clients/Polpa_Lidery.png";
import clientPolpasIpiau from "@/assets/clients/Polpas.Ipiau.png";
import clientPolpasDesfrutt from "@/assets/clients/Polpas_Desfrutt.png";
import clientPolpasLaurena from "@/assets/clients/Polpas_laurena.png";
import clientPomar from "@/assets/clients/Pomar.png";
import clientRealDoVale from "@/assets/clients/Real.do.Vale.png";
import clientSaborNatural from "@/assets/clients/Sabor Natural.png";
import clientSaborTropical from "@/assets/clients/Sabor.Tropical.png";
import clientSantaRosa from "@/assets/clients/SantaRosa.png";
import clientSucolandia from "@/assets/clients/Sucolandia...png";
import clientNaturalFrut from "@/assets/clients/natural.frut.png";
import clientNutricau from "@/assets/clients/nutricau.png";

const clients = [
  { name: "24 Horas", logo: client24Horas },
  { name: "Acai Expresso", logo: clientAcaiExpresso },
  { name: "Sucos Bom D+", logo: clientBomD },
  { name: "Jequitiba Chocolate Gourmet", logo: clientJequitibaChocolate },
  { name: "Bahia Sucos", logo: clientBahiaSucos },
  { name: "Deg Polpas", logo: clientDegPolpas },
  { name: "Frututti", logo: clientFrututti },
  { name: "Nature Frutti", logo: clientNatureFrutti },
  { name: "Polpa do Vale", logo: clientPolpaDoVale },
  { name: "Polpa Lidery", logo: clientPolpaLidery },
  { name: "Polpas Ipiau", logo: clientPolpasIpiau },
  { name: "Polpas Desfrutt", logo: clientPolpasDesfrutt },
  { name: "Polpas Laurena", logo: clientPolpasLaurena },
  { name: "Pomar", logo: clientPomar },
  { name: "Real do Vale", logo: clientRealDoVale },
  { name: "Sabor Natural", logo: clientSaborNatural },
  { name: "Sabor Tropical", logo: clientSaborTropical },
  { name: "Santa Rosa", logo: clientSantaRosa },
  { name: "Sucolandia", logo: clientSucolandia },
  { name: "Natural Frut", logo: clientNaturalFrut },
  { name: "Nutricau", logo: clientNutricau },
];

export function Portfolio() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section id="portfolio" className="section-padding bg-muted/30">
      <div className="container-prime">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Nosso Portfolio
          </span>
          <h2 className="mb-6 text-3xl font-heading font-bold text-foreground md:text-4xl">
            Empresas que <span className="text-primary">confiam</span> em nos
          </h2>
          <p className="text-lg text-muted-foreground">
            Temos orgulho de trabalhar com empresas que buscam excelencia e qualidade.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="min-w-0 flex-[0_0_40%] sm:flex-[0_0_28%] md:flex-[0_0_20%] lg:flex-[0_0_16%]"
                >
                  <div className="group aspect-square rounded-xl border border-border/50 bg-card p-6 transition-all duration-500 hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-card-hover">
                    <div className="flex h-full items-center justify-center">
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="max-h-20 max-w-full object-contain opacity-75 grayscale saturate-[0.85] transition-all duration-500 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0 group-hover:saturate-100"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            className="absolute -left-4 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-md transition-colors hover:bg-primary hover:text-primary-foreground md:flex"
            aria-label="Anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute -right-4 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-md transition-colors hover:bg-primary hover:text-primary-foreground md:flex"
            aria-label="Proximo"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
