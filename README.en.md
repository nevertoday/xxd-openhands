<div align="center">

# OpenHands for beginners

**English** · [中文](./README.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Español](./README.es.md) · [Português](./README.pt.md) · [Français](./README.fr.md) · [Deutsch](./README.de.md) · [Русский](./README.ru.md) · [العربية](./README.ar.md)

### Someone told you to try OpenHands? Start here.

[OpenHands](https://github.com/OpenHands/OpenHands) is an open-source AI coding agent. You hand it a task, and it runs the commands, edits the files and opens the PR itself. It can even start work on a schedule.<br>The official docs are written for engineers. This guide explains it in plain words, so you can follow along even if you don't code.

**Read it online: <https://openhands.xiaoxiaodong.ai/en/>**

</div>

## What's inside

| Section | For | What it covers |
| --- | --- | --- |
| [Beginner track](https://openhands.xiaoxiaodong.ai/en/start/1-why/) | People who have never coded | Three lessons: install the desktop app, get an OpenHands Cloud key, build a small page in an empty folder |
| [Full guide](https://openhands.xiaoxiaodong.ai/en/guide/0-what/) | People who code | 9 steps: install, models, conversations, other agents, backends, automations, skills and MCP, self-hosting |
| [How-to](https://openhands.xiaoxiaodong.ai/en/howto/) | A specific job in hand | Unfamiliar codebases, issues to PRs, PR review, Docker sandboxes, local models, costs… |
| [Prebuilt automations](https://openhands.xiaoxiaodong.ai/en/automations/) | Letting it work on a schedule | Each official ready-made automation in one plain sentence: what it does, what it needs, how to turn it on |
| [Wiki](https://openhands.xiaoxiaodong.ai/en/wiki/) · [FAQ](https://openhands.xiaoxiaodong.ai/en/faq/) | Words you don't know | Agent Canvas, backends, sandboxes, ACP, MCP, one at a time |

Chinese lives at the root, English under `/en/`.

## Safety first

When OpenHands runs directly on your computer, the AI can read and write files and run commands with your account's permissions. The beginner track keeps it inside a new, empty folder. To isolate it, use Docker (full guide step 5).

## Run it locally

```bash
npm install
npm run dev      # http://localhost:4421
npm run build    # outputs to dist/
npm run check    # after a build: internal links, terms and wiki entries line up
```

Maintenance and writing rules are in [docs/MAINTAINING.md](docs/MAINTAINING.md) (Chinese).

## Notes

- This is an unofficial guide, not the official OpenHands docs. The [OpenHands repo](https://github.com/OpenHands/OpenHands) and [official docs](https://docs.openhands.dev) are the source of truth for commands and behavior.
- OpenHands is made by the OpenHands contributors under the MIT license.
- The site skeleton comes from [xxd-pstack](https://github.com/nevertoday/xxd-pstack); the interface uses xxd-ui-kit.
- Questions, confusing parts, or steps that didn't work: open an [issue](https://github.com/nevertoday/xxd-openhands/issues).
