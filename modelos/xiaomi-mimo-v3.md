# Xiaomi MiMo-V3-Pro / Flash — dossiê

> Estado em 2026-09-15. Rumor: Xiaomi entrando em IA de fronteira com variantes Pro e Flash para nuvem, rollout mais rápido. Status: rumor com fonte

## 1. O que é a linhagem (fabricante, posicionamento, 3 frases)

A MiMo é a linhagem de modelos de IA da Xiaomi, iniciada em abril de 2025 com o MiMo-7B (foco em raciocínio matemático e código) e expandida para visão (MiMo-VL), áudio/voz (MiMo-Audio, MiMo-V2.5-TTS/ASR) e modelos de fronteira em larga escala (MiMo-V2-Flash, MiMo-V2-Pro, MiMo-V2.5/V2.5-Pro) (fonte: https://en.wikipedia.org/wiki/Xiaomi_MiMo). O projeto é liderado por Luo Fuli, ex-pesquisadora da DeepSeek que assumiu a equipe MiMo (fonte: https://en.wikipedia.org/wiki/Xiaomi_MiMo). A estratégia da Xiaomi para 2026 é integrar chip próprio (XRING O1), sistema operacional próprio (HyperOS) e modelo próprio (MiMo) no ecossistema "pessoas × carro × casa" (fonte: https://asiatimes.com/2026/06/hidden-in-plain-sight-the-ai-within-xiaomi/).

## 2. Versão atual verificada (set/2026)
- Modelo: MiMo-V2.5-Pro (flagship atual da Xiaomi) (fonte: https://openrouter.ai/xiaomi/mimo-v2-pro)
- Data de lançamento: fim de abril de 2026 (MiMo-V2.5 e MiMo-V2.5-Pro open-sourced sob MIT) (fonte: https://www.orcarouter.ai/blog/xiaomi-mimo-v3-flash-leak)
- Janela de contexto: 1.000.000 (1M) tokens — listado como "1.1M context" na página do OpenRouter (fonte: https://openrouter.ai/xiaomi/mimo-v2-pro)
- Parâmetros / arquitetura: 1,02 trilhão de parâmetros totais, 42 bilhões ativos, Mixture-of-Experts (fonte: https://www.orcarouter.ai/blog/xiaomi-mimo-v3-flash-leak)
- Licença / pesos abertos: MIT, open-source (fonte: https://www.orcarouter.ai/blog/xiaomi-mimo-v3-flash-leak; confirmado também para a Wikipedia quanto ao padrão de licenciamento da família: https://en.wikipedia.org/wiki/Xiaomi_MiMo)
- Preço API: input US$ 0,3045 / 1M tokens, output US$ 0,609 / 1M tokens (listagem via OpenRouter) (fonte: https://openrouter.ai/xiaomi/mimo-v2-pro)
- Benchmarks: não verificado (números específicos de GPQA Diamond, SWE-bench Verified, AIME e LMArena para o MiMo-V2.5-Pro especificamente não foram encontrados nas fontes consultadas; a página do OpenRouter cita apenas que o modelo tem "top rankings" em ClawEval, GDPVal e SWE-bench Pro, sem valores numéricos) (fonte: https://openrouter.ai/xiaomi/mimo-v2-pro)
- Multimodalidade / recursos-chave: contexto de até 1M tokens voltado a frameworks de agentes; capaz de completar tarefas profissionais autônomas envolvendo mais de mil chamadas de ferramentas (fonte: https://openrouter.ai/xiaomi/mimo-v2-pro). Existe também o MiMo-V2.5 (irmão "omnimodal nativo", menor, ~metade do custo de inferência do Pro) (fonte: https://openrouter.ai/xiaomi/mimo-v2-pro)

## 3. Linha do tempo de versões (mais antiga → mais nova, 3 a 6 itens)

| Versão | Data | Contexto | Parâmetros | Preço input/output (US$/1M) | Destaque | Fonte |
|---|---|---|---|---|---|---|
| MiMo-7B | 30 abr 2025 | não verificado | 7B (denso) | não verificado (open-weight, sem API paga conhecida) | Primeiro modelo da linhagem, pré-treinado em ~25 trilhões de tokens, foco em raciocínio matemático/código | https://en.wikipedia.org/wiki/Xiaomi_MiMo |
| MiMo-7B-RL-0530 | mai 2025 | 48.000 tokens (janela de RL) | 7B | não verificado | Ampliou dataset de fine-tuning de 500k para 6M instâncias; AIME 2024 subiu de 68,2 para 80,1 | https://en.wikipedia.org/wiki/Xiaomi_MiMo |
| MiMo-VL-7B / MiMo-Audio-7B | 2025 (datas exatas não verificadas) | não verificado | 7B (cada) | não verificado | Expansão para visão-linguagem (ViT + backbone MiMo-7B) e áudio (voz, +100M horas de áudio) | https://en.wikipedia.org/wiki/Xiaomi_MiMo ; https://huggingface.co/XiaomiMiMo/MiMo-Audio-7B-Base |
| MiMo-V2-Flash | 17 dez 2025 | 256.000 | 309B total / 15B ativos (MoE) | não verificado (open-weight MIT) | Top #1 open-source em SWE-bench Verified/Multilingual; comparável ao Claude Sonnet 4.5 a ~3,5% do custo, segundo a Xiaomi | https://openrouter.ai/xiaomi/mimo-v2-pro ; https://artificialanalysis.ai/models/mimo-v2-0206 |
| MiMo-V2-Pro | 18 mar 2026 | 1.000.000 | >1 trilhão total / 42B ativos | proprietário, sem preço público confirmado nesta pesquisa | Apareceu antes sob o codinome anônimo "Hunter Alpha" no OpenRouter, processou +1 trilhão de tokens antes de a Xiaomi assumir a autoria | https://en.wikipedia.org/wiki/Xiaomi_MiMo |
| MiMo-V2.5 / MiMo-V2.5-Pro | fim abr 2026 | 1.000.000 | V2.5: 310B total; V2.5-Pro: 1,02T total / 42B ativos | V2.5-Pro: US$ 0,3045 / US$ 0,609 | Open-source sob MIT; V2.5-Pro é o flagship atual, com destaque em ClawEval, GDPVal, SWE-bench Pro | https://www.orcarouter.ai/blog/xiaomi-mimo-v3-flash-leak ; https://openrouter.ai/xiaomi/mimo-v2-pro |

## 4. O rumor: o que se sabe

- Fonte principal: OrcaRouter, "Xiaomi MiMo-V3-Flash: Is It OpenCode's Omen Alpha?" — em 4 set 2026, o analista independente "teortaxesTex" afirmou publicamente acreditar que o "Omen Alpha", modelo anônimo ("stealth model") que a OpenCode começou a oferecer a assinantes do plano Go na manhã daquele dia, é na verdade o Xiaomi MiMo-V3-Flash (fonte: https://www.orcarouter.ai/blog/xiaomi-mimo-v3-flash-leak).
- A hipótese se baseia no estilo do chain-of-thought visível do Omen Alpha, que teortaxesTex lê como característico de um modelo da era DeepSeek V4 GA (GA lançada em 13 ago 2026, DeepSeek V4 Pro build 0813, pesos MIT) — o que sugeriria que o MiMo-V3-Flash seria um "tier rápido" da Xiaomi construído sobre os pesos abertos de raciocínio da DeepSeek V4 (fonte: https://www.orcarouter.ai/blog/xiaomi-mimo-v3-flash-leak).
- Contexto de arquitetura da geração V3: em julho de 2026, no ICML, Luo Fuli (líder da equipe MiMo) apresentou uma prévia da arquitetura "High Sparse" para V3 — camadas de atenção plena como "oráculo" que seleciona tokens para camadas esparsas, que compartilham o KV-cache das camadas plenas; a Xiaomi alega redução de ~10x na memória de KV-cache e testou razão esparso:pleno de 11:1 em modelo de escala 80B (afirmações da própria equipe em talk de conferência, não resultados independentes) (fonte: https://www.orcarouter.ai/blog/xiaomi-mimo-v3-flash-leak).
- Existem também "números do MiMo-V3-Pro" que teriam vazado em agosto de 2026, mas o artigo-fonte não detalha esses números especificamente nesta pesquisa; ele apenas os menciona como referência de comparação (fonte: https://www.orcarouter.ai/blog/xiaomi-mimo-v3-flash-leak).
- Segundo o artigo, nenhuma das quatro condições que confirmariam a identificação havia se concretizado até 4 set 2026: (1) declaração/pesos da Xiaomi, (2) fingerprint técnico (tokenizer) apontando para a Xiaomi, (3) benchmarks neutros do Omen Alpha, (4) revelação do fabricante após a janela "Go" (fonte: https://www.orcarouter.ai/blog/xiaomi-mimo-v3-flash-leak).
- O próprio artigo classifica a evidência central (semelhança estilística do raciocínio) como "a classe mais fraca de fingerprint de modelo", e nota que parte da comunidade de desenvolvedores relata que os requests de backend do Omen Alpha resolvem para outro lugar (não Xiaomi) — trecho cortado na fonte indexada, não verificado completamente (fonte: https://www.orcarouter.ai/blog/xiaomi-mimo-v3-flash-leak).

Marcação das afirmações do rumor:
- "MiMo-V3-Flash é o Omen Alpha" — verificável? não, por enquanto (nenhum fingerprint técnico publicado, apenas leitura estilística de um analista)
- "MiMo-V3-Flash é construído sobre pesos abertos da DeepSeek V4" — verificável? não (hipótese derivada da afirmação acima, mesma fragilidade evidencial)
- "Arquitetura High Sparse da geração V3, com ganho de ~10x em memória de KV-cache" — verificável? parcialmente — é uma afirmação pública da própria Xiaomi (Luo Fuli, ICML jul/2026), mas ainda não é resultado independente nem confirma a existência do MiMo-V3-Flash/Pro como produto lançado
- "MiMo-V3-Pro teve números vazados em agosto de 2026" — verificável? não com os dados desta pesquisa (fonte cita o fato mas não reproduz os números)

## 5. O que muda na prática vs. versão atual (3 bullets, com "se o rumor se confirmar")

- Hoje (MiMo-V2.5-Pro, MIT, 1,02T/42B, 1M contexto, ~US$0,30/US$0,61 por 1M tokens) já é aberto e competitivo em tarefas agenticas de longo horizonte; se o rumor do MiMo-V3-Flash se confirmar, a Xiaomi passaria a operar também um "tier rápido" de fronteira distribuído por terceiros (OpenCode) antes mesmo do anúncio oficial — repetindo o padrão "Hunter Alpha" já usado com o MiMo-V2-Pro.
- Se confirmado que o V3-Flash se apoia em pesos abertos da DeepSeek V4, isso mudaria a percepção de "modelo 100% proprietário Xiaomi" para uma estratégia de reaproveitamento de bases abertas de terceiros com otimização de custo/velocidade — relevante para quem hoje escolhe modelo pela genealogia técnica.
- A arquitetura "High Sparse" anunciada para a geração V3 (redução de ~10x em KV-cache), se de fato chegar a produto, tende a baratear ainda mais contextos longos (1M+ tokens) e acelerar throughput — mas isso ainda depende de lançamento oficial, não apenas do preview de pesquisa do ICML.

## 6. Utilidade para um criador/educador/dev brasileiro (3 bullets)

- Onde usar hoje: o MiMo-V2.5-Pro (via OpenRouter ou outros agregadores) é a aposta segura agora — aberto (MIT), contexto de 1M tokens, bom para pipelines de agentes/RAG com documentos longos; o MiMo-V3-Flash/Pro ainda é rumor e não deve entrar em produção.
- Custo: MiMo-V2.5-Pro sai bem mais barato que modelos fechados equivalentes (referência: MiMo-V2-Flash custava cerca de 3,5% do preço da Claude Sonnet 4.5 com desempenho comparável em SWE-bench, segundo a Xiaomi) — vale testar para reduzir custo de chamadas de API em fluxos de alto volume (fonte: https://openrouter.ai/xiaomi/mimo-v2-pro).
- Rodar local / cuidado: por ser open-weight (MIT), MiMo-V2-Flash (309B/15B ativos) e a família V2.5 podem, em tese, ser auto-hospedados, mas exigem infraestrutura pesada (centenas de bilhões de parâmetros totais); para uso prático no Brasil, a rota mais viável ainda é via API de terceiros. Cuidado: não basear pipeline de produção no "Omen Alpha"/MiMo-V3-Flash enquanto a origem não for oficialmente confirmada pela Xiaomi — é um modelo anônimo por assinatura, sem garantias de estabilidade, preço ou continuidade.

## 7. Fontes (lista de URLs)

- https://en.wikipedia.org/wiki/Xiaomi_MiMo
- https://github.com/xiaomimimo/MiMo-V2-Flash
- https://openrouter.ai/xiaomi/mimo-v2-pro
- https://artificialanalysis.ai/models/mimo-v2-0206
- https://www.orcarouter.ai/blog/xiaomi-mimo-v3-flash-leak
- https://huggingface.co/XiaomiMiMo/MiMo-Audio-7B-Base
- https://github.com/XiaomiMiMo/MiMo-Audio
- https://github.com/XiaomiMiMo/MiMo-VL
- https://asiatimes.com/2026/06/hidden-in-plain-sight-the-ai-within-xiaomi/
- https://mimo.mi.com/docs/en-US/updates/model
- https://mimo.xiaomi.com/mimo-v2-5-pro

## 8. Dados estruturados
```json
{
  "slug": "xiaomi-mimo-v3",
  "rumor_nome": "Xiaomi MiMo-V3-Pro / Flash",
  "fabricante": "Xiaomi",
  "status": "rumor-com-fonte",
  "atual": {
    "nome": "MiMo-V2.5-Pro",
    "data": "2026-04-30",
    "contexto_tokens": 1000000,
    "params_total_b": 1020,
    "params_ativos_b": 42,
    "preco_input_1m": 0.3045,
    "preco_output_1m": 0.609,
    "swe_bench_verified": null,
    "gpqa_diamond": null,
    "lmarena_elo": null,
    "fonte": "https://openrouter.ai/xiaomi/mimo-v2-pro"
  },
  "rumor": {
    "contexto_tokens": null,
    "preco_input_1m": null,
    "params_total_b": null,
    "claims": [
      "MiMo-V3-Flash seria o modelo anônimo 'Omen Alpha' oferecido pela OpenCode a assinantes do plano Go desde 4 de setembro de 2026, segundo hipótese do analista teortaxesTex",
      "MiMo-V3-Flash seria construído sobre pesos abertos MIT da DeepSeek V4 GA (build 0813, ago/2026), a partir de semelhança estilística no chain-of-thought",
      "A geração MiMo-V3 usaria arquitetura 'High Sparse' (camadas de atenção plena como oráculo + compartilhamento de KV-cache), previsto por Luo Fuli no ICML de julho de 2026, com alegação de ~10x de redução em memória de KV-cache",
      "Números de um suposto MiMo-V3-Pro teriam vazado em agosto de 2026, mas sem detalhamento verificado nesta pesquisa"
    ],
    "fonte": "https://www.orcarouter.ai/blog/xiaomi-mimo-v3-flash-leak"
  },
  "timeline": [
    {"versao": "MiMo-7B", "data": "2025-04-30", "contexto_tokens": null, "params_total_b": 7, "preco_input_1m": null, "preco_output_1m": null},
    {"versao": "MiMo-7B-RL-0530", "data": "2025-05-30", "contexto_tokens": 48000, "params_total_b": 7, "preco_input_1m": null, "preco_output_1m": null},
    {"versao": "MiMo-V2-Flash", "data": "2025-12-17", "contexto_tokens": 256000, "params_total_b": 309, "preco_input_1m": null, "preco_output_1m": null},
    {"versao": "MiMo-V2-Pro", "data": "2026-03-18", "contexto_tokens": 1000000, "params_total_b": 1000, "preco_input_1m": null, "preco_output_1m": null},
    {"versao": "MiMo-V2.5 / MiMo-V2.5-Pro", "data": "2026-04-30", "contexto_tokens": 1000000, "params_total_b": 1020, "preco_input_1m": 0.3045, "preco_output_1m": 0.609}
  ],
  "aberto": true
}
```
