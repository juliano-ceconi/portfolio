"""Confere se as tres versoes de idioma do site dizem a mesma coisa.

Compara o HTML gerado em `dist/` (pt-BR, en, es) em tudo que NAO pode mudar
com o idioma: quantidade de secoes, cartoes e itens de lista, e o conjunto de
enderecos de link e de imagem. Texto em si nao e comparado, claro.

Uso (no cec-note, PowerShell, dentro de 02_Portfolio/portfolio):
    python scripts/conferir_paridade.py
"""

from __future__ import annotations

import re
import sys
from collections import Counter
from pathlib import Path
from urllib.parse import unquote

RAIZ = Path(__file__).resolve().parent.parent
PAGINAS = {
    "pt-BR": RAIZ / "dist" / "index.html",
    "en": RAIZ / "dist" / "en" / "index.html",
    "es": RAIZ / "dist" / "es" / "index.html",
}

# O texto pre-preenchido da mensagem muda de idioma de proposito.
WHATSAPP = re.compile(r"(https://wa\.me/\d+)\?text=.*")


def ler(caminho: Path) -> str:
    if not caminho.exists():
        sys.exit(f"nao encontrei {caminho}; rode `npm run build` antes")
    # O byte nulo que o gerador insere a cada ~16 KB nao interessa aqui.
    return caminho.read_text(encoding="utf-8").replace("\x00", "")


def links(html: str) -> Counter[str]:
    """So os links que o visitante clica; canonical e hreflang mudam de proposito."""
    achados = re.findall(r'<a [^>]*href="(https?://[^"]+|/[^"]*)"', html)
    normalizados = [WHATSAPP.sub(r"\1", unquote(u)) for u in achados]
    return Counter(normalizados)


def imagens(html: str) -> Counter[str]:
    return Counter(re.findall(r'src="([^"]+\.(?:webp|png|jpg|svg))"', html))


def estrutura(html: str) -> dict[str, int]:
    return {
        "secoes": len(re.findall(r"<section", html)),
        "cartoes": len(re.findall(r'class="[^"]*\brounded-lg border bg-card', html)),
        "itens_de_lista": len(re.findall(r"<li", html)),
        "titulos_h2": len(re.findall(r"<h2", html)),
        "titulos_h3": len(re.findall(r"<h3", html)),
        "botoes_de_link": len(re.findall(r"<a ", html)),
    }


def main() -> None:
    dados = {lang: ler(caminho) for lang, caminho in PAGINAS.items()}
    base = "pt-BR"
    problemas: list[str] = []

    for lang, html in dados.items():
        if lang == base:
            continue
        for chave, valor in estrutura(dados[base]).items():
            atual = estrutura(html)[chave]
            if atual != valor:
                problemas.append(f"{lang}: {chave} = {atual}, pt-BR = {valor}")
        for nome, extrair in (("link", links), ("imagem", imagens)):
            faltando = extrair(dados[base]) - extrair(html)
            sobrando = extrair(html) - extrair(dados[base])
            for u in faltando:
                problemas.append(f"{lang}: {nome} presente em pt-BR e ausente aqui: {u}")
            for u in sobrando:
                problemas.append(f"{lang}: {nome} que nao existe em pt-BR: {u}")

    for lang, html in dados.items():
        if "—" in html:
            problemas.append(f"{lang}: travessao encontrado no HTML publicado")

    if problemas:
        print("DIVERGENCIAS:")
        for p in problemas:
            print(" -", p)
        sys.exit(1)

    resumo = estrutura(dados[base])
    print("paridade ok nos 3 idiomas:", ", ".join(f"{k}={v}" for k, v in resumo.items()))
    print("links conferidos:", sum(links(dados[base]).values()))


if __name__ == "__main__":
    main()
