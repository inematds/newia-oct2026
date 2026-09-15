# Qwen 4.0 — dossiê

> Estado em 2026-09-15. Rumor: próxima geração Tongyi da Alibaba, grande salto em multimodalidade e coding, ecossistema mais amplo. Status: rumor com fonte (arquitetura já pré-anunciada via modelo-preview, sem lançamento oficial do "Qwen4" completo)

## 1. O que é a linhagem (fabricante, posicionamento, 3 frases)

A linhagem Qwen (Tongyi Qianwen) é desenvolvida pelo Qwen Team, da Alibaba Cloud, e cobre desde modelos densos pequenos até flagships MoE de grande porte, com braço aberto (pesos no Hugging Face, licença Apache 2.0 na maioria dos releases) e um braço proprietário via API (linha "Max"), este último fechado. A empresa evoluiu rapidamente em 2026: da série Qwen3 (abril/2025) passou por Qwen3.5 (fevereiro/2026, nativamente multimodal) e chegou a Qwen3.6/3.7/3.8, com a linha "Max" evoluindo em paralelo como modelo proprietário top-tier via Alibaba Cloud Model Studio (ex-DashScope). Em agosto de 2026 a Alibaba lançou o "Qwen3.8-Flash-Next" descrito explicitamente como prévia da arquitetura da próxima geração "Qwen4", mas sem confirmar data nem lançar o Qwen4 completo até 15/09/2026 (fonte: https://technode.com/2026/08/26/alibabas-qwen-to-open-source-qwen3-8-flash-next-previewing-qwen4-architecture/).

## 2. Versão atual verificada (set/2026)
- Modelo: Qwen3.8-Max (proprietário, via API) e Qwen3.8-2.4T-A95B (pesos abertos do flagship, lançados em paralelo) (fonte: https://www.yottalabs.ai/post/qwen-3-8-max-release-date-specs-how-to-access-2026 ; fonte: https://www.developersdigest.tech/blog/qwen-3-8-max-release-2026)
- Data de lançamento: preview em 19/07/2026, disponibilidade geral (GA) em 03/08/2026; pesos abertos do Qwen3.8-2.4T-A95B liberados em 12/08/2026 (fonte: https://www.yottalabs.ai/post/qwen-3-8-benchmarks-what-is-verified-2026 ; fonte: https://www.yottalabs.ai/post/qwen-3-8-max-release-date-specs-how-to-access-2026)
- Janela de contexto: 1.000.000 de tokens (até 128k tokens de saída) (fonte: https://www.yottalabs.ai/post/qwen-3-8-max-release-date-specs-how-to-access-2026)
- Parâmetros / arquitetura (total e ativos, MoE): 2,4 trilhões de parâmetros totais, ~95B ativados por token (fonte: https://www.developersdigest.tech/blog/qwen-3-8-max-release-2026 ; fonte: https://www.yottalabs.ai/post/qwen-3-8-max-release-date-specs-how-to-access-2026)
- Licença / pesos abertos: o Qwen3.8-Max (via API) é proprietário/fechado — pesos não publicados (fonte: https://packetnebula.com/articles/qwen-3-8-max-open-source/). O flagship "companheiro" Qwen3.8-2.4T-A95B teve pesos abertos publicados em 12/08/2026, primeiro release aberto de um flagship classe "Max" da Qwen (fonte: https://www.yottalabs.ai/post/qwen-3-8-benchmarks-what-is-verified-2026) — não verificado qual licença exata (Apache 2.0 ou outra) para esse release específico de pesos abertos.
- Preço API: input US$ 2,00/1M, output US$ 6,00/1M tokens, no Alibaba Cloud Model Studio/QwenCloud (fonte: https://www.yottalabs.ai/post/qwen-3-8-max-release-date-specs-how-to-access-2026 ; fonte: https://neomanex.com/news/qwen3-8-max-pricing-published-2026-08-10). Nota: valores anteriores (Qwen3-Max e Qwen3.7-Max) variam por provedor de revenda — não usados aqui por não serem a fonte primária.
- Benchmarks: GPQA Diamond 92,6 (fonte: WebSearch agregando https://benchlm.ai/models/qwen3-8-max via resultado "Qwen 3.8 Benchmarks: What's Actually Verified So Far" — não verificado em fonte primária qwen.ai, marcar como `não verificado em fonte primária`); SWE-bench Pro 67,7 (mesma fonte, `não verificado em fonte primária`); SWE-bench Verified (Qwen3-Max-Instruct, geração anterior) 69,6 (fonte: https://qwen.ai/blog?id=qwen3-max, conteúdo obtido via busca indexada — página é renderizada em JS e não foi possível confirmar o texto bruto na visita direta, tratar como `não verificado diretamente`); AIME 25: Qwen3-Max-Thinking atinge 100 pontos (fonte: https://qwen.ai/blog?id=qwen3-max-thinking, mesma ressalva de renderização JS — `não verificado diretamente`); LMArena: Qwen3-Max-Instruct (preview) no top-3 do leaderboard de texto (fonte: https://qwen.ai/blog?id=qwen3-max, `não verificado diretamente`, valor Elo numérico = não verificado).
- Multimodalidade / recursos-chave: Qwen3.5 (fev/2026) já introduziu arquitetura nativamente multimodal (texto+visão), com atenção linear híbrida (Gated Delta Networks) + MoE esparso, 397B totais / 17B ativos no maior modelo aberto da série (fonte: WebSearch resultado "Qwen3.5: Towards Native Multimodal Agents" agregando https://qwen.ai/blog?id=qwen3.5 — conteúdo não confirmado em fonte primária por bloqueio de fetch direto, marcar `não verificado diretamente`). Qwen3.8-Max mantém entrada nativa de texto e visão (fonte: https://www.yottalabs.ai/post/qwen-3-8-max-release-date-specs-how-to-access-2026).

## 3. Linha do tempo de versões (mais antiga → mais nova, 3 a 6 itens)

| Versão | Data | Contexto | Parâmetros | Preço input/output (US$/1M) | Destaque | Fonte |
|---|---|---|---|---|---|---|
| Qwen3-235B-A22B | abril/2025 | 32.768 nativo / 131.072 com YaRN | 235B total / 22B ativos (MoE, 128 experts, 8 ativos) | não verificado (release primariamente open-weight) | Primeiro flagship MoE aberto da série Qwen3, Apache 2.0 | https://huggingface.co/Qwen/Qwen3-235B-A22B |
| Qwen3-235B-A22B-Instruct-2507 | 2025 (data exata não verificada) | 262.144 nativo | 235B total / 22B ativos | não verificado | Atualização do modo não-thinking, Apache 2.0 | https://huggingface.co/Qwen/Qwen3-235B-A22B-Instruct-2507 |
| Qwen3-Max / Qwen3-Max-Thinking | data exata não verificada (2025-2026) | não verificado | não verificado (proprietário) | não verificado (varia por revenda) | Topo do LMArena texto (preview), SWE-bench Verified 69,6, AIME 25 = 100 | https://qwen.ai/blog?id=qwen3-max |
| Qwen3.5 (incl. Qwen3.5-397B-A17B e Qwen3.5-Plus) | 15/02/2026 | não verificado | 397B total / 17B ativos (maior variante aberta) | não verificado | Arquitetura nativa multimodal, atenção linear híbrida + MoE esparso | WebSearch: "Qwen3.5: Towards Native Multimodal Agents" (qwen.ai/blog?id=qwen3.5) |
| Qwen3.8-Max (API) + Qwen3.8-2.4T-A95B (pesos abertos) | preview 19/07/2026, GA 03/08/2026, pesos abertos 12/08/2026 | 1.000.000 tokens | 2,4T total / ~95B ativos | US$ 2,00 / US$ 6,00 | Primeiro flagship classe "Max" com pesos abertos | https://www.yottalabs.ai/post/qwen-3-8-max-release-date-specs-how-to-access-2026 ; https://www.developersdigest.tech/blog/qwen-3-8-max-release-2026 |
| Qwen3.8-Flash-Next | 26-27/08/2026 | não verificado | 125B total / 6B ativos (MoE) | não verificado | Prévia oficial da arquitetura "Qwen4", multimodal | https://technode.com/2026/08/26/alibabas-qwen-to-open-source-qwen3-8-flash-next-previewing-qwen4-architecture/ |

## 4. O rumor: o que se sabe

- https://technode.com/2026/08/26/alibabas-qwen-to-open-source-qwen3-8-flash-next-previewing-qwen4-architecture/ — Alibaba abriu o código do "Qwen3.8-Flash-Next", descrito pela própria Qwen como prévia da arquitetura de próxima geração "Qwen4", para a comunidade de devs se preparar; não é o lançamento do Qwen4 em si.
- https://www.kucoin.com/news/flash/alibaba-to-release-qwen-3-8-flash-next-previewing-qwen-4-architecture — mesma notícia (26/08/2026), reforça caráter de "preview arquitetural", não de lançamento.
- https://decrypt.co/376530/alibaba-qwen-3-8-flash-next-preview-qwen-4 — cobertura similar, sem data de lançamento do Qwen4 completo.
- https://www.yottalabs.ai/post/qwen-4-release-date-what-is-known-how-to-prepare-2026 — menciona um leak de 20/07/2026 (atribuído a um canal do YouTube) alegando lançamento em setembro/2026, mas sem documentação nem confirmação da Alibaba; e cita um mercado de previsão (prediction market) dando 44% de chance de lançamento antes de 01/10/2026 e 74% antes de 01/11/2026 — isso é especulação de mercado, não fonte oficial.
- Cada afirmação do rumor:
  - "Qwen4 terá arquitetura MoE com fração bem menor de parâmetros ativos (ex.: 6B ativos em 125B totais, como no Flash-Next)" — verificável? sim, parcialmente — já demonstrado no Qwen3.8-Flash-Next, que é explicitamente chamado de prévia da arquitetura Qwen4 (fonte: technode.com acima). Mas não confirma que o Qwen4 "cheio" (flagship) terá exatamente essas proporções.
  - "Lançamento em setembro/2026" — verificável? não — baseado em leak não documentado sem confirmação oficial da Alibaba (fonte: yottalabs.ai acima).
  - "Grande salto em multimodalidade e coding, ecossistema mais amplo" — verificável? não — não encontrada declaração oficial da Alibaba especificamente atribuída ao "Qwen4" com esses termos; a tendência de "multimodalidade nativa" já apareceu no Qwen3.5 (fev/2026), então é razoável como extrapolação, mas não é uma claim oficial sobre o Qwen4 em si — sem fonte pública direta encontrada.

## 5. O que muda na prática vs. versão atual (3 bullets, com "se o rumor se confirmar")

- Eficiência de inferência: o Qwen3.8-Flash-Next já mostra a Alibaba migrando para MoE com fração ativa bem menor (6B ativos / 125B totais) — se o rumor do Qwen4 se confirmar nessa linha, espera-se custo de API mais baixo e latência menor por token gerado, mantendo capacidade de "modelo grande" (fonte: https://technode.com/2026/08/26/alibabas-qwen-to-open-source-qwen3-8-flash-next-previewing-qwen4-architecture/).
- Multimodalidade nativa: a versão atual (Qwen3.8-Max) já tem entrada de texto+visão; se o rumor do "grande salto em multimodalidade" se confirmar, o Qwen4 deve estender isso a mais modalidades nativas (áudio/vídeo) de forma mais integrada — sem fonte oficial específica sobre isso para o Qwen4, é extrapolação da tendência iniciada no Qwen3.5.
- Pesos abertos: a versão atual já rompeu precedente ao abrir pesos de um flagship "Max" (Qwen3.8-2.4T-A95B, 12/08/2026); se o rumor de "ecossistema mais amplo" se confirmar, é plausível que o Qwen4 continue essa política de abrir ao menos uma variante flagship — mas isso não está confirmado para o Qwen4 especificamente, é inferência a partir do padrão recente.

## 6. Utilidade para um criador/educador/dev brasileiro (3 bullets: onde usar, custo, rodar local?, cuidado)

- Onde usar: via API no Alibaba Cloud Model Studio (Qwen3.8-Max) para tarefas de contexto longo (1M tokens) e coding/agentes — útil para quem já usa Claude/GPT e quer comparar custo-benefício, já que o preço (US$ 2/US$ 6 por 1M) é competitivo frente a modelos frontier ocidentais (fonte: https://www.yottalabs.ai/post/qwen-3-8-max-release-date-specs-how-to-access-2026).
- Custo/rodar local: quem quer rodar localmente (sem custo de API) pode usar os pesos abertos — Qwen3-235B-A22B (Apache 2.0, mais antigo, leve para MoE) ou o mais recente Qwen3.8-2.4T-A95B (pesos abertos desde 12/08/2026), mas este último exige hardware substancial dado o tamanho (2,4T total); nenhuma licença específica desse último release foi verificada nesta pesquisa — checar o card do Hugging Face antes de usar comercialmente (fonte: https://www.yottalabs.ai/post/qwen-3-8-benchmarks-what-is-verified-2026).
- Cuidado: o "Qwen4" ainda não existe como lançamento oficial em 15/09/2026 — qualquer conteúdo educacional ou comercial que prometa "já use o Qwen4" está se referindo, na prática, ao preview arquitetural (Qwen3.8-Flash-Next) ou a especulação de mercado; não confundir isso com um lançamento confirmado.

## 7. Fontes (lista de URLs)

- https://qwen.ai/blog?id=qwen3.5
- https://qwen.ai/blog?id=qwen3-max
- https://qwen.ai/blog?id=qwen3-max-thinking
- https://www.yottalabs.ai/post/qwen-3-8-max-release-date-specs-how-to-access-2026
- https://www.yottalabs.ai/post/qwen-3-8-benchmarks-what-is-verified-2026
- https://www.yottalabs.ai/post/qwen-4-release-date-what-is-known-how-to-prepare-2026
- https://www.developersdigest.tech/blog/qwen-3-8-max-release-2026
- https://neomanex.com/news/qwen3-8-max-pricing-published-2026-08-10
- https://technode.com/2026/08/26/alibabas-qwen-to-open-source-qwen3-8-flash-next-previewing-qwen4-architecture/
- https://www.kucoin.com/news/flash/alibaba-to-release-qwen-3-8-flash-next-previewing-qwen-4-architecture
- https://decrypt.co/376530/alibaba-qwen-3-8-flash-next-preview-qwen-4
- https://packetnebula.com/articles/qwen-3-8-max-open-source/
- https://huggingface.co/Qwen/Qwen3-235B-A22B
- https://huggingface.co/Qwen/Qwen3-235B-A22B-Instruct-2507
- https://benchlm.ai/models/qwen3-8-max

## 8. Dados estruturados
```json
{
  "slug": "qwen-4",
  "rumor_nome": "Qwen 4.0",
  "fabricante": "Alibaba",
  "status": "rumor-com-fonte",
  "atual": {
    "nome": "Qwen3.8-Max",
    "data": "2026-08-03",
    "contexto_tokens": 1000000,
    "params_total_b": 2400,
    "params_ativos_b": 95,
    "preco_input_1m": 2.00,
    "preco_output_1m": 6.00,
    "swe_bench_verified": null,
    "gpqa_diamond": 92.6,
    "lmarena_elo": null,
    "fonte": "https://www.yottalabs.ai/post/qwen-3-8-max-release-date-specs-how-to-access-2026"
  },
  "rumor": {
    "contexto_tokens": null,
    "preco_input_1m": null,
    "params_total_b": 125,
    "claims": [
      "MoE com fração ativa bem menor (ex. 6B ativos), preview via Qwen3.8-Flash-Next",
      "grande salto em multimodalidade e coding",
      "ecossistema mais amplo",
      "lançamento em setembro/2026 (leak não confirmado)"
    ],
    "fonte": "https://technode.com/2026/08/26/alibabas-qwen-to-open-source-qwen3-8-flash-next-previewing-qwen4-architecture/"
  },
  "timeline": [
    {"versao": "Qwen3-235B-A22B", "data": "2025-04-01", "contexto_tokens": 32768, "params_total_b": 235, "preco_input_1m": null, "preco_output_1m": null},
    {"versao": "Qwen3-235B-A22B-Instruct-2507", "data": null, "contexto_tokens": 262144, "params_total_b": 235, "preco_input_1m": null, "preco_output_1m": null},
    {"versao": "Qwen3.5-397B-A17B", "data": "2026-02-15", "contexto_tokens": null, "params_total_b": 397, "preco_input_1m": null, "preco_output_1m": null},
    {"versao": "Qwen3.8-Max", "data": "2026-08-03", "contexto_tokens": 1000000, "params_total_b": 2400, "preco_input_1m": 2.00, "preco_output_1m": 6.00},
    {"versao": "Qwen3.8-Flash-Next", "data": "2026-08-26", "contexto_tokens": null, "params_total_b": 125, "preco_input_1m": null, "preco_output_1m": null}
  ],
  "aberto": false
}
```
