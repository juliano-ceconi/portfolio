import { heroData } from './heroData';

export const footerData = {
  currentYear: new Date().getFullYear(),
  cta: {
    titulo: 'Vamos conversar',
    // O que o visitante ganha ao chamar: expectativa concreta, sem promessa de preço.
    chamada:
      'Me conte qual é o problema — a tarefa que consome a equipe, o atendimento que não dá conta ou o site que falta. Respondo com o que dá para fazer e em quanto tempo, sem compromisso.',
    whatsappLabel: 'Falar no WhatsApp',
    whatsappUrl: heroData.contact.whatsapp,
    email: heroData.contact.email,
  },
  socialLinks: [
    {
      name: 'GitHub',
      url: 'https://github.com/juliano-ceconi',
      icon: 'Github'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/juliano-ceconi-8ba137121/',
      icon: 'Linkedin'
    }
  ],
  quote: '"Transformando processos complexos em soluções inteligentes."',
};
