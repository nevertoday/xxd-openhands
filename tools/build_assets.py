#!/usr/bin/env python3
"""生成 README 的插画和网站分享大图。

- assets/hero.svg、how.svg、automate.svg、safety.svg（中文），assets/en/ 下是英文版：README 里的演示动画、流程图、自动化和安全两张图。
- assets/doors/<语言>-1..3(-dark).svg：README 顶部的三扇门，10 种语言，亮色暗色各一张。
- public/img/hero-zh.svg、hero-en.svg：hero 的副本，网站首页和第 1 课用。
- assets/social.svg、assets/social-en.svg：分享大图，再按 docs/MAINTAINING.md 用 Chrome 转成 public/og.png、og-en.png。

用法：npm run assets（先在 Chrome 里量字宽，写进 tools/text-widths.json，再生成；文字放不下会报错）。
只改了颜色、没改文字时，直接 python3 tools/build_assets.py 也行。
动画只用 SVG 自带的 <animate> 和 CSS，GitHub 的 README 里能直接播放。
配色沿用 UI Kit：近白画布、纯白卡片、暖墨字、一组去掉灰调的浅色。
"""
import json
import sys
from pathlib import Path
from xml.sax.saxutils import escape

OUT = Path(__file__).resolve().parent.parent / "assets"
OUT.mkdir(exist_ok=True)

PAPER = "#FAFAF8"
CARD = "#FFFFFF"
LINE = "#E9E7E4"
INK = "#2B2A27"
MUTED = "#6D6B67"
ROSE, SAGE, APRICOT, LILAC, MINT, SKY = "#FBE3E0", "#E2F1DC", "#FCEAD2", "#ECE6F8", "#DCF4EA", "#E0ECF9"
TERM = "#1A1A1A"
TERM_FG = "#E6E4DC"
TERM_MUTED = "#8A867D"
OK = "#9CC59E"

SANS = "-apple-system,BlinkMacSystemFont,'PingFang SC','Hiragino Sans GB','Noto Sans CJK SC','Microsoft YaHei',sans-serif"
MONO = "ui-monospace,'SF Mono',Menlo,Consolas,'Liberation Mono',monospace"


def t(x, y, s, size=14, fill=INK, weight=400, font=SANS, anchor="start"):
    return (f'<text x="{x}" y="{y}" font-family="{font}" font-size="{size}" font-weight="{weight}" '
            f'fill="{fill}" text-anchor="{anchor}">{escape(s)}</text>')


# ---------- 字宽：Chrome 里用 canvas 量的（tools/measure-text.mjs 写进 text-widths.json） ----------
WIDTHS_FILE = Path(__file__).resolve().parent / "text-widths.json"
WIDTHS = json.loads(WIDTHS_FILE.read_text()) if WIDTHS_FILE.exists() else {}
NEED = []  # 还没量过的 [css font, 文字]
TOO_WIDE = []  # 量过、但放不下的文字


def tw(s, size, weight=400, font=SANS):
    """文字在 Chrome 里的宽度。没量过就先粗估，并记下来等 npm run assets 去量。"""
    css = f"{weight} {size}px {font}"
    key = f"{css}|{s}"
    if key in WIDTHS:
        return WIDTHS[key]
    NEED.append([css, s])
    return sum(size if ord(c) > 0x2E80 else size * 0.62 for c in s)


def fits(s, size, room, weight=400, font=SANS):
    """量过的文字放不进 room 宽就报错，免得 README 里的字溢出卡片"""
    w = tw(s, size, weight, font)
    if "--need" not in sys.argv and f"{weight} {size}px {font}|{s}" in WIDTHS and w > room:
        TOO_WIDE.append(f"✗ 放不下（{w:.0f} > {room}）：{s}")
    return s


def svg(w, h, label, body, defs=""):
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" width="{w}" height="{h}" role="img" '
            f'aria-label="{escape(label)}">\n<defs>{defs}</defs>\n{rect(0.5, 0.5, w - 1, h - 1, PAPER, 22, LINE)}\n{body}\n</svg>\n')


def appear(t_in, t_out, total, base=0.0):
    """在一个循环（total 秒）里：t_in 秒淡入、t_out 秒淡出。返回 <animate> 片段。"""
    k = lambda v: f"{max(0.0, min(1.0, v / total)):.4f}"
    fade = 0.35
    times = ["0", k(t_in), k(t_in + fade), k(t_out), k(min(t_out + fade, total)), "1"]
    vals = [base, base, 1, 1, base, base]
    return (f'<animate attributeName="opacity" dur="{total}s" repeatCount="indefinite" '
            f'keyTimes="{";".join(times)}" values="{";".join(str(v) for v in vals)}"/>')


def write(name, content, lang="zh"):
    out = OUT if lang == "zh" else OUT / lang
    out.mkdir(exist_ok=True)
    (out / name).write_text(content, encoding="utf-8")
    print(f"✓ assets/{'' if lang == 'zh' else lang + '/'}{name}  {len(content.encode()) // 1024} KB")


def rect(x, y, w, h, fill, rx=0, stroke=None, extra=""):
    st = f' stroke="{stroke}"' if stroke else ""
    return f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{rx}" fill="{fill}"{st} {extra}/>'


