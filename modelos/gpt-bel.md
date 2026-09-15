# GPT Bel — dossiê

> Estado em 2026-09-15. Rumor: nova linha de nomes da OpenAI focada em alinhamento/segurança, mais rápido e potente que um suposto modelo "Astra", testes internos com 6x de velocidade. Status: rumor com fonte (mas fragmentado — as fontes públicas atribuem partes desse rumor a codinomes DIFERENTES, ver seção 4)

## 1. O que é a linhagem (fabricante, posicionamento, 3 frases)

A OpenAI é a fabricante. Em set/2026 a linhagem pública em produção é a família GPT-5.x (GPT-5.2, GPT-5.5, GPT-5.6 com as variantes Sol/Terra/Luna, GPT-5.3-Codex) e o novo topo de linha **GPT-6 Astra**, lançado em 3/set/2026 (fonte: https://www.orcarouter.ai/blog/gpt-6-astra-successor-leak, citando OpenAI developer docs e Artificial Analysis). "Astra" não é rumor — é um modelo real já lançado e cobrado via API (`gpt-6-astra`). O nome "GPT Bel" circula na imprensa/X como codinome interno de pré-treinamento, não como produto anunciado.

## 2. Versão atual verificada (set/2026)
- Modelo: GPT-6 Astra (fonte: https://www.orcarouter.ai/blog/gpt-6-astra-successor-leak)
- Data de lançamento: 2026-09-03 (shipping desde essa data; GA em 2026-09-05) (fonte: https://www.orcarouter.ai/blog/gpt-6-astra-successor-leak)
- Janela de contexto: ~1.05M tokens de entrada / 128K tokens de saída (fonte: https://www.orcarouter.ai/blog/gpt-6-astra-successor-leak)
- Preço API: input US$ 10/1M, output US$ 50/1M (fonte: https://www.orcarouter.ai/blog/gpt-6-astra-successor-leak)
- Benchmarks:
  - Artificial Analysis Intelligence Index: 61,2 (praticamente empatado com o antecessor GPT-5.6 Sol) (fonte: https://www.orcarouter.ai/blog/gpt-6-astra-successor-leak)
  - SWE-Atlas-QnA (proxy de SWE-bench): 62% (vs. 54% do GPT-5.6 Sol) (fonte: WebSearch — MindStudio/Vellum/DataCamp, agregado via busca "GPT-6 Astra SWE-bench GPQA AIME benchmark score OpenAI", não verificado em página primária da OpenAI)
  - GPQA Diamond: 96,0% (fonte: WebSearch, mesma busca acima, não verificado em página primária)
  - FrontierMath Tier 4: 97,6% (fonte: WebSearch, mesma busca acima, não verificado em página primária)
  - AIME: não verificado
  - Rating de risco cibernético interno da OpenAI: "Critical" (fonte: https://www.orcarouter.ai/blog/gpt-6-astra-successor-leak)
- Multimodalidade / recursos-chave: não verificado em detalhe nesta pesquisa (a página oficial `openai.com/index/gpt-6-astra/` retornou erro HTTP 403 ao tentar acesso direto — não foi possível confirmar diretamente na fonte primária)

## 3. Linha do tempo de versões (mais antiga → mais nova, 3 a 6 itens)

| Versão | Data | Contexto | Preço input/output (US$/1M) | Destaque | Fonte |
|---|---|---|---|---|---|
| GPT-5.2 | 2025-12-11 | não verificado | não verificado | 3 modos (Instant/Thinking/Pro) + variante GPT-5.2-Codex | https://openai.com/index/introducing-gpt-5-2/ |
| GPT-5.5 | 2026-04-23 | 1M tokens | 5 / 30 | "nova classe de inteligência para trabalho real", ganhos em coding agêntico e uso de computador | https://openai.com/index/introducing-gpt-5-5/ , https://openrouter.ai/openai/gpt-5.5 |
| GPT-5.6 Sol | 2026-07-09 | 1,1M tokens (128K saída) | 4 / 20 (preço promocional válido ao menos até 21/nov/2026) | Flagship da família 5.6, SOTA em coding/knowledge work/cyber/ciência com menos tokens e custo menor | https://www.requesty.ai/models/openai/gpt-5.6-sol , https://www.orcarouter.ai/blog/gpt-6-astra-successor-leak |
| GPT-5.3-Codex | não verificado (data exata) | não verificado | não verificado | Modelo agêntico de coding mais capaz da OpenAI até então | https://en.wikipedia.org/wiki/GPT-5.3-Codex |
| GPT-6 Astra | 2026-09-03 (GA 2026-09-05) | ~1,05M tokens (128K saída) | 10 / 50 | Topo de linha atual; forte em ciência/cyber; rollout descrito como "messy" pela própria OpenAI/Altman | https://www.orcarouter.ai/blog/gpt-6-astra-successor-leak |

## 4. O rumor: o que se sabe

- **"Bel"** — codinome de uma rodada de pré-treinamento com mais de 10 trilhões de parâmetros, sucessora de outro codinome interno, "Doug". Fonte original: postagem no X de conta anônima @synthwavedd em 25/ago/2026, sem fonte nomeada dentro da OpenAI (resumo via https://www.orcarouter.ai/blog/gpt-6-astra-successor-leak). Reproduzido também por https://eyestech.in/gpt-6-sol-benchmarks-astra-latency-trap-leaks/, que descreve "Bel" como reservado internamente enquanto times de alinhamento constroem sandboxes de avaliação — aqui está a ligação com "alinhamento/segurança" do rumor pedido.
- **Relação com Astra:** as próprias fontes divergem — alguns leitores tratam "Bel" como a base que virou o GPT-6/Astra já lançado; outros como o modelo SEGUINTE a Astra (fonte: https://www.orcarouter.ai/blog/gpt-6-astra-successor-leak).
- **A afirmação "6x mais rápido", especificamente:** as fontes públicas atribuem esse número a um codinome DIFERENTE — **"GPT-6 Sol"** (não "Bel") — em testes internos, rodando ~6x mais rápido que o Astra, com um usuário citando uma tarefa SVG concluída em 3 min vs 19 min do Astra; especulação de lançamento no DevDay de 29/set/2026 (fonte: https://x.com/hqmank/status/2096886608582643847 e https://www.kucoin.com/news/flash/gpt-6-sol-begins-internal-testing-6x-faster-than-astra). Não há fonte pública que amarre o número "6x" ao nome "Bel" especificamente.
- Também circula um segundo codinome, **"Doug"**, citado pela SemiAnalysis (7/ago/2026) como "modelo muito maior, ativamente em desenvolvimento", antecessor de "Bel" (fonte: https://www.orcarouter.ai/blog/gpt-6-astra-successor-leak).
- Em 8/set/2026 a própria OpenAI declarou publicamente a existência de um modelo futuro não nomeado, "significativamente mais capaz que o GPT-6 Astra", que teria produzido uma prova relacionada a Navier-Stokes — mas sem nome, preço, data ou identificador de API (fonte: https://www.orcarouter.ai/blog/gpt-6-astra-successor-leak).

Marcação de cada afirmação do rumor combinado ("GPT Bel", alinhamento/segurança, mais rápido/potente que Astra, 6x em testes internos):
- "Nova linha de nomes focada em alinhamento/segurança": `verificável? parcialmente` — há reportagem (eyestech.in) ligando "Bel" a um período de avaliação de alinhamento/segurança antes do lançamento, mas a fonte primária é uma leitura de posts de X anônimos, não documento da OpenAI.
- "Mais rápido e potente que Astra": `verificável? parcialmente` — a OpenAI confirmou (via Altman/Axios e post de 8/set) que existe um modelo futuro "significativamente mais capaz" que Astra; a velocidade especificamente não foi confirmada pela OpenAI.
- "Testes internos com 6x de velocidade": `verificável? não, para o nome "Bel"` — esse número específico está documentado em fontes de imprensa/X ligado ao codinome **"GPT-6 Sol"**, não a "Bel". Pode ser confusão de nomenclatura no rumor que chegou até você.
- "Chamado de GPT Bel": `verificável? não` — nenhuma fonte oficial da OpenAI usa esse nome; é inteiramente originado de posts anônimos no X, sem confirmação da empresa.

## 5. O que muda na prática vs. versão atual (3 bullets, com "se o rumor se confirmar")

- Se o rumor se confirmar (seja como "Bel" ou "GPT-6 Sol"), a OpenAI passaria a oferecer uma opção sensivelmente mais rápida que o Astra atual (~6x em uma tarefa testada), possivelmente trocando um pouco de qualidade bruta por latência — útil para fluxos agênticos que hoje sofrem com os 128K/token de saída do Astra em tarefas longas.
- Se a ligação com "alinhamento/segurança" se confirmar, o lançamento pode vir mais devagar e passar por gates de segurança adicionais — o próprio Astra já teve rollout adiado por um achado "Critical" de risco cibernético, então um sucessor mais capaz tende a ter o mesmo tipo de atraso.
- Enquanto não houver nome, preço ou data oficial da OpenAI, qualquer decisão de produto/orçamento hoje deve ser baseada no GPT-6 Astra (US$ 10/US$ 50 por 1M tokens) ou no GPT-5.6 Sol (US$ 4/US$ 20, mais barato), não em projeções sobre "Bel".

## 6. Utilidade para um criador/educador/dev brasileiro (3 bullets: onde usar, custo, cuidado)

- **Onde usar:** hoje, para produção real (roteiro, código, pesquisa), o GPT-5.6 Sol é a opção com melhor custo-benefício verificado (US$ 4/US$ 20 por 1M, 1,1M de contexto); o GPT-6 Astra vale para tarefas que exigem raciocínio científico/matemático pesado, dado o salto em GPQA Diamond e FrontierMath — mas a um custo mais que dobrado.
- **Custo:** com o dólar pesando no orçamento de quem paga em real, a diferença entre US$ 20/1M (Sol) e US$ 50/1M (Astra) de output é relevante em uso de alto volume (ex.: geração de roteiros em lote, agentes rodando o dia todo) — vale medir se o ganho de benchmark do Astra se traduz em qualidade percebida no seu caso de uso antes de trocar.
- **Cuidado:** não planeje fluxo de trabalho ou orçamento em cima de "GPT Bel" — é rumor não confirmado pela OpenAI, com dados nem sempre consistentes entre fontes (inclusive confusão entre "Bel" e "GPT-6 Sol" no próprio ecossistema de imprensa); trate como watch-list, não como roadmap.

## 7. Fontes (lista de URLs)

- https://www.orcarouter.ai/blog/gpt-6-astra-successor-leak
- https://eyestech.in/gpt-6-sol-benchmarks-astra-latency-trap-leaks/
- https://openai.com/index/gpt-6-astra/ (tentativa de acesso direto retornou HTTP 403 — não confirmado diretamente)
- https://openai.com/index/gpt-5-6/
- https://openai.com/index/introducing-gpt-5-2/
- https://openai.com/index/introducing-gpt-5-5/
- https://www.requesty.ai/models/openai/gpt-5.6-sol
- https://openrouter.ai/openai/gpt-5.6-sol
- https://openrouter.ai/openai/gpt-5.5
- https://en.wikipedia.org/wiki/GPT-5.3-Codex
- https://en.wikipedia.org/wiki/GPT-5.6
- https://x.com/hqmank/status/2096886608582643847
- https://www.kucoin.com/news/flash/gpt-6-sol-begins-internal-testing-6x-faster-than-astra
- https://x.com/wallstengine/status/2092328264060764586
- https://www.kucoin.com/news/flash/openai-completes-bel-pre-training-may-become-base-for-gpt-6-and-astra
- https://thewincentral.com/gpt-6-bel-leak-openai-next-model/

## 8. Dados estruturados
```json
{
  "slug": "gpt-bel",
  "rumor_nome": "GPT Bel",
  "fabricante": "OpenAI",
  "status": "rumor-com-fonte",
  "atual": {
    "nome": "GPT-6 Astra",
    "data": "2026-09-03",
    "contexto_tokens": 1050000,
    "preco_input_1m": 10.0,
    "preco_output_1m": 50.0,
    "swe_bench_verified": null,
    "gpqa_diamond": 96.0,
    "lmarena_elo": null,
    "fonte": "https://www.orcarouter.ai/blog/gpt-6-astra-successor-leak"
  },
  "rumor": {
    "contexto_tokens": null,
    "preco_input_1m": null,
    "claims": [
      "Codinome 'Bel' = rodada de pre-treinamento com mais de 10 trilhoes de parametros, sucessora de 'Doug' (fonte: X @synthwavedd, 25/ago/2026, sem confirmacao da OpenAI)",
      "'Bel' estaria reservado internamente enquanto times de alinhamento constroem sandboxes de avaliacao de seguranca",
      "OpenAI confirmou publicamente (8/set/2026) a existencia de um modelo futuro nao nomeado, 'significativamente mais capaz' que o GPT-6 Astra, sem data/preco/nome",
      "A alegacao especifica de '6x mais rapido que o Astra' em testes internos esta documentada para o codinome 'GPT-6 Sol', nao para 'Bel' -- ligacao entre os dois nomes nao confirmada em fonte primaria"
    ],
    "fonte": "https://www.orcarouter.ai/blog/gpt-6-astra-successor-leak"
  },
  "timeline": [
    {"versao": "GPT-5.5", "data": "2026-04-23", "contexto_tokens": 1000000, "preco_input_1m": 5.0, "preco_output_1m": 30.0},
    {"versao": "GPT-5.6 Sol", "data": "2026-07-09", "contexto_tokens": 1100000, "preco_input_1m": 4.0, "preco_output_1m": 20.0},
    {"versao": "GPT-6 Astra", "data": "2026-09-03", "contexto_tokens": 1050000, "preco_input_1m": 10.0, "preco_output_1m": 50.0}
  ],
  "aberto": false
}
```
