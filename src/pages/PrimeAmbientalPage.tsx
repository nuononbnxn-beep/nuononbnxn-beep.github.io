import { ServicePageLayout } from '@/components/ServicePageLayout';
import { FileText, Recycle, BarChart3, ClipboardCheck, Search } from 'lucide-react';
import imgAmbiental from '@/assets/services/ambiental.jpg';

export default function PrimeAmbientalPage() {
  return (
    <ServicePageLayout
      heroTitle="Consultoria Ambiental Industrial"
      heroSubtitle="Estratégias técnicas para conformidade regulatória, gestão de resíduos e desempenho ambiental."
      heroImage={imgAmbiental}
      whatIsTitle="O que é a Prime Ambiental"
      whatIsContent={[
        'A Prime Ambiental é um serviço da Prime Consultoria dedicado a empresas que buscam adequação às exigências ambientais, melhor desempenho nos processos e gestão técnica de resíduos e impactos.',
        'Nossa abordagem une conhecimento técnico, soluções práticas e foco em conformidade legal, permitindo que sua empresa opere com segurança, previsibilidade e competitividade.',
      ]}
      targetTitle="Para quem é este serviço"
      targetIntro="Essa consultoria é indicada para:"
      targetItems={[
        'Indústrias que precisam atender às normas ambientais federais, estaduais e municipais',
        'Empresas que desejam regularizar licenças ambientais',
        'Operações que buscam eficiência na gestão de resíduos',
        'Negócios que precisam padronizar procedimentos ambientais',
        'Equipes que querem reduzir passivos e riscos legais',
      ]}
      servicesTitle="Nossos Serviços"
      services={[
        { icon: FileText, title: 'Licenciamento Ambiental', description: 'Acompanhamento e preparo de documentação para obtenção ou renovação de licenças junto aos órgãos competentes.' },
        { icon: Recycle, title: 'PGRS — Plano de Gerenciamento de Resíduos Sólidos', description: 'Estruturação e implementação do PGRS conforme a legislação aplicável ao seu segmento de atuação.' },
        { icon: BarChart3, title: 'Monitoramento e Controle de Impactos', description: 'Avaliação e acompanhamento de indicadores ambientais para assegurar conformidade e desempenho.' },
        { icon: ClipboardCheck, title: 'Elaboração de Relatórios e Estudos Técnicos', description: 'Produção de relatórios ambientais, laudos e pareceres técnicos exigidos em processos legais ou auditorias.' },
        { icon: Search, title: 'Auditorias Ambientais Internas', description: 'Verificação técnica de processos ambientais para antecipar falhas, corrigir desvios e garantir aderência às normas vigentes.' },
      ]}
      benefits={[
        'Conformidade com a legislação ambiental',
        'Redução de riscos legais e passivos ambientais',
        'Gestão eficiente de resíduos',
        'Licenças ambientais em dia',
        'Processos ambientais padronizados',
        'Preparação para auditorias e fiscalizações',
      ]}
      methodology={[
        { text: 'Diagnóstico Ambiental' },
        { text: 'Planejamento Ambiental Personalizado' },
        { text: 'Implementação de Ações Necessárias' },
        { text: 'Capacitação da Equipe' },
        { text: 'Monitoramento de Resultados' },
      ]}
      methodologyIntro="Nossa atuação é técnica, prática e orientada a resultados:"
      ctaTitle="Quer garantir a conformidade ambiental e melhorar seus processos?"
      ctaSubtitle="Solicite uma reunião com nossos especialistas."
      ctaButton="Fale com um especialista"
      seoKeywords={[
        'consultoria ambiental industrial',
        'conformidade ambiental',
        'licenciamento ambiental',
        'gestão de resíduos sólidos',
        'PGRS',
        'auditoria ambiental industrial',
        'consultoria técnica ambiental',
        'desempenho ambiental industrial',
      ]}
    />
  );
}