def social(lang):
    L = (lambda zh, en: zh) if lang == "zh" else (lambda zh, en: en)
    W, H = 1280, 640
    b = [f'<rect width="{W}" height="{H}" fill="{PAPER}"/>']
    # 本站标志：暖黑方块里一个命令行提示符（›_）
    mx, my, ms = 84, 92, 64
    u = ms / 20
    b.append(rect(mx, my, ms, ms, INK, 8))
    b.append(f'<path d="M{mx + 5 * u},{my + 6 * u} l{4 * u},{4 * u} l{-4 * u},{4 * u}" fill="none" stroke="{CARD}" stroke-width="{2 * u}" stroke-linecap="square"/>')
    b.append(rect(mx + 10.5 * u, my + 12.5 * u, 5 * u, 2 * u, CARD))
    b.append(t(mx + ms + 22, my + 47, "OpenHands", 50, INK, 700, MONO))
    b.append(t(84, 262, L("新手教程", "for beginners"), 64, INK, 700))
    b.append(t(84, 338, L("一个会自己动手的 AI：", "An AI that does the work:"), 34, INK, 600))
    b.append(t(84, 386, L("敲命令、改文件、开 PR。", "commands, files, PRs."), 34, INK, 600))
    hl = L("不会写代码也能用上。", "No coding needed to start.")
    hw = sum(34 if ord(c) > 0x2E80 else 17 for c in hl) + 10
    b.append(rect(80, 422, hw, 24, "#F2C46B", 0, extra='opacity=".55"'))
    b.append(t(84, 440, hl, 34, INK, 700))
    b.append(t(84, 512, L("新手入门 3 课 · 完整教程 9 步 · 现成自动化速查 · 10 种语言", "3 beginner lessons · 9-step guide · automations · 10 languages"), 20, MUTED))
    b.append(t(84, 560, L("openhands.xiaoxiaodong.ai", "openhands.xiaoxiaodong.ai/en"), 24, INK, 600, MONO))
    # 右边：一次对话的示意（交代一件事 → 它一步步动手 → 做完）
    x0, y0, ww, wh = 700, 150, 500, 340
    b.append(f'<rect x="{x0}" y="{y0}" width="{ww}" height="{wh}" rx="14" fill="#000" opacity=".9" filter="url(#ssh)"/>')
    b.append(f'<g clip-path="url(#sw)">{rect(x0, y0, ww, wh, TERM)}{rect(x0, y0, ww, 36, "#2A2926")}')
    for i, c in enumerate(["#FF5F57", "#FEBC2E", "#28C840"]):
        b.append(f'<circle cx="{x0 + 22 + i * 20}" cy="{y0 + 18}" r="6" fill="{c}"/>')
    b.append(t(x0 + 92, y0 + 23, "Agent Canvas", 13, TERM_MUTED, 500))
    b.append(t(x0 + 22, y0 + 76, "›", 18, "#D7B9C8", 700, MONO))
    b.append(t(x0 + 42, y0 + 76, L("在 my-page 文件夹里", "In the my-page folder,"), 16, TERM_FG, 600))
    b.append(t(x0 + 42, y0 + 100, L("做一个介绍我的小网页。", "make a small page about me."), 16, TERM_FG, 600))
    steps = [(L("读文件夹", "Read the folder"), SKY), (L("写 index.html", "Write index.html"), APRICOT),
             (L("运行命令预览", "Run a preview"), LILAC), (L("检查结果", "Check the result"), SAGE)]
    for i, (name, col) in enumerate(steps):
        y = y0 + 152 + i * 42
        b.append(rect(x0 + 42, y - 18, 22, 22, "none", 5, "#55524B", 'stroke-width="1.5"'))
        b.append(f'<path d="M{x0 + 47},{y - 7} l5,5 l8,-10" fill="none" stroke="{col}" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>')
        b.append(t(x0 + 78, y, name, 16, col, 700))
    b.append(t(x0 + 42, y0 + 322, L("✓ 做好了：my-page/index.html", "✓ Done: my-page/index.html"), 15, OK, 600, MONO))
    b.append("</g>")
    defs = (f'<clipPath id="sw"><rect x="{x0}" y="{y0}" width="{ww}" height="{wh}" rx="14"/></clipPath>'
            '<filter id="ssh" x="-20%" y="-20%" width="140%" height="150%"><feDropShadow dx="0" dy="22" stdDeviation="26" flood-color="#111111" flood-opacity=".10"/></filter>')
    content = (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" width="{W}" height="{H}">\n'
               f'<defs>{defs}</defs>\n' + "\n".join(b) + "\n</svg>\n")
    name = "social.svg" if lang == "zh" else f"social-{lang}.svg"
    (OUT / name).write_text(content, encoding="utf-8")
    print(f"✓ assets/{name}")




def pick(lang):
    """L(中文, 英文)：按语言取一个。"""
    return lambda zh, en: zh if lang == "zh" else en


