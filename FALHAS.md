# Changelog de falhas

| data | o que quebrou | menor correção | prompt \| infra |
|---|---|---|---|
| 2026-09-15 | banner do guia saiu com rodapé `inematds.github.io/.` (script derivou o nome do repo de `--repo .`) e custou uma 2ª geração no Codex | passar caminho absoluto em `--repo` (ou `realpath` dentro de `gerar-banner.sh`) | prompt |
