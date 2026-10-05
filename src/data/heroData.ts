import { type Lang, type Localized, pick } from '@/i18n';

const whatsappNumero = '557799213803';

const whatsappMensagem: Localized<string> = {
  'pt-BR': 'Olá, Juliano! Vim pelo seu portfólio e queria conversar sobre um projeto.',
  en: 'Hi, Juliano! I saw your portfolio and would like to talk about a project.',
  es: '¡Hola, Juliano! Vi tu portafolio y me gustaría conversar sobre un proyecto.',
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
  en: {
    name: 'Juliano Ceconi',
    title: 'Automation, AI agents and websites for small and medium businesses',
    description:
      'I take repetitive tasks off your team and deploy solutions that deliver results: automated customer service on WhatsApp, systems that organize leads and sales, and routines that give you back your hours. I also build websites and sales pages from scratch, with zero off-the-shelf templates. Having run a company myself, I understand operational bottlenecks from the inside. I handle everything from design to production myself, with nothing handed off to third parties.',
    profilePicture: 'https://i.imgur.com/VZjuj6M.png',
    skills: [
      'AI agents',
      'n8n automation',
      'WhatsApp / Evolution API',
      'Websites and landing pages',
      'React + Vite',
      'Supabase',
      'PostgreSQL',
      'RAG + pgvector',
      'Python',
      'Node.js',
      'REST API',
      'Docker',
      'Linux VPS',
      'Traefik',
      'Tailscale',
      'Redis',
      'MCP',
      'LiteLLM',
      'Vitest',
    ],
    contact: {
      whatsapp: whatsappUrl('en'),
      ...contato,
    },
  },
  es: {
    name: 'Juliano Ceconi',
    title: 'Automatización, agentes de IA y sitios web para pymes',
    description:
      'Libero a tu equipo de las tareas repetitivas y pongo la solución en producción: atención automática por WhatsApp, sistemas que organizan clientes y ventas, y automatizaciones que te devuelven horas de trabajo. También creo sitios web y páginas de venta desde cero, sin plantillas prefabricadas. Habiendo administrado mi propia empresa, conozco los cuellos de botella operativos desde adentro. Me encargo de todo, desde el diseño hasta la producción, sin intermediarios ni tercerización.',
    profilePicture: 'https://i.imgur.com/VZjuj6M.png',
    skills: [
      'Agentes de IA',
      'Automatización n8n',
      'WhatsApp / Evolution API',
      'Sitios web y landing pages',
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
      whatsapp: whatsappUrl('es'),
      ...contato,
    },
  },
};