# ---------- hero：交代一件事 → 它一步步动手 → 做好的小网页（循环 14 秒） ----------
# 内容照新手第 3 课：在空文件夹 water 里做一个记录喝水的小网页。是示意，不是截图。
def hero(lang="zh"):
    L = pick(lang)
    W, H, T = 960, 480, 14.0
    x0, y0, ww, wh = 48, 36, 864, 390
    body = [f'<rect x="{x0}" y="{y0}" width="{ww}" height="{wh}" rx="12" fill="#000" opacity=".9" filter="url(#sh)"/>',
            '<g clip-path="url(#win)">', rect(x0, y0, ww, wh, TERM), rect(x0, y0, ww, 34, "#2A2926")]
    for i, c in enumerate(["#FF5F57", "#FEBC2E", "#28C840"]):
        body.append(f'<circle cx="{68 + i * 20}" cy="{y0 + 17}" r="6" fill="{c}"/>')
    body.append(t(W / 2, y0 + 22, "OpenHands Agent Canvas · water", 12, TERM_MUTED, font=MONO, anchor="middle"))

    # 交代的话：逐字打出（用一块遮罩从左往右揭开）
    prompt = fits(L("做一个记录每天喝了几杯水的小网页，只在这个文件夹里做。",
                    "Build a page that counts glasses of water. Only use this folder."), 16, ww - 80, 500)
    pw = tw(prompt, 16, 500)
    py = y0 + 78
    body.append(t(x0 + 28, py, "›", 18, "#D7B9C8", 700, MONO))
    body.append(f'<g clip-path="url(#typing)">{t(x0 + 50, py, prompt, 16, TERM_FG, 500)}</g>')
    body.append(f'<rect x="{x0 + 50}" y="{py - 15}" width="9" height="19" fill="#D7B9C8">'
                f'<animate attributeName="x" dur="{T}s" repeatCount="indefinite" keyTimes="0;0.02;0.2;1" '
                f'values="{x0 + 50};{x0 + 50};{x0 + 52 + pw:.0f};{x0 + 52 + pw:.0f}"/>'
                f'<animate attributeName="opacity" dur="1s" repeatCount="indefinite" values="1;1;0;0" keyTimes="0;0.5;0.5;1"/></rect>')
    body.append(f'<g opacity="0">{appear(3.2, 13.2, T)}'
                + t(x0 + 50, py + 40, fits(L("好的。文件夹是空的，我从头建，只动这里面的文件。",
                                             "Got it. The folder is empty; I'll build from scratch here."), 13.5, 500, font=MONO), 13.5, TERM_MUTED, font=MONO)
                + "</g>")
    # 它一步步动手
    steps = L([("建文件", "index.html · style.css · app.js", ROSE),
               ("试一遍", "打开网页，点三下「喝了一杯」", APRICOT),
               ("自己检查", "杯数 0 → 3，刷新后还是 3", SAGE),
               ("交给你", "双击 index.html 就能打开", LILAC)],
              [("Files", "index.html · style.css · app.js", ROSE),
               ("Tries it", "opens it, clicks “+1 glass” 3 times", APRICOT),
               ("Checks", "count 0 → 3, still 3 after reload", SAGE),
               ("Hands back", "double-click index.html to open", LILAC)])
    nx = L(168, 196)  # 步骤说明的起点（英文步骤名更长）
    for i, (name, note, col) in enumerate(steps):
        y = py + 92 + i * 46
        tin = 4.0 + i * 1.2
        fits(name, 15, nx - 92, 700)
        fits(note, 13.5, 520 - nx, font=MONO)
        body.append(f'<g opacity="0">{appear(tin, 13.2, T)}')
        body.append(rect(x0 + 50, y - 20, 24, 24, "none", 5, "#55524B", 'stroke-width="1.5"'))
        body.append(f'<path d="M{x0 + 56},{y - 8} l5,5 l8,-10" fill="none" stroke="{col}" stroke-width="2.4" '
                    f'stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="20" stroke-dashoffset="20">'
                    f'<animate attributeName="stroke-dashoffset" dur="{T}s" repeatCount="indefinite" '
                    f'keyTimes="0;{(tin + 0.5) / T:.4f};{(tin + 0.9) / T:.4f};1" values="20;20;0;0"/></path>')
        body.append(t(x0 + 88, y - 2, name, 15, col, 700))
        body.append(t(x0 + nx, y - 2, note, 13.5, TERM_FG, 400, MONO))
        body.append("</g>")

    # 做好的小网页（浏览器里的样子）
    cx, cy, cw, ch = x0 + 576, py + 30, 240, 240
    body.append(f'<g opacity="0">{appear(9.4, 13.2, T)}')
    body.append(rect(cx, cy, cw, ch, CARD, 10))
    body.append(rect(cx, cy, cw, 26, "#EFEDE9", 0))
    body.append(t(cx + 12, cy + 17, "water/index.html", 11, MUTED, font=MONO))
    body.append(t(cx + cw / 2, cy + 62, fits(L("今天喝了", "Today"), 14, cw - 24), 14, MUTED, anchor="middle"))
    body.append(t(cx + cw / 2, cy + 108, L("3 杯", "3 glasses"), 34, INK, 700, anchor="middle"))
    bl = fits(L("喝了一杯", "+1 glass"), 14, 120, 600)
    body.append(rect(cx + cw / 2 - 60, cy + 124, 120, 34, INK, 6))
    body.append(t(cx + cw / 2, cy + 146, bl, 14, CARD, 600, anchor="middle"))
    for d, v in enumerate([5, 7, 4, 6, 8, 6, 3]):
        bx = cx + 36 + d * 25
        body.append(rect(bx, cy + 222 - v * 6, 14, v * 6, SKY if d < 6 else "#9CC0E8", 2))
    body.append("</g></g>")

    body.append(t(W / 2, H - 22, fits(L("示意：你交代一件事，它自己建文件、试一遍、检查，再交回来。全程只在你给的文件夹里。",
                                        "Illustration: you hand over one task; it creates the files, tries them, checks, and hands back. All inside the folder you gave it."), 14, W - 40),
                  14, MUTED, anchor="middle"))
    defs = (f'<clipPath id="win"><rect x="{x0}" y="{y0}" width="{ww}" height="{wh}" rx="12"/></clipPath>'
            f'<clipPath id="typing"><rect x="{x0 + 50}" y="{py - 22}" height="30" width="0">'
            f'<animate attributeName="width" dur="{T}s" repeatCount="indefinite" keyTimes="0;0.02;0.2;1" values="0;0;{pw + 4:.0f};{pw + 4:.0f}"/>'
            f'</rect></clipPath>'
            '<filter id="sh" x="-10%" y="-10%" width="120%" height="130%"><feDropShadow dx="0" dy="14" stdDeviation="16" flood-color="#111111" flood-opacity=".09"/></filter>')
    content = svg(W, H, L("演示：在 water 文件夹里交代一句话，OpenHands 建文件、试一遍、自己检查，最后交回一个记录喝水的小网页",
                                  "Demo: one sentence in the water folder; OpenHands creates the files, tries the page, checks it, and hands back a small water-tracking page"),
                    "\n".join(body), defs)
    write("hero.svg", content, lang)
    if OUT != Path("/dev/null"):
        # 网站首页和第 1 课也用这张图（public/img/hero-zh.svg、hero-en.svg）
        site = OUT.parent / "public" / "img"
        site.mkdir(parents=True, exist_ok=True)
        (site / f"hero-{lang}.svg").write_text(content, encoding="utf-8")


