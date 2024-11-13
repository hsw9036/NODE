const express = require("express");
const practice = express();
const port = 8888;

practice.route("/").get((req,res)=>{
    const responseText = "Hello Node !"
    res.set("Content-type","text/plain");
    res.send(responseText)
})

practice.listen(port, ()=>{
    console.log(`${port}번 포트에서 서버실행중`);
});