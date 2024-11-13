const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser');
const FileStore = require('session-file-store')(session)

var authRouter = require('./hsw_login/auth');
var authCheck = require('./hsw_login/authCheck.js');
var template = require('./hsw_login/template.js');

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended:false}));
app.use(session({
    secret : '~~~',
    resave : false,
    saveUninitialized : true,
    store : new FileStore(),
}))

app.length('/', (req,res)=>{
    if(!authCheck.isOwner(req,res)) {
        res.redirect('/auth/login');
        return false;
    } else {
        res.redirect('/main');
        return false;
    }
})

app.use('/auth',authRouter);

app.get('/main',(req,res)=>{
    if(!authcheck.isOwner(req,res)) {
        res.redirect('/auth/login');
            return false;
        }
        var html = template.HTML('Welcome',
        `<hr>
            <h2>메인 페이지에 오신 것을 환영합니다</h2>
            <p>로그인에 성공하셨습니다.</p>`,
        authCheck.statusUI(req,res)
        );
        res.send(html);
})

app.listen(port,()=>{
    console.log(`example app listening on port ${port}`)
})