# ---------- how：一次对话走过的四站（连线上有小点跑过） ----------
def how(lang="zh"):
    L = pick(lang)
    W, H, T = 960, 270, 4.8
    cards = L([("01", "你交代一件事", "Agent Canvas", "浏览器里或桌面版", ROSE),
               ("02", "后端接下来", "Agent Server", "你的电脑 · Docker · Cloud", APRICOT),
               ("03", "代理配上模型", "OpenHands · Claude Code", "用你接上的模型来想", SAGE),
               ("04", "在工作区动手", "文件 · 命令 · PR", "自动化还能按时开工", LILAC)],
              [("01", "You hand it a task", "Agent Canvas", "browser or desktop app", ROSE),
               ("02", "A backend takes it", "Agent Server", "your machine · Docker · Cloud", APRICOT),
               ("03", "Agent + your model", "OpenHands · Claude Code", "using the model you connect", SAGE),
               ("04", "It works in a folder", "files · commands · PRs", "or on a schedule, by itself", LILAC)])
    body, defs = [], []
    cw, gap = 204, 22
    x = (W - (cw * 4 + gap * 3)) / 2
    for i, (n, h, mono, sub, col) in enumerate(cards):
        fits(h, 18, cw - 28, 700)
        fits(mono, 12, cw - 28, font=MONO)
        fits(sub, 12.5, cw - 28)
        cx = x + i * (cw + gap)
        defs.append(f'<clipPath id="h{i}"><rect x="{cx}" y="28" width="{cw}" height="190" rx="14"/></clipPath>')
        body.append(rect(cx, 28, cw, 190, CARD, 14, LINE))
        body.append(f'<g clip-path="url(#h{i})">{rect(cx, 28, cw, 48, col)}</g>')
        body.append(f'<text x="{cx + 16}" y="60" font-family="{MONO}" font-size="15" font-weight="700" fill="{INK}" opacity=".55">{n}</text>')
        body.append(t(cx + 16, 108, h, 18, INK, 700))
        body.append(t(cx + 16, 140, mono, 12, INK, 400, MONO))
        body.append(t(cx + 16, 180, sub, 12.5, MUTED))
        if i < 3:
            ax = cx + cw + 3
            body.append(f'<path d="M{ax},{123} L{ax + gap - 6},{123}" stroke="{MUTED}" stroke-width="1.6" stroke-linecap="round"/>')
            body.append(f'<path d="M{ax + gap - 11},{118} L{ax + gap - 6},{123} L{ax + gap - 11},{128}" fill="none" stroke="{MUTED}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>')
            begin = i * T / 3
            body.append(f'<circle cx="{ax}" cy="123" r="3" fill="{INK}" opacity="0">'
                        f'<animate attributeName="cx" dur="{T}s" begin="{begin:.2f}s" repeatCount="indefinite" keyTimes="0;0.2;1" values="{ax};{ax + gap - 8};{ax + gap - 8}"/>'
                        f'<animate attributeName="opacity" dur="{T}s" begin="{begin:.2f}s" repeatCount="indefinite" keyTimes="0;0.03;0.17;0.2;1" values="0;1;1;0;0"/></circle>')
    body.append(t(W / 2, 252, fits(L("一次对话走过这四站。后端装在哪台机器上，代理就能碰到哪里的文件。",
                                     "Every conversation passes these four stops. Whichever machine runs the backend is whose files the agent can reach."), 13.5, W - 40),
                  13.5, MUTED, anchor="middle"))
    write("how.svg", svg(W, H, L("OpenHands 怎么干活：你在 Agent Canvas 交代一件事，后端接下来，代理配上模型，在工作区里动手",
                                 "How OpenHands works: you hand a task over in Agent Canvas, a backend takes it, the agent thinks with your model, and it works in the workspace"),
                         "\n".join(body), "".join(defs)), lang)


