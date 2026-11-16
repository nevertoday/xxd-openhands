import { EXTRA } from "../i18n/index.js";
// 站点结构的唯一来源：左侧导航、首页路线图、上一步 / 下一步、How-to 目录、搜索都从这里读。
// ready: false 的页面还没写，导航里显示「编写中」，不给链接。
// 中文在根路径，英文在 /en/ 下（同样的 slug）。英文文字放在各条目的 en: {} 里，用 t(x, key, lang) 取。

const BASE = (import.meta.env?.BASE_URL || "/").replace(/\/$/, "");
/** 网站的语言。zh、en 是全站；其他语言只有首页和新手入门三课，别的页面链到英文版（full: false）。 */
export const LANGS = [
  { code: "en", name: "English", html: "en", full: true },
  { code: "zh", name: "中文", html: "zh-CN", full: true },
  { code: "ja", name: "日本語", html: "ja" },
  { code: "ko", name: "한국어", html: "ko" },
  { code: "es", name: "Español", html: "es" },
  { code: "pt", name: "Português", html: "pt-BR" },
  { code: "fr", name: "Français", html: "fr" },
  { code: "de", name: "Deutsch", html: "de" },
  { code: "ru", name: "Русский", html: "ru" },
  { code: "ar", name: "العربية", html: "ar", dir: "rtl" },
];
export const langInfo = (lang) => LANGS.find((l) => l.code === lang) ?? LANGS[1];
const PREFIXED = LANGS.filter((l) => l.code !== "zh").map((l) => l.code);
const PREFIX_RE = new RegExp(`^/(${PREFIXED.join("|")})(?=/|$)`);
/** 当前页面的语言：看路径前缀（/en/、/ja/……），没有前缀是中文 */
export const langOf = (pathname = "") => pathname.slice(BASE.length).match(PREFIX_RE)?.[1] ?? "zh";
/** 这种语言有没有全站（zh、en 有；其他语言只有首页和新手入门） */
export const isFull = (lang) => langInfo(lang).full === true;
/** 只在全站语言里存在的页面（完整教程、How-to、现成自动化、Wiki、常见问题）：非全站语言链到英文版 */
export const fullLang = (lang) => (isFull(lang) ? lang : "en");
/** 站内链接：部署在子路径时自动加前缀；非中文加 /<语言> */
export const link = (path, lang = "zh") => `${BASE}${lang === "zh" ? "" : "/" + lang}${path}`;
/** 同一页在另一种语言里的地址：那种语言没有这一页，就去它的首页；404 页去首页 */
export const langHref = (pathname, target) => {
  const rel = (pathname.slice(BASE.length) || "/").replace(PREFIX_RE, "") || "/";
  if (/^\/404(\.html|\/)?$/.test(rel)) return link("/", target);
  if (isFull(target) || rel === "/" || rel.startsWith("/start/")) return link(rel, target);
  return link("/", target);
};
/** 取某个对象在当前语言下的字段：先找 x[lang][key]，再找 x.en[key]（非中文的兜底），最后是中文 */
export const t = (x, key, lang) => (lang === "zh" ? x[key] : x[lang]?.[key] ?? x.en?.[key] ?? x[key]);

/** 这个教程站自己的仓库（反馈、源码） */
export const REPO = "https://github.com/nevertoday/xxd-openhands";
/** OpenHands 本身和官方文档 */
export const OPENHANDS = "https://github.com/OpenHands/OpenHands";
export const DOCS = "https://docs.openhands.dev";
/** 本站骨架的来源 */
export const SKELETON = "https://github.com/nevertoday/xxd-pstack";

