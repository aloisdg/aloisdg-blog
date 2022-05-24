---
title: Install font in Linux
date: 2022-05-24
description: Installing fonts is an easy and quick process. Let's see how.
tags:
  - linux
---

You can create a folder named `.fonts` in your home and move your ttf here,
but it's better to drop them on `~/.local/share/fonts` since `.fonts` is deprecated.
Also, you may want to drop them on `/usr/share/fonts` if you want them to be available to all users.

To confirm the availibility of your font, just write `fc-list "fontName"` where `fontName`is the font's name.

[archwiki](https://wiki.archlinux.org/title/Font_configuration#Font_paths) and [/r/linux](https://www.reddit.com/r/linuxquestions/comments/iw1hgj/how_to_easily_install_fonts_on_manjaro/)
