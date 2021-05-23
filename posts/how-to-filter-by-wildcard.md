---
title: Filter by wildcard
date: 2021-05-23
description: how to filter paths by wildcard
tags:
  - dotnet
  - csharp
  - fsharp
---

I have a list of path I want to filter out:

    root/group1/subgroup1/project1
    root/group2/subgroup1/project2
    root/group2/subgroup2/project3
    root/group2/subgroup2/project4

I want to keep only paths matching a specific pattern and remove all paths matching another specific pattern. To achieve the actual matching we will use [FileSystemName.MatchesSimpleExpression](https://docs.microsoft.com/en-us/dotnet/api/system.io.enumeration.filesystemname.matchessimpleexpression?view=net-5.0):

> Verifies if the given expression matches the given name. Supports the following wildcards: '*' and '?'. The backslash character '\' escapes.

```csharp
public static bool MatchesSimpleExpression (`ReadOnlySpan<char> expression, ReadOnlySpan<char> name, bool ignoreCase = true);
```

Small notable caveat: `MatchesSimpleExpression` play with `ReadOnlySpan<char>` instead of string. No problem, lets add a small converter:

```csharp
public static ReadOnlySpan<char> StringToSpan(string s)
    => new ReadOnlySpan<char>(s.ToCharArray());
```

Our paths are a plain `IEnumerable<string>`, so our main function will be:

```csharp
public static IEnumerable<string> FilterByPattern(string includePattern, string excludePattern, IEnumerable<string> paths)
    => paths.Where(patternPredicate);
```

Finally lets write the `patternPredicate`:

```csharp
public static string PatternPredicate(string includePattern, string excludePattern, string path) =>
    (string.IsNullOrEmpty(includePattern) || MatchWildcard(includePattern, path)) &&
    (string.IsNullOrEmpty(excludePattern) || !MatchWildcard(excludePattern, path));
```

So the complete snippet is now:

```csharp
public static ReadOnlySpan<char> StringToSpan(string s)
    => new ReadOnlySpan<char>(s.ToCharArray());

public static bool MatchWildcard(string pattern, string text)
    => FileSystemName.MatchesSimpleExpression(StringToSpan(pattern), StringToSpan(text));

public static string PatternPredicate(string includePattern, string excludePattern, string path) =>
    (string.IsNullOrEmpty(includePattern) || MatchWildcard(includePattern, path)) &&
    (string.IsNullOrEmpty(excludePattern) || !MatchWildcard(excludePattern, path));

public static IEnumerable<string> FilterByPattern(string includePattern, string excludePattern, IEnumerable<string> paths)
    => paths.Where(patternPredicate);
```

and here is the F# version:

```fsharp
let stringToSpan (s: string) =
    ReadOnlySpan<char>(s.ToCharArray())

let matchWildcard pattern text =
    FileSystemName.MatchesSimpleExpression(stringToSpan pattern, stringToSpan text)

let patternPredicate (includePattern: string Option) (excludePattern: string Option) path =
    (includePattern.IsNone || matchWildcard includePattern.Value path) &&
    (excludePattern.IsNone || not (matchWildcard excludePattern.Value path))  

let filterByPattern (includePattern: string Option) (excludePattern: string Option) (paths: string seq) :string seq =
    Seq.filter (fun path -> patternPredicate includePattern excludePattern path) paths
```

`FilterByPattern` was not written as is when I first wrote it. I posted a quick walkthrough: [Optimize boolean logic](#);

The code comes from my open source project to clone GitLab organisation in one command line: Kamino! Check the [Pull Request](https://github.com/aloisdg/Kamino/pull/4/files).