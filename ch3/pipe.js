const fs = require("fs");

const readStream = fs.createReadStream("./readMe.txt","utf8");
const writeStream = fs.createReadStream("./writePipe.txt");

readStream.pipe(writeStream);
