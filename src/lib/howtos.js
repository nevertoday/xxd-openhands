// How-to 的一句话和用时（读 MDX 的 frontmatter 原文，不 import 页面本身，免得布局和页面互相引用）
const RAW = {
  zh: import.meta.glob("../pages/howto/*.mdx", { query: "?raw", import: "default", eager: true }),
  en: import.meta.glob("../pages/en/howto/*.mdx", { query: "?raw", import: "default", eager: true }),
};
const field = (src, key) => src.match(new RegExp(`^${key}:\\s*"?(.*?)"?\\s*$`, "m"))?.[1] ?? "";
export const howtoMeta = (slug, lang) => {
  const l = lang === "en" ? "en" : "zh";
  const src = RAW[l][`../pages/${l === "en" ? "en/" : ""}howto/${slug}.mdx`];
  if (!src) throw new Error(`没有 How-to 页面：${l}/${slug}`);
  return { tldr: field(src, "tldr"), time: field(src, "time") };
};

// 哪些 How-to 在正文里链到了某个站内路径（比如 /automations/slack-standup-digest/）：自动化页据此链回手把手的那篇
export const howtosLinkingTo = (path) =>
  Object.entries(RAW.zh)
    .filter(([, src]) => src.includes(`](${path})`) || src.includes(`](${path}#`))
    .map(([file]) => file.match(/([^/]+)\.mdx$/)[1]);
