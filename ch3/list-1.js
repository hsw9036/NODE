const fs = require("fs");

/*
let files = fs.readdirSync("./");
console.log(files);
*/

//비동기식
fs.readdir("./", (err, files) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(files);
});