// Wiki 条目：每条同样的结构 —— 一句话（one）、比喻（like）、在 OpenHands 里（here，最多两段）、可选的清单表（list）、常见误区（myths）、相关（see）。
// 文字里可以用 **粗体**、==荧光笔==（每条最多一处）、`代码`、[外链](https://…) 和 [站内链接](/路径/)（lib/md.js 里简单转换）。
// 写法照 docs/MAINTAINING.md 的「说人话」：短句、一句一个意思、新词当场解释。
// step: 对应的完整教程步骤（0–8）；howto: 对应的 How-to；seen（可选）：会再遇到它的页面，写中文站内路径，标题从 nav.js 取。
// 依据：OpenHands/OpenHands 1a7c59b（v1.40.0）、OpenHands/docs edd916f（2026-11-13 核对）。

export const WIKI_GROUPS = ["基本概念", "习惯", "在哪里跑", "模型和代理", "扩展和自动化"];

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
    like: "像你手里的对讲机。你在这头交代、听汇报，活是施工点上的队伍干的。换个频道，连上的就是另一个施工点。",
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
    like: "普通聊天 AI 像电话里的装修顾问，只告诉你怎么弄。代理像上门的师傅，自己拿工具干。",
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
    like: "像一张施工单。一张单子只写一件活，干到哪、动了什么，都记在这张单上。",
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
    like: "像物业值班室的小窗口。你递进去一行口令，里面递出来几行结果。",
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
    like: "像装修里的变更单。要改哪些地方，先列在单子上请你过目。你签了字，才算进正式方案。",
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
  // ---------- 习惯 ----------
  {
    slug: "three-part-brief", title: "三段式交代", group: "习惯",
    one: "交代一件事，分三段说：我想要什么、做好是什么样子、做完给我看什么。",
    like: "像开工前跟师傅交底。要什么、怎样算合格、完工拿什么给你验，三句话说在前头。",
    here: [
      "「做好是什么样子」写成能试的几条，它会照着去试。「做完给我看什么」让它交代检查了什么、看到了什么。你不用看懂代码，看这些就够了。",
      "真实项目里还是这三段，再补上在哪、背景和不能碰的地方。==「做好是什么样子」最要紧==：官方文档说，目标越能用程序检查，它做得越好。",
    ],
    myths: [
      "「看不懂代码，就没法检查它做得对不对」：在「做完给我看什么」里，让它写清检查了什么、看到了什么。看这些就够了。",
      "「说一句『弄好看点』也算交代清楚了」：好不好看没有标准。写清要改成什么样，或者给一张参考图。你判断不了做完没有，它也判断不了。",
      "「一段话里交代好几件事更省事」：官方建议一个提示词只做一个功能。大活拆成几步，一步交代一次。",
    ],
    see: ["agent", "conversation", "read-first"],
    seen: ["/start/3-first-use/", "/guide/3-first-conversation/", "/howto/good-instructions/", "/howto/recipes/", "/howto/new-codebase/", "/howto/issue-to-pr/"],
    step: 3,
    howto: "good-instructions",
  },
  {
    slug: "read-first", title: "先只看不改", group: "习惯",
    one: "接手一个项目，先让它读代码、讲给你听，不改任何文件。看懂了，再让它动手。",
    like: "像开工前先请师傅上门看房。量一量、讲讲哪里该改，这一趟不动一颗钉子。",
    here: [
      "在交代的话最后加一句：「先只看不改：不要改任何文件，不要提交，不要推送。」它照样能读文件、跑命令，把项目弄清楚。",
      "发出去以后，点对话标题栏里的信息按钮，打开概况面板。说了只看不改，这里就不该有新改动。升级依赖、修安全漏洞也一样：先让它列清单、讲清楚，再一次改一处。",
    ],
    myths: [
      "「只看不改，它就帮不上什么」：官方文档说，回答关于代码的问题是它擅长的事。它会先在项目里翻一圈，再回答你。",
      "「说了只看不改，它就一定不会改」：它也会出错。真改了，点「Stop」让它停下，在概况面板的 Commits 里看改了什么，再让它全部撤回。",
      "「看懂了就可以直接放手改」：动手之前，先把手上的改动提交或暂存，再确认测试能过。这样它改了什么，一眼就看得出来。",
    ],
    see: ["agents-md", "three-part-brief", "conversation"],
    seen: ["/howto/new-codebase/", "/howto/good-instructions/", "/howto/dependency-upgrades/", "/howto/vulnerability-remediation/", "/howto/recipes/", "/howto/issue-to-pr/"],
    step: 3,
    howto: "new-codebase",
  },
  {
    slug: "empty-folder", title: "先用空文件夹", group: "习惯",
    one: "头几次用，新建一个空文件夹给它，让它只在里面干活。",
    like: "像头一回请师傅，先给他一间空屋子试手。干砸了也不心疼。门没上锁，所以要跟他说好只在这间里干。",
    here: [
      "在你自己的电脑上，它用你账号的权限。你能读写的文件，它都能读写。新手课只做一件事来防：给它一个新建的空文件夹，再在交代的话里写明「只动这个文件夹」。",
      "建好以后，点 `Open Workspace` 把它打开，它就成了这次的[工作区](/wiki/workspace/)。每做一件新事，就新建一个空文件夹，在新的对话里打开它。",
    ],
    myths: [
      "「有了空文件夹，它就碰不到别处」：这个文件夹不是锁，只是它干活的地方。==想把它真关起来，用 [Docker](/wiki/docker/)。==",
      "「建好文件夹就行」：还要在对话里打开它。没打开就发消息，文件可能不会出现在里面。看到输入框下面写着文件夹的名字，再发。",
      "「几件事放在同一个文件夹里也行」：两个对话用同一个文件夹，改的就是同一批文件。一个改到一半，另一个可能把它覆盖掉。",
    ],
    see: ["workspace", "sandbox", "docker"],
    seen: ["/start/1-why/", "/start/3-first-use/", "/guide/0-what/", "/guide/3-first-conversation/", "/howto/parallel/"],
    step: 3,
  },
  {
    slug: "run-once", title: "新自动化先跑一次", group: "习惯",
    one: "新建的自动化，先用 `Run now` 手动跑一次。看过结果和花费，再让它按时自己跑。",
    like: "像签了保养合同，头一回先陪师傅走一遍。看他怎么干、花了多少，放心了再让他按期自己来。",
    here: [
      "在 `Automate` 里点它那一行的 `⋮`，选 `Run now`，不用等到点。运行记录里会多一条，状态从 `PENDING`、`RUNNING` 变成 `COMPLETED`。",
      "点进这次运行开的对话，看它具体做了什么。`FAILED` 的也点进去，看卡在哪。`Activity Log` 里有这次花了多少钱，乘以一个月要跑的次数，就能估出一个月的花费。",
    ],
    myths: [
      "「建好了，到点再看也一样」：建好就是开着的，下一个时间点会自己跑。==先跑一次，有问题在到点之前就能发现。==",
      "「状态是 `COMPLETED` 就没问题」：还要看结果到了没有，比如目标频道里出现了汇总。再点进它开的对话，看它具体做了什么。",
      "「等事件触发的自动化没法先试」：比如 issue 转 PR 那个，找一个测试用的 issue 打上标签，等下一轮运行，再看运行记录。",
    ],
    see: ["automation", "backend", "token"],
    seen: ["/guide/6-automations/", "/howto/custom-automation/", "/howto/slack-digest/", "/howto/cost/", "/howto/issue-to-pr/"],
    step: 6,
    howto: "custom-automation",
  },
  {
    slug: "draft-pr", title: "PR 先开成草稿", group: "习惯",
    one: "让它开 PR 时，先开成草稿。有人审过，再合并。",
    like: "像先递一份标着「草稿」的变更单。你看过、改成正式的，才走签字那一步。",
    here: [
      "草稿 PR 是还没标成「可审」的 [PR](/wiki/pr/)。在交代的话里写「开一个草稿 PR」，它就照这样开。",
      "GitHub issue to PR 自动化的 `Pull request mode` 默认就是 Draft（草稿），不用改。",
    ],
    myths: [
      "「它说测试都过了，草稿可以直接合」：==合并之前一定要有人审过。==先看它改了什么，再在自己电脑上试一下。",
      "「打标签自动开的 PR，和我亲手交代的一样可信」：issue 正文和评论，任何有权限的人都能写。它把这些当成要做的任务，所以 PR 先开成草稿，审过再合。",
      "「开成草稿，自动审查马上就来」：审 PR 和「QA changes」这两个自动化都会跳过草稿。草稿改成可审以后，它们才开工。",
    ],
    see: ["pr", "automation", "read-first"],
    seen: ["/howto/issue-to-pr/", "/howto/code-review/", "/howto/qa-changes/"],
    step: 6,
    howto: "issue-to-pr",
  },

  // ---------- 在哪里跑 ----------
  {
    slug: "agent-server", title: "Agent Server", group: "在哪里跑",
    one: "Agent Server 是真正跑 AI 的后台程序。Agent Canvas 只是界面，活是它干的。",
    like: "像施工点上真正干活的那支队伍。对讲机只管传话，施工日志、工具和钥匙都在队伍手里。",
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
    like: "像同一家装修公司的几个施工点。对讲机还是那部，拨到哪个点，就由哪个点的队伍开工。各点的施工单和工具各归各。",
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
    like: "像院子里另搭的一间封闭工棚。师傅在棚里怎么折腾，屋里都碰不到。你搬进棚里的东西，他照样能动。",
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
    like: "像工地上的集装箱板房。一间间吊过来就能用，彼此不通。OpenHands 让师傅在其中一间里干活。",
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
    slug: "parallel-agents", title: "并行代理", group: "在哪里跑",
    one: "并行代理就是同时让好几个代理干活。每个开一个对话，各干各的。",
    like: "像同时请几位师傅开工。一人一间屋，各干各的。两位挤进同一间改同一面墙，就会这个刚砌好、那个又拆了。",
    here: [
      "一个 [Agent Server](/wiki/agent-server/) 本来就能同时跑好几个[对话](/wiki/conversation/)。第一个还在干活，回首页再开一个就行。==真正的麻烦是两个对话用同一个文件夹，改的就是同一批文件。==",
      "Agent Canvas 主打的办法是 Worktree。它是同一个 Git 项目的另一份工作副本，放在单独的分支上。开对话时把运行方式从 `Local` 换成 `Worktree`，它就在新副本里改，不碰你手上那份。",
    ],
    list: [
      ["各用各的文件夹", "几件不相干的事，比如两个不同的项目"],
      ["Worktree", "同一个 Git 项目里同时做两件事"],
      ["每个对话一个容器", "想让每个 AI 关在自己的[沙盒](/wiki/sandbox/)里"],
    ],
    listTitle: "三种分开的办法", listHead: ["办法", "适合"],
    myths: [
      "「各开一个容器，就不会改乱」：两个容器挂同一个文件夹，看到的还是同一批文件。容器隔开的是电脑上别的东西，文件夹还是要分开。",
      "「同时跑几个，钱还是一份」：每个对话各花各的 [token](/wiki/token/)。同时跑三个，就是三份钱。",
      "「想开多少就开多少」：后端同时跑的任务有上限。到了上限，自动化的那一次会跳过，显示 `SKIPPED`。",
    ],
    see: ["workspace", "sandbox", "conversation"],
    step: 5,
    howto: "parallel",
    seen: ["/guide/5-backends/", "/howto/parallel/", "/howto/docker-sandbox/", "/howto/cost/"],
  },
  {
    slug: "cloud", title: "OpenHands Cloud", group: "在哪里跑",
    one: "OpenHands Cloud 是官方托管的在线版。不用自己装，登录就能用，按用量付费。",
    like: "像把活放到装修公司自己的车间做。场地、设备都归公司管，用多少付多少。",
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
  {
    slug: "organization", title: "组织（Organization）", group: "在哪里跑",
    one: "组织是 OpenHands Cloud 里给团队用的共享空间。成员共用一个额度池和一套默认模型，各人有各的角色。",
    like: "像几个人在装修公司合开一个团体账户。钱存在一处，默认请同一位设计师。谁能充钱、谁能拉人进来，看各自的权限。各人的施工单，别人看不到。",
    here: [
      "它是商业功能，要订阅 OpenHands Cloud 的方案，或者用 OpenHands Enterprise。==对话默认只有自己看得到，同一个组织的人也看不到。==",
      "每人还有一个只属于自己的个人空间。新对话开在当前选中的组织里，用应用里的组织切换器来换。在 OpenHands Enterprise 上，Admin 和 Owner 还能设每月预算：整个组织一个上限，每人一个默认上限，个别人可以另设。",
    ],
    list: [
      ["Member", "开对话（花组织的额度），管自己的私人设置"],
      ["Admin", "再加上：邀请成员、把成员升成 Admin、充额度、改默认模型"],
      ["Owner", "再加上：把人升成 Owner、认领 GitHub 或 GitLab 上的组织、删掉组织"],
    ],
    listTitle: "三种角色", listHead: ["角色", "能做什么"],
    myths: [
      "「同一个组织里，队友能看到我的对话」：默认看不到。MCP、密钥、API key、Slack 连接这些私人设置，Admin 和 Owner 也看不到。",
      "「开源免费的 Agent Canvas 里就有组织」：没有。组织只在 OpenHands Cloud 的付费方案和 OpenHands Enterprise 里有。",
      "「组织就是共用一个 Agent Server」：不是一回事。共享 Agent Server，是把一个[后端](/wiki/backend/)放到服务器上，大家都连它，机器要自己管。组织是 Cloud 里的成员、角色和共用额度。",
    ],
    see: ["cloud", "agent-server", "integrations"],
    step: 8,
    howto: "team",
    seen: ["/guide/8-beyond/", "/howto/team/"],
  },

  // ---------- 模型和代理 ----------
  {
    slug: "llm", title: "模型（LLM）", group: "模型和代理",
    one: "模型就是背后真正思考的大模型，比如 Claude、GPT、Gemini。OpenHands 不带模型，要你接一个。",
    like: "像师傅请教的设计师。动手的是师傅，怎么做是设计师想的。OpenHands 不带设计师，要你自己请一位。",
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
    like: "像你在设计事务所开的签单卡。谁拿到它，谁就能记在你账上请设计师干活。",
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
    like: "像设计师按工时收费。活越大、来回改得越多，账单越长。",
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
    like: "像手机里存好的几位设计师：哪家事务所、哪一位、记谁的账。要换人点一下，不用重新谈。",
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
    like: "像事先排好的班组：派哪位师傅、配哪位设计师、能带哪些工具和钥匙。开工时直接点名。",
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
    like: "像一套通用的进场规范。别家公司的师傅照着它来，就能进你的工地、接你的对讲机。他们还自带设计师。",
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
    like: "像签了一份定期保养合同。到了约定的日子，或者出了约定的事，师傅自己上门。不用你每次打电话。",
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
    slug: "integrations", title: "集成（在 Slack、GitHub 里叫它）", group: "扩展和自动化",
    one: "集成就是在团队平时干活的地方叫它：Slack 的对话串，GitHub、GitLab 的 issue 和 PR，Jira 的工单。",
    like: "像在你们平时说事的工作群里、报修单上，直接 @ 一声师傅。不用另打电话，他就在那儿接活、回话。前提是装修公司那边给你开了户。",
    here: [
      "这些都是 [OpenHands Cloud](/wiki/cloud/) 的功能。先用 GitHub、GitLab 或 Bitbucket 账号登录 Cloud，再接上要用的服务。GitHub 要在 Cloud 里授权仓库。Slack 要工作区管理员先装 OpenHands 应用，每个人再到 `Settings > Integrations` 连上自己的账号。Jira 要管理员先在 Jira 和 Cloud 两边配好。",
      "在 Slack 里叫它，用的是你自己连上的 Cloud 账号。在 GitHub 上，它能碰哪些仓库，看 Cloud 里授权了哪些，也看你在 GitHub 上的权限。团队订了[组织](/wiki/organization/)，Owner 又认领了 GitHub 或 GitLab 上的组织，那里仓库的请求就归这个组织，用量记在组织的额度上。",
    ],
    list: [
      ["Slack", "在频道里或对话串里 `@openhands`"],
      ["GitHub", "给 issue 打 `openhands` 标签，或留言 `@openhands`。PR 里留言 `@openhands`，可以提问、让它改"],
      ["GitLab", "和 GitHub 一样，PR 在这里叫 MR。群组项目要 GitLab Premium 或 Ultimate"],
      ["Jira Cloud", "给工单打 `openhands` 标签，或评论 `@openhands`。工单里写明是哪个仓库"],
    ],
    listTitle: "在哪里叫它", listHead: ["在哪", "怎么叫"],
    myths: [
      "「本地的 Agent Canvas 也能在 Slack 里 `@openhands`」：这几样集成都要 OpenHands Cloud。本地后端想用 Slack、GitHub，路子是[自动化](/wiki/automation/)和 [MCP](/wiki/mcp/)，比如每天汇总 Slack。",
      "「Slack 串里谁都能接着叫它」：只有开这个对话的人，在串里再 `@openhands`，才算接着说。",
      "「随便哪个 PR 里 `@openhands` 都管用」：PR 的来源仓库和目标仓库，都得是你在 Cloud 里授权过的。",
    ],
    see: ["cloud", "organization", "automation"],
    step: 8,
    howto: "team",
    seen: ["/guide/8-beyond/", "/howto/cloud/", "/howto/team/"],
  },
  {
    slug: "skill", title: "技能（Skill）", group: "扩展和自动化",
    one: "技能是一份写给 AI 看的说明书（Markdown），告诉它某类事怎么做。相关的时候它会自己加载。",
    like: "像师傅工具包里的一本本操作手册。要贴瓷砖了，才翻开贴瓷砖那本。",
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
    like: "像一整套配好的专项工具箱，比如厨房改造那套。手册、工具、接头都在里面，一次搬进工地。",
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
    like: "像给工地接上外面的水、电、网。接通了哪一路，师傅就能用哪一路；没接的，他用不了。",
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
    like: "像装修公司自己用的那套工具和工法，也公开给你用。想自己组一支队伍，就从这套家伙开始。",
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
