import type { Localized } from '@/i18n';
import { heroData, whatsappUrl } from './heroData';

export type Footer = {
  currentYear: number;
  cta: {
    titulo: string;
    chamada: string;
    whatsappLabel: string;
    whatsappUrl: string;
    email: string;
  };
  socialLinks: { name: string; url: string; icon: string }[];
  quote: string;
};

const redes = [
  {
    name: 'GitHub',
    url: 'https://github.com/juliano-ceconi',
    icon: 'Github',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/juliano-ceconi-8ba137121/',
    icon: 'Linkedin',
  },
];

export const footerData: Localized<Footer> = {
  'pt-BR': {
    currentYear: new Date().getFullYear(),
    cta: {
      titulo: 'Vamos conversar',
      // O que o visitante ganha ao chamar: expectativa concreta, sem promessa de preço.
      chamada:
        'Me conte qual é o problema: a tarefa que consome a equipe, o atendimento que não dá conta ou o site que falta. Respondo com o que dá para fazer e em quanto tempo, sem compromisso.',
      whatsappLabel: 'Falar no WhatsApp',
      whatsappUrl: whatsappUrl('pt-BR'),
      email: heroData['pt-BR'].contact.email,
    },
    socialLinks: redes,
    quote: '"Transformando processos complexos em soluções inteligentes."',
  },
  en: {
    currentYear: new Date().getFullYear(),
    cta: {
      titulo: "Let's talk",
      chamada:
        "Tell me about your bottleneck: the repetitive tasks consuming your team, customer inquiries falling through the cracks, or the website you need live. I will outline practical solutions, timelines, and scope, with no strings attached.",
      whatsappLabel: 'Chat on WhatsApp',
      whatsappUrl: whatsappUrl('en'),
      email: heroData['pt-BR'].contact.email,
    },
    socialLinks: redes,
    quote: '"Turning complex processes into intelligent solutions."',
  },
  es: {
    currentYear: new Date().getFullYear(),
    cta: {
      titulo: 'Hablemos',
      chamada:
        'Cuéntame cuál es tu cuello de botella: las tareas repetitivas que sobrecargan a tu equipo, la atención a clientes que no da abasto o el sitio web que necesitas en línea. Te respondo con soluciones concretas, plazos y alcance, sin ningún compromiso.',
      whatsappLabel: 'Hablar por WhatsApp',
      whatsappUrl: whatsappUrl('es'),
      email: heroData['pt-BR'].contact.email,
    },
    socialLinks: redes,
    quote: '"Transformando procesos complejos en soluciones inteligentes."',
  },
};
