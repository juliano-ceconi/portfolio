"""Captura a home de cada site da vitrine e grava em public/vitrine/<slug>.webp.

Uso (Windows, PowerShell, na raiz do submodulo):
    python scripts/capturar_vitrine.py
    python scripts/capturar_vitrine.py okam votech   # so os slugs listados

Roda fora do build: nao entra no `npm run build` e nao adiciona dependencia ao
package.json. Usa o Chromium do Edge/Chrome ja instalado e o Pillow do Python
local. As imagens geradas sao versionadas; rode de novo so quando um site mudar.
"""

from __future__ import annotations

import re
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

from PIL import Image

RAIZ = Path(__file__).resolve().parent.parent
DADOS = RAIZ / "src" / "data" / "sitesData.ts"
SAIDA = RAIZ / "public" / "vitrine"

# Viewport da captura e largura final do arquivo. 800px cobre o card (~400px)
# em telas 2x sem estourar o peso.
VIEWPORT = (1280, 800)
LARGURA_FINAL = 800
QUALIDADE_WEBP = 78
ESPERA_MS = 12000  # tempo virtual para a SPA renderizar antes do disparo

NAVEGADORES = [
    r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
    r"C:\Program Files\Google\Chrome\Application\chrome.exe",
    r"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe",
]


def achar_navegador() -> str:
    for caminho in NAVEGADORES:
        if Path(caminho).exists():
            return caminho
    raise SystemExit("Nenhum Chromium encontrado (Edge ou Chrome). Instale um dos dois.")


def ler_sites() -> list[tuple[str, str, str]]:
    """Devolve (slug, url, nome) lendo o proprio sitesData.ts, sem lista paralela."""
    texto = DADOS.read_text(encoding="utf-8")
    blocos = re.findall(
        r"name:\s*'([^']+)',.*?url:\s*'([^']+)',\s*slug:\s*'([^']+)',",
        texto,
        re.DOTALL,
    )
    return [(slug, url, nome) for nome, url, slug in blocos]


def capturar(navegador: str, url: str, destino_png: Path) -> None:
    perfil = Path(tempfile.mkdtemp(prefix="vitrine-"))
    try:
        subprocess.run(
            [
                navegador,
                "--headless=new",
                "--disable-gpu",
                "--hide-scrollbars",
                "--no-first-run",
                "--no-default-browser-check",
                f"--user-data-dir={perfil}",
                f"--window-size={VIEWPORT[0]},{VIEWPORT[1]}",
                f"--virtual-time-budget={ESPERA_MS}",
                f"--screenshot={destino_png}",
                url,
            ],
            check=True,
            capture_output=True,
            timeout=180,
        )
    finally:
        shutil.rmtree(perfil, ignore_errors=True)


def converter(origem_png: Path, destino_webp: Path) -> int:
    with Image.open(origem_png) as img:
        img = img.convert("RGB")
        altura = round(img.height * LARGURA_FINAL / img.width)
        img = img.resize((LARGURA_FINAL, altura), Image.LANCZOS)
        img.save(destino_webp, "WEBP", quality=QUALIDADE_WEBP, method=6)
    return destino_webp.stat().st_size


def main() -> int:
    navegador = achar_navegador()
    filtro = set(sys.argv[1:])
    sites = ler_sites()
    if not sites:
        raise SystemExit(f"Nenhum site lido de {DADOS}. O formato do arquivo mudou?")
    if filtro:
        sites = [s for s in sites if s[0] in filtro]

    SAIDA.mkdir(parents=True, exist_ok=True)
    temp = Path(tempfile.mkdtemp(prefix="vitrine-png-"))
    total = 0
    falhas: list[str] = []
    try:
        for slug, url, nome in sites:
            png = temp / f"{slug}.png"
            webp = SAIDA / f"{slug}.webp"
            try:
                capturar(navegador, url, png)
                if not png.exists():
                    raise RuntimeError("navegador nao gerou arquivo")
                peso = converter(png, webp)
            except Exception as erro:  # noqa: BLE001 - relatorio por site
                falhas.append(f"{slug}: {erro}")
                print(f"[FALHA] {slug:16s} {url} -> {erro}")
                continue
            total += peso
            print(f"[ok]    {slug:16s} {peso / 1024:7.1f} KB  {nome}")
    finally:
        shutil.rmtree(temp, ignore_errors=True)

    print(f"\nTotal: {total / 1024:.1f} KB em {SAIDA}")
    if falhas:
        print(f"{len(falhas)} falha(s): sem imagem para " + ", ".join(f.split(':')[0] for f in falhas))
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
