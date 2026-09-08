export type Job = {
  title: string;
  company: string;
  dates: string;
  description: string[];
};

export const jobs: Job[] = [
  {
    title: "Founder & CTO",
    company: "Hub Agente IA",
    dates: "2025 - Presente",
    description: [
      "Fundação e liderança técnica da Hub Agente IA, estruturando soluções de IA aplicada, agentes autônomos e sistemas customizados para pequenas e médias empresas:",
      "Agentes de IA e Automação B2B: n8n self-hosted com métricas Prometheus, mensageria via Evolution API (WhatsApp), Redis, Supabase/PostgreSQL, pgvector para RAG, MCP, orquestração multi-LLM e central de avaliação de prompts.",
      "Produto em Produção: CRM desenvolvido para cliente pagante (microlins.hubagenteia.cloud) em React, Vite, Supabase, Vitest, Docker, nginx e deploy automatizado por chave SSH.",
      "Infraestrutura Self-Hosted: VPS Ubuntu 24.04 com Docker Compose, Traefik com TLS automático, fail2ban, Tailscale, PM2, rotinas de backup e runbooks de monitoramento.",
      "Laboratórios de Engenharia: Concepção e desenvolvimento interno dos projetos Okam (governança de IA) e Doroapp (gestão de foco gamificada).",
      "Tecnologias: n8n, Docker, Supabase, PostgreSQL, pgvector, Redis, Traefik, Tailscale, React, Vite, Node.js, Next.js, Prisma, Vitest, Evolution API, MCP, RAG, Python."
    ]
  },
  {
    title: "Gerente Financeiro e Desenvolvedor de Automações",
    company: "MedPless Assist",
    dates: "Maio/24 a Junho/25",
    description: [
      "Liderei a modernização e automação de processos financeiros e de TI críticos, transformando operações manuais em sistemas orientados por dados para reduzir erros e liberar a equipe para atividades de maior valor.",
      "Automação de NF em Python: solução completa que eliminou o processamento manual de notas fiscais, com redução drástica de tempo e erros.",
      "Sistema Financeiro Integrado (Google Sheets + Apps Script + Twilio): dashboards em tempo real, fluxo de caixa, faturas em PDF automáticas, notificações via WhatsApp e geração de DRE em um ecossistema rastreável e auditável.",
      "Gestão de relacionamento com ~80 clínicas, laboratórios e hospitais + 20 profissionais da saúde, responsável por todo o ciclo de faturamento e repasses.",
      "Tecnologias: Python, Google Apps Script, Google Sheets/Excel, APIs, Twilio, RPA."
    ]
  },
  {
    title: "Sócio-Administrador",
    company: "Clínica da Cidade | Unidade Barreiras",
    dates: "Maio/22 a Abril/24",
    description: [
      "Gestão completa da operação desde a abertura à venda da unidade.",
      "Gestão de uma equipe multidisciplinar, promovendo uma cultura de excelência e otimização de recursos.",
      "Gestão completa de contas a receber e a pagar, DRE, DFC e projeções.",
      "Gestão e relacionamento com clientes, médicos e outros profissionais da saúde."
    ]
  },
  {
    title: "Gerente de Operações e Instrutor",
    company: "Microlins",
    dates: "Julho/15 a Julho/17",
    description: [
      "Liderança da unidade com gestão completa das equipes pedagógica e comercial, controle financeiro (fluxo de caixa, contas a pagar/receber) e ações de marketing e expansão.",
      "Ensino e Palestras: Professor de informática para turmas regulares e aulas VIP, e palestrante no ciclo de mercado de trabalho e capacitação profissional da instituição.",
      "Otimização de processos operacionais com criação de rotinas padronizadas para controle de turmas e acompanhamento da satisfação e retenção de alunos.",
      "Ciclo completo de gestão de pessoas: recrutamento, seleção e capacitação contínua das equipes por meio de treinamentos técnicos e comportamentais."
    ]
  }
];
