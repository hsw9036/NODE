const http = require("http")

const server = http.createServer((req, res)=>{
    const {method,url} = req;
    res.setHeader("Content-Type","text/plain");

    if (method === "GET" && url === "/abcd") {
        res.end("이걸왜친거야대체");
    } else if (method === "GET" && url === "/1234") {
        res.end("숫자래용")
    }
});

server.listen(3333, () =>{
    console.log("실행중이에용");
})