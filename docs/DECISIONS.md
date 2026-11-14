# 决策记录

| 时间 | 决定 | 理由 | 依据 |
| --- | --- | --- | --- |
| 2026-11-13 | 复制 xxd-pstack 的整套骨架，只换内容 | 用户要「类似 pstack 那个项目」；骨架已经过多轮打磨（搜索、亮暗、手机、写作规矩） | `../xxd-pstack` 的 git log |
| 2026-11-13 | 第一版只做中文和英文 | 10 种语言要先有稳定的内容；pstack 站也是先中英、后加其他语言 | xxd-pstack 提交 `28c8474` 在中英之后才加 8 种语言 |
| 2026-11-13 | 去掉技能速查，换成「现成自动化」速查 | OpenHands 没有 pstack 那样一组要背的技能；它的现成自动化目录（27 个）最像「拿来就用」的那一层 | `extensions/automations/catalog/` |
| 2026-11-13 | 新手入门走桌面版 + OpenHands Cloud 的 key | 桌面版自带 Node.js 和 uv，不用开终端；一个 Cloud key 就能用多家模型，新手不用先去各家开账号。注意：拿这个 key 要先充至少 10 美元（`settings/api-keys-settings.mdx:18`），首页和第 1、2 课都写明了 | docs `agent-canvas/setup.mdx` Desktop App 一节；`first-time-setup.mdx` Set Up Your LLM 一节 |
| 2026-11-13 | 新手课让 AI 只在一个新建的空文件夹里干活 | 本机直接跑时，代理有你账号的全部文件权限 | OpenHands README Option 1 的 WARNING；docs `setup.mdx` 的 Treat agents… as untrusted |
| 2026-11-13 | 不部署、不建 GitHub 仓库 | 对外发布，要用户点头（后来用户同意了，见下面「建仓库」一行） | |
| 2026-11-13 | 术语表先定稿，再并行写作 | 7 个帮手同时写，术语键和 Wiki slug 是共享的，先固定就不会互相覆盖 | `src/data/glossary.js`、`docs/PLAN.md` 文件归属表 |
| 2026-11-13 | 新手第 3 课按代码里的向导顺序写，不按文档 | 文档写的顺序和 `onboarding-modal.tsx` 不一致；Say hello 那一步发的消息没有工作区，所以课里让读者先关掉它、打开空文件夹再发 | `OpenHands/src/components/…/onboarding-modal.tsx:42-52`、`say-hello-step.tsx:52-60` |
| 2026-11-13 | 7 条现成自动化的触发方式写成「定时 + 事件」两个值 | catalog 的 manifest 两种都声明了，只写一种会误导 | `extensions/automations/catalog/*/manifest.json` |
| 2026-11-13 | 上线前加上另外 8 种语言（日、韩、西、葡、法、德、俄、阿），范围照 pstack 站：首页 + 新手入门三课 + README，其余页面链到英文版 | 用户要求「上线之前 8 个语言版本也添加」；pstack 站的多语言就是这个范围，完整教程 9 步、19 篇 How-to 翻 8 遍成本高、维护难 | xxd-pstack 提交 `28c8474`；用户 2026-11-13 的回复 |
| 2026-11-13 | 新手三课的术语悬停解释也翻译（`src/i18n/<语言>.js` 的 `terms`），点进去是英文 Wiki | pstack 站这几种语言的术语直接显示中文，读者看不懂 | `src/components/Term.astro` |
| 2026-11-13 | 建仓库 `nevertoday/xxd-openhands`、部署到 `openhands.xiaoxiaodong.ai` | 用户回复「上线」 | |
| 2026-11-13 | 「10 美元」只算 OpenHands Cloud 这条路的代价：首页、第 1–3 课、常见问题都写明已有服务商 key 或 Claude Code / Codex / Gemini CLI 订阅的人直接用、不另外花钱；第 2 课第三步加「可以跳过」 | 用户指出原写法「新手课先要充 10 美元」让人以为用 OpenHands 必须花钱 | 完整教程第 2 步「挑一条接模型的路」、第 4 步「先在本机登录好」 |
| 2026-11-14 | 「不知不觉读下去、学会、想试」一轮：首页和第 1 课先放喝水网页的演示动画，第 1 课的例子就用这个网页；首页先说免费；第 2 课结尾指向第 3 课、卸载收进折叠问答 | 读者原来要到第 3 课（约 25 分钟后）才第一次看到它做出的东西；先看到价值再谈准备 | 三个只读代理的审读报告，逐条对过源码 |
| 2026-11-14 | 全站只用一个交代任务的口诀「我想要什么 · 做好是什么样子 · 做完给我看什么」，会写代码的页面在它上面加，不另起一套 | 原来有四种说法（第 3 课、完整教程第 3 步、第 6 步、good-instructions），重复同一个说法才会变成习惯 | |
| 2026-11-14 | 完整教程的检查点加「先想一想」的问题（`<Checkpoint ask>`），答案折起来；每步自己的完成语 | 只勾「我知道……」不需要回想；不做成考试，一两题 | `src/components/Checkpoint.astro` |
| 2026-11-14 | How-to 排成一条读下去的路（`HOWTO_PATH`），每篇末尾指向下一篇并带上它的一句话；目录带一句话和用时 | 原来每篇停在「卡住了？」，同组只有两篇的互相指 | `src/data/nav.js` |
| 2026-11-14 | 自动化页自动链回正文链到它的 How-to，「怎么开起来」最后统一加「Run now 先跑一次」 | 原来 Slack standup digest 这类页面写「暂时没有单独的页面」，本站其实有整篇教程 | `src/lib/howtos.js` |
| 2026-11-14 | 手机上点术语先弹解释、再点才进 Wiki，写在站点脚本里，不改 UI Kit | UI Kit 的悬停提示不响应触摸，手机读者点一下就离开页面 | `src/layouts/Site.astro` |
| 2026-11-14 | Wiki 加「习惯」一组 5 条，比喻统一成装修一套；不加徽章、积分 | 反复出现的习惯原来没地方可点；24 个互不相干的比喻要一个个解码，有的偏幼稚；游戏化对这批读者显得幼稚 | |
