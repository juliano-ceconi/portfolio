import type { Localized } from '@/i18n';

export interface Project {
  id: number;
  title: string;
  summary: string;
  tags: string[];
  details: {
    challenge: string;
    solution: string;
    impact: string[];
  };
  externalLink?: {
    title: string;
    url: string;
  };
  links?: {
    title: string;
    url: string;
  }[];
}

export const projects: Localized<Project[]> = {
  'pt-BR': [
    {
      id: 1,
      title: "Automação de processos sob medida",
      summary: "A tarefa repetitiva que hoje consome horas da sua equipe (emitir nota fiscal, conciliar banco, montar relatório ou cobrar cliente) passa a rodar sozinha. Mapeio o gargalo, construo a automação e deixo funcionando dentro dos sistemas que você já usa.",
      tags: ["Automação de processos", "n8n", "Python", "Google Apps Script", "Integrações", "PME"],
      details: {
        challenge: "Na maioria das pequenas e médias empresas o processo crítico depende de alguém digitando: nota emitida à mão, conciliação conferida linha a linha, relatório remontado toda semana no mesmo formato. É a hora mais cara da empresa gasta no trabalho mais mecânico dela, onde os erros costumam nascer.",
        solution: "Mapeamento dos gargalos junto com quem executa o processo, e automação sob medida com n8n, Python ou Google Apps Script. A automação conversa com os sistemas que a empresa já tem; não exige trocar de ERP nem mudar a rotina de quem trabalha.",
        impact: [
          "Emissão de notas fiscais automatizada com Python e Selenium, operando sobre o próprio sistema web do fornecedor.",
          "Sistema financeiro completo em Google Sheets e Apps Script: DRE, fluxo de caixa, faturas em PDF, cobrança por WhatsApp e log de auditoria.",
          "Entrega medida em dias, não em trimestres. Cada automação sobe em produção e é validada na operação real antes de fechar."
        ]
      }
    },
    {
      id: 2,
      title: "Agente de IA que atende no WhatsApp",
      summary: "Um atendente de IA no seu WhatsApp: responde a qualquer hora, entende o contexto da conversa, consulta a base de conhecimento da empresa, qualifica o interessado e passa para uma pessoa quando a conversa exige.",
      tags: ["Agentes de IA", "WhatsApp", "n8n", "RAG", "Evolution API", "Supabase", "Docker"],
      details: {
        challenge: "Quem chega fora do horário ou num pico de demanda fica esperando, e quem espera compra do concorrente. Contratar mais gente para o primeiro atendimento é caro, demora para treinar e continua não cobrindo a madrugada nem o fim de semana.",
        solution: "Ecossistema em quatro camadas, todo em produção na Hub Agente IA: fluxos em n8n orquestrando o ciclo do contato; agentes com RAG consultando base vetorial em pgvector para responder com o conteúdo da própria empresa; MCP integrando as ferramentas; e infraestrutura própria em Docker com Supabase e Redis.",
        impact: [
          "Primeiro atendimento e qualificação funcionando sem intervenção humana, com repasse para pessoa quando o caso pede.",
          "Respostas ancoradas na base de conhecimento do cliente, não no palpite do modelo.",
          "Ciclo de engenharia completo: escrita do prompt, avaliação, publicação e observabilidade, com métricas Prometheus no n8n self-host.",
          "Orquestração multi-LLM: trocar o modelo de IA não obriga a reescrever o atendimento."
        ]
      }
    },
    {
      id: 3,
      title: "Criação de sites e landing pages",
      summary: "Site institucional, página de venda ou landing page de campanha: construídos do zero, publicados com domínio e HTTPS, rápidos no celular e ligados ao seu WhatsApp. Não fico apenas no protótipo, a página é entregue no ar.",
      tags: ["Sites", "Landing pages", "React", "Vite", "Astro", "Publicação e domínio"],
      details: {
        challenge: "Empresa sem site perde o cliente que pesquisa antes de ligar. E o site que não explica em poucos segundos o que a empresa vende, ou que trava no celular, perde do mesmo jeito, com o agravante de já ter custado dinheiro.",
        solution: "Página construída sob medida, com o texto escrito para quem compra e não para quem programa, publicada com domínio próprio, certificado de segurança e carregamento rápido. Quando faz sentido, já sai integrada ao WhatsApp, a formulário e ao atendimento automático.",
        impact: [
          "Nove projetos no ar hoje: a vitrine no topo desta página reúne os trabalhos, e cada card leva ao site publicado.",
          "Publicação, domínio e HTTPS fazem parte da entrega; o cliente recebe o endereço funcionando, não um arquivo.",
          "Mesma base técnica dos sistemas: a página pode crescer para área logada, catálogo ou painel sem ser refeita do zero."
        ]
      }
    },
    {
      id: 4,
      title: "Sistema de gestão sob medida (CRM, painel, controle interno)",
      summary: "Quando nenhuma ferramenta de prateleira encaixa e a empresa vive de planilha paralela, construo o sistema que atende exatamente o processo dela, com controle de acesso por usuário, dados centralizados e publicação em produção.",
      tags: ["React 19", "Vite", "Supabase", "PostgreSQL", "Vitest", "Docker", "nginx"],
      details: {
        challenge: "Controle espalhado por planilhas soltas, cada setor com a sua versão da verdade e ninguém sabendo qual número está certo na hora de decidir. Trocar por um sistema pronto costuma significar pagar por muito recurso inútil e ainda assim não cobrir a particularidade que importa.",
        solution: "Aplicação web sob medida em React 19 com Vite e banco Supabase/PostgreSQL, com testes automatizados em Vitest, verificação de código, empacotamento em Docker e publicação com nginx. Deploy versionado e runbook de operação escritos junto com o sistema.",
        impact: [
          "CRM em produção para cliente pagante da Microlins, em uso na rotina comercial (microlins.hubagenteia.cloud).",
          "Base de dados única no lugar das planilhas paralelas, com histórico e controle de acesso por usuário.",
          "O sistema é do cliente: código, banco e servidor ficam sob o controle dele, sem mensalidade por usuário."
        ]
      }
    },
    {
      id: 5,
      title: "Gestão e automação financeira",
      summary: "Estruturação de rotinas financeiras, fluxo de caixa em tempo real, conciliação e cobrança automática. Acabo com a gestão no escuro e com o retrabalho manual em planilhas desencontradas.",
      tags: ["Gestão financeira", "Fluxo de caixa", "DRE gerencial", "Cobrança automática", "Conciliação bancária", "PME"],
      details: {
        challenge: "Muitas empresas operam sem clareza real sobre suas margens: cobranças atrasam por falta de acompanhamento, a conciliação consome horas de conferência manual e o fechamento do mês vira uma incógnita. O gestor gasta energia apagando incêndio operacional em vez de tomar decisões com números confiáveis.",
        solution: "Organização prática do setor financeiro aliada à automação. Implantação de controle de fluxo de caixa, conciliação ágil, réguas de cobrança automatizadas e demonstrativos (DRE) que revelam o resultado real da operação.",
        impact: [
          "Ecossistema financeiro integrado com geração automática de faturas em PDF, DRE gerencial e avisos de cobrança pelo WhatsApp.",
          "Redução do tempo gasto com conciliação bancária e emissão manual de notas fiscais.",
          "Visão clara de caixa e previsibilidade de recebimentos para tomada de decisão fundamentada."
        ]
      }
    },
    {
      id: 6,
      title: "Treinamento e workshop de IA aplicada ao negócio",
      summary: "Workshop prático para a equipe usar IA no trabalho do dia a dia, focado em prática e sem teoria desnecessária. O time aprende a aplicar no próprio processo e a manter o que foi construído.",
      tags: ["Treinamento", "Workshop", "IA aplicada", "Automação", "Excel e Google Sheets", "In-company"],
      details: {
        challenge: "A equipe ouve falar de IA todos os dias e não sabe onde encostar no próprio trabalho. Resultado: ou ninguém usa, ou cada um usa do seu jeito, sem critério e sem clareza sobre o que pode ou não sair de dentro de casa.",
        solution: "Conteúdo montado sobre o processo real da empresa: onde a IA e a automação cabem, onde não cabem, o que pode ser enviado para uma ferramenta de terceiro e como manter o que foi criado. Formato de meio dia ou trilha in-company.",
        impact: [
          "Experiência de sala: professor de informática (turma e VIP) e palestrante no ciclo de mercado de trabalho da Microlins.",
          "Plataforma de curso própria em produção: a Juliano Ceconi Academy, com portal do aluno e player de aula.",
          "A equipe passa a criar e manter as próprias automações, reduzindo a dependência de suporte externo."
        ]
      },
      links: [
        {
          title: "Conhecer a Juliano Ceconi Academy, formações em engenharia de IA",
          url: "https://academy.zanettin.cloud"
        }
      ]
    },
    {
      id: 7,
      title: "Infraestrutura própria, segura e sob seu controle",
      summary: "Servidor, publicação, segurança e backup do que é construído. O sistema roda em infraestrutura própria, com custo previsível de servidor no lugar de mensalidade por usuário, sob os cuidados de quem desenvolveu a solução.",
      tags: ["VPS", "Docker", "Traefik", "TLS", "fail2ban", "Tailscale", "Backup", "PM2"],
      details: {
        challenge: "Sistema entregue sem quem opere o servidor vira problema do cliente no primeiro incidente. E a alternativa comum de empilhar assinaturas de plataformas terceiras transforma custo variável em despesa que cresce sem controle.",
        solution: "Operação self-hosted completa em VPS Ubuntu 24.04: Docker e Docker Compose, Traefik publicando os serviços com certificado TLS, fail2ban bloqueando tentativa de invasão, firewall fechando o acesso administrativo público, administração remota por rede privada Tailscale e processos gerenciados com PM2.",
        impact: [
          "Vários serviços em produção no mesmo servidor, cada um com endereço e certificado próprios.",
          "Backup, restauração e monitoramento com documentação operacional prática, garantindo procedimentos definidos antes de qualquer incidente.",
          "Acesso administrativo fora da internet pública: porta de administração fechada, entrada apenas pela rede privada."
        ]
      }
    }
  ],
};
