---
title: Pet Project Interview
date: 2021-06-19
description: or an alternative to a classical technical interview
tags:
  - interview
  - career
  - programming
---

Most companies who looking to hire a software developer have an hiring process. Most of the time this hiring process has a technical interview. The goal of a technical interview is to show that a candidate did not lie in they resume when they said that they know how to write in JavaScript and that they actually did read *Clean Code*. It is a place to solve problems, write tests, and to showoff a mastering of the `reduce` function. It is most importantly a lot of time spend for a company a candidate may not even work with at the end.

Most of the time it will be in one of those three forms:

* Pair-Programming exercises,
* Recorded clocked exercises,
* Take-home coding exercises.

Some candidates hate this kind of interview<sup>1</sup>.
I won't try to compare each of them right now. I want to purpose the idea of another way to evaluate the technical level of a candidate.

<sup>1</sup> [I will not do your tech interview](https://medium.com/@ikeellis/i-will-not-do-your-tech-interview-80ba19c55883), [The Technical Interview Is Dead (And No One Should Mourn)](https://techcrunch.com/2013/06/22/the-technical-interview-is-dead/), [I hate interviews with technical grilling - A note to all managers/hiring personnel](https://www.reddit.com/r/sysadmin/comments/ipmtg0/i_hate_interviews_with_technical_grilling_a_note/), [The software developer job interview doesn’t work](https://sockpuppet.org/blog/2015/03/06/the-hiring-post/)

## The alternative

Instead of doing the classical technical interview chosen by the company, I think it would be nice to submit one or more personnal projects. Flexibility is key. The candidate should be able to make the choice. A company could say:

> "We have three coding tests we want you to do. It will assess your level in C#, React and SQL. If you want you can replace any of them by one or more projects you did using one of the given technology.

An answer from the candidate could be:

> "Sure! Here is a React library I wrote and a C# Pull Request I done to the dotnet compiler. You can send me the SQL challenge by mail."

Like that you just save 66% of the developer time and with a quicker technical interview, you may interview more candidates.

Most creative jobs from architect to designer use portfolio. Generalize this idea in our field.

## A quick comparison

|   | Classical<br/>Technical<br/>Interview | Pet<br/>Project<br/>Interview |
|---|:-:|:-:|
| Written code is mostly useful<sup>1</sup>| ❌ | <img alt="✔️" src="https://github.githubassets.com/images/icons/emoji/unicode/2714.png" class="emoji"> |
| Candidate can't underperformed<sup>2</sup>| ❌ | <img alt="✔️" src="https://github.githubassets.com/images/icons/emoji/unicode/2714.png" class="emoji"> |
| Candidate can have unlimited time<sup>3</sup> | ❌ | <img alt="✔️" src="https://github.githubassets.com/images/icons/emoji/unicode/2714.png" class="emoji"> |
| Candidate can't cheat<sup>4</sup> | ❌ | ❌ |
| Candidate is interested by the subject<sup>5</sup> | ❌ | <img alt="✔️" src="https://github.githubassets.com/images/icons/emoji/unicode/2714.png" class="emoji"> |
| Candidate doesn't have to spend time just for you<sup>6</sup> | ❌ | <img alt="✔️" src="https://github.githubassets.com/images/icons/emoji/unicode/2714.png" class="emoji"> |
| Company can assess devops knowledge<sup>7</sup> | ❌ | <img alt="✔️" src="https://github.githubassets.com/images/icons/emoji/unicode/2714.png" class="emoji"> |
| Company can assess documentation writing skills<sup>8</sup> | ❌ | <img alt="✔️" src="https://github.githubassets.com/images/icons/emoji/unicode/2714.png" class="emoji"> |
| Company can mesure soft skills<sup>9</sup> | ❌ | <img alt="✔️" src="https://github.githubassets.com/images/icons/emoji/unicode/2714.png" class="emoji"> |
| Interview doesn't depend on any external services<sup>10</sup> | ❌ | <img alt="✔️" src="https://github.githubassets.com/images/icons/emoji/unicode/2714.png" class="emoji"> |
| Interview scales with level by itself<sup>11</sup> | ❌ | <img alt="✔️" src="https://github.githubassets.com/images/icons/emoji/unicode/2714.png" class="emoji"> |

<sup>1</sup> Interview code is nixed. At worst, pet project have learning purpose.

<sup>2</sup> No stress related to getting the job. The project was done earlier.

<sup>3</sup> No stress related to a running time. The project was done earlier.

<sup>4</sup> In both cases a candidate can submit a code made with or by a acquaintance. Harder to falsify if the project is well-maintained though. Note that pair-programming exercise is the harder to cheat to.

<sup>5</sup> Invert a binary tree or matching colorful shoes is not something most devs I know does for fun.

<sup>6</sup> Most candidate I met lock a whole evening or even an afternoon to do the test. Sometimes I personally abort an interview because I don't necessary have the time to walk one more graph.

<sup>7</sup> Most companies I know doesn't check if a candidate use git, a ci/cd pipeline, code coverage tool, *etc.* Now a candidate can show it!

<sup>8</sup> Most companies I know doesn't check writing skills. Documentation skills are scarced. If both public and private documentation tends to be limited, a short one is better than nothing. The pet project may be documented, it is quite rare that coding test is.

<sup>9</sup> This step is to assert technical skill, not soft ones. If the candidate's project has some traction, you may see how the candidate deals with issues, answers to question, reviews pull requests, etc. This can be great to look for.

<sup>10</sup> Most companies I know pay a service like [Codility](https://www.codility.com/), [Codingame](https://www.codingame.com/start), [Hackerrank](https://www.hackerrank.com/) or [Leetcode](https://leetcode.com/) to handle the code assement.

<sup>11</sup> Companies don't have to multiply tests as much for each level or each technology. We can expect from a senior dev to have more in quality/quantity to show than a junior.

## Questions

### What is the worst case?

No one takes the option to show a pet project and you are still doing interview the old way. The worst case is the company current case.

### Is a small portfolio a red flag?

A company should not need to see thousands of LoC to have an idea of a developer level. The candidate just need a project to showcase what a code exercise of one to three hours would reveal. A diversified portfolio is better, but a short one doesn't mean a bad one. A small portfolio is not a red flag.

### Does it encourage work outside of worktime?

A candidate can create a showoff project just for the case. They save an among of time proportional to the number of companies who will accept to judge them on it instead of using their off time to write a fizzbuzz. On the long run, the candidate don't have to work as much on they free time.

### Will it favor more FOSS developers?

Maybe, but they tend to [write better code anyway](https://web.archive.org/web/20160312052854/http://www.coverity.com/press-releases/coverity-scan-report-finds-open-source-software-quality-outpaces-proprietary-code-for-the-first-time/). If a candidate doesn't have a pet project to show, it say nothing about their real level though. They will just choose the classical path and this is fine.

## Addendum

While searching informations for this article. I found [The Terrible Technical Interview](https://techcrunch.com/2015/03/21/the-terrible-technical-interview/) which introduce mainly the same idea as I. Good article. Read it too!
