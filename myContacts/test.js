const http = require("http");

const server = http.createServer((req,res)=>{
    console.log("바로바뀐다");
});

server.listen(3000,()=>{
    console.log("서버실행중");
});