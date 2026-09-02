const whatsappNumero = '557799213803';
const whatsappMensagem = 'Olá, Juliano! Vim pelo seu portfólio e queria conversar sobre um projeto.';

export const heroData = {
  name: 'Juliano Ceconi',
  title: 'Automação, agentes de IA e sites para pequenas e médias empresas',
  description:
    'Tiro a tarefa repetitiva das costas da sua equipe e coloco a solução no ar: atendimento automático no WhatsApp, sistema que organiza clientes e vendas, rotina que hoje come as suas horas. Também crio sites e páginas de venda do zero, sem tema pronto. Já administrei empresa e conheço o gargalo por dentro — faço do desenho à produção sozinho, sem repassar para terceiros.',
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
    whatsapp: `https://wa.me/${whatsappNumero}?text=${encodeURIComponent(whatsappMensagem)}`,
    github: 'https://github.com/juliano-ceconi',
    linkedin: 'https://www.linkedin.com/in/juliano-ceconi-8ba137121/',
    email: 'ceconilp@gmail.com',
  },
};
