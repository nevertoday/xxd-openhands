<div align="center">

# 처음 만나는 OpenHands

[English](./README.en.md) · [中文](./README.md) · [日本語](./README.ja.md) · **한국어** · [Español](./README.es.md) · [Português](./README.pt.md) · [Français](./README.fr.md) · [Deutsch](./README.de.md) · [Русский](./README.ru.md) · [العربية](./README.ar.md)

### 누가 OpenHands를 써 보라고 했나요? 여기서 시작하세요.

[OpenHands](https://github.com/OpenHands/OpenHands)는 오픈소스 AI 코딩 에이전트예요. 일을 맡기면 명령어 실행, 파일 수정, PR 올리기까지 스스로 해요. 정해진 시간에 알아서 일을 시작할 수도 있어요.<br>공식 문서는 엔지니어를 위해 쓰여 있어요. 이 가이드는 쉬운 말로 설명해서, 코딩을 몰라도 따라 할 수 있어요.

**온라인으로 읽기: <https://openhands.xiaoxiaodong.ai/ko/>**

</div>

## 무엇이 들어 있나요

| 섹션 | 누구를 위한 건가요 | 다루는 내용 |
| --- | --- | --- |
| [입문 코스](https://openhands.xiaoxiaodong.ai/ko/start/1-why/) | 코딩을 해 본 적 없는 분 | 레슨 3개: 데스크톱 앱 설치, OpenHands Cloud 키 받기, 빈 폴더에서 작은 페이지 만들기 |
| [전체 가이드](https://openhands.xiaoxiaodong.ai/en/guide/0-what/) (영어) | 코딩하는 분 | 9단계: 설치, 모델, 대화, 다른 에이전트, 백엔드, 자동화, 스킬과 MCP, 셀프 호스팅 |
| [How-to](https://openhands.xiaoxiaodong.ai/en/howto/) (영어) | 지금 당장 할 일이 있는 분 | 낯선 코드베이스, 이슈에서 PR까지, PR 리뷰, Docker 샌드박스, 로컬 모델, 비용… |
| [준비된 자동화](https://openhands.xiaoxiaodong.ai/en/automations/) (영어) | 정해진 시간에 일을 시키고 싶은 분 | 공식에서 제공하는 자동화를 하나씩 쉬운 한 문장으로: 무엇을 하는지, 무엇이 필요한지, 어떻게 켜는지 |
| [Wiki](https://openhands.xiaoxiaodong.ai/en/wiki/) · [자주 묻는 질문](https://openhands.xiaoxiaodong.ai/en/faq/) (영어) | 모르는 단어가 나왔을 때 | Agent Canvas, 백엔드, 샌드박스, ACP, MCP를 하나씩 |

중국어는 루트에, 영어는 `/en/` 아래에, 한국어 입문 코스는 `/ko/` 아래에 있어요.

## 안전이 먼저예요

OpenHands를 내 컴퓨터에서 바로 실행하면, AI가 내 계정의 권한으로 파일을 읽고 쓰고 명령어를 실행할 수 있어요. 입문 코스에서는 새로 만든 빈 폴더 안에서만 일하게 해요. 격리하고 싶다면 Docker를 쓰세요(전체 가이드 5단계).

## 로컬에서 실행하기

```bash
npm install
npm run dev      # http://localhost:4421
npm run build    # outputs to dist/
npm run check    # after a build: internal links, terms and wiki entries line up
```

유지 관리와 글쓰기 규칙은 [docs/MAINTAINING.md](docs/MAINTAINING.md)(중국어)에 있어요.

## 참고

- 이 가이드는 비공식 가이드이고, OpenHands 공식 문서가 아니에요. 명령어와 동작은 [OpenHands 저장소](https://github.com/OpenHands/OpenHands)와 [공식 문서](https://docs.openhands.dev)가 기준이에요.
- OpenHands는 OpenHands 기여자들이 MIT 라이선스로 만들었어요.
- 사이트의 뼈대는 [xxd-pstack](https://github.com/nevertoday/xxd-pstack)에서 가져왔고, 화면은 xxd-ui-kit을 써요.
- 질문, 헷갈리는 부분, 쓰인 대로 했는데 안 된 단계가 있다면 [이슈](https://github.com/nevertoday/xxd-openhands/issues)를 열어 주세요.
