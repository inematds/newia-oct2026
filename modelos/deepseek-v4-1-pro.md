# DeepSeek V4.1 Pro — dossiê

> Estado em 2026-09-15. Rumor: "líder open-source, contexto 1M, agentes muito fortes, cortador de preços". Status: rumor com fonte

## 1. O que é a linhagem (fabricante, posicionamento, 3 frases)

A DeepSeek (DeepSeek-AI, China) é um laboratório que publica modelos de linguagem com pesos abertos, cobrindo a linhagem V2 → V3 → V3.1 → V3.2 → V4 → V4.1, todos disponibilizados via API própria (api-docs.deepseek.com) e/ou Hugging Face/GitHub (github.com/deepseek-ai) ([Change Log | DeepSeek API Docs](https://api-docs.deepseek.com/updates/)). O posicionamento da empresa é ser a alternativa aberta e barata frente a modelos proprietários (OpenAI, Anthropic, Google), historicamente cortando preço de API a cada novo lançamento ([DeepSeek API Pricing (September 2026)](https://benchlm.ai/deepseek/api-pricing)). Em setembro de 2026 a linhagem está em transição de arquitetura: a família V4 introduziu um novo desenho "Causal Encoder-Decoder (CED)" com suporte nativo a multimodalidade, substituindo o antigo MoE denso da V3.x ([DeepSeek V4.1 Flash API Pricing & Specs](https://getdeploying.com/llms/deepseek-v4.1-flash)).

## 2. Versão atual verificada (set/2026)
- Modelo: DeepSeek-V4.1-Flash (model id `deepseek-flash`) — modelo mais recente e oficialmente lançado da linhagem (fonte: [DeepSeek-V4.1-Flash: Smarter, Faster, More Efficient | DeepSeek API Docs](https://api-docs.deepseek.com/news/news260910/))
- Data de lançamento: 10 de setembro de 2026 (fonte: [DeepSeek Launches V4.1-Flash With 1M-token Context - Dataconomy](https://dataconomy.com/2026/09/11/deepseek-v4-1-flash-ultralow-token-pricing/))
- Janela de contexto: 1.048.576 tokens (~1M) (fonte: [DeepSeek V4.1 Flash - API Pricing & Benchmarks | OpenRouter](https://openrouter.ai/deepseek/deepseek-v4.1-flash))
- Parâmetros / arquitetura: 552B parâmetros totais (MoE, arquitetura CED), 8B ativos na entrada e 16B ativos na saída — não verificado se esse split assimétrico está confirmado em fonte primária da DeepSeek, aparece em fontes secundárias (fonte: [DeepSeek V4.1 Flash API Pricing & Specs](https://getdeploying.com/llms/deepseek-v4.1-flash))
- Licença / pesos abertos: não verificado especificamente para V4.1-Flash (não encontrada página de licença oficial no GitHub/HF para esse modelo nesta pesquisa). Para referência histórica da linhagem: DeepSeek-R1 é MIT (código e pesos) e DeepSeek-V3 tem código MIT mas pesos sob licença própria derivada de OpenRAIL (fonte: [GitHub - deepseek-ai/DeepSeek-V3 · License](https://github.com/deepseek-ai/DeepSeek-V3?tab=License-2-ov-file), [DeepSeek-R1/LICENSE](https://github.com/deepseek-ai/DeepSeek-R1/blob/main/LICENSE))
- Preço API: off-peak US$ 0,15/1M input (cache miss) / US$ 0,60/1M output; cache hit US$ 0,003/1M; peak (01:00–04:00 UTC e 06:00–10:00 UTC, seg-sex) o dobro desses valores (fonte: [DeepSeek Launches V4.1-Flash With 1M-token Context - Dataconomy](https://dataconomy.com/2026/09/11/deepseek-v4-1-flash-ultralow-token-pricing/))
- Benchmarks: não coletados números específicos de SWE-bench/GPQA para o V4.1-Flash nesta pesquisa — `não verificado`. Para a versão anterior da família V3.x (DeepSeek-V3.2), há dados verificados: GPQA Diamond 82,4 e SWE-bench Verified 77,2 (Resolved) (fonte: [DeepSeek-V3.2: Pushing the Frontier of Open Large Language Models](https://arxiv.org/pdf/2512.02556))
- Multimodalidade / recursos-chave: primeiro modelo "Flash" com entendimento visual multimodal nativo, modos thinking/non-thinking, tool calling, saída JSON, prompt caching, até 384K tokens de saída máxima (fonte: [DeepSeek V4.1 Flash API Pricing & Specs](https://getdeploying.com/llms/deepseek-v4.1-flash))

## 3. Linha do tempo de versões (mais antiga → mais nova, 3 a 6 itens)

| Versão | Data | Contexto | Parâmetros | Preço input/output (US$/1M) | Destaque | Fonte |
|---|---|---|---|---|---|---|
| DeepSeek-V3.1 | 2025-08-19 (ou 21/08 conforme fonte) | 128K tokens | 671B total / 37B ativos | não verificado | Dobrou contexto de 64K para 128K; licença MIT | [DeepSeek-V3.1 Release](https://api-docs.deepseek.com/news/news250821/), [aibase](https://www.aibase.com/news/20630) |
| DeepSeek-V3.2-Exp | 2025-09-29 | não verificado (mesma faixa de V3.1) | não verificado | não verificado | Nova atenção esparsa para long-context mais barato; GPQA Diamond ~79,9, SWE-bench ~67,8% | [Introducing DeepSeek-V3.2-Exp](https://api-docs.deepseek.com/news/news250929/) |
| DeepSeek-V3.2 | 2025-12-01 | não verificado | não verificado | não verificado | Thinking integrado a tool-use; ouro em IMO/IOI 2025; GPQA Diamond 82,4, SWE-bench Verified 77,2 | [DeepSeek-V3.2 Release](https://api-docs.deepseek.com/news/news251201/), [arxiv 2512.02556](https://arxiv.org/pdf/2512.02556) |
| DeepSeek-V4 (Preview) | 2026-04-24 | não verificado | ~1T total / ~37B ativos (segundo leaks, não oficial) | não verificado | Primeira prévia pública da nova arquitetura V4 | [DeepSeek V4 Preview Release](https://api-docs.deepseek.com/news/news260424/) |
| DeepSeek-V4-Flash-Vision-Exp | 2026-08-21 | não verificado | não verificado | não verificado | API multimodal experimental | [Release](https://api-docs.deepseek.com/news/news260821/) |
| DeepSeek-V4.1-Flash | 2026-09-10 | 1.048.576 tokens | 552B total / 8B(in)-16B(out) ativos | 0,15 / 0,60 (off-peak, cache miss) | Substituiu o V4-Pro no roteamento de tráfego da API; primeiro Flash com visão nativa | [DeepSeek-V4.1-Flash Release](https://api-docs.deepseek.com/news/news260910/), [Dataconomy](https://dataconomy.com/2026/09/11/deepseek-v4-1-flash-ultralow-token-pricing/) |

## 4. O rumor: o que se sabe

- [DeepSeek V4.1 Pro Is in the Works — What We Know So Far (OrcaRouter)](https://www.orcarouter.ai/blog/deepseek-v4-1-pro-leak) — segundo os resumos de busca coletados, o artigo afirma que "V4.1 Pro" não está listado, não tem benchmark nem preço publicado, e não aparece em nenhuma página oficial de modelos até a data da pesquisa.
- [DeepSeek launches V4.1-Flash and retires V4-Pro (TheNextWeb)](https://thenextweb.com/news/deepseek-v4-1-flash-launch-v4-pro-retired-price-cut) — cita que, em 9 de setembro de 2026, um membro da equipe técnica da DeepSeek (nome citado nas buscas: Tianyi Cui) declarou publicamente, em um aviso sobre o tráfego do V4-Pro, que as requisições de API para o DeepSeek V4-Pro seriam redirecionadas para o V4.1-Flash e cobradas na tarifa mais barata do Flash, "até que o DeepSeek V4.1 Pro em si entre no ar" — sem data de lançamento anunciada.
- [DeepSeek V4.1 Flash: Price, Specs, and the Rumor Scorecard (CellCog)](https://cellcog.ai/blog/deepseek-v4-1-flash-release-date/) — trata o V4.1 Pro como item de rumor/expectativa ainda não confirmado, no contexto do lançamento oficial do V4.1 Flash.

Cada afirmação do rumor descrito no briefing do usuário, marcada:
- "líder open-source" — verificável? não, por enquanto. Não há benchmark publicado para o V4.1 Pro; a alegação de liderança não pode ser checada contra nenhum leaderboard (LMArena, Artificial Analysis, SWE-bench) nesta pesquisa.
- "contexto 1M" — verificável? parcialmente. O V4.1 Flash (lançado, não o Pro) já tem 1.048.576 tokens confirmados (fonte acima); é plausível que o Pro herde a mesma janela, mas isso é extrapolação, não confirmação — `não verificado` para o Pro especificamente.
- "agentes muito fortes" — verificável? não. Nenhuma fonte encontrada traz benchmark de agente (ex.: SWE-bench, Terminal-Bench) para um modelo chamado V4.1 Pro.
- "cortador de preços" — verificável? parcialmente, por padrão histórico. A DeepSeek tem histórico de reduzir preço a cada geração (V4.1 Flash já é mais barato e substituiu o V4 Pro no roteamento), então a expectativa é consistente com o padrão da empresa, mas não há tabela de preço publicada para o V4.1 Pro em si — `não verificado`.

## 5. O que muda na prática vs. versão atual (3 bullets, com "se o rumor se confirmar")

- Hoje (V4.1-Flash) já entrega 1M de contexto e visão nativa a US$ 0,15/US$ 0,60 por 1M tokens (off-peak) — se o rumor do V4.1 Pro se confirmar, o ganho esperado seria em capacidade de raciocínio/agente (mais parâmetros ativos ou arquitetura maior), não necessariamente em contexto, que o Flash já cobre.
- O V4-Pro (antigo topo de linha, US$ 0,66/US$ 1,98 off-peak) já está sendo descontinuado e seu tráfego redirecionado para o Flash — se o V4.1 Pro chegar, ele provavelmente reocupa esse espaço de "modelo topo de linha para tarefas difíceis", com preço acima do Flash.
- Para quem depende de benchmarks de agente/coding hoje, a base de comparação sólida ainda é o DeepSeek-V3.2 (SWE-bench Verified 77,2, GPQA 82,4) — se o V4.1 Pro confirmar "agentes muito fortes", isso precisaria superar esses números com fonte própria, o que ainda não existe.

## 6. Utilidade para um criador/educador/dev brasileiro (3 bullets: onde usar, custo, rodar local?, cuidado)

- Onde usar hoje: para agentes/RAG com contexto muito longo e custo baixo, o DeepSeek-V4.1-Flash (já lançado, `deepseek-flash` na API) é a opção madura agora — evitar planejar produto em cima do "V4.1 Pro" enquanto ele for só um nome citado sem data.
- Custo: aproveitar a janela off-peak (01:00–04:00 e 06:00–10:00 UTC, seg-sex são horário de pico com preço em dobro) para baixar custo de lotes grandes de processamento — fora desse horário e fins de semana o preço cai pela metade (fonte: [DeepSeek Launches V4.1-Flash - Dataconomy](https://dataconomy.com/2026/09/11/deepseek-v4-1-flash-ultralow-token-pricing/)).
- Rodar local / cuidado: rodar localmente exige checar a licença específica de pesos de cada modelo antes de redistribuir ou usar comercialmente — a linhagem V3 teve licença de pesos diferente da licença do código (MIT no código, licença própria nos pesos do V3); não assumir que todo modelo novo da DeepSeek é MIT sem checar a licença exata do repositório daquele modelo.

## 7. Fontes (lista de URLs)

- https://api-docs.deepseek.com/updates/
- https://api-docs.deepseek.com/news/news251201/
- https://api-docs.deepseek.com/news/news250929/
- https://api-docs.deepseek.com/news/news250821/
- https://api-docs.deepseek.com/news/news260424/
- https://api-docs.deepseek.com/news/news260821/
- https://api-docs.deepseek.com/news/news260910/
- https://dataconomy.com/2026/09/11/deepseek-v4-1-flash-ultralow-token-pricing/
- https://getdeploying.com/llms/deepseek-v4.1-flash
- https://openrouter.ai/deepseek/deepseek-v4.1-flash
- https://www.orcarouter.ai/blog/deepseek-v4-1-pro-leak
- https://thenextweb.com/news/deepseek-v4-1-flash-launch-v4-pro-retired-price-cut
- https://cellcog.ai/blog/deepseek-v4-1-flash-release-date/
- https://benchlm.ai/deepseek/api-pricing
- https://arxiv.org/pdf/2512.02556
- https://github.com/deepseek-ai/DeepSeek-V3?tab=License-2-ov-file
- https://github.com/deepseek-ai/DeepSeek-R1/blob/main/LICENSE
- https://www.aibase.com/news/20630

## 8. Dados estruturados
```json
{
  "slug": "deepseek-v4-1-pro",
  "rumor_nome": "DeepSeek V4.1 Pro",
  "fabricante": "DeepSeek",
  "status": "rumor-com-fonte",
  "atual": {
    "nome": "DeepSeek-V4.1-Flash",
    "data": "2026-09-10",
    "contexto_tokens": 1048576,
    "params_total_b": 552,
    "params_ativos_b": null,
    "preco_input_1m": 0.15,
    "preco_output_1m": 0.60,
    "swe_bench_verified": null,
    "gpqa_diamond": null,
    "lmarena_elo": null,
    "fonte": "https://api-docs.deepseek.com/news/news260910/"
  },
  "rumor": {
    "contexto_tokens": null,
    "preco_input_1m": null,
    "params_total_b": null,
    "claims": [
      "lider open-source",
      "contexto 1M",
      "agentes muito fortes",
      "cortador de precos"
    ],
    "fonte": "https://thenextweb.com/news/deepseek-v4-1-flash-launch-v4-pro-retired-price-cut"
  },
  "timeline": [
    {"versao": "DeepSeek-V3.1", "data": "2025-08-19", "contexto_tokens": 131072, "params_total_b": 671, "preco_input_1m": null, "preco_output_1m": null},
    {"versao": "DeepSeek-V3.2-Exp", "data": "2025-09-29", "contexto_tokens": null, "params_total_b": null, "preco_input_1m": null, "preco_output_1m": null},
    {"versao": "DeepSeek-V3.2", "data": "2025-12-01", "contexto_tokens": null, "params_total_b": null, "preco_input_1m": null, "preco_output_1m": null},
    {"versao": "DeepSeek-V4 (Preview)", "data": "2026-04-24", "contexto_tokens": null, "params_total_b": null, "preco_input_1m": null, "preco_output_1m": null},
    {"versao": "DeepSeek-V4-Flash-Vision-Exp", "data": "2026-08-21", "contexto_tokens": null, "params_total_b": null, "preco_input_1m": null, "preco_output_1m": null},
    {"versao": "DeepSeek-V4.1-Flash", "data": "2026-09-10", "contexto_tokens": 1048576, "params_total_b": 552, "preco_input_1m": 0.15, "preco_output_1m": 0.60}
  ],
  "aberto": null
}
```