// 新手入门：给没写过代码、只和 AI 聊过天的人。三课，一条路走到底：桌面版 → OpenHands Cloud 的 key → 在空文件夹里做一件小事。
export const LESSONS = [
  { n: 1, slug: "1-why", title: "它能帮你什么", minutes: "5 分钟", sum: "会自己动手的 AI：要准备什么，花什么钱，有什么风险", en: { title: "What it does for you", minutes: "5 minutes", sum: "An AI that does the work: what you need, what it costs, what the risks are" } },
  { n: 2, slug: "2-install", title: "装上它", minutes: "10 分钟", sum: "下载桌面版，第一次打开，拿一个 OpenHands Cloud 的 API key", en: { title: "Install it", minutes: "10 minutes", sum: "Download the desktop app, open it, get an OpenHands Cloud API key" } },
  { n: 3, slug: "3-first-use", title: "第一次用", minutes: "15 分钟", sum: "走完首次设置，在空文件夹里让它做一个小网页", en: { title: "Use it for the first time", minutes: "15 minutes", sum: "Finish first-time setup, then have it build a small web page in an empty folder" } },
];
// 其他语言的新手入门标题、时间、简介在 src/i18n/<语言>.js 的 lessons 里，按顺序叠到这里
for (const [code, d] of Object.entries(EXTRA)) (d.lessons || []).forEach((l, i) => { if (LESSONS[i]) LESSONS[i][code] = l; });
export const lessonHref = (s, lang = "zh") => link(`/start/${s.slug}/`, lang);

export const STEPS = [
  { n: 0, slug: "0-what", title: "OpenHands 是什么", minutes: "读 5 分钟", ready: true, sum: "Agent Canvas、Agent Server、后端、模型，各管什么", en: { title: "What OpenHands is", minutes: "5-minute read", sum: "Agent Canvas, Agent Server, backends and models: what each one does" } },
  { n: 1, slug: "1-install", title: "安装 Agent Canvas", minutes: "10 分钟", ready: true, sum: "桌面版、npm、npx、Docker 几种装法，挑一种", en: { title: "Install Agent Canvas", minutes: "10 minutes", sum: "Desktop app, npm, npx or Docker: pick one" } },
  { n: 2, slug: "2-model", title: "接上模型", minutes: "10 分钟", ready: true, sum: "首次设置、模型配置、存几套 LLM Profile", en: { title: "Connect a model", minutes: "10 minutes", sum: "First-time setup, model settings, saving LLM profiles" } },
  { n: 3, slug: "3-first-conversation", title: "第一个对话", minutes: "15 分钟", ready: true, sum: "开一个对话，交代清楚，看它干活，检查结果", en: { title: "Your first conversation", minutes: "15 minutes", sum: "Start a conversation, brief it well, watch it work, check the result" } },
  { n: 4, slug: "4-agents", title: "换一个代理：Claude Code、Codex 也能用", minutes: "10 分钟", ready: true, sum: "通过 ACP 接上别的代理，用 Agent Profile 存好设置", en: { title: "Switch agents: Claude Code and Codex work too", minutes: "10 minutes", sum: "Connect other agents through ACP and save them as agent profiles" } },
  { n: 5, slug: "5-backends", title: "换个地方跑：后端和沙盒", minutes: "15 分钟", ready: true, sum: "本机、Docker、服务器、OpenHands Cloud，在哪跑、能碰到什么", en: { title: "Run it somewhere else: backends and sandboxes", minutes: "15 minutes", sum: "Your machine, Docker, a server or OpenHands Cloud: where it runs and what it can reach" } },
  { n: 6, slug: "6-automations", title: "让它按时自己干活", minutes: "15 分钟", ready: true, sum: "定时或事件触发的自动化，从现成的开始", en: { title: "Let it work on a schedule", minutes: "15 minutes", sum: "Automations that run on a schedule or an event, starting from prebuilt ones" } },
  { n: 7, slug: "7-customize", title: "教它你的规矩：技能、插件、MCP", minutes: "15 分钟", ready: true, sum: "AGENTS.md、技能、插件，再用 MCP 接上外部工具", en: { title: "Teach it your rules: skills, plugins, MCP", minutes: "15 minutes", sum: "AGENTS.md, skills and plugins, plus MCP for outside tools" } },
  { n: 8, slug: "8-beyond", title: "再往前走：自托管、团队、SDK", minutes: "随用随看", ready: true, sum: "放到服务器上给团队用，在手机上看，用 SDK 自己搭", en: { title: "Going further: self-hosting, teams, the SDK", minutes: "As needed", sum: "Host it on a server for a team, check in from your phone, build your own with the SDK" } },
];
export const stepHref = (s, lang = "zh") => link(`/guide/${s.slug}/`, lang);

