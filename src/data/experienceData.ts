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
    dates: "2024 - Presente",
    description: [
      "Fundação e liderança técnica da Hub Agente IA, empresa focada em desenvolvimento de IA e softwares customizáveis. Estruturação de um ecossistema de orquestração de automações e agentes de IA em quatro pilares:",
      "Automações e Workflows: Orquestração de fluxos integrados no n8n e mensageria via Evolution API (WhatsApp) para atendimento e qualificação inteligente de leads.",
      "Engenharia de Prompt e RAG: Versionamento de system prompts e gestão de bases de conhecimento vetoriais para agentes autônomos com contexto dinâmico.",
      "Dados e Infraestrutura: Arquitetura de banco relacional com Supabase/PostgreSQL, cache com Redis e infraestrutura de servidores VPS rodando Docker.",
      "Sistemas Integrados: Desenvolvimento de aplicações satélites conectadas — interfaces de controle de leads, dashboards operacionais e gestão via API.",
      "Tecnologias: n8n, Docker, Supabase, PostgreSQL, Redis, Node.js, Evolution API, MCP, RAG, VPS, Python, Google Apps Script."
    ]
  },
  {
    title: "Gerente Financeiro e Desenvolvedor de Automações",
    company: "MedPless Assist",
    dates: "Maio/24 a Junho/25",
    description: [
      "Liderei a modernização e automação de processos financeiros e de TI críticos na MedPless Assist, transformando operações manuais em sistemas eficientes e orientados por dados. Meu foco foi em otimizar o fluxo de trabalho, reduzir erros e liberar tempo da equipe para atividades de maior valor.",
      "Desenvolvimento de Sistema de Automação de NF em Python: Criei uma solução completa em Python para automatizar a emissão de notas fiscais, o que resultou em uma redução drástica no tempo de processamento manual e na minimização de erros humanos.",
      "Implementação de Sistema Financeiro Integrado em Google Sheets & Apps Script: Desenvolvi e implementei um robusto sistema financeiro utilizando Google Sheets e Google Apps Script. Este sistema incluía:",
      "  Dashboards dinâmicos para visualização de dados em tempo real.",
      "  Controle de fluxo de caixa e gestão de contas.",
      "  Geração e envio automático de faturas em PDF por e-mail.",
      "  Logs de atividades para auditoria e rastreabilidade.",
      "  Envio automatizado de lembretes e notificações financeiras via WhatsApp (integrado com Twilio)",
      "  Geração automática de DRE (Demonstração do Resultado do Exercício).",
      "Capacitação da Equipe: Realizei treinamentos em Excel e Google Sheets para a equipe, melhorando suas habilidades em manipulação de dados e uso das novas ferramentas implementadas.",
      "Relacionamento com cerca de 80 clínicas, laboratórios, hospitais e mais de 20 profissionais da área da saúde, assim como gestão de todos os faturamentos e repasses.",
      "Criação de materiais de apoio em vídeo, doc, pdf.",
      "Tecnologias e Habilidades Chave Aplicadas: Python, Google Apps Script, Google Sheets / Excel (Avançado), APIs, Automação de Processos (RPA), Análise Financeira, Design de Sistemas, Otimização de Fluxos de Trabalho, Treinamento de Equipes."
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
