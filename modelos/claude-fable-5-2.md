# Claude Fable 5.2 — dossiê

> Estado em 2026-09-15. Rumor: "Claude Fable 5.2 — próxima iteração flagship da Anthropic; coding, trabalho de conhecimento, tarefas longas, pesquisa mais forte". Status: rumor com fonte (fonte única, não confirmada por Anthropic)

## 1. O que é a linhagem (fabricante, posicionamento, 3 frases)

Claude é a linha de modelos de linguagem da Anthropic. Desde junho de 2026 a Anthropic reorganizou o catálogo em quatro camadas — Haiku (rápido/barato), Sonnet (equilíbrio custo-desempenho), Opus (agentic coding e trabalho corporativo complexo) e, acima de todas, "Mythos-class" **Fable** (raciocínio exigente e tarefas agenticas de longo horizonte) (fonte: https://docs.claude.com/en/docs/about-claude/models/overview). Fable e Mythos são, segundo a Anthropic, "o mesmo modelo" com níveis diferentes de salvaguardas: Fable é de disponibilidade geral, Mythos só via programas de acesso confiável (fonte: https://www.anthropic.com/claude-fable-and-mythos-5-1). O nome "Fable 5.2" citado no pedido não corresponde a nenhum lançamento oficial encontrado até 2026-09-15 — é um rumor de fonte única no X (Twitter).

## 2. Versão atual verificada (set/2026)
- Modelo: Claude Fable 5.1 (API ID `claude-fable-5-1`) — (fonte: https://www.anthropic.com/claude-fable-and-mythos-5-1)
- Data de lançamento: 2026-09-01 (fonte: https://cellcog.ai/blog/fable-5-2-release-date/, que cita o anúncio oficial da Anthropic; a página oficial https://www.anthropic.com/claude-fable-and-mythos-5-1 não expõe a data em texto simples no conteúdo indexado — usar a data com essa ressalva)
- Janela de contexto: 1.000.000 tokens (fonte: https://docs.claude.com/en/docs/about-claude/models/overview — tabela de comparação, linha "Context"; mesmo valor de Opus 5 e Sonnet 5)
- Preço API: input US$ 10,00 / 1M tokens, output US$ 50,00 / 1M tokens (fonte: https://www.anthropic.com/claude-fable-and-mythos-5-1 e confirmado na tabela comparativa https://docs.claude.com/en/docs/about-claude/models/overview). Cache reads: US$ 0,25 / 1M tokens (fonte: https://www.anthropic.com/claude-fable-and-mythos-5-1)
- Benchmarks: a Anthropic publica os resultados de Fable 5.1 vs. Fable 5, Opus 5 e GPT-5.6 Sol apenas como **imagem** (gráfico/tabela) em https://www.anthropic.com/claude/fable — os valores numéricos exatos de SWE-bench Verified, GPQA Diamond e AIME não puderam ser extraídos como texto nesta sessão; portanto: `não verificado`. Um valor textual capturado (não da Fable 5.1, mas de Fable 5 e Opus 5 antecessores, citado pela própria Anthropic como nota de rodapé do benchmark Terminal-Bench-Science 0.1): "Claude Opus 5 at 30.0% and Claude Fable 5 at 21.4%" no leaderboard público (3 trials/task, harness Claude Code) (fonte: https://www.anthropic.com/claude/fable)
- Multimodalidade / recursos-chave: entende diagramas, gráficos e tabelas em arquivos/PDFs; usa visão para autoavaliar seu próprio código gerado contra o design/objetivo original (fonte: https://www.anthropic.com/claude/fable). Suporta texto e imagem como entrada, saída em texto, multilíngue, uso de ferramentas (fonte: https://docs.claude.com/en/docs/about-claude/models/overview)

## 3. Linha do tempo de versões (mais antiga → mais nova, 3 a 6 itens)
| Versão | Data | Contexto | Preço input/output (US$/1M) | Destaque | Fonte |
|---|---|---|---|---|---|
| Claude Fable 5 / Mythos 5 | 2026-06-09 | não verificado | não verificado | Primeiro lançamento público da classe "Mythos" (Fable) | https://www.anthropic.com/news/claude-fable-5-mythos-5 |
| Claude Sonnet 5 | 2026-06-30 | não verificado | 2 / 10 | Desempenho próximo do Opus 4.8 a preço menor | https://www.anthropic.com/news/claude-sonnet-5 |
| Claude Opus 5 | 2026-07-24 | não verificado | 5 / 25 | Foco em agentic coding e trabalho corporativo complexo | https://docs.claude.com/en/docs/about-claude/models/overview |
| Claude Haiku 4.5 | não verificado | não verificado | 1 / 5 | Modelo mais rápido com inteligência quase-frontier | https://docs.claude.com/en/docs/about-claude/models/overview |
| Claude Fable 5.1 / Mythos 5.1 | 2026-09-01 | não verificado | 10 / 50 | Novo patamar em coding, conhecimento e tarefas longas; cache reads 75% mais barato; Enterprise Frontier Safeguards (EFS) | https://www.anthropic.com/claude-fable-and-mythos-5-1 |
| "Claude Fable 5.2" | não lançado — rumor aponta "fim de setembro ou início de outubro de 2026" | não verificado | não verificado | Rumor de próxima iteração flagship — sem confirmação da Anthropic | https://cellcog.ai/blog/fable-5-2-release-date/ (citando posts de @kimmonismus no X) |

## 4. O rumor: o que se sabe
- Fonte primária do rumor: posts de uma única conta no X, **@kimmonismus** — em 2026-09-05: "Fable 5.2, or whatever it ends up being called" seria "expected very soon"; em 2026-09-08: descreveu um "novo pretraining run" com lançamento planejado para "end of September or early October" (fonte: https://cellcog.ai/blog/fable-5-2-release-date/, que cita e linka os dois posts originais)
- Outras menções no X (contas "Aman" e "Surendar"), sem informação adicional verificável, repetindo a mesma expectativa genérica de "beats Fable 5.1", "melhora coding e agentic workflows" — sem especificidade técnica ou fonte própria (fonte: buscas no X via WebSearch, 2026-09-15; conteúdo é especulação de usuários, não vazamento com evidência)
- Explicitamente, um agregador de rumores (CellCog) afirma: "There is no leaked evaluation sheet, no configuration string, no early-access identifier and no provider-catalog sighting attributed to Fable 5.2 as of September 10, 2026" (fonte: https://cellcog.ai/blog/fable-5-2-release-date/)
- Mercados de previsão citam probabilidades (não são fonte de fato do modelo, apenas de expectativa de mercado): Polymarket precifica o "próximo modelo Fable" em 53% até 31/10/2026 e 87,5% até 31/12/2026 (fonte: https://cellcog.ai/blog/fable-5-2-release-date/, citando https://polymarket.com/event/next-fable-model-5pt2-released-byptptpt)
- Nenhuma fonte oficial Anthropic (docs.anthropic.com, anthropic.com/news, anthropic.com/pricing) menciona "Fable 5.2" nesta data

Marcação de cada afirmação do rumor:
- "Próxima iteração flagship da Anthropic" — verificável? Parcialmente sim (padrão histórico de numeração 5 → 5.1 → 5.2 é consistente com o ciclo já visto de Fable 5 → 5.1), mas a existência do modelo em si não tem confirmação oficial
- "Coding mais forte" — verificável? Não, é extrapolação de tendência (cada geração até agora melhorou coding), sem benchmark leaked
- "Trabalho de conhecimento mais forte" — verificável? Não, mesma razão
- "Tarefas longas / long-horizon melhor" — verificável? Não, nenhuma fonte técnica citada, apenas expectativa qualitativa em posts de rede social
- "Pesquisa mais forte" — verificável? Não, sem fonte primária

## 5. O que muda na prática vs. versão atual (3 bullets, com "se o rumor se confirmar")
- Se o rumor se confirmar, um "Fable 5.2" provavelmente seguiria o padrão de Fable 5 → 5.1 (mesmo tipo de anúncio, possível redução de custo em cache e leve ganho de benchmark) — mas isso é inferência baseada em histórico, não em dado do rumor (fonte do padrão histórico: https://www.anthropic.com/claude-fable-and-mythos-5-1)
- Se o rumor se confirmar com o prazo citado ("fim de setembro/início de outubro de 2026"), o lançamento aconteceria poucas semanas após o Fable 5.1 (01/09/2026), um intervalo bem mais curto que o observado entre Fable 5 (09/06/2026) e Fable 5.1 (01/09/2026) — cerca de 3 meses (fonte das datas: https://www.anthropic.com/news/claude-fable-5-mythos-5 e https://www.anthropic.com/claude-fable-and-mythos-5-1)
- Sem confirmação de preço, contexto ou benchmark do rumor, não é possível dizer o que muda tecnicamente — hoje é só uma expectativa de "melhora geral"

## 6. Utilidade para um criador/educador/dev brasileiro (3 bullets: onde usar, custo, cuidado)
- **Onde usar hoje:** para o modelo confirmado (Fable 5.1), tarefas de raciocínio pesado, revisão/debug de código complexo e trabalho agentic de longo horizonte via Claude API/Claude Code, disponível também via AWS, Google Cloud e Microsoft Foundry (fonte: https://www.anthropic.com/claude-fable-and-mythos-5-1)
- **Custo:** Fable 5.1 é o modelo mais caro do catálogo atual (US$ 10 input / US$ 50 output por milhão de tokens), bem acima de Sonnet 5 (US$ 2/US$ 10) e Opus 5 (US$ 5/US$ 25) — para uso de alto volume, considerar Sonnet 5 ou Opus 5 com "effort" ajustado antes de escalar para Fable (fonte: https://docs.claude.com/en/docs/about-claude/models/overview)
- **Cuidado:** não planejar workflow ou orçamento em cima de "Fable 5.2" — é rumor de fonte única (um perfil no X) sem confirmação da Anthropic; usar apenas a versão 5.1 documentada oficialmente até haver anúncio em anthropic.com/news (fonte: https://cellcog.ai/blog/fable-5-2-release-date/)

## 7. Fontes (lista de URLs)
- https://www.anthropic.com/claude/fable
- https://www.anthropic.com/claude-fable-and-mythos-5-1
- https://www.anthropic.com/news/claude-fable-5-mythos-5
- https://www.anthropic.com/news/claude-sonnet-5
- https://docs.claude.com/en/docs/about-claude/models/overview
- https://www.anthropic.com/pricing
- https://cellcog.ai/blog/fable-5-2-release-date/
- https://www.orcarouter.ai/blog/claude-fable-5-2-leak
- https://x.com/kimmonismus/status/2096259311580119414
- https://x.com/kimmonismus/status/2097357380254138866
- https://x.com/Amank1412/status/2096955965551919365
- https://x.com/Surendar__05/status/2097755960265814118
- https://polymarket.com/event/next-fable-model-5pt2-released-byptptpt
- https://manifold.markets/Bayesian/claude-fable-52-anthropic-release-d

## 8. Dados estruturados
```json
{
  "slug": "claude-fable-5-2",
  "rumor_nome": "Claude Fable 5.2",
  "fabricante": "Anthropic",
  "status": "rumor-com-fonte",
  "atual": {
    "nome": "Claude Fable 5.1",
    "data": "2026-09-01",
    "contexto_tokens": 1000000,
    "preco_input_1m": 10.0,
    "preco_output_1m": 50.0,
    "swe_bench_verified": null,
    "gpqa_diamond": null,
    "lmarena_elo": null,
    "fonte": "https://www.anthropic.com/claude-fable-and-mythos-5-1"
  },
  "rumor": {
    "contexto_tokens": null,
    "preco_input_1m": null,
    "claims": [
      "coding mais forte",
      "trabalho de conhecimento mais forte",
      "tarefas longas / long-horizon melhor",
      "pesquisa mais forte",
      "janela de lançamento: fim de setembro ou início de outubro de 2026 (não confirmado pela Anthropic)"
    ],
    "fonte": "https://cellcog.ai/blog/fable-5-2-release-date/"
  },
  "timeline": [
    {"versao": "Claude Fable 5 / Mythos 5", "data": "2026-06-09", "contexto_tokens": null, "preco_input_1m": null, "preco_output_1m": null},
    {"versao": "Claude Sonnet 5", "data": "2026-06-30", "contexto_tokens": null, "preco_input_1m": 2.0, "preco_output_1m": 10.0},
    {"versao": "Claude Opus 5", "data": "2026-07-24", "contexto_tokens": null, "preco_input_1m": 5.0, "preco_output_1m": 25.0},
    {"versao": "Claude Fable 5.1 / Mythos 5.1", "data": "2026-09-01", "contexto_tokens": null, "preco_input_1m": 10.0, "preco_output_1m": 50.0}
  ],
  "aberto": true
}
```
