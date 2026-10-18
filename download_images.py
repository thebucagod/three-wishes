#!/usr/bin/env python3
"""Скачивает все картинки cdn.poehali.dev, упомянутые в index.html и script.js,
в папку img/ и заменяет ссылки на локальные. Запуск: python download_images.py"""
import re, os, urllib.request, hashlib

FILES = ["index.html", "script.js", "style.css"]
os.makedirs("img", exist_ok=True)
pat = re.compile(r"https://cdn\.poehali\.dev/[^\s\"')]+\.(?:jpg|jpeg|png|webp|gif|svg)", re.I)

for f in FILES:
    if not os.path.exists(f):
        continue
    text = open(f, encoding="utf-8").read()
    for url in sorted(set(pat.findall(text))):
        name = os.path.basename(url.split("?")[0])
        name = hashlib.md5(url.encode()).hexdigest()[:8] + "-" + name
        path = os.path.join("img", name)
        try:
            req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
            with urllib.request.urlopen(req, timeout=30) as r, open(path, "wb") as out:
                out.write(r.read())
            text = text.replace(url, "img/" + name)
            print("OK  ", url, "->", path)
        except Exception as e:
            print("FAIL", url, e)
    open(f, "w", encoding="utf-8").write(text)
