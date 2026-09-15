// Gera guia/index.html a partir de modelos/*.md + data/modelos.json.
// Uso: node scripts/extrai-dados.mjs && node scripts/gera-pagina.mjs
import { readFileSync, writeFileSync } from 'node:fs';

const ROOT = new URL('../', import.meta.url).pathname;
const DATA = JSON.parse(readFileSync(ROOT + 'data/modelos.json', 'utf8'));
const ESTADO = '2026-09-15';
const REPO = 'https://github.com/inematds/newia-oct2026';

// Ordem do anúncio original
const ORDEM = [
  ['gpt-bel', '🟢'], ['gpt-6-sol', '🟢'], ['claude-fable-5-2', '🟠'], ['claude-opus-5-1', '🟠'],
  ['grok-4-7', '⚫'], ['deepseek-v4-1-pro', '🐋'], ['glm-5-5', '🔷'], ['kimi-k3-1', '🌙'],
  ['qwen-4', '🟣'], ['gemini-4', '💎'], ['muse-spark-1-4', '♾️'], ['xiaomi-mimo-v3', '📱'],
];
const byslug = Object.fromEntries(DATA.map(m => [m.slug, m]));
const M = ORDEM.map(([s, e]) => ({ ...byslug[s], emoji: e }));

// ---------- helpers ----------
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const fmtTok = n => n == null ? '—' : n >= 1e6 ? (n / 1e6).toFixed(n % 1e6 ? 2 : 0).replace('.', ',') + 'M' : Math.round(n / 1e3) + 'K';
const fmtUsd = n => n == null ? '—' : 'US$ ' + (n < 1 ? n.toFixed(2) : n.toFixed(n % 1 ? 2 : 0)).replace('.', ',');
const fmtData = d => { if (!d) return '—'; const [y, m, dd] = d.split('-'); return dd ? `${dd}/${m}/${y}` : `${m}/${y}`; };
const STATUS = {
  'rumor-sem-fonte': ['Rumor sem fonte', 'st-none'],
  'rumor-com-fonte': ['Rumor com fonte', 'st-src'],
  'anunciado': ['Anunciado oficialmente', 'st-ann'],
  'lancado': ['Lançado', 'st-ok'],
};

