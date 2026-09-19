import type { Localized } from '@/i18n';

export type Job = {
  title: string;
  company: string;
  dates: string;
  description: string[];
};

export const jobs: Localized<Job[]> = {
  'pt-BR': [
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
  ],
  en: [
    {
      title: "Founder & CTO",
      company: "Hub Agente IA",
      dates: "2025 - Present",
      description: [
        "Founded and led the engineering of Hub Agente IA, building applied AI solutions, autonomous agents and custom systems for small and medium businesses:",
        "AI agents and B2B automation: self-hosted n8n with Prometheus metrics, messaging through Evolution API (WhatsApp), Redis, Supabase/PostgreSQL, pgvector for RAG, MCP, multi-LLM orchestration and a prompt evaluation hub.",
        "Product in production: CRM built for a paying client (microlins.hubagenteia.cloud) with React, Vite, Supabase, Vitest, Docker, nginx and automated deploy over SSH key.",
        "Self-hosted infrastructure: Ubuntu 24.04 VPS with Docker Compose, Traefik with automatic TLS, fail2ban, Tailscale, PM2, backup routines and monitoring runbooks.",
        "Engineering labs: conception and in-house development of Okam (AI governance) and Doroapp (gamified focus management).",
        "Technologies: n8n, Docker, Supabase, PostgreSQL, pgvector, Redis, Traefik, Tailscale, React, Vite, Node.js, Next.js, Prisma, Vitest, Evolution API, MCP, RAG, Python."
      ]
    },
    {
      title: "Finance Manager and Automation Developer",
      company: "MedPless Assist",
      dates: "May/24 to June/25",
      description: [
        "Led the modernization and automation of critical finance and IT processes, turning manual operations into data-driven systems to cut errors and free the team for higher value work.",
        "Invoice automation in Python: end to end solution that removed manual invoice processing, with a sharp drop in time and errors.",
        "Integrated finance system (Google Sheets + Apps Script + Twilio): real time dashboards, cash flow, automatic PDF invoices, WhatsApp notifications and income statements in a traceable, auditable ecosystem.",
        "Relationship management with around 80 clinics, labs and hospitals plus 20 healthcare professionals, owning the full billing and payout cycle.",
        "Technologies: Python, Google Apps Script, Google Sheets/Excel, APIs, Twilio, RPA."
      ]
    },
    {
      title: "Managing Partner",
      company: "Clínica da Cidade | Barreiras branch",
      dates: "May/22 to April/24",
      description: [
        "Full management of the operation, from opening the branch to selling it.",
        "Management of a multidisciplinary team, fostering a culture of excellence and resource optimization.",
        "Full management of receivables and payables, income statement, cash flow statement and projections.",
        "Relationship management with clients, doctors and other healthcare professionals."
      ]
    },
    {
      title: "Operations Manager and Instructor",
      company: "Microlins",
      dates: "July/15 to July/17",
      description: [
        "Led the branch with full management of the teaching and sales teams, financial control (cash flow, payables and receivables) and marketing and growth initiatives.",
        "Teaching and talks: computer instructor for regular classes and VIP sessions, and speaker in the institution's job market and professional development series.",
        "Optimization of operational processes with standard routines for class control and for tracking student satisfaction and retention.",
        "Full people management cycle: recruiting, selection and continuous training of the teams through technical and behavioral programs."
      ]
    }
  ],
  es: [
    {
      title: "Founder & CTO",
      company: "Hub Agente IA",
      dates: "2025 - Presente",
      description: [
        "Fundación y liderazgo técnico de Hub Agente IA, estructurando soluciones de IA aplicada, agentes autónomos y sistemas a medida para pequeñas y medianas empresas:",
        "Agentes de IA y automatización B2B: n8n self-hosted con métricas Prometheus, mensajería con Evolution API (WhatsApp), Redis, Supabase/PostgreSQL, pgvector para RAG, MCP, orquestación multi-LLM y central de evaluación de prompts.",
        "Producto en producción: CRM desarrollado para cliente de pago (microlins.hubagenteia.cloud) en React, Vite, Supabase, Vitest, Docker, nginx y despliegue automatizado por clave SSH.",
        "Infraestructura self-hosted: VPS Ubuntu 24.04 con Docker Compose, Traefik con TLS automático, fail2ban, Tailscale, PM2, rutinas de copia de seguridad y runbooks de monitoreo.",
        "Laboratorios de ingeniería: concepción y desarrollo interno de los proyectos Okam (gobernanza de IA) y Doroapp (gestión de enfoque gamificada).",
        "Tecnologías: n8n, Docker, Supabase, PostgreSQL, pgvector, Redis, Traefik, Tailscale, React, Vite, Node.js, Next.js, Prisma, Vitest, Evolution API, MCP, RAG, Python."
      ]
    },
    {
      title: "Gerente Financiero y Desarrollador de Automatizaciones",
      company: "MedPless Assist",
      dates: "Mayo/24 a Junio/25",
      description: [
        "Lideré la modernización y automatización de procesos financieros y de TI críticos, convirtiendo operaciones manuales en sistemas guiados por datos para reducir errores y liberar al equipo para tareas de mayor valor.",
        "Automatización de facturas en Python: solución completa que eliminó el procesamiento manual de facturas, con una reducción drástica de tiempo y errores.",
        "Sistema financiero integrado (Google Sheets + Apps Script + Twilio): paneles en tiempo real, flujo de caja, facturas en PDF automáticas, avisos por WhatsApp y estado de resultados en un ecosistema rastreable y auditable.",
        "Gestión de la relación con unas 80 clínicas, laboratorios y hospitales más 20 profesionales de la salud, responsable de todo el ciclo de facturación y pagos.",
        "Tecnologías: Python, Google Apps Script, Google Sheets/Excel, APIs, Twilio, RPA."
      ]
    },
    {
      title: "Socio Administrador",
      company: "Clínica da Cidade | Sede Barreiras",
      dates: "Mayo/22 a Abril/24",
      description: [
        "Gestión completa de la operación, desde la apertura hasta la venta de la sede.",
        "Gestión de un equipo multidisciplinario, promoviendo una cultura de excelencia y optimización de recursos.",
        "Gestión completa de cuentas por cobrar y por pagar, estado de resultados, flujo de caja y proyecciones.",
        "Gestión y relación con clientes, médicos y otros profesionales de la salud."
      ]
    },
    {
      title: "Gerente de Operaciones e Instructor",
      company: "Microlins",
      dates: "Julio/15 a Julio/17",
      description: [
        "Liderazgo de la sede con gestión completa de los equipos pedagógico y comercial, control financiero (flujo de caja, cuentas por pagar y cobrar) y acciones de marketing y expansión.",
        "Enseñanza y charlas: profesor de informática para grupos regulares y clases VIP, y ponente en el ciclo de mercado laboral y capacitación profesional de la institución.",
        "Optimización de procesos operativos con rutinas estandarizadas para el control de grupos y el seguimiento de la satisfacción y retención de alumnos.",
        "Ciclo completo de gestión de personas: reclutamiento, selección y capacitación continua de los equipos mediante formaciones técnicas y comportamentales."
      ]
    }
  ],
};
