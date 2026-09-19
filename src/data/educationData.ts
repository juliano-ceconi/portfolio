import type { Localized } from '@/i18n';

export type Education = {
  institution: string;
  period: string;
  description: string[];
};

export const education: Localized<Education[]> = {
  'pt-BR': [
    {
      institution: "Alura",
      period: "(Período: Maio de 2024 - Março de 2025)",
      description: [
        "Formação focada em automação e desenvolvimento de negócios. Principais habilidades adquiridas:",
        "Programação: JavaScript, Git/GitHub, Python.",
        "Excel Avançado & VBA: BI Financeiro, automação, macros.",
        "Ciência de Dados & RPA: Análise de Dados (Google Sheets), Power BI, ferramentas No/Low Code RPA.",
        "Integração com IA: ChatGPT com Excel & Google Apps Script para automação."
      ]
    },
    {
      institution: "UTFPR",
      period: "(Período: agosto de 2010 - junho de 2015)",
      description: [
        "Engenharia Civil, incompleto. Matérias concluídas em destaque: cálculo diferencial e integral I, II e III, física I, II e III, química, fundamentos de programação, metodologia científica, probabilidade e estatística, topografia, desenho técnico, projeto arquitetônico, geometria analítica e álgebra linear."
      ]
    }
  ],
  en: [
    {
      institution: "Alura",
      period: "(Period: May 2024 - March 2025)",
      description: [
        "Program focused on automation and business development. Main skills acquired:",
        "Programming: JavaScript, Git/GitHub, Python.",
        "Advanced Excel & VBA: financial BI, automation, macros.",
        "Data Science & RPA: data analysis (Google Sheets), Power BI, no-code and low-code RPA tools.",
        "AI integration: ChatGPT with Excel & Google Apps Script for automation."
      ]
    },
    {
      institution: "UTFPR",
      period: "(Period: August 2010 - June 2015)",
      description: [
        "Civil Engineering, unfinished. Completed courses worth noting: calculus I, II and III, physics I, II and III, chemistry, programming fundamentals, scientific methodology, probability and statistics, surveying, technical drawing, architectural design, analytic geometry and linear algebra."
      ]
    }
  ],
  es: [
    {
      institution: "Alura",
      period: "(Período: mayo de 2024 - marzo de 2025)",
      description: [
        "Formación centrada en automatización y desarrollo de negocios. Principales habilidades adquiridas:",
        "Programación: JavaScript, Git/GitHub, Python.",
        "Excel avanzado y VBA: BI financiero, automatización, macros.",
        "Ciencia de datos y RPA: análisis de datos (Google Sheets), Power BI, herramientas RPA no-code y low-code.",
        "Integración con IA: ChatGPT con Excel y Google Apps Script para automatización."
      ]
    },
    {
      institution: "UTFPR",
      period: "(Período: agosto de 2010 - junio de 2015)",
      description: [
        "Ingeniería Civil, incompleta. Materias concluidas destacadas: cálculo diferencial e integral I, II y III, física I, II y III, química, fundamentos de programación, metodología científica, probabilidad y estadística, topografía, dibujo técnico, proyecto arquitectónico, geometría analítica y álgebra lineal."
      ]
    }
  ],
};
