# OpenHands 新手教程站：第一版计划

目标：照 `../xxd-pstack` 那个 pstack 教程站的样子，做一个讲 OpenHands 的站。说人话，从没写过代码的人到在真实项目里用起来。

## 定下来的事

- **骨架**沿用 xxd-pstack：Astro 静态站、xxd-ui-kit（`public/xxd/`）、搜索（⌘K）、组件、写作规矩。
- **语言**：第一版只做中文（根路径）和英文（`/en/`），slug 相同。另外 8 种语言等内容稳定了再加。
- **不要的 pstack 专属功能**：技能速查和技能详情页（`skills*`、`skill-docs`、`SkillsPage`、`SkillDoc`）、「我用的工具」命令换写法（`ToolPick`、`tools.js`、`skill-cmds.mjs`）、图示数据（`figs.js` 清空，正文第一版不用 `<Fig>`）、8 种语言的页面和 `src/i18n/<语言>.js`。
- **换成的栏目**：「现成自动化」速查（`/automations/` 卡片页 + `/automations/<slug>/` 详情页），数据来自 OpenHands/extensions 的 `automations/catalog/`。
- **新手入门只给一条路**：装桌面版（Desktop app，预览版，自带 Node.js 和 uv，不用开终端）→ 在 OpenHands Cloud 拿一个 API key（有免费模型）→ 首次设置向导 → 在一个专门的空文件夹里做一件小事。npm、Docker 等其他装法放进完整教程。
- **安全说法统一**：本机直接跑时，AI 能用你的账号权限读写文件、执行命令。新手课让它只在一个新建的空文件夹里干活；想隔离就用 Docker（完整教程讲）。
- **部署**：站点配置写 `https://openhands.xiaoxiaodong.ai`，仓库地址写 `https://github.com/nevertoday/xxd-openhands`。两样都还没建，**不部署、不建 GitHub 仓库**，等用户点头。

## 事实来源（只写这些里写明了的）

本地副本（只读）：`/private/tmp/claude-501/-Volumes-T7-usb-js-OpenHands/5d2d653a-233d-4616-be85-1211bfb4464c/scratchpad/src/`

