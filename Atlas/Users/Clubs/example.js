const atlas = require("@adelaide-development/atlas")

atlas.user.clubs("token", function(result) {
    console.log(result)
});