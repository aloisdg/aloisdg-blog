---
title: My favorite Markdown link format
date: 2022-07-28
description: or why [a] rocks! 
tags:
  - markdown
  - commonmark
---

In Markdown, there are different way to use links. So the goal is to output:

> You can find our website at [histographistes.com]

Links can be inline, but we can't specify a text:

```markdown
You can find our website at <https://histographistes.com>.
```

Links can be inline with a special text:

```markdown
You can find our website at [histographistes.com](https://histographistes.com).
```

Or they can be placed at the bottom of the text as references:

```markdown
You can find our website at  [histographistes.com][id].

[id]: https://histographistes.com
```

Or they can be placed without id:

```markdown
You can find our website at  [histographistes.com].

[histographistes.com]: https://histographistes.com
```

To sumarize my thinking with a table:

|            | `<a>`  | `[a](b)` | `[a][b]` | `[a]` |
|:----------|------|--------|--------|-----|
| conciseness      |  ✔️  | ❌ | ❌ | ✔️ |
| lisibility |  ❌  | ❌ | ❌ | ✔️ |
| title      |  ❌  | ✔️ | ✔️ | ✔️ |

So my clear favorite is to go with `[a]`.

Example from [FOSS Acronyms]:

```markdown
Keep in mind that the [readme.md] is generated. It is useless to edit it directly.
If you want to add or update an acronym, edit the correct file in the [data] folder (e.g. [acronyms.json]).
```

Source:

* [Markdown Tutorial - Links]
* [Link reference definitions]

[Markdown Tutorial - Links]: https://commonmark.org/help/tutorial/07-links.html
[Link reference definitions]: https://github.github.com/gfm/#link-reference-definitions
[histographistes.com]: https://histographistes.com
[FOSS acronyms]: https://github.com/d-edge/foss-acronyms/blob/main/.github/pull_request_template.md
