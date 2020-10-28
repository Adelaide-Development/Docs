const atlas = require("@adelaide-development/atlas")

atlas.sys.ping(function(result) {
    console.log(result)
});