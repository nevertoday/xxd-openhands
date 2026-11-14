<div align="center">

# OpenHands para iniciantes

[English](./README.en.md) · [中文](./README.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Español](./README.es.md) · **Português** · [Français](./README.fr.md) · [Deutsch](./README.de.md) · [Русский](./README.ru.md) · [العربية](./README.ar.md)

### Alguém recomendou o OpenHands para você? Comece aqui.

O [OpenHands](https://github.com/OpenHands/OpenHands) é um agente de programação com IA, de código aberto. Você passa uma tarefa, e ele mesmo roda os comandos, edita os arquivos e abre o PR. Ele até pode começar a trabalhar sozinho num horário marcado.<br>A documentação oficial foi escrita para engenheiros. Este guia explica tudo em palavras simples, para você conseguir acompanhar mesmo sem saber programar.

**Leia online: <https://openhands.xiaoxiaodong.ai/pt/>**

</div>

## O que tem aqui

| Seção | Para quem | O que cobre |
| --- | --- | --- |
| [Para iniciantes](https://openhands.xiaoxiaodong.ai/pt/start/1-why/) | Quem nunca programou | Três lições: instalar o aplicativo para computador, pegar uma chave do OpenHands Cloud, fazer uma pequena página numa pasta vazia |
| [Guia completo](https://openhands.xiaoxiaodong.ai/en/guide/0-what/) (em inglês) | Quem programa | 9 passos: instalação, modelos, conversas, outros agentes, backends, automações, skills e MCP, hospedagem própria |
| [How-to](https://openhands.xiaoxiaodong.ai/en/howto/) (em inglês) | Quem tem uma tarefa específica em mãos | Bases de código desconhecidas, de issue a PR, revisão de PR, sandboxes com Docker, modelos locais, custos… |
| [Automações prontas](https://openhands.xiaoxiaodong.ai/en/automations/) (em inglês) | Deixar ele trabalhar num horário marcado | Cada automação pronta oficial numa frase simples: o que faz, do que precisa, como ligar |
| [Wiki](https://openhands.xiaoxiaodong.ai/en/wiki/) · [Perguntas frequentes](https://openhands.xiaoxiaodong.ai/en/faq/) (em inglês) | Palavras que você não conhece | Agent Canvas, backends, sandboxes, ACP, MCP, uma de cada vez |

O chinês fica na raiz, o inglês em `/en/` e o português em `/pt/`.

## Segurança em primeiro lugar

Quando o OpenHands roda direto no seu computador, a IA pode ler e escrever arquivos e rodar comandos com as permissões da sua conta. As lições para iniciantes mantêm ele dentro de uma pasta nova e vazia. Para isolar ele, use o Docker (passo 5 do guia completo).

## Rodar no seu computador

```bash
npm install
npm run dev      # http://localhost:4421
npm run build    # gera a saída em dist/
npm run check    # depois de compilar: confere links internos, termos e verbetes da wiki
```

As regras de manutenção e de escrita estão em [docs/MAINTAINING.md](docs/MAINTAINING.md) (em chinês).

## Observações

- Este é um guia não oficial, não a documentação oficial do OpenHands. O [repositório do OpenHands](https://github.com/OpenHands/OpenHands) e a [documentação oficial](https://docs.openhands.dev) são a referência para comandos e comportamento.
- O OpenHands é feito pelos colaboradores do OpenHands, com licença MIT.
- A estrutura do site vem do [xxd-pstack](https://github.com/nevertoday/xxd-pstack); a interface usa o xxd-ui-kit.
- Dúvidas, partes confusas ou passos que não funcionaram: abra uma [issue](https://github.com/nevertoday/xxd-openhands/issues).
