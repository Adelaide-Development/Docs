const atlas = require("@adelaide-development/atlas");

atlas.message.create("Hello World", "2742830948901238", "token", function(result) {
    console.log(result)
});