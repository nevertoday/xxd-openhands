// 现成自动化的数据，按页面语言取：中文来自 automations.js；英文页把 automations.en.js 里同一个 slug 的 one、when、does、setup 叠上去。
// automations.en.js 还没写好或缺某一条时，那几项显示中文，构建照常通过。
import { AUTOMATIONS, AUTOMATION_GROUPS } from "../data/automations.js";

const EN = Object.values(import.meta.glob("../data/automations.en.js", { eager: true }))[0]?.AUTOMATIONS_EN ?? {};

export const TRIGGERS = {
  schedule: { zh: "定时", en: "Scheduled", icon: "Clock" },
  event: { zh: "事件触发", en: "On an event", icon: "Zap" },
  manual: { zh: "手动", en: "Manual", icon: "MousePointerClick" },
};
export const triggersOf = (a) => [].concat(a.trigger);
export const groupTitle = (g, lang) => (lang === "en" ? g.en : g.title);
export const automationsFor = (lang) => AUTOMATIONS.map((a) => (lang === "en" ? { ...a, ...EN[a.slug] } : a));
export { AUTOMATIONS, AUTOMATION_GROUPS };
