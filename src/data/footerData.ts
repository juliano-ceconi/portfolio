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
};
