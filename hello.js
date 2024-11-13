const c = require("ansi-colors");

function hello(name) {
    console.log(c.green(name) + "님, 반갑습니다.!!");
}

hello("홍길동");