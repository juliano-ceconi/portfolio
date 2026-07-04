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
}
export const projects: Project[] = [
  {
    id: 1,
    title: "Consultoria e Implementação de Automação de Processos",
    summary: "Mapear processos manuais em PMEs (financeiro, administrativo, marketing, etc.). Desenvolver e implementar soluções de automação usando Python, Google Apps Script, Selenium, Google Sheets, etc.. Ex: Automatizar envio de NFs, relatórios financeiros, conciliação bancária, interações com sistemas web.",
    tags: ["Automação", "Python", "Google Apps Script", "Selenium", "Google Sheets", "Consultoria"],
    details: {
      challenge: "Empresas com processos manuais e repetitivos que consomem tempo e são propensos a erros.",
      solution: "Análise e mapeamento de processos, seguido pelo desenvolvimento e implementação de soluções de automação personalizadas.",
      impact: [
        "Redução de tempo gasto em tarefas manuais.",
        "Diminuição de erros operacionais.",
        "Aumento da eficiência e produtividade."
      ]
    }
  },
  {
    id: 2,
    title: "Desenvolvimento de Ferramentas de Gestão Personalizadas",
    summary: "Criar planilhas avançadas e dashboards em Google Sheets/Excel para controle financeiro, de estoque, de clientes, etc.. Desenvolver pequenos sistemas internos ou interfaces com Google Apps Script e HTML/CSS para facilitar tarefas específicas.",
    tags: ["Google Sheets", "Excel", "Dashboards", "Google Apps Script", "HTML/CSS", "Ferramentas Internas"],
    details: {
      challenge: "Necessidade de ferramentas de gestão específicas que não são atendidas por soluções prontas.",
      solution: "Criação de planilhas e dashboards personalizados, além de pequenos sistemas e interfaces para otimizar a gestão interna.",
      impact: [
        "Melhora no controle e visualização de dados.",
        "Facilitação de tarefas específicas da equipe.",
        "Aumento da organização e acessibilidade das informações."
      ]
    }
  },
  {
    id: 3,
    title: "Treinamentos e Workshops",
    summary: "Capacitar equipes e profissionais em Excel/Google Sheets avançado, ferramentas de automação e Inteligência Artificial",
    tags: ["Treinamento", "Excel", "Google Sheets", "Capacitação", "Automação", "IA", "Workshop", "RPA"],
    details: {
      challenge: "Equipes com lacunas de conhecimento em ferramentas essenciais ou nas novas soluções implementadas.",
      solution: "Treinamentos e workshops práticos para capacitar as equipes no uso de Excel/Google Sheets avançado e de ferramentas de automação.",
      impact: [
        "Melhora nas habilidades da equipe.",
        "Aumento da autonomia e eficiência no uso das ferramentas.",
        "Maximização do retorno sobre o investimento em automação."
      ]
    }
  },
  {
    id: 4,
    title: "Consultoria para Otimização de Fluxos de Trabalho com Foco Tecnológico",
    summary: "Analisar o fluxo de trabalho atual da empresa e propor melhorias usando tecnologia, ou seja, encontrar gargalos operacionais e construir soluções inteligentes para cada um.",
    tags: ["Consultoria", "Otimização de Processos", "Tecnologia", "Gargalos Operacionais", "Soluções Inteligentes"],
    details: {
      challenge: "Empresas que buscam identificar e resolver ineficiências em seus fluxos de trabalho.",
      solution: "Análise aprofundada dos fluxos de trabalho existentes, identificação de gargalos e proposição de soluções tecnológicas inovadoras para otimização.",
      impact: [
        "Identificação e eliminação de ineficiências.",
        "Implementação de soluções que geram maior produtividade.",
        "Crescimento mais inteligente e eficiente da empresa."
      ]
    }
  },
  {
    id: 5,
    title: "Orquestração de Agentes de IA e Automações Inteligentes",
    summary: "Projetar e implementar ecossistema completo de agentes de IA e automações na Hub Agente IA, integrando n8n, RAG, MCP, WhatsApp via Evolution API e múltiplos sistemas conectados.",
    tags: ["n8n", "RAG", "MCP", "Docker", "Supabase", "Node.js", "Evolution API", "Redis", "VPS"],
    details: {
      challenge: "Demanda por um ecossistema integrado de agentes de IA e automações capaz de atender leads, qualificar conversas e gerenciar operações de forma autônoma e escalável.",
      solution: "Estruturação de quatro pilares complementares: (1) Workflows n8n para automações de lead nurturing e mensageria; (2) Engenharia de prompt com RAG para agentes com contexto dinâmico; (3) Infraestrutura Docker em VPS com Supabase/Postgres e Redis; (4) Sistemas web conectados via API para gestão visual.",
      impact: [
        "Automação completa do ciclo de atendimento e qualificação de leads (MIA).",
        "Agentes autônomos com memória e contexto via RAG e bases vetoriais.",
        "Infraestrutura escalável e de baixo custo com Docker + VPS.",
        "Ecossistema extensível via MCP para conectar novas ferramentas e serviços."
      ]
    }
  }
];
