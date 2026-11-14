<div dir="rtl">

<div align="center">

# دليل المبتدئين إلى OpenHands

[English](./README.en.md) · [中文](./README.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Español](./README.es.md) · [Português](./README.pt.md) · [Français](./README.fr.md) · [Deutsch](./README.de.md) · [Русский](./README.ru.md) · **العربية**

### نصحك أحدهم بتجربة OpenHands، فضعت في التوثيق الرسمي؟

[OpenHands](https://github.com/OpenHands/OpenHands) وكيل برمجة مفتوح المصدر يعمل بالذكاء الاصطناعي. تسلّمه مهمة، فيشغّل الأوامر ويعدّل الملفات ويفتح طلب الدمج (PR) بنفسه. ويمكنه أيضًا أن يبدأ العمل في مواعيد تحددها.<br>هذا الدليل يشرحه بكلام بسيط، فتستطيع أن تتابع حتى لو لم تكتب سطر برمجة من قبل.

<a href="https://openhands.xiaoxiaodong.ai/ar/start/1-why/"><picture><source media="(prefers-color-scheme: dark)" srcset="assets/doors/ar-1-dark.svg"><img src="assets/doors/ar-1.svg" height="92" alt="لم تكتب كودًا من قبل: 3 دروس · 30 دقيقة"></picture></a> <a href="https://openhands.xiaoxiaodong.ai/en/guide/0-what/"><picture><source media="(prefers-color-scheme: dark)" srcset="assets/doors/ar-2-dark.svg"><img src="assets/doors/ar-2.svg" height="92" alt="تكتب الكود: دليل من 9 خطوات (بالإنجليزية)"></picture></a> <a href="https://openhands.xiaoxiaodong.ai/en/automations/"><picture><source media="(prefers-color-scheme: dark)" srcset="assets/doors/ar-3-dark.svg"><img src="assets/doors/ar-3.svg" height="92" alt="دعه يعمل وحده: 27 أتمتة جاهزة (بالإنجليزية)"></picture></a>

<sub>مجاني · مفتوح المصدر · 10 لغات · اقرأ على الإنترنت: <a href="https://openhands.xiaoxiaodong.ai/ar/">openhands.xiaoxiaodong.ai/ar</a></sub>

![مسار المبتدئين](https://img.shields.io/badge/%D9%85%D8%B3%D8%A7%D8%B1_%D8%A7%D9%84%D9%85%D8%A8%D8%AA%D8%AF%D8%A6%D9%8A%D9%86-3_%D8%AF%D8%B1%D9%88%D8%B3-8A9A8C?style=flat-square)
![الدليل الكامل](https://img.shields.io/badge/%D8%A7%D9%84%D8%AF%D9%84%D9%8A%D9%84_%D8%A7%D9%84%D9%83%D8%A7%D9%85%D9%84-9_%D8%AE%D8%B7%D9%88%D8%A7%D8%AA-8A9A8C?style=flat-square)
![How-to](https://img.shields.io/badge/How--to-19_%D8%B5%D9%81%D8%AD%D8%A9-C9A97A?style=flat-square)
![الأتمتة](https://img.shields.io/badge/%D8%A3%D8%AA%D9%85%D8%AA%D8%A9_%D8%AC%D8%A7%D9%87%D8%B2%D8%A9-27-D7B9C8?style=flat-square)
![Wiki](https://img.shields.io/badge/Wiki-24_%D9%85%D8%B5%D8%B7%D9%84%D8%AD%D9%8B%D8%A7-9AA8C4?style=flat-square)
![اللغات](https://img.shields.io/badge/%D8%A7%D9%84%D9%84%D8%BA%D8%A7%D8%AA-10-9AA8C4?style=flat-square)
![OpenHands](https://img.shields.io/badge/%D9%85%D9%8F%D8%B1%D8%A7%D8%AC%D9%8E%D8%B9_%D8%B9%D9%84%D9%89-OpenHands_v1.40.0-8A9A8C?style=flat-square)

</div>

<p align="center">
  <img src="assets/en/hero.svg" width="100%" alt="عرض توضيحي: جملة واحدة في مجلد water؛ ينشئ OpenHands الملفات، ويجرّب الصفحة، ويتحقق منها، ثم يسلّمك صفحة صغيرة لتتبّع شرب الماء">
</p>

<p align="center">
  <a href="#-هل-توقفت-هنا">توقفت؟</a> ·
  <a href="#-كيف-يساعدك-هذا-الدليل">المزايا</a> ·
  <a href="#-كيف-يعمل">كيف يعمل</a> ·
  <a href="#-ابدأ-في-ثلاث-خطوات">ثلاث خطوات</a> ·
  <a href="#-دعه-يعمل-وحده">الأتمتة</a> ·
  <a href="#-في-مشاريع-حقيقية">مشاريع حقيقية</a> ·
  <a href="#-الأمان-أولًا">الأمان</a> ·
  <a href="#-التشغيل-محليًا">التشغيل محليًا</a> ·
  <a href="https://openhands.xiaoxiaodong.ai/ar/">اقرأ على الإنترنت</a>
</p>

## 😵 هل توقفت هنا؟

- تفتح التوثيق الرسمي فترى npm وDocker وuv، قبل أن تعرف أيّها عليك أن تثبّت.
- Agent Canvas وAgent Server والواجهات الخلفية وACP وCloud وSDK: أسماء كثيرة، ولا تعرف أيّها يناسبك.
- سمعت أنه يعدّل الملفات ويشغّل الأوامر وحده، وتخشى أن يعبث ببقية جهازك.
- لا تعرف كم يكلّف، ولا إن كان عليك أولًا أن تفتح حسابات لدى مجموعة من شركات الذكاء الاصطناعي.

الذنب ليس ذنبك. التوثيق الرسمي مكتوب للمهندسين، ويفترض أنك تعرف المصطلحات مسبقًا. أما هذا الدليل فيجعلك تستخدمه أولًا، ثم يشرح كل كلمة حين تصادفها.

## ✨ كيف يساعدك هذا الدليل

- **من الصفر إلى أول نتيجة في نصف ساعة:** ثلاثة دروس للمبتدئين وطريق واحد: تطبيق سطح المكتب دون طرفية، ونموذج واحد، وأول صفحة ويب صغيرة لك في مجلد فارغ.
- **كل خطوة تقول لك ماذا يجب أن ترى:** إن رأيته فانتقل إلى ما بعدها. وإن لم تره، فالدرسان العمليان ينتهيان كلاهما بقسم «إن لم يسر شيء كما يجب».
- **كلام صريح عن المال:** OpenHands نفسه مجاني. إن كان لديك مفتاح من Anthropic أو OpenAI أو Google، أو كنت قد سجّلت الدخول إلى اشتراك Claude Code أو Codex، فاستخدمه ولن تدفع شيئًا إضافيًا. فقط إن لم يكن لديك هذا ولا ذاك تشحن 10 دولارات على OpenHands Cloud، وهناك نموذج مجاني لا يستهلك منها شيئًا.
- **الأمان من البداية:** في المرة الأولى يعمل فقط داخل مجلد جديد فارغ. وللعزل الحقيقي هناك إعداد باستخدام Docker.
- **كلمات جاهزة للنسخ:** كل مهمة من ثلاثة أجزاء: **ماذا أريد · كيف يبدو حين ينتهي · ماذا تُريني بعد أن تنتهي**. وفي كل صفحة How-to طلبات تلصقها كما هي.
- **أتمتة جاهزة، كل واحدة بجملة بسيطة:** كل الـ27 الرسمية، ومع كل واحدة ماذا تفعل لك، وما الذي تربطه أولًا، وكيف تشغّلها.
- **مرّر المؤشر لترى التعريف:** الكلمات التي تحتها خط منقّط تُظهر شرحًا من سطر واحد، وبالنقر تنتقل إلى Wiki.
- **10 لغات:** الصفحة الرئيسية ومسار المبتدئين بعشر لغات؛ أما الدليل الكامل وHow-to وWiki والأسئلة الشائعة فبالإنجليزية والصينية.
- **مُراجَع على إصدار محدد:** الأوامر وأسماء الأزرار مراجَعة على ملف README الخاص بـ OpenHands v1.40.0 وعلى التوثيق الرسمي.

## 🧭 كيف يعمل

<p align="center">
  <img src="assets/en/how.svg" width="100%" alt="كيف يعمل OpenHands: تسلّم المهمة في Agent Canvas، فتتولاها واجهة خلفية، ويفكّر الوكيل بنموذجك، ويعمل في مساحة العمل">
</p>

تسلّم المهمة في **Agent Canvas**، مركز التحكم في متصفحك أو في تطبيق سطح المكتب. ويتولاها **Agent Server**، الواجهة الخلفية التي تنجز العمل. يمكن أن يعمل على جهازك، أو في Docker، أو على جهاز افتراضي، أو على OpenHands Cloud. يفكّر الوكيل بالنموذج الذي ربطته، وقد يكون وكيل OpenHands المدمج، أو Claude Code أو Codex أو Gemini CLI. ثم يقرأ الملفات ويكتبها، ويشغّل الأوامر، ويفتح طلبات الدمج في **مساحة العمل**. التفاصيل في [الخطوة 0 من الدليل الكامل](https://openhands.xiaoxiaodong.ai/en/guide/0-what/) (بالإنجليزية).

## ⚡ ابدأ في ثلاث خطوات

**1. ثبّت تطبيق سطح المكتب.** من صفحة [أحدث إصدار لـ OpenHands](https://github.com/OpenHands/OpenHands/releases/latest)، نزّل الملف المناسب لنظامك من قسم **Assets** (يتوفر لـ Mac وWindows وLinux). يأتي التطبيق بكل ما يحتاجه، فلا حاجة إلى الطرفية. وإن كنت تكتب الكود، فـ npm يعمل أيضًا:

</div>

```bash
npm install -g @openhands/agent-canvas
agent-canvas
```

<div dir="rtl">

**2. اربط نموذجًا.** يعتمد ذلك على ما لديك أصلًا:

| ما لديك | كيف تربطه | تكلفة إضافية؟ |
|:---|:---|:---|
| مفتاح API من Anthropic أو OpenAI أو Google أو مزوّد آخر | اختر مزوّدك عند إعداد النموذج، والصق المفتاح | لا، تدفع بأسعار ذلك المزوّد |
| اشتراك في Claude Code أو Codex أو Gemini CLI سجّلت الدخول إليه | اربطه عبر ACP، راجع [الخطوة 4](https://openhands.xiaoxiaodong.ai/en/guide/4-agents/) (بالإنجليزية) | لا، يستخدم الاشتراك الذي تدفع ثمنه أصلًا |
| لا هذا ولا ذاك | احصل على مفتاح من OpenHands Cloud، راجع [الدرس 2](https://openhands.xiaoxiaodong.ai/ar/start/2-install/) | اشحن 10 دولارات أولًا؛ النماذج التي تحمل علامة `Free` لا تستهلك منها |

**3. سلّمه مهمة واحدة في مجلد فارغ.** أنشئ مجلدًا جديدًا فارغًا، وافتحه في Agent Canvas، وأرسل شيئًا كهذا:

```text
ماذا أريد: صفحة ويب صغيرة تحسب كم كوبًا من الماء أشرب كل يوم. هذا مجلد فارغ. ضع كل الملفات فيه، ولا تلمس أي شيء خارجه.
كيف يبدو حين ينتهي: أفتح الصفحة وأنقر «شربت كوبًا»، فيزيد عدد اليوم واحدًا؛ أغلقها وأفتحها من جديد فأجد الرقم كما هو؛ وتعرض الصفحة كم كوبًا شربت في كل يوم من آخر 7 أيام.
بعد أن تنتهي، أرِني: ما الذي فحصته، وماذا رأيت في كل فحص. ثم أخبرني أي ملف أنقر عليه نقرًا مزدوجًا لأفتح الصفحة.
```

> [!TIP]
> استخدم الأجزاء الثلاثة نفسها في كل ما تطلبه: **ماذا أريد · كيف يبدو حين ينتهي · ماذا تُريني بعد أن تنتهي**. وحين يقول إنه انتهى، افتح النتيجة وتحقّق منها بنفسك. التفاصيل في [الدرس 3](https://openhands.xiaoxiaodong.ai/ar/start/3-first-use/).

## 🤖 دعه يعمل وحده

يستطيع OpenHands أن يبدأ محادثة بنفسه في موعد محدد أو عند وقوع حدث ما. هذه هي **الأتمتة**. هناك 27 أتمتة جاهزة رسمية؛ اختر واحدة وشغّلها. إليك بعض الأمثلة (الصفحات المرتبطة بالإنجليزية):

| الأتمتة الجاهزة | متى تعمل | ماذا تفعل لك |
|:---|:---|:---|
| [مراجعة الكود على GitHub](https://openhands.xiaoxiaodong.ai/en/automations/github-pr-reviewer/) | موعد محدد / حدث | تجد طلبات الدمج التي تنتظر المراجعة، وتكلّف وكيلًا بمراجعتها على GitHub |
| [من مهمة في Linear إلى PR على GitHub](https://openhands.xiaoxiaodong.ai/en/automations/linear-issue-to-github-pr/) | موعد محدد / حدث | علّم مهمة في Linear بأنها جاهزة، فينفّذها الوكيل ثم يفتح طلب دمج على GitHub |
| [ملخّص الاجتماع اليومي من Slack](https://openhands.xiaoxiaodong.ai/en/automations/slack-standup-digest/) | موعد محدد | كل صباح من أيام العمل، تحوّل رسائل Slack من الأمس إلى ملاحظة للاجتماع اليومي |
| [ملخّص الأخبار اليومي](https://openhands.xiaoxiaodong.ai/en/automations/news-digest/) | موعد محدد | تقرأ مصادر أخبارك كل يوم، وتختار ما يهمّك، وتكتب ملخّصًا قصيرًا |
| [AGENTS.md Maintainer](https://openhands.xiaoxiaodong.ai/en/automations/github-agents-md-maintainer/) | موعد محدد | تُبقي AGENTS.md محدّثًا، وتفتح طلب دمج حين يتغيّر |

كل الـ27 تجدها في [الأتمتة الجاهزة](https://openhands.xiaoxiaodong.ai/en/automations/). ولكتابة أتمتتك الخاصة، راجع [الخطوة 6 من الدليل الكامل](https://openhands.xiaoxiaodong.ai/en/guide/6-automations/).

## 🛠 في مشاريع حقيقية

كل الصفحات أدناه بالإنجليزية.

| المهمة التي أمامك | اقرأ هذا | الخلاصة |
|:---|:---|:---|
| قاعدة كود لا تعرفها | [افهمها أولًا](https://openhands.xiaoxiaodong.ai/en/howto/new-codebase/) | اجعله يقرأ دون أن يغيّر شيئًا، ويشرح المشروع، ثم يحفظ ذلك في AGENTS.md |
| Issue على GitHub | [حوّلها إلى PR](https://openhands.xiaoxiaodong.ai/en/howto/issue-to-pr/) | نفّذ واحدة في محادثة أولًا؛ وحين تنجح، شغّل الأتمتة واكتفِ بإضافة وسم |
| مراجعة طلبات الدمج | [دعه يراجعها](https://openhands.xiaoxiaodong.ai/en/howto/code-review/) | اكتب `/codereview` في طلب الدمج؛ ولمراجعة كل طلب، شغّل الأتمتة |
| لست متأكدًا من تغييراتك | [جرّبها كما يجرّبها المستخدم](https://openhands.xiaoxiaodong.ai/en/howto/qa-changes/) | اكتب `/qa-changes`؛ فيشغّل البرنامج ويعود إليك بتقرير مع الأدلة |
| تخشى أن يلمس أكثر من اللازم | [شغّله داخل Docker](https://openhands.xiaoxiaodong.ai/en/howto/docker-sandbox/) | شغّله في Docker، فلا يرى إلا المجلد الواحد الذي تربطه به |
| يجب ألا يغادر الكود جهازك | [استخدم نموذجًا محليًا](https://openhands.xiaoxiaodong.ai/en/howto/local-llm/) | شغّل نموذجًا عبر LM Studio، ثم أدخل عنوانه في إعدادات Advanced |
| لست أمام مكتبك | [راقبه من هاتفك](https://openhands.xiaoxiaodong.ai/en/howto/phone/) | ضع الهاتف والكمبيوتر على شبكة Tailscale واحدة، وافتح عنوان الكمبيوتر |
| قلق من الفاتورة | [خفّض التكاليف](https://openhands.xiaoxiaodong.ai/en/howto/cost/) | نماذج رخيصة للأشياء الصغيرة؛ ولا تجعل مواعيد الأتمتة متقاربة جدًا |

وهناك أيضًا [طلبات جاهزة للنسخ واللصق](https://openhands.xiaoxiaodong.ai/en/howto/recipes/)، و[كيف تشرح له المهمة كي لا يحيد عنها](https://openhands.xiaoxiaodong.ai/en/howto/good-instructions/)، و[لا يفتح أو لا يتصل؟](https://openhands.xiaoxiaodong.ai/en/howto/troubleshoot/) وغيرها: 19 صفحة في المجموع.

## 🔒 الأمان أولًا

> [!WARNING]
> حين يعمل OpenHands مباشرة على جهازك، تكون للوكيل صلاحيات حسابك: يستطيع أن يقرأ ملفاتك ويكتبها ويشغّل الأوامر، ولا يستأذنك افتراضيًا قبل كل خطوة. في مسار المبتدئين يعمل فقط داخل مجلد جديد فارغ. وللعزل الحقيقي، شغّله في Docker ([الخطوة 5 من الدليل الكامل](https://openhands.xiaoxiaodong.ai/en/guide/5-backends/)، بالإنجليزية).

## 📚 ماذا في الموقع

كل ما عدا مسار المبتدئين بالإنجليزية.

- **[مسار المبتدئين](https://openhands.xiaoxiaodong.ai/ar/start/1-why/)**: 3 دروس، 30 دقيقة، دون حاجة إلى كتابة كود · ماذا يفعل لك ← ثبّته ← استخدمه أول مرة
- **[الدليل الكامل](https://openhands.xiaoxiaodong.ai/en/guide/0-what/)**: 9 خطوات لمن يكتب الكود · ما هو ← التثبيت ← النماذج ← أول محادثة ← وكلاء آخرون ← الواجهات الخلفية ← الأتمتة ← المهارات والإضافات وMCP ← الاستضافة الذاتية وSDK
- **[الأتمتة الجاهزة](https://openhands.xiaoxiaodong.ai/en/automations/)**: كل الـ27، مع تصفية حسب الاسم أو المجموعة أو المُشغِّل
- **[How-to](https://openhands.xiaoxiaodong.ai/en/howto/)**: 19 صفحة، لكل صفحة مهمة واحدة
- **[Wiki](https://openhands.xiaoxiaodong.ai/en/wiki/)**: 24 مصطلحًا · جملة واحدة ← تشبيه ← في OpenHands ← مفاهيم خاطئة شائعة
- **[الأسئلة الشائعة](https://openhands.xiaoxiaodong.ai/en/faq/)**: هل يكلّف مالًا؟ هل أحتاج إلى مفتاح API؟ يشغّل الأوامر دون أن يسأل، فهل هذا آمن؟
- **اللغات**: الصفحة الرئيسية ومسار المبتدئين بعشر لغات؛ وكل ما عداهما بالإنجليزية والصينية

اضغط <kbd>⌘</kbd> <kbd>K</kbd> في أعلى الصفحة للبحث في الموقع كله. ويعمل الموقع بالوضع الفاتح والداكن وعلى الهاتف.

## 💻 التشغيل محليًا

</div>

```bash
npm install
npm run dev          # http://localhost:4421
npm run build        # يبني إلى dist/ ويفحص الروابط الداخلية
npm run check:i18n   # هل اللغات الثماني الأخرى مكتملة؟
npm run assets       # يعيد توليد صور README
npm run release      # يبني الموقع وينشره على Cloudflare
```

```text
src/data/nav.js          بنية الموقع: مسار المبتدئين، والدليل الكامل، وقائمة How-to (مصدر واحد)
src/data/glossary.js     المصطلحات: نص التلميح ومداخلها في Wiki
src/data/automations.js  بيانات الأتمتة الجاهزة
src/i18n/                نصوص الواجهة للغات الثماني الأخرى (base.js هو الأساس الإنجليزي)
src/pages/start/         دروس المبتدئين الثلاثة (MDX)
src/pages/guide/         الدليل الكامل (MDX)
src/pages/howto/         صفحات How-to (MDX)
public/xxd/              Xiaoxiaodong UI Kit (نسخة مضمّنة، دون CDN)
tools/build_assets.py    رسوم README وبطاقات الأبواب وصور المشاركة
```

<div dir="rtl">

لتعديل المحتوى وإضافة الصفحات وقواعد الكتابة راجع [docs/MAINTAINING.md](docs/MAINTAINING.md) (بالصينية).

## 🙌 شكر وتقدير

- يطوّر [OpenHands](https://github.com/OpenHands/OpenHands) المساهمون فيه (برخصة MIT). هذا دليل غير رسمي للمبتدئين، و[المستودع الرسمي](https://github.com/OpenHands/OpenHands) و[التوثيق](https://docs.openhands.dev) هما المرجع في الأوامر وطريقة العمل.
- هيكل الموقع مأخوذ من [xxd-pstack](https://github.com/nevertoday/xxd-pstack)، والواجهة مبنية بـ [Xiaoxiaodong UI Kit](https://ui.xiaoxiaodong.ai).

وجدت شيئًا غير واضح، أو خطوة لم تنجح كما هي مكتوبة؟ [افتح Issue](https://github.com/nevertoday/xxd-openhands/issues).

## 📄 الترخيص

نصوص الدليل وكود الموقع مرخّصة بموجب [MIT](LICENSE). أما نسخة Xiaoxiaodong UI Kit المبنية في `public/xxd/` فغير مشمولة، ولها [LICENSE](public/xxd/LICENSE) خاص بها (مجاني للاستخدام غير التجاري، والاستخدام التجاري يتطلب ترخيصًا).

Copyright (c) 2026 [Xiaoxiaodong](https://x.com/xiaoxiaodong01)

</div>
