# Muse Spark 1.4 — dossiê

> Estado em 2026-09-15. Rumor: novo release do Meta Superintelligence Labs, workflows de agente mais eficientes em tokens, menos recursos em tarefas longas. Status: **rumor sem fonte pública encontrada — na verdade a versão estável verificada é Muse Spark 1.3 (lançada 2026-09-02), não existe "1.4" documentado em nenhuma fonte primária ou secundária confiável até a data deste dossiê.**

## 1. O que é a linhagem (fabricante, posicionamento, 3 frases)

Muse Spark é a família de modelos de linguagem multimodal da Meta, desenvolvida pelo Meta Superintelligence Labs (MSL), a divisão de IA liderada por Alexandr Wang criada após o investimento da Meta na Scale AI (fonte: https://en.wikipedia.org/wiki/Meta_Superintelligence_Labs). É distinta da linhagem Llama (pesos abertos, licença customizada): Muse Spark é proprietária, voltada a raciocínio multimodal, uso de ferramentas/computador e tarefas agenticas de código, servida via Meta AI app, meta.ai e Meta Model API (fonte: https://ai.meta.com/blog/introducing-muse-spark-meta-model-api/). A família Muse também inclui modelos irmãos fora do escopo de "Spark": Muse Image (geração de imagem, fonte: https://about.fb.com/news/2026/07/introducing-muse-image-meta-ai/), Muse Code (agente de codificação em terminal, fonte: https://techcrunch.com/2026/08/05/meta-launches-muse-code-an-ai-agent-for-large-code-bases/), Muse Glimmer (modelo agentic pequeno e de pesos abertos, fonte: https://research.meta.ai/blog/introducing-muse-glimmer-open-agentic-model) e Muse Voice Transcribe (ASR em tempo real, fonte: https://www.marktechpost.com/2026/09/01/meta-superintelligence-labs-releases-muse-voice-transcribe-one-real-time-model-for-streaming-asr-diarization-and-endpointing/).

## 2. Versão atual verificada (set/2026)

- Modelo: Muse Spark 1.3 (fonte: https://en.wikipedia.org/wiki/Muse_Spark — infobox "Stable release: Muse Spark 1.3 / September 2, 2026")
- Data de lançamento: 2026-09-02 (fonte: https://en.wikipedia.org/wiki/Muse_Spark)
- Janela de contexto: não verificado em fonte primária direta (o blog oficial de lançamento — https://research.meta.ai/blog/introducing-muse-spark-1-3 — não divulga o número exato de tokens de contexto). A versão Muse Spark 1.1 (predecessora imediata) foi descrita por cobertura de imprensa como suportando "um milhão de tokens de contexto", mas essa cifra não foi confirmada num documento oficial da Meta consultado nesta pesquisa — tratar como não verificado.
- Parâmetros / arquitetura (total e ativos, se MoE): não verificado — a Meta não divulgou contagem de parâmetros para Muse Spark 1.1/1.2/1.3 nos posts oficiais consultados (https://ai.meta.com/blog/introducing-muse-spark-msl/, https://ai.meta.com/blog/introducing-muse-spark-meta-model-api/, https://research.meta.ai/blog/introducing-muse-spark-1-3). Diferente da linhagem Llama, a Meta não publicou arquitetura/contagem para os modelos Muse Spark.
- Licença / pesos abertos: proprietária, modelo fechado — só acessível via API/produto (fonte: https://en.wikipedia.org/wiki/Muse_Spark, infobox "License: Proprietary - Spark"). O irmão Muse Glimmer é Apache 2.0 (pesos abertos) — fonte: mesma infobox da Wikipedia.
- Preço API: para Muse Spark 1.1 (jul/2026), Meta cobrou US$ 1,25 por 1M tokens de input e US$ 4,25 por 1M tokens de output, segundo declaração do CAIO Alexandr Wang (fonte: https://www.cnbc.com/2026/07/09/meta-jumps-into-ai-coding-market-to-chase-anthropic-and-openai.html). Para Muse Spark 1.3 (set/2026), uma cobertura secundária menciona um preço "blended" de aproximadamente US$ 0,10 por milhão de tokens, sem detalhar a separação input/output nem citar fonte primária Meta — tratar como não verificado com ressalva (fonte da menção: https://local-ai-zone.github.io/blog/September_2026_AI_Model_Updates.html).
- Benchmarks (2 a 4, com valor e fonte): não verificado — o post oficial de lançamento do Muse Spark 1.3 (https://research.meta.ai/blog/introducing-muse-spark-1-3) apresenta exemplos qualitativos de output em tarefas agenticas (ex.: relatórios, apresentações, edição de áudio) mas não expõe tabela de benchmarks padronizados (SWE-bench, GPQA, AIME, LMArena) nesta pesquisa. Nenhuma fonte consultada trouxe esses números para Muse Spark.
- Multimodalidade / recursos-chave: modelo de raciocínio multimodal nativo com suporte a uso de ferramentas ("tool-use"), cadeia de pensamento visual e orquestração multi-agente; Muse Spark 1.3 foi otimizado para reduzir número de chamadas de ferramenta e uso de tokens em tarefas agenticas longas, e para reportar quando encontra um obstáculo em vez de "alucinar" um resultado (fonte: https://local-ai-zone.github.io/blog/September_2026_AI_Model_Updates.html e https://research.meta.ai/blog/introducing-muse-spark-1-3).

## 3. Linha do tempo de versões (mais antiga → mais nova)

| Versão | Data | Contexto | Parâmetros | Preço input/output (US$/1M) | Destaque | Fonte |
|---|---|---|---|---|---|---|
| Muse Spark (original) | 2026-04-08 | não verificado | não verificado | acesso restrito, sem API pública ("private API preview") | Primeiro modelo do MSL sob Alexandr Wang, anunciado por Mark Zuckerberg | https://about.fb.com/news/2026/04/introducing-muse-spark-meta-superintelligence-labs/ ; https://www.cnbc.com/2026/04/08/meta-debuts-first-major-ai-model-since-14-billion-deal-to-bring-in-alexandr-wang.html |
| Muse Spark 1.1 | 2026-07-09 | não verificado (imprensa cita "1 milhão de tokens" sem confirmação oficial direta) | não verificado | $1.25 / $4.25 | Preview público via Meta Model API; ganhos em uso de ferramentas/computador, código e multimodalidade | https://ai.meta.com/blog/introducing-muse-spark-meta-model-api/ ; https://www.cnbc.com/2026/07/09/meta-jumps-into-ai-coding-market-to-chase-anthropic-and-openai.html |
| Muse Spark 1.2 | 2026-08-05 | não verificado | não verificado | não verificado | Lançado junto com Muse Code, agente de codificação em terminal | https://techcrunch.com/2026/08/05/meta-launches-muse-code-an-ai-agent-for-large-code-bases/ |
| Muse Glimmer | 2026-08-10 | não verificado | não verificado | pesos abertos (Apache 2.0), sem preço de API aplicável | Modelo agentic pequeno, roda no dispositivo, pesos abertos | https://research.meta.ai/blog/introducing-muse-glimmer-open-agentic-model ; https://en.wikipedia.org/wiki/Muse_Spark |
| Muse Spark 1.3 | 2026-09-02 | não verificado | não verificado | ~$0,10/1M blended (não verificado, fonte secundária) | Foco em reduzir chamadas de ferramenta/tokens em tarefas agenticas; melhor calibração sobre próprios limites | https://research.meta.ai/blog/introducing-muse-spark-1-3 ; https://en.wikipedia.org/wiki/Muse_Spark ; https://local-ai-zone.github.io/blog/September_2026_AI_Model_Updates.html |
| "Muse Spark 1.4" | inexistente | — | — | — | Nenhuma fonte encontrada — ver seção 4 | sem fonte pública encontrada |

## 4. O rumor: o que se sabe

- Fontes que citam o modelo rumorado (URL + resumo de 1 linha): **sem fonte pública encontrada.** Buscas diretas por `"Muse Spark 1.4"`, `Meta Superintelligence Labs Muse 1.4`, e variações não retornaram nenhum artigo, post oficial, página da Wikipedia, ou changelog mencionando essa versão. A versão estável mais recente confirmada em todas as fontes consultadas (Wikipedia, blog oficial do MSL, imprensa) é Muse Spark 1.3, lançada em 2026-09-02.
- Cada afirmação do rumor com marcação:
  - "Novo release do MSL" — `verificável? não, no momento` — não há anúncio, changelog ou vazamento apontando uma versão 1.4; o padrão de cadência observado (1.1→1.2→1.3 em intervalos de ~4-5 semanas: jul/ago/set 2026) tornaria um "1.4" plausível para outubro/2026, mas isso é inferência de padrão, não confirmação.
  - "Workflows de agente mais eficientes em tokens" — `verificável? parcialmente, mas já é característica descrita da 1.3, não de uma "1.4"` — o próprio Muse Spark 1.3 (lançado 2026-09-02) já foi divulgado com esse exato objetivo ("cutting tool-call counts and token usage in agentic tasks", fonte: https://local-ai-zone.github.io/blog/September_2026_AI_Model_Updates.html). Isso sugere que o rumor sobre "1.4" pode ser uma confusão ou reaproveitamento da descrição real da versão 1.3, e não uma informação nova sobre uma versão futura.
  - "Menos recursos em tarefas longas" — `verificável? não` — nenhuma fonte associa essa frase especificamente a uma versão 1.4; é consistente com o discurso de eficiência já usado para a 1.3.

## 5. O que muda na prática vs. versão atual (3 bullets, com "se o rumor se confirmar")

- Hoje (Muse Spark 1.3, confirmado): já entrega o que o rumor descreve — menos chamadas de ferramenta e menos consumo de tokens em tarefas agenticas longas, com melhor autoavaliação de limites (fonte: https://local-ai-zone.github.io/blog/September_2026_AI_Model_Updates.html). Ou seja, mesmo sem uma "1.4" existir, o ganho de eficiência descrito no rumor já está disponível na versão real e atual.
- Se o rumor se confirmar como uma futura "1.4": a expectativa razoável, seguindo o padrão de cadência mensal da família (abr → jul 1.1 → ago 1.2 → set 1.3), seria um refinamento incremental de eficiência/custo por tarefa, não necessariamente mudança de arquitetura ou parâmetros — já que a Meta não costuma divulgar esses números para o Muse Spark.
- Sem confirmação: para qualquer decisão de produção hoje (15/09/2026), o dev/criador deve planejar em cima da Muse Spark 1.3 real e verificada, não de uma "1.4" hipotética.

## 6. Utilidade para um criador/educador/dev brasileiro (3 bullets: onde usar, custo, rodar local?, cuidado)

- **Onde usar:** Muse Spark serve via Meta AI app / meta.ai e, para devs, via Meta Model API em preview público (fonte: https://ai.meta.com/blog/introducing-muse-spark-meta-model-api/); é fechado e não roda local. Para quem quer rodar localmente ou usar pesos abertos da Meta, a opção é a linhagem Llama 4 (Scout/Maverick, com licença Llama Community License — uso comercial permitido abaixo de 700M usuários mensais ativos, com restrições de "Built with Llama" e proibição de treinar modelos concorrentes, fonte: https://techjacksolutions.com/ai-tools/meta-llama/llama-pricing/) ou o Muse Glimmer, que é Apache 2.0 e projetado para rodar no dispositivo (fonte: https://research.meta.ai/blog/introducing-muse-glimmer-open-agentic-model).
- **Custo:** Muse Spark 1.1 custava US$ 1,25/1M input e US$ 4,25/1M output via Meta Model API (fonte: https://www.cnbc.com/2026/07/09/meta-jumps-into-ai-coding-market-to-chase-anthropic-and-openai.html); já Llama 4 é sensivelmente mais barato via provedores terceiros — Llama 4 Scout no Groq custa US$ 0,11/1M input e US$ 0,34/1M output (fonte: https://www.cloudzero.com/blog/groq-pricing/), e Llama 4 Maverick no DeepInfra custa US$ 0,15/1M input e US$ 0,60/1M output (fonte: https://techjacksolutions.com/ai-tools/meta-llama/llama-pricing/). O acesso à API do Muse Spark além disso ainda está limitado a waitlist/parceiros (fonte: cnbc acima).
- **Cuidado:** não tratar "Muse Spark 1.4" como real em roteiro, aula ou conteúdo publicado — na data deste dossiê (2026-09-15) a versão verificável é a 1.3; qualquer menção a "1.4" deve ser marcada explicitamente como rumor não confirmado, sob risco de disseminar informação falsa sobre uma linhagem de IA real.

## 7. Fontes (lista de URLs)

- https://en.wikipedia.org/wiki/Muse_Spark
- https://en.wikipedia.org/wiki/Meta_Superintelligence_Labs
- https://ai.meta.com/blog/introducing-muse-spark-msl/
- https://ai.meta.com/blog/introducing-muse-spark-meta-model-api/
- https://research.meta.ai/blog/introducing-muse-spark-1-3
- https://research.meta.ai/blog/introducing-muse-glimmer-open-agentic-model
- https://about.fb.com/news/2026/04/introducing-muse-spark-meta-superintelligence-labs/
- https://about.fb.com/news/2026/07/introducing-muse-image-meta-ai/
- https://www.cnbc.com/2026/04/08/meta-debuts-first-major-ai-model-since-14-billion-deal-to-bring-in-alexandr-wang.html
- https://www.cnbc.com/2026/07/09/meta-jumps-into-ai-coding-market-to-chase-anthropic-and-openai.html
- https://www.cnbc.com/2026/07/07/meta-ai-muse-image.html
- https://techcrunch.com/2026/08/05/meta-launches-muse-code-an-ai-agent-for-large-code-bases/
- https://www.marktechpost.com/2026/09/01/meta-superintelligence-labs-releases-muse-voice-transcribe-one-real-time-model-for-streaming-asr-diarization-and-endpointing/
- https://local-ai-zone.github.io/blog/September_2026_AI_Model_Updates.html
- https://ai.meta.com/blog/llama-4-multimodal-intelligence/
- https://artificialanalysis.ai/models/llama-4-scout/providers
- https://www.cloudzero.com/blog/groq-pricing/
- https://techjacksolutions.com/ai-tools/meta-llama/llama-pricing/
- https://fortune.com/2026/07/09/meta-muse-spark-1-1-release-alexandr-wang-superintelligence-labs-mark-zuckerberg/

## 8. Dados estruturados

```json
{
  "slug": "muse-spark-1-4",
  "rumor_nome": "Muse Spark 1.4",
  "fabricante": "Meta",
  "status": "rumor-sem-fonte",
  "atual": {
    "nome": "Muse Spark 1.3",
    "data": "2026-09-02",
    "contexto_tokens": null,
    "params_total_b": null,
    "params_ativos_b": null,
    "preco_input_1m": null,
    "preco_output_1m": null,
    "swe_bench_verified": null,
    "gpqa_diamond": null,
    "lmarena_elo": null,
    "fonte": "https://en.wikipedia.org/wiki/Muse_Spark"
  },
  "rumor": {
    "contexto_tokens": null,
    "preco_input_1m": null,
    "params_total_b": null,
    "claims": [
      "novo release do Meta Superintelligence Labs",
      "workflows de agente mais eficientes em tokens",
      "menos recursos em tarefas longas"
    ],
    "fonte": null
  },
  "timeline": [
    {"versao": "Muse Spark (original)", "data": "2026-04-08", "contexto_tokens": null, "params_total_b": null, "preco_input_1m": null, "preco_output_1m": null},
    {"versao": "Muse Spark 1.1", "data": "2026-07-09", "contexto_tokens": null, "params_total_b": null, "preco_input_1m": 1.25, "preco_output_1m": 4.25},
    {"versao": "Muse Spark 1.2", "data": "2026-08-05", "contexto_tokens": null, "params_total_b": null, "preco_input_1m": null, "preco_output_1m": null},
    {"versao": "Muse Spark 1.3", "data": "2026-09-02", "contexto_tokens": null, "params_total_b": null, "preco_input_1m": null, "preco_output_1m": null}
  ],
  "aberto": false
}
```
