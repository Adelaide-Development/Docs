[//]: # (TODO: Get a final name and domain and replace placeholder domains.)

[//]: # (To documentation maintainers)
[//]: # (Lint all Markdown if possible)
[//]: # (Limit yourself from using inline html)
[//]: # (Thanks for maintaining the docs)

# Alexandra

**This is unfinished documentation. Help us finish these docs: [Create a new issue](https://github.com/Helselia/Docs/issues/new).**

**Don't forget to add the documentation label!**

## Rate Limiting

Rate Limiting is a deeply integrated part of the infrastructure behind Helselia and prevents attackers from sending multiple requests one after another to flood the API with spam data or messages. Rate Limiting is quite simple: only 2 requests can be made per second which totals out to be 120 requests per minutes. Going over this limit will send a rate limit error response, halt the connection, and temporarily disable access to the API.

The following is an example rate limit error response
```json
{
  "message": "You are being rate limited.",
  "code": 0
}
```

## Version Defines

Version defines are a way of explicitly defining a version of the API to use. Over time, to save space and reduce maintenance times, some API versions will be deprecated and later removed. Starting with API v1, you can explicitly define which API version you want to use. For example, you can define API `v<Version>` for a specific version or omit this entirely to use the latest stable version.

Here are examples of version defines in a request URI
```
Omit Version Defines:
https://api.helselia.dev/api/users/@me

Using Version Defines (Stable Version):
https://api.helselia.dev/api/v1/users/@me

Using Version Defines (Beta Version):
https://api.helselia.dev/api/v2/users/@me
```
