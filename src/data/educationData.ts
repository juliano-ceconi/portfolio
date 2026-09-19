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
};
