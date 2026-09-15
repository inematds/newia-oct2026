# Gemini 4.0 — dossiê

> Estado em 2026-09-15. Rumor: upgrade completo, contexto de 1M tokens, velocidade do Flash com inteligência do Pro. Status: rumor com fonte

## 1. O que é a linhagem (fabricante, posicionamento, 3 frases)

Gemini é a família de modelos de linguagem multimodais do Google DeepMind, sucessora do Gemini 1.5/2.5. A linhagem atual é o "Gemini 3.x", lançada a partir de 18/11/2025 com o Gemini 3 Pro, seguida por uma cadência rápida de modelos "Flash" (3, 3.5, 3.6, 3.7, 3.8) e do "Pro" mais recente, Gemini 3.1 Pro (fonte: https://felloai.com/all-we-know-about-google-gemini-4/). O posicionamento é dividir a linha em Pro (raciocínio/conhecimento amplo), Flash (custo-benefício e velocidade) e Flash-Lite (alto volume/baixo custo), todos ainda em preview na API (fonte: https://ai.google.dev/gemini-api/docs/gemini-3). Um "Gemini 3.5 Pro" prometido por Sundar Pichai para junho/2026 nunca foi lançado, e a Google seguiu iterando os modelos Flash em vez disso (fonte: https://techcrunch.com/2026/07/21/google-releases-three-new-gemini-models-but-no-3-5-pro/).

## 2. Versão atual verificada (set/2026)
- Modelo: `gemini-3.1-pro-preview` (Gemini 3.1 Pro) — modelo "Pro" mais avançado da API hoje (fonte: https://ai.google.dev/gemini-api/docs/gemini-3)
- Data de lançamento: 19/02/2026 (fonte: https://felloai.com/all-we-know-about-google-gemini-4/)
- Janela de contexto: 1.048.576 tokens de entrada / até 64k tokens de saída (fonte: https://ai.google.dev/gemini-api/docs/gemini-3)
- Preço API: input US$ 2,00/1M (prompts até 200k tokens) e US$ 4,00/1M (acima de 200k); output US$ 12,00/1M (até 200k) e US$ 18,00/1M (acima de 200k) (fonte: https://ai.google.dev/gemini-api/docs/gemini-3)
- Benchmarks: GPQA Diamond 94,3% (fonte: https://smartchunks.com/gemini-3-1-pro-benchmarks-gpqa-hle-lmsys-frontiermath/); SWE-bench Verified 80,6% (fonte: https://smartchunks.com/gemini-3-1-pro-benchmarks-gpqa-hle-lmsys-frontiermath/); ranking #1 na LMArena (fonte: https://smartchunks.com/gemini-3-1-pro-benchmarks-gpqa-hle-lmsys-frontiermath/) — valor numérico de Elo não verificado em fonte primária, `não verificado`
- Multimodalidade / recursos-chave: Computer Use (controle de navegador/apps), geração de imagem via Nano Banana Pro/2 (Gemini 3 Pro Image e Gemini 3.1 Flash Image), thinking levels ajustáveis (fonte: https://ai.google.dev/gemini-api/docs/gemini-3)

Nota complementar: o modelo Flash mais recente lançado é o Gemini 3.8 Flash, em 02/09/2026, com contexto de 1M tokens/64k de saída e preço introdutório de US$ 0,75/1M input e US$ 3,75/1M output (válido até 31/12/2026, subindo para US$ 1,50/US$ 7,50 em 01/01/2027) (fonte: https://ai.google.dev/gemini-api/docs/latest-model e https://www.layer3labs.io/guides/gemini-3-8-flash-pricing).

## 3. Linha do tempo de versões (mais antiga → mais nova, 3 a 6 itens)
| Versão | Data | Contexto | Preço input/output (US$/1M) | Destaque | Fonte |
|---|---|---|---|---|---|
| Gemini 3 Pro | 18/11/2025 | 1M / 64k | não verificado | Modelo mais inteligente da geração 3, lançamento inicial | https://felloai.com/all-we-know-about-google-gemini-4/ |
| Gemini 3 Flash | 17/12/2025 | 1M / 64k | US$ 0,50 / US$ 3,00 | Novo modelo padrão, raciocínio rápido "nível PhD" | https://ai.google.dev/gemini-api/docs/gemini-3 |
| Gemini 3.1 Pro | 19/02/2026 | 1M / 64k | US$ 2,00 / US$ 12,00 (<200k); US$ 4,00 / US$ 18,00 (>200k) | Raciocínio avançado para tarefas complexas, #1 LMArena | https://ai.google.dev/gemini-api/docs/gemini-3 |
| Gemini 3.5 Flash + Gemini Omni | 19/05/2026 | não verificado | não verificado | Inteligência de fronteira na velocidade do Flash | https://felloai.com/all-we-know-about-google-gemini-4/ |
| Gemini 3.6 Flash | 21/07/2026 | 1M / 64k | US$ 1,50 / US$ 7,50 (depois reduzido para US$ 0,75/US$ 3,75) | Lançado junto com 3.5 Flash-Lite e Flash Cyber | https://felloai.com/all-we-know-about-google-gemini-4/ |
| Gemini 3.8 Flash | 02/09/2026 | 1M / 64k | US$ 0,75 / US$ 3,75 (introdutório até 31/12/2026) | Maior pontuação em todos os benchmarks publicados da linha Flash | https://ai.google.dev/gemini-api/docs/latest-model |

## 4. O rumor: o que se sabe
- https://felloai.com/all-we-know-about-google-gemini-4/ — tabela "Rumor Log" confirma oficialmente que o pré-treinamento do Gemini 4 começou (Google, 21/07/2026, call de resultados do Q2), mas classifica "lançamento no final de 2026" como especulativo e "novo model ID `gemini-4-*` na API" como falso (checado em 02/09/2026)
- https://nokiapoweruser.com/gemini-4-leak-september-launch-evidence/ — argumenta que ir de início de pré-treinamento (fim de julho) a lançamento amplo em setembro seria uma janela incomumente curta, tratando lançamento em setembro como improvável; cita um "leak" de contexto de 1,5 milhão de tokens e checkpoint interno do "Gemini 4 Pro" com lançamento público mirado para outubro — mas sem link para fonte primária/documento verificável
- https://www.timesofai.com/news/gemini-4-leaks-show-google-chasing-frontier-ai-lead/ — repete leaks de contexto ampliado e ganhos em coding, sem fonte primária citada
- https://nokiapoweruser.com/google-gemini-4-pro-first-checkpoint-released-release-date/ — alega "primeiro checkpoint do Gemini 4 Pro" com lançamento em outubro e Flash-Lite/NB2Lite em setembro; artigo de rumor de um único veículo, sem confirmação da Google

Cada afirmação do rumor do usuário ("upgrade completo, contexto de 1M tokens, velocidade do Flash com inteligência do Pro"):
- "Upgrade completo" (nova geração Gemini 4): `verificável? não` — a Google confirmou apenas início de pré-treinamento (fonte: https://felloai.com/all-we-know-about-google-gemini-4/); não há confirmação de lançamento, nome final ou escopo do "upgrade completo".
- "Contexto de 1M tokens": `verificável? não, e contraditório` — isso já é o padrão da geração 3.x atual (1.048.576 tokens, ver seção 2); os leaks sobre Gemini 4 falam em 1,5M+ tokens, não 1M, então a afirmação do rumor citada no prompt não bate com os leaks mais recentes encontrados (fonte: https://nokiapoweruser.com/gemini-4-leak-september-launch-evidence/).
- "Velocidade do Flash com inteligência do Pro": `verificável? não` — essa é exatamente a descrição oficial já usada pela Google para o Gemini 3 Flash ("Pro-level intelligence at the speed and pricing of Flash", fonte: https://ai.google.dev/gemini-api/docs/gemini-3); não há fonte que aplique essa frase especificamente ao Gemini 4 — parece reciclagem do posicionamento de marketing já usado na geração 3, não um claim novo sobre o Gemini 4.

## 5. O que muda na prática vs. versão atual (3 bullets, com "se o rumor se confirmar")
- Se o rumor de contexto de 1,5M+ tokens se confirmar, o Gemini 4 superaria o teto atual de 1.048.576 tokens da geração 3.x — mas a própria geração 3.x já mostra queda de recall em janelas grandes (Gemini 3.6 Flash recupera só 54,0% no GDM-MRCR v2 no limite de 1M, fonte: https://felloai.com/all-we-know-about-google-gemini-4/), então "mais tokens" não garante mais utilidade prática sem dados de recall do Gemini 4.
- Se o rumor de "velocidade do Flash com inteligência do Pro" se confirmar como unificação de linha, isso repetiria — em escala maior — o que a Google já fez ao lançar o Gemini 3 Flash com esse mesmo discurso; o ganho real dependeria de benchmarks publicados (SWE-bench, GPQA) que hoje não existem para o Gemini 4.
- Nenhuma fonte confirma data de lançamento nem preço do Gemini 4: até que a Google publique algo em ai.google.dev/blog.google, qualquer planejamento de custo ou de migração de projeto deve seguir os preços atuais do Gemini 3.1 Pro / 3.8 Flash (seção 2), não os rumores.

## 6. Utilidade para um criador/educador/dev brasileiro (3 bullets: onde usar, custo, cuidado)
- Onde usar: para produção de conteúdo/curso hoje, o par recomendável verificado é Gemini 3.8 Flash (tarefas rápidas, custo baixo, contexto de 1M) e Gemini 3.1 Pro (raciocínio mais pesado, pesquisa, código complexo) — ambos disponíveis via Gemini API/AI Studio (fonte: https://ai.google.dev/gemini-api/docs/gemini-3).
- Custo: o Gemini 3.8 Flash está em preço introdutório (US$ 0,75/US$ 3,75 por 1M tokens) só até 31/12/2026, dobrando depois (US$ 1,50/US$ 7,50) — vale orçar já pensando no reajuste de janeiro/2027 (fonte: https://www.layer3labs.io/guides/gemini-3-8-flash-pricing).
- Cuidado: não planejar nenhum produto ou automação em cima do "Gemini 4" agora — não há model ID, preço ou data confirmados pela Google; todas as fontes com números de contexto/benchmark para o "Gemini 4" são leaks de imprensa especializada, não documentação oficial (fonte: https://felloai.com/all-we-know-about-google-gemini-4/).

## 7. Fontes (lista de URLs)
- https://ai.google.dev/gemini-api/docs/gemini-3
- https://ai.google.dev/gemini-api/docs/pricing
- https://ai.google.dev/gemini-api/docs/latest-model
- https://ai.google.dev/gemini-api/docs/changelog
- https://techcrunch.com/2026/07/21/google-releases-three-new-gemini-models-but-no-3-5-pro/
- https://felloai.com/all-we-know-about-google-gemini-4/
- https://nokiapoweruser.com/gemini-4-leak-september-launch-evidence/
- https://nokiapoweruser.com/google-gemini-4-pro-first-checkpoint-released-release-date/
- https://www.timesofai.com/news/gemini-4-leaks-show-google-chasing-frontier-ai-lead/
- https://smartchunks.com/gemini-3-1-pro-benchmarks-gpqa-hle-lmsys-frontiermath/
- https://www.layer3labs.io/guides/gemini-3-8-flash-pricing

## 8. Dados estruturados
```json
{
  "slug": "gemini-4",
  "rumor_nome": "Gemini 4.0",
  "fabricante": "Google",
  "status": "rumor-com-fonte",
  "atual": {
    "nome": "Gemini 3.1 Pro (gemini-3.1-pro-preview)",
    "data": "2026-02-19",
    "contexto_tokens": 1048576,
    "preco_input_1m": 2.0,
    "preco_output_1m": 12.0,
    "swe_bench_verified": 80.6,
    "gpqa_diamond": 94.3,
    "lmarena_elo": null,
    "fonte": "https://ai.google.dev/gemini-api/docs/gemini-3"
  },
  "rumor": {
    "contexto_tokens": null,
    "preco_input_1m": null,
    "claims": [
      "pré-treinamento do Gemini 4 confirmado pelo Google em 21/07/2026",
      "leak não oficial de contexto de 1.5M+ tokens",
      "leak não oficial de checkpoint interno do Gemini 4 Pro com lançamento em outubro/2026",
      "sem model ID gemini-4-* confirmado na API até 02/09/2026"
    ],
    "fonte": "https://felloai.com/all-we-know-about-google-gemini-4/"
  },
  "timeline": [
    {"versao": "Gemini 3 Pro", "data": "2025-11-18", "contexto_tokens": 1048576, "preco_input_1m": null, "preco_output_1m": null},
    {"versao": "Gemini 3 Flash", "data": "2025-12-17", "contexto_tokens": 1048576, "preco_input_1m": 0.5, "preco_output_1m": 3.0},
    {"versao": "Gemini 3.1 Pro", "data": "2026-02-19", "contexto_tokens": 1048576, "preco_input_1m": 2.0, "preco_output_1m": 12.0},
    {"versao": "Gemini 3.5 Flash + Gemini Omni", "data": "2026-05-19", "contexto_tokens": null, "preco_input_1m": null, "preco_output_1m": null},
    {"versao": "Gemini 3.6 Flash", "data": "2026-07-21", "contexto_tokens": 1048576, "preco_input_1m": 1.5, "preco_output_1m": 7.5},
    {"versao": "Gemini 3.8 Flash", "data": "2026-09-02", "contexto_tokens": 1048576, "preco_input_1m": 0.75, "preco_output_1m": 3.75}
  ],
  "aberto": false
}
```
