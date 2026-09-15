// Extrai o bloco JSON (secao 8) de cada modelos/*.md e grava data/modelos.json
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
const dir = new URL('../modelos/', import.meta.url).pathname;
const out = [];
for (const f of readdirSync(dir).filter(f => f.endsWith('.md')).sort()) {
  const md = readFileSync(join(dir, f), 'utf8');
  const m = md.match(/```json\s*([\s\S]*?)```/);
  if (!m) { console.error('sem JSON:', f); continue; }
  try { out.push(JSON.parse(m[1])); } catch (e) { console.error('JSON invalido em', f, e.message); }
}
writeFileSync(new URL('../data/modelos.json', import.meta.url).pathname, JSON.stringify(out, null, 2));
console.log(out.length, 'modelos extraidos');
