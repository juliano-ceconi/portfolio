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
  en: [
    {
      id: 1,
      title: "Custom process automation",
      summary: "The repetitive tasks draining your team's time today (invoicing, bank reconciliation, compiling reports, or chasing payments) run on autopilot. I map operational bottlenecks, build tailor-made automations, and integrate them seamlessly into the tools you already use.",
      tags: ["Process automation", "n8n", "Python", "Google Apps Script", "Integrations", "Small business"],
      details: {
        challenge: "In most small and medium-sized businesses, critical operations depend on manual entry: invoices issued by hand, reconciliations verified line by line, and the same weekly reports rebuilt from scratch. High-value talent ends up stuck doing repetitive, mechanical work: the exact place where costly human errors happen.",
        solution: "I map operational bottlenecks directly alongside the team executing the work, then build tailor-made automations with n8n, Python, or Google Apps Script. The automations integrate directly with your existing software, requiring no ERP migration and no disruption to daily routines.",
        impact: [
          "Automated invoice generation with Python and Selenium, interacting directly with vendor web portals.",
          "Comprehensive financial system built in Google Sheets and Apps Script: P&L statements, cash flow, automated PDF invoicing, WhatsApp collection reminders, and full audit logs.",
          "Delivery measured in days, not quarters. Every automation is deployed to production and field-tested in live operations before sign-off."
        ]
      }
    },
    {
      id: 2,
      title: "AI agents that handle WhatsApp customer support",
      summary: "A dedicated 24/7 AI agent on your WhatsApp: understands conversational context, references your company's proprietary knowledge base, qualifies inbound leads, and smoothly transfers complex cases to a human team member.",
      tags: ["AI agents", "WhatsApp", "n8n", "RAG", "Evolution API", "Supabase", "Docker"],
      details: {
        challenge: "Inquiries arriving after hours or during peak demand often get left waiting, and waiting leads quickly buy from competitors. Hiring additional staff for initial triage is expensive, requires extensive training, and still leaves nights and weekends uncovered.",
        solution: "A robust four-layer architecture running in production at Hub Agente IA: n8n workflows orchestrating the contact lifecycle; RAG-powered agents querying pgvector embeddings to deliver accurate, grounded answers from your company documentation; MCP connecting external tools; and self-hosted Docker infrastructure with Supabase and Redis.",
        impact: [
          "Automated initial triage and lead qualification, with seamless human handoff when required.",
          "Hallucination-resistant answers strictly grounded in verified company knowledge.",
          "Complete AI engineering lifecycle: prompt engineering, systematic evaluation, deployment, and real-time observability with Prometheus metrics on self-hosted n8n.",
          "Multi-LLM orchestration: upgrade or switch foundation models without rebuilding your workflows."
        ]
      }
    },
    {
      id: 3,
      title: "Website and landing page development",
      summary: "Corporate websites, high-converting sales pages, and campaign landing pages: built from scratch, published with custom domains and HTTPS, lightning-fast on mobile, and directly integrated with WhatsApp. Delivered live in production, not just as design mockups.",
      tags: ["Websites", "Landing pages", "React", "Vite", "Astro", "Publishing and domain"],
      details: {
        challenge: "A business without a website loses customers who research before reaching out. Worse, a site that fails to clearly explain the value proposition within seconds, or lags on mobile devices, bleeds leads just as fast, despite having already cost time and money.",
        solution: "Custom-tailored pages with copy crafted specifically for buyers rather than developers, published with custom domains, SSL certificates, and rapid load times. Seamlessly integrated with WhatsApp, lead capture forms, and automated CRM workflows.",
        impact: [
          "Nine live client and proprietary projects: the portfolio showcase above displays these implementations, linking directly to each published site.",
          "Full deployment, domain setup, and SSL configuration included; clients receive a live, production URL, not just source code files.",
          "Engineered on modern software foundations: pages easily scale into member areas, interactive catalogs, or web apps without requiring a complete rewrite."
        ]
      }
    },
    {
      id: 4,
      title: "Custom management systems (CRM, dashboards, internal tools)",
      summary: "When off-the-shelf software falls short and your business relies on scattered spreadsheets, I engineer custom web platforms tailored to your exact workflows, complete with role-based access control, centralized data, and turnkey production deployment.",
      tags: ["React 19", "Vite", "Supabase", "PostgreSQL", "Vitest", "Docker", "nginx"],
      details: {
        challenge: "Operational data fragmented across disconnected spreadsheets, leaving each department with a different version of the truth and making confident decision-making impossible. Meanwhile, commercial SaaS platforms force you to pay for bloated features while still missing the specific nuances your business requires.",
        solution: "Custom full-stack web applications built with React 19, Vite, and Supabase/PostgreSQL, backed by automated Vitest suites, code audits, Docker containerization, and nginx reverse proxies. Includes automated versioned deployments and comprehensive operational runbooks.",
        impact: [
          "Production CRM deployed for an enterprise Microlins franchise, actively used daily by their admissions and sales teams (microlins.hubagenteia.cloud).",
          "A single source of truth replacing rogue spreadsheets, complete with change audit histories and role-based permissions.",
          "Full intellectual property and data ownership: code, databases, and infrastructure remain entirely under client control with zero per-seat subscription fees."
        ]
      }
    },
    {
      id: 5,
      title: "Financial management and automation",
      summary: "Financial operations architecture: real-time cash flow monitoring, automated bank reconciliation, and smart collection workflows. Eliminates blind financial management and hours spent wrangling conflicting spreadsheets.",
      tags: ["Financial management", "Cash flow", "Management income statement", "Automatic collection", "Bank reconciliation", "Small business"],
      details: {
        challenge: "Many growing businesses operate without clear visibility into real margins: accounts receivable slip due to absent follow-up, reconciliation consumes hours of manual verification, and monthly closes become educated guesses. Leadership ends up fighting administrative fires instead of steering strategy with dependable data.",
        solution: "Hands-on financial structuring paired with custom automation: rigorous cash flow controls, rapid reconciliation pipelines, automated debt collection sequences, and reliable P&L statements reflecting true operating health.",
        impact: [
          "Integrated financial automation delivering automated PDF invoices, P&L reporting, and scheduled WhatsApp payment reminders.",
          "Drastic reduction in manual overhead for invoice generation and bank account reconciliation.",
          "Real-time cash flow visibility and predictable receivables, enabling evidence-based financial decisions."
        ]
      }
    },
    {
      id: 6,
      title: "Workshops and training: Applied AI for business teams",
      summary: "Practical, hands-on workshops empowering internal teams to leverage modern AI in their daily operations. Strictly focused on real-world business workflows, free of academic fluff, ensuring staff can maintain and build upon their automations.",
      tags: ["Training", "Workshop", "Applied AI", "Automation", "Excel and Google Sheets", "In-company"],
      details: {
        challenge: "Teams encounter AI buzz daily but lack practical clarity on where it applies to their actual responsibilities. The outcome: either zero adoption, or chaotic, unguided usage that risks data privacy without standard quality controls.",
        solution: "Curriculum customized around your company's actual operational workflows: identifying high-impact AI use cases, defining security boundaries for sensitive data, and training staff to build and maintain their own automations. Available in half-day intensives or ongoing corporate tracks.",
        impact: [
          "Proven instructional background: extensive experience as an IT instructor and featured speaker on professional workforce enablement.",
          "Proprietary educational platform live in production: Juliano Ceconi Academy, complete with an interactive student portal and video delivery.",
          "Teams gain operational autonomy: internal staff confidently create, adapt, and maintain core business automations without external dependency."
        ]
      },
      links: [
        {
          title: "Visit Juliano Ceconi Academy, training in AI engineering",
          url: "https://academy.zanettin.cloud"
        }
      ]
    },
    {
      id: 7,
      title: "Self-hosted private infrastructure: secure and fully under your control",
      summary: "Turnkey server configuration, deployment, cybersecurity, and automated backup for custom software. Your systems run on dedicated private infrastructure with predictable hosting costs rather than compounding per-user fees, managed directly by the engineer who built the solution.",
      tags: ["VPS", "Docker", "Traefik", "TLS", "fail2ban", "Tailscale", "Backup", "PM2"],
      details: {
        challenge: "Deploying software without operational support leaves businesses stranded during production incidents. Conversely, stacking third-party SaaS subscriptions turns predictable operating costs into runaway monthly expenses.",
        solution: "Complete self-hosted production architecture on Ubuntu 24.04 LTS: Docker and Docker Compose containerization, Traefik reverse proxying with automatic Let's Encrypt TLS certificates, fail2ban intrusion prevention, locked-down public ports, encrypted remote administration via Tailscale VPN, and PM2 process management.",
        impact: [
          "Multiple isolated production workloads coexisting securely on a single host, each with distinct domains and automated SSL certificates.",
          "Automated backup, recovery, and health monitoring accompanied by concise operational runbooks, ensuring rapid incident resolution.",
          "Zero exposure of administrative ports to the public internet: server management is restricted entirely to authenticated private mesh networks (Tailscale)."
        ]
      }
    }
  ],
  es: [
    {
      id: 1,
      title: "Automatización de procesos a medida",
      summary: "La tarea repetitiva que hoy consume horas de tu equipo (emitir facturas, conciliar el banco, armar informes o cobrar a clientes) pasa a funcionar sola. Mapeo el cuello de botella, construyo la automatización y la dejo funcionando dentro de los sistemas que ya usas.",
      tags: ["Automatización de procesos", "n8n", "Python", "Google Apps Script", "Integraciones", "Pymes"],
      details: {
        challenge: "En la mayoría de las pymes el proceso crítico depende de alguien escribiendo: facturas emitidas a mano, conciliación revisada línea por línea, el mismo informe rehecho cada semana con el mismo formato. Es la hora más cara de la empresa gastada en su trabajo más mecánico, justo donde nacen los errores.",
        solution: "Mapeo de los cuellos de botella junto a quien ejecuta el proceso y automatización a medida con n8n, Python o Google Apps Script. La automatización se comunica con los sistemas que la empresa ya tiene; no exige cambiar de ERP ni alterar la rutina de nadie.",
        impact: [
          "Emisión de facturas automatizada con Python y Selenium, operando sobre el propio sistema web del proveedor.",
          "Sistema financiero completo en Google Sheets y Apps Script: estado de resultados, flujo de caja, facturas en PDF, cobro por WhatsApp y registro de auditoría.",
          "Entrega medida en días, no en trimestres. Cada automatización entra en producción y se valida en la operación real antes de cerrarse."
        ]
      }
    },
    {
      id: 2,
      title: "Agente de IA que atiende por WhatsApp",
      summary: "Un asistente de IA en tu WhatsApp: responde a cualquier hora, entiende el contexto de la conversación, consulta la base de conocimiento de la empresa, califica al interesado y pasa la conversación a una persona cuando hace falta.",
      tags: ["Agentes de IA", "WhatsApp", "n8n", "RAG", "Evolution API", "Supabase", "Docker"],
      details: {
        challenge: "Quien llega fuera de horario o en un pico de demanda se queda esperando, y quien espera le compra a la competencia. Contratar más gente para la primera atención es caro, tarda en formarse y sigue sin cubrir la madrugada ni el fin de semana.",
        solution: "Ecosistema en cuatro capas, todo en producción en Hub Agente IA: flujos en n8n orquestando el ciclo del contacto; agentes con RAG consultando una base vectorial en pgvector para responder con el contenido de la propia empresa; MCP integrando las herramientas; e infraestructura propia en Docker con Supabase y Redis.",
        impact: [
          "Primera atención y calificación funcionando sin intervención humana, con traspaso a una persona cuando el caso lo pide.",
          "Respuestas ancladas en la base de conocimiento del cliente, no en la suposición del modelo.",
          "Ciclo de ingeniería completo: escritura del prompt, evaluación, publicación y observabilidad, con métricas Prometheus en n8n self-hosted.",
          "Orquestación multi-LLM: cambiar el modelo de IA no obliga a reescribir la atención."
        ]
      }
    },
    {
      id: 3,
      title: "Creación de sitios web y landing pages",
      summary: "Sitio institucional, página de venta o landing page de campaña: construidos desde cero, publicados con dominio y HTTPS, rápidos en el móvil y conectados a tu WhatsApp. No me quedo en el prototipo, la página se entrega en línea.",
      tags: ["Sitios web", "Landing pages", "React", "Vite", "Astro", "Publicación y dominio"],
      details: {
        challenge: "La empresa sin sitio web pierde al cliente que busca antes de llamar. Y el sitio que no explica en pocos segundos qué vende la empresa, o que se traba en el móvil, lo pierde igual, con el agravante de que ya costó dinero.",
        solution: "Página construida a medida, con el texto escrito para quien compra y no para quien programa, publicada con dominio propio, certificado de seguridad y carga rápida. Cuando tiene sentido, sale ya integrada a WhatsApp, a formulario y a la atención automática.",
        impact: [
          "Nueve proyectos en línea hoy: la vitrina al inicio de esta página reúne los trabajos, y cada tarjeta lleva al sitio publicado.",
          "Publicación, dominio y HTTPS forman parte de la entrega; el cliente recibe la dirección funcionando, no un archivo.",
          "Misma base técnica de los sistemas: la página puede crecer a área de usuarios, catálogo o panel sin rehacerse desde cero."
        ]
      }
    },
    {
      id: 4,
      title: "Sistema de gestión a medida (CRM, panel, control interno)",
      summary: "Cuando ninguna herramienta de catálogo encaja y la empresa vive de planillas paralelas, construyo el sistema que atiende exactamente su proceso, con control de acceso por usuario, datos centralizados y publicación en producción.",
      tags: ["React 19", "Vite", "Supabase", "PostgreSQL", "Vitest", "Docker", "nginx"],
      details: {
        challenge: "Control repartido en planillas sueltas, cada área con su versión de la verdad y nadie sabiendo qué número es el correcto a la hora de decidir. Cambiar a un sistema enlatado suele significar pagar por muchas funciones inútiles y aun así no cubrir el detalle que importa.",
        solution: "Aplicación web a medida en React 19 con Vite y base Supabase/PostgreSQL, con pruebas automatizadas en Vitest, verificación de código, empaquetado en Docker y publicación con nginx. Despliegue versionado y runbook de operación escritos junto con el sistema.",
        impact: [
          "CRM en producción para cliente de pago de Microlins, en uso en la rutina comercial (microlins.hubagenteia.cloud).",
          "Una sola base de datos en lugar de las planillas paralelas, con historial y control de acceso por usuario.",
          "El sistema es del cliente: código, base y servidor quedan bajo su control, sin mensualidad por usuario."
        ]
      }
    },
    {
      id: 5,
      title: "Gestión y automatización financiera",
      summary: "Estructuración de rutinas financieras, flujo de caja en tiempo real, conciliación y cobro automático. Acabo con la gestión a ciegas y con el retrabajo manual en planillas desencontradas.",
      tags: ["Gestión financiera", "Flujo de caja", "Estado de resultados", "Cobro automático", "Conciliación bancaria", "Pymes"],
      details: {
        challenge: "Muchas empresas operan sin claridad real sobre sus márgenes: los cobros se atrasan por falta de seguimiento, la conciliación consume horas de revisión manual y el cierre de mes se vuelve una incógnita. El gestor gasta energía apagando incendios operativos en vez de decidir con números confiables.",
        solution: "Organización práctica del área financiera junto con automatización. Implantación de control de flujo de caja, conciliación ágil, secuencias de cobro automatizadas y estados de resultados que revelan el resultado real de la operación.",
        impact: [
          "Ecosistema financiero integrado con generación automática de facturas en PDF, estado de resultados gerencial y avisos de cobro por WhatsApp.",
          "Menos tiempo dedicado a la conciliación bancaria y a la emisión manual de facturas.",
          "Visión clara de la caja y previsibilidad de cobros para decidir con fundamento."
        ]
      }
    },
    {
      id: 6,
      title: "Formación y taller de IA aplicada al negocio",
      summary: "Taller práctico para que el equipo use IA en el trabajo diario, centrado en la práctica y sin teoría innecesaria. El equipo aprende a aplicarla en su propio proceso y a mantener lo que se construyó.",
      tags: ["Formación", "Taller", "IA aplicada", "Automatización", "Excel y Google Sheets", "In-company"],
      details: {
        challenge: "El equipo oye hablar de IA todos los días y no sabe dónde encaja en su propio trabajo. Resultado: o nadie la usa, o cada uno la usa a su manera, sin criterio y sin claridad sobre qué puede o no salir de la empresa.",
        solution: "Contenido armado sobre el proceso real de la empresa: dónde caben la IA y la automatización, dónde no, qué se puede enviar a una herramienta de terceros y cómo mantener lo creado. Formato de medio día o trayecto in-company.",
        impact: [
          "Experiencia de aula: profesor de informática (grupos y clases VIP) y ponente en el ciclo de mercado laboral de Microlins.",
          "Plataforma de cursos propia en producción: Juliano Ceconi Academy, con portal del alumno y reproductor de clases.",
          "El equipo pasa a crear y mantener sus propias automatizaciones, reduciendo la dependencia de soporte externo."
        ]
      },
      links: [
        {
          title: "Conocer Juliano Ceconi Academy, formaciones en ingeniería de IA",
          url: "https://academy.zanettin.cloud"
        }
      ]
    },
    {
      id: 7,
      title: "Infraestructura propia, segura y bajo tu control",
      summary: "Servidor, publicación, seguridad y copias de seguridad de lo que se construye. El sistema corre en infraestructura propia, con un costo previsible de servidor en vez de mensualidad por usuario, a cargo de quien desarrolló la solución.",
      tags: ["VPS", "Docker", "Traefik", "TLS", "fail2ban", "Tailscale", "Backup", "PM2"],
      details: {
        challenge: "Un sistema entregado sin nadie que opere el servidor se vuelve problema del cliente en el primer incidente. Y la alternativa habitual de apilar suscripciones de plataformas de terceros convierte un costo variable en un gasto que crece sin control.",
        solution: "Operación self-hosted completa en VPS Ubuntu 24.04: Docker y Docker Compose, Traefik publicando los servicios con certificado TLS, fail2ban bloqueando intentos de invasión, firewall cerrando el acceso administrativo público, administración remota por red privada Tailscale y procesos gestionados con PM2.",
        impact: [
          "Varios servicios en producción en el mismo servidor, cada uno con dirección y certificado propios.",
          "Copia de seguridad, restauración y monitoreo con documentación operativa práctica, con procedimientos definidos antes de cualquier incidente.",
          "Acceso administrativo fuera de internet pública: puerto de administración cerrado, entrada solo por la red privada."
        ]
      }
    }
  ],
};
