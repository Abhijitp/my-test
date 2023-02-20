try {
    var langs = require('langs');
    const franc =  require("franc");

    const input = process.argv[2];

    var language = langs.where("3", franc(input));
    console.log(language.name);
} catch {
    console.log("Could not figure it out");
}
