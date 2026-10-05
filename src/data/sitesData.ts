import type { Localized } from '@/i18n';

export interface Site {
  id: number;
  name: string;
  pitch: string;
  tags: string[];
  url: string;
  /** Usado para localizar a captura de tela em `public/vitrine/<slug>.webp`. */
  slug: string;
  /** Chave do rótulo do card; o texto vem de `src/i18n/ui.ts`. */
  label: 'cliente' | 'proprio' | 'cofounder-cto';
}

export const sites: Localized<Site[]> = {
  'pt-BR': [
    {
      id: 1,
      name: 'Hub Agente IA',
      pitch:
        'Plataforma comercial de automação e agentes de IA para empresas, com apresentação de soluções, atendimento 24/7 e captação integrada.',
      tags: ['Agentes de IA', 'Automação comercial', 'WhatsApp', 'Conversão'],
      url: 'https://www.hubagenteia.com.br/',
      slug: 'hub-agente-ia',
      label: 'cofounder-cto',
    },
    {
      id: 2,
      name: 'Juliano Ceconi Academy',
      pitch:
        'Plataforma de cursos completa, com área de aluno, vídeo e acompanhamento de progresso, hospedada em servidor próprio.',
      tags: ['Plataforma de cursos', 'Área de aluno', 'React', 'Servidor próprio'],
      url: 'https://academy.zanettin.cloud',
      slug: 'academy',
      label: 'proprio',
    },
    {
      id: 3,
      name: 'Doroapp',
      pitch:
        'Aplicativo web de foco que roda direto no navegador, sem instalação e com os dados salvos no próprio aparelho.',
      tags: ['Aplicativo web', 'Offline', 'Interface autoral'],
      url: 'https://doroapp.vercel.app/',
      slug: 'doroapp',
      label: 'proprio',
    },
    {
      id: 4,
      name: 'Gato Preto',
      pitch:
        'Página comercial de consultoria: mostra a dor do cliente no topo e leva ao WhatsApp em um clique, sem formulário no caminho.',
      tags: ['Página comercial', 'Consultoria B2B', 'WhatsApp', 'Conversão'],
      url: 'https://gatopretoia.vercel.app/',
      slug: 'gato-preto',
      label: 'proprio',
    },
    {
      id: 5,
      name: 'Okam',
      pitch:
        'Site institucional de um framework de governança de IA, com estrutura de conteúdo pensada para quem chega pela busca.',
      tags: ['Site institucional', 'Conteúdo', 'Performance'],
      url: 'https://okam-os.vercel.app/',
      slug: 'okam',
      label: 'proprio',
    },
    {
      id: 6,
      name: 'Tia Mimi: Hospedagem e Creche Canina',
      pitch:
        'Site de negócio local que transforma visita em conversa: contato direto no WhatsApp, tabela de serviços e presença no Google Maps.',
      tags: ['Landing page', 'SEO local', 'WhatsApp', 'Responsivo'],
      url: 'https://tiamimi.vercel.app/',
      slug: 'petsitting-lem',
      label: 'cliente',
    },
    {
      id: 7,
      name: 'Vô Tech',
      pitch:
        'Site de serviços com blog e catálogo de ofertas reunindo sistemas, automação, cursos e criação de sites em uma vitrine só.',
      tags: ['Site de serviços', 'Blog', 'Catálogo', 'Conversão'],
      url: 'https://votechautomacao.vercel.app/',
      slug: 'votech',
      label: 'proprio',
    },
    {
      id: 8,
      name: 'Anticaos',
      pitch:
        'Guia digital publicado como site: conteúdo longo organizado em navegação leve, que abre rápido no celular.',
      tags: ['Site de conteúdo', 'Navegação', 'Mobile'],
      url: 'https://anticaos.vercel.app/',
      slug: 'anticaos',
      label: 'proprio',
    },
    {
      id: 9,
      name: 'OpenCRO',
      pitch:
        'Portal de produto que explica uma solução técnica em linguagem simples e leva o visitante direto ao download.',
      tags: ['Site de produto', 'Documentação', 'Conversão'],
      url: 'https://opencro.vercel.app',
      slug: 'opencro',
      label: 'proprio',
    },
  ],
  en: [
    {
      id: 1,
      name: 'Hub Agente IA',
      pitch:
        'Commercial platform for business automation and AI agents, showcasing solutions, providing 24/7 automated support, and capturing leads in one place.',
      tags: ['AI agents', 'Sales automation', 'WhatsApp', 'Conversion'],
      url: 'https://www.hubagenteia.com.br/',
      slug: 'hub-agente-ia',
      label: 'cofounder-cto',
    },
    {
      id: 2,
      name: 'Juliano Ceconi Academy',
      pitch:
        'Complete course platform featuring a dedicated student dashboard, video lessons, and progress tracking, self-hosted on a private server.',
      tags: ['Course platform', 'Student area', 'React', 'Self-hosted'],
      url: 'https://academy.zanettin.cloud',
      slug: 'academy',
      label: 'proprio',
    },
    {
      id: 3,
      name: 'Doroapp',
      pitch:
        'Productivity and focus web app that runs directly in the browser with no installation required, keeping all data locally on the user device.',
      tags: ['Web app', 'Offline', 'Custom interface'],
      url: 'https://doroapp.vercel.app/',
      slug: 'doroapp',
      label: 'proprio',
    },
    {
      id: 4,
      name: 'Gato Preto',
      pitch:
        'Consulting sales page: directly addresses client pain points upfront and connects visitors to WhatsApp in a single click, with no forms in the way.',
      tags: ['Sales page', 'B2B consulting', 'WhatsApp', 'Conversion'],
      url: 'https://gatopretoia.vercel.app/',
      slug: 'gato-preto',
      label: 'proprio',
    },
    {
      id: 5,
      name: 'Okam',
      pitch:
        'Official website for an AI governance framework, with content structured and optimized for search engine discovery.',
      tags: ['Corporate website', 'Content', 'Performance'],
      url: 'https://okam-os.vercel.app/',
      slug: 'okam',
      label: 'proprio',
    },
    {
      id: 6,
      name: 'Tia Mimi: Hospedagem e Creche Canina',
      pitch:
        'Local business website that converts visitors into conversations: one-click WhatsApp contact, clear service pricing, and Google Maps integration.',
      tags: ['Landing page', 'Local SEO', 'WhatsApp', 'Responsive'],
      url: 'https://tiamimi.vercel.app/',
      slug: 'petsitting-lem',
      label: 'cliente',
    },
    {
      id: 7,
      name: 'Vô Tech',
      pitch:
        'Services website featuring a blog and catalog, bringing systems, automation, courses, and custom web development into a unified showcase.',
      tags: ['Services website', 'Blog', 'Catalog', 'Conversion'],
      url: 'https://votechautomacao.vercel.app/',
      slug: 'votech',
      label: 'proprio',
    },
    {
      id: 8,
      name: 'Anticaos',
      pitch:
        'Digital guide published as a website: comprehensive long-form content organized into intuitive, lightweight navigation that loads instantly on mobile.',
      tags: ['Content website', 'Navigation', 'Mobile'],
      url: 'https://anticaos.vercel.app/',
      slug: 'anticaos',
      label: 'proprio',
    },
    {
      id: 9,
      name: 'OpenCRO',
      pitch:
        'Product website that explains a technical solution in clear, accessible language, guiding visitors straight to download.',
      tags: ['Product site', 'Documentation', 'Conversion'],
      url: 'https://opencro.vercel.app',
      slug: 'opencro',
      label: 'proprio',
    },
  ],
  es: [
    {
      id: 1,
      name: 'Hub Agente IA',
      pitch:
        'Plataforma comercial de automatización y agentes de IA para empresas, con presentación de soluciones, atención 24/7 y captación integrada.',
      tags: ['Agentes de IA', 'Automatización comercial', 'WhatsApp', 'Conversión'],
      url: 'https://www.hubagenteia.com.br/',
      slug: 'hub-agente-ia',
      label: 'cofounder-cto',
    },
    {
      id: 2,
      name: 'Juliano Ceconi Academy',
      pitch:
        'Plataforma de cursos completa, con área de alumno, video y seguimiento de progreso, alojada en servidor propio.',
      tags: ['Plataforma de cursos', 'Área de alumno', 'React', 'Servidor propio'],
      url: 'https://academy.zanettin.cloud',
      slug: 'academy',
      label: 'proprio',
    },
    {
      id: 3,
      name: 'Doroapp',
      pitch:
        'Aplicación web de enfoque que funciona directo en el navegador, sin instalación y con los datos guardados en el propio dispositivo.',
      tags: ['Aplicación web', 'Sin conexión', 'Interfaz propia'],
      url: 'https://doroapp.vercel.app/',
      slug: 'doroapp',
      label: 'proprio',
    },
    {
      id: 4,
      name: 'Gato Preto',
      pitch:
        'Página comercial de consultoría: muestra el dolor del cliente arriba y lleva a WhatsApp en un clic, sin formulario en el camino.',
      tags: ['Página comercial', 'Consultoría B2B', 'WhatsApp', 'Conversión'],
      url: 'https://gatopretoia.vercel.app/',
      slug: 'gato-preto',
      label: 'proprio',
    },
    {
      id: 5,
      name: 'Okam',
      pitch:
        'Sitio institucional de un marco de gobernanza de IA, con la estructura de contenido pensada para quien llega desde el buscador.',
      tags: ['Sitio institucional', 'Contenido', 'Rendimiento'],
      url: 'https://okam-os.vercel.app/',
      slug: 'okam',
      label: 'proprio',
    },
    {
      id: 6,
      name: 'Tia Mimi: Hospedagem e Creche Canina',
      pitch:
        'Sitio de negocio local que convierte la visita en conversación: contacto directo por WhatsApp, tabla de servicios y presencia en Google Maps.',
      tags: ['Landing page', 'SEO local', 'WhatsApp', 'Responsivo'],
      url: 'https://tiamimi.vercel.app/',
      slug: 'petsitting-lem',
      label: 'cliente',
    },
    {
      id: 7,
      name: 'Vô Tech',
      pitch:
        'Sitio de servicios con blog y catálogo de ofertas que reúne sistemas, automatización, cursos y creación de sitios en una sola vitrina.',
      tags: ['Sitio de servicios', 'Blog', 'Catálogo', 'Conversión'],
      url: 'https://votechautomacao.vercel.app/',
      slug: 'votech',
      label: 'proprio',
    },
    {
      id: 8,
      name: 'Anticaos',
      pitch:
        'Guía digital publicada como sitio web: contenido largo organizado en una navegación ligera que abre rápido en el móvil.',
      tags: ['Sitio de contenido', 'Navegación', 'Móvil'],
      url: 'https://anticaos.vercel.app/',
      slug: 'anticaos',
      label: 'proprio',
    },
    {
      id: 9,
      name: 'OpenCRO',
      pitch:
        'Portal de producto que explica una solución técnica en lenguaje simple y lleva al visitante directo a la descarga.',
      tags: ['Sitio de producto', 'Documentación', 'Conversión'],
      url: 'https://opencro.vercel.app',
      slug: 'opencro',
      label: 'proprio',
    },
  ],
};
