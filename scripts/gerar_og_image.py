"""Gera a imagem de compartilhamento (Open Graph) do portfolio.

Le nome e titulo do proprio `src/data/heroData.ts` para nao manter texto
paralelo que possa divergir do site. Saida: `public/og-image[-idioma].png`, 1200x630,
que e o formato lido por WhatsApp, LinkedIn e X. Uma imagem por idioma.

Uso (no cec-note, PowerShell, dentro de 02_Portfolio/portfolio):
    python scripts/gerar_og_image.py
"""

from __future__ import annotations

import re
import sys
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

RAIZ = Path(__file__).resolve().parent.parent
HERO = RAIZ / "src" / "data" / "heroData.ts"
PUBLICO = RAIZ / "public"
IDIOMAS = ("pt-BR", "en", "es")

LARGURA, ALTURA = 1200, 630
FUNDO = (4, 9, 17)          # --background do tema escuro: hsl(216 63% 4%)
TEXTO = (235, 235, 235)     # --foreground: hsl(0 0% 88%)
APAGADO = (140, 150, 165)
DESTAQUE = (56, 132, 255)

FONTES = {
    "bold": "C:/Windows/Fonts/segoeuib.ttf",
    "regular": "C:/Windows/Fonts/segoeui.ttf",
}


def ler_hero(idioma: str = "pt-BR") -> tuple[str, str]:
    """Extrai `name` e `title` do heroData.ts sem executar TypeScript.

    O arquivo guarda um bloco por idioma (`'pt-BR': { ... }`); a busca comeca
    no bloco pedido para nao pegar o texto do idioma errado.
    """
    fonte = HERO.read_text(encoding="utf-8")
    bloco = re.search(rf"'?{re.escape(idioma)}'?:\s*\{{", fonte)
    if not bloco:
        sys.exit(f"nao encontrei o bloco do idioma {idioma} em {HERO}")
    fonte = fonte[bloco.end() :]
    nome = re.search(r"name:\s*'([^']+)'", fonte)
    titulo = re.search(r"title:\s*'([^']+)'", fonte)
    if not nome or not titulo:
        sys.exit(f"nao encontrei name/title em {HERO}")
    return nome.group(1), titulo.group(1)


def fonte(tipo: str, tamanho: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(FONTES[tipo], tamanho)


def quebrar(texto: str, fnt: ImageFont.FreeTypeFont, limite: int) -> list[str]:
    linhas: list[str] = []
    atual = ""
    for palavra in texto.split():
        teste = f"{atual} {palavra}".strip()
        if fnt.getlength(teste) <= limite:
            atual = teste
        else:
            if atual:
                linhas.append(atual)
            atual = palavra
    if atual:
        linhas.append(atual)
    return linhas


def saida(idioma: str) -> Path:
    """`og-image.png` para o padrao; `og-image-<idioma>.png` para os demais."""
    sufixo = "" if idioma == "pt-BR" else f"-{idioma}"
    return PUBLICO / f"og-image{sufixo}.png"


def gerar(idioma: str) -> None:
    nome, titulo = ler_hero(idioma)
    SAIDA = saida(idioma)

    img = Image.new("RGB", (LARGURA, ALTURA), FUNDO)
    d = ImageDraw.Draw(img)

    margem = 90
    util = LARGURA - 2 * margem

    # Barra de acento a esquerda, mesma cor de acao do site.
    d.rectangle([0, 0, 12, ALTURA], fill=DESTAQUE)

    y = 150
    f_nome = fonte("bold", 82)
    d.text((margem, y), nome, font=f_nome, fill=TEXTO)
    y += 118

    f_titulo = fonte("regular", 42)
    for linha in quebrar(titulo, f_titulo, util):
        d.text((margem, y), linha, font=f_titulo, fill=APAGADO)
        y += 58

    f_rodape = fonte("bold", 30)
    d.text((margem, ALTURA - 110), "julianoceconi.vercel.app", font=f_rodape, fill=DESTAQUE)

    SAIDA.parent.mkdir(parents=True, exist_ok=True)
    img.save(SAIDA, "PNG", optimize=True)
    print(f"{SAIDA.relative_to(RAIZ)}: {LARGURA}x{ALTURA}, {SAIDA.stat().st_size} bytes")


def main() -> None:
    for idioma in IDIOMAS:
        gerar(idioma)


if __name__ == "__main__":
    main()
