# 维护说明

把 [OpenHands](https://github.com/OpenHands/OpenHands)（开源的 AI 编程代理，现在的主体是 Agent Canvas）讲给第一次接触的人：说人话，从没写过代码到在真实项目里用起来。
内容：新手入门（3 课）、完整教程（0–8 步）、How-to（具体怎么做）、现成自动化（速查）、Wiki（这是什么）、常见问题。

- 站点骨架来自 [xxd-pstack](https://github.com/nevertoday/xxd-pstack)：同样的外壳、组件、搜索和写作规矩。页脚和 README 保留这一处致谢。
- 界面用 xxd-ui-kit（`public/xxd/` 里自带一份，不走 CDN）。
- 中英双语：中文在根路径，英文在 `/en/` 下，slug 相同，顶栏的语言菜单切到对应页。改了一篇中文，**同一次提交里把英文版也改了**：
  - 正文：`src/pages/en/start/`、`src/pages/en/guide/`、`src/pages/en/howto/`（MDX，组件路径多一层 `../`；站内链接加 `/en`；`<Term k="中文键" />` 照原样，英文名在 `glossary.js` 的 `en.label`）。
  - 数据：`nav.js` 各条目的 `en: {}`；`wiki.en.js`、`faq.en.js`、`automations.en.js`（按 slug 叠加到中文那份上）；界面文字在各组件和 `views/` 里的 zh / en 两份。
  - 强调：每页最多一处 `<mark>`（这页最要紧的一句），`<u>` 只给照做会失败的坑；英文页放在对应的那句上。

```bash
npm install
npm run dev        # http://localhost:4421
npm run build      # 输出到 dist/
npm run check      # 构建后检查：站内链接都通、<Term k> 都在 glossary.js、glossary 的 wiki 都有条目
```

## 怎么改

- **站点结构**只在 `src/data/nav.js` 改：新手入门（`LESSONS`）、完整教程（`STEPS`）、How-to 清单（`HOWTO`）、现成自动化的导航名（`AUTOMATIONS_NAV`）、本站仓库地址（`REPO`）。`ready: false` 的步骤在导航里显示「编写中」。
- **新手入门**每一课是 `src/pages/start/<slug>.mdx`，frontmatter 写 `layout: ../../layouts/Lesson.astro`、`lesson: n`、`tldr`、`description`。
- **完整教程**每一步是 `src/pages/guide/<n>-<slug>.mdx`（`layout: ../../layouts/Guide.astro`、`step: n`，可选 `need`）。
- **How-to** 是 `src/pages/howto/<slug>.mdx`（`layout: ../../layouts/HowTo.astro`，`slug` 要和 `HOWTO` 里一致；可选 `time`、`for`、`step`，`step` 是相关的完整教程步骤）。
- **现成自动化**只改数据：`src/data/automations.js`（`AUTOMATION_GROUPS` 和 `AUTOMATIONS`，形状见 `docs/PLAN.md`），英文在 `automations.en.js`（`AUTOMATIONS_EN[slug] = { one, when, does, setup }`）。英文缺哪一条、哪一项，页面显示中文，构建不会断。页面是 `views/AutomationsPage.astro`（卡片 + 按名字、分组、触发方式筛选）和 `views/AutomationDoc.astro`（详情页）；读数据的地方只有 `src/lib/automations.js`。
- **术语**在 `src/data/glossary.js`（`nav.js` 转出 `GLOSSARY`）。每个键的 `wiki:` 必须在 `wiki.js` 和 `wiki.en.js` 里都有条目；`npm run check` 会查。
- **Wiki** 和 **常见问题** 只改数据：`src/data/wiki.js`、`src/data/faq.js`（和 `.en.js`）。Wiki 条目可以带一张 `list` 表。
- **教程组件**（在 MDX 里 import，中文页 `../../components/X.astro`，英文页 `../../../components/X.astro`）：`Callout`（`ok` / `warn` / `no` / `tip`）、`Term`（术语，`k` 对应 `glossary.js`）、`Checkpoint`（可打勾的检查点）、`Q`（「卡住了？」里的一条）、`Tabs`（按系统或路线切换）、`Copy`（带复制按钮的提示词或命令）、`Cmd`（正文里一点就复制的命令）、`Shot`（截图，图放 `public/img/`）、`Reply`（示意 AI 回复长什么样）。
- **搜索**（⌘K）自动收录新手入门、完整教程每一步、每篇 How-to、每个现成自动化、每个 Wiki 条目和每条常见问题；正文按小节做全文搜索（`scripts/search-sections.mjs`，构建时生成）。
- **UI Kit 升级**：在 xxd-ui-kit 里 `pnpm xxd sync <本目录>`，不要手改 `public/xxd/`。改完界面跑 `pnpm xxd doctor <本目录>`。

## 写作规矩

- 站在第一次接触的人的角度：先说这一步做什么、为什么，再说怎么做，最后说应该看到什么。
- 说人话：短句、具体、不堆术语；第一次出现的术语用 `Term` 包起来。
- 给 OpenHands 的提示词用中文写；界面上的按钮名、菜单名、命令保持英文原样（`Settings > Application`、`agent-canvas`），读者才找得到。
- **安全说法全站统一**：本机直接跑时，AI 能用你的账号权限读写文件、执行命令。新手课让它只在一个新建的空文件夹里干活；想隔离就用 Docker（完整教程讲）。
- 只写下面这些来源里写明了的行为和命令；会变的东西（版本号、默认模型、免费模型、端口、装法）以官方为准，变了就改对应的那一页或 `data/` 里那一处。
- MDX 正文里不能出现裸的 `<`、`{`、`}`：占位符写在代码里，比如 `` `<你的项目文件夹>` ``。

## 事实来源（当前内容核对到的版本）

| 仓库 | 提交 | 看什么 |
| --- | --- | --- |
| [OpenHands/OpenHands](https://github.com/OpenHands/OpenHands) | `1a7c59b`（v1.40.0，2026-11-13） | README.md、README.windows.md、docs/*.md |
| [OpenHands/docs](https://github.com/OpenHands/docs) | `edd916f`（2026-11-12） | `docs.json` 是导航；`overview/`、`openhands/usage/`、`sdk/` 下的 `.mdx` |
| [OpenHands/extensions](https://github.com/OpenHands/extensions) | `b98ac06` | `automations/catalog/`、`skills/`、`plugins/` |
| [OpenHands/software-agent-sdk](https://github.com/OpenHands/software-agent-sdk) | `a6601aa` | SDK 和 Agent Server |
| [OpenHands/automation](https://github.com/OpenHands/automation) | `949c001` | 自动化服务 |

官方文档线上地址：`https://docs.openhands.dev/<mdx 路径去掉 .mdx>`，比如 `openhands/usage/agent-canvas/setup.mdx` → <https://docs.openhands.dev/openhands/usage/agent-canvas/setup>。

下次同步：在各仓库里 `git log --oneline <上面的提交>..HEAD`，再 `git diff <提交> HEAD -- <看什么那一列>`，按改动更新对应页面，最后改这张表。现成自动化的目录变了（新增、删掉、改名），同步改 `automations.js` 和 `automations.en.js`。

## 说人话：全站的改写规则

读者反馈「读着脑袋烧、get 不到」，原因几乎都是下面这几条。写新内容、改旧内容都照这个来。

**每页**
- frontmatter 里写 `tldr:`，显示在标题下面的「一句话」：看完这页你能做成什么。不超过 40 个字，说结果，不说「本页介绍……」。
- 小节标题写读者的动作或问题：「先写清楚怎么算做完」「它说复现不出来」。不用名词当标题（「约束」「原理」）。
- 正文比改之前短三分之一以上。删掉读者用不上的：作者履历、版本差异、少见的边缘情况、内部流程的细节。真有人需要的，收进页尾的 `Q` 折叠项。

**每段、每句**
- 一段只讲一件事；一句只讲一个意思。中文一句超过 30 个字就拆开，英文超过 20 个词就拆开。
- 先给例子，再讲道理：先放能照抄的提示词或操作，再用一两句说为什么。
- 正面说要做什么。不用「不是……而是……」「最好别……」「……不是客气话」这类要读者拐弯的句式。
- 只讲读者要做的事和会看到的东西。Agent Server 内部怎么调度、事件怎么流转，能不讲就不讲。
- 一句话里最多出现一个新词。
- **卖点只说一次。** 「会自己动手的 AI」这类概括 OpenHands 好处的话，首页标题说一次、第 1 课说一次，就够了。别的页面的「一句话」、简介、导航摘要、术语悬停提示里不再重复，写这一页具体做什么。

**词**
- 新词第一次出现，当场用大白话说清楚（括号或紧跟一句），或者直接换成日常说法：

| 别写 | 写成 |
| --- | --- |
| 产物 | 能拿来检查的东西（截图、输出、录屏） |
| 约束 | 要求、不能碰的地方 |
| 根因 | 真正的原因 |
| 复现 | 让问题再出现一次（第一次出现时这样解释，之后可以用「复现」） |
| 下游 / 上游 | 出问题之后的地方 / 出问题的源头 |
| 上下文 | 前面聊过的内容 |
| 意图 | 你想要什么 |
| 只读 | 只看不改 |
| 钉死、钉在 | 固定 |
| 证明力 | 说服力 |
| 一个字节都不能变 | 正文里写「一点都不能变」；给 AI 的提示词里写「要和原来逐字一样」（提示词要精确） |
| 收敛、坍缩、落地、闭环、抓手 | 删掉，换成具体发生了什么 |

- 后端、沙盒、工作区、ACP、MCP、PR 这些站内术语，用 `Term` 包起来，悬停有一句解释（键在 `src/data/glossary.js`）。

**表格和列表**
- 表格最多 3 列、5 行，每格不超过 15 个字。放不下就改成列表。
- 列表每项先写结论（加粗几个字），后面最多一句解释。

**不能动的**
- 命令、提示词、文件路径、数字保持准确；不写来源里没写的行为。
- 强调：每页最多一处 `<mark>`；`<u>` 只给会让人做错的坑。
- 中文页和 `/en/` 下的英文页一起改，结构保持一致。

## 新手入门（/start/）的写法

新手入门是给没写过代码、只和 AI 聊过天的人看的。站点有两条路：新手入门三课（`src/pages/start/`，数据在 `nav.js` 的 `LESSONS`），和给会写代码的人的完整教程（`guide/`）。新手入门只给一条路：桌面版 → OpenHands Cloud 的 API key → 首次设置 → 在一个新建的空文件夹里做一件小事。新手页的规矩比上面更严：

- **先做，后讲。** 每一课一开始就让人动手；道理只讲到「为什么要这样做」的一句话。（Carroll 的极简教学、Diátaxis 的 tutorial 原则）
- **只给一条路。** 不列「也可以这样」。别的工具、别的装法放到页尾的「不对怎么办」里，一句话带过。
- **每一步写「你应该看到」。** 用 `<Callout type="ok">`，写屏幕上真的会出现的字。
- **每一课都有「不对怎么办」。** 按读者会看到的现象写问题（「打开桌面版，提示文件已损坏」），不按原因写。
- **不出现没解释过的词。** Agent Server、后端、ACP、MCP、SDK、worktree、CI、diff 都不进新手页；非要用就换成日常说法（「额度」「检查结果」），或者用 `Term` 包起来。
- **说清楚哪些是可选的。** 三课之外的一切都标成「遇到了再查」；不要让读者觉得每一页都必须看。
- **反复用同一个句式。** 「我想要什么 · 做好是什么样子 · 做完给我看什么」在每个例子里重复，换场景不换句式。
- **示意要标明是示意。** AI 回复的样子用 `Reply` 组件，标题写「示意」，不冒充真实记录。

## 反馈入口

每页末尾一行（`Feedback.astro`）：没看懂、照做不成，就到 GitHub 提（带好页面信息的 issue 模板），或者先翻常见问题。首页和常见问题页末尾是「提问和讨论」卡片（`Contact.astro`）。不放个人二维码，不催读者「整理好一起发」。

## 部署

线上（还没建）：<https://openhands.xiaoxiaodong.ai>　仓库（还没建）：<https://github.com/nevertoday/xxd-openhands>。两样建好、用户点头之前不部署。
部署：`npm run release`（构建后 `wrangler deploy`，需要先 `npx wrangler login`），配置在 `wrangler.jsonc`（Cloudflare Workers 静态资源，worker 名 `xxd-openhands-site`）。

## 分享大图

`python3 tools/build_assets.py` 生成 `assets/social.svg`（中文）和 `assets/social-en.svg`（英文）。再用 Chrome 转成 PNG（中文字体最准）：

```bash
for v in social:og social-en:og-en; do
  s=${v%%:*}; o=${v##*:}
  printf '<!doctype html><meta charset="utf-8"><style>html,body{margin:0;width:1280px;height:640px;overflow:hidden}</style><img src="file://%s/assets/%s.svg" width="1280" height="640">' "$PWD" "$s" > /tmp/$s.html
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --hide-scrollbars --allow-file-access-from-files --force-device-scale-factor=1 --window-size=1280,640 --screenshot="$PWD/public/$o.png" file:///tmp/$s.html
done
```

`public/og.png` 给中文页，`public/og-en.png` 给英文页。GitHub 仓库的 Social preview 用英文版，要在 Settings → General → Social preview 手动上传。
