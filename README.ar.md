<div dir="rtl">

<div align="center">

# دليل المبتدئين إلى OpenHands

[English](./README.en.md) · [中文](./README.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Español](./README.es.md) · [Português](./README.pt.md) · [Français](./README.fr.md) · [Deutsch](./README.de.md) · [Русский](./README.ru.md) · **العربية**

### نصحك أحدهم بتجربة OpenHands؟ ابدأ من هنا.

[OpenHands](https://github.com/OpenHands/OpenHands) وكيل برمجة مفتوح المصدر يعمل بالذكاء الاصطناعي. تسلّمه مهمة، فيشغّل الأوامر ويعدّل الملفات ويفتح طلب الدمج (PR) بنفسه. ويمكنه أيضًا أن يبدأ العمل في مواعيد تحددها.<br>التوثيق الرسمي مكتوب للمهندسين. أما هذا الدليل فيشرحه بكلام بسيط، لتتابع معه حتى لو لم تكتب سطر برمجة من قبل.

**اقرأه على الإنترنت: <https://openhands.xiaoxiaodong.ai/ar/>**

</div>

## ماذا في الدليل

| القسم | لمن | ما الذي يشرحه |
| --- | --- | --- |
| [مسار المبتدئين](https://openhands.xiaoxiaodong.ai/ar/start/1-why/) | لمن لم يكتب كودًا من قبل | ثلاثة دروس: ثبّت تطبيق سطح المكتب، واحصل على مفتاح من OpenHands Cloud، واصنع صفحة صغيرة في مجلد فارغ |
| [الدليل الكامل](https://openhands.xiaoxiaodong.ai/en/guide/0-what/) (بالإنجليزية) | لمن يكتب الكود | 9 خطوات: التثبيت، والنماذج، والمحادثات، والوكلاء الآخرون، والواجهات الخلفية، والأتمتة، والمهارات وMCP، والاستضافة الذاتية |
| [How-to](https://openhands.xiaoxiaodong.ai/en/howto/) (بالإنجليزية) | لمن عنده مهمة محددة | قواعد كود غير مألوفة، ومن البلاغ (issue) إلى طلب الدمج، ومراجعة طلبات الدمج، وبيئات Docker المعزولة، والنماذج المحلية، والتكاليف… |
| [أتمتة جاهزة](https://openhands.xiaoxiaodong.ai/en/automations/) (بالإنجليزية) | لمن يريده أن يعمل في مواعيد محددة | كل أتمتة رسمية جاهزة في جملة بسيطة واحدة: ماذا تفعل، وماذا تحتاج، وكيف تشغّلها |
| [Wiki](https://openhands.xiaoxiaodong.ai/en/wiki/) · [الأسئلة الشائعة](https://openhands.xiaoxiaodong.ai/en/faq/) (بالإنجليزية) | لمن صادف كلمات لا يعرفها | Agent Canvas، والواجهات الخلفية، وبيئات العزل، وACP، وMCP، كلٌّ على حدة |

الصينية في جذر الموقع، والإنجليزية تحت `/en/`، والعربية تحت `/ar/` (الصفحة الرئيسية ودروس المبتدئين الثلاثة).

## الأمان أولًا

حين يعمل OpenHands مباشرة على جهازك، يستطيع الذكاء الاصطناعي قراءة الملفات وكتابتها وتشغيل الأوامر بصلاحيات حسابك. مسار المبتدئين يُبقيه داخل مجلد جديد فارغ. ولعزله، استخدم Docker (الخطوة 5 من الدليل الكامل).

## التشغيل محليًا

```bash
npm install
npm run dev      # http://localhost:4421
npm run build    # outputs to dist/
npm run check    # after a build: internal links, terms and wiki entries line up
```

قواعد الصيانة والكتابة موجودة في [docs/MAINTAINING.md](docs/MAINTAINING.md) (بالصينية).

## ملاحظات

- هذا دليل غير رسمي، وليس توثيق OpenHands الرسمي. [مستودع OpenHands](https://github.com/OpenHands/OpenHands) و[التوثيق الرسمي](https://docs.openhands.dev) هما المرجع في الأوامر وطريقة العمل.
- يطوّر OpenHands المساهمون فيه، برخصة MIT.
- هيكل الموقع مأخوذ من [xxd-pstack](https://github.com/nevertoday/xxd-pstack)، والواجهة تستخدم xxd-ui-kit.
- لأي سؤال، أو جزء غير واضح، أو خطوة لم تنجح: افتح [بلاغًا](https://github.com/nevertoday/xxd-openhands/issues).

</div>