| 仓库 | 提交 | 看什么 |
| --- | --- | --- |
| `OpenHands/` | `1a7c59b`（v1.40.0，2026-11-13） | README.md、README.windows.md、docs/*.md |
| `docs/` | `edd916f`（2026-11-12） | `docs.json` 是导航；`overview/`、`openhands/usage/`、`sdk/` 下的 `.mdx` |
| `extensions/` | `b98ac06` | `automations/catalog/`、`skills/`、`plugins/` |
| `software-agent-sdk/` | `a6601aa` | SDK 和 Agent Server |
| `automation/` | `949c001` | 自动化服务 |

官方文档线上地址：`https://docs.openhands.dev/<mdx 路径去掉 .mdx>`，比如 `docs/openhands/usage/agent-canvas/setup.mdx` → `https://docs.openhands.dev/openhands/usage/agent-canvas/setup`。

## 站点结构

### 新手入门 `/start/`（3 课）

| slug | 标题 | 内容 |
| --- | --- | --- |
| `1-why` | 它能帮你什么 | OpenHands 是什么（会自己动手的 AI），要准备什么（电脑、一个模型 key），花什么钱，有什么风险 |
| `2-install` | 装上它 | 下载桌面版、第一次打开、拿 OpenHands Cloud 的 API key |
| `3-first-use` | 第一次用 | 首次设置向导四步，在空文件夹里让它做一个小网页，看它干活、检查结果 |

### 完整教程 `/guide/`（9 步）

| slug | 标题 | 主要依据 |
| --- | --- | --- |
| `0-what` | OpenHands 是什么 | overview/introduction、agent-canvas/overview、agent-canvas/architecture、OpenHands README |
| `1-install` | 安装 Agent Canvas | agent-canvas/setup、README（四种装法）、README.windows.md |
| `2-model` | 接上模型 | first-time-setup、model-configuration、llm-profiles、settings/llm-settings、llms/* |
| `3-first-conversation` | 第一个对话 | agent-canvas/conversations、tips/prompting-best-practices、essential-guidelines/* |
| `4-agents` | 换一个代理：Claude Code、Codex 也能用 | agent-canvas/acp-agents、agent-profiles、docs/ACP_AGENTS.md |
| `5-backends` | 换个地方跑：后端和沙盒 | agent-canvas/backends、backend-setup/*、README 选项 2、3 |
| `6-automations` | 让它按时自己干活 | agent-canvas/managing-automations、automation-events、prebuilt-automations、usage/automations/* |
| `7-customize` | 教它你的规矩：技能、插件、MCP | overview/skills*、overview/plugins、agent-canvas/plugins、settings/mcp-settings、customization/* |
| `8-beyond` | 再往前走：自托管、团队、SDK | docs/SELF_HOSTING.md、backend-setup/vm、mobile-access、critic、sdk/index、sdk/getting-started |

### How-to `/howto/`

| 组 | slug | 标题 |
| --- | --- | --- |
| 在真实项目里 | `new-codebase` | 接手一个陌生项目 |
| | `issue-to-pr` | 把一个 GitHub issue 交给它做成 PR |
| | `code-review` | 让它帮你审 PR |
| | `qa-changes` | 改完让它像用户一样试一遍 |
| | `dependency-upgrades` | 升级依赖 |
| | `vulnerability-remediation` | 修安全漏洞 |
| 提示词 | `recipes` | 照抄就能用的提示词 |
| | `good-instructions` | 怎么交代，它才不跑偏 |
| 环境和部署 | `docker-sandbox` | 把它关进 Docker 里跑 |
| | `parallel` | 同时开好几个对话 |
| | `server` | 放到服务器上，一直开着 |
| | `phone` | 在手机上看它干活 |
| | `local-llm` | 用本地模型 |
| | `cloud` | 用 OpenHands Cloud |
| 自动化 | `slack-digest` | 每天自动汇总 Slack |
| | `custom-automation` | 自己写一个自动化 |
| 日常维护 | `cost` | 控制花费 |
| | `update-remove` | 更新、停止、卸载 |
| | `troubleshoot` | 打不开、连不上怎么办 |

### Wiki `/wiki/`

每个 `src/data/glossary.js` 里的 `wiki:` slug 都要有一条（共 24 条）。分组：`基本概念`、`在哪里跑`、`模型和代理`、`扩展和自动化`。

### 现成自动化 `/automations/`

数据在 `src/data/automations.js`（中文）和 `src/data/automations.en.js`（英文，按 slug 叠加），形状：

```js
export const AUTOMATION_GROUPS = [{ id: "github", title: "GitHub", en: "GitHub" }, …];
export const AUTOMATIONS = [
  {
    slug: "github-pr-reviewer",       // = extensions/automations/catalog/ 下的目录名
    name: "GitHub PR Reviewer",       // 官方英文名，照 catalog 原样
    group: "github",                  // AUTOMATION_GROUPS 的 id
    trigger: "event",                 // "schedule" 定时 | "event" 事件 | "manual" 手动
    needs: ["GitHub"],                // 要先接好的服务
    one: "一句话：它替你做什么",
    when: "什么时候用",
    does: ["它每一轮具体做什么，2–4 条"],
    setup: ["怎么开起来，2–5 步"],
    doc: "https://docs.openhands.dev/…" , // 官方页面，没有就 null
  },
];
// automations.en.js: export const AUTOMATIONS_EN = { "<slug>": { one, when, does, setup } }
```

### 常见问题 `/faq/`

`src/data/faq.js` / `faq.en.js`，形状和 pstack 站一样。

## 文件归属（并行写作时谁写哪个文件）

| 负责人 | 只写这些文件 |
| --- | --- |
| 骨架 | 除下面各行以外的一切：`src/data/nav.js`、布局、views、组件、`scripts/`、`public/`、`README*.md`、`package.json`、`wrangler.jsonc`、`docs/MAINTAINING.md`、首页文字 |
| 新手入门 | `src/pages/start/*.mdx`、`src/pages/en/start/*.mdx` |
| 完整教程 | `src/pages/guide/*.mdx`、`src/pages/en/guide/*.mdx` |
| How-to 甲 | 「在真实项目里」「提示词」两组的 `src/pages/howto/<slug>.mdx` 和 `src/pages/en/howto/<slug>.mdx` |
| How-to 乙 | 「环境和部署」「自动化」「日常维护」三组的同上 |
| Wiki | `src/data/wiki.js`、`wiki.en.js`、`faq.js`、`faq.en.js` |
| 自动化 | `src/data/automations.js`、`automations.en.js` |

`src/data/glossary.js` 已定稿，谁都不改。要新术语，在报告里提。

## 怎么算做完

1. `npm run build` 通过。
2. 上面列的每一页中英文都存在，`ready: true`，导航里没有「编写中」。
3. `rg -i 'pstack|poteto'` 在 `src/`、`public/site.css`、`README*.md` 里只剩致谢那一处（骨架来自 xxd-pstack）。
4. 每个 `<Term k>` 的键都在 glossary 里，每个 glossary 的 `wiki` 都有条目，站内链接都指向存在的页面（脚本查）。
5. 浏览器里看首页、一课、一步、一篇 How-to、Wiki、自动化页：亮色、暗色、手机宽度。
