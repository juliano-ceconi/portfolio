export const LANGS = ['pt-BR', 'en', 'es'] as const;

export type Lang = (typeof LANGS)[number];

export const DEFAULT_LANG: Lang = 'pt-BR';

/**
 * Conteudo por idioma. Idioma ainda sem traducao cai no padrao (pt-BR),
 * entao traducao nova entra de forma aditiva, sem quebrar o build.
 */
export type Localized<T> = Partial<Record<Lang, T>> & { 'pt-BR': T };

export function pick<T>(dict: Localized<T>, lang: Lang): T {
  return dict[lang] ?? dict[DEFAULT_LANG];
}

export function isLang(valor: string): valor is Lang {
  return (LANGS as readonly string[]).includes(valor);
}

/** Valor do atributo `lang` do `<html>`. */
export const htmlLang: Record<Lang, string> = {
  'pt-BR': 'pt-BR',
  en: 'en',
  es: 'es',
};

/** Valor de `og:locale` esperado pelas redes sociais. */
export const ogLocale: Record<Lang, string> = {
  'pt-BR': 'pt_BR',
  en: 'en_US',
  es: 'es_ES',
};

/** Endereco da pagina em cada idioma. O padrao nao recebe prefixo. */
export function pathFor(lang: Lang): string {
  return lang === DEFAULT_LANG ? '/' : `/${lang}/`;
}

/** Rotulo curto mostrado no seletor de idioma. */
export const langCode: Record<Lang, string> = {
  'pt-BR': 'PT',
  en: 'EN',
  es: 'ES',
};

/** Nome do idioma no proprio idioma, lido por leitor de tela. */
export const langName: Record<Lang, string> = {
  'pt-BR': 'Português',
  en: 'English',
  es: 'Español',
};
