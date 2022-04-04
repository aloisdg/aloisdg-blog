---
title: Create Permanent Aliases in Linux
date: 2022-04-04
description: Creating aliases is an easy and quick process. Let's see how.
tags:
  - linux
---


To create and keep aliases between sessions, you must save them in your shell configuration profile file. For bash, the path is `~/.bashrc`.

The syntax is as follows:

```
$ alias shortName="really long name"
```
Here is an actual example:

```
$ alias ll=”ls -alF”
```
So open your configuration file and add:

```
# You can comment with # btw 
alias ll="ls -alF" # for example
alias ela="extLauncher" # another example
```

Save the file. The file will be automatically loaded in your next session. If you want to use the newly defined alias in the current session, use `source`:

```
$ source ~/.bashrc
```

source:
- [How to create an alias in Linux](https://www.redhat.com/sysadmin/how-create-alias-linux)
- [How to Create and Use Alias Command in Linux](https://www.tecmint.com/create-alias-in-linux/)
