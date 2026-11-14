// 英文底稿：非全站语言的全部文字都照这个结构写（src/i18n/<语言>.js），缺的键显示这里的英文。
// {名字} 是占位，由 fmt() 换成值，翻译时原样保留。
// 这些语言只有首页和新手入门三课；完整教程、现成自动化、How-to、Wiki、常见问题链到英文版，所以导航里写明「英文」。
export default {
  ui: {
    brand: "OpenHands for beginners",
    desc: "Put OpenHands to work even if you don't code: three beginner lessons, in plain words.",
    skip: "Skip to content",
    menu: "Open menu",
    search: "Search the guide",
    termMore: "Read more",
    searchPh: "Search lessons, steps, automations, terms…",
    searchEmpty: "Nothing found. Try another word",
    look: "Appearance",
    lang: "Language",
    repo: "This guide on GitHub",
    repoMore: "More links: the OpenHands repo, the official docs",
    repoDefault: "Default",
    // 三个链接：[名字, 一句说明]，顺序固定（本教程、OpenHands 仓库、官方文档）
    repos: [
      ["This guide", "Source for this guide; file issues here"],
      ["OpenHands", "The official repo, MIT licensed"],
      ["Official docs", "The source of truth for commands and behavior"],
    ],
    navLabel: "Site navigation",
    start: "Start",
    home: "Home",
    lessons: "Beginner track: start here",
    more: "More (in English)",
    main: "Full guide: 9 steps",
    autos: "Prebuilt automations",
    howto: "How-to: how exactly",
    wiki: "Wiki: what is it",
    faq: "FAQ",
    toc: "On this page",
    tocLabel: "On this page",
    hintMain: "Full guide (English)",
    hintLesson: "Beginner track",
    hintFaq: "FAQ (English)",
    hintAuto: "Prebuilt automation (English)",
    section: "Section",
    // {openhands}、{docs}、{github}、{skeleton} 会换成链接
    foot: "An unofficial beginner's guide to {openhands}, not its official docs. OpenHands is made by the OpenHands contributors (MIT license); the official repo and {docs} are the source of truth for commands and behavior. Source and feedback for this guide are on {github}; the site skeleton comes from {skeleton}.",
    // {docs} 换成的链接文字
    docs: "docs",
    // 顶栏「外观」面板（UI Kit 的外观设置组）
    appearance: {
      group: "Appearance", theme: "Theme", light: "Light", dark: "Dark", system: "System",
      corners: "Rounded corners", cornersDesc: "Off keeps every corner square",
      accent: "Accent", accentDesc: "Used for buttons, selection and focus",
    },
  },

  home: {
    h1: "Someone told you to try OpenHands? Start here",
    // lead：前半句、荧光笔那一句、后半句
    lead: ["OpenHands is an open-source AI coding agent. You hand it a task, and it runs the commands, edits the files and opens the PR itself. It can even start work on a schedule. The official docs are written for engineers. This guide walks you through setting it up in plain words, ", "even if you don't code", "."],
    cta: ["Start here if you're new", "I code: the full guide (English)"],
    ctaNote: "The beginner track is three lessons, about 30 minutes.",
    painH: "Stuck here?",
    PAIN: [
      "You open the official docs and see npm, Docker and uv before you know which one to install.",
      "Agent Canvas, Agent Server, backends, ACP, Cloud, SDK: so many names, and no clue which one is for you.",
      "You've heard it edits files and runs commands on its own, and you worry it will mess up the rest of your computer.",
      "You don't know what it costs, or whether you need accounts with a pile of AI companies first.",
    ],
    diffH: "What this guide does differently",
    diffW: "Where you get stuck", diffA: "Reading the official docs alone", diffB: "With this guide",
    DIFF: [
      ["Installing", "Several install options side by side; you pick", "One path: the desktop app, no terminal needed"],
      ["Picking a model", "A long list of providers and model names", "OpenHands itself is free. Already have a key or subscription? Use it. Otherwise one OpenHands Cloud key: a $10 top-up first, and models marked Free don't use it"],
      ["What it can touch", "The docs warn the agent can access your whole filesystem", "The first time, it works only inside a new, empty folder"],
    ],
    lessonsH: "Beginners need just three lessons",
    lessonsP: "Read them in order, about 30 minutes in all. After these three you can put it to work. Everything else on the site is for looking up later.",
    lessonsLabel: "Beginner track: 3 lessons",
    fitH: "Is it for you?", yesH: "Yes, if", noH: "Not yet, if",
    YES: [
      "Someone recommended OpenHands and the official docs lost you",
      "You've used a chat AI like ChatGPT or Claude and want an AI that does the work",
      "You can spare half an hour to follow along step by step",
    ],
    NO: [
      "You only want to ask questions or write text: a regular chat AI is enough",
      "The computer isn't yours to install software on: ask whoever runs it first",
      "You want to start on an important work project: practice in an empty folder first, then read the full guide",
    ],
    devH: "If you write code",
    devP: "Today OpenHands centers on Agent Canvas (the control center in your browser) and the Agent Server (the backend that runs agents, built on the Python SDK). One Canvas can connect to several backends: your machine, Docker, a VM or OpenHands Cloud. Besides the built-in OpenHands agent, it can run Claude Code, Codex or Gemini CLI through ACP. Below is the path one conversation takes, and the 9-step full guide.",
    // 完整教程目前只有英文和中文
    devNote: "The full guide is in English (and Chinese) for now.",
    // FLOW：每个是 [标题, 说明]，图标和顺序固定
    FLOW: [
      ["You hand a task over in Agent Canvas", "Conversations, files, terminals, model settings and automations all live in this one screen."],
      ["A backend takes the job", "The Agent Server runs the conversation and its tools. Whichever machine it runs on is whose files the agent can reach."],
      ["The agent thinks with your model", "The built-in OpenHands agent, or an ACP agent like Claude Code or Codex, using the model you connected."],
      ["It works in the workspace", "It reads and writes files, runs commands and opens PRs. Automations can start conversations on a schedule or an event."],
    ],
    CONN: ["hands off", "starts", "acts"],
    stepsLabel: "Full guide: {n} steps",
  },

  // 新手入门三课在导航、首页路线图里的标题、时间、简介（顺序：1 它能帮你什么、2 装上它、3 第一次用）
  lessons: [
    { title: "What it does for you", minutes: "5 minutes", sum: "An AI that does the work: what you need, what it costs, what the risks are" },
    { title: "Install it", minutes: "10 minutes", sum: "Download the desktop app, open it, get an OpenHands Cloud API key" },
    { title: "Use it for the first time", minutes: "15 minutes", sum: "Finish first-time setup, then have it build a small web page in an empty folder" },
  ],

  // 一课的页面框架
  lesson: {
    eyebrow: "Beginner track · lesson {n} of {total}",
    prog: "Progress: lesson {n} of {total}",
    nav: "Previous and next lesson",
    prev: "Previous",
    next: "Next",
    title: "Lesson {n}: {title}",
    tldr: "In one line",
  },

  // 新手三课里用到的术语：虚线词显示的文字和悬停的一句话（键和 src/data/glossary.js 一样；点进去是英文 Wiki）
  terms: {
    OpenHands: { label: "OpenHands", tip: "An open-source coding-agent project: the AI runs commands, edits files and opens PRs while you watch and decide." },
    代理: { label: "agent", tip: "An AI that acts on its own: it runs commands, reads and writes files, and keeps trying until the task is done." },
    模型: { label: "model", tip: "The large language model doing the thinking, such as Claude, GPT or Gemini. OpenHands doesn't include one; you connect your own." },
    "API key": { label: "API key", tip: "A secret string the model provider gives you, like a key card. It's how you pay for model calls. Never share it." },
    "OpenHands Cloud": { label: "OpenHands Cloud", tip: "The hosted version run by the OpenHands team. Nothing to install; sign in and pay for what you use." },
    Docker: { label: "Docker", tip: "Software that runs programs in isolated containers. OpenHands uses it to keep the agent boxed in." },
    终端: { label: "terminal", tip: "The window where you type commands. Terminal on a Mac, PowerShell on Windows." },
    对话: { label: "conversation", tip: "One task you hand to the agent. Each has its own history and settings; start a new one for a new task." },
    工作区: { label: "workspace", tip: "The folder the agent can read and write. It should only touch what's inside." },
  },

  // 正文里用到的组件
  comp: {
    demoAlt: "Demo: one sentence in the water folder; OpenHands creates the files, tries the page, checks it, and hands back a small page that counts glasses of water",
    demoCap: "By the end of lesson 3, you'll have made this yourself.",
    callout: { ok: "You should see", warn: "Heads up", no: "Don't do this", tip: "Tip" },
    copyTitle: "Copy this",
    copy: "Copy",
    cmdDone: "Command copied",
    cmdLabel: "Copy command: {c}",
    reply: "Illustration: roughly what its reply looks like",
    // 每页末尾一行：{lead} {gh 链接}{faq[0]}{faq[1] 链接}{faq[2]}
    feedback: {
      lead: "Something on this page unclear, or didn't work as written?",
      gh: "Bring it up on GitHub",
      faq: [". Or check the ", "FAQ", " first."],
    },
    // 首页、常见问题末尾的「提问和讨论」卡片
    contact: {
      h: "Questions and discussion",
      p: "Stuck on a step, found something unclear, or built something with OpenHands you'd like to show? Bring it to GitHub. The questions that come up most get worked into the guide. Writing in your own language is fine.",
      faq: ["Before asking, check the ", "FAQ", ": many answers are already there."],
      btn: "Ask or discuss on GitHub",
      x: "The author is on X",
      privacy: "Before sending screenshots, blur out API keys, company code and account details.",
    },
  },
};
