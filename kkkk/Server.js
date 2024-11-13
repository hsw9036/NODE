const mongoclient = require('mongodb').MongoClient;
const url = 'mongodb+srv://admin:1234@cluster0.c12ee.mongodb.net/';
const db = require('node-mysql/lib/db');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

let my_db;
mongoclient.connect(url)
    .then((client) => {
        my_db=client.db('myboard');
        my_db.collection('hw').find().toArray().then(resuelt =>{
            console.log();
        })
        app.listen(3000, function () {
            console.log("포트 3000으로 서버 대기중...");
        });
    }).catch(err => {
        console.log(err);
    })
console.log('몽고 DB 접속 성공');

app.use(bodyParser.urlencoded({extended:true}));

// mysql + node.js 접속

var mysql = require("mysql");
var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "my_db",
});

conn.connect();

app.set('view engine','ejs');

/*conn.query("select * from hw", function(err,rows,fields){
    if(err)throw err;
    console.log(rows);
}); */
app.get('/', (req,res) => {
    res.send('하이');
});



app.get('/list', (req,res) => {
    my_db.collection('hw').find().toArray(function(err,result){
      
        console.log(result);
        res.render('list.ejs',{data:result});
    })
        
    // res.render('list.ejs');

    // res.sendFile(__dirname+'/list.html');
});


/*
app.get('/list',function(req,res){
    console.log("gggg");
    /*
    my_db.collection('hw').find().toArray(function(err,result){
      
        console.log(result);
        res.render('list.ejs',{data:result});
    })
        
    // res.render('list.ejs');

    // res.sendFile(__dirname+'/list.html');
}); */
// app.use(bodyParser.urlencoded({extended:true}));

//body-parser 라이브러리 추가
// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({extended:true}));

// '/save' 요청에 대한 post 방식의 처리 루틴

/*app.post ('/save',function(req,res){
    console.log(req.body.title);
    console.log(req.body.content);
    let sql = "insert into hw (title,content,created) values(?,?,NOW())";
    let params = [req.body.titl,req.body.content];
    conn.query(sql,params,function(err,result){
        if(err)throw err;
        console.log('데이터 추가 성공');
    });
    res.send('데이터 추가 성공');
});
*/
app.post ('/save',function(req,res){
    console.log(req.body.title);
    console.log(req.body.content);
    my_db.collection('hw').insertOne(
        {title:req.body.title, content : req.body.content}
    ).then(result=>{
        console.log(result);
        console.log('데이터추가성공');
    });
    });