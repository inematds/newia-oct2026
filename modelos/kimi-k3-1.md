# Kimi K3.1 — dossiê

> Estado em 2026-09-15. Rumor: "Kimi K3.1" — post no X de @Mr_Salio em 26/07/2026 alegando uma atualização K3.1 com performance mais próxima de GPT-5.6 e Claude Fable, inferência mais rápida/de menor latência, melhor eficiência de tokens em raciocínio longo, fluxos de coding/agente mais confiáveis, menos passos de raciocínio desperdiçados, vantagem continuada sobre o Claude Opus 5 em algumas tarefas de coding/agente, e lançamento continuado com pesos abertos (fonte: https://www.orcarouter.ai/blog/kimi-k3-1-leak). Status: rumor com fonte (uma única fonte não-oficial, sem corroboração)

## 1. O que é a linhagem (fabricante, posicionamento, 3 frases)

A Kimi é a família de modelos de linguagem da Moonshot AI, empresa chinesa, com foco em contexto longo, raciocínio agente (agentic) e pesos abertos de grande escala (fonte: https://en.wikipedia.org/wiki/Kimi_(chatbot)). A linhagem evoluiu de K1.5 (janeiro/2025) para a série K2 (K2, K2 Thinking, K2.5, K2.6, K2.7 Code, K2.8 Preview) e culminou no K3, lançado em 16/07/2026 como o maior modelo de pesos abertos já lançado, com 2,8 trilhões de parâmetros totais (fonte: https://en.wikipedia.org/wiki/Kimi_(AI)). A Moonshot se posiciona como concorrente direta de OpenAI e Anthropic em benchmarks de ponta, tendo debutado o K3 em 3º lugar no leaderboard da Artificial Analysis, atrás de Claude Fable 5 e GPT-5.6 Sol (fonte: https://en.wikipedia.org/wiki/Kimi_(AI)).

## 2. Versão atual verificada (set/2026)
- Modelo: Kimi K3 (fonte: https://www.kimi.ai/blog/kimi-k3). Nota: há também um "Kimi K2.8 Preview" multimodal lançado em 11/09/2026, com performance "próxima do K3" segundo a Moonshot, rodando dentro do Kimi Code (fonte: https://www.kucoin.com/news/flash/moonshot-kimi-k2-8-preview-model-fully-launched-performance-near-k3). O K3 segue sendo o modelo-flagship confirmado.
- Data de lançamento: 16/07/2026 (anúncio), pesos completos liberados em 27/07/2026 (fonte: https://www.cnbc.com/2026/07/17/moonshot-ai-kimi-k3-model-openai-anthropic-china.html e https://en.wikipedia.org/wiki/Kimi_(AI))
- Janela de contexto: 1.048.576 tokens (1M) (fonte: https://en.wikipedia.org/wiki/Kimi_(AI))
- Parâmetros / arquitetura (MoE): 2,8 trilhões de parâmetros totais, 104 bilhões de parâmetros ativos por token (fonte: https://en.wikipedia.org/wiki/Kimi_(AI))
- Licença / pesos abertos: pesos abertos sob a "Kimi K3 License", uma licença MIT modificada que permite uso comercial livre, modificação, distribuição e fine-tuning; empresas de Model-as-a-Service com receita acima de US$ 20 milhões em 12 meses consecutivos precisam negociar acordo separado com a Moonshot AI (fonte: https://www.codersera.com/blog/kimi-k3-complete-guide-2026/, corroborado por https://en.wikipedia.org/wiki/Kimi_(chatbot))
- Preço API: input US$ 3,00/1M tokens (cache-miss), US$ 0,30/1M em cache-hit; output US$ 15,00/1M tokens (fonte: https://benchlm.ai/moonshot/api-pricing)
- Benchmarks:
  - GPQA Diamond: 93,5% (fonte: https://codersera.com/blog/kimi-k3-benchmarks-comparison-2026/)
  - AIME 2025: 96,1% (fonte: https://codersera.com/blog/kimi-k3-benchmarks-comparison-2026/)
  - Terminal-Bench 2.1: 88,3% (fonte: https://emergent.sh/learn/kimi-k3-benchmark)
  - LMArena Frontend Code Arena: Elo 1.679 (posição #1); LMArena texto geral: Elo 1.486 (fonte: https://codersera.com/blog/kimi-k3-benchmarks-comparison-2026/)
- Multimodalidade / recursos-chave: entrada multimodal (imagem e vídeo), recurso "Swarm" com centenas de sub-agentes para pesquisa profunda (fonte: https://en.wikipedia.org/wiki/Kimi_(AI))

## 3. Linha do tempo de versões (mais antiga → mais nova, 3 a 6 itens)

| Versão | Data | Contexto | Parâmetros | Preço input/output (US$/1M) | Destaque | Fonte |
|---|---|---|---|---|---|---|
| Kimi K2 | jul/2025 | 256K (não verificado o valor exato nesta busca) | 1T total / 32B ativos | não verificado | Primeiro K2, MoE 1T aberto | https://intuitionlabs.ai/articles/kimi-k2-open-weight-llm-analysis |
| Kimi K2 Thinking | não verificado (2025/2026) | 262.144 | 1T total / 32B ativos | US$ 0,60 / US$ 2,50 | Raciocínio agente de longo horizonte, 71,3% SWE-bench Verified | https://openrouter.ai/moonshotai/kimi-k2-thinking |
| Kimi K2.5 | jan/2026 | 256K | 1T total / 32B ativos | US$ 0,60 / US$ 3,00 | Geração intermediária da série K2 | https://openrouter.ai/moonshotai/kimi-k2.5 |
| Kimi K2.6 | 21/04/2026 | 256K | 1T total / 32B ativos (não verificado detalhe exato) | US$ 0,95 / US$ 4,00 | Saiu do rótulo "Preview", GA | https://kimi-k2.org/blog/24-kimi-k2-6-release ; https://benchlm.ai/moonshot/api-pricing |
| Kimi K2.7 Code | 12/06/2026 | 256K | 1T total / 32B ativos (não verificado detalhe exato) | US$ 0,95 / US$ 4,00 | Foco em coding agente, +21,8% no Kimi Code Bench v2 vs K2.6 | https://www.marktechpost.com/2026/06/12/moonshot-ai-releases-kimi-k2-7-code-a-coding-model-reporting-21-8-on-kimi-code-bench-v2-over-k2-6/ |
| Kimi K3 | 16/07/2026 (anúncio) / 27/07/2026 (pesos) | 1.048.576 | 2,8T total / 104B ativos | US$ 3,00 / US$ 15,00 | Maior modelo de pesos abertos já lançado; multimodal; Swarm | https://en.wikipedia.org/wiki/Kimi_(AI) |
| Kimi K2.8 Preview | 11/09/2026 | 1.048.576 (~1,0M) | não verificado | não verificado | Multimodal, performance "próxima" do K3, dentro do Kimi Code | https://www.kucoin.com/news/flash/moonshot-kimi-k2-8-preview-model-fully-launched-performance-near-k3 ; https://llm-stats.com/models/kimi-k2.8 |

## 4. O rumor: o que se sabe

- https://www.orcarouter.ai/blog/kimi-k3-1-leak — resumo: artigo do OrcaRouter (26–27/07/2026) que rastreia um único post no X de @Mr_Salio anunciando "Kimi K3.1 Leak"; o próprio artigo classifica isso como rumor não confirmado e afirma que a Moonshot AI não anunciou nem confirmou oficialmente nenhum "K3.1" até a data de publicação.
- Não há fonte oficial da Moonshot AI (nem platform.moonshot.ai, nem huggingface.co/moonshotai, nem GitHub da Moonshot) mencionando "K3.1" nas buscas realizadas.

Cada afirmação do rumor, com marcação de verificabilidade:
- "Performance mais próxima de GPT-5.6 e Claude Fable" — verificável? não, é uma promessa qualitativa sem benchmark associado no post original (fonte: https://www.orcarouter.ai/blog/kimi-k3-1-leak)
- "Inferência mais rápida / menor latência" — verificável? não, nenhum número de latência citado (fonte: https://www.orcarouter.ai/blog/kimi-k3-1-leak)
- "Melhor eficiência de tokens em raciocínio longo" — verificável? não, sem métrica (fonte: https://www.orcarouter.ai/blog/kimi-k3-1-leak)
- "Coding/agente mais confiáveis, menos passos desperdiçados" — verificável? não, sem benchmark (fonte: https://www.orcarouter.ai/blog/kimi-k3-1-leak)
- "Vantagem continuada sobre Claude Opus 5" — verificável? não, sem dado comparativo (fonte: https://www.orcarouter.ai/blog/kimi-k3-1-leak)
- "Lançamento continuado com pesos abertos" — verificável? não diretamente, mas é consistente com o padrão histórico da Moonshot (K2 e K3 já foram abertos) — plausível por precedente, não confirmado para K3.1
- Contexto, parâmetros, preço e data de lançamento do rumor: `não verificado` — o próprio leak não cita nenhum desses números (fonte: https://www.orcarouter.ai/blog/kimi-k3-1-leak)

## 5. O que muda na prática vs. versão atual (3 bullets, com "se o rumor se confirmar")

- Se o rumor se confirmar, o K3.1 seria uma atualização incremental de eficiência/latência sobre o K3 (2,8T total / 104B ativos, contexto 1M — fonte: https://en.wikipedia.org/wiki/Kimi_(AI)), não uma reescrita de arquitetura — o post citado não menciona mudança de contagem de parâmetros ou de janela de contexto.
- Se o rumor se confirmar, o principal ganho declarado seria em coding/agentes de longo horizonte com "menos passos desperdiçados", o que se alinha à tendência já vista de K2 Thinking → K3 (raciocínio interleaved com uso de ferramentas) — mas sem número comparável hoje.
- Na prática, o K2.8 Preview (11/09/2026, confirmado) já ocupa o espaço que um "K3.1" ocuparia — é uma atualização real, multimodal, com desempenho "próximo do K3" dentro do Kimi Code — então o rumor K3.1 pode estar confundindo ou antecipando esse lançamento real (fonte: https://www.kucoin.com/news/flash/moonshot-kimi-k2-8-preview-model-fully-launched-performance-near-k3).

## 6. Utilidade para um criador/educador/dev brasileiro (3 bullets: onde usar, custo, rodar local?, cuidado)

- Onde usar: Kimi K3 é forte em coding agente e documentos/contexto muito longos (1M tokens) — útil para revisar bases de código grandes, contratos extensos ou pesquisa com muitas fontes; acesso via API oficial (api.moonshot.ai) ou revendedores como OpenRouter.
- Custo: input US$ 3,00/1M e output US$ 15,00/1M tokens no K3 (fonte: https://benchlm.ai/moonshot/api-pricing) — mais caro que as variantes K2.x (K2.5 a US$ 0,60/US$ 3,00, K2.6/K2.7 a US$ 0,95/US$ 4,00 — mesma fonte); para uso de alto volume, vale comparar custo-benefício com K2.7 Code, que é mais barato e focado em coding.
- Rodar local / cuidado: pesos abertos sob "Kimi K3 License" (MIT modificada) permitem self-host, mas 2,8T de parâmetros totais exige infraestrutura de GPU de classe empresarial — inviável em hardware doméstico; empresas com receita acima de US$ 20 milhões/ano que ofereçam o modelo como serviço a terceiros precisam de acordo comercial separado com a Moonshot (fonte: https://www.codersera.com/blog/kimi-k3-complete-guide-2026/). Cuidado: há acusações não confirmadas de que o K3 teria sido destilado do Claude Fable, segundo autoridades dos EUA — tratar como controvérsia em aberto, não fato (fonte: https://en.wikipedia.org/wiki/Kimi_(AI)).

## 7. Fontes (lista de URLs)

- https://en.wikipedia.org/wiki/Kimi_(AI)
- https://en.wikipedia.org/wiki/Kimi_(chatbot)
- https://www.cnbc.com/2026/07/17/moonshot-ai-kimi-k3-model-openai-anthropic-china.html
- https://www.orcarouter.ai/blog/kimi-k3-1-leak
- https://openrouter.ai/moonshotai/kimi-k2-thinking
- https://openrouter.ai/moonshotai/kimi-k2.5
- https://benchlm.ai/moonshot/api-pricing
- https://codersera.com/blog/kimi-k3-benchmarks-comparison-2026/
- https://emergent.sh/learn/kimi-k3-benchmark
- https://www.codersera.com/blog/kimi-k3-complete-guide-2026/
- https://kimi-k2.org/blog/24-kimi-k2-6-release
- https://www.marktechpost.com/2026/06/12/moonshot-ai-releases-kimi-k2-7-code-a-coding-model-reporting-21-8-on-kimi-code-bench-v2-over-k2-6/
- https://www.kucoin.com/news/flash/moonshot-kimi-k2-8-preview-model-fully-launched-performance-near-k3
- https://llm-stats.com/models/kimi-k2.8
- https://intuitionlabs.ai/articles/kimi-k2-open-weight-llm-analysis
- https://www.kimi.ai/blog/kimi-k3

## 8. Dados estruturados
```json
{
  "slug": "kimi-k3-1",
  "rumor_nome": "Kimi K3.1",
  "fabricante": "Moonshot AI",
  "status": "rumor-com-fonte",
  "atual": {
    "nome": "Kimi K3",
    "data": "2026-07-16",
    "contexto_tokens": 1048576,
    "params_total_b": 2800,
    "params_ativos_b": 104,
    "preco_input_1m": 3.0,
    "preco_output_1m": 15.0,
    "swe_bench_verified": null,
    "gpqa_diamond": 93.5,
    "lmarena_elo": 1486,
    "fonte": "https://en.wikipedia.org/wiki/Kimi_(AI)"
  },
  "rumor": {
    "contexto_tokens": null,
    "preco_input_1m": null,
    "params_total_b": null,
    "claims": [
      "performance mais próxima de GPT-5.6 e Claude Fable",
      "inferência mais rápida / menor latência",
      "melhor eficiência de tokens em raciocínio longo",
      "fluxos de coding/agente mais confiáveis, menos passos desperdiçados",
      "vantagem continuada sobre Claude Opus 5 em algumas tarefas de coding/agente",
      "lançamento continuado com pesos abertos"
    ],
    "fonte": "https://www.orcarouter.ai/blog/kimi-k3-1-leak"
  },
  "timeline": [
    {"versao": "Kimi K2", "data": "2025-07-01", "contexto_tokens": null, "params_total_b": 1000, "preco_input_1m": null, "preco_output_1m": null},
    {"versao": "Kimi K2 Thinking", "data": null, "contexto_tokens": 262144, "params_total_b": 1000, "preco_input_1m": 0.60, "preco_output_1m": 2.50},
    {"versao": "Kimi K2.5", "data": "2026-01-01", "contexto_tokens": 262144, "params_total_b": 1000, "preco_input_1m": 0.60, "preco_output_1m": 3.00},
    {"versao": "Kimi K2.6", "data": "2026-04-21", "contexto_tokens": 262144, "params_total_b": 1000, "preco_input_1m": 0.95, "preco_output_1m": 4.00},
    {"versao": "Kimi K2.7 Code", "data": "2026-06-12", "contexto_tokens": 262144, "params_total_b": 1000, "preco_input_1m": 0.95, "preco_output_1m": 4.00},
    {"versao": "Kimi K3", "data": "2026-07-16", "contexto_tokens": 1048576, "params_total_b": 2800, "preco_input_1m": 3.00, "preco_output_1m": 15.00},
    {"versao": "Kimi K2.8 Preview", "data": "2026-09-11", "contexto_tokens": 1048576, "params_total_b": null, "preco_input_1m": null, "preco_output_1m": null}
  ],
  "aberto": true
}
```
