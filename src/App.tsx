import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import WhyPrimePage from "./pages/WhyPrimePage";
import PrimeAlimentosPage from "./pages/PrimeAlimentosPage";
import PrimeProducaoPage from "./pages/PrimeProducaoPage";
import PrimeAmbientalPage from "./pages/PrimeAmbientalPage";
import { ScrollToTop } from "./components/ScrollToTop";
import { WhatsAppFloat } from "./components/WhatsAppFloat";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <ScrollToTop />
        <WhatsAppFloat />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/quem-somos" element={<WhyPrimePage />} />
          <Route path="/servicos/alimentos" element={<PrimeAlimentosPage />} />
          <Route path="/servicos/producao" element={<PrimeProducaoPage />} />
          <Route path="/servicos/ambiental" element={<PrimeAmbientalPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
