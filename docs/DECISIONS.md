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
