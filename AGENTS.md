# Convenções deste portfólio

Site pessoal do Juliano (Astro 4 + React 18 + shadcn/ui, deploy Vercel em
`https://julianoceconi.vercel.app/`). **Este repositório é submódulo git com remoto próprio**:
commit e push acontecem aqui dentro, e só depois o ponteiro é atualizado no meta-repo
`juliano-ceconi`.

Decisões fixadas na trilha `trilha-portfolio-2026` (encerrada em 09/09/2026) e que valem para
qualquer edição futura:

- **O leitor principal é o dono de PME comprando serviço.** Recrutador é secundário, atendido pelos
  blocos de experiência. Texto novo se escreve para quem contrata, não para quem entrevista.
- **Nada de travessão (`—`) em texto público nem em metadado.** Foi feita uma varredura completa
  para remover a marca de texto gerado por IA; reintroduzir um desfaz o trabalho.
- **Ordem da página é intencional:** Hero, vitrine de trabalhos reais, "O que eu faço", experiência.
  Trocar a ordem foi proposto e recusado pelo usuário.
- **Todo caminho do site desemboca no WhatsApp** definido em `src/data/footerData.ts`. Botão de
  contato sem rótulo legível é regressão — o rodapé foi reescrito justamente por isso.
- Capturas da vitrine são geradas por `scripts/capturar_vitrine.py` e versionadas em WebP sob
  `public/vitrine/`.

Verificação de pronto: `npm run build` limpo e, depois do push, HTTP 200 na URL de produção com o
conteúdo novo presente. Não subir servidor de desenvolvimento como substituto da validação em
produção.
