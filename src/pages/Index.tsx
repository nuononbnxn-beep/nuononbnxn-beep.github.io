import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { WhyPrime } from '@/components/WhyPrime';
import { Portfolio } from '@/components/Portfolio';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import flowerWatermark from '@/assets/flower-watermark.png';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Flower watermark */}
      <img
        src={flowerWatermark}
        alt=""
        aria-hidden="true"
        className="pointer-events-none fixed right-[-120px] top-[30%] w-[500px] h-[500px] object-contain opacity-[0.04] z-0 select-none"
      />
      <Header />
      <main className="relative z-10">
        <Hero />
        <Services />
        <WhyPrime />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
