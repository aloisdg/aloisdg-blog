---
title: Alias your Git
date: 2021-05-23
description: my own set of Git aliases
tags:
  - git
  - shell
  - linux
  - windows
---

I use git mostly in command line. The main reason is to have error messages and an history of I entered when I do something wrong. It helps me a lot. Writing `git status` a dozen time per feature is cumbersome. Lets use aliases.

Back in the time I used to maintain my own list of aliases. In my old `.bashrc` you could find lines like:

```bash
# print git status
alias gits='git status'

# Pretty print git log
alias gitl='git log --graph --decorate --all'
```

Some times ago, I found a ready-to-use list I quite like. This list is the [Git Alias](https://github.com/gitalias/gitalias) project from the eponym organisation on GitHub. I will let the project introduce itself from its README:

Git Alias is a collection of git version control shortcuts, functions, and commands:

* Shortcuts such as `s` for `status`.
* Improvements such as `optimize` to do a prune and repack with recommended settings.
* Workflows such as `topic-start` to create a new topic branch for a new feature.
* Visualizations such as `graphviz` to show logs and charts using third-party tools.

You can install it in two commands:

```bash
curl https://raw.githubusercontent.com/GitAlias/gitalias/master/gitalias.txt -o ~/.gitalias 
git config --global include.path ~/.gitalias
```

Now make it your own!