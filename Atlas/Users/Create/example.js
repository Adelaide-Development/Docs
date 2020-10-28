const atlas = require("@adelaide-development/atlas")

atlas.user.create("username", "something@something.com", "password", "FALSE", function(result) {
    console.log(result)
});