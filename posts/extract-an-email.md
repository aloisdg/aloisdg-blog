---
title: Extract an email
date: 2022-09-12
description: we need more builtins
tags:
  - dotnet
  - regex
  - email
---

Let's say that we have a raw input string. Each input contains zero or one email address. We want to extract this email if some. How to achieve that? When it come to raw text manipulation, my first reflex is to rely on regular expression.

Personally, I would say that you should just make sure there is an `@` symbol in there:

```
<?(\S+@\S+\w)>?
```

Note that this regex is a quick heuristic, but a lot of valid email are not supported. There's many regexes you could use of varying correctness, but I guess most of these leave out valid email addresses, or let invalid ones through.

Thanksfully in dotnet we have a builtin to avoid such shenaningans: [`MailAddress.TryCreate`](https://docs.microsoft.com/en-us/dotnet/api/system.net.mail.mailaddress.trycreate?view=net-6.0).

```csharp
public static void Main()
{
	var source = @"Jane Doe <j.doe@example.com>";
	var success = System.Net.Mail.MailAddress.TryCreate(source, out var mailAdress);
	(success ? mailAdress.Address : null).Dump();
}
```

By the way, `MailAddress.TryCreate` uses a parser underneath. You can check on [referencesource.microsoft.com](https://referencesource.microsoft.com/#System/net/System/Net/mail/MailAddressParser.cs). The comment speaks for itself:

```
This class is responsible for parsing E-mail addresses as described in RFC 2822.

Ideally, addresses are formatted as ("Display name" <username@domain>), but we still try to read several
other formats, including common invalid formats like (Display name username@domain).
 
To make the detection of invalid address formats simpler, all address parsing is done in reverse order, 
including lists.  This way we know that the domain must be first, then the local-part, and then whatever 
remains must be the display-name.
```

If it is good enough from the dotnet community it is enough for my product and if it failed I can build around or submit a PR.

source:

- [Extract email adresses from text file](https://stackoverflow.com/questions/21936458/extract-email-adresses-from-text-file)
- [Validating an email string in .net using EmailAddressAttribute, but not on an attribute](https://stackoverflow.com/questions/36947823/validating-an-email-string-in-net-using-emailaddressattribute-but-not-on-an-at)
- [C# code to validate email address](https://stackoverflow.com/questions/1365407/c-sharp-code-to-validate-email-address)