# ---------- automate：到点 → 后端自己开一个对话干活 → 结果发到你说的地方（循环 12 秒） ----------
# 例子照现成自动化 Slack standup digest（src/data/automations.js）。是示意，不是截图。
def automate(lang="zh"):
    L = pick(lang)
    W, H, T = 960, 400, 12.0
    end = 11.3
    top, ch = 80, 252
    cols = [(40, 210), (290, 380), (710, 210)]
    heads = L(["① 到点，或有事发生", "② 后端自己开一个对话", "③ 结果发到你说的地方"],
              ["① Time's up, or an event", "② The backend starts a chat", "③ It posts where you said"])
    body = []
    for (x, w), h in zip(cols, heads):
        body.append(t(x, 60, fits(h, 14.5, w + 20, 700), 14.5, INK, 700))

    # ① 触发：定时（这次触发的就是它）和事件
    x, w = cols[0]
    body.append(rect(x, top, w, ch, CARD, 14, LINE))
    body.append(f'<rect x="{x + 10}" y="{top + 12}" width="{w - 20}" height="66" rx="10" fill="{SKY}" opacity="0">'
                f'<animate attributeName="opacity" dur="{T}s" repeatCount="indefinite" keyTimes="0;{0.8 / T:.4f};{1.2 / T:.4f};{end / T:.4f};{(end + 0.35) / T:.4f};1" values="0;0;1;1;0;0"/></rect>')
    ox, oy = x + 38, top + 45
    body.append(f'<circle cx="{ox}" cy="{oy}" r="15" fill="{CARD}" stroke="{INK}" stroke-width="1.8"/>')
    body.append(f'<path d="M{ox},{oy} h-8" stroke="{INK}" stroke-width="2" stroke-linecap="round"/>')
    body.append(f'<path d="M{ox},{oy} v-11" stroke="{INK}" stroke-width="1.6" stroke-linecap="round">'
                f'<animateTransform attributeName="transform" type="rotate" dur="{T}s" repeatCount="indefinite" '
                f'keyTimes="0;{1.0 / T:.4f};1" values="-60 {ox} {oy};0 {ox} {oy};0 {ox} {oy}"/></path>')
    body.append(t(x + 64, top + 41, fits(L("每个工作日 9:00", "Weekdays 9:00"), 14, w - 74, 600), 14, INK, 600))
    body.append(t(x + 64, top + 60, fits(L("定时", "schedule"), 12, w - 74), 12, MUTED))
    body.append(t(x + w / 2, top + 104, L("或", "or"), 12, MUTED, anchor="middle"))
    ey = top + 140
    body.append(f'<path d="M{ox + 3},{ey - 16} l-9,17 h7 l-3,15 l10,-19 h-7 z" fill="{APRICOT}" stroke="{INK}" stroke-width="1.5" stroke-linejoin="round"/>')
    body.append(t(x + 64, ey - 4, fits(L("有新的 PR、新消息", "New PR or message"), 14, w - 74, 600), 14, INK, 600))
    body.append(t(x + 64, ey + 15, fits(L("事件", "event"), 12, w - 74), 12, MUTED))
    body.append(f'<path d="M{x + 16},{top + 186} h{w - 32}" stroke="{LINE}"/>')
    body.append(f'<circle cx="{x + 24}" cy="{top + 211}" r="4" fill="{OK}"><animate attributeName="opacity" dur="2s" repeatCount="indefinite" values="1;.35;1"/></circle>')
    body.append(t(x + 36, top + 215, fits("Automation Server", 12, w - 46, 600, MONO), 12, INK, 600, MONO))
    body.append(t(x + 16, top + 236, fits(L("在后端里，后端停了就不跑", "backend off = no runs"), 12, w - 28), 12, MUTED))

    # 连线和跑过去的小点
    def link(x1, x2, t0):
        y = top + ch / 2
        k = lambda v: f"{v / T:.4f}"
        return (f'<path d="M{x1},{y} L{x2 - 4},{y}" stroke="{MUTED}" stroke-width="1.6" stroke-linecap="round"/>'
                f'<path d="M{x2 - 9},{y - 5} L{x2 - 4},{y} L{x2 - 9},{y + 5}" fill="none" stroke="{MUTED}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>'
                f'<circle cx="{x1}" cy="{y}" r="3.5" fill="{INK}" opacity="0">'
                f'<animate attributeName="cx" dur="{T}s" repeatCount="indefinite" keyTimes="0;{k(t0)};{k(t0 + 0.6)};1" values="{x1};{x1};{x2 - 6};{x2 - 6}"/>'
                f'<animate attributeName="opacity" dur="{T}s" repeatCount="indefinite" keyTimes="0;{k(t0)};{k(t0 + 0.05)};{k(t0 + 0.55)};{k(t0 + 0.6)};1" values="0;0;1;1;0;0"/></circle>')
    body.append(link(cols[0][0] + cols[0][1] + 6, cols[1][0] - 2, 1.3))
    body.append(link(cols[1][0] + cols[1][1] + 6, cols[2][0] - 2, 8.0))

    # ② 新对话：状态 PENDING → RUNNING → COMPLETED，三步打勾
    x, w = cols[1]
    body.append(f'<rect x="{x}" y="{top}" width="{w}" height="{ch}" rx="12" fill="#000" opacity=".9" filter="url(#ash)"/>')
    body.append(f'<g clip-path="url(#aw)">{rect(x, top, w, ch, TERM)}{rect(x, top, w, 32, "#2A2926")}')
    for i, c in enumerate(["#FF5F57", "#FEBC2E", "#28C840"]):
        body.append(f'<circle cx="{x + 18 + i * 18}" cy="{top + 16}" r="5" fill="{c}"/>')
    body.append(t(x + 80, top + 21, fits(L("新对话 · Slack standup digest", "New chat · Slack standup digest"), 12, w - 96, font=MONO), 12, TERM_MUTED, font=MONO))
    body.append(t(x + 22, top + 64, L("状态", "Status"), 12.5, TERM_MUTED))
    sx = x + 22 + tw(L("状态", "Status"), 12.5) + 12
    for s, col, a, b in [("PENDING", TERM_MUTED, 1.9, 3.0), ("RUNNING", "#EFDFC9", 3.0, 7.4), ("COMPLETED", OK, 7.4, end)]:
        body.append(f'<g opacity="0">{appear(a, b, T)}{t(sx, top + 64, s, 12.5, col, 700, MONO)}</g>')
    steps = L([("读设定频道里昨天的消息", SKY), ("分成做完、在做、卡住、定下", APRICOT), ("写成一条站会笔记", SAGE), ("发到 #standup 频道", LILAC)],
              [("Read yesterday's messages", SKY), ("Sort: shipped, doing, blocked, decided", APRICOT), ("Write one standup note", SAGE), ("Post it to #standup", LILAC)])
    for i, (s, col) in enumerate(steps):
        y = top + 106 + i * 36
        tin = 3.3 + i * 1.0
        body.append(f'<g opacity="0">{appear(tin, end, T)}')
        body.append(rect(x + 22, y - 16, 20, 20, "none", 4, "#55524B", 'stroke-width="1.5"'))
        body.append(f'<path d="M{x + 27},{y - 6} l4,4 l7,-9" fill="none" stroke="{col}" stroke-width="2.2" '
                    f'stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="18" stroke-dashoffset="18">'
                    f'<animate attributeName="stroke-dashoffset" dur="{T}s" repeatCount="indefinite" '
                    f'keyTimes="0;{(tin + 0.4) / T:.4f};{(tin + 0.8) / T:.4f};1" values="18;18;0;0"/></path>')
        body.append(t(x + 54, y - 1, fits(s, 13.5, w - 70), 13.5, TERM_FG))
        body.append("</g>")
    body.append("</g>")

    # ③ Slack 频道里多了一条消息；对话列表里也多了一条
    x, w = cols[2]
    body.append(rect(x, top, w, ch, CARD, 14, LINE))
    body.append(t(x + 16, top + 30, "# standup", 13, INK, 700, MONO))
    body.append(f'<path d="M{x + 16},{top + 44} h{w - 32}" stroke="{LINE}"/>')
    body.append(f'<g opacity="0">{appear(8.6, end, T)}')
    body.append(rect(x + 16, top + 58, 26, 26, LILAC, 6))
    body.append(t(x + 50, top + 70, "OpenHands", 13, INK, 700))
    body.append(t(x + 50, top + 86, "9:03", 11, MUTED))
    body.append(t(x + 16, top + 112, fits(L("站会笔记 · 昨天", "Standup · yesterday"), 13, w - 32, 600), 13, INK, 600))
    for i, (lab, col) in enumerate(L([("做完", SAGE), ("在做", SKY), ("卡住", ROSE), ("定下", APRICOT)],
                                     [("Shipped", SAGE), ("Doing", SKY), ("Blocked", ROSE), ("Decided", APRICOT)])):
        y = top + 136 + i * 22
        lw = tw(lab, 11.5, 600) + 12
        body.append(rect(x + 16, y - 12, lw, 17, col, 4))
        body.append(t(x + 22, y + 1, fits(lab, 11.5, 70, 600), 11.5, INK, 600))
        body.append(rect(x + 24 + lw, y - 6, [96, 72, 84, 60][i], 6, LINE, 3))
    body.append("</g>")
    body.append(f'<g opacity="0">{appear(9.4, end, T)}')
    body.append(f'<path d="M{x + 16},{top + 222} h{w - 32}" stroke="{LINE}"/>')
    body.append(t(x + 16, top + 241, fits(L("对话列表里也多了一条，能点开看", "Also in your chat list to open"), 12, w - 28), 12, MUTED))
    body.append("</g>")

    body.append(t(W / 2, H - 24, fits(L("示意：到点或有事发生，后端自己开一个完整的对话去干活，把结果发到你说的地方。",
                                        "Illustration: at the set time or on an event, the backend starts a full conversation and sends the result where you said."), 14, W - 40),
                  14, MUTED, anchor="middle"))
    x, w = cols[1]
    defs = (f'<clipPath id="aw"><rect x="{x}" y="{top}" width="{w}" height="{ch}" rx="12"/></clipPath>'
            '<filter id="ash" x="-10%" y="-10%" width="120%" height="130%"><feDropShadow dx="0" dy="12" stdDeviation="14" flood-color="#111111" flood-opacity=".09"/></filter>')
    write("automate.svg", svg(W, H, L("自动化怎么跑：每个工作日 9 点，后端自己开一个对话，读 Slack 消息、写成站会笔记，发到 #standup 频道",
                                      "How an automation runs: at 9:00 every weekday the backend starts a conversation by itself, reads Slack, writes a standup note and posts it to #standup"),
                              "\n".join(body), defs), lang)


