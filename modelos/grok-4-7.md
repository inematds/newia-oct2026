# Grok 4.7 — dossiê

> Estado em 2026-09-15. Rumor: Grok 4.7 — flagship da xAI, dados de engenharia da SpaceX, multimodalidade em tempo real, raciocínio, custo-benefício. Status: rumor com fonte (declarações públicas de Elon Musk no X, repercutidas pela imprensa especializada; nenhum documento oficial da xAI)

## 1. O que é a linhagem (fabricante, posicionamento, 3 frases)

A linhagem Grok é desenvolvida pela xAI, empresa de Elon Musk que hoje opera sob a marca institucional "SpaceXAI" nos próprios domínios oficiais (docs.x.ai e x.ai exibem "SpaceXAI" no título das páginas) (fonte: https://docs.x.ai/docs/models). O Grok é posicionado como assistente de propósito geral com forte integração à rede social X, foco em tarefas agenticas de longa duração (pesquisa, codificação, análise) e uma narrativa de diferenciação por dados "em tempo real" da plataforma X e, segundo o rumor tratado neste dossiê, por dados de engenharia da SpaceX. O modelo mais recente confirmado publicamente é o Grok 4.6, lançado em 12/08/2026 (fonte: https://x.ai/news/grok-4-6), e o sucessor "Grok 4.7" está em atraso público desde julho/2026, sem lançamento até a data deste dossiê.

## 2. Versão atual verificada (set/2026)
- Modelo: Grok 4.6 (fonte: https://x.ai/news/grok-4-6)
- Data de lançamento: 12/08/2026 (fonte: https://datanorth.ai/news/xai-releases-grok-4-6 ; confirmado por múltiplas fontes de imprensa especializada — página oficial https://x.ai/news/grok-4-6 confirma a existência do anúncio mas não expôs a data em texto extraível na checagem direta)
- Janela de contexto: 500.000 tokens (fonte: https://www.requesty.ai/models/xai/grok-4.6 e https://kingy.ai/blog/grok-4-6-price-benchmarks-api-cursor-context-window/)
- Preço API: input US$ 2,00/1M tokens, output US$ 6,00/1M tokens — mesmo preço do Grok 4.5 (fonte: https://www.moolstudio.com/blog/xai-grok-4-6-release e https://benchlm.ai/models/grok-4-6)
- Benchmarks:
  - GPQA Diamond: 94,9% (fonte: https://emergent.sh/learn/grok-4-6-benchmarks)
  - Artificial Analysis Intelligence Index: 61 pontos, empatando com "GPT-5.6 Sol" (fonte: https://evolink.ai/blog/grok-4-6-release-date)
  - CursorBench v3.2 (proxy de engenharia de software, não é o SWE-bench Verified oficial): 69,9% (fonte: https://www.layer3labs.io/guides/grok-4-6-benchmarks)
  - DeepSWE v1.1: 65,9%, ante 54% do Grok 4.5 (fonte: https://www.layer3labs.io/guides/grok-4-6-benchmarks)
  - SWE-bench Verified: não verificado (não foi localizada, nas buscas feitas, uma fonte específica citando o Grok 4.6 nesse benchmark exato; os números de engenharia de software encontrados foram CursorBench v3.2 e DeepSWE v1.1, listados acima)
  - AIME: não verificado
  - LMArena: não verificado
- Multimodalidade / recursos-chave: foco declarado em agentes de longa duração (pesquisa multi-etapas, análise, trabalho em bases de código, geração de aplicações), conhecimento até 01/02/2026 (fonte: https://evolink.ai/blog/grok-4-6-release-date). Disponível via Cursor, via ferramenta própria "Grok Build" e via API da xAI (fonte: https://www.moolstudio.com/blog/xai-grok-4-6-release)

## 3. Linha do tempo de versões (mais antiga → mais nova, 3 a 6 itens)

| Versão | Data | Contexto | Preço input/output (US$/1M) | Destaque | Fonte |
|---|---|---|---|---|---|
| Grok 4 | não verificado (data exata não localizada nas buscas) | 256.000 tokens | 3,00 / 15,00 | Modelo original `grok-4-0709`, hoje aposentado (retirado em 15/05/2026, redirecionado para Grok 4.3) | https://pricepertoken.com/pricing-page/model/xai-grok-4 |
| Grok 4.1 / Grok 4.1 Fast | não verificado (data de lançamento); aposentado em 15/05/2026 | 2.000.000 tokens (Grok 4.1 Fast) | 0,20 / 0,50 (Grok 4.1 Fast) | Tier de volume; requisições ao slug antigo passaram a ser redirecionadas silenciosamente para o Grok 4.3 | https://www.ai-toolbox.co/grok-models/grok-pricing-plans-api-2026 |
| Grok 4.3 | não verificado (data exata) | 1.000.000 tokens | 1,25 / 2,50 | Passou a receber o tráfego dos slugs `grok-4.1`/`grok-4.1-fast` aposentados | https://benchlm.ai/xai/api-pricing |
| Grok 4.5 | não verificado (data exata) | 500.000 tokens | 2,00 / 6,00 | Base de preço e contexto que o Grok 4.6 manteve; SWE (DeepSWE v1.1) em 54% | https://www.layer3labs.io/guides/grok-4-6-benchmarks |
| Grok 4.6 | 12/08/2026 | 500.000 tokens | 2,00 / 6,00 | Flagship atual; GPQA Diamond 94,9%, AA Intelligence Index 61, salto grande em DeepSWE v1.1 (54%→65,9%) | https://x.ai/news/grok-4-6 |
| "Grok 4.7" (rumor) | ainda não lançado; alvo verbal mais recente de Musk era 12/09/2026, não cumprido | não verificado | não verificado | ~2,1 trilhões de parâmetros rumorados (ante ~1,5 trilhão do Grok 4.6); repetidos adiamentos desde julho/2026 | https://www.bighatgroup.com/blog/xai-weekly-2026-09-13/ |

## 4. O rumor: o que se sabe

- https://cellcog.ai/blog/grok-4-7-release-date/ — resume que, em 14/09/2026, não existe anúncio, página de modelo, identificador de API, preço nem nota de lançamento da xAI para o Grok 4.7; o modelo mais novo confirmado continua sendo o Grok 4.6 (12/08/2026).
- https://www.bighatgroup.com/blog/xai-weekly-2026-09-13/ — relata que o Grok 4.7 "escorregou" de novo: o alvo de Musk para 12/09/2026 não foi cumprido, e ele disse publicamente que o modelo "precisa de mais alguns dias" de ajuste por RL (aprendizado por reforço) para corrigir problemas de tamanho de resposta e gestão de tarefas.
- https://www.kucoin.com/news/flash/xai-delays-grok-4-7-release-amid-competitor-model-updates — cobertura de imprensa noticiando o adiamento do Grok 4.7 em meio a atualizações de modelos concorrentes.
- https://cryptobriefing.com/xai-delays-grok-4-7-release/ — cobertura similar de adiamento.
- Histórico de promessas verbais de Musk (via X, reportado por imprensa, não documentos oficiais): 24/07/2026 disse "em 4 semanas"; 28/07/2026 revisou para "algumas semanas" após o lançamento do Grok 4.6; quando o Grok 4.6 saiu em 12/08/2026, ele projetou "3 a 4 semanas" para o sucessor; adiamentos seguiram se repetindo até a data deste dossiê (fonte: síntese de https://www.bighatgroup.com/blog/xai-weekly-2026-09-13/ e https://cellcog.ai/blog/grok-4-7-release-date/).
- Especificação rumorada de parâmetros: ~2,1 trilhões de parâmetros (alta de ~40% sobre os ~1,5 trilhão atribuídos ao Grok 4.6), com Musk dizendo que o novo modelo deve superar o antecessor "na maioria das áreas" mas será "um pouco mais lento para servir" (fonte: síntese de resultados de busca sobre https://www.bighatgroup.com/blog/xai-weekly-2026-09-13/ e https://cellcog.ai/blog/grok-4-7-release-date/ — número de parâmetros não confirmado em nenhum documento técnico da xAI).
- Sobre a frase específica do rumor tratado neste dossiê ("dados de engenharia da SpaceX, multimodalidade em tempo real, raciocínio, custo-benefício"): não foi localizada, nas buscas realizadas, nenhuma fonte pública citando literalmente "dados de engenharia da SpaceX" como insumo de treinamento do Grok 4.7. O rebranding institucional de docs.x.ai/x.ai para "SpaceXAI" (fonte: https://docs.x.ai/docs/models) é um indício estrutural de aproximação entre xAI e SpaceX, mas não é uma confirmação de que dados de engenharia da SpaceX estejam sendo usados para treinar o Grok 4.7 — isso permanece sem fonte pública direta encontrada.

Marcação de verificabilidade de cada afirmação do rumor:
- "Flagship da xAI" — verificável? sim, no sentido de posicionamento (é o próximo modelo principal da linhagem); não há como verificar especificações porque o modelo não foi lançado.
- "Dados de engenharia da SpaceX" — verificável? não, nenhuma fonte pública direta encontrada associando dados da SpaceX ao treinamento do Grok 4.7.
- "Multimodalidade em tempo real" — verificável? não, nenhuma fonte encontrada detalhando recursos multimodais específicos do Grok 4.7; os anúncios encontrados falam apenas de atraso por ajuste de RL (tamanho de resposta e gestão de tarefas).
- "Raciocínio" — verificável? parcialmente; é consistente com a tendência da linhagem Grok 4.x (todos os modelos recentes são "reasoning models"), mas nenhuma fonte detalha ganhos específicos de raciocínio do Grok 4.7.
- "Custo-benefício" — verificável? não, nenhuma fonte com preço ou benchmark de custo-benefício do Grok 4.7 foi encontrada; preço não existe porque o modelo não foi lançado.
- "~2,1 trilhões de parâmetros" — verificável? não, número aparece apenas em cobertura de imprensa/blogs secundários citando Musk, sem confirmação técnica oficial da xAI.

## 5. O que muda na prática vs. versão atual (3 bullets, com "se o rumor se confirmar")

- Se o rumor de ~2,1 trilhões de parâmetros se confirmar, o Grok 4.7 seria significativamente maior que o Grok 4.6 (~1,5 trilhão, não verificado oficialmente), o que tende a aumentar custo de inferência e, segundo o próprio Musk, tornar o modelo "um pouco mais lento para servir" — um trade-off relevante para quem hoje usa Grok 4.6 em fluxos com restrição de latência.
- Se a promessa de "dados de engenharia da SpaceX" se confirmar, o Grok 4.7 poderia se diferenciar em tarefas de engenharia física/aeroespacial e raciocínio técnico complexo — mas isso é especulação de terceiros, não uma feature anunciada pela xAI; não há como planejar um caso de uso em cima disso hoje.
- Enquanto o Grok 4.7 não sai, o Grok 4.6 (500K de contexto, US$ 2/US$ 6 por 1M tokens, GPQA Diamond 94,9%) continua sendo o teto real e testável da linhagem — qualquer decisão de adoção precisa ser tomada com base nele, não no rumor.

## 6. Utilidade para um criador/educador/dev brasileiro (3 bullets: onde usar, custo, cuidado)

- Onde usar: hoje, o Grok 4.6 é a opção madura da linhagem para agentes de codificação de longa duração e pesquisa multi-etapas (via API ou Cursor); não há ainda nenhum motivo prático para planejar em cima do "Grok 4.7", que segue sem data, preço ou documentação.
- Custo: em reais, US$ 2,00/1M tokens de entrada e US$ 6,00/1M de saída (fonte: https://benchlm.ai/models/grok-4-6) tende a ficar mais caro que os tiers de volume da própria xAI (ex.: o extinto Grok 4.1 Fast, US$ 0,20/US$ 0,50) — vale comparar cenário de uso antes de padronizar em um modelo só, especialmente em projeto educacional com orçamento apertado.
- Cuidado: nunca planejar prazo de lançamento, preço ou capacidade em cima de declarações de Elon Musk no X sobre o Grok 4.7 — o próprio histórico mostra promessas de "4 semanas" viradas em múltiplos adiamentos entre julho e setembro de 2026 (fonte: https://www.bighatgroup.com/blog/xai-weekly-2026-09-13/); tratar como rumor até a xAI publicar página de modelo em docs.x.ai/x.ai/news.

## 7. Fontes (lista de URLs)

- https://docs.x.ai/docs/models
- https://x.ai/news
- https://x.ai/news/grok-4-6
- https://datanorth.ai/news/xai-releases-grok-4-6
- https://www.requesty.ai/models/xai/grok-4.6
- https://kingy.ai/blog/grok-4-6-price-benchmarks-api-cursor-context-window/
- https://www.moolstudio.com/blog/xai-grok-4-6-release
- https://benchlm.ai/models/grok-4-6
- https://emergent.sh/learn/grok-4-6-benchmarks
- https://evolink.ai/blog/grok-4-6-release-date
- https://www.layer3labs.io/guides/grok-4-6-benchmarks
- https://pricepertoken.com/pricing-page/model/xai-grok-4
- https://www.ai-toolbox.co/grok-models/grok-pricing-plans-api-2026
- https://benchlm.ai/xai/api-pricing
- https://cellcog.ai/blog/grok-4-7-release-date/
- https://www.bighatgroup.com/blog/xai-weekly-2026-09-13/
- https://www.kucoin.com/news/flash/xai-delays-grok-4-7-release-amid-competitor-model-updates
- https://cryptobriefing.com/xai-delays-grok-4-7-release/
- https://www.orcarouter.ai/blog/grok-4-7-release-date
- https://techjournal.org/grok-4-7-delayed-spacex-data
- https://supergok.com/grok-4-7-delayed/
- https://juliangoldie.com/grok-4-7-release-date/

## 8. Dados estruturados
```json
{
  "slug": "grok-4-7",
  "rumor_nome": "Grok 4.7",
  "fabricante": "xAI",
  "status": "rumor-com-fonte",
  "atual": {
    "nome": "Grok 4.6",
    "data": "2026-08-12",
    "contexto_tokens": 500000,
    "preco_input_1m": 2.0,
    "preco_output_1m": 6.0,
    "swe_bench_verified": null,
    "gpqa_diamond": 94.9,
    "lmarena_elo": null,
    "fonte": "https://x.ai/news/grok-4-6"
  },
  "rumor": {
    "contexto_tokens": null,
    "preco_input_1m": null,
    "claims": [
      "flagship da xAI",
      "dados de engenharia da SpaceX (sem fonte pública direta encontrada)",
      "multimodalidade em tempo real (sem fonte pública direta encontrada)",
      "raciocínio aprimorado (sem detalhe técnico público)",
      "custo-benefício (sem preço público)",
      "~2,1 trilhões de parâmetros (não confirmado oficialmente)"
    ],
    "fonte": "https://www.bighatgroup.com/blog/xai-weekly-2026-09-13/"
  },
  "timeline": [
    {"versao": "Grok 4", "data": null, "contexto_tokens": 256000, "preco_input_1m": 3.0, "preco_output_1m": 15.0},
    {"versao": "Grok 4.1 Fast", "data": null, "contexto_tokens": 2000000, "preco_input_1m": 0.2, "preco_output_1m": 0.5},
    {"versao": "Grok 4.3", "data": null, "contexto_tokens": 1000000, "preco_input_1m": 1.25, "preco_output_1m": 2.5},
    {"versao": "Grok 4.5", "data": null, "contexto_tokens": 500000, "preco_input_1m": 2.0, "preco_output_1m": 6.0},
    {"versao": "Grok 4.6", "data": "2026-08-12", "contexto_tokens": 500000, "preco_input_1m": 2.0, "preco_output_1m": 6.0}
  ],
  "aberto": false
}
```
