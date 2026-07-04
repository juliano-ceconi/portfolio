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
      challenge: "PMEs onde processos críticos — emissão de NF, conciliação bancária, relatórios financeiros — ainda dependem de digitação manual e planilhas desconexas, gerando horas perdidas e erros recorrentes.",
      solution: "Mapeamento cirúrgico dos gargalos operacionais, seguido de automação sob medida com Python, Google Apps Script e Selenium — eliminando a dependência de trabalho manual em sistemas legados sem substituí-los.",
      impact: [
        "Redução de ~80% do tempo em processos financeiros críticos.",
        "Erros operacionais próximos de zero.",
        "Equipe realocada para análise e decisão, não digitação."
      ]
    }
  },
  {
    id: 2,
    title: "Desenvolvimento de Ferramentas de Gestão Personalizadas",
    summary: "Criar planilhas avançadas e dashboards em Google Sheets/Excel para controle financeiro, de estoque, de clientes, etc.. Desenvolver pequenos sistemas internos ou interfaces com Google Apps Script e HTML/CSS para facilitar tarefas específicas.",
    tags: ["Google Sheets", "Excel", "Dashboards", "Google Apps Script", "HTML/CSS", "Ferramentas Internas"],
    details: {
      challenge: "Soluções de prateleira que não se adaptam às particularidades do negócio, forçando a equipe a conviver com planilhas soltas, controles paralelos e dados descentralizados.",
      solution: "Sistemas internos e dashboards sob medida em Google Sheets + Apps Script e HTML/CSS, integrando finanças, estoque e operações em uma única camada de gestão funcional.",
      impact: [
        "Visibilidade em tempo real de indicadores sem depender de TI.",
        "Eliminação de planilhas paralelas e reconciliação manual.",
        "Decisões baseadas em dados consolidados, não em achismo."
      ]
    }
  },
  {
    id: 3,
    title: "Treinamentos e Workshops",
    summary: "Capacitar equipes e profissionais em Excel/Google Sheets avançado, ferramentas de automação e Inteligência Artificial",
    tags: ["Treinamento", "Excel", "Google Sheets", "Capacitação", "Automação", "IA", "Workshop", "RPA"],
    details: {
      challenge: "Profissionais que dominam o básico de Excel e Sheets mas subutilizam ferramentas avançadas e IA — perdendo horas em tarefas que poderiam ser automatizadas em minutos.",
      solution: "Workshops práticos e diretos ao ponto: Excel/Sheets avançado, automação com Apps Script e aplicação estratégica de IA no dia a dia — conteúdo que gera resultado na semana seguinte.",
      impact: [
        "Equipe capacitada a criar e manter suas próprias automações.",
        "Redução da dependência de suporte externo.",
        "ROI máximo das ferramentas que a empresa já possui."
      ]
    }
  },
  {
    id: 4,
    title: "Consultoria para Otimização de Fluxos de Trabalho com Foco Tecnológico",
    summary: "Analisar o fluxo de trabalho atual da empresa e propor melhorias usando tecnologia, ou seja, encontrar gargalos operacionais e construir soluções inteligentes para cada um.",
    tags: ["Consultoria", "Otimização de Processos", "Tecnologia", "Gargalos Operacionais", "Soluções Inteligentes"],
    details: {
      challenge: "Empresas em crescimento que ainda operam com processos artesanais — sem métricas claras de onde estão os gargalos nem quanto custam.",
      solution: "Auditoria objetiva dos fluxos de trabalho: mapeamento de tempos, identificação de gargalos com dados reais e priorização de intervenções por impacto vs. esforço.",
      impact: [
        "Gargalos eliminados na ordem certa — o que mais dói primeiro.",
        "Fluxos redesenhados com a tecnologia certa para cada caso.",
        "Crescimento sem aumento proporcional de custo operacional."
      ]
    }
  },
  {
    id: 5,
    title: "Orquestração de Agentes de IA e Automações Inteligentes",
    summary: "Projetar e implementar ecossistema completo de agentes de IA e automações na Hub Agente IA, integrando n8n, RAG, MCP, WhatsApp via Evolution API e múltiplos sistemas conectados.",
    tags: ["n8n", "RAG", "MCP", "Docker", "Supabase", "Node.js", "Evolution API", "Redis", "VPS"],
    details: {
      challenge: "Atendimento e qualificação de leads 100% manuais, sem escala — cada interação consumia tempo da equipe e o conhecimento sobre produtos e processos estava fragmentado em dezenas de fontes.",
      solution: "Ecossistema integrado em quatro camadas: workflows n8n orquestrando o ciclo completo de lead nurturing e mensageria; agentes com RAG consultando bases vetoriais para respostas contextuais; MCP como camada de integração entre ferramentas; infraestrutura Docker em VPS com Supabase e Redis garantindo disponibilidade e baixo custo.",
      impact: [
        "Atendimento e qualificação de leads 24/7 sem intervenção humana (MIA).",
        "Agentes que entendem contexto, não só palavras-chave — com memória e base de conhecimento vetorial.",
        "Infraestrutura que escala sob demanda sem estourar o orçamento.",
        "Ecossistema aberto via MCP para conectar novas ferramentas sem retrabalho."
      ]
    }
  }
];
