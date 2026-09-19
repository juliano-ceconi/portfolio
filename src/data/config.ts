import type { Lang, Localized } from '@/i18n';

export type SiteCopy = {
  siteTitle: string;
  description: string;
  keywords: string;
};

/** Texto do cabeçalho da página, por idioma. */
export const siteCopy: Localized<SiteCopy> = {
  'pt-BR': {
    siteTitle: 'Juliano Ceconi | Automação, agentes de IA e sites para PME',
    description:
      'Automação de processos, agentes de IA que atendem no WhatsApp, sistemas de gestão sob medida e criação de sites para pequenas e médias empresas. Do desenho à produção, sem repassar para terceiros.',
    keywords:
      'automação de processos, agente de IA, chatbot WhatsApp, n8n, criação de sites, landing page, CRM sob medida, integração de sistemas, Python, React, PME',
  },
  en: {
    siteTitle: 'Juliano Ceconi | Automation, AI agents and websites for small business',
    description:
      'Process automation, AI agents that answer on WhatsApp, custom management systems and website development for small and medium businesses. From design to production, nothing handed off to third parties.',
    keywords:
      'process automation, AI agent, WhatsApp chatbot, n8n, website development, landing page, custom CRM, systems integration, Python, React, small business',
  },
  es: {
    siteTitle: 'Juliano Ceconi | Automatización, agentes de IA y sitios web para pymes',
    description:
      'Automatización de procesos, agentes de IA que atienden por WhatsApp, sistemas de gestión a medida y creación de sitios web para pequeñas y medianas empresas. Del diseño a la producción, sin pasarlo a terceros.',
    keywords:
      'automatización de procesos, agente de IA, chatbot WhatsApp, n8n, creación de sitios web, landing page, CRM a medida, integración de sistemas, Python, React, pymes',
  },
};

export const config = {
  siteUrl: 'https://julianoceconi.vercel.app',
  author: 'Juliano Ceconi',
  contactEmail: 'ceconilp@gmail.com',
  favicon: '/favicon.svg',
  // Geradas por scripts/gerar_og_image.py a partir do heroData.ts (1200x630).
  ogImage: {
    'pt-BR': '/og-image.png',
    en: '/og-image-en.png',
    es: '/og-image-es.png',
  } as Record<Lang, string>,
  social: {
    linkedin: 'https://www.linkedin.com/in/juliano-ceconi-8ba137121/',
    github: 'https://github.com/juliano-ceconi',
  },
};
