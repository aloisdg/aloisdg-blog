---
title: Find files with locate
date: 2022-10-11
description: or an alternative to find
tags:
  - linux
  - shell
  - bash
---

Whenever I am looking for a file my first reflex was to use the [`find`](https://www.mankier.com/1/find) command. After all, it was made to do just that: search for files in a directory hierarchy.

```bash
find . -name "*rib*pdf"
```

Confession time! I cannot remember how `find` work without checking the `man` or `tldr`. To me, `find` is a `tar`...

[![tar](https://imgs.xkcd.com/comics/tar.png)](https://xkcd.com/1168/)

To my `find` issue, I found a solution: `locate`.

```bash
locate "*rib*pdf"
```

My current distribution already had it. If yours do not, you can search for the package `mlocate`.

I am aware of [`fd`](https://github.com/sharkdp/fd), but I did not try it yet. It mays be even better.

source:
- [How can I recursively find all files in current and subfolders based on wildcard matching?](https://stackoverflow.com/questions/5905054/how-can-i-recursively-find-all-files-in-current-and-subfolders-based-on-wildcard)
- [Linux find file names with given string recursively](https://stackoverflow.com/questions/13131048/linux-find-file-names-with-given-string-recursively)
- [The fastest way to find files by filename — mlocate (locate commands)](https://thucnc.medium.com/the-fastest-way-to-find-files-by-filename-mlocate-locate-commands-55bf40b297ab)
