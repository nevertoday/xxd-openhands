<div align="center">

# はじめての OpenHands

[English](./README.en.md) · [中文](./README.md) · **日本語** · [한국어](./README.ko.md) · [Español](./README.es.md) · [Português](./README.pt.md) · [Français](./README.fr.md) · [Deutsch](./README.de.md) · [Русский](./README.ru.md) · [العربية](./README.ar.md)

### OpenHands をすすめられた？ まずはここから。

[OpenHands](https://github.com/OpenHands/OpenHands) は、オープンソースの AI コーディングエージェントです。仕事を渡すと、コマンドを実行し、ファイルを書き換え、PR まで自分で出します。決まった時間に自分から作業を始めることもできます。<br>公式ドキュメントはエンジニア向けです。このガイドはやさしい言葉で説明するので、コードが書けなくてもついてこられます。

**オンラインで読む：<https://openhands.xiaoxiaodong.ai/ja/>**

</div>

## 中身

| セクション | 対象 | 内容 |
| --- | --- | --- |
| [入門コース](https://openhands.xiaoxiaodong.ai/ja/start/1-why/) | コードを書いたことがない方 | 3 レッスン：デスクトップアプリを入れる、OpenHands Cloud のキーを手に入れる、空のフォルダで小さなページを作ってもらう |
| [完全ガイド（英語）](https://openhands.xiaoxiaodong.ai/en/guide/0-what/) | コードを書く方 | 9 ステップ：インストール、モデル、会話、ほかのエージェント、バックエンド、自動化、スキルと MCP、セルフホスト |
| [How-to（英語）](https://openhands.xiaoxiaodong.ai/en/howto/) | 具体的にやりたいことがある方 | 知らないコードベース、issue から PR、PR のレビュー、Docker サンドボックス、ローカルモデル、費用… |
| [既製の自動化（英語）](https://openhands.xiaoxiaodong.ai/en/automations/) | 決まった時間に作業させたい方 | 公式の既製の自動化を 1 つずつ、やさしい 1 文で：何をするか、何が必要か、どうオンにするか |
| [Wiki（英語）](https://openhands.xiaoxiaodong.ai/en/wiki/) · [よくある質問（英語）](https://openhands.xiaoxiaodong.ai/en/faq/) | 知らない言葉が出てきた方 | Agent Canvas、バックエンド、サンドボックス、ACP、MCP を 1 つずつ |

中国語はルートに、英語は `/en/` に、日本語は `/ja/`（ホームと入門コース）にあります。

## まず安全のこと

OpenHands をパソコンの上で直接動かすと、AI はあなたのアカウントの権限でファイルを読み書きし、コマンドを実行できます。入門コースでは、新しく作った空のフォルダの中だけで作業させます。隔離したいときは Docker を使います（完全ガイドのステップ 5）。

## ローカルで動かす

```bash
npm install
npm run dev      # http://localhost:4421
npm run build    # outputs to dist/
npm run check    # after a build: internal links, terms and wiki entries line up
```

メンテナンスと執筆のルールは [docs/MAINTAINING.md](docs/MAINTAINING.md)（中国語）にあります。

## 注意

- これは非公式のガイドで、OpenHands の公式ドキュメントではありません。コマンドや動作は [OpenHands のリポジトリ](https://github.com/OpenHands/OpenHands)と[公式ドキュメント](https://docs.openhands.dev)が正です。
- OpenHands は OpenHands のコントリビューターが MIT ライセンスで作っています。
- サイトの骨組みは [xxd-pstack](https://github.com/nevertoday/xxd-pstack) から借りています。画面は xxd-ui-kit を使っています。
- 質問、わかりにくいところ、うまくいかなかった手順は [issue](https://github.com/nevertoday/xxd-openhands/issues) へどうぞ。
