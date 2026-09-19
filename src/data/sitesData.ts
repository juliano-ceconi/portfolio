import type { Localized } from '@/i18n';

export interface Site {
  id: number;
  name: string;
  pitch: string;
  tags: string[];
  url: string;
  /** Usado para localizar a captura de tela em `public/vitrine/<slug>.webp`. */
  slug: string;
  /** Rótulo do card: separa trabalho entregue a cliente de produto próprio. */
  label: 'Cliente' | 'Projeto próprio';
}

export const sites: Localized<Site[]> = {
  'pt-BR': [
    {
      id: 1,
      name: 'Hub Agente IA',
      pitch:
        'Plataforma comercial de automação e agentes de IA para empresas, com apresentação de soluções, atendimento 24/7 e captação integrada.',
      tags: ['Agentes de IA', 'Automação comercial', 'WhatsApp', 'Conversão'],
      url: 'https://www.hubagenteia.com.br/',
      slug: 'hub-agente-ia',
      label: 'Projeto próprio',
    },
    {
      id: 2,
      name: 'Juliano Ceconi Academy',
      pitch:
        'Plataforma de cursos completa, com área de aluno, vídeo e acompanhamento de progresso, hospedada em servidor próprio.',
      tags: ['Plataforma de cursos', 'Área de aluno', 'React', 'Servidor próprio'],
      url: 'https://academy.zanettin.cloud',
      slug: 'academy',
      label: 'Projeto próprio',
    },
    {
      id: 3,
      name: 'Doroapp',
      pitch:
        'Aplicativo web de foco que roda direto no navegador, sem instalação e com os dados salvos no próprio aparelho.',
      tags: ['Aplicativo web', 'Offline', 'Interface autoral'],
      url: 'https://doroapp.vercel.app/',
      slug: 'doroapp',
      label: 'Projeto próprio',
    },
    {
      id: 4,
      name: 'Gato Preto',
      pitch:
        'Página comercial de consultoria: mostra a dor do cliente no topo e leva ao WhatsApp em um clique, sem formulário no caminho.',
      tags: ['Página comercial', 'Consultoria B2B', 'WhatsApp', 'Conversão'],
      url: 'https://gatopretoia.vercel.app/',
      slug: 'gato-preto',
      label: 'Projeto próprio',
    },
    {
      id: 5,
      name: 'Okam',
      pitch:
        'Site institucional de um framework de governança de IA, com estrutura de conteúdo pensada para quem chega pela busca.',
      tags: ['Site institucional', 'Conteúdo', 'Performance'],
      url: 'https://okam-os.vercel.app/',
      slug: 'okam',
      label: 'Projeto próprio',
    },
    {
      id: 6,
      name: 'Tia Mimi: Hospedagem e Creche Canina',
      pitch:
        'Site de negócio local que transforma visita em conversa: contato direto no WhatsApp, tabela de serviços e presença no Google Maps.',
      tags: ['Landing page', 'SEO local', 'WhatsApp', 'Responsivo'],
      url: 'https://tiamimi.vercel.app/',
      slug: 'petsitting-lem',
      label: 'Cliente',
    },
    {
      id: 7,
      name: 'Vô Tech',
      pitch:
        'Site de serviços com blog e catálogo de ofertas reunindo sistemas, automação, cursos e criação de sites em uma vitrine só.',
      tags: ['Site de serviços', 'Blog', 'Catálogo', 'Conversão'],
      url: 'https://votechautomacao.vercel.app/',
      slug: 'votech',
      label: 'Projeto próprio',
    },
    {
      id: 8,
      name: 'Anticaos',
      pitch:
        'Guia digital publicado como site: conteúdo longo organizado em navegação leve, que abre rápido no celular.',
      tags: ['Site de conteúdo', 'Navegação', 'Mobile'],
      url: 'https://anticaos.vercel.app/',
      slug: 'anticaos',
      label: 'Projeto próprio',
    },
    {
      id: 9,
      name: 'OpenCRO',
      pitch:
        'Portal de produto que explica uma solução técnica em linguagem simples e leva o visitante direto ao download.',
      tags: ['Site de produto', 'Documentação', 'Conversão'],
      url: 'https://opencro.vercel.app',
      slug: 'opencro',
      label: 'Projeto próprio',
    },
  ],
};
