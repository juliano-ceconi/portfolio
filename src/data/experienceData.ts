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
      "Fundação e liderança técnica da Hub Agente IA, empresa focada em desenvolvimento de IA e softwares customizáveis. Estruturação de um ecossistema de orquestração de automações e agentes de IA em quatro pilares:",
      "Automações e Workflows: Orquestração de fluxos integrados no n8n e mensageria via Evolution API (WhatsApp) para atendimento e qualificação inteligente de leads.",
      "Engenharia de Prompt e RAG: Versionamento de system prompts e gestão de bases de conhecimento vetoriais para agentes autônomos com contexto dinâmico.",
      "Dados e Infraestrutura: Arquitetura de banco relacional com Supabase/PostgreSQL, cache com Redis e infraestrutura de servidores VPS rodando Docker.",
      "Sistemas Integrados: Desenvolvimento de aplicações satélites conectadas — interfaces de controle de leads, dashboards operacionais e gestão via API. Criação e incubação interna dos projetos Okam (governança de IA) e Doroapp (gestão de foco cyberpunk) como laboratórios de engenharia da empresa.",
      "Tecnologias: n8n, Docker, Supabase, PostgreSQL, Redis, Node.js, Evolution API, MCP, RAG, VPS, Python, Google Apps Script."
    ]
  },
  {
    title: "Gerente Financeiro e Desenvolvedor de Automações",
    company: "MedPless Assist",
    dates: "Maio/24 a Junho/25",
    description: [
      "Liderei a modernização e automação de processos financeiros e de TI críticos, transformando operações manuais em sistemas orientados por dados — reduzindo erros e liberando a equipe para atividades de maior valor.",
      "Automação de NF em Python: solução completa que eliminou o processamento manual de notas fiscais, com redução drástica de tempo e erros.",
      "Sistema Financeiro Integrado (Google Sheets + Apps Script + Twilio): dashboards em tempo real, fluxo de caixa, faturas em PDF automáticas, notificações via WhatsApp e geração de DRE — tudo em um ecossistema rastreável e auditável.",
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
    title: "Gerente de Operações",
    company: "Microlins",
    dates: "Julho/15 a Julho/17",
    description: [
      "Liderança da unidade, com responsabilidade direta sobre as equipes pedagógica e comercial, gestão financeira (fluxo de caixa, contas a pagar/receber) e ações de marketing e expansão.",
      "Identificação e otimização de processos operacionais, com a criação de rotinas padronizadas que aumentaram a eficiência no controle de turmas e na gestão da satisfação dos alunos.",
      "Responsável pelo ciclo completo de gestão de pessoas, desde o recrutamento e seleção até a capacitação das equipes por meio de treinamentos e palestras técnicas."
    ]
  }
];
