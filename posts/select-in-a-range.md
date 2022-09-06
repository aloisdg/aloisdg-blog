---
title: Select in a range
date: 2022-06-07
description: Do you know how to select elements from a to b? Let's see how.
tags:
  - webdesign
  - css
  - scraping
---

Recently I was scraping a thousand rows table, in this table I was only looking for a few lines. Of course I could do it easily with the scraping language, but I like to have a visual in the browser (and I am curious). The following solution is more in the "clever" side. For a [KISS](https://github.com/d-edge/foss-acronyms) solution, I think that CSS may not be the best way to do that. That's said, let's go.

Our goal is to set `pink` as `background-color` of a range going from the third column to the seventh (i.e. start = 3 and end = 7).

![expected]

We will start with a [MCVE](https://github.com/d-edge/foss-acronyms), the HTML will be `ol>li*9>{test}`:

```html
<ol>
  <li>test</li>
  <li>test</li>
  <li>test</li>
  <li>test</li>
  <li>test</li>
  <li>test</li>
  <li>test</li>
  <li>test</li>
  <li>test</li>
</ol>
```
To achieve our goal will use `:nth-child()`:

> The `:nth-child()` CSS pseudo-class matches elements based on their position among a group of siblings.

In fact, we will use it twice:

```css
li:nth-child(n+3):nth-child(-n+7) {
    background-color: pink;
}
```

* `:nth-child(n+3)`: Represents the third and all following elements: 3 (0+3), 4 (1+3), 5 (2+3), etc. (i.e. `[3..9]`)
* `:nth-child(-n+7)`: Represents the first seventh elements. 7 (-0+7), 6 (-1+7), 5 (-2+7), etc. (i.e. `[7..1]`)

and

* `:nth-child(n+3):nth-child(-n+7)`: Represents the intersection of both (i.e `[3..7]`)


```css
li:nth-child(n+start):nth-child(-n+end) {
    background-color: pink;
}
```

[Try it online!](https://jsfiddle.net/9hp3mxuy/)

source:
- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child)
- [CSS Selector for nth range?](https://stackoverflow.com/questions/15639247/css-selector-for-nth-range)

[expected]: data:image/png;base64,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