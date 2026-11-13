// English Wiki entries: same slugs and structure as wiki.js. Only the text fields; slug/see/step/howto come from wiki.js.
// Same plain-words rules as the Chinese (docs/MAINTAINING.md): short sentences, one idea each, at most one ==highlight== per entry.
export const WIKI_GROUPS_EN = {
  "基本概念": "Basics",
  "在哪里跑": "Where it runs",
  "模型和代理": "Models and agents",
  "扩展和自动化": "Extensions and automation",
};

export const WIKI_EN = {
  // ---------- Basics ----------
  "openhands": {
    title: "What OpenHands is", group: "Basics",
    one: "OpenHands is an open-source AI coding project. The AI runs commands and edits files itself, while you watch and make the calls.",
    like: "Like hiring a contractor who does the work instead of just giving advice. You describe the result, they measure and build, and you sign off.",
    here: [
      "Today, \"OpenHands\" mostly means [Agent Canvas](/en/wiki/agent-canvas/), a control center you use in the browser. The work itself is done by the [Agent Server](/en/wiki/agent-server/) behind it.",
      "The software is free and open source under the MIT license. It doesn't come with a model. You connect your own, and that's where most of the cost is.",
    ],
    list: [
      ["Agent Canvas", "The control center you use (open source)"],
      ["Agent Server", "The program that runs the agent"],
      ["OpenHands Cloud", "The hosted version"],
      ["SDK", "Build your own agent in Python"],
    ],
    listTitle: "The pieces of OpenHands", listHead: ["Name", "What it is"],
    myths: [
      "\"The tutorial says to run `openhands serve`\": that starts the old local GUI, which is deprecated. If you've only installed Agent Canvas, the command won't run at all. Use the desktop app or run `agent-canvas` instead.",
      "\"The OpenHands CLI is the official command-line version\": it's no longer actively maintained. The project now points people to Agent Canvas.",
      "\"Install it and you're ready\": you still need a [model](/en/wiki/llm/). The easiest start is a key from OpenHands Cloud, which includes a free model.",
    ],
  },
  "agent-canvas": {
    title: "Agent Canvas", group: "Basics",
    one: "Agent Canvas is the OpenHands control center. You talk to the agent, review the files it changed and manage automations here.",
    like: "Like a TV remote. The buttons are on the remote, but the show comes from the station. Change the channel and you're watching a different station.",
    here: [
      "It displays things and sends instructions, but it doesn't run the agent. The [backend](/en/wiki/backend/) it's connected to does the work. By default, that backend is on your own computer.",
      "There are a few ways to open it. The desktop app bundles everything it needs, so no [terminal](/en/wiki/terminal/) is required. With npm, run `agent-canvas` and open `http://localhost:8000`. With Docker, the address is `http://localhost:8000/canvas`.",
    ],
    myths: [
      "\"It's the same as `openhands serve`\": `openhands serve` starts the old, deprecated GUI. `agent-canvas` starts the current control center.",
      "\"Closing the browser stops the agent\": the browser is just a window. With an npm install, closing the terminal that runs it is what stops it. A backend in Docker, on a server or in the cloud keeps running until you stop it.",
      "\"It only runs the OpenHands agent\": Claude Code, Codex, Gemini CLI and others work in it too. See [ACP](/en/wiki/acp/).",
    ],
  },
  "agent": {
    title: "Agent", group: "Basics",
    one: "An agent is an AI that acts. Beyond answering, it runs commands, reads and writes files, and keeps trying until the job is done.",
    like: "A chat AI is a helpline that tells you how to fix the sink. An agent is the plumber who shows up and fixes it.",
    here: [
      "In Agent Canvas, the default agent is called OpenHands. You can swap in another company's agent, such as Claude Code or Codex.",
      "Send one message and it breaks the job into steps: read files, run commands, change code, run the checks again. Each step shows up in the conversation. To stop it, click `Stop` next to the message box.",
    ],
    myths: [
      "\"The agent is the model\": the model does the thinking and the agent does the work. The same agent can run on different [models](/en/wiki/llm/).",
      "\"If it says it's done, it's right\": it makes mistakes too. ==Look at which files it changed and what it ran, then try the result yourself.==",
      "\"It only writes code\": it can run commands, so it can also write reports or sort through information. One of the official automation templates summarizes Slack.",
    ],
  },
  "conversation": {
    title: "Conversation", group: "Basics",
    one: "A conversation is one job you hand to the agent. Each one has its own history, settings and file changes.",
    like: "Like a repair ticket. One ticket per job, and everything done on that job is written on it.",
    here: [
      "New job, new conversation. To try another approach without losing the original, use `Branch from here` on a message (on local backends). The original stays as it was.",
      "A conversation belongs to the [backend](/en/wiki/backend/) that was active when you started it. Switch backends and the sidebar shows that backend's conversations. You can export any conversation as a Markdown or HTML file.",
    ],
    myths: [
      "\"Keeping everything in one conversation is easiest\": the longer the history, the more it rereads each time. That means more [tokens](/en/wiki/token/) to pay for. Start a new conversation for a new job.",
      "\"Changing settings changes the running conversation\": a conversation keeps the agent and model it started with. New settings apply to conversations you start afterward.",
      "\"Archiving deletes it\": archiving only hides it, and you can bring it back. Deleting is permanent.",
    ],
  },
  "workspace": {
    title: "Workspace", group: "Basics",
    one: "The workspace is the folder the agent can read and write. Everything it should touch is inside.",
    like: "Like the taped-off area on a renovation site. Inside the tape, anything goes. Outside it, hands off.",
    here: [
      "Before you start a conversation, click `Open Workspace` and pick a folder. If you're new, create an empty folder just for this.",
      "Where the workspace lives depends on the [backend](/en/wiki/backend/). In Docker, the agent only sees the folders you mount, such as `~/projects`. Inside the container, that's `/projects`. On a remote server, it sees the server's files, not your laptop's.",
    ],
    myths: [
      "\"Picking a workspace walls off everything else\": not when it runs directly on your computer. It has your account's permissions and can reach other folders. ==For real isolation, use [Docker](/en/wiki/docker/).==",
      "\"Several conversations can share one folder\": they'll edit the same files and may overwrite each other. Give each parallel job its own folder.",
    ],
  },
  "terminal": {
    title: "Terminal", group: "Basics",
    one: "The terminal is the window where you type commands. On a Mac it's the Terminal app; on Windows, use PowerShell.",
    like: "Like texting your computer. You type a line, it replies with a few lines.",
    here: [
      "The desktop app needs no terminal, to install or to use. With npm or Docker, you type commands in a terminal, such as `agent-canvas`.",
      "With an npm install, keep that terminal window open. Close it and the local backend stops. Agent Canvas also has a terminal panel of its own.",
    ],
    myths: [
      "\"You need to code to use a terminal\": copy one line from the guide and press Enter. If the output makes no sense, paste it to the agent and ask.",
      "\"Closing the terminal loses my settings\": an npm install stops, but your settings and conversations stay in the `~/.openhands` folder. Run `agent-canvas` again to pick up where you left off.",
    ],
  },
  "pr": {
    title: "PR (pull request)", group: "Basics",
    one: "A PR is a set of changes you submit for review before they're merged into the main version.",
    like: "Like handing in a draft for the editor to mark up. Only after they approve does it go to print.",
    here: [
      "PRs are a feature of code hosts like GitHub. OpenHands can open them for you. In Agent Canvas, the conversation overview has a control that asks the agent to commit, push or open a PR.",
      "Once OpenHands Cloud is connected to GitHub, add the `openhands` label to an issue or comment `@openhands`. It works on the issue and opens a PR if it thinks the issue is solved. Then it comments back with the link.",
    ],
    myths: [
      "\"Opening a PR puts the change live\": a PR is only a request. The change lands when someone reviews it and clicks merge.",
      "\"A PR from the agent is safe to merge as-is\": read what it changed and try it on your own machine first. You can also have it review PRs. See [Have it review a PR](/en/howto/code-review/).",
    ],
  },

  // ---------- Where it runs ----------
  "agent-server": {
    title: "Agent Server", group: "Where it runs",
    one: "The Agent Server is the background program that actually runs the agent. Agent Canvas is just the screen.",
    like: "Like a restaurant kitchen. Agent Canvas takes the order at the front; the kitchen cooks it.",
    here: [
      "When you send a message, Agent Canvas passes it to the Agent Server. The server starts or resumes the conversation, calls tools, and streams each step back to you.",
      "Conversation history, model settings, secrets and MCP settings all live on the server, not in your browser. Connect to the same backend from another computer and it's all still there.",
    ],
    myths: [
      "\"It can only run on my computer\": it also runs on a Mac Mini, a cloud server or OpenHands Cloud. Agent Canvas can connect to several and switch between them.",
      "\"I have to install it separately\": the desktop app and the `agent-canvas` command start it for you.",
      "\"It also runs the scheduled jobs\": schedules and event triggers belong to a separate service, the Automation Server. The default install starts both.",
    ],
  },
  "backend": {
    title: "Backend", group: "Where it runs",
    one: "The backend is where the agent does its work: your computer, a Docker container, a server, or OpenHands Cloud.",
    like: "Like a delivery app with several kitchens. Same app, but whichever kitchen you pick cooks the meal.",
    here: [
      "A backend runs the [Agent Server](/en/wiki/agent-server/), plus the Automation Server when automations are on. The default install sets up a local backend on your computer.",
      "Open the backend switcher in the top bar and choose `Manage Backends` to add, edit or remove one. Model settings, MCP servers and automations belong to each backend. ==Switch backends and all of these switch too.==",
    ],
    list: [
      ["Local (default)", "Fastest; runs on your computer"],
      ["Docker", "Sees only the folders you mount"],
      ["Server or VM", "Always on; can be shared"],
      ["OpenHands Cloud", "Hosted; spares your computer"],
    ],
    listTitle: "Common backends", listHead: ["Backend", "Good for"],
    myths: [
      "\"A remote backend means a server somewhere far away\": \"remote\" describes how Canvas connects, not where it runs. A separate process or container on the same computer counts as remote.",
      "\"Conversations move with me when I switch\": each backend has its own conversations and settings. After switching, you see that backend's.",
    ],
  },
  "sandbox": {
    title: "Sandbox", group: "Where it runs",
    one: "A sandbox is a walled-off environment. Whatever the agent does inside can't reach anything outside.",
    like: "Like a sandbox at the playground. Dig all you want; the lawn around it stays clean.",
    here: [
      "OpenHands often uses a [Docker](/en/wiki/docker/) container as the sandbox, holding only the folders you mount. OpenHands Cloud gives each conversation its own cloud sandbox.",
      "The npm install and the desktop app run directly on your computer, with no sandbox. The agent has your account's permissions. To isolate it, run the whole stack in Docker, or give each conversation its own container.",
    ],
    myths: [
      "\"A sandbox makes it completely safe\": it can still change or delete anything in the folders you mount. Broad mounts, secrets and network access all weaken the wall.",
      "\"The 'runtime' in older articles is something else\": older docs called these environments runtimes. Current docs call them sandboxes.",
    ],
  },
  "docker": {
    title: "Docker", group: "Where it runs",
    one: "Docker runs programs in isolated containers. OpenHands uses it to keep the agent boxed in.",
    like: "Like shipping containers on a cargo ship. Each box holds its own load, and a mess in one doesn't spill into the next.",
    here: [
      "On a Mac or Windows PC, install Docker Desktop and open it before you start. The official image packs all of OpenHands into one container, served at `http://localhost:8000/canvas`.",
      "The start command mounts one folder from your computer into the container, such as `~/projects`. That folder is all the agent can see. Settings and conversations live in a Docker volume, called `openhands-data` in the official example. They survive when the container is removed.",
    ],
    myths: [
      "\"Beginners have to install Docker first\": no. Neither the desktop app nor the npm install needs it. Add Docker when you want isolation.",
      "\"Removing the container wipes my settings\": reuse the same volume next time and everything is still there. To really start over, delete the volume.",
    ],
  },
  "cloud": {
    title: "OpenHands Cloud", group: "Where it runs",
    one: "OpenHands Cloud is the hosted version run by the OpenHands team. Nothing to install: sign in and pay for what you use.",
    like: "Like a bike-share. The company owns and fixes the bikes; you pay for the rides you take.",
    here: [
      "Sign in at [app.all-hands.dev](https://app.all-hands.dev) with GitHub, GitLab or Bitbucket. Once your repositories are connected, start conversations on the website, or mention `@openhands` on GitHub.",
      "It also works alongside a local Agent Canvas, in two ways. As a model source, copy the `LLM API Key` from the `API Keys` settings page into Agent Canvas. As a backend, sign in to Cloud from `Manage Backends`, and conversations run in cloud sandboxes.",
    ],
    myths: [
      "\"Using the Cloud key means running in the cloud\": with only the LLM key, the work still happens on your computer. Only the model goes through OpenHands. Add Cloud as a backend to move the work there.",
      "\"The free models are free everywhere\": they're free only through app.all-hands.dev. Self-hosted copies, or similarly named models from other providers, are billed separately.",
    ],
  },

  // ---------- Models and agents ----------
  "llm": {
    title: "Model (LLM)", group: "Models and agents",
    one: "The model is the large language model doing the thinking, such as Claude, GPT or Gemini. OpenHands doesn't include one; you connect your own.",
    like: "If the agent is the car, the model is the engine. Same car, different engine, and it drives differently.",
    here: [
      "Connect a model in `Settings > LLM`. During first-time setup, the provider defaults to OpenHands and the model to OpenAI GPT-5.6 Sol. For a free option, pick DeepSeek V4 Flash.",
      "The docs suggest using the strongest model you can afford for long or high-stakes work. Use a cheaper one for routine edits, then switch back for planning, debugging and review.",
    ],
    list: [
      ["A provider API key", "Anthropic, OpenAI and others"],
      ["An OpenHands key", "From Cloud; includes a free model"],
      ["A signed-in subscription", "Claude Code, Codex and others"],
      ["A local model", "LM Studio, Ollama and others"],
    ],
    listTitle: "Four ways to connect a model", listHead: ["You have", "Notes"],
    myths: [
      "\"Any model will do\": the docs say it needs a strong model. Weak models tend to get stuck or make mistakes.",
      "\"Local models are free, so they're the best deal\": they need serious hardware. The recommended local model wants a 24 GB GPU, or an Apple silicon Mac with 64 GB of memory.",
    ],
  },
  "api-key": {
    title: "API key", group: "Models and agents",
    one: "An API key is a secret string from the model provider, like a key card. It's how you pay for model calls, so never share it.",
    like: "Like a key card linked to your bank account. Whoever holds it can spend your money.",
    here: [
      "Get one from the provider's website and paste it into `Settings > LLM`. The easiest start is OpenHands Cloud: sign in, open the `API Keys` settings page, and copy the `LLM API Key`.",
      "Keys are stored on the backend's [Agent Server](/en/wiki/agent-server/), not in your browser. Keys for agents like Claude Code live under `Settings → Secrets`, where you can edit or remove them.",
    ],
    myths: [
      "\"All the keys on the Cloud settings page are the same\": there are two kinds. ==The one for connecting a model in Agent Canvas is the `LLM API Key`.== A Cloud API key is for calling the Cloud API from your own code.",
      "\"Claude Code always needs a key\": if the backend runs on your computer and you're signed in to Claude Code, it uses that login.",
    ],
  },
  "token": {
    title: "Tokens", group: "Models and agents",
    one: "Tokens are the unit model usage is counted and billed in. Longer jobs and more back-and-forth cost more.",
    like: "Like a taxi meter. The farther you go and the more detours, the higher the fare.",
    here: [
      "Models charge per token, usually priced per million. What the model reads (input) and writes (output) are priced separately, and output costs more. Content it has seen before is billed at a much cheaper cached rate.",
      "The meter next to the message box shows how much context is in use; open it to see your usage. When a conversation gets long, click `Compact context` to condense the earlier history.",
    ],
    myths: [
      "\"Watching the usage meter keeps me under budget\": the `Usage` meter only reports spending. It never stops the agent, and it can go past 100%.",
      "\"One long conversation is cheapest\": the longer it gets, the more room the history takes. Start a new conversation for each new job.",
    ],
  },
  "llm-profile": {
    title: "LLM profile", group: "Models and agents",
    one: "An LLM profile is a saved model setup: provider, model and key. Keep several and switch any time.",
    like: "Like saved alarms on your phone. One for weekdays, one for weekends, no resetting each time.",
    here: [
      "Create one in `Settings > LLM`. Before saving, it tests the key and the model, and refuses to save if they don't work.",
      "In a conversation, type `/model` to list your profiles, or `/model <profile-name>` to switch. Switching keeps the history and progress; it only affects requests from then on.",
    ],
    myths: [
      "\"I have to paste the same key into every profile\": on a local backend, create a Provider Connection. Store the key once and share it across profiles.",
      "\"Claude Code's model is picked here too\": [ACP](/en/wiki/acp/) agents like Claude Code and Codex manage their own models. Their settings are under `Settings > Agent`.",
    ],
  },
  "agent-profile": {
    title: "Agent profile", group: "Models and agents",
    one: "An agent profile is a saved agent setup: which agent runs (OpenHands, Claude Code…) and which model it uses.",
    like: "Like a saved character in a game. Which character and what gear, all kept in one slot.",
    here: [
      "Manage them in `Settings > Agent`. The agent you pick during first-time setup becomes your first profile. The active profile is what new conversations use by default.",
      "An OpenHands profile points to an [LLM profile](/en/wiki/llm-profile/). An ACP profile uses that agent's own model and login. A profile can also limit which tools and secrets the agent gets.",
    ],
    myths: [
      "\"I can switch agents halfway through a conversation\": once it starts, the agent is fixed. To switch, pick the profile and start a new conversation. The model can still change mid-conversation with `/model`.",
      "\"Agent profiles and LLM profiles are the same thing\": an agent profile decides who does the work. An LLM profile decides which model the OpenHands agent uses.",
    ],
  },
  "acp": {
    title: "ACP (bring another agent)", group: "Models and agents",
    one: "ACP, the Agent Client Protocol, is a shared interface. Agents that speak it, like Claude Code, Codex and Gemini CLI, can run inside Agent Canvas.",
    like: "Like USB. Mouse, keyboard or thumb drive, if it's USB, it plugs in and works.",
    here: [
      "When you pick an ACP agent, the Agent Server launches that agent's own command-line program in the background. That agent handles its own model and tools; Agent Canvas relays messages and shows the results.",
      "You can pick one in the first step of first-time setup, or later in `Settings > Agent`. If the backend runs on your computer and you're signed in to that agent, you usually don't need a key.",
    ],
    list: [
      ["Claude Code", "Anthropic's agent"],
      ["Codex", "OpenAI's agent"],
      ["Gemini CLI", "Google's agent"],
      ["Pi, OpenCode", "Open source; not on Cloud"],
    ],
    listTitle: "ACP agents you can pick", listHead: ["Agent", "Notes"],
    myths: [
      "\"Docker or the cloud can use my laptop's login\": they can't. A fresh container has no login, so you supply a key or token there.",
      "\"Claude Code means paying per API call\": with a local backend, it uses your signed-in Pro or Max subscription. If both a login and a key exist, the login wins.",
    ],
  },

  // ---------- Extensions and automation ----------
  "automation": {
    title: "Automation", group: "Extensions and automation",
    one: "An automation starts agent conversations on a schedule or when something happens. Think of a daily Slack digest, or a review for every new PR.",
    like: "Like the delay timer on a washing machine. Set it at night and the laundry's done by morning.",
    here: [
      "Manage them under `Automate` in the sidebar. The simplest way to make one is to ask in a conversation. Say when it should run and what it should do. Or start from a template: see [Prebuilt automations](/en/automations/).",
      "There are two kinds of trigger. One is a time, like every Monday at 9 AM. The other is an event, like a new PR. Each run usually opens a new conversation that you can read afterward.",
    ],
    myths: [
      "\"Once it's set up, it runs whether my computer is on or not\": automations run on the backend. If your local backend stops, so do they. ==To keep them running, put them on a server or on Cloud.==",
      "\"It connects to Slack and GitHub by itself\": you connect those services first, for example with the right [MCP](/en/wiki/mcp/) server. It can't use a service you haven't connected.",
      "\"My laptop can receive GitHub events directly\": the outside service has to reach your backend over the internet. A local address can't, so expose it first or check on a schedule instead.",
    ],
  },
  "skill": {
    title: "Skill", group: "Extensions and automation",
    one: "A skill is a Markdown guide written for the agent on how to do one kind of task. It loads when it's relevant.",
    like: "Like one chapter of an employee handbook. Nobody reads the expenses chapter until they have an expense to file.",
    here: [
      "Each skill is a folder with a `SKILL.md` inside. It opens with a name and a line on when to use it. The agent reads only those until the skill is needed, then reads the rest.",
      "Put it in a project's `.agents/skills/` folder to apply it to that project, or in `~/.agents/skills/` for all your projects. Turn skills on or off under `Customize > Skills`. After editing a skill, start a new conversation to pick up the change.",
    ],
    myths: [
      "\"A skill lets it do things it couldn't before\": a skill is instructions only. It grants no permissions and installs nothing. The agent still has only the files, tools and network its environment gives it.",
      "\"Every skill in the catalog is on by default\": only the recommended ones are. Turn on others yourself.",
      "\"Skills from the internet are safe to install\": a skill can tell the agent to run scripts, read files or use secrets. Install only from sources you trust, and read it first.",
    ],
  },
  "agents-md": {
    title: "AGENTS.md", group: "Extensions and automation",
    one: "AGENTS.md is a file in the project root that says how to install, test and work in the project. The agent reads it first, every time.",
    like: "Like the safety notice at a building site's gate. Everyone reads it on the way in.",
    here: [
      "Its full text goes into the start of every conversation, so keep it short. Include only what every job needs: what the project is, how to install it, how to run the tests.",
      "Not sure what to write? Ask OpenHands to read the project and draft one, then edit it. It also reads `CLAUDE.md` and `GEMINI.md`.",
    ],
    myths: [
      "\"More detail is better\": it reads the whole file every time, so length costs room and money. Move anything only some jobs need into a [skill](/en/wiki/skill/).",
      "\"Any folder works\": put it in the repository root. It applies to every conversation in that repository.",
    ],
  },
  "plugin": {
    title: "Plugin", group: "Extensions and automation",
    one: "A plugin is a bundle of skills, commands, hooks or MCP settings you install in one go.",
    like: "Like a packed toolbox. Everything the job needs is inside; grab it and go.",
    here: [
      "A skill handles one thing. A plugin suits a set of parts that work together, like a few skills plus the MCP servers they use. The format is compatible with Claude Code plugins.",
      "On a local backend, open `Plugins` in the sidebar to search, install and turn plugins on or off. When starting a conversation, you can also attach plugins from the launcher for that conversation only.",
    ],
    myths: [
      "\"Installed means it's in every conversation\": a disabled plugin stays installed, but new conversations don't load it.",
      "\"It's skills or plugins, not both\": plugins contain skills. Write a skill for one small job; bundle a whole set of practices as a plugin.",
      "\"Plugins are safe by default\": a plugin can add instructions, tools and outside connections. Install only ones you trust, and look inside first.",
    ],
  },
  "mcp": {
    title: "MCP (connect outside tools)", group: "Extensions and automation",
    one: "MCP (Model Context Protocol) is a standard plug that connects the agent to outside tools like GitHub, Slack or Notion.",
    like: "Like a travel adapter. Every country's sockets differ, but with the adapter your charger works anywhere.",
    here: [
      "Add servers in Agent Canvas under `Customize > MCP Servers`. It isn't under `Settings`, which trips people up.",
      "Once connected, the agent uses that service's tools like its built-in ones. Many prebuilt automations depend on it. A Slack digest, for example, needs the Slack MCP server first.",
    ],
    myths: [
      "\"A new MCP server works in my running conversation\": it applies only to conversations you start afterward.",
      "\"More MCP servers is better\": each one gives the agent more things it can act on. An agent profile can limit itself to just a few.",
    ],
  },
  "sdk": {
    title: "SDK (build an agent in code)", group: "Extensions and automation",
    one: "The SDK is a Python toolkit for building your own agents in code. The Agent Server is built on it.",
    like: "Like a box of LEGO bricks. Agent Canvas is the finished model; the bricks let you build your own.",
    here: [
      "It's the engine behind both Agent Canvas and OpenHands Cloud. It ships with tools for running commands, editing files, browsing the web and connecting MCP servers, and it's MIT-licensed.",
      "It fits jobs you'd script: one-off tasks, routine maintenance like dependency updates, or big changes split across several agents.",
    ],
    myths: [
      "\"Using OpenHands means learning the SDK\": Agent Canvas is enough for everyday use. The SDK is for building OpenHands into your own programs.",
      "\"Any key from the Cloud settings page works\": the SDK needs the `LLM API Key`. A Cloud API key is for the Cloud API, and using it here gives an error.",
    ],
  },
};
