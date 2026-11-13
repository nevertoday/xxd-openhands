// 构建后检查（npm run check，先 npm run build）：
// 1. dist 里每个站内链接（href="/…"）都指向一个存在的页面或文件；
// 2. src/pages 里每个 <Term k="…"> 的键都在 src/data/glossary.js 里；
// 3. glossary.js 里每个 wiki: slug 在 wiki.js 和 wiki.en.js 里都有条目。
// 有问题就逐条列出来，退出码 1。
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { GLOSSARY } from "../src/data/glossary.js";
import { WIKI } from "../src/data/wiki.js";
import { WIKI_EN } from "../src/data/wiki.en.js";

const walk = (dir) => readdirSync(dir).flatMap((f) => (statSync(join(dir, f)).isDirectory() ? walk(join(dir, f)) : [join(dir, f)]));
const base = (process.env.BASE_PATH || "/").replace(/\/$/, "");
const bad = [];

if (!existsSync("dist")) { console.error("✗ 没有 dist/：先 npm run build"); process.exit(1); }
const broken = new Map();
let links = 0;
for (const file of walk("dist").filter((f) => f.endsWith(".html"))) {
  const page = "/" + file.slice("dist/".length).replace(/index\.html$/, "");
  for (const [, href] of readFileSync(file, "utf8").matchAll(/\shref="(\/(?!\/)[^"#?]*)/g)) {
    links++;
    const rel = decodeURIComponent(base && href.startsWith(base + "/") ? href.slice(base.length) : href);
    const target = join("dist", rel.endsWith("/") ? rel + "index.html" : rel);
    if (!existsSync(target)) broken.set(href, [...(broken.get(href) ?? []), page]);
  }
}
for (const [href, pages] of broken) bad.push(`站内链接 ${href} 不存在（${pages.length} 页用到，比如 ${pages.slice(0, 3).join("、")}）`);

const terms = new Map();
for (const file of walk("src/pages").filter((f) => /\.(mdx|astro)$/.test(f))) {
  for (const m of readFileSync(file, "utf8").matchAll(/<Term\s[^>]*?\bk=(?:"([^"]+)"|'([^']+)'|\{["']([^"']+)["']\})/g)) {
    const k = m[1] ?? m[2] ?? m[3];
    if (!GLOSSARY[k]) terms.set(k, [...(terms.get(k) ?? []), file]);
  }
}
for (const [k, files] of terms) bad.push(`<Term k="${k}"> 不在 glossary.js 里（${files.join("、")}）`);

const wikiZh = new Set(WIKI.map((w) => w.slug));
for (const [k, g] of Object.entries(GLOSSARY)) {
  if (!wikiZh.has(g.wiki)) bad.push(`术语「${k}」的 wiki: ${g.wiki} 在 wiki.js 里没有`);
  if (!WIKI_EN[g.wiki]) bad.push(`术语「${k}」的 wiki: ${g.wiki} 在 wiki.en.js 里没有`);
}

for (const b of bad) console.log(`✗ ${b}`);
console.log(bad.length ? `还有 ${bad.length} 处要改` : `✓ ${links} 个站内链接都通，术语和 Wiki 都对得上`);
process.exit(bad.length ? 1 : 0);
