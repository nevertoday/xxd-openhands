// 常见问题：第一次接触 OpenHands 时最常冒出来的问题。[问题, 答案]，答案里可以用 **粗体**、`代码`、[外链](https://…) 和 [站内链接](/路径/)。
// 常见问题页和搜索都读这里。依据：OpenHands/OpenHands 1a7c59b（v1.40.0）的 README，OpenHands/docs edd916f 的 overview/、agent-canvas/、cloud/、llms/（2026-11-13 核对）。
// 写法：第一句直接回答（能 / 不用 / 不要钱，但……），后面最多两三句短句。全页最多一处 ==荧光笔==。
export const FAQ = [
  { id: "before", title: "上手之前", items: [
    ["OpenHands 要钱吗？", "软件不要钱，它开源免费（MIT 协议）。要钱的是背后的模型，按用量付费。已经有服务商的 key，或者登录了 Claude Code、Codex 的订阅，直接用就行，不用另外花钱。走 OpenHands Cloud 的，拿 key 之前要先充 10 美元；Cloud 上的免费模型 DeepSeek V4 Flash 不扣这笔额度。怎么省见 [控制花费](/howto/cost/)。"],
    ["OpenHands、Agent Canvas、OpenHands Cloud 是什么关系？", "Agent Canvas 是你用的控制台，OpenHands Cloud 是官方托管的在线版，都属于 OpenHands。Agent Canvas 默认在你电脑上跑。它也可以连上 Cloud，把活放到云上干。详见 [OpenHands 是什么](/wiki/openhands/)。"],
    ["旧文章里的 `openhands serve` 和 OpenHands CLI 还能用吗？", "别再用了。`openhands serve` 启动的旧版本地界面已经弃用，OpenHands CLI 也不再积极维护。只装了 Agent Canvas 的话，`openhands serve` 根本跑不起来。现在用桌面版，或者运行 `agent-canvas`。"],
    ["我不会写代码，能用吗？", "能上手。桌面版不用开终端，装好就能点着用。先让它在一个空文件夹里做件小事，比如一个小网页，再打开看看结果。[新手入门](/start/1-why/) 就是这么带你走的。"],
    ["和 Claude Code、Codex 是什么关系？", "可以一起用。Agent Canvas 能直接跑 Claude Code、Codex、Gemini CLI 这些代理，用的是一种叫 [ACP](/wiki/acp/) 的通用接口。你已经买了它们的订阅，就能在 Agent Canvas 里接着用。见 [换一个代理](/guide/4-agents/)。"],
    ["要什么样的电脑？", "一台普通的 Mac、Windows 或 Linux 电脑就行。桌面版支持 Apple 芯片和 Intel 的 Mac，以及 x64 的 Windows 和 Linux。用 npm 装的话，要先装 Node.js 24 以上和 `uv`。手机上的 Linux 环境（比如 Termux）不是官方主要支持的环境。"],
  ]},
  { id: "install", title: "安装和运行", items: [
    ["新手用哪种装法？", "装桌面版。它自带 Node.js 和 `uv`，不用敲命令，也不用一直开着终端。会用终端的，可以用 npm 装；想把 AI 关进容器，用 Docker。几种装法的区别见 [安装 Agent Canvas](/guide/1-install/)。"],
    ["Mac 提示「已损坏」或打不开，怎么办？", "先确认是从官方 GitHub 发布页下载的。桌面版还是预览版，没有做苹果的签名，所以 Mac 会拦它。把它拖进「应用程序」后，在终端里运行 `xattr -dr com.apple.quarantine \"/Applications/OpenHands Agent Canvas.app\"`，再打开。"],
    ["关掉终端或电脑，它还在干活吗？", "看你装在哪。用 npm 装的，关掉终端它就停了。桌面版退出应用就停。放在 Docker、服务器或 Cloud 上的，会一直跑到你把它停掉。想让它不停，见 [放到服务器上](/howto/server/)。"],
    ["打开 localhost:8000 没反应？", "先看运行它的那个终端里有没有报错。常见原因有三个：少装了东西、8000 端口被占了、Docker 没打开。用 Docker 跑的，地址要加上 `/canvas`。更多见 [打不开、连不上怎么办](/howto/troubleshoot/)。"],
    ["怎么更新、怎么卸载？", "桌面版到 `Settings > Application` 里检查更新，卸载就像删普通应用。npm 装的，运行 `npm install -g @openhands/agent-canvas@latest` 更新，`npm uninstall -g @openhands/agent-canvas` 卸载。卸载不会删掉设置和对话，它们在 `~/.openhands` 里。见 [更新、停止、卸载](/howto/update-remove/)。"],
    ["能在手机上用吗？", "能，在手机浏览器里打开就行。官方推荐用 Tailscale：电脑和手机登录同一个账号，手机上打开 `http://电脑的 Tailscale 地址:8000/`。也可以把后端放到 Cloud 上，手机直接用。见 [在手机上看它干活](/howto/phone/)。"],
  ]},
  { id: "model", title: "模型和花费", items: [
    ["一定要有 API key 吗？", "不一定。你登录过 Claude Code、Codex 或 Gemini CLI 的订阅，就能直接用这个登录。前提是后端在同一台电脑上。OpenCode 还有不用登录的免费模型。别的情况，都要一个 [API key](/wiki/api-key/)。"],
    ["哪个模型是免费的？", "现在是 DeepSeek V4 Flash，通过 OpenHands Cloud 调用时免费。在模型列表里，它会标着 `Free`。免费的模型会随活动更换。自己部署或别家同名的模型不算，照常收费。"],
    ["Cloud 设置里有好几种 key，填哪个？", "填 `LLM API Key`。它在 OpenHands Cloud 设置的 `API Keys` 页里，用来接模型。同一页上的 Cloud API key 是给程序调用 Cloud 接口用的，接不了模型。"],
    ["怎么控制花费？", "简单活用便宜模型，难活再换强的。存几套 [LLM Profile](/wiki/llm-profile/)，在对话里打 `/model` 就能切换。换一件事就开新对话，别让一个对话越聊越长。对话里的 `Usage` 表只显示花了多少，不会替你叫停。见 [控制花费](/howto/cost/)。"],
    ["能用本地模型吗？", "能，但要很强的电脑。官方推荐先试 Qwen3.6-35B-A3B，要 24GB 显存的显卡，或者 64GB 内存的 Apple 芯片 Mac。在 LM Studio 或 Ollama 里跑起来，再在 `Settings > LLM` 的 `Advanced` 页填上地址。见 [用本地模型](/howto/local-llm/)。"],
    ["该选哪个模型？", "长任务、要紧的任务，用你付得起的最强模型。日常小改动用便宜的。官方按自己的评测（OpenHands Index）给了推荐，见 [接上模型](/guide/2-model/)。"],
  ]},
  { id: "safety", title: "安全", items: [
    ["它会动我电脑上别的文件吗？", "直接在你电脑上跑时，会。它有你账号的权限，能读写你能读写的文件，也能执行命令。==新手课只让它在一个新建的空文件夹里干活。==想真正隔离，用 [Docker](/howto/docker-sandbox/)。"],
    ["怎么让它只在一个文件夹里干活？", "用 Docker，只把那个文件夹挂进去。容器里的 AI 只看得到挂进去的目录。直接在电脑上跑时，`Open Workspace` 只是告诉它在哪干活，拦不住它去别处。见 [把它关进 Docker 里跑](/howto/docker-sandbox/)。"],
    ["它不问我就执行命令，安全吗？", "安不安全，取决于你让它在哪跑、给它看哪些文件。它能改工作区里的任何文件，也能用环境里的密钥和网络。别把密钥、重要资料放进它能碰到的地方。随时可以点 `Stop` 叫停。"],
    ["我的 API key 存在哪？安全吗？", "存在后端里，不存在浏览器里。本地装的，在你电脑的 `~/.openhands` 下；用 Docker 的，在那个 Docker 卷里。在 `Settings → Secrets` 里能改、能删。谁能连上你的后端，谁就能指挥它干活，所以别把后端随便暴露到网上。"],
    ["能把它放到网上，从别处访问吗？", "能，但要先锁好门。官方做法是：设一个很长的 `LOCAL_BACKEND_API_KEY`，用 `--public` 启动，再用防火墙只放行你自己。只是自己的设备要用，Tailscale 更省心。见 [放到服务器上](/howto/server/)。"],
    ["网上的技能和插件能放心装吗？", "只装信得过的。技能和插件能让 AI 跑脚本、读文件、用密钥、连外部服务。装之前，先看看里面写了什么。见 [技能](/wiki/skill/) 和 [插件](/wiki/plugin/)。"],
  ]},
  { id: "team", title: "自动化和团队", items: [
    ["自动化要我电脑一直开着吗？", "放在本地后端上，就要一直开着。自动化在后端上跑，本地后端停了，它就不跑了。想让它一直跑，放到服务器或 OpenHands Cloud 上。见 [让它按时自己干活](/guide/6-automations/)。"],
    ["自动化怎么建？", "最简单的办法，是在对话里直接让它建。说清楚什么时候跑、做什么、结果发到哪。也可以从 `Automate` 里的模板开始。自己从头写见 [自己写一个自动化](/howto/custom-automation/)。"],
    ["有没有现成的自动化？", "有。比如审 PR、把 issue 做成 PR、盯着仓库、每天汇总 Slack。全部列在 [现成自动化](/automations/)，每个都写了要先接好什么服务。"],
    ["能在 GitHub 上直接叫它干活吗？", "能，用 OpenHands Cloud 连上 GitHub 就行。给 issue 打上 `openhands` 标签，或者留言 `@openhands`。它会去做，做好了开一个 PR，再回来留言贴链接。见 [把 issue 交给它做成 PR](/howto/issue-to-pr/)。"],
    ["团队能一起用吗？", "能。可以把一台服务器上的后端给团队共用，专门跑审代码、升依赖这类活。OpenHands Cloud 支持组织，对话可以分享给组织里的人。官方 FAQ 也提醒：自己部署的版本是给一个人用的。它没有内置多用户的账号和隔离。"],
    ["我想用代码调用它，怎么办？", "用 [SDK](/wiki/sdk/)。它是一个 Python 工具包，Agent Canvas 和 OpenHands Cloud 背后用的都是它。只想调用 Cloud 上的对话，可以用 Cloud API。见 [再往前走](/guide/8-beyond/)。"],
  ]},
];
