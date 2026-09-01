export interface Site {
  id: number;
  name: string;
  pitch: string;
  tags: string[];
  /** Página publicada. Ausente quando o projeto só existe como código. */
  url?: string;
  /** Repositório público, usado quando não há página no ar. */
  repoUrl?: string;
  /** Rótulo mostrado no card: distingue trabalho de cliente, produto e código sem página. */
  label: 'Cliente' | 'Projeto próprio' | 'Código no repositório';
  /** Observação curta quando o link entregue não é exatamente o nome do projeto. */
  note?: string;
}

export const sites: Site[] = [
  {
    id: 1,
    name: 'Tia Mimi — Hospedagem e Creche Canina',
    pitch:
      'Site de negócio local que transforma visita em conversa: contato direto no WhatsApp, tabela de serviços e presença no Google Maps.',
    tags: ['Landing page', 'SEO local', 'WhatsApp', 'Responsivo'],
    url: 'https://tiamimi.vercel.app/',
    label: 'Cliente',
  },
  {
    id: 2,
    name: 'Juliano Ceconi Academy',
    pitch:
      'Plataforma de cursos completa, com área de aluno, vídeo e acompanhamento de progresso — hospedada em servidor próprio.',
    tags: ['Plataforma de cursos', 'Área de aluno', 'React', 'Servidor próprio'],
    url: 'https://academy.zanettin.cloud',
    label: 'Projeto próprio',
  },
  {
    id: 3,
    name: 'OpenCRO',
    pitch:
      'Portal de produto que explica uma solução técnica em linguagem simples e leva o visitante direto ao download.',
    tags: ['Site de produto', 'Documentação', 'Conversão'],
    url: 'https://opencro.vercel.app',
    label: 'Projeto próprio',
  },
  {
    id: 4,
    name: 'Okam',
    pitch:
      'Site institucional de um framework de governança de IA, com estrutura de conteúdo pensada para quem chega pela busca.',
    tags: ['Site institucional', 'Conteúdo', 'Performance'],
    url: 'https://okam-os.vercel.app/',
    label: 'Projeto próprio',
  },
  {
    id: 5,
    name: 'Gato Preto Agro',
    pitch:
      'Página comercial de consultoria para o agronegócio: proposta de valor no topo e caminho curto até o contato.',
    tags: ['Página comercial', 'Agronegócio', 'Conversão'],
    url: 'https://gato-preto-agro.vercel.app/',
    label: 'Projeto próprio',
    note: 'Versão setorial (Agro) do projeto Gato Preto.',
  },
  {
    id: 6,
    name: 'Anticaos',
    pitch:
      'Guia digital publicado como site: conteúdo longo organizado em navegação leve, que abre rápido no celular.',
    tags: ['Site de conteúdo', 'Navegação', 'Mobile'],
    url: 'https://anticaos.vercel.app/',
    label: 'Projeto próprio',
  },
  {
    id: 7,
    name: 'Doroapp',
    pitch:
      'Aplicativo web de foco que roda direto no navegador, sem instalação e com os dados salvos no próprio aparelho.',
    tags: ['Aplicativo web', 'Offline', 'Interface autoral'],
    url: 'https://doroapp.vercel.app/',
    label: 'Projeto próprio',
  },
  {
    id: 8,
    name: 'Lofi Taskboard',
    pitch:
      'Painel de tarefas no estilo quadro visual, com som ambiente integrado — interface própria, sem tema pronto.',
    tags: ['Aplicativo web', 'Kanban', 'Interface autoral'],
    url: 'https://lofi-taskboard.vercel.app/',
    label: 'Projeto próprio',
  },
  {
    id: 9,
    name: 'Vô Tech',
    pitch:
      'Catálogo comercial de serviços em várias páginas. Primeira versão, hoje mantida apenas como código-fonte.',
    tags: ['Catálogo', 'Multi-página', 'HTML/CSS'],
    repoUrl: 'https://github.com/juliano-ceconi/votech',
    label: 'Código no repositório',
    note: 'Sem página publicada no momento.',
  },
];
