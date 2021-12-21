---
title: Run web-ext with Firefox Developer Edition
date: 2021-12-17
description: Run web-ext with Firefox Developer Edition under GNU/Linux
tags:
  - extension
  - browser
  - firefox
  - linux
---

To run your extension with a version of Firefox Desktop other than the default, like the Firefox Developer Edition, use the `--firefox` option to specify a full path to the binary file.

First let's find the path to our binary. Since we are using GNU/Linux, it is really easy:

    which firefox-developer-edition

And the path found is `/usr/bin/firefox-developer-edition`.

Now we can run

    web-ext run --firefox="/usr/bin/firefox-developer-edition"

And voilà.

[Using web-ext](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/#using-web-ext-section)
[which](https://unix.stackexchange.com/questions/19369/how-to-find-the-installation-path-for-a-software-under-linux)