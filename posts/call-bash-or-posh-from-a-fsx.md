---
title: Call bash or posh from a fsx
date: 2021-05-23
description: introducing a snippet to call the native shell in .net50
tags:
  - dotnet
  - shell
  - bash
  - powershell
  - fsharp
  - script
---

I was wondering how to call from a .net50 fsx bash on linux and powershell from windows. Here we go:

Inspired by an article from [loune.net](https://loune.net/2017/06/running-shell-bash-commands-in-net-core/), here is how to call bash:

```fsharp
let buildStartBash (cmd : string) =
    let escapedArgs = cmd.Replace("\"", "\\\"")
    let startInfo = new ProcessStartInfo("/bin/bash", $"-c \"{escapedArgs}\"")
    startInfo.RedirectStandardOutput <- true
    startInfo.UseShellExecute <- false
    startInfo.CreateNoWindow <- true
    startInfo
```

I got the powershell logic from [Stack Overflow](https://stackoverflow.com/q/39141914/1248177):

```fsharp
let buildStartPosh cmd = 
    let startInfo = new ProcessStartInfo(@"C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe", cmd)
    startInfo.WorkingDirectory <- Environment.CurrentDirectory
    startInfo.RedirectStandardOutput <- true
    // startInfo.UseShellExecute <- false
    startInfo.CreateNoWindow <- true
    startInfo
```

Beside if you want to know if you are on windows or elsewhere, you can rely on:

```fsharp
let isWindows = RuntimeInformation.IsOSPlatform(OSPlatform.Windows)
```

Mac comes with bash so no worry on this side.

The complete snippet:

```fsharp
open System
open System.Diagnostics
open System.Runtime.InteropServices

let buildStartBash (cmd : string) =
    let escapedArgs = cmd.Replace("\"", "\\\"")
    let startInfo = new ProcessStartInfo("/bin/bash", $"-c \"{escapedArgs}\"")
    startInfo.RedirectStandardOutput <- true
    startInfo.UseShellExecute <- false
    startInfo.CreateNoWindow <- true
    startInfo

let buildStartPosh cmd = 
    let startInfo = new ProcessStartInfo(@"C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe", cmd)
    startInfo.WorkingDirectory <- Environment.CurrentDirectory
    startInfo.RedirectStandardOutput <- true
    // startInfo.UseShellExecute <- false
    startInfo.CreateNoWindow <- true
    startInfo

let startProcess (startInfo: ProcessStartInfo) :string =
    let diagnosticsProcess = new Process()
    diagnosticsProcess.StartInfo <- startInfo
    diagnosticsProcess.Start() |> ignore
    let result = diagnosticsProcess.StandardOutput.ReadToEnd()
    diagnosticsProcess.WaitForExit()
    result

let isWindows = RuntimeInformation.IsOSPlatform(OSPlatform.Windows)

let shrap cmd =
    cmd
    |> (if isWindows then buildStartPosh else buildStartBash)
    |> startProcess
    |> printfn "%s"
```