import { ServicePageLayout } from '@/components/ServicePageLayout';
import { Settings, TrendingUp, ClipboardCheck, BarChart3, Target } from 'lucide-react';
import imgProducao from '@/assets/services/producao.jpg';

export default function PrimeProducaoPage() {
  return (
    <ServicePageLayout
      heroTitle="Consultoria em Produção e Qualidade Industrial"
      heroSubtitle="Otimização de processos, padronização e performance operacional com foco em resultados mensuráveis."
      heroImage={imgProducao}
      whatIsTitle="O que é o Prime Produção & Qualidade"
      whatIsContent={[
        'O Prime Produção & Qualidade é um serviço da Prime Consultoria focado em elevar o desempenho operacional da sua indústria, por meio da melhoria de processos, padronização de procedimentos e implantação de ferramentas técnicas que garantem produtividade, confiabilidade e competitividade.',
        'Nosso foco é fazer com que sua produção funcione com mais eficiência, repetibilidade e menos desperdícios, gerando mais valor por ciclo produtivo.',
      ]}
      targetTitle="Para quem é esse serviço"
      targetIntro="Nossa consultoria é indicada para:"
      targetItems={[
        'Indústrias que precisam reduzir tempos e custos de produção',
        'Empresas que desejam aumentar a capacidade produtiva',
        'Processos que exigem padronização e conformidade técnica',
        'Operações que querem melhorar a qualidade do produto final',
        'Equipes que buscam desenvolver padrões de excelência internos',
      ]}
      servicesTitle="Principais Serviços"
      services={[
        { icon: ClipboardCheck, title: 'Mapeamento de Processos', description: 'Identificação de gargalos produtivos e oportunidades de melhoria com base em resultados reais.' },
        { icon: TrendingUp, title: 'Otimização da Produção', description: 'Aplicação de métodos técnicos para reduzir desperdícios, retrabalho e tempos improdutivos.' },
        { icon: Settings, title: 'Padronização Industrial', description: 'Estruturação de procedimentos padronizados e escaláveis para garantir repetibilidade e qualidade.' },
        { icon: Target, title: 'Controle de Qualidade', description: 'Definição de critérios e métricas objetivas para acompanhar e manter padrões de produção.' },
        { icon: BarChart3, title: 'Indicadores de Desempenho (KPIs)', description: 'Implementação de indicadores inteligentes que permitem tomada de decisões assertivas.' },
      ]}
      benefits={[
        'Aumento de eficiência operacional e produtividade',
        'Redução de custos e desperdícios',
        'Processos mais estáveis e previsíveis',
        'Maior controle de qualidade interna',
        'Decisões baseadas em métricas claras',
        'Preparação para auditorias e certificações',
      ]}
      methodology={[
        { text: 'Diagnóstico completo de produção' },
        { text: 'Planejamento de melhorias personalizadas' },
        { text: 'Implantação de soluções técnicas' },
        { text: 'Capacitação das equipes' },
        { text: 'Monitoramento e evolução constante' },
      ]}
      methodologyIntro="Nossa metodologia é clara, técnica e orientada para execução:"
      ctaTitle="Preparado para levar sua produção e qualidade ao próximo nível?"
      ctaSubtitle="Fale com um especialista e solicite uma reunião."
      ctaButton="Falar com um especialista"
      seoKeywords={[
        'consultoria de produção industrial',
        'otimização de processos industriais',
        'padronização industrial',
        'melhoria de produção industrial',
        'indicadores de desempenho industrial',
        'melhoria contínua na indústria',
        'consultoria de qualidade industrial',
      ]}
    />
  );
}
