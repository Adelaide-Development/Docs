const atlas = require("@adelaide-development/atlas");

atlas.club.create("Testing Club", "This Club Was Created With Atlas!", "token", function(result) {
    console.log(result)
});