<div align="center">

# OpenHands pour débutants

[English](./README.en.md) · [中文](./README.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Español](./README.es.md) · [Português](./README.pt.md) · **Français** · [Deutsch](./README.de.md) · [Русский](./README.ru.md) · [العربية](./README.ar.md)

### On vous a conseillé d'essayer OpenHands ? Commencez ici.

[OpenHands](https://github.com/OpenHands/OpenHands) est un agent de code IA open source. Vous lui confiez une tâche, et il lance lui-même les commandes, modifie les fichiers et ouvre la pull request. Il peut même se mettre au travail à heure fixe.<br>La documentation officielle est écrite pour des ingénieurs. Ce guide l'explique avec des mots simples, pour que vous puissiez suivre même sans savoir coder.

**À lire en ligne : <https://openhands.xiaoxiaodong.ai/fr/>**

</div>

## Ce qu'il contient

| Partie | Pour qui | Ce qu'on y trouve |
| --- | --- | --- |
| [Parcours débutant](https://openhands.xiaoxiaodong.ai/fr/start/1-why/) | Celles et ceux qui n'ont jamais codé | Trois leçons : installer l'application de bureau, obtenir une clé OpenHands Cloud, créer une petite page dans un dossier vide |
| [Guide complet](https://openhands.xiaoxiaodong.ai/en/guide/0-what/) (en anglais) | Celles et ceux qui codent | 9 étapes : installation, modèles, conversations, autres agents, backends, automatisations, skills et MCP, auto-hébergement |
| [Fiches pratiques](https://openhands.xiaoxiaodong.ai/en/howto/) (en anglais) | Une tâche précise à faire | Bases de code inconnues, des issues aux pull requests, revue de PR, sandboxes Docker, modèles locaux, coûts… |
| [Automatisations prêtes à l'emploi](https://openhands.xiaoxiaodong.ai/en/automations/) (en anglais) | Le faire travailler à heure fixe | Chaque automatisation officielle en une phrase simple : ce qu'elle fait, ce qu'il lui faut, comment l'activer |
| [Wiki](https://openhands.xiaoxiaodong.ai/en/wiki/) · [FAQ](https://openhands.xiaoxiaodong.ai/en/faq/) (en anglais) | Les mots que vous ne connaissez pas | Agent Canvas, backends, sandboxes, ACP, MCP, un par un |

Le chinois est à la racine du site, l'anglais sous `/en/`, et le français (accueil et parcours débutant) sous `/fr/`.

## La sécurité d'abord

Quand OpenHands tourne directement sur votre ordinateur, l'IA peut lire et écrire des fichiers et lancer des commandes avec les droits de votre compte. Le parcours débutant le fait travailler dans un nouveau dossier vide. Pour l'isoler, utilisez Docker (étape 5 du guide complet).

## Le lancer en local

```bash
npm install
npm run dev      # http://localhost:4421
npm run build    # outputs to dist/
npm run check    # after a build: internal links, terms and wiki entries line up
```

Les règles de maintenance et d'écriture sont dans [docs/MAINTAINING.md](docs/MAINTAINING.md) (en chinois).

## À savoir

- Ce guide n'est pas officiel. Ce n'est pas la documentation officielle d'OpenHands. Pour les commandes et le fonctionnement, ce sont le [dépôt OpenHands](https://github.com/OpenHands/OpenHands) et la [documentation officielle](https://docs.openhands.dev) qui font foi.
- OpenHands est créé par les contributeurs d'OpenHands, sous licence MIT.
- La structure du site vient de [xxd-pstack](https://github.com/nevertoday/xxd-pstack) ; l'interface utilise xxd-ui-kit.
- Une question, un passage pas clair, une étape qui n'a pas marché : ouvrez une [issue](https://github.com/nevertoday/xxd-openhands/issues).
