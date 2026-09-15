# GLM-5.5 (Z.AI) — dossiê

> Estado em 2026-09-15. Rumor: "GLM-5.5 Zhipu Trillion-Parameter Model Aims to Dethrone the Frontier" — modelo de próxima geração com mais de 1 trilhão de parâmetros, esperado para agosto de 2026 (https://wan27.org/blog/glm-5-5). Status: rumor com fonte (análise de mercado/imprensa, sem confirmação oficial da Zhipu/Z.ai)

## 1. O que é a linhagem (fabricante, posicionamento, 3 frases)

A GLM é a linhagem de modelos de linguagem da Zhipu AI (agora operando sob a marca Z.ai), spin-off da Universidade Tsinghua, focada em modelos de peso aberto competitivos com os líderes fechados (OpenAI, Anthropic, Google). O posicionamento é agressivamente "aberto + agentic coding": os modelos são lançados com pesos publicados no Hugging Face (com variações de licença), preço de API muito abaixo dos concorrentes fechados, e foco forte em tarefas de codificação, uso de ferramentas e workflows agentic de longa duração. Em 2026 a Z.ai tornou-se a primeira empresa de IA chinesa listada publicamente (HKEX, janeiro de 2026), segundo reportagem citada em busca (fonte: https://presenc.ai/research/zhipu-glm-model-lineage-2026 — não verificado em fonte primária).

## 2. Versão atual verificada (set/2026)
- Modelo: GLM-5.3 (fonte: https://docs.z.ai/guides/llm/glm-5.3)
- Data de lançamento: API em 14/08/2026; pesos abertos publicados em 28/08/2026 no Hugging Face após retenção de segurança de duas semanas (fonte: https://techjacksolutions.com/ai-brief/zai-glm-53-open-weights-744b-safety-hold/)
- Janela de contexto: 1.000.000 tokens de entrada, saída máxima de 128.000 tokens (fonte: https://docs.z.ai/guides/llm/glm-5.3)
- Parâmetros / arquitetura: MoE, 753B parâmetros totais, 40B parâmetros ativos (fonte: https://www.layer3labs.io/guides/glm-5-3-explained)
- Licença / pesos abertos: pesos publicados no Hugging Face (`zai-org/GLM-5.3`), porém sob **licença própria da Z.ai** (não é MIT/Apache-2.0) — empresas com mais de US$ 10 bi/ano em receita de "model-as-a-service" precisam passar por revisão de segurança da Z.ai antes de uso comercial. A variante companheira GLM-5.3-Flash (320B) é licenciada em MIT (fonte: https://www.digitalapplied.com/blog/glm-5-3-weights-bespoke-license-not-mit)
- Preço API: input US$ 1,40/1M tokens, output US$ 4,40/1M tokens (input em cache: US$ 0,26/1M) (fonte: https://venturebeat.com/technology/glm-5-3-hits-the-api-at-1-4-4-4-per-million-tokens)
- Benchmarks: Terminal-Bench 3.0: 4,6 → 28,3 (salto vs. GLM-5.2); DeepSWE v1.1: 46,2 → 66,9; Agents' Last Exam: 23,8 → 28,5 (todos vs. GLM-5.2) (fonte: busca agregada citando docs/benchmarks — ver https://benchlm.ai/models/glm-5-3). SWE-bench Verified e GPQA Diamond para GLM-5.3 especificamente: não verificado (não encontrada fonte primária com o número exato nesta pesquisa)
- Multimodalidade / recursos-chave: texto-somente confirmado para GLM-5.3 nesta pesquisa (fonte: busca agregada, https://kingy.ai/blog/glm-5-3-specs-benchmarks-api-how-to-use/); raciocínio (reasoning) obrigatório, com três níveis de esforço selecionáveis (low, high, max — default max) (fonte: https://docs.z.ai/guides/llm/glm-5.3)

## 3. Linha do tempo de versões (mais antiga → mais nova, 3 a 6 itens)

| Versão | Data | Contexto | Parâmetros | Preço input/output (US$/1M) | Destaque | Fonte |
|---|---|---|---|---|---|---|
| GLM-4.5 | jul/2025 | não verificado | não verificado | não verificado | Foco em uso de ferramentas, loops agentic e coding | https://www.layer3labs.io/guides/z-ai-explained |
| GLM-4.6 | 30/09/2025 | 200K (204.800) tokens, saída máx. 16.384/128K conforme fonte | 355B total / 32B ativos (MoE) | 0,43 / 1,75 (OpenRouter) | Licença MIT, ~15% mais eficiente em tokens que o GLM-4.5, #1 modelo doméstico chinês em rankings citados | https://openrouter.ai/z-ai/glm-4.6 ; https://developer.puter.com/tutorials/zai-glm-api-pricing/ |
| GLM-4.7 | dez/2025 | não verificado | não verificado | não verificado | SWE-bench 73,8% (+5,8 p.p. vs. GLM-4.6); Terminal-Bench 2.0: 41% (+16,5 p.p.); lançada variante gratuita GLM-4.7-Flash | busca agregada, sem URL de fonte primária única — não verificado |
| GLM-5 | fev/2026 | não verificado | 744B (citado) | não verificado | Primeiro "GLM-5" propriamente dito; Z.ai torna-se companhia listada (HKEX) segundo fonte agregada | https://github.com/zai-org/GLM-5 ; https://presenc.ai/research/zhipu-glm-model-lineage-2026 (não verificado em fonte primária) |
| GLM-5.1 | 08/04/2026 (open-source; disponível a assinantes desde fim de mar/2026) | não verificado | não verificado | não verificado | "Towards Long-Horizon Tasks" | https://z.ai/blog/glm-5.1 |
| GLM-5.2 | 16/06/2026 | 1.000.000 tokens (citado) | 753B total (citado) | não verificado nesta pesquisa | "Built for Long-Horizon Tasks", contexto de 1M tokens utilizável em engenharia de projeto | https://z.ai/blog/glm-5.2 ; https://www.morphllm.com/glm-5-2 |
| GLM-5.3 | API 14/08/2026, pesos 28/08/2026 | 1.000.000 tokens (saída máx. 128K) | 753B total / 40B ativos (MoE) | 1,40 / 4,40 | "Frontier Coding with Emergent Cyber Capabilities"; licença própria (não MIT) | https://z.ai/blog/glm-5.3 ; https://docs.z.ai/guides/llm/glm-5.3 ; https://venturebeat.com/technology/glm-5-3-hits-the-api-at-1-4-4-4-per-million-tokens |

## 4. O rumor: o que se sabe

- https://wan27.org/blog/glm-5-5 — "GLM-5.5 Launching August 2026: Zhipu Trillion-Parameter Model Aims to Dethrone the Frontier" — projeta lançamento em agosto/2026 e mais de 1 trilhão de parâmetros.
- https://kie.ai/blog/what-is-glm-5-5 — descreve GLM-5.5 como "próximo modelo de peso aberto de 1T parâmetros" da Zhipu, em tom especulativo.
- https://evolink.ai/blog/glm-5-5-release-date — cobre "data de lançamento, rumores e disponibilidade de API" do GLM-5.5, também especulativo.
- https://baike.baidu.com/en/item/GLM-5.5/2568706 — verbete de wiki chinesa descrevendo GLM-5.5 como "modelo de linguagem de trilhão de parâmetros" da Zhipu AI — fonte agregadora/enciclopédica, não primária.
- Segundo busca agregada, a projeção de mais de 1 trilhão de parâmetros e a janela de agosto/2026 vêm de reportagem da Reuters e da CGTN citando pesquisa do JPMorgan, com a estimativa de parâmetros também replicada pelo veículo chinês AIBase (fonte: resultado de busca agregado — URLs primárias da Reuters/CGTN/JPMorgan não verificadas diretamente nesta pesquisa).
- Não encontrada nenhuma página em docs.z.ai, blog oficial z.ai/blog, GitHub zai-org ou Hugging Face zai-org que mencione "GLM-5.5" como modelo lançado ou anunciado oficialmente. O lançamento real mais recente confirmado em fonte primária é o **GLM-5.3** (z.ai/blog/glm-5.3, docs.z.ai/guides/llm/glm-5.3).
- Uma fonte cita o fundador Tang Jie (Zhipu) descrevendo um upgrade futuro como "epic plus" em 20/07/2026, mas sem identificá-lo explicitamente como GLM-5.5 (fonte: resultado de busca agregado sobre rumores GLM-5.5 — URL primária da declaração não verificada nesta pesquisa).

Cada afirmação do rumor com marcação:
- "Mais de 1 trilhão de parâmetros" — verificável? Não, hoje. É projeção de analistas (JPMorgan, segundo fontes secundárias), não confirmação da Zhipu/Z.ai.
- "Lançamento em agosto de 2026" — verificável? Não — a data já passou (hoje é 15/09/2026) e o que efetivamente foi lançado em agosto de 2026 foi o **GLM-5.3** (API em 14/08, pesos em 28/08), não um "GLM-5.5". Não há evidência de que o rumor se concretizou sob esse nome.
- "Nome oficial será 'GLM-5.5'" — verificável? Não — nenhuma fonte primária (z.ai, docs.z.ai, GitHub zai-org, Hugging Face zai-org) usa esse nome até a data desta pesquisa.

## 5. O que muda na prática vs. versão atual (3 bullets, com "se o rumor se confirmar")

- Se o rumor se confirmar (>1T parâmetros totais), o GLM-5.5 seria quase o dobro do tamanho do GLM-5.3 (753B totais), provavelmente mantendo a proporção de ativação esparsa (MoE) — mas nenhuma fonte primária confirma a contagem de parâmetros ativos projetada; não verificado.
- Se o rumor se confirmar quanto a contexto de até 1M de tokens (mesma ordem de grandeza do GLM-5.2/5.3), a mudança prática para o usuário seria menor do que sugere o "salto de geração" — o contexto de 1M já está disponível desde o GLM-5.2 (fonte: https://z.ai/blog/glm-5.2); o ganho real estaria em benchmarks de coding/agentic, não em janela de contexto.
- Dado que a Zhipu adotou estratégia de "rolling release" com pontos incrementais (5.1 → 5.2 → 5.3) em vez de saltos de geração inteira, é plausível — mas não verificado — que o próximo lançamento seja rotulado "GLM-5.4" e não "GLM-5.5", inclusive já circula reportagem (não verificada) que a numeração "5.5" seria apenas especulação de mercado, não roadmap oficial.

## 6. Utilidade para um criador/educador/dev brasileiro (3 bullets: onde usar, custo, rodar local?, cuidado)

- **Onde usar / custo:** hoje, a versão real disponível para uso via API é o GLM-5.3, a US$ 1,40/1M tokens de entrada e US$ 4,40/1M de saída (fonte: https://venturebeat.com/technology/glm-5-3-hits-the-api-at-1-4-4-4-per-million-tokens) — mais caro que o GLM-4.6 (US$ 0,43/US$ 1,75, fonte: https://openrouter.ai/z-ai/glm-4.6), mas ainda abaixo de modelos fechados de ponta ocidentais (comparação de preço absoluto com Claude/GPT: não verificado nesta pesquisa).
- **Rodar local:** os pesos do GLM-5.3 estão no Hugging Face (`zai-org/GLM-5.3`), mas sob licença própria da Z.ai (não MIT) com restrição para empresas de "model-as-a-service" acima de US$ 10 bi/ano de receita — para uso pessoal/educacional isso tende a não se aplicar, mas vale ler os termos antes de redistribuir ou revender acesso (fonte: https://www.digitalapplied.com/blog/glm-5-3-weights-bespoke-license-not-mit). A variante GLM-5.3-Flash (320B) é MIT e mais viável para rodar localmente, embora 320B ainda exija hardware pesado (múltiplas GPUs) segundo fonte agregada (https://kingy.ai/blog/glm-5-3-specs-benchmarks-api-how-to-use/).
- **Cuidado:** o "GLM-5.5" citado em blogs e agregadores (kie.ai, wan27.org, evolink.ai, felloai.com) é especulação de imprensa/analistas — não usar esse nome/nº de parâmetros em material educativo como se fosse fato lançado; hoje (15/09/2026) o modelo real mais avançado publicamente confirmado é o GLM-5.3.

## 7. Fontes (lista de URLs)

- https://docs.z.ai/guides/llm/glm-5.3
- https://z.ai/blog/glm-5.3
- https://z.ai/blog/glm-5.2
- https://z.ai/blog/glm-5.1
- https://z.ai/blog/glm-5
- https://github.com/zai-org/GLM-5
- https://github.com/zai-org/GLM-4.5
- https://huggingface.co/zai-org/GLM-5.3
- https://huggingface.co/zai-org/GLM-5
- https://openrouter.ai/z-ai/glm-4.6
- https://venturebeat.com/technology/glm-5-3-hits-the-api-at-1-4-4-4-per-million-tokens
- https://www.digitalapplied.com/blog/glm-5-3-weights-bespoke-license-not-mit
- https://techjacksolutions.com/ai-brief/zai-glm-53-open-weights-744b-safety-hold/
- https://www.layer3labs.io/guides/glm-5-3-explained
- https://www.morphllm.com/glm-5-2
- https://wan27.org/blog/glm-5-5
- https://kie.ai/blog/what-is-glm-5-5
- https://evolink.ai/blog/glm-5-5-release-date
- https://baike.baidu.com/en/item/GLM-5.5/2568706
- https://developer.puter.com/tutorials/zai-glm-api-pricing/
- https://presenc.ai/research/zhipu-glm-model-lineage-2026

## 8. Dados estruturados
```json
{
  "slug": "glm-5-5",
  "rumor_nome": "GLM-5.5 (Z.AI)",
  "fabricante": "Zhipu/Z.ai",
  "status": "rumor-com-fonte",
  "atual": {
    "nome": "GLM-5.3",
    "data": "2026-08-14",
    "contexto_tokens": 1000000,
    "params_total_b": 753,
    "params_ativos_b": 40,
    "preco_input_1m": 1.40,
    "preco_output_1m": 4.40,
    "swe_bench_verified": null,
    "gpqa_diamond": null,
    "lmarena_elo": null,
    "fonte": "https://docs.z.ai/guides/llm/glm-5.3"
  },
  "rumor": {
    "contexto_tokens": null,
    "preco_input_1m": null,
    "params_total_b": 1000,
    "claims": [
      "mais de 1 trilhão de parâmetros totais",
      "lançamento previsto para agosto de 2026",
      "nome oficial seria GLM-5.5"
    ],
    "fonte": "https://wan27.org/blog/glm-5-5"
  },
  "timeline": [
    {"versao": "GLM-4.5", "data": "2025-07-01", "contexto_tokens": null, "params_total_b": null, "preco_input_1m": null, "preco_output_1m": null},
    {"versao": "GLM-4.6", "data": "2025-09-30", "contexto_tokens": 204800, "params_total_b": 355, "preco_input_1m": 0.43, "preco_output_1m": 1.75},
    {"versao": "GLM-4.7", "data": "2025-12-01", "contexto_tokens": null, "params_total_b": null, "preco_input_1m": null, "preco_output_1m": null},
    {"versao": "GLM-5", "data": "2026-02-01", "contexto_tokens": null, "params_total_b": 744, "preco_input_1m": null, "preco_output_1m": null},
    {"versao": "GLM-5.1", "data": "2026-04-08", "contexto_tokens": null, "params_total_b": null, "preco_input_1m": null, "preco_output_1m": null},
    {"versao": "GLM-5.2", "data": "2026-06-16", "contexto_tokens": 1000000, "params_total_b": 753, "preco_input_1m": null, "preco_output_1m": null},
    {"versao": "GLM-5.3", "data": "2026-08-14", "contexto_tokens": 1000000, "params_total_b": 753, "preco_input_1m": 1.40, "preco_output_1m": 4.40}
  ],
  "aberto": true
}
```
