---
title: Initial-Letter style for a Grid Layout
date: 2022-03-23
description: How to write an initial-Letter style for a grid layout
tags:
  - css
  - grid
  - programming
---

How could we achieve the following using CSS grid? This question was originaly asked on [Stack Overflow](https://stackoverflow.com/questions/71588209/how-would-i-achieve-the-following-using-css-grid?noredirect=1#comment126524204_71588209).

![screenshot demoing the expected output](https://i.stack.imgur.com/hf2DJ.png)

Here is my answer:

The HTML here is quite boring:

```html
<div>1</div>
<div>2</div>
<div>3</div>
<div>4</div>
<div>5</div>
<div>6</div>
<div>7</div>
<div>8</div>
<div>9</div>
<div>10</div>
<div>11</div>
<div>12</div>
```

but the CSS is where the fun is:

```css
body {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(5, 1fr);
  background: black;
}

div:first-child {
  grid-column: 1 / span 2;
  grid-row: 1 / span 2;
  background: red;
}

div {
  display: grid;
  place-items: center;
  font-size: 72px;
  aspect-ratio: 1;
  background: blue;
}
```
How it works:

 1. [Establish a block-level grid container](https://www.w3.org/TR/css3-grid-layout/#grid-containers).
 2. The [grid-template-columns](https://www.w3.org/TR/css3-grid-layout/#track-sizing) property sets the width of explicitly defined columns. In this case, the grid is instructed to create column of equals size, and repeat the process 5 times.
 3. The [aspect-ratio](https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio) property sets the height to be a square.
 4. The [gap](https://developer.mozilla.org/en-US/docs/Web/CSS/gap) property sets the gaps (gutters) between rows and columns. It is a shorthand for row-gap and column-gap. (It doesn't apply to the area between items and the container.)

[Try it Online!](https://jsbin.com/biteyarila/edit?html,css,output)

[Answer format inspired by](https://stackoverflow.com/questions/43124275/how-can-i-make-a-div-span-multiple-rows-and-columns-in-a-grid) [PaulCo's answer](https://stackoverflow.com/q/43124275/1248177).
