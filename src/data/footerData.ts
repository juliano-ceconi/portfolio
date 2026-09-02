import { heroData } from './heroData';

export const footerData = {
  currentYear: new Date().getFullYear(),
  socialLinks: [
    {
      name: 'WhatsApp',
      url: heroData.contact.whatsapp,
      icon: 'Whatsapp'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/juliano-ceconi',
      icon: 'Github'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/juliano-ceconi-8ba137121/',
      icon: 'Linkedin'
    },
    {
      name: 'Email',
      url: 'mailto:ceconilp@gmail.com',
      icon: 'Mail'
    }
  ],
  quote: '"Transformando processos complexos em soluções inteligentes."',
};
