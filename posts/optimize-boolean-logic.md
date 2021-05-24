---
title: Optimize boolean logic
date: 2021-05-23
description: a quick walk through the optimization of a boolean expression 
tags:
  - dotnet
  - boolean
  - csharp
---

I have a list of path I want to filter out:

    root/group1/subgroup1/project1
    root/group2/subgroup1/project2
    root/group2/subgroup2/project3
    root/group2/subgroup2/project4

I want to keep only paths matching a specific pattern and remove all paths matching another specific pattern. We have a `MatchWildcard` method returning `true` if it is a match or `false` if it isn't. Our paths are a plain `IEnumerable<string>`, so our main function will be:

```csharp
public static IEnumerable<string> FilterByPattern(string includePattern, string excludePattern, IEnumerable<string> paths)
    => paths.Where(path =>
    {
        let shouldKeep = string.IsNullOrEmpty(includePattern) ? MatchWildcard(includePattern, path) : true;
        if (!shouldKeep)
            return false;
        return string.IsNullOrEmpty(excludePattern) ? !MatchWildcard(excludePattern, path) : true;
    });
```

Our goal in this post is going to show how we can reduce and simplify the logic at work here.

One more thing. Let's talk about [predicate](https://docs.microsoft.com/en-us/dotnet/api/system.predicate-1?view=net-5.0). A predicate is a function returning a boolean. Since the predicate host most of the logic, let's start by spliting the Predicate from the filter to work on it.

```csharp
public static string PatternPredicate(string includePattern, string excludePattern, string path) =>
    {
        let shouldKeep = string.IsNullOrEmpty(includePattern) ? MatchWildcard(includePattern, path) : true;
        if (!shouldKeep)
            return false;
        return string.IsNullOrEmpty(excludePattern) ? !MatchWildcard(excludePattern, path) : true;
    });

public static IEnumerable<string> FilterByPattern(string includePattern, string excludePattern, IEnumerable<string> paths)
    => paths.Where(patternPredicate);
```

Alright now we will stop modifying `FilterByPattern` and focus on `PatternPredicate`. Since we are only dealing with boolean maybe there is a refactoring to do here. Let's switch from ternary to basic boolean logic.

```csharp
public static string PatternPredicate(string includePattern, string excludePattern, string path) =>
    {
        let shouldKeep = string.IsNullOrEmpty(includePattern) || MatchWildcard(includePattern, path);
        if (!shouldKeep)
            return false;
        return string.IsNullOrEmpty(excludePattern) || !MatchWildcard(excludePattern, path);
    });
```

Thats better! Now let's get rid of this `if/else` clause and some parenthesis also.

```csharp
public static string PatternPredicate(string includePattern, string excludePattern, string path) =>
    (string.IsNullOrEmpty(includePattern) || MatchWildcard(includePattern, path)) &&
    (string.IsNullOrEmpty(excludePattern) || !MatchWildcard(excludePattern, path));
```

So the complete snippet is now:

```csharp
public static string PatternPredicate(string includePattern, string excludePattern, string path) =>
    (string.IsNullOrEmpty(includePattern) || MatchWildcard(includePattern, path)) &&
    (string.IsNullOrEmpty(excludePattern) || !MatchWildcard(excludePattern, path));

public static IEnumerable<string> FilterByPattern(string includePattern, string excludePattern, IEnumerable<string> paths)
    => paths.Where(patternPredicate);
```

Better :)

Original post was in F# and can be read on [CodeReview](https://codereview.stackexchange.com/questions/261060/how-to-refactor-the-boolean-logic-of-this-f-function). The code comes from my open source project to clone GitLab organisation in one command line: Kamino! Check the [Pull Request](https://github.com/aloisdg/Kamino/pull/4/files).