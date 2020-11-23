# Alexandra Errors

## Common Error Structure

Common errors that occur due to fields being missing or malformed are a bit complicated to work with but gets easier over time. The following is an example of an error due to a malformed `password` field when registering a new user:

```json
{
    "code": 50035,
    "errors": {
        "_password": [
            {
                "message": "A password must contain at least one digit, one uppercase character and one lowercase character.",
                "code": "BAD_PASSWORD"
            },
            {
                "message": "Field must be a string.",
                "code": "INVALID_VALUE"
            }
        ]
    },
    "message": "Invalid Body"
}
```

As you can see, the errors are in an object with their assigned names and a leading `_`. Next, those errors are formatted using the common `message` and `code` properties with formatted messages for the developer and/or end user. The code is a unique code to indicate the issue in the field's value. In this example, we passed an integer instead of a string and recieved and `INVALID_VALUE` error. As an added bonus, there is also a `BAD_PASSWORD` error that indicates some issue with the password provided.

## Common Error Codes

`REQUIRED_FIELD`: A required field was missing and must be filled with a valid value.

`INVALID_VALUE`: The field contained a value that was either an incorrect type or non-conforming to the valid array of values allowed.

`BAD_PASSWORD`: The field contained a password that was insufficient and didn't meet our password guidelines.

`MIN_LENGTH`: The field provided a value that did not meet the minimum string length required.

`MAX_LENGTH`: The field provided a value that surpassed the maximum string length allowed.

## Other Errors

There are other errors available that are much simpler because they only contain `message` and `code`. In Helselia's current state, the `code` field is commonly set to `0` and this requires checking the `message`. We will change this in a later update.
