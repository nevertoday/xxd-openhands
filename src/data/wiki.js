// Wiki 条目：每条同样的结构 —— 一句话（one）、比喻（like）、在 OpenHands 里（here，最多两段）、可选的清单表（list）、常见误区（myths）、相关（see）。
// 文字里可以用 **粗体**、==荧光笔==（每条最多一处）、`代码`、[外链](https://…) 和 [站内链接](/路径/)（lib/md.js 里简单转换）。
// 写法照 docs/MAINTAINING.md 的「说人话」：短句、一句一个意思、新词当场解释。
// step: 对应的完整教程步骤（0–8）；howto: 对应的 How-to。
// 依据：OpenHands/OpenHands 1a7c59b（v1.40.0）、OpenHands/docs edd916f（2026-11-13 核对）。

export const WIKI_GROUPS = ["基本概念", "在哪里跑", "模型和代理", "扩展和自动化"];

export const WIKI = [
  // ---------- 基本概念 ----------
  {
    slug: "openhands", title: "OpenHands 是什么", group: "基本概念",
    one: "OpenHands 是一个开源的 AI 编程项目。AI 自己敲命令、改文件，你在旁边看着、拍板。",
    like: "像请了一位会自己动手的装修师傅。你说想要什么样，他自己量、自己干，你来验收。",
    here: [
      "现在说的 OpenHands，主要指 [Agent Canvas](/wiki/agent-canvas/)。它是一个在浏览器里用的控制台。背后真正干活的是 [Agent Server](/wiki/agent-server/)。",
      "软件本身开源免费，用的是 MIT 协议。它不带模型，要你自己接一个，所以花钱主要花在模型上。",
    ],
    list: [
      ["Agent Canvas", "你用的控制台，开源"],
      ["Agent Server", "真正跑 AI 的后台"],
      ["OpenHands Cloud", "官方托管的在线版"],
      ["SDK", "用 Python 自己搭代理"],
    ],
    listTitle: "OpenHands 家的几样东西", listHead: ["名字", "是什么"],
    myths: [
      "「网上教程让我跑 `openhands serve`」：那是旧版的本地界面，已经弃用。只装了 Agent Canvas 的话，这条命令也跑不起来。现在用桌面版，或者运行 `agent-canvas`。",
      "「OpenHands CLI 是官方的命令行版」：它已经不再积极维护。官方现在推荐用 Agent Canvas。",
      "「装上就能用」：还要接一个[模型](/wiki/llm/)。新手最省事的是在 OpenHands Cloud 拿一个 key，里面有免费模型。",
    ],
    see: ["agent-canvas", "agent", "cloud"],
    step: 0,
  },
  {
    slug: "agent-canvas", title: "Agent Canvas（控制台）", group: "基本概念",
    one: "Agent Canvas 是 OpenHands 的控制台。你在这里和 AI 对话、看它改的文件、管自动化。",
    like: "像电视遥控器。按键都在它上面，节目却是电视台播的。换个台，看到的就是另一家的节目。",
    here: [
      "它只管显示和发指令，本身不跑 AI。活是它连着的[后端](/wiki/backend/)干的。默认的后端就在你自己电脑上。",
      "打开它有几种办法。桌面版自带要用的工具，不用开[终端](/wiki/terminal/)。用 npm 装的，运行 `agent-canvas`，再打开 `http://localhost:8000`。用 Docker 跑的，地址是 `http://localhost:8000/canvas`。",
    ],
    myths: [
      "「它和 `openhands serve` 是一回事」：`openhands serve` 启动的是旧版界面，已经弃用。`agent-canvas` 启动的才是现在的控制台。",
      "「关掉浏览器，AI 就停了」：浏览器只是一扇窗。用 npm 装的，关掉运行它的终端才会停。放在 Docker、服务器或云上的后端，会一直跑到你把它停掉。",
      "「里面只能用 OpenHands 自己的 AI」：Claude Code、Codex、Gemini CLI 等也能在里面用，见 [ACP](/wiki/acp/)。",
    ],
    see: ["backend", "agent-server", "openhands"],
    step: 1,
    howto: "troubleshoot",
  },
  {
    slug: "agent", title: "代理（Agent）", group: "基本概念",
    one: "代理是能自己动手的 AI。它不光回答，还会运行命令、读写文件，一直试到做完。",
    like: "普通聊天 AI 像电话里的顾问，只告诉你怎么修。代理像上门的师傅，自己拿工具修。",
    here: [
      "在 Agent Canvas 里，默认的代理就叫 OpenHands。你也可以换成 Claude Code、Codex 这类别家的代理。",
      "你发一句话，它会拆成很多步：看文件、跑命令、改代码、再跑一遍检查。每一步都显示在对话里。想叫停，点输入框旁的 `Stop`。",
    ],
    myths: [
      "「代理就是模型」：模型负责想，代理负责动手。同一个代理可以换不同的[模型](/wiki/llm/)。",
      "「它说做完了，就一定做对了」：它也会出错。==看它改了哪些文件、跑了什么命令，自己再试一遍。==",
      "「它只会写代码」：它能跑命令，所以写报告、整理资料这类事也能做。官方的自动化模板里就有汇总 Slack 的。",
    ],
    see: ["llm", "conversation", "acp"],
    step: 3,
    howto: "good-instructions",
  },
  {
    slug: "conversation", title: "对话", group: "基本概念",
    one: "对话就是你交给 AI 的一件事。每个对话有自己的聊天记录、设置和改动。",
    like: "像维修工单。一张单子写一件事，干到哪、换了什么零件，都记在这张单上。",
    here: [
      "一件新事，就开一个新对话。想换个思路，又不想丢掉原来的？在本地后端上，点消息旁的 `Branch from here`，分出一条岔路。原来的对话不受影响。",
      "对话属于当时选中的[后端](/wiki/backend/)。换了后端，侧边栏里列的就是那边的对话。对话可以导出成 Markdown 或 HTML 文件。",
    ],
    myths: [
      "「一直在同一个对话里聊最省事」：记录越长，它每次要读的就越多，花的 [token](/wiki/token/) 也越多。换一件事，就开新对话。",
      "「改了设置，正在跑的对话也会跟着变」：已经开始的对话，继续用原来的代理和模型。新设置只管之后开的对话。",
      "「归档就是删掉」：归档只是藏起来，随时能恢复。删除才是真删，删了就找不回来。",
    ],
    see: ["workspace", "agent", "backend"],
    step: 3,
    howto: "parallel",
  },
  {
    slug: "workspace", title: "工作区", group: "基本概念",
    one: "工作区就是 AI 能读写的那个文件夹。它该碰的东西都在这里面。",
    like: "像给装修师傅围起来的施工区。围挡里面随便动，围挡外面的东西不该碰。",
    here: [
      "开始对话前，先点 `Open Workspace` 选一个文件夹。新手最好新建一个空文件夹，专门给它用。",
      "工作区在哪，要看[后端](/wiki/backend/)在哪。用 Docker 时，它只看得到你挂进去的目录，比如 `~/projects`，在容器里叫 `/projects`。用远程服务器时，它看到的是服务器上的文件，不是你笔记本上的。",
    ],
    myths: [
      "「选了工作区，它就碰不到别处」：直接在你电脑上跑时，没有这道墙。它有你账号的权限，别的文件夹也能读写。==想真隔离，用 [Docker](/wiki/docker/)。==",
      "「几个对话共用一个文件夹没关系」：它们会改同一批文件，可能互相覆盖。同时干几件事，就给每个对话一个单独的文件夹。",
    ],
    see: ["sandbox", "docker", "conversation"],
    step: 3,
    howto: "docker-sandbox",
  },
  {
    slug: "terminal", title: "终端", group: "基本概念",
    one: "终端是打命令的窗口。Mac 上的应用就叫「终端」，Windows 上用 PowerShell。",
    like: "像在跟电脑发短信。你打一行字，它回你几行结果。",
    here: [
      "用桌面版的话，安装和使用都不需要终端。用 npm 或 Docker 装，就要在终端里敲命令，比如 `agent-canvas`。",
      "用 npm 装的，运行它的那个终端窗口要一直开着。关掉它，本地后端就停了。Agent Canvas 界面里也有一个终端面板。",
    ],
    myths: [
      "「要会写代码才敢开终端」：照着教程复制一行，按回车就行。看不懂的输出，原样贴给 AI 问它。",
      "「终端一关，设置和对话就没了」：npm 装的会停下，但东西都存在 `~/.openhands` 文件夹里。再运行一次 `agent-canvas`，就能接着用。",
    ],
    see: ["agent-canvas", "docker"],
    step: 1,
    howto: "troubleshoot",
  },
  {
    slug: "pr", title: "PR（Pull Request）", group: "基本概念",
    one: "PR 是把一组改动交上去，请人看过以后再合进正式版本。",
    like: "像交作文前先给老师批改。老师点了头，才誊进作文本。",
    here: [
      "PR 是 GitHub 这类代码平台的功能。OpenHands 可以替你开 PR。在 Agent Canvas 的对话概览里，有个按钮能让它提交、推送、开 PR。",
      "用 OpenHands Cloud 连上 GitHub 以后，给 issue 打上 `openhands` 标签，或者留言 `@openhands`。它会去做，觉得做好了就开一个 PR，再回到 issue 里贴上链接。",
    ],
    myths: [
      "「开了 PR，改动就生效了」：PR 只是一个申请。有人看过、点了合并，改动才进正式版本。",
      "「AI 开的 PR 可以直接合」：先看它改了什么，再在自己电脑上试一下。也可以请它帮你审，见 [让它帮你审 PR](/howto/code-review/)。",
    ],
    see: ["automation", "cloud"],
    howto: "issue-to-pr",
  },

  // ---------- 在哪里跑 ----------
  {
    slug: "agent-server", title: "Agent Server", group: "在哪里跑",
    one: "Agent Server 是真正跑 AI 的后台程序。Agent Canvas 只是界面，活是它干的。",
    like: "像餐厅的后厨。Agent Canvas 是前台点菜的，菜在后厨做。",
    here: [
      "你发一句话，Agent Canvas 把它转给 Agent Server。它开始或接着跑这个对话，调用工具，再把每一步传回来给你看。",
      "对话记录、模型设置、密钥、MCP 设置，都存在它那边，不在浏览器里。所以换一台电脑，连上同一个后端，内容都还在。",
    ],
    myths: [
      "「它只能跑在我电脑上」：它也能跑在 Mac Mini、云服务器或 OpenHands Cloud 里。Agent Canvas 可以连好几个，随时切换。",
      "「要单独装它」：用桌面版或 `agent-canvas` 命令时，它会自动一起启动。",
      "「定时任务也是它管的」：定时和事件触发归另一个服务管，叫 Automation Server。默认装法会把两个一起启动。",
    ],
    see: ["backend", "agent-canvas", "sdk"],
    step: 5,
    howto: "server",
  },
  {
    slug: "backend", title: "后端", group: "在哪里跑",
    one: "后端就是 AI 在哪台机器上干活：你的电脑、Docker 容器、服务器，或 OpenHands Cloud。",
    like: "像外卖的门店。App 还是同一个，你选了哪家门店，就由哪家出餐。",
    here: [
      "后端里装着 [Agent Server](/wiki/agent-server/)，开了自动化的还有 Automation Server。默认装法会在你电脑上建好一个本地后端。",
      "点顶栏的后端切换器，打开 `Manage Backends`，可以添加、修改、删除后端。模型设置、MCP、自动化都属于各自的后端。==换了后端，这些也一起换。==",
    ],
    list: [
      ["本地（默认）", "直接在你电脑上跑，最快"],
      ["Docker", "只看得到挂进去的文件夹"],
      ["服务器 / 虚拟机", "一直开着，团队能共用"],
      ["OpenHands Cloud", "官方托管，不占你电脑"],
    ],
    listTitle: "常见的几种后端", listHead: ["后端", "适合"],
    myths: [
      "「远程后端就是远方的服务器」：「远程」只说明怎么连，不说明在哪。同一台电脑上另开的一个进程或容器，也算远程后端。",
      "「换了后端，对话会跟着搬过去」：每个后端有自己的对话和设置。换过去，看到的就是那边的东西。",
    ],
    see: ["agent-server", "sandbox", "cloud"],
    step: 5,
    howto: "server",
  },
  {
    slug: "sandbox", title: "沙盒", group: "在哪里跑",
    one: "沙盒是一个隔离出来的小环境。AI 在里面怎么折腾，也碰不到外面的东西。",
    like: "像公园里的沙坑。沙子随便挖，沙坑外面的草地不会弄脏。",
    here: [
      "OpenHands 常用 [Docker](/wiki/docker/) 容器当沙盒，容器里只有你挂进去的文件夹。OpenHands Cloud 会给每个对话开一个云端沙盒。",
      "用 npm 或桌面版直接跑时，默认没有沙盒，AI 有你账号的权限。想隔离，可以把整套跑在 Docker 里，也可以让每个对话各开一个容器。",
    ],
    myths: [
      "「进了沙盒就绝对安全」：挂进去的文件夹，它照样能改能删。挂得太多、给了它密钥和网络，隔离就会打折扣。",
      "「旧文章里的 runtime 是另一样东西」：旧文档把这类环境叫 runtime，现在的文档叫 sandbox，也就是沙盒。",
    ],
    see: ["docker", "workspace", "backend"],
    step: 5,
    howto: "docker-sandbox",
  },
  {
    slug: "docker", title: "Docker", group: "在哪里跑",
    one: "Docker 是一个开「独立小房间」的软件。OpenHands 用它把 AI 关在容器里干活。",
    like: "像货船上的集装箱。每个箱子各装各的，一个箱子里乱了，不影响旁边的箱子。",
    here: [
      "Mac 和 Windows 上装 Docker Desktop，用之前先把它打开。官方镜像把整套 OpenHands 装进一个容器，打开 `http://localhost:8000/canvas` 就能用。",
      "启动命令会把你电脑上的一个文件夹挂进容器，比如 `~/projects`。AI 只看得到这个文件夹。设置和对话存在一个 Docker 卷里（官方示例叫 `openhands-data`），删掉容器也还在。",
    ],
    myths: [
      "「新手必须先装 Docker」：不用。桌面版和 npm 装法都不需要 Docker。想隔离了，再装它。",
      "「容器一删，设置就没了」：下次启动用同一个卷，设置和对话都还在。真想清空，要删掉那个卷。",
    ],
    see: ["sandbox", "workspace", "backend"],
    step: 5,
    howto: "docker-sandbox",
  },
  {
    slug: "cloud", title: "OpenHands Cloud", group: "在哪里跑",
    one: "OpenHands Cloud 是官方托管的在线版。不用自己装，登录就能用，按用量付费。",
    like: "像共享单车。车是公司的，坏了也是公司修，你骑多少付多少。",
    here: [
      "到 [app.all-hands.dev](https://app.all-hands.dev) 用 GitHub、GitLab 或 Bitbucket 账号登录。连上代码仓库后，可以在网页里开对话，也可以在 GitHub 上 `@openhands` 叫它干活。",
      "它还能配合本地 Agent Canvas 用。一是当模型来源：在设置的 `API Keys` 页复制 `LLM API Key`，填进 Agent Canvas。二是当后端：在 `Manage Backends` 里登录 Cloud，对话就改在云端沙盒里跑。",
    ],
    myths: [
      "「填了 Cloud 的 key，就是在云上跑」：只填 LLM key 的话，活还在你电脑上干，只是模型走 OpenHands。把 Cloud 加成后端，活才搬到云上。",
      "「免费模型在哪都免费」：只有通过 app.all-hands.dev 调用才免费。自己部署的，或者别家同名的模型，要另外付钱。",
    ],
    see: ["api-key", "backend", "llm"],
    step: 2,
    howto: "cloud",
  },

  // ---------- 模型和代理 ----------
  {
    slug: "llm", title: "模型（LLM）", group: "模型和代理",
    one: "模型就是背后真正思考的大模型，比如 Claude、GPT、Gemini。OpenHands 不带模型，要你接一个。",
    like: "代理是一辆车，模型是发动机。车还是那辆，换个发动机，跑起来就不一样。",
    here: [
      "在 `Settings > LLM` 里接模型。首次设置时，服务商默认是 OpenHands，默认模型是 OpenAI GPT-5.6 Sol。想用免费的，选 DeepSeek V4 Flash。",
      "官方的建议是：长任务、要紧的任务，用你付得起的最强模型。日常小改动用便宜的，规划、查 bug、审代码再换回强的。",
    ],
    list: [
      ["服务商的 API key", "如 Anthropic、OpenAI"],
      ["OpenHands 的 key", "从 Cloud 拿，有免费模型"],
      ["已登录的订阅", "如 Claude Code、Codex"],
      ["本地模型", "如 LM Studio、Ollama"],
    ],
    listTitle: "接模型的四种办法", listHead: ["你手上有", "说明"],
    myths: [
      "「随便一个模型都行」：官方说它需要足够强的模型。太弱的模型容易卡住、出错。",
      "「本地模型不花钱，最划算」：它要很强的电脑。官方推荐的本地模型，要 24GB 显存的显卡，或者 64GB 内存的 Apple 芯片 Mac。",
    ],
    see: ["api-key", "llm-profile", "token"],
    step: 2,
    howto: "local-llm",
  },
  {
    slug: "api-key", title: "API key", group: "模型和代理",
    one: "API key 是一串密钥，相当于模型服务商给你的门卡。用它付费调用模型，不要发给别人。",
    like: "像一张绑了你银行卡的门禁卡。谁拿到它，谁就能刷你的钱。",
    here: [
      "去服务商的网站申请，再粘进 `Settings > LLM`。新手最省事的是 OpenHands Cloud：登录后打开设置里的 `API Keys` 页，复制 `LLM API Key`。",
      "key 存在后端的 [Agent Server](/wiki/agent-server/) 里，不存在浏览器里。Claude Code 这类代理的 key 存在 `Settings → Secrets`，随时能改、能删。",
    ],
    myths: [
      "「Cloud 设置页里的 key 都一样」：那里有两种。==填进 Agent Canvas 接模型的，是 `LLM API Key`。==另一种 Cloud API key，是写程序调用 Cloud 接口用的。",
      "「用 Claude Code 就必须有 key」：后端在你这台电脑上、你又登录过 Claude Code 订阅时，它直接用这个登录，不用 key。",
    ],
    see: ["llm", "llm-profile", "cloud"],
    step: 2,
    howto: "cloud",
  },
  {
    slug: "token", title: "token", group: "模型和代理",
    one: "token 是模型用量的计算单位，相当于「字数额度」。任务越长、来回越多，花得越多。",
    like: "像出租车打表。路越远、绕得越多，表跳得越多。",
    here: [
      "模型按 token 收费，价格通常按每一百万个算。读进去的（输入）和写出来的（输出）分开算，输出更贵。重复读到的相同内容有缓存价，便宜很多。",
      "输入框旁有一个用量表，点开能看花了多少。对话太长时，可以点 `Compact context` 把前面的记录压缩一下。",
    ],
    myths: [
      "「看到了用量表，就不会超支」：对话里的 `Usage` 表只显示用量，不会替你踩刹车，读数可以超过 100%。",
      "「一直在同一个对话里聊最省」：对话越长，前面的记录越占地方。换一件事，就开新对话。",
    ],
    see: ["llm", "llm-profile", "conversation"],
    step: 2,
    howto: "cost",
  },
  {
    slug: "llm-profile", title: "LLM Profile（模型设置档）", group: "模型和代理",
    one: "LLM Profile 是一套存好的模型设置：哪家、哪个模型、哪个 key。可以存好几套，随时切换。",
    like: "像手机里存的几个闹钟。工作日一个、周末一个，不用每次重新设。",
    here: [
      "在 `Settings > LLM` 里新建。保存前，它会先试一下 key 和模型能不能用，不行就不让存。",
      "在对话里打 `/model`，能看有哪些设置档。打 `/model 档名` 就切过去。切换不会丢掉聊天记录和进度，只影响之后的请求。",
    ],
    myths: [
      "「同一个 key 要在每套里粘一遍」：本地后端可以建一个 Provider Connection，存一次 key，几套设置共用。",
      "「Claude Code 也在这里选模型」：Claude Code、Codex 这类 [ACP](/wiki/acp/) 代理自己管模型。它们的设置在 `Settings > Agent`。",
    ],
    see: ["llm", "agent-profile", "api-key"],
    step: 2,
    howto: "cost",
  },
  {
    slug: "agent-profile", title: "Agent Profile（代理设置档）", group: "模型和代理",
    one: "Agent Profile 是一套存好的代理设置：用哪个 AI（OpenHands、Claude Code……）、配哪套模型。",
    like: "像游戏里的角色存档。选哪个角色、带什么装备，都存在一个档里。",
    here: [
      "在 `Settings > Agent` 里管理。首次设置时选的代理，会自动建成第一套。设为当前的那套，就是新对话默认用的。",
      "OpenHands 的设置档会指向一套 [LLM Profile](/wiki/llm-profile/)。ACP 的设置档用那个代理自己的模型和登录。档里还能限定它能用哪些工具、能拿哪些密钥。",
    ],
    myths: [
      "「对话聊到一半可以换代理」：对话开始后就不能换了。想换，选好设置档再开一个新对话。模型倒是可以中途用 `/model` 换。",
      "「Agent Profile 和 LLM Profile 是一回事」：Agent Profile 管由谁来干活，LLM Profile 管 OpenHands 用哪个模型。",
    ],
    see: ["llm-profile", "acp", "agent"],
    step: 4,
  },
  {
    slug: "acp", title: "ACP（换用别家代理）", group: "模型和代理",
    one: "ACP（Agent Client Protocol）是一种通用接口。支持它的 AI，比如 Claude Code、Codex、Gemini CLI，都能在 Agent Canvas 里用。",
    like: "像 USB 接口。鼠标、键盘、U 盘，只要是 USB 的，插上就能用。",
    here: [
      "选了 ACP 代理后，Agent Server 会在后台启动那个代理的命令行程序。它自己调模型、自己用工具，Agent Canvas 只负责传话和显示。",
      "首次设置的第一步就能选，之后在 `Settings > Agent` 里改。后端就在你这台电脑上、你又登录过那个代理的订阅时，通常不用再填 key。",
    ],
    list: [
      ["Claude Code", "Anthropic 的代理"],
      ["Codex", "OpenAI 的代理"],
      ["Gemini CLI", "Google 的代理"],
      ["Pi、OpenCode", "开源，Cloud 上不能用"],
    ],
    listTitle: "现成能选的 ACP 代理", listHead: ["代理", "说明"],
    myths: [
      "「在 Docker 或云上，也能用我电脑上的登录」：用不了。新容器里没有你的登录，要另外填 key 或令牌。",
      "「用 Claude Code 就要按 API 付费」：后端在本机时，它会用你已登录的 Pro 或 Max 订阅。登录和 key 都有时，优先用登录。",
    ],
    see: ["agent-profile", "agent", "llm"],
    step: 4,
  },

  // ---------- 扩展和自动化 ----------
  {
    slug: "automation", title: "自动化", group: "扩展和自动化",
    one: "自动化就是定好时间或条件，让 AI 自己开对话干活。比如每天早上汇总 Slack，有新 PR 就自动审。",
    like: "像洗衣机的预约。晚上设好时间，早上衣服就洗完了。",
    here: [
      "在侧边栏的 `Automate` 里管理。最简单的建法，是在对话里直接让它建一个，说清楚什么时候跑、做什么。也可以从模板开始，见 [现成自动化](/automations/)。",
      "触发方式有两类。一类按时间，比如每周一早上 9 点。一类等某件事发生，比如来了新 PR。每次运行一般会开一个新对话，跑完可以回来看记录。",
    ],
    myths: [
      "「设好就一直会跑，电脑关不关都行」：自动化在后端上跑。本地后端停了，它就不跑了。==想让它一直跑，放到服务器或 Cloud 上。==",
      "「它自己就能连上 Slack、GitHub」：要先接好这些服务，比如装好对应的 [MCP](/wiki/mcp/)。没接的服务，它用不了。",
      "「本机也能直接收 GitHub 的事件」：外部服务要能从网上找到你的后端。本机地址收不到，要先把它暴露出去，或者改成定时去查。",
    ],
    see: ["mcp", "backend", "conversation"],
    step: 6,
    howto: "custom-automation",
  },
  {
    slug: "skill", title: "技能（Skill）", group: "扩展和自动化",
    one: "技能是一份写给 AI 看的说明书（Markdown），告诉它某类事怎么做。相关的时候它会自己加载。",
    like: "像员工手册里的某一章。平时不翻，要报销了，才翻到报销那一章。",
    here: [
      "每个技能是一个文件夹，里面有一份 `SKILL.md`。开头写名字和什么时候用。平时 AI 只看这两项，用到时才读全文。",
      "放在项目的 `.agents/skills/` 下，只对这个项目生效。放在 `~/.agents/skills/` 下，你所有项目都能用。在 `Customize > Skills` 里可以开关。改了技能文件，要开新对话才生效。",
    ],
    myths: [
      "「技能能让它做到原来做不到的事」：技能只是说明，不给权限，也不装软件。它能用的，还是环境里已有的文件、工具和网络。",
      "「目录里的技能默认全开」：默认只开官方推荐的那些。别的要你自己打开。",
      "「网上的技能都能放心装」：技能能让它跑脚本、读文件、用密钥。只装信得过的来源，装之前先看一遍。",
    ],
    see: ["agents-md", "plugin", "mcp"],
    step: 7,
  },
  {
    slug: "agents-md", title: "AGENTS.md", group: "扩展和自动化",
    one: "AGENTS.md 是放在项目根目录的一份说明：这个项目怎么装、怎么测、有什么规矩。AI 每次进来先读它。",
    like: "像贴在工地门口的须知。谁进门都先看一眼。",
    here: [
      "它的全文会放进每个对话的开头，所以要写短。只写每次都用得上的：项目是做什么的、怎么装、怎么跑测试。",
      "不知道怎么写，可以让 OpenHands 先读一遍项目，替你写一份初稿，你再改。它也认 `CLAUDE.md` 和 `GEMINI.md`。",
    ],
    myths: [
      "「写得越详细越好」：它每次都要读完，越长越占地方、越费钱。只在某类任务才用得上的，写成[技能](/wiki/skill/)。",
      "「放在哪个文件夹都行」：放在仓库的根目录。它管的是这个仓库里的所有对话。",
    ],
    see: ["skill", "workspace"],
    step: 7,
    howto: "new-codebase",
  },
  {
    slug: "plugin", title: "插件", group: "扩展和自动化",
    one: "插件是打包好的一组技能、命令、钩子或 MCP 设置。装一次，这些就都有了。",
    like: "像一个配好的工具箱。要用的工具都在里面，拎起来就能走。",
    here: [
      "一个技能解决一件事。插件适合一整套配合着用的东西，比如几个技能，再加上它们要用的 MCP。它的格式和 Claude Code 的插件兼容。",
      "在本地后端上，打开侧边栏的 `Plugins`，可以搜索、安装、开关插件。开新对话时，也能在启动栏里挂上几个插件，只对这个对话生效。",
    ],
    myths: [
      "「装了就会出现在每个对话里」：停用的插件还装着，但新对话不会加载它。",
      "「插件和技能只能二选一」：插件里本来就装着技能。一件小事写个技能就够，一整套规矩再打包成插件。",
      "「插件都是安全的」：插件能加指令、工具和外部连接。只装信得过的，装之前看看里面有什么。",
    ],
    see: ["skill", "mcp"],
    step: 7,
  },
  {
    slug: "mcp", title: "MCP（接外部工具）", group: "扩展和自动化",
    one: "MCP（Model Context Protocol）是让 AI 接上外部工具的通用插口，比如 GitHub、Slack、Notion。",
    like: "像出国用的转换插头。各国插座不一样，有了它，同一个电器到哪都能插。",
    here: [
      "在 Agent Canvas 的 `Customize > MCP Servers` 里添加。它不在 `Settings` 里，别找错地方。",
      "接好以后，那个服务提供的工具，AI 就能像自带的工具一样用。很多现成自动化都靠它，比如汇总 Slack，要先接好 Slack 的 MCP。",
    ],
    myths: [
      "「加了 MCP，正在跑的对话马上能用」：只对之后开的新对话生效。",
      "「MCP 接得越多越好」：每多接一个，AI 能动的东西就多一批。可以在 Agent Profile 里限定某套设置只用其中几个。",
    ],
    see: ["plugin", "automation", "agent-profile"],
    step: 7,
    howto: "slack-digest",
  },
  {
    slug: "sdk", title: "SDK（自己写代码搭代理）", group: "扩展和自动化",
    one: "SDK 是给程序员用的 Python 工具包，可以用代码自己搭一个代理。Agent Server 就是用它做的。",
    like: "像乐高零件包。买成品就是 Agent Canvas，买零件可以自己拼。",
    here: [
      "Agent Canvas 和 OpenHands Cloud 背后用的都是它。它自带跑命令、改文件、上网、接 MCP 这些工具，用 MIT 协议开源。",
      "它适合要写程序来用的场景。比如一次性的活、定期升级依赖，或者要几个代理一起干的大改动。",
    ],
    myths: [
      "「用 OpenHands 就得学 SDK」：日常用 Agent Canvas 就够了。想把它嵌进自己的程序，才用得上 SDK。",
      "「Cloud 设置页里随便哪个 key 都能用」：SDK 要用 `LLM API Key`。Cloud API key 是给 Cloud 接口用的，填错会报错。",
    ],
    see: ["agent-server", "openhands"],
    step: 8,
  },
];
