---
title: Handle preflight request with IIS
date: 2022-09-06
description: or a list of try and missed to configure CORS on IIS
tags:
  - server
  - cors
---

I would like to support the CORS (Cross-Origin Resource Sharing) protocol to handle the preflight request with IIS.

My first failed attempt was to edit the `httpProtocol`:

```xml
<system.webServer>
    <httpProtocol>
      <customHeaders>
        <add name="Access-Control-Allow-Origin" value="*" />
        <add name="Access-Control-Allow-Methods" value="GET, PUT, POST, DELETE, HEAD, OPTIONS" />
        <add name="Access-Control-Allow-Headers" value="Origin, X-Requested-With, Content-Type, Accept" />
      </customHeaders>
    </httpProtocol>
</system.webServer>

```

source: [How to support HTTP OPTIONS verb in ASP.NET MVC/WebAPI application](https://stackoverflow.com/questions/19095777/how-to-support-http-options-verb-in-asp-net-mvc-webapi-application)

Nope didn't work for me. Let's try something else (spoiler it will failed again).

Start by adding to your modules element the attribute `runAllManagedModulesForAllRequests="true"`:

```xml
<modules runAllManagedModulesForAllRequests="true">
    <remove name="WebDavModule" />
</modules>
```

Then modify your handlers like this:

```xml
<handlers>
   <remove name="ExtensionlessUrlHandler-ISAPI-4.0_32bit" />
   <remove name="ExtensionlessUrlHandler-ISAPI-4.0_64bit" />
   <remove name="ExtensionlessUrlHandler-Integrated-4.0" />
   <remove name="WebDav" />
   <remove name="OPTIONSVerbHandler" />
   <add name="ExtensionlessUrlHandler-ISAPI-4.0_32bit" path="*." verb="GET,HEAD,POST,DEBUG,PUT,DELETE,PATCH,OPTIONS" modules="IsapiModule" scriptProcessor="%windir%\Microsoft.NET\Framework\v4.0.30319\aspnet_isapi.dll" preCondition="classicMode,runtimeVersionv4.0,bitness32" responseBufferLimit="0" />
   <add name="ExtensionlessUrlHandler-ISAPI-4.0_64bit" path="*." verb="GET,HEAD,POST,DEBUG,PUT,DELETE,PATCH,OPTIONS" modules="IsapiModule" scriptProcessor="%windir%\Microsoft.NET\Framework64\v4.0.30319\aspnet_isapi.dll" preCondition="classicMode,runtimeVersionv4.0,bitness64" responseBufferLimit="0" />
   <add name="ExtensionlessUrlHandler-Integrated-4.0" path="*." verb="GET,HEAD,POST,DEBUG,PUT,DELETE,PATCH,OPTIONS" type="System.Web.Handlers.TransferRequestHandler" preCondition="integratedMode,runtimeVersionv4.0" />
</handlers>
```

source: [IIS hijacks CORS Preflight OPTIONS request](https://stackoverflow.com/questions/22495240/iis-hijacks-cors-preflight-options-request)

One more? Still a nope but here it goes for posterity

```xml
<handlers>
    <remove name="OPTIONSVerbHandler" />
    <add name="OPTIONSVerbHandler" path="*" verb="OPTIONS" modules="IsapiModule" scriptProcessor="C:\Windows\System32\inetsrv\asp.dll" resourceType="Unspecified" requireAccess="None" />
</handlers>
``` 

What works for me is the Microsoft [CORS Module](https://docs.microsoft.com/en-us/iis/extensions/cors-module/cors-module-configuration-reference).

> The Microsoft IIS CORS Module is an extension that enables web sites to support the CORS(Cross-Origin Resource Sharing) protocol.

I used it like this:

```xml
<system.webServer>
    <cors enabled="true">
      <add origin="https://localhost:3000" allowCredentials="true">
        <allowMethods>
            <add method="GET" />
            <add method="HEAD" />
            <add method="POST" />
            <add method="PUT" /> 
            <add method="DELETE" />         
            <add method="OPTIONS" /> 
        </allowMethods>
        <allowHeaders>
            <add header="Content-Type" /> 
            <add header="Accept" /> 
            <add header="Origin" /> 
            <add header="X-Requested-With" /> 
        </allowHeaders>
      </add>
    </cors>
  </system.webServer>
```
source: [How to authorize CORS preflight request on IIS with Windows Authentication](https://stackoverflow.com/questions/49450854/how-to-authorize-cors-preflight-request-on-iis-with-windows-authentication)
