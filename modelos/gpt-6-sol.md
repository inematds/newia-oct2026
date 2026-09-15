# GPT-6 Sol — dossiê

> Estado em 2026-09-15. Rumor: disponibilidade ampla, modelo "workhorse" padrão, agentes de longo horizonte e coding. Status: rumor com fonte (mas de baixa confiabilidade — nome "GPT-6 Sol" aparece só em um blog de leaks não-oficial; a OpenAI não confirmou esse nome)

## 1. O que é a linhagem (fabricante, posicionamento, 3 frases)

A linhagem GPT é da OpenAI. Em setembro/2026 ela tem duas gerações vivas simultaneamente: a família GPT-5.x (5.4, 5.5, 5.6 — esta última dividida em três variantes Sol/Terra/Luna) e a nova geração GPT-6, cujo primeiro membro, GPT-6 Astra, foi lançado em 3/set/2026 como "o modelo mais inteligente e alinhado do mundo" (posicionamento oficial da OpenAI) (fonte: https://en.wikipedia.org/wiki/GPT-6). O nome "GPT-6 Sol" citado no rumor deste dossiê NÃO corresponde a um modelo confirmado pela OpenAI: "Sol" é, na verdade, o nome do modelo-carro-chefe (flagship) da família GPT-5.6, lançada em 9/jul/2026, descrito pela própria OpenAI como seu "workhorse" e "melhor modelo de coding até então" (fonte: https://en.wikipedia.org/wiki/GPT-5.6). Um blog de leaks (eyestech.in) especula que a OpenAI vai repetir a taxonomia Astra/Sol/Terra/Luna também na "era GPT-6", com um "GPT-6 Sol" como camada de engenharia de alto throughput — mas isso não tem fonte oficial nem confirmação independente (fonte: https://eyestech.in/gpt-6-sol-benchmarks-astra-latency-trap-leaks/).

## 2. Versão atual verificada (set/2026)
- Modelo: GPT-6 Astra (API: `gpt-6-astra`) — o modelo mais avançado e efetivamente lançado da linhagem GPT em 15/09/2026 (fonte: https://en.wikipedia.org/wiki/GPT-6 ; https://www.orcarouter.ai/blog/gpt-6-astra-successor-leak)
- Data de lançamento: 3 de setembro de 2026 (fonte: https://www.orcarouter.ai/blog/gpt-6-astra-successor-leak)
- Janela de contexto: aproximadamente 1,05 milhão de tokens de entrada / 128.000 tokens de saída (fonte: https://www.orcarouter.ai/blog/gpt-6-astra-successor-leak)
- Preço API: input US$ 10,00/1M, output US$ 50,00/1M (fonte: https://www.orcarouter.ai/blog/gpt-6-astra-successor-leak — cita "list price: $10 / $50 per MTok")
- Benchmarks:
  - Artificial Analysis Intelligence Index: 61 (contra 66 do Claude Fable 5.1) (fonte: https://www.orcarouter.ai/blog/gpt-6-astra-successor-leak)
  - OSWorld 2.0 (uso de computador, "partial credit" reportado pela própria OpenAI): 72,6% (fonte: https://www.orcarouter.ai/blog/gpt-6-astra-successor-leak)
  - SWE-bench Verified, GPQA Diamond, AIME para GPT-6 Astra: não verificado (não encontrado número específico nas fontes consultadas)
- Multimodalidade / recursos-chave: classificação "Critical" na própria escala de risco cibernético da OpenAI (capacidades avançadas de cibersegurança restritas a programas de acesso confiável), foco declarado em autonomia de longo horizonte ("anything you can do on a computer") (fonte: https://www.orcarouter.ai/blog/gpt-6-astra-successor-leak)

### Referência secundária: GPT-5.6 Sol (o "Sol" real, geração anterior)
- Modelo: GPT-5.6 Sol (API: `gpt-5.6-sol`, alias `gpt-5.6`) — flagship da família GPT-5.6 (fonte: https://developers.openai.com/api/docs/models/gpt-5.6-sol)
- Data de lançamento: 9 de julho de 2026 (fonte: https://en.wikipedia.org/wiki/GPT-5.6)
- Janela de contexto: 1.050.000 tokens de entrada / 128.000 tokens de saída (fonte: https://developers.openai.com/api/docs/models/gpt-5.6-sol)
- Preço API: input US$ 4,00/1M (cache US$ 0,40/1M), output US$ 20,00/1M (fonte: https://developers.openai.com/api/docs/models/gpt-5.6-sol)
- Benchmarks: Artificial Analysis Coding Agent Index v1.1, raciocínio máximo: 80 pontos, 2,8 pontos acima do Claude Fable 5 (fonte: https://en.wikipedia.org/wiki/GPT-5.6)
- Multimodalidade / recursos-chave: entrada texto+imagem, saída texto; "modelo de cibersegurança mais forte até então" segundo a OpenAI; agente operacional do ChatGPT Work; 54% mais eficiente em tokens para tarefas de coding, segundo Sam Altman (fonte: https://en.wikipedia.org/wiki/GPT-5.6)

## 3. Linha do tempo de versões (mais antiga → mais nova, 3 a 6 itens)
| Versão | Data | Contexto | Preço input/output (US$/1M) | Destaque | Fonte |
|---|---|---|---|---|---|
| GPT-5.1 | não verificado (descontinuado em mar/2026) | não verificado | não verificado | Retirado do ChatGPT em 11/03/2026, migrado automaticamente para GPT-5.3/5.4 | https://releasebot.io/updates/openai/openai-models |
| GPT-5.4 | não verificado | não verificado | 2,50 (input, comparativo) | Unifica raciocínio, coding e fluxos agênticos num único modelo frontier | https://developers.openai.com/api/docs/models/gpt-5.6-sol |
| GPT-5.5 | 23/04/2026 | não verificado | 5,00 (input, comparativo) | Descrito pela OpenAI como "o modelo mais inteligente e intuitivo até então" | https://en.wikipedia.org/wiki/GPT-5.4 |
| GPT-5.6 (Sol/Terra/Luna) | 09/07/2026 | 1.050.000 (Sol) | 4,00 / 20,00 (Sol) | Introduz a divisão em 3 variantes por custo/desempenho; Sol é o "workhorse" de coding | https://en.wikipedia.org/wiki/GPT-5.6 ; https://developers.openai.com/api/docs/models/gpt-5.6-sol |
| GPT-6 Astra | 03/09/2026 | ~1.050.000 in / 128.000 out | 10,00 / 50,00 | Primeiro modelo da geração GPT-6; foco em autonomia de longo horizonte e uso de computador; classificação de risco cibernético "Critical" | https://www.orcarouter.ai/blog/gpt-6-astra-successor-leak |

## 4. O rumor: o que se sabe
- Fontes que citam algo próximo ao rumor "GPT-6 Sol" (URL + resumo de 1 linha):
  - https://eyestech.in/gpt-6-sol-benchmarks-astra-latency-trap-leaks/ — blog de leaks não-oficial especula que a OpenAI vai repetir a taxonomia de 4 níveis (Astra/Sol/Terra/Luna) também na "era GPT-6", com "GPT-6 Sol" como camada de engenharia de coding de alto throughput; sem fonte primária citada, artigo tem tom especulativo/clickbait.
  - https://www.orcarouter.ai/blog/gpt-6-astra-successor-leak — confirma que existe rumor de um sucessor do GPT-6 Astra (codinomes "Doug" e "Bel", segundo SemiAnalysis e contas anônimas no X), mas NENHUMA dessas fontes usa o nome "Sol" para esse sucessor — "Sol" nessas fontes permanece sendo o nome da variante da geração GPT-5.6, já lançada.
  - Não há fonte pública (oficial ou de imprensa confiável) que confirme um modelo chamado literalmente "GPT-6 Sol" com o significado descrito no rumor do usuário (disponibilidade ampla, workhorse padrão, agentes de longo horizonte e coding).
- Cada afirmação do rumor com marcação:
  - "Modelo chamado GPT-6 Sol existe/será lançado" → verificável? **não** — nenhuma fonte oficial da OpenAI usa esse nome; o único uso é um blog de leaks de baixa credibilidade que mistura a nomenclatura da geração GPT-5.6 com especulação sobre a geração GPT-6.
  - "Disponibilidade ampla" → verificável? **não** — não há data, preço ou anúncio de disponibilidade para um "GPT-6 Sol"; o que existe hoje é GPT-6 Astra, já em API/ChatGPT desde 03/09/2026.
  - "Modelo 'workhorse' padrão" → verificável? **parcialmente, mas para OUTRO modelo** — a descrição "workhorse" pertence, com fonte, ao GPT-5.6 Sol (geração anterior, já lançada em julho/2026), não a um "GPT-6 Sol" (fonte: https://en.wikipedia.org/wiki/GPT-5.6).
  - "Agentes de longo horizonte e coding" → verificável? **parcialmente, mas para o Astra** — a capacidade de agentes de longo horizonte/uso de computador é atributo confirmado do GPT-6 Astra (o modelo real da geração GPT-6 hoje), não de um "GPT-6 Sol" separado (fonte: https://www.orcarouter.ai/blog/gpt-6-astra-successor-leak).

## 5. O que muda na prática vs. versão atual (3 bullets, com "se o rumor se confirmar")
- Se o rumor se confirmar (isto é, se a OpenAI de fato lançar uma variante "GPT-6 Sol" como workhorse abaixo do Astra), o mercado ganharia uma opção de custo mais baixo que o Astra (hoje US$ 10/US$ 50 por 1M) mantendo boa parte da capacidade de coding/agentes — replicando o que já aconteceu entre GPT-5.6 Sol (US$ 4/US$ 20) e uma hipotética "GPT-6 Astra" mais cara.
- Se o rumor se confirmar, o contexto de ~1M tokens e a orientação para tarefas de coding/engenharia (SWE-bench, refatoração, CI) passariam a ser o padrão "de uso diário" da geração GPT-6, deixando o Astra reservado para tarefas de raciocínio máximo (robótica, prova formal, WebGL).
- Enquanto isso não é oficial, a prática recomendada hoje é usar GPT-6 Astra (lançado e documentado) para tarefas que exigem o topo da linha, e GPT-5.6 Sol (também lançado e documentado, mais barato) como o verdadeiro "workhorse" disponível agora — não construir nada em produção sobre um "GPT-6 Sol" que ainda não existe oficialmente.

## 6. Utilidade para um criador/educador/dev brasileiro (3 bullets: onde usar, custo, cuidado)
- **Onde usar:** para coding assistido, agentes de longo horizonte e fluxos de automação (ex.: pipelines de conteúdo, scripts, revisão de código), o modelo hoje disponível e documentado que mais se encaixa na descrição do rumor é o GPT-5.6 Sol (via API `gpt-5.6-sol` ou alias `gpt-5.6`) — não um "GPT-6 Sol" inexistente.
- **Custo:** GPT-5.6 Sol custa US$ 4,00/1M tokens de entrada e US$ 20,00/1M de saída (com cache de entrada a US$ 0,40/1M), bem mais barato que o GPT-6 Astra (US$ 10,00/US$ 50,00 por 1M) — para uso rotineiro de criador/dev, o Sol da geração 5.6 tende a ser a escolha de melhor custo-benefício até que a OpenAI confirme algo oficial para "GPT-6 Sol" (fontes: https://developers.openai.com/api/docs/models/gpt-5.6-sol ; https://www.orcarouter.ai/blog/gpt-6-astra-successor-leak).
- **Cuidado:** não planejar integração ou orçamento em cima do nome "GPT-6 Sol" — é um rumor sem confirmação oficial, misturado com o nome real de um modelo diferente (GPT-5.6 Sol) e com especulação de um blog de baixa credibilidade; a própria OpenAI, em 08/09/2026, mencionou publicamente um sucessor "significativamente mais capaz que o GPT-6 Astra" mas sem nome, preço ou data — qualquer decisão de arquitetura deveria esperar por um identificador de API real antes de comprometer produção (fonte: https://www.orcarouter.ai/blog/gpt-6-astra-successor-leak).

## 7. Fontes (lista de URLs)
- https://en.wikipedia.org/wiki/GPT-6
- https://en.wikipedia.org/wiki/GPT-5.6
- https://en.wikipedia.org/wiki/GPT-5.4
- https://developers.openai.com/api/docs/models/gpt-5.6-sol
- https://www.orcarouter.ai/blog/gpt-6-astra-successor-leak
- https://eyestech.in/gpt-6-sol-benchmarks-astra-latency-trap-leaks/
- https://releasebot.io/updates/openai/openai-models
- https://help.openai.com/en/articles/9624314-model-release-notes

## 8. Dados estruturados
```json
{
  "slug": "gpt-6-sol",
  "rumor_nome": "GPT-6 Sol",
  "fabricante": "OpenAI",
  "status": "rumor-com-fonte",
  "atual": {
    "nome": "GPT-6 Astra",
    "data": "2026-09-03",
    "contexto_tokens": 1050000,
    "preco_input_1m": 10.0,
    "preco_output_1m": 50.0,
    "swe_bench_verified": null,
    "gpqa_diamond": null,
    "lmarena_elo": null,
    "fonte": "https://www.orcarouter.ai/blog/gpt-6-astra-successor-leak"
  },
  "rumor": {
    "contexto_tokens": null,
    "preco_input_1m": null,
    "claims": [
      "modelo chamado 'GPT-6 Sol' existiria como workhorse padrão da geração GPT-6",
      "disponibilidade ampla",
      "foco em agentes de longo horizonte e coding"
    ],
    "fonte": "https://eyestech.in/gpt-6-sol-benchmarks-astra-latency-trap-leaks/"
  },
  "timeline": [
    {"versao": "GPT-5.1", "data": null, "contexto_tokens": null, "preco_input_1m": null, "preco_output_1m": null},
    {"versao": "GPT-5.4", "data": null, "contexto_tokens": null, "preco_input_1m": 2.5, "preco_output_1m": null},
    {"versao": "GPT-5.5", "data": "2026-04-23", "contexto_tokens": null, "preco_input_1m": 5.0, "preco_output_1m": null},
    {"versao": "GPT-5.6 Sol", "data": "2026-07-09", "contexto_tokens": 1050000, "preco_input_1m": 4.0, "preco_output_1m": 20.0},
    {"versao": "GPT-6 Astra", "data": "2026-09-03", "contexto_tokens": 1050000, "preco_input_1m": 10.0, "preco_output_1m": 50.0}
  ],
  "aberto": false
}
```
