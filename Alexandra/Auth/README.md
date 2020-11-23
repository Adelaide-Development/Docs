# Alexandra Auth

**Before we begin**, I'd like to bring attention to the [error structure](https://github.com/Helselia/Docs/tree/master/Alexandra/Errors) commonly used across Helselia. Please review it and become familiar with it.

## Registering A User

To register a user, send a `POST` request to `https://api.helselia.dev/auth/register`. The request must be in `application/json` and must have the fields: `username`, `email`, and `password`

You should recieve a response with a user object that also contains your token. The following is an example of such response.

```json
{
    "token": "NjczNjUwNjEyOTM5NzgzNzgyNA.MjgyNTM0MTk0Nzk.Q_FLzeW9wnYLx8UAEZTxK2On",
    "verified": false,
    "username": "SmileRoom",
    "system": false,
    "id": "6736506129397837824",
    "flags": 0,
    "email": "smile@ro.om",
    "discriminator": "4832",
    "bot": false,
    "avatar": ""
}
```

The main parts of this user object are the token, id, username, avatar, and discriminator which are most commonly used to indicate login status to the end user.

***Note:*** The following has not been implemented into Helselia as of yet.

~~Notice that the verified field is false by default. This is because the user has not yet verified their email and a further `GET` request should be made to `https://api.helselia.dev/auth/email/verify` with the `Authorization` header set to: `Bearer <token>`. This will trigger an email to be sent. However, you must be connected to the gateway prior to sending this request.~~

## Common Errors

Common errors that may arise are as follows:

### Username not available

```json
{
    "code": 0,
    "message": "This username has been used by too many other users."
}
```

### Invalid Username

```json
{
    "code": 0,
    "message": "Username is invalid."
}
```

## Invalid Usernames

Invalid usernames are usernames that may include characters or substrings that aren't allowed by Helselia. These rules are as follows:

* Usernames cannot be `everyone` or `here`
* Usernames cannot contain `@`, `#`, `:`, or  ```` ``` ````

There are also other non-fatal restrictions such as, zero-width space, zero-width join, zero-width non-join, zero-width left-to-right mark, and zero-width right-to-left mark are all stripped from the username.
Excessive leading, trailing, and internal space will also be stripped from the resulting username.

Non-Fatal restrictions do not raise an error but you must be ready to handle stripped usernames and such.
