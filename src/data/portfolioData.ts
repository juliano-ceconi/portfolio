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
      summary: "The repetitive task that eats hours of your team today (issuing invoices, reconciling the bank, building a report or chasing a payment) starts running on its own. I map the bottleneck, build the automation and leave it working inside the systems you already use.",
      tags: ["Process automation", "n8n", "Python", "Google Apps Script", "Integrations", "Small business"],
      details: {
        challenge: "In most small and medium businesses the critical process depends on someone typing: invoices issued by hand, reconciliation checked line by line, the same report rebuilt every week in the same format. It is the company's most expensive hour spent on its most mechanical work, which is exactly where errors are born.",
        solution: "I map the bottlenecks together with the people who run the process, then build custom automation with n8n, Python or Google Apps Script. The automation talks to the systems the company already has; there is no need to switch ERP or change anyone's routine.",
        impact: [
          "Invoice issuing automated with Python and Selenium, driving the supplier's own web system.",
          "Complete finance system in Google Sheets and Apps Script: income statement, cash flow, PDF invoices, WhatsApp payment reminders and an audit log.",
          "Delivery measured in days, not quarters. Every automation goes live and is validated in the real operation before it is closed."
        ]
      }
    },
    {
      id: 2,
      title: "AI agent that answers on WhatsApp",
      summary: "An AI assistant on your WhatsApp: it answers at any hour, follows the context of the conversation, looks things up in the company knowledge base, qualifies the lead and hands over to a person when the conversation calls for it.",
      tags: ["AI agents", "WhatsApp", "n8n", "RAG", "Evolution API", "Supabase", "Docker"],
      details: {
        challenge: "Whoever arrives after hours or during a demand peak is left waiting, and whoever waits buys from the competitor. Hiring more people for first contact is expensive, takes time to train and still does not cover nights or weekends.",
        solution: "A four layer ecosystem, all of it running in production at Hub Agente IA: n8n flows orchestrating the contact cycle; agents with RAG querying a pgvector vector base so answers come from the company's own content; MCP connecting the tools; and self-hosted infrastructure on Docker with Supabase and Redis.",
        impact: [
          "First contact and qualification working without human intervention, handing over to a person when the case requires it.",
          "Answers anchored in the client's knowledge base, not in the model's guess.",
          "Full engineering cycle: prompt writing, evaluation, release and observability, with Prometheus metrics on self-hosted n8n.",
          "Multi-LLM orchestration: switching the AI model does not mean rewriting the service."
        ]
      }
    },
    {
      id: 3,
      title: "Website and landing page development",
      summary: "Company website, sales page or campaign landing page: built from scratch, published with domain and HTTPS, fast on the phone and wired to your WhatsApp. I do not stop at the prototype, the page is delivered live.",
      tags: ["Websites", "Landing pages", "React", "Vite", "Astro", "Publishing and domain"],
      details: {
        challenge: "A company with no website loses the customer who searches before calling. And a website that does not explain in a few seconds what the company sells, or that stalls on the phone, loses the customer just the same, with the aggravating fact that it already cost money.",
        solution: "A page built to measure, with copy written for the buyer and not for the developer, published with its own domain, security certificate and fast loading. When it makes sense, it ships already connected to WhatsApp, to a form and to the automated service.",
        impact: [
          "Nine projects live today: the showcase at the top of this page gathers the work, and each card leads to the published site.",
          "Publishing, domain and HTTPS are part of the delivery; the client receives a working address, not a file.",
          "Same technical base as the systems: the page can grow into a member area, catalog or dashboard without being rebuilt from scratch."
        ]
      }
    },
    {
      id: 4,
      title: "Custom management system (CRM, dashboard, internal control)",
      summary: "When no off-the-shelf tool fits and the company lives on side spreadsheets, I build the system that matches its process exactly, with per-user access control, centralized data and release to production.",
      tags: ["React 19", "Vite", "Supabase", "PostgreSQL", "Vitest", "Docker", "nginx"],
      details: {
        challenge: "Control scattered across loose spreadsheets, each department with its own version of the truth and nobody sure which number is right when it is time to decide. Replacing it with an off-the-shelf system usually means paying for plenty of useless features and still not covering the detail that matters.",
        solution: "A custom web application in React 19 with Vite and a Supabase/PostgreSQL database, with automated tests in Vitest, code checks, Docker packaging and release with nginx. Versioned deploy and an operations runbook written alongside the system.",
        impact: [
          "CRM in production for a paying Microlins client, in daily use by the sales team (microlins.hubagenteia.cloud).",
          "A single database in place of the side spreadsheets, with history and per-user access control.",
          "The system belongs to the client: code, database and server stay under their control, with no per-seat subscription."
        ]
      }
    },
    {
      id: 5,
      title: "Financial management and automation",
      summary: "Structuring of financial routines, real time cash flow, reconciliation and automatic collection. It puts an end to managing in the dark and to manual rework across mismatched spreadsheets.",
      tags: ["Financial management", "Cash flow", "Management income statement", "Automatic collection", "Bank reconciliation", "Small business"],
      details: {
        challenge: "Many companies operate without real clarity about their margins: payments fall behind for lack of follow-up, reconciliation eats hours of manual checking and the monthly close turns into a guess. The manager spends energy putting out operational fires instead of deciding with numbers they can trust.",
        solution: "Practical organization of the finance area combined with automation. Cash flow control, quick reconciliation, automated collection sequences and statements that show the real result of the operation.",
        impact: [
          "Integrated finance ecosystem with automatic PDF invoices, management income statement and payment reminders over WhatsApp.",
          "Less time spent on bank reconciliation and on issuing invoices by hand.",
          "A clear view of cash and predictable receipts, so decisions rest on evidence."
        ]
      }
    },
    {
      id: 6,
      title: "Training and workshop on AI applied to the business",
      summary: "A hands-on workshop so the team uses AI in everyday work, focused on practice and free of unnecessary theory. The team learns to apply it to its own process and to maintain what was built.",
      tags: ["Training", "Workshop", "Applied AI", "Automation", "Excel and Google Sheets", "In-company"],
      details: {
        challenge: "The team hears about AI every day and has no idea where it touches their own work. The result: either nobody uses it, or everyone uses it their own way, with no criteria and no clarity about what may or may not leave the company.",
        solution: "Content built on the company's real process: where AI and automation fit, where they do not, what may be sent to a third party tool and how to maintain what was created. Half day format or in-company track.",
        impact: [
          "Classroom experience: computer instructor (regular and VIP classes) and speaker in the Microlins job market series.",
          "Own course platform in production: Juliano Ceconi Academy, with student portal and lesson player.",
          "The team starts creating and maintaining its own automations, depending less on outside support."
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
      title: "Your own infrastructure, secure and under your control",
      summary: "Server, publishing, security and backup for what gets built. The system runs on its own infrastructure, with a predictable server cost instead of a per-seat subscription, looked after by the person who built the solution.",
      tags: ["VPS", "Docker", "Traefik", "TLS", "fail2ban", "Tailscale", "Backup", "PM2"],
      details: {
        challenge: "A system delivered with nobody to operate the server becomes the client's problem at the first incident. And the common alternative of stacking third party subscriptions turns a variable cost into an expense that grows out of control.",
        solution: "Full self-hosted operation on an Ubuntu 24.04 VPS: Docker and Docker Compose, Traefik publishing the services with TLS certificates, fail2ban blocking intrusion attempts, a firewall closing public administrative access, remote administration over the Tailscale private network and processes managed with PM2.",
        impact: [
          "Several services in production on the same server, each with its own address and certificate.",
          "Backup, restore and monitoring with practical operational documentation, so the procedures exist before any incident.",
          "Administrative access off the public internet: the admin port is closed, entry only through the private network."
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
