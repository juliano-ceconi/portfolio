import { type Lang, type Localized, pick } from '@/i18n';

const whatsappNumero = '557799213803';

const whatsappMensagem: Localized<string> = {
  'pt-BR': 'Olá, Juliano! Vim pelo seu portfólio e queria conversar sobre um projeto.',
};

/** Link do WhatsApp com a mensagem já escrita no idioma da página. */
export function whatsappUrl(lang: Lang): string {
  return `https://wa.me/${whatsappNumero}?text=${encodeURIComponent(pick(whatsappMensagem, lang))}`;
}

export type Hero = {
  name: string;
  title: string;
  description: string;
  profilePicture: string;
  skills: string[];
  contact: {
    whatsapp: string;
    github: string;
    linkedin: string;
    email: string;
  };
};

const contato = {
  github: 'https://github.com/juliano-ceconi',
  linkedin: 'https://www.linkedin.com/in/juliano-ceconi-8ba137121/',
  email: 'ceconilp@gmail.com',
};

export const heroData: Localized<Hero> = {
  'pt-BR': {
    name: 'Juliano Ceconi',
    title: 'Automação, agentes de IA e sites para pequenas e médias empresas',
    description:
      'Tiro a tarefa repetitiva das costas da sua equipe e coloco a solução no ar: atendimento automático no WhatsApp, sistema que organiza clientes e vendas, rotina que hoje come as suas horas. Também crio sites e páginas de venda do zero, sem tema pronto. Já administrei empresa e conheço o gargalo por dentro. Faço do desenho à produção sozinho, sem repassar para terceiros.',
    profilePicture: 'https://i.imgur.com/VZjuj6M.png',
    // Ordenadas por relevância comercial: primeiro o que o cliente reconhece,
    // depois a stack que interessa a quem avalia tecnicamente.
    skills: [
      'Agentes de IA',
      'Automação n8n',
      'WhatsApp / Evolution API',
      'Sites e landing pages',
      'React + Vite',
      'Supabase',
      'PostgreSQL',
      'RAG + pgvector',
      'Python',
      'Node.js',
      'API REST',
      'Docker',
      'VPS Linux',
      'Traefik',
      'Tailscale',
      'Redis',
      'MCP',
      'LiteLLM',
      'Vitest',
    ],
    contact: {
      whatsapp: whatsappUrl('pt-BR'),
      ...contato,
    },
  },
};
