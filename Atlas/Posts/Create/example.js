const atlas = require("@adelaide-development/atlas");

atlas.post.create("Hello World!", "Posted with Atlas.", "token", function(result) {
    console.log(result)
});