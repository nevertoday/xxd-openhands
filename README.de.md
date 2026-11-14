<div align="center">

# OpenHands für Einsteiger

[English](./README.en.md) · [中文](./README.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Español](./README.es.md) · [Português](./README.pt.md) · [Français](./README.fr.md) · **Deutsch** · [Русский](./README.ru.md) · [العربية](./README.ar.md)

### Dir hat jemand OpenHands empfohlen? Fang hier an.

[OpenHands](https://github.com/OpenHands/OpenHands) ist ein Open-Source-KI-Agent fürs Programmieren. Du gibst ihm eine Aufgabe, und er führt die Befehle selbst aus, ändert die Dateien und öffnet den PR. Er kann sogar nach Zeitplan von allein loslegen.<br>Die offizielle Doku ist für Entwickler geschrieben. Diese Anleitung erklärt alles in einfachen Worten, damit du mitkommst, auch wenn du nicht programmierst.

**Online lesen: <https://openhands.xiaoxiaodong.ai/de/>**

</div>

## Was drin ist

| Bereich | Für wen | Worum es geht |
| --- | --- | --- |
| [Einsteigerkurs](https://openhands.xiaoxiaodong.ai/de/start/1-why/) | Alle, die noch nie programmiert haben | Drei Lektionen: die Desktop-App installieren, einen Schlüssel von OpenHands Cloud holen, in einem leeren Ordner eine kleine Seite bauen |
| [Vollständige Anleitung](https://openhands.xiaoxiaodong.ai/en/guide/0-what/) (Englisch) | Alle, die programmieren | 9 Schritte: Installation, Modelle, Unterhaltungen, andere Agenten, Backends, Automationen, Skills und MCP, selbst hosten |
| [How-to](https://openhands.xiaoxiaodong.ai/en/howto/) (Englisch) | Eine bestimmte Aufgabe vor dir | Fremde Codebasen, von Issues zu PRs, PR-Reviews, Docker-Sandboxes, lokale Modelle, Kosten… |
| [Fertige Automationen](https://openhands.xiaoxiaodong.ai/en/automations/) (Englisch) | Ihn nach Zeitplan arbeiten lassen | Jede offizielle fertige Automation in einem einfachen Satz: was sie tut, was sie braucht, wie du sie einschaltest |
| [Wiki](https://openhands.xiaoxiaodong.ai/en/wiki/) · [FAQ](https://openhands.xiaoxiaodong.ai/en/faq/) (Englisch) | Wörter, die du nicht kennst | Agent Canvas, Backends, Sandboxes, ACP, MCP, eins nach dem anderen |

Chinesisch liegt im Wurzelverzeichnis, Englisch unter `/en/`. Deutsch unter `/de/` umfasst die Startseite und den Einsteigerkurs.

## Sicherheit zuerst

Wenn OpenHands direkt auf deinem Computer läuft, kann die KI mit den Rechten deines Benutzerkontos Dateien lesen und schreiben und Befehle ausführen. Der Einsteigerkurs hält sie in einem neuen, leeren Ordner. Um sie abzuschotten, nimm Docker (Schritt 5 der vollständigen Anleitung).

## Lokal starten

```bash
npm install
npm run dev      # http://localhost:4421
npm run build    # outputs to dist/
npm run check    # after a build: internal links, terms and wiki entries line up
```

Regeln für Pflege und Schreiben stehen in [docs/MAINTAINING.md](docs/MAINTAINING.md) (auf Chinesisch).

## Hinweise

- Das ist eine inoffizielle Anleitung, nicht die offizielle OpenHands-Doku. Bei Befehlen und Verhalten gilt, was im [OpenHands-Repo](https://github.com/OpenHands/OpenHands) und in der [offiziellen Doku](https://docs.openhands.dev) steht.
- OpenHands stammt von den OpenHands-Mitwirkenden und steht unter der MIT-Lizenz.
- Das Gerüst der Seite stammt von [xxd-pstack](https://github.com/nevertoday/xxd-pstack); die Oberfläche nutzt xxd-ui-kit.
- Fragen, unklare Stellen oder Schritte, die nicht geklappt haben: Eröffne ein [Issue](https://github.com/nevertoday/xxd-openhands/issues).
