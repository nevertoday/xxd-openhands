#!/usr/bin/env python3
"""生成网站分享大图（og:image，1280×640）的 SVG：assets/social.svg（中文）和 assets/social-en.svg（英文）。

用法：python3 tools/build_assets.py，然后按 docs/MAINTAINING.md 用 Chrome 转成 public/og.png、public/og-en.png。
配色沿用 UI Kit：近白画布、纯白卡片、暖墨字、一组去掉灰调的浅色。
"""
from pathlib import Path
from xml.sax.saxutils import escape

OUT = Path(__file__).resolve().parent.parent / "assets"
OUT.mkdir(exist_ok=True)

PAPER = "#FAFAF8"
CARD = "#FFFFFF"
LINE = "#E9E7E4"
INK = "#2B2A27"
MUTED = "#6D6B67"
SAGE, APRICOT, LILAC, SKY = "#E2F1DC", "#FCEAD2", "#ECE6F8", "#E0ECF9"
TERM = "#1A1A1A"
TERM_FG = "#E6E4DC"
TERM_MUTED = "#8A867D"
OK = "#9CC59E"

SANS = "-apple-system,BlinkMacSystemFont,'PingFang SC','Hiragino Sans GB','Noto Sans CJK SC','Microsoft YaHei',sans-serif"
MONO = "ui-monospace,'SF Mono',Menlo,Consolas,'Liberation Mono',monospace"


def t(x, y, s, size=14, fill=INK, weight=400, font=SANS, anchor="start"):
    return (f'<text x="{x}" y="{y}" font-family="{font}" font-size="{size}" font-weight="{weight}" '
            f'fill="{fill}" text-anchor="{anchor}">{escape(s)}</text>')


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
    b.append(t(84, 512, L("新手入门 3 课 · 完整教程 9 步 · 现成自动化速查 · 中英双语", "3 beginner lessons · 9-step guide · prebuilt automations"), 20, MUTED))
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


if __name__ == "__main__":
    for lang in ("zh", "en"):
        social(lang)