# ---------- safety：直接在电脑上跑（靠约定）和放进 Docker（靠隔离） ----------
def safety(lang="zh"):
    L = pick(lang)
    W, H = 960, 340
    panels = L([("直接在电脑上跑", APRICOT, "它能碰到的范围", "靠约定：只让它在新建的空文件夹里干活"),
                ("放进 Docker 里跑", SAGE, "Docker", "靠隔离：它只看得到你挂进去的那个文件夹")],
               [("Straight on your computer", APRICOT, "what it can reach", "By request: you tell it to stay in one empty folder"),
                ("Inside Docker", SAGE, "Docker", "By isolation: it only sees the folder you mount")])
    folders = L(["文档", "照片", "桌面", "water（空的）"], ["Documents", "Photos", "Desktop", "water (empty)"])
    pw, gap, y0, ph = 430, 20, 28, 262
    body, defs = [], []
    for p, (title, col, reach, rule) in enumerate(panels):
        x = (W - pw * 2 - gap) / 2 + p * (pw + gap)
        defs.append(f'<clipPath id="s{p}"><rect x="{x}" y="{y0}" width="{pw}" height="{ph}" rx="14"/></clipPath>')
        body.append(rect(x, y0, pw, ph, CARD, 14, LINE))
        body.append(f'<g clip-path="url(#s{p})">{rect(x, y0, pw, 46, col)}</g>')
        body.append(t(x + 18, y0 + 29, fits(title, 17, pw - 36, 700), 17, INK, 700))
        cx0, cy0, cw, chh = x + 20, y0 + 62, pw - 40, 150
        body.append(rect(cx0, cy0, cw, chh, PAPER, 10, LINE))
        body.append(t(cx0 + 12, cy0 + 17, L("你的电脑", "your computer"), 11.5, MUTED, font=MONO))
        centers = [cx0 + 14 + (cw - 28) * (i + 0.5) / 4 for i in range(4)]
        fy = cy0 + 56
        if p == 0:
            bx, bw = cx0 + 8, cw - 16
        else:
            bx, bw = centers[3] - 47, 94
        by, bh = cy0 + 26, chh - 34
        stroke = (f'stroke="{INK}" stroke-width="1.6" stroke-dasharray="5 4"' if p == 0 else f'stroke="{INK}" stroke-width="2"')
        march = ('<animate attributeName="stroke-dashoffset" dur="1.2s" repeatCount="indefinite" values="0;-9"/>' if p == 0 else "")
        body.append(f'<rect x="{bx}" y="{by}" width="{bw}" height="{bh}" rx="8" fill="none" {stroke}>{march}</rect>')
        body.append(t(bx + 8, by + 15, fits(reach, 11, bw - 12, 600, MONO), 11, INK, 600, MONO))
        for i, (fx, name) in enumerate(zip(centers, folders)):
            water = i == 3
            op = "" if water or p == 0 else ' opacity=".35"'
            fill = SKY if water else "#EFEDE9"
            body.append(f'<g{op}>')
            body.append(rect(fx - 32, fy, 26, 12, fill, 3, "#C9C6C0"))
            body.append(rect(fx - 32, fy + 7, 64, 42, fill, 4, "#C9C6C0"))
            body.append(t(fx, fy + 70, fits(name, 12, (cw - 28) / 4 - 4, 600 if water else 400), 12, INK, 600 if water else 400, anchor="middle"))
            body.append("</g>")
            if water:
                body.append(f'<circle cx="{fx}" cy="{fy + 30}" r="4.5" fill="{INK}">'
                            f'<animateMotion dur="5s" repeatCount="indefinite" path="M0,0 L16,-6 L6,8 L-14,2 Z"/></circle>')
        body.append(t(x + 18, y0 + ph - 22, fits(rule, 13, pw - 36), 13, INK))
    body.append(t(W / 2, H - 22, fits(L("新手入门用左边的做法。想彻底关住它，用右边的 Docker，见完整教程第 5 步。",
                                        "The beginner lessons use the left setup. To fully fence it in, use Docker (guide step 5)."), 14, W - 40),
                  14, MUTED, anchor="middle"))
    write("safety.svg", svg(W, H, L("安全的两种做法：直接在电脑上跑时，它能碰到你账号能碰到的所有文件，所以只让它在空文件夹里干活；放进 Docker 里，它只看得到挂进去的那个文件夹",
                                    "Two ways to stay safe: run straight on your computer and it can reach every file your account can, so you keep it to one empty folder; run it in Docker and it only sees the folder you mount"),
                            "\n".join(body), "".join(defs)), lang)