// ---------- mini markdown -> html ----------
function inline(s) {
  s = esc(s);
  s = s.replace(/`([^`]+)`/g, '<code>$1</code>');
  s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  s = s.replace(/\[([^\]]+)\]\((https?:[^)\s]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
  s = s.replace(/(^|[^"'>=])(https?:\/\/[^\s<)\]]+)/g, (m, p, u) => `${p}<a href="${u}" target="_blank" rel="noopener">${u.replace(/^https?:\/\/(www\.)?/, '').slice(0, 48)}${u.length > 56 ? '…' : ''}</a>`);
  return s;
}
function md(src) {
  const lines = src.split('\n'); let out = [], i = 0;
  const flushP = buf => { if (buf.length) { out.push(`<p>${inline(buf.join(' '))}</p>`); buf.length = 0; } };
  let p = [];
  while (i < lines.length) {
    const l = lines[i];
    if (/^```/.test(l)) { flushP(p); i++; while (i < lines.length && !/^```/.test(lines[i])) i++; i++; continue; }
    if (/^###\s/.test(l)) { flushP(p); out.push(`<h4>${inline(l.replace(/^###\s+/, ''))}</h4>`); i++; continue; }
    if (/^##\s/.test(l)) { flushP(p); out.push(`<h3>${inline(l.replace(/^##\s+/, '').replace(/^\d+\.\s*/, ''))}</h3>`); i++; continue; }
    if (/^#\s/.test(l)) { i++; continue; }
    if (/^>\s?/.test(l)) { flushP(p); out.push(`<blockquote>${inline(l.replace(/^>\s?/, ''))}</blockquote>`); i++; continue; }
    if (/^\|/.test(l)) {
      flushP(p); const rows = [];
      while (i < lines.length && /^\|/.test(lines[i])) { rows.push(lines[i]); i++; }
      const cells = r => r.replace(/^\||\|$/g, '').split('|').map(c => c.trim());
      const head = cells(rows[0]); const body = rows.slice(1).filter(r => !/^\|\s*:?-+/.test(r));
      out.push('<div class="tw"><table><thead><tr>' + head.map(h => `<th>${inline(h)}</th>`).join('') + '</tr></thead><tbody>' +
        body.map(r => '<tr>' + cells(r).map(c => `<td>${inline(c)}</td>`).join('') + '</tr>').join('') + '</tbody></table></div>');
      continue;
    }
    if (/^\s*[-*]\s/.test(l)) {
      flushP(p); const items = []; let depth0 = null;
      while (i < lines.length && /^\s*[-*]\s/.test(lines[i])) {
        const ind = lines[i].match(/^\s*/)[0].length; if (depth0 == null) depth0 = ind;
        items.push({ d: ind > depth0 ? 1 : 0, t: lines[i].replace(/^\s*[-*]\s+/, '') }); i++;
      }
      let html = '<ul>', open = false;
      for (const it of items) {
        if (it.d === 1) { if (!open) { html += '<ul>'; open = true; } html += `<li>${inline(it.t)}</li>`; }
        else { if (open) { html += '</ul>'; open = false; } html += `<li>${inline(it.t)}</li>`; }
      }
      if (open) html += '</ul>'; html += '</ul>'; out.push(html.replace(/<li>([^]*?)<\/li><ul>/g, '<li>$1<ul>')); continue;
    }
    if (/^\s*$/.test(l)) { flushP(p); i++; continue; }
    p.push(l.trim()); i++;
  }
  flushP(p);
  return out.join('\n');
}
function dossierHtml(slug) {
  const src = readFileSync(`${ROOT}modelos/${slug}.md`, 'utf8');
  const semJson = src.split(/^## 8\./m)[0];
  return md(semJson).replace(/<h3>/g, '<h3 class="dh">');
}

const uniq = arr => { const seen = new Set(); return arr.filter(m => { const k = m.atual.nome; if (seen.has(k)) return false; seen.add(k); return true; }); };
// ---------- charts (SVG inline; uma cor = âmbar; rumor = contorno) ----------
const W = 860;
function hbar(rows, { title, unit = '', fmt = v => String(v), log = false, nota = '' }) {
  const rh = 30, padL = 190, padR = 90, padT = 8;
  const H = padT + rows.length * rh + 34;
  const vals = rows.map(r => r.v).filter(v => v != null);
  const max = Math.max(...vals), min = Math.min(...vals);
  const x = v => log
    ? padL + (Math.log10(v) - Math.log10(Math.min(min, 0.1))) / (Math.log10(max * 1.2) - Math.log10(Math.min(min, 0.1))) * (W - padL - padR)
    : padL + v / (max * 1.08) * (W - padL - padR);
  let s = `<figure class="chart"><figcaption><strong>${esc(title)}</strong>${nota ? ` <span class="mut">· ${esc(nota)}</span>` : ''}</figcaption>`;
  s += `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(title)}">`;
  // grid
  const ticks = log ? [0.1, 1, 10, 100].filter(t => t <= max * 1.2 && t >= Math.min(min, 0.1)) : [0, .25, .5, .75, 1].map(f => max * f);
  for (const t of ticks) { const xx = x(t || (log ? 0.1 : 0)); s += `<line x1="${xx}" y1="${padT}" x2="${xx}" y2="${H - 30}" class="grid"/><text x="${xx}" y="${H - 12}" class="tick" text-anchor="middle">${fmt(t)}</text>`; }
  rows.forEach((r, i) => {
    const y = padT + i * rh;
    s += `<text x="${padL - 10}" y="${y + rh / 2 + 4}" class="lbl" text-anchor="end">${esc(r.l)}</text>`;
    if (r.v == null) { s += `<text x="${padL + 6}" y="${y + rh / 2 + 4}" class="mut tick">não verificado</text>`; return; }
    const x1 = x(r.v), x0 = padL;
    s += `<rect x="${x0}" y="${y + 6}" width="${Math.max(2, x1 - x0)}" height="${rh - 12}" rx="4" class="bar${r.rumor ? ' rumor' : ''}"><title>${esc(r.l)}: ${esc(fmt(r.v))} ${esc(unit)}</title></rect>`;
    s += `<text x="${x1 + 6}" y="${y + rh / 2 + 4}" class="val">${esc(fmt(r.v))}${unit ? ' ' + esc(unit) : ''}</text>`;
  });
  s += '</svg></figure>';
  return s;
}
function priceChart() {
  const rows = uniq(M.filter(m => m.atual.preco_input_1m != null)).sort((a, b) => a.atual.preco_input_1m - b.atual.preco_input_1m);
  const rh = 44, padL = 190, padR = 90, padT = 8, H = padT + rows.length * rh + 34;
  const lo = 0.1, hi = 100; const x = v => padL + (Math.log10(v) - Math.log10(lo)) / (Math.log10(hi) - Math.log10(lo)) * (W - padL - padR);
  let s = `<figure class="chart"><figcaption><strong>Preço da API — versão atual verificada (US$ por 1M tokens)</strong> <span class="mut">· escala logarítmica · barra cheia = entrada, barra clara = saída</span></figcaption><svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Preço por 1M tokens">`;
  for (const t of [0.1, 1, 10, 100]) { const xx = x(t); s += `<line x1="${xx}" y1="${padT}" x2="${xx}" y2="${H - 30}" class="grid"/><text x="${xx}" y="${H - 12}" class="tick" text-anchor="middle">${t}</text>`; }
  rows.forEach((m, i) => {
    const y = padT + i * rh, a = m.atual;
    s += `<text x="${padL - 10}" y="${y + 18}" class="lbl" text-anchor="end">${esc(a.nome.split(' (')[0])}</text>`;
    s += `<text x="${padL - 10}" y="${y + 32}" class="tick" text-anchor="end">${esc(m.fabricante)}</text>`;
    const xi = x(Math.max(a.preco_input_1m, lo)); s += `<rect x="${padL}" y="${y + 6}" width="${xi - padL}" height="12" rx="4" class="bar"><title>entrada ${fmtUsd(a.preco_input_1m)}</title></rect><text x="${xi + 6}" y="${y + 16}" class="val">${fmtUsd(a.preco_input_1m)}</text>`;
    if (a.preco_output_1m != null) { const xo = x(Math.max(a.preco_output_1m, lo)); s += `<rect x="${padL}" y="${y + 22}" width="${xo - padL}" height="12" rx="4" class="bar b2"><title>saída ${fmtUsd(a.preco_output_1m)}</title></rect><text x="${xo + 6}" y="${y + 32}" class="val">${fmtUsd(a.preco_output_1m)}</text>`; }
  });
  s += `</svg><div class="legend"><span><i class="sw"></i>entrada</span><span><i class="sw b2"></i>saída</span></div></figure>`;
  return s;
}
function timelineChart() {
  const t0 = Date.UTC(2025, 3, 1), t1 = Date.UTC(2026, 10, 15);
  const padL = 215, padR = 30, rh = 34, padT = 26, H = padT + M.length * rh + 30;
  const x = d => padL + (Date.parse(d + (d.length === 7 ? '-01' : '') + 'T00:00:00Z') - t0) / (t1 - t0) * (W - padL - padR);
  let s = `<figure class="chart"><figcaption><strong>Cadência de lançamentos por linhagem</strong> <span class="mut">· ponto cheio = versão lançada (data com fonte) · ponto vazado em out/2026 = o rumor · ponto âmbar maior = versão atual</span></figcaption><svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Linha do tempo de versões">`;
  for (let y = 2025, mo = 6; ; mo += 3) { if (mo > 11) { mo -= 12; y++; } const d = Date.UTC(y, mo, 1); if (d > t1) break; const xx = padL + (d - t0) / (t1 - t0) * (W - padL - padR); s += `<line x1="${xx}" y1="${padT - 6}" x2="${xx}" y2="${H - 26}" class="grid"/><text x="${xx}" y="${padT - 10}" class="tick" text-anchor="middle">${String(mo + 1).padStart(2, '0')}/${y}</text>`; }
  const xr = x('2026-10-15'); s += `<line x1="${xr}" y1="${padT - 6}" x2="${xr}" y2="${H - 26}" class="grid rumorline"/><text x="${xr}" y="${H - 8}" class="tick" text-anchor="middle">out/2026 (rumor)</text>`;
  M.forEach((m, i) => {
    const y = padT + i * rh + rh / 2;
    s += `<text x="${padL - 10}" y="${y + 4}" class="lbl" text-anchor="end">${esc(m.rumor_nome)}</text><line x1="${padL}" y1="${y}" x2="${W - padR}" y2="${y}" class="rail"/>`;
    for (const t of (m.timeline || [])) {
      if (!t.data || !/^\d{4}-\d{2}/.test(t.data)) continue; const ts = Date.parse(t.data.slice(0, 10) + 'T00:00:00Z'); if (ts < t0 || ts > t1) continue;
      const atual = m.atual && m.atual.data === t.data;
      s += `<circle cx="${x(t.data)}" cy="${y}" r="${atual ? 7 : 5}" class="dot${atual ? ' atual' : ''}"><title>${esc(t.versao)} — ${fmtData(t.data)}</title></circle>`;
    }
    s += `<circle cx="${xr}" cy="${y}" r="6" class="dot hollow"><title>${esc(m.rumor_nome)} — rumor, sem data confirmada</title></circle>`;
  });
  s += '</svg></figure>'; return s;
}

// ---------- panorama ----------
const nSrc = M.filter(m => m.status === 'rumor-com-fonte').length, nNone = M.filter(m => m.status === 'rumor-sem-fonte').length, nAnn = M.filter(m => m.status === 'anunciado' || m.status === 'lancado').length;
const nOpen = M.filter(m => m.aberto).length;

// ---------- tabela comparativa ----------
const tabela = `<div class="tw"><table class="cmp"><thead><tr><th>Rumor</th><th>Fabricante</th><th>Status do rumor</th><th>Versão atual verificada</th><th>Lançada em</th><th>Contexto</th><th>Entrada / saída (US$/1M)</th><th>Pesos abertos</th></tr></thead><tbody>` +
  M.map(m => { const [st, cls] = STATUS[m.status] || ['?', '']; const a = m.atual; return `<tr><td><a href="#${m.slug}">${m.emoji} <strong>${esc(m.rumor_nome)}</strong></a></td><td>${esc(m.fabricante)}</td><td><span class="st ${cls}">${st}</span></td><td>${esc(a.nome)}</td><td>${fmtData(a.data)}</td><td>${fmtTok(a.contexto_tokens)}</td><td>${a.preco_input_1m == null ? '—' : fmtUsd(a.preco_input_1m) + ' / ' + fmtUsd(a.preco_output_1m)}</td><td>${m.aberto ? 'sim' : 'não'}</td></tr>`; }).join('') + '</tbody></table></div>';

// ---------- rumores: afirmações ----------
const claimsHtml = M.map(m => `<div class="card claim"><h3>${m.emoji} ${esc(m.rumor_nome)} <span class="st ${(STATUS[m.status] || [])[1]}">${(STATUS[m.status] || [])[0]}</span></h3><ul>${(m.rumor.claims || []).map(c => `<li>${esc(c)}</li>`).join('')}</ul><p class="mut">${m.rumor.fonte ? 'Fonte do rumor: ' + inline(m.rumor.fonte) : 'Sem fonte pública encontrada para o nome do modelo.'}</p></div>`).join('');

// ---------- dossiês ----------
const dossies = M.map(m => { const [st, cls] = STATUS[m.status] || []; const a = m.atual; return `
<article class="dossie" id="${m.slug}">
  <header>
    <div><span class="chip">${esc(m.fabricante)}</span><h3>${m.emoji} ${esc(m.rumor_nome)}</h3>
    <p class="mut">Versão atual verificada: <strong>${esc(a.nome)}</strong>${a.data ? ' · ' + fmtData(a.data) : ''} · contexto ${fmtTok(a.contexto_tokens)} · ${a.preco_input_1m == null ? 'preço não verificado' : fmtUsd(a.preco_input_1m) + ' / ' + fmtUsd(a.preco_output_1m) + ' por 1M'}</p></div>
    <span class="st ${cls}">${st}</span>
  </header>
  <details><summary>Abrir dossiê completo (linhagem, versão atual, linha do tempo, rumor, utilidade, fontes)</summary>
  <div class="body">${dossierHtml(m.slug)}</div>
  <p class="mut small">Arquivo-fonte: <a href="${REPO}/blob/main/modelos/${m.slug}.md" target="_blank" rel="noopener">modelos/${m.slug}.md</a></p>
  </details>
</article>`; }).join('\n');

// ---------- página ----------
const html = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>12 Novas IAs — Outubro 2026 · rumores × versões atuais verificadas</title>
<meta name="description" content="Dossiê das 12 IAs anunciadas para outubro de 2026 (GPT Bel, GPT-6 Sol, Claude Fable 5.2, Opus 5.1, Grok 4.7, DeepSeek V4.1 Pro, GLM-5.5, Kimi K3.1, Qwen 4.0, Gemini 4.0, Muse Spark 1.4, Xiaomi MiMo-V3): o que é rumor, o que já existe, preços, contexto, linha do tempo e utilidade prática.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600;800&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">
<style>
  :root{
    --bg:#0c0c10; --bg2:#14141b; --card:#16161e; --line:#272730;
    --txt:#e9e9ee; --mut:#9a9aa6; --amb:#E2A23B; --amb2:#f0c070; --sky:#38bdf8; --pro:#cbd5e1;
    color-scheme:dark;
  }
  body.light{
    --bg:#f6f7f9; --bg2:#eceef2; --card:#ffffff; --line:#e1e3ea;
    --txt:#1a1a22; --mut:#5b5b68; --amb:#b9791d; --amb2:#a16207; --sky:#0369a1; --pro:#b45309;
    color-scheme:light;
  }
  body.light .hero .glow{opacity:.5}
  body.light pre{background:#0e0e14;color:#d6d6e0}
  body.light pre .c{color:#8a8a98}
  *{box-sizing:border-box}
  html{scroll-behavior:smooth}
  body{margin:0;background:var(--bg);color:var(--txt);font:16px/1.65 Inter,system-ui,sans-serif;-webkit-font-smoothing:antialiased}
  h1,h2,h3{font-family:Sora,sans-serif;line-height:1.15;margin:0}
  a{color:var(--amb);text-decoration:none}
  code,pre{font-family:"JetBrains Mono",monospace}
  code{font-size:.88em;background:var(--bg2);border:1px solid var(--line);border-radius:6px;padding:.05em .35em}
  .wrap{max-width:1160px;margin:0 auto;padding:0 22px}
  .mut{color:var(--mut)} .amb{color:var(--amb)} .small{font-size:.85rem}
  .chip{display:inline-block;font-size:.72rem;letter-spacing:.14em;text-transform:uppercase;color:var(--amb);font-weight:600;font-family:Sora}
  nav{position:sticky;top:0;z-index:30;backdrop-filter:blur(12px);background:rgba(12,12,16,.78);border-bottom:1px solid var(--line)}
  body.light nav{background:rgba(246,247,249,.85)}
  nav .wrap{display:flex;align-items:center;gap:22px;height:60px}
  nav .brand{display:flex;align-items:center;gap:8px;font-family:Sora;font-weight:800;letter-spacing:-.02em;color:var(--amb)}
  nav .brand .emoji{font-size:1.25rem}
  nav .sep{color:var(--mut);opacity:.45}
  nav .inema{color:var(--sky);font-weight:600;font-size:.88rem;font-family:Sora}
  nav .inema:hover{filter:brightness(1.15)}
  nav .pro{color:var(--pro);font-weight:600;font-size:.88rem;font-family:Sora}
  nav .pro:hover{filter:brightness(1.15)}
  nav .clubpro{display:inline-flex;align-items:center;gap:6px}
  nav .links{margin-left:auto;display:flex;align-items:center;gap:20px;font-size:.92rem}
  nav .links a.sec{color:var(--mut)} nav .links a.sec:hover{color:var(--txt)}
  .tgl{background:var(--bg2);border:1px solid var(--line);color:var(--txt);width:38px;height:38px;border-radius:10px;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;font-size:1.05rem}
  .tgl:hover{border-color:var(--amb)}
  .btn{display:inline-block;background:var(--amb);color:#1a1206;font-weight:600;padding:.6em 1.05em;border-radius:10px;font-family:Sora}
  .btn.ghost{background:transparent;color:var(--txt);border:1px solid var(--line)}
  nav .brand{white-space:nowrap}
  @media(max-width:760px){nav .links a.sec{display:none}}
  @media(max-width:540px){nav .wrap{gap:10px} nav .brand span.emoji{display:none} nav .links{gap:8px} nav .btn{padding:.45em .7em;font-size:.82rem} .tgl{width:32px;height:32px}}
  .hero{position:relative;overflow:hidden;border-bottom:1px solid var(--line)}
  .hero .glow{position:absolute;inset:-40% -20% auto auto;width:70%;height:600px;background:radial-gradient(closest-side,rgba(226,162,59,.22),transparent 70%);pointer-events:none}
  .hero .wrap{display:grid;grid-template-columns:1.1fr .9fr;gap:40px;align-items:center;padding:74px 22px}
  .hero h1{font-size:clamp(2.2rem,5vw,3.5rem);font-weight:800;letter-spacing:-.025em}
  .hero p.lead{font-size:1.18rem;color:var(--mut);margin:1.1em 0 1.6em;max-width:34ch}
  .hero .cta{display:flex;gap:12px;flex-wrap:wrap}
  .hero figure{margin:0;border-radius:16px;overflow:hidden;border:1px solid var(--line);box-shadow:0 30px 80px -30px #000}
  .hero figure img{width:100%;display:block}
  @media(max-width:780px){.hero .wrap{grid-template-columns:1fr;padding:48px 22px}}
  section{padding:62px 0;border-bottom:1px solid var(--line)}
  section h2{font-size:clamp(1.5rem,3.4vw,2.1rem);font-weight:800;letter-spacing:-.02em}
  section .sub{color:var(--mut);margin:.6em 0 2em;max-width:62ch}
  .grid{display:grid;gap:16px}
  .g3{grid-template-columns:repeat(3,1fr)} .g4{grid-template-columns:repeat(4,1fr)} .g2{grid-template-columns:repeat(2,1fr)}
  @media(max-width:820px){.g3,.g4{grid-template-columns:1fr 1fr}}
  @media(max-width:540px){.g2,.g3,.g4{grid-template-columns:1fr}}
  .card{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:20px}
  .card h3{font-size:1.05rem;margin-bottom:.4em}
  .card p{color:var(--mut);font-size:.92rem;margin:0}
  .card ul{margin:.4em 0 .8em;padding-left:1.1em;font-size:.92rem}
  .card li{margin:.25em 0}
  .stat{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:18px 20px}
  .stat b{display:block;font:800 2.4rem/1 Sora,sans-serif;color:var(--amb)}
  .stat span{color:var(--mut);font-size:.88rem}
  .st{display:inline-block;font-size:.72rem;font-weight:600;font-family:Sora;border-radius:999px;padding:.25em .7em;border:1px solid var(--line);white-space:nowrap;vertical-align:middle}
  .st-src{color:var(--amb);border-color:var(--amb)}
  .st-none{color:var(--mut)}
  .st-ann{color:var(--sky);border-color:var(--sky)}
  .st-ok{color:#9ece6a;border-color:#9ece6a}
  .tw{overflow-x:auto;margin:1em 0}
  table{border-collapse:collapse;width:100%;font-size:.88rem}
  th,td{text-align:left;padding:.55em .7em;border-bottom:1px solid var(--line);vertical-align:top}
  th{color:var(--mut);font-weight:600;font-size:.78rem;letter-spacing:.06em;text-transform:uppercase}
  .cmp td:first-child{white-space:nowrap}
  blockquote{margin:0 0 1em;padding:.7em 1em;border-left:3px solid var(--amb);background:var(--bg2);border-radius:0 10px 10px 0;color:var(--mut);font-size:.95rem}
  /* charts */
  .chart{margin:0 0 34px;background:var(--card);border:1px solid var(--line);border-radius:14px;padding:16px 18px 8px}
  .chart figcaption{font-size:.92rem;margin-bottom:10px}
  .chart{overflow-x:auto}
  .chart svg{width:100%;min-width:680px;height:auto;display:block;font-family:Inter,system-ui,sans-serif}
  .chart .grid{stroke:var(--line);stroke-width:1}
  .chart .rumorline{stroke:var(--amb);opacity:.5}
  .chart .rail{stroke:var(--line);stroke-width:1}
  .chart .tick{fill:var(--mut);font-size:11px}
  .chart .lbl{fill:var(--txt);font-size:12.5px;font-weight:500}
  .chart .val{fill:var(--txt);font-size:11.5px}
  .chart .bar{fill:var(--amb)}
  .chart .bar.b2{fill:var(--amb);opacity:.45}
  .chart .bar.rumor{fill:none;stroke:var(--amb);stroke-width:1.5}
  .chart .dot{fill:var(--mut);stroke:var(--card);stroke-width:2}
  .chart .dot.atual{fill:var(--amb)}
  .chart .dot.hollow{fill:none;stroke:var(--amb);stroke-width:1.5}
  .legend{display:flex;gap:16px;font-size:.82rem;color:var(--mut);padding:6px 0 4px}
  .legend .sw{display:inline-block;width:14px;height:10px;border-radius:3px;background:var(--amb);margin-right:6px;vertical-align:-1px}
  .legend .sw.b2{opacity:.45}
  /* dossiês */
  .dossie{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:20px 22px;margin-bottom:16px}
  .dossie header{display:flex;justify-content:space-between;gap:16px;align-items:flex-start;flex-wrap:wrap}
  .dossie header h3{font-size:1.3rem;margin:.2em 0 .3em}
  .dossie header p{margin:0;font-size:.92rem}
  .dossie details{margin-top:12px;border-top:1px solid var(--line);padding-top:10px}
  .dossie summary{cursor:pointer;color:var(--amb);font-family:Sora;font-weight:600;font-size:.92rem}
  .dossie .body{margin-top:12px;font-size:.95rem}
  .dossie .body h3.dh{font-size:1.02rem;margin:1.4em 0 .5em;color:var(--amb2)}
  .dossie .body h4{font-size:.95rem;margin:1em 0 .4em}
  .dossie .body ul{padding-left:1.2em} .dossie .body li{margin:.3em 0}
  .dossie .body p{margin:.5em 0}
  .dossie .body a{word-break:break-all}
  .claim h3{display:flex;justify-content:space-between;gap:8px;align-items:center;flex-wrap:wrap}
  footer{padding:46px 0;text-align:center;color:var(--mut);font-size:.9rem}
  .pill{display:inline-block;border:1px solid var(--line);border-radius:999px;padding:.3em .8em;font-size:.78rem;color:var(--mut);margin:0 4px}
</style>
</head>
<body>

<nav><div class="wrap">
  <a class="brand" href="#top"><span class="emoji">🔮</span> 12 Novas IAs</a>
  <span class="sep">|</span>
  <span class="clubpro">
    <a class="inema" href="https://inema.club" target="_blank" rel="noopener">INEMA.CLUB</a>
    <span class="sep">-</span>
    <a class="pro" href="https://inema.pro" target="_blank" rel="noopener">PRO</a>
  </span>
  <div class="links">
    <a class="sec" href="#como-ler">Como ler</a>
    <a class="sec" href="#panorama">Panorama</a>
    <a class="sec" href="#graficos">Gráficos</a>
    <a class="sec" href="#rumores">Rumores</a>
    <a class="sec" href="#dossies">Dossiês</a>
    <a class="sec" href="#utilidade">Utilidade</a>
    <button class="tgl" id="themeToggle" aria-label="Alternar tema" title="Alternar tema">🌙</button>
    <a class="btn" href="${REPO}" target="_blank" rel="noopener">GitHub</a>
  </div>
</div></nav>

<header class="hero" id="top">
  <div class="glow"></div>
  <div class="wrap">
    <div>
      <span class="chip">Dossiê · estado em ${fmtData(ESTADO)}</span>
      <h1>12 novas IAs anunciadas para <span class="amb">outubro de 2026</span></h1>
      <p class="lead">O que é rumor, o que já existe de verdade, quanto custa hoje e o que muda na prática — cada modelo comparado com a versão atual verificada da sua linhagem, com fontes.</p>
      <div class="cta">
        <a class="btn" href="#panorama">Ver o panorama</a>
        <a class="btn ghost" href="#dossies">Ir aos 12 dossiês</a>
      </div>
    </div>
    <figure><img src="assets/banner.jpg" alt="Banner: 12 novas IAs — outubro 2026, rumores × versões atuais verificadas"></figure>
  </div>
</header>

<section id="como-ler"><div class="wrap">
  <span class="chip">Como ler esta página</span>
  <h2>Rumor e fato ficam separados — de propósito</h2>
  <p class="sub">A lista das 12 IAs circulou como “notícia empolgante” sem fontes. Aqui cada nome foi pesquisado na web em ${fmtData(ESTADO)}: o que a linhagem já lançou (com URL), o que o rumor afirma e se alguma fonte pública o sustenta.</p>
  <div class="grid g3">
    <div class="card"><h3>✅ Verificado</h3><p>Número, data ou preço que tem <strong>URL-fonte</strong> (blog oficial, docs, model card, imprensa confiável). É o que você pode usar hoje.</p></div>
    <div class="card"><h3>🟠 Rumor com fonte</h3><p>O nome do modelo aparece em <strong>alguma fonte pública</strong> (leak, post no X, imprensa especializada), mas sem confirmação oficial. Trate como hipótese.</p></div>
    <div class="card"><h3>⚪ Rumor sem fonte</h3><p>Nenhuma fonte pública cita o nome. Muitas vezes o rumor descreve algo que <strong>a versão atual já faz</strong> — ou confunde codinomes.</p></div>
  </div>
</div></section>

<section id="panorama"><div class="wrap">
  <span class="chip">Panorama</span>
  <h2>O que a pesquisa encontrou</h2>
  <p class="sub">Dos 12 nomes, <strong>nenhum foi anunciado oficialmente</strong> até ${fmtData(ESTADO)}. Em compensação, quase todas as linhagens lançaram uma versão nova nos últimos 60 dias — o que explica por que os rumores soam plausíveis.</p>
  <div class="grid g4" style="margin-bottom:28px">
    <div class="stat"><b>${M.length}</b><span>modelos rumorados na lista</span></div>
    <div class="stat"><b>${nSrc}</b><span>rumores com alguma fonte pública</span></div>
    <div class="stat"><b>${nNone}</b><span>rumores sem fonte nenhuma</span></div>
    <div class="stat"><b>${nAnn}</b><span>anunciados oficialmente pelo fabricante</span></div>
  </div>
  ${tabela}
  <p class="mut small">“Versão atual verificada” = o modelo mais recente da linhagem com fonte primária. Preços são os de API pública em US$ por milhão de tokens; “—” = não verificado. ${nOpen} das 12 linhagens têm pesos abertos na versão atual.</p>
</div></section>

<section id="graficos"><div class="wrap">
  <span class="chip">Gráficos</span>
  <h2>Onde cada linhagem está hoje</h2>
  <p class="sub">Só entram dados verificados. Rumores aparecem apenas como marcador vazado — não têm número pra colocar em barra. Passe o mouse nas marcas pra ver o valor.</p>
  ${priceChart()}
  ${hbar(uniq(M.filter(m => m.atual.contexto_tokens != null)).sort((a, b) => b.atual.contexto_tokens - a.atual.contexto_tokens).map(m => ({ l: m.atual.nome.split(' (')[0], v: m.atual.contexto_tokens / 1e6 })), { title: 'Janela de contexto — versão atual verificada (milhões de tokens)', fmt: v => (Math.round(v * 100) / 100).toString().replace('.', ',') + 'M', nota: 'Muse Spark 1.3: a Meta não publica o número' })}
  ${hbar(uniq(M.filter(m => m.atual.gpqa_diamond != null)).sort((a, b) => b.atual.gpqa_diamond - a.atual.gpqa_diamond).map(m => ({ l: m.atual.nome.split(' (')[0], v: m.atual.gpqa_diamond })), { title: 'GPQA Diamond (%) — só onde há fonte para a versão atual', unit: '%', fmt: v => (Math.round(v * 10) / 10).toString().replace('.', ','), nota: 'benchmark de raciocínio científico; ausência = não verificado, não zero' })}
  ${timelineChart()}
</div></section>

<section id="rumores"><div class="wrap">
  <span class="chip">Os rumores, um a um</span>
  <h2>O que a lista afirma e o que dá pra verificar</h2>
  <p class="sub">Cada afirmação do anúncio original, com a fonte (quando existe) que cita o nome do modelo. O detalhe está no dossiê de cada um.</p>
  <div class="grid g2">${claimsHtml}</div>
</div></section>

<section id="dossies"><div class="wrap">
  <span class="chip">Dossiês · 12 modelos</span>
  <h2>Um dossiê por modelo</h2>
  <p class="sub">Linhagem, versão atual verificada, linha do tempo de versões, o que se sabe do rumor, o que muda na prática, utilidade para quem cria/ensina/programa no Brasil e todas as fontes. Cada dossiê também existe como markdown no repositório.</p>
  ${dossies}
</div></section>

<section id="utilidade"><div class="wrap">
  <span class="chip">Utilidade prática</span>
  <h2>Como usar isso hoje, sem esperar outubro</h2>
  <p class="sub">Leitura transversal dos 12 dossiês. O que já dá pra fazer com as versões atuais — e onde vale esperar.</p>
  <div class="grid g3">
    <div class="card"><h3>💸 Custo despencou na ponta aberta</h3><p>DeepSeek V4.1-Flash, MiMo-V2.5-Pro e GLM-5.3 entregam contexto de 1M por centavos de dólar por milhão de tokens. Para pipelines de volume (transcrição, resumo, classificação) eles já são a escolha racional — o “Pro” rumorado só muda o teto, não o piso.</p></div>
    <div class="card"><h3>🧠 Fronteira fechada: pague pelo agente, não pelo chat</h3><p>GPT-6 Astra e Claude Fable 5.1 custam US$10/50 por 1M. Faz sentido para tarefas longas de coding e pesquisa autônoma; para conversa e conteúdo, Opus 5, Sonnet 5, Gemini 3.1 Pro ou Grok 4.6 fazem o mesmo trabalho por 2 a 5× menos.</p></div>
    <div class="card"><h3>📚 Contexto de 1M virou padrão</h3><p>10 das 12 linhagens já operam com ~1M tokens na versão atual verificada (Grok 4.6 fica em 500K; a Meta não publica o número). O rumor de “1M de contexto” para DeepSeek e Gemini 4 não é novidade — é a linha de base. O diferencial real passa a ser a qualidade de recuperação em documentos longos, que os benchmarks públicos ainda medem mal.</p></div>
    <div class="card"><h3>🖥️ Rodar local: sim, mas não o flagship</h3><p>Qwen3.8-2.4T, Kimi K3 (2,8T) e GLM-5.3 (753B) têm pesos abertos, mas exigem cluster. Para GPU doméstica, as variantes Flash/menores das mesmas famílias (MiMo, Qwen, DeepSeek) são o caminho — os dossiês indicam quais.</p></div>
    <div class="card"><h3>🗓️ Cadência: 6 a 10 semanas entre versões</h3><p>O gráfico de cadência mostra que Gemini, GLM, Kimi e DeepSeek lançam a cada ~2 meses. Um “.1” ou “.5” em outubro é estatisticamente provável mesmo sem fonte — mas isso não valida os números do rumor.</p></div>
    <div class="card"><h3>⚠️ Cuidado com os codinomes</h3><p>“GPT Bel”, “GPT-6 Sol” e “Muse Spark 1.4” misturam codinomes reais de outros modelos (Sol é GPT-5.6; 1.3 já existe). Antes de planejar migração, confira o nome no changelog oficial do fabricante — os links estão em cada dossiê.</p></div>
  </div>
</div></section>

<section id="metodo"><div class="wrap">
  <span class="chip">Método</span>
  <h2>Como este dossiê foi feito</h2>
  <p class="sub">Para você poder refazer quando outubro chegar.</p>
  <div class="grid g3">
    <div class="card"><h3>1 · Pesquisa por linhagem</h3><p>Cada um dos 12 nomes foi pesquisado na web em ${fmtData(ESTADO)} com regra fixa: todo número precisa de URL na mesma linha; sem URL vira “não verificado”. Fontes primárias primeiro (docs, blog oficial, model card), depois imprensa e leaderboards.</p></div>
    <div class="card"><h3>2 · Dados estruturados</h3><p>Cada dossiê termina num bloco JSON (versão atual, preço, contexto, benchmarks, linha do tempo, afirmações do rumor). O script <code>scripts/extrai-dados.mjs</code> junta tudo em <code>data/modelos.json</code>.</p></div>
    <div class="card"><h3>3 · Página gerada</h3><p><code>scripts/gera-pagina.mjs</code> renderiza esta página e os gráficos SVG a partir do JSON e dos markdowns. Atualizou um dossiê? Roda os dois scripts e publica. Nada é escrito à mão duas vezes.</p></div>
  </div>
</div></section>

<footer>
  <div class="wrap">
    <div class="pill">12 dossiês em markdown</div><div class="pill">data/modelos.json</div><div class="pill">gráficos SVG inline</div><div class="pill">GitHub Pages</div>
    <p style="margin-top:18px">12 Novas IAs — Outubro 2026 · estado em ${fmtData(ESTADO)} · rumores não verificados independentemente ·
      <a href="${REPO}">inematds/newia-oct2026</a> ·
      <a href="https://inema.club">INEMA.CLUB</a></p>
  </div>
</footer>

<script>
  (function(){
    var KEY='newia-oct2026-theme';
    var b=document.body, t=document.getElementById('themeToggle');
    if(localStorage.getItem(KEY)==='light'){ b.classList.add('light'); t.textContent='☀️'; }
    t.addEventListener('click',function(){
      var light=b.classList.toggle('light');
      t.textContent=light?'☀️':'🌙';
      localStorage.setItem(KEY, light?'light':'dark');
    });
  })();
</script>
</body>
</html>`;

writeFileSync(ROOT + 'guia/index.html', html);
console.log('guia/index.html gerado:', (html.length / 1024).toFixed(0), 'KB');
