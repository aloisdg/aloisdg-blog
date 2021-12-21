---
title: Run web-ext with Firefox Developer Edition
date: 2021-12-21
description: Run web-ext with Firefox Developer Edition under GNU/Linux
tags:
  - extension
  - browser
  - firefox
  - linux
---

`web-ext` is a command line tool designed to speed up various parts of the browser extension development process.

When I try `web-ext run -t firefox-desktop`, I got the following error:
```                                                                      
Running web extension from /home/aloisdg/Source/markdin/source

Error: not found: firefox
    at F (/usr/lib/node_modules/web-ext/node_modules/fx-runner/node_modules/which/which.js:63:19)
    at E (/usr/lib/node_modules/web-ext/node_modules/fx-runner/node_modules/which/which.js:72:29)
    at /usr/lib/node_modules/web-ext/node_modules/fx-runner/node_modules/which/which.js:81:16
    at /usr/lib/node_modules/web-ext/node_modules/fx-runner/node_modules/isexe/index.js:44:5
    at /usr/lib/node_modules/web-ext/node_modules/fx-runner/node_modules/isexe/access.js:8:5
    at FSReqCallback.oncomplete (node:fs:188:23)
```
This error says that web-ext can't find Firefox.

To run your extension with a version of Firefox Desktop other than the default, like the Firefox Developer Edition, use the `--firefox` option to specify a full path to the binary file.

First let's find the path to our binary. Since we are using GNU/Linux, it is really easy:

    which firefox-developer-edition

And the path found is `/usr/bin/firefox-developer-edition`.

Now we can run

    web-ext run --firefox="/usr/bin/firefox-developer-edition"

And voilà.

![screenshot](/static/img/web-ext-ff-de.png)


Also published on [unix.stackexchange.com](https://unix.stackexchange.com/questions/683321/how-to-run-web-ext-with-firefox-de-under-linux/683322#683322)

source: [Using web-ext](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/#using-web-ext-section), [which](https://unix.stackexchange.com/questions/19369/how-to-find-the-installation-path-for-a-software-under-linux)