const readline = require("readline");
let cnt = 1;
function checkAge(age) {
    cnt++;
    if(cnt===3) r1.close();
    if(age>19) return true;
    else return false;
}

for(let i = 1; i <=3; i++){
    let r1 = readline.createInterface({
        input : procee.stdin,
        outpu:process.stdout,
    });
}