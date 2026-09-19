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
};

export function ui(lang: Lang): UiStrings {
  return pick(strings, lang);
}
