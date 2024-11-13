const User = require("../model/user");

//메인화면 = 회원가입화면
exports.index = (req,res)=>{
    res.render("join");
    
}