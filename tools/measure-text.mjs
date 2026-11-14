// npm run assets：先在 Chrome 里用 canvas 量出插画和门卡里每段文字的宽度（写进 tools/text-widths.json），
// 再运行 tools/build_assets.py 生成图片。build_assets.py 会用这些宽度算卡片多宽，文字放不下就报错。
// 用本机的 Google Chrome（无界面模式），量完就关掉。
import { execFileSync, spawn } from "node:child_process";
import { existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const FILE = new URL("./text-widths.json", import.meta.url);
const need = JSON.parse(execFileSync("python3", ["tools/build_assets.py", "--need"], { encoding: "utf8" }));
const widths = existsSync(FILE) ? JSON.parse(readFileSync(FILE, "utf8")) : {};

if (need.length) {
  const CHROME = process.env.CHROME || "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
  const port = 9300 + Math.floor(Math.random() * 500);
  const prof = mkdtempSync(join(tmpdir(), "measure-"));
  const chrome = spawn(CHROME, ["--headless=new", `--remote-debugging-port=${port}`, `--user-data-dir=${prof}`, "about:blank"], { stdio: "ignore" });
  try {
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
    let page;
    for (let i = 0; i < 50 && !page; i++) {
      try { page = (await (await fetch(`http://127.0.0.1:${port}/json/list`)).json()).find((p) => p.type === "page"); } catch { await sleep(200); }
    }
    const ws = new WebSocket(page.webSocketDebuggerUrl);
    await new Promise((r) => ws.addEventListener("open", r));
    const expr = `(async () => { await document.fonts.ready; const c = document.createElement("canvas").getContext("2d");
      return ${JSON.stringify(need)}.map(([f, s]) => { c.font = f; return Math.ceil(c.measureText(s).width); }); })()`;
    const res = await new Promise((r) => {
      ws.addEventListener("message", (e) => { const m = JSON.parse(e.data); if (m.id === 1) r(m.result.result.value); });
      ws.send(JSON.stringify({ id: 1, method: "Runtime.evaluate", params: { expression: expr, awaitPromise: true, returnByValue: true } }));
    });
    need.forEach(([f, s], i) => { widths[`${f}|${s}`] = res[i]; });
    ws.close();
  } finally {
    const gone = new Promise((r) => chrome.once("exit", r));
    chrome.kill();
    await gone;
    rmSync(prof, { recursive: true, force: true, maxRetries: 5, retryDelay: 200 });
  }
  const sorted = Object.fromEntries(Object.entries(widths).sort(([a], [b]) => a.localeCompare(b)));
  writeFileSync(FILE, JSON.stringify(sorted, null, 1) + "\n");
  console.log(`✓ 量了 ${need.length} 段文字，存进 tools/text-widths.json`);
}
execFileSync("python3", ["tools/build_assets.py"], { stdio: "inherit" });
