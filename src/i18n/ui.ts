import { pick, type Lang, type Localized } from './index';

/**
 * Rotulos fixos dos componentes. Conteudo editorial fica em `src/data/`;
 * aqui mora so o que estava cravado no JSX.
 */
export type UiStrings = {
  heroWhatsapp: string;
  heroGithubLabel: string;
  heroEmailLabel: string;
  sitesTitle: string;
  sitesIntro: string;
  /** `{site}` e trocado pelo nome do site. */
  sitesScreenshotAlt: string;
  sitesViewSite: string;
  sitesLabelClient: string;
  sitesLabelOwn: string;
  experienceTitle: string;
  projectsTitle: string;
  projectsChallenge: string;
  projectsSolution: string;
  projectsImpact: string;
  projectsShowMore: string;
  projectsShowLess: string;
  educationTitle: string;
  footerCredits: string;
  footerCreditsDesign: string;
  themeToggle: string;
};

const strings: Localized<UiStrings> = {
  'pt-BR': {
    heroWhatsapp: 'Falar no WhatsApp',
    heroGithubLabel: 'GitHub',
    heroEmailLabel: 'Enviar e-mail',
    sitesTitle: 'Trabalhos reais',
    sitesIntro:
      'Do site de um negócio local até plataforma com área de aluno. Todos no ar, desenvolvidos do zero e sem temas prontos.',
    sitesScreenshotAlt: 'Página inicial do site {site}',
    sitesViewSite: 'Ver site',
    sitesLabelClient: 'Cliente',
    sitesLabelOwn: 'Projeto próprio',
    experienceTitle: 'Experiência Profissional',
    projectsTitle: 'O que eu faço',
    projectsChallenge: 'Desafio',
    projectsSolution: 'Solução',
    projectsImpact: 'Impacto',
    projectsShowMore: 'Ver Mais',
    projectsShowLess: 'Mostrar Menos',
    educationTitle: 'Educação',
    footerCredits: 'Desenvolvido por Juliano Ceconi',
    footerCreditsDesign: 'Design original por',
    themeToggle: 'Toggle theme',
  },
  en: {
    heroWhatsapp: 'Talk on WhatsApp',
    heroGithubLabel: 'GitHub',
    heroEmailLabel: 'Send an email',
    sitesTitle: 'Real work',
    sitesIntro:
      'From a local business website to a course platform with a student area. All of them live, built from scratch, no off-the-shelf themes.',
    sitesScreenshotAlt: 'Home page of the {site} website',
    sitesViewSite: 'Visit site',
    sitesLabelClient: 'Client',
    sitesLabelOwn: 'Own product',
    experienceTitle: 'Professional Experience',
    projectsTitle: 'What I do',
    projectsChallenge: 'Challenge',
    projectsSolution: 'Solution',
    projectsImpact: 'Impact',
    projectsShowMore: 'Show More',
    projectsShowLess: 'Show Less',
    educationTitle: 'Education',
    footerCredits: 'Built by Juliano Ceconi',
    footerCreditsDesign: 'Original design by',
    themeToggle: 'Toggle theme',
  },
  es: {
    heroWhatsapp: 'Hablar por WhatsApp',
    heroGithubLabel: 'GitHub',
    heroEmailLabel: 'Enviar un correo',
    sitesTitle: 'Trabajos reales',
    sitesIntro:
      'Desde la web de un negocio local hasta una plataforma de cursos con área de alumno. Todos en línea, hechos desde cero y sin plantillas.',
    sitesScreenshotAlt: 'Página de inicio del sitio {site}',
    sitesViewSite: 'Ver sitio',
    sitesLabelClient: 'Cliente',
    sitesLabelOwn: 'Proyecto propio',
    experienceTitle: 'Experiencia Profesional',
    projectsTitle: 'Lo que hago',
    projectsChallenge: 'Desafío',
    projectsSolution: 'Solución',
    projectsImpact: 'Impacto',
    projectsShowMore: 'Ver más',
    projectsShowLess: 'Ver menos',
    educationTitle: 'Formación',
    footerCredits: 'Desarrollado por Juliano Ceconi',
    footerCreditsDesign: 'Diseño original de',
    themeToggle: 'Cambiar tema',
  },
};

export function ui(lang: Lang): UiStrings {
  return pick(strings, lang);
}
