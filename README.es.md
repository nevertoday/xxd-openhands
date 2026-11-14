<div align="center">

# OpenHands para principiantes

[English](./README.en.md) · [中文](./README.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · **Español** · [Português](./README.pt.md) · [Français](./README.fr.md) · [Deutsch](./README.de.md) · [Русский](./README.ru.md) · [العربية](./README.ar.md)

### ¿Te recomendaron probar OpenHands? Empieza aquí.

[OpenHands](https://github.com/OpenHands/OpenHands) es un agente de programación con IA, de código abierto. Le das una tarea y él mismo ejecuta los comandos, edita los archivos y abre el PR. Incluso puede ponerse a trabajar a una hora programada.<br>La documentación oficial está escrita para ingenieros. Esta guía lo explica con palabras sencillas, para que puedas seguirla aunque no sepas programar.

**Léela en línea: <https://openhands.xiaoxiaodong.ai/es/>**

</div>

## Qué contiene

| Sección | Para quién | Qué cubre |
| --- | --- | --- |
| [Para principiantes](https://openhands.xiaoxiaodong.ai/es/start/1-why/) | Quien nunca ha programado | Tres lecciones: instalar la aplicación de escritorio, conseguir una clave de OpenHands Cloud y crear una página pequeña en una carpeta vacía |
| [Guía completa](https://openhands.xiaoxiaodong.ai/en/guide/0-what/) (en inglés) | Quien sabe programar | 9 pasos: instalación, modelos, conversaciones, otros agentes, backends, automatizaciones, skills y MCP, alojamiento propio |
| [How-to](https://openhands.xiaoxiaodong.ai/en/howto/) (en inglés) | Un trabajo concreto entre manos | Código que no conoces, de issues a PR, revisión de PR, sandboxes con Docker, modelos locales, costos… |
| [Automatizaciones listas para usar](https://openhands.xiaoxiaodong.ai/en/automations/) (en inglés) | Ponerlo a trabajar a horas fijas | Cada automatización oficial lista para usar en una frase sencilla: qué hace, qué necesita y cómo activarla |
| [Wiki](https://openhands.xiaoxiaodong.ai/en/wiki/) · [Preguntas frecuentes](https://openhands.xiaoxiaodong.ai/en/faq/) (en inglés) | Palabras que no conoces | Agent Canvas, backends, sandboxes, ACP, MCP, una por una |

El chino está en la raíz, el inglés en `/en/` y el español en `/es/` (página de inicio y lecciones para principiantes).

## Primero, la seguridad

Cuando OpenHands se ejecuta directamente en tu computadora, la IA puede leer y escribir archivos y ejecutar comandos con los permisos de tu cuenta. Las lecciones para principiantes lo mantienen dentro de una carpeta nueva y vacía. Para aislarlo, usa Docker (paso 5 de la guía completa).

## Ejecutarlo en local

```bash
npm install
npm run dev      # http://localhost:4421
npm run build    # genera dist/
npm run check    # después de compilar: enlaces internos, términos y entradas de la wiki cuadran
```

Las reglas de mantenimiento y de redacción están en [docs/MAINTAINING.md](docs/MAINTAINING.md) (en chino).

## Notas

- Esta es una guía no oficial, no la documentación oficial de OpenHands. El [repositorio de OpenHands](https://github.com/OpenHands/OpenHands) y la [documentación oficial](https://docs.openhands.dev) son la referencia para comandos y comportamiento.
- OpenHands lo hacen los colaboradores de OpenHands, con licencia MIT.
- La estructura del sitio viene de [xxd-pstack](https://github.com/nevertoday/xxd-pstack); la interfaz usa xxd-ui-kit.
- Preguntas, partes confusas o pasos que no funcionaron: abre un [issue](https://github.com/nevertoday/xxd-openhands/issues).