# ---------- doors：README 顶部的三扇门（没写过代码 / 会写代码 / 想让它自己干活），每种语言三张，亮色暗色各一张 ----------
# 细线框、直角、没有阴影；顶上一条柔和的色条。唯一的动效：箭头隔几秒往前挪 4px；系统开了「减少动态效果」就不动。
# 卡片宽度按量出来的字宽算，同一种语言三张一样宽。
DOORS = {
    "en": [["Never written code", "3 lessons · 30 minutes"], ["You write code", "The 9-step guide"], ["Let it work on its own", "27 prebuilt automations"]],
    "zh": [["没写过代码", "新手入门 3 课 · 30 分钟"], ["会写代码", "9 步完整教程"], ["想让它自己干活", "27 个现成自动化"]],
    "ja": [["コードは初めて", "入門 3 レッスン · 30 分"], ["コードを書く人", "9 ステップの完全ガイド（英語）"], ["自動で働かせる", "既製の自動化 27 個（英語）"]],
    "ko": [["코딩은 처음", "입문 3강 · 30분"], ["코드를 쓴다면", "9단계 전체 가이드(영어)"], ["알아서 일하게", "준비된 자동화 27개(영어)"]],
    "es": [["Nunca he programado", "3 lecciones · 30 minutos"], ["Sé programar", "Guía de 9 pasos (inglés)"], ["Que trabaje solo", "27 automatizaciones listas (inglés)"]],
    "pt": [["Nunca programei", "3 lições · 30 minutos"], ["Sei programar", "Guia de 9 passos (inglês)"], ["Deixe trabalhar sozinho", "27 automações prontas (inglês)"]],
    "fr": [["Jamais codé ?", "3 leçons · 30 minutes"], ["Vous codez", "Guide en 9 étapes (anglais)"], ["Le laisser travailler seul", "27 automatisations prêtes (anglais)"]],
    "de": [["Noch nie programmiert", "3 Lektionen · 30 Minuten"], ["Du programmierst", "9-Schritte-Anleitung (Englisch)"], ["Allein arbeiten lassen", "27 fertige Automationen (Englisch)"]],
    "ru": [["Без опыта в коде", "3 урока · 30 минут"], ["Пишете код", "Гайд из 9 шагов (англ.)"], ["Пусть работает сам", "27 готовых автоматизаций (англ.)"]],
    "ar": [["لم تكتب كودًا من قبل", "3 دروس · 30 دقيقة"], ["تكتب الكود", "دليل من 9 خطوات (بالإنجليزية)"], ["دعه يعمل وحده", "27 أتمتة جاهزة (بالإنجليزية)"]],
}
DOOR_FONT = "-apple-system,BlinkMacSystemFont,'Segoe UI','PingFang SC','Hiragino Sans','Apple SD Gothic Neo','Noto Sans','Noto Sans Arabic','Geeza Pro',sans-serif"
DOOR_BARS = [SAGE, APRICOT, LILAC]
DOOR_THEMES = {"light": ("#FFFFFF", "#E2E0DC", "#1F1E1B", "#6D6B67"), "dark": ("#201F1A", "#3A3833", "#F3F0EA", "#A39E93")}


