<div align="center">

# OpenHands 新手教程

[English](./README.en.md) · **中文** · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Español](./README.es.md) · [Português](./README.pt.md) · [Français](./README.fr.md) · [Deutsch](./README.de.md) · [Русский](./README.ru.md) · [العربية](./README.ar.md)

### 有人推荐你用 OpenHands？从这里开始。

[OpenHands](https://github.com/OpenHands/OpenHands) 是一个开源的 AI 编程代理：你交代一件事，它自己敲命令、改文件、开 PR，还能按时间自己开工。<br>官方文档是写给工程师的。这份教程用大白话讲清楚，不会写代码也能跟着做。

**在线阅读：<https://openhands.xiaoxiaodong.ai>**

</div>

## 里面有什么

| 栏目 | 给谁看 | 讲什么 |
| --- | --- | --- |
| [新手入门](https://openhands.xiaoxiaodong.ai/start/1-why/) | 没写过代码的人 | 三课：装桌面版、拿一个 OpenHands Cloud 的 key、在空文件夹里做一个小网页 |
| [完整教程](https://openhands.xiaoxiaodong.ai/guide/0-what/) | 会写代码的人 | 9 步：安装、接模型、对话、换代理、换后端、自动化、技能和 MCP、自托管 |
| [How-to](https://openhands.xiaoxiaodong.ai/howto/) | 手上有具体的活 | 接手陌生项目、issue 做成 PR、审 PR、Docker 沙盒、本地模型、控制花费…… |
| [现成自动化](https://openhands.xiaoxiaodong.ai/automations/) | 想让它按时干活 | 官方现成的自动化，每个一句人话：做什么、要接好什么、怎么开起来 |
| [Wiki](https://openhands.xiaoxiaodong.ai/wiki/) · [常见问题](https://openhands.xiaoxiaodong.ai/faq/) | 遇到不懂的词 | Agent Canvas、后端、沙盒、ACP、MCP 这些词，一个一个讲 |

中文在根路径，英文在 `/en/`。

## 先说安全

OpenHands 在你电脑上直接跑的时候，AI 能用你的账号权限读写文件、执行命令。新手入门只让它在一个新建的空文件夹里干活；想隔离，就用 Docker（完整教程第 5 步）。

## 本地运行

```bash
npm install
npm run dev      # http://localhost:4421
npm run build    # 输出到 dist/
npm run check    # 构建后查站内链接、术语和 Wiki 是否对得上
```

维护和写作规矩见 [docs/MAINTAINING.md](docs/MAINTAINING.md)。

## 说明

- 本站是非官方教程，不是 OpenHands 的官方文档。命令和行为以 [OpenHands 仓库](https://github.com/OpenHands/OpenHands) 和 [官方文档](https://docs.openhands.dev) 为准。
- OpenHands 由 OpenHands contributors 开发，MIT 许可。
- 网站骨架来自 [xxd-pstack](https://github.com/nevertoday/xxd-pstack)，界面用 xxd-ui-kit。
- 有问题、看不懂、照做不成，到 [Issues](https://github.com/nevertoday/xxd-openhands/issues) 提。