export const HOWTO = [
  { group: "在真实项目里", en: { group: "In real projects" }, items: [
    { slug: "new-codebase", title: "接手一个陌生项目", en: { title: "Take over an unfamiliar project" } },
    { slug: "issue-to-pr", title: "把一个 GitHub issue 交给它做成 PR", en: { title: "Turn a GitHub issue into a PR" } },
    { slug: "code-review", title: "让它帮你审 PR", en: { title: "Have it review a PR" } },
    { slug: "qa-changes", title: "改完让它像用户一样试一遍", en: { title: "Have it try your changes like a user" } },
    { slug: "dependency-upgrades", title: "升级依赖", en: { title: "Upgrade dependencies" } },
    { slug: "vulnerability-remediation", title: "修安全漏洞", en: { title: "Fix security vulnerabilities" } },
  ]},
  { group: "提示词", en: { group: "Prompts" }, items: [
    { slug: "recipes", title: "照抄就能用的提示词", en: { title: "Copy-paste prompts" } },
    { slug: "good-instructions", title: "怎么交代，它才不跑偏", en: { title: "How to brief it so it stays on track" } },
  ]},
  { group: "环境和部署", en: { group: "Setup and hosting" }, items: [
    { slug: "docker-sandbox", title: "把它关进 Docker 里跑", en: { title: "Run it inside Docker" } },
    { slug: "parallel", title: "同时开好几个对话", en: { title: "Run several conversations at once" } },
    { slug: "server", title: "放到服务器上，一直开着", en: { title: "Keep it running on a server" } },
    { slug: "phone", title: "在手机上看它干活", en: { title: "Watch it work from your phone" } },
    { slug: "local-llm", title: "用本地模型", en: { title: "Use a local model" } },
    { slug: "cloud", title: "用 OpenHands Cloud", en: { title: "Use OpenHands Cloud" } },
    { slug: "team", title: "和团队一起用", en: { title: "Use it with your team" } },
  ]},
  { group: "自动化", en: { group: "Automations" }, items: [
    { slug: "slack-digest", title: "每天自动汇总 Slack", en: { title: "Get a daily Slack digest" } },
    { slug: "custom-automation", title: "自己写一个自动化", en: { title: "Write your own automation" } },
  ]},
  { group: "日常维护", en: { group: "Upkeep" }, items: [
    { slug: "cost", title: "控制花费", en: { title: "Keep costs down" } },
    { slug: "update-remove", title: "更新、停止、卸载", en: { title: "Update, stop, uninstall" } },
    { slug: "troubleshoot", title: "打不开、连不上怎么办", en: { title: "It won't open or connect" } },
  ]},
];
export const howtoHref = (slug, lang = "zh") => link(`/howto/${slug}/`, lang);
export const HOWTO_FLAT = HOWTO.flatMap((g) => g.items.map((i) => ({ ...i, group: g.group, groupEn: g.en.group })));

// 一条读下去的路：每篇 How-to 末尾指向下一篇。新加的 How-to 要排进来，不然构建报错。
export const HOWTO_PATH = [
  "new-codebase", "good-instructions", "recipes", "issue-to-pr", "code-review", "qa-changes",
  "docker-sandbox", "parallel", "cost", "dependency-upgrades", "vulnerability-remediation",
  "slack-digest", "custom-automation", "local-llm", "cloud", "team", "server", "phone", "update-remove", "troubleshoot",
];
{
  const a = [...HOWTO_PATH].sort().join(), b = HOWTO_FLAT.map((h) => h.slug).sort().join();
  if (a !== b) throw new Error(`HOWTO_PATH 和 HOWTO 对不上：\n${a}\n${b}`);
}
export const howtoNext = (slug) => HOWTO_FLAT.find((h) => h.slug === HOWTO_PATH[HOWTO_PATH.indexOf(slug) + 1]) ?? null;

export const wikiHref = (slug, lang = "zh") => link(`/wiki/${slug}/`, lang);

/** 现成自动化：速查页和每个自动化的详情页（数据在 automations.js） */
export const AUTOMATIONS_NAV = { title: "现成自动化", en: { title: "Prebuilt automations" } };
export const automationHref = (slug, lang = "zh") => link(slug ? `/automations/${slug}/` : "/automations/", lang);

export { GLOSSARY } from "./glossary.js";
