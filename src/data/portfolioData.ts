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
      summary: "La tarea repetitiva que hoy consume horas de tu equipo (emitir facturas, conciliar bancos, armar informes o gestionar cobros) pasa a funcionar sola. Mapeo los cuellos de botella, construyo la automatización y la integro directamente en los sistemas que ya usas.",
      tags: ["Automatización de procesos", "n8n", "Python", "Google Apps Script", "Integraciones", "Pymes"],
      details: {
        challenge: "En la mayoría de las pymes, las operaciones críticas dependen de entradas manuales: facturas emitidas a mano, conciliaciones revisadas línea por línea y los mismos informes rehechos cada semana. Es el talento más valioso de la empresa consumido en tareas mecánicas, el escenario exacto donde ocurren los errores humanos.",
        solution: "Mapeo los cuellos de botella junto al equipo que ejecuta la tarea y desarrollo automatizaciones a medida con n8n, Python o Google Apps Script. La solución se comunica directamente con las herramientas existentes, sin exigir cambios de ERP ni alterar las rutinas diarias.",
        impact: [
          "Emisión de facturas automatizada con Python y Selenium, operando directamente sobre los portales web de proveedores.",
          "Sistema financiero completo en Google Sheets y Apps Script: estados de resultados, flujo de caja, facturas en PDF, recordatorios de cobro por WhatsApp y registro de auditoría.",
          "Tiempos de entrega medidos en días, no en trimestres. Cada automatización se despliega en producción y se valida en la operación real antes de la entrega final."
        ]
      }
    },
    {
      id: 2,
      title: "Agentes de IA para atención al cliente por WhatsApp",
      summary: "Un asistente de IA dedicado 24/7 en tu WhatsApp: comprende el contexto de la conversación, consulta la base de conocimiento de la empresa, califica prospectos y transfiere fluidamente los casos complejos a un agente humano.",
      tags: ["Agentes de IA", "WhatsApp", "n8n", "RAG", "Evolution API", "Supabase", "Docker"],
      details: {
        challenge: "Las consultas que llegan fuera de horario o en picos de demanda suelen quedar sin respuesta, y los clientes en espera compran en la competencia. Contratar más personal para la atención inicial es costoso, requiere capacitación constante y sigue sin cubrir noches ni fines de semana.",
        solution: "Arquitectura en cuatro capas en producción en Hub Agente IA: flujos en n8n orquestando el ciclo del contacto; agentes con RAG consultando embeddings en pgvector para responder con información verificada de la empresa; MCP integrando herramientas externas; e infraestructura self-hosted en Docker con Supabase y Redis.",
        impact: [
          "Atención inicial y calificación de prospectos sin intervención humana, con derivación fluida a un operador cuando el caso lo requiere.",
          "Respuestas precisas y ancladas rigurosamente en la documentación de la empresa, evitando alucinaciones del modelo.",
          "Ciclo completo de ingeniería de IA: diseño de prompts, evaluación sistemática, despliegue y observabilidad en tiempo real con métricas Prometheus en n8n.",
          "Orquestación multi-LLM: permite actualizar o cambiar de modelo fundacional sin necesidad de reconstruir los flujos de atención."
        ]
      }
    },
    {
      id: 3,
      title: "Desarrollo de sitios web y landing pages",
      summary: "Sitios institucionales, páginas de venta de alta conversión y landing pages para campañas: desarrollados desde cero, publicados con dominio propio y HTTPS, ultrarrápidos en móviles y conectados a WhatsApp. Entregados en producción, no solo como maquetas.",
      tags: ["Sitios web", "Landing pages", "React", "Vite", "Astro", "Publicación y dominio"],
      details: {
        challenge: "Una empresa sin sitio web pierde a los clientes que investigan antes de comprar. Y un sitio que no explica con claridad la propuesta de valor en pocos segundos, o que tarda en cargar en móviles, pierde clientes igual de rápido, habiendo costado tiempo y dinero.",
        solution: "Páginas desarrolladas a medida, con textos redactados para convencer al comprador y no al programador, publicadas con dominio propio, certificado SSL y tiempos de carga inmediatos. Integradas de forma nativa con WhatsApp, formularios de captura y sistemas de gestión.",
        impact: [
          "Nueve proyectos en producción hoy: la vitrina superior presenta estas implementaciones con enlaces directos a cada sitio web publicado.",
          "Despliegue completo, configuración de dominio y certificados HTTPS incluidos en la entrega; el cliente recibe su sitio operativo, no un paquete de archivos.",
          "Construidos sobre bases técnicas modernas: las páginas pueden escalar fácilmente a áreas de miembros, catálogos o paneles sin necesidad de rehacerse desde cero."
        ]
      }
    },
    {
      id: 4,
      title: "Sistemas de gestión a medida (CRM, paneles y control interno)",
      summary: "Cuando el software comercial no se ajusta y tu empresa depende de planillas dispersas, desarrollo plataformas web a medida que responden con precisión a tus procesos, con control de acceso por roles, datos centralizados y despliegue llave en mano.",
      tags: ["React 19", "Vite", "Supabase", "PostgreSQL", "Vitest", "Docker", "nginx"],
      details: {
        challenge: "Información operativa fragmentada en planillas aisladas, donde cada departamento maneja su propia versión de los hechos y la toma de decisiones carece de datos confiables. Las plataformas SaaS genéricas obligan a pagar por funciones innecesarias sin resolver los detalles críticos del negocio.",
        solution: "Aplicaciones web full-stack a medida desarrolladas con React 19, Vite y Supabase/PostgreSQL, respaldadas por pruebas automatizadas en Vitest, auditorías de código, contenedores Docker y proxies inversos con nginx. Incluye despliegue versionado y runbooks operativos.",
        impact: [
          "CRM en producción para una franquicia de Microlins, utilizado diariamente por sus equipos de admisiones y ventas (microlins.hubagenteia.cloud).",
          "Una única fuente de verdad que reemplaza las planillas aisladas, con historial de cambios y permisos basados en roles.",
          "Propiedad total del cliente: código fuente, bases de datos y servidores quedan bajo su control exclusivo, sin costos mensuales por usuario."
        ]
      }
    },
    {
      id: 5,
      title: "Gestión y automatización financiera",
      summary: "Estructuración de operaciones financieras: flujo de caja en tiempo real, conciliación bancaria ágil y secuencias inteligentes de cobro. Eliminamos la gestión a ciegas y las horas dedicadas al retrabajo manual en planillas descoordinadas.",
      tags: ["Gestión financiera", "Flujo de caja", "Estado de resultados", "Cobro automático", "Conciliación bancaria", "Pymes"],
      details: {
        challenge: "Muchas empresas operan sin visibilidad clara sobre sus márgenes reales: las cuentas por cobrar se atrasan por falta de seguimiento, la conciliación exige horas de verificación manual y los cierres de mes se vuelven inciertos. Los líderes terminan apagando urgencias operativas en lugar de guiar el negocio con datos confiables.",
        solution: "Organización práctica del área financiera combinada con automatización a medida: control estricto del flujo de caja, conciliación ágil, secuencias de cobro automatizadas y estados de resultados (P&L) que reflejan el estado real de la operación.",
        impact: [
          "Ecosistema financiero integrado con emisión automática de facturas en PDF, estados de resultados gerenciales y recordatorios de cobro por WhatsApp.",
          "Reducción drástica del tiempo operativo dedicado a la conciliación bancaria y a la emisión manual de facturas.",
          "Visibilidad del flujo de caja en tiempo real y previsibilidad de cobros para tomar decisiones estratégicas fundamentadas."
        ]
      }
    },
    {
      id: 6,
      title: "Talleres y formación: IA aplicada a los negocios",
      summary: "Talleres prácticos que capacitan a tu equipo para utilizar IA en el trabajo diario. Enfoque 100% práctico aplicado a los procesos reales de la empresa, sin rodeos teóricos, garantizando que el personal pueda mantener y evolucionar sus propias soluciones.",
      tags: ["Formación", "Taller", "IA aplicada", "Automatización", "Excel y Google Sheets", "In-company"],
      details: {
        challenge: "Los equipos escuchan hablar de inteligencia artificial a diario pero carecen de claridad sobre cómo aplicarla a sus tareas concretas. El resultado suele ser la falta de adopción o un uso desordenado que compromete la privacidad de datos sin estándares de calidad.",
        solution: "Contenido diseñado sobre los flujos de trabajo reales de la empresa: identificar casos de uso de alto impacto, definir límites de seguridad para datos sensibles y capacitar al equipo para crear y mantener sus propias automatizaciones. Disponible en jornadas intensivas o programas corporativos.",
        impact: [
          "Sólida trayectoria docente: amplia experiencia como instructor de informática y conferencista en programas de capacitación y empleabilidad.",
          "Plataforma educativa propia en producción: Juliano Ceconi Academy, con panel del alumno y sistema de reproducción de clases.",
          "Autonomía operativa para el equipo: los colaboradores adquieren la capacidad de crear, adaptar y mantener automatizaciones sin depender de soporte externo."
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
      summary: "Configuración, despliegue, ciberseguridad y respaldos automatizados para tus sistemas. Tus aplicaciones operan en infraestructura dedicada con costos de servidor previsibles en lugar de tarifas por usuario, bajo el cuidado del ingeniero que construyó la solución.",
      tags: ["VPS", "Docker", "Traefik", "TLS", "fail2ban", "Tailscale", "Backup", "PM2"],
      details: {
        challenge: "Desplegar software sin soporte operativo deja a la empresa desprotegida ante cualquier incidente técnico. Por otro lado, acumular suscripciones de plataformas de terceros convierte costos variables en gastos que escalan sin control.",
        solution: "Arquitectura self-hosted completa en Ubuntu 24.04 LTS: contenedores Docker y Docker Compose, proxy inverso Traefik con certificados TLS automáticos, prevención de intrusiones con fail2ban, puertos públicos bloqueados, administración remota cifrada mediante Tailscale VPN y gestión de procesos con PM2.",
        impact: [
          "Múltiples servicios aislados conviviendo de forma segura en un mismo servidor, cada uno con dominio y certificados SSL propios.",
          "Respaldos automatizados, restauración y monitoreo con documentación operativa práctica, garantizando procedimientos claros ante cualquier eventualidad.",
          "Cero exposición de puertos administrativos a internet pública: el acceso al servidor se gestiona exclusivamente a través de redes privadas autenticadas (Tailscale)."
        ]
      }
    }
  ],
};