def doors(lang):
    rtl = lang == "ar"
    W = max(200, *(max(tw(a, 18, 600, DOOR_FONT) + 66, tw(b, 13, 400, DOOR_FONT) + 40) for a, b in DOORS[lang]))
    W = int(W + 0.999)
    H = 92
    out = OUT / "doors"
    out.mkdir(exist_ok=True)
    tx = 18 if not rtl else W - 18
    ax = W - 18 - 16 if not rtl else 18
    path = "M4 12h16m-6-6 6 6-6 6" if not rtl else "M20 12H4m6-6-6 6 6 6"
    move = 4 if not rtl else -4
    d = ' direction="rtl"' if rtl else ""
    for i, (title, sub) in enumerate(DOORS[lang]):
        for theme, (bg, line, ink, muted) in DOOR_THEMES.items():
            content = (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" width="{W}" height="{H}">'
                       f'<style>.a{{animation:a 3.6s ease-in-out {i * 0.35:.2f}s infinite}}@keyframes a{{0%,60%,100%{{transform:translateX(0)}}75%{{transform:translateX({move}px)}}}}'
                       f'@media (prefers-reduced-motion:reduce){{.a{{animation:none}}}}</style>'
                       f'<rect x=".5" y=".5" width="{W - 1}" height="{H - 1}" fill="{bg}" stroke="{line}"/>'
                       f'<rect width="{W}" height="5" fill="{DOOR_BARS[i]}"/>'
                       f'<text x="{tx}" y="44" font-family="{DOOR_FONT}" font-size="18" font-weight="600" fill="{ink}"{d}>{escape(title)}</text>'
                       f'<text x="{tx}" y="68" font-family="{DOOR_FONT}" font-size="13" fill="{muted}"{d}>{escape(sub)}</text>'
                       f'<g class="a"><path transform="translate({ax} 30) scale({16 / 24})" d="{path}" fill="none" stroke="{ink}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="miter"/></g>'
                       '</svg>\n')
            (out / f"{lang}-{i + 1}{'' if theme == 'light' else '-dark'}.svg").write_text(content, encoding="utf-8")
    print(f"✓ assets/doors/{lang}-1..3 (+ dark)  {W}×{H}")


def build():
    for lang in ("zh", "en"):
        hero(lang)
        how(lang)
        automate(lang)
        safety(lang)
        social(lang)
    for lang in DOORS:
        doors(lang)


if __name__ == "__main__":
    if "--need" in sys.argv:
        # 只列出还没量过的文字（给 tools/measure-text.mjs 用），不写文件
        write = lambda *a, **k: None
        globals()["write"] = write
        OUT = Path("/dev/null")
        for lang in ("zh", "en"):
            hero(lang)
            how(lang)
            automate(lang)
            safety(lang)
        for lang in DOORS:
            W_ = [tw(a, 18, 600, DOOR_FONT) + tw(b, 13, 400, DOOR_FONT) for a, b in DOORS[lang]]
        print(json.dumps(NEED, ensure_ascii=False))
    else:
        build()
        if TOO_WIDE:
            raise SystemExit("\n".join(TOO_WIDE) + "\n改短这些文字再跑一次")
        if NEED:
            print(f"⚠ 还有 {len(NEED)} 段文字没量过字宽（按估算画的）：跑 npm run assets")
