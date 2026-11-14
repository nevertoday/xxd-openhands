#!/usr/bin/env python3
"""检查 10 份 README：导航里的 #锚点 都能跳到标题，引用的 assets/ 图片都存在。

锚点用 GitHub 自己的渲染接口（gh api /markdown）算，因为标题里的 emoji、零宽字符会让 id 和肉眼看到的不一样。
用法：npm run check:readme（要先 gh auth login）。
"""
import html
import re
import subprocess
import sys
import urllib.parse
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
bad = 0
for f in sorted(ROOT.glob("README*.md")):
    src = f.read_text(encoding="utf-8")
    problems = []
    for p in re.findall(r'(?:src|srcset)="(assets/[^"]+)"', src):
        if not (ROOT / p).exists():
            problems.append(f"缺图 {p}")
    hrefs = re.findall(r'(?:href="#|\]\(#)([^")]*)', src)
    for attempt in range(3):
        out = subprocess.run(["gh", "api", "-X", "POST", "/markdown", "-f", "mode=markdown", "-F", f"text=@{f}"],
                             capture_output=True, text=True).stdout
        ids = {urllib.parse.unquote(html.unescape(i)) for i in re.findall(r'id="user-content-([^"]*)"', out)}
        if ids:
            break
    if not ids:
        problems.append("GitHub 渲染失败（gh 登录了吗？）")
    else:
        problems += [f"锚点跳不到 #{h}" for h in hrefs if urllib.parse.unquote(h) not in ids]
    bad += len(problems)
    print(f"{'✗' if problems else '✓'} {f.name}  {len(hrefs)} 个锚点", *[f"\n    {p}" for p in problems])
sys.exit(1 if bad else 0)
