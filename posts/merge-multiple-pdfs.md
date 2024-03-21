---
title: How to merge multiple pdfs on any OS
date: 2024-02-24
description: relying on pdf-merge for easy pdf merge
tags:
  - cli
  - tool
  - pdf
  - javascript
  - npm
---

## Getting started

- Install [nodejs](https://nodejs.org/en) to be able to run JavaScript command line tools
- Assert that it works as expected by checking that the command `npm -v` output something akin to X.Y.Z (e.g. 10.5.0)
- Install the tool `pdf-merger-js` with the following command `npm install -g pdf-merger-js`
- Assert that it works as expected by checking that the command `pdf-merge -v` output something akin to X.Y.Z (e.g. 5.1.1)
- Merge multiple PDF documents, or parts of them, to a new PDF document `pdf-merge --output ./merged.pdf ./input1.pdf ./input2.pdf`

## Going further

`pdf-merge` can merge specific pages or range of pages from a given pdf. For example, let's merge pages 1-2 from the first input with pages 2,3 and 5-7 from the second pdf document:

```
pdf-merge --output ./merged.pdf ./input1.pdf#1-2 ./input2.pdf#2,3,5-7
```

`pdf-merge` can merge pdf from urls. For example, let's get files and merge the first one with pages 2-3 from the second one:

```
pdf-merge --verbose --output ./sample.pdf Testfile.pdf https://pdfobject.com/pdf/sample.pdf https://upload.wikimedia.org/wikipedia/commons/1/13/Example.pdf#2-3
```

Learn more about this tool on [npm.js](https://www.npmjs.com/package/pdf-merger-js).
