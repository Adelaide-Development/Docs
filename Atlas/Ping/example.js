const atlas = require("@cupertino-development/atlas");

atlas.ping(result => {
    console.log(result.msg) // Logs success / failure message
    console.log(result.nonce) // Logs nonce
})