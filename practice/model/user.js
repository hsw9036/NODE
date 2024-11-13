const mysql = require("mysql");

const cnn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '1234',
    database : 'database_name'
});

// 회원가입 정보 입력
exports.insert = (data,cb) => {
    var sql = `INSERT INTO ufo VALUES ('${data.id}', '${data.name}', '${data.email}', '${data.phoneNumber}','${data.password}');`;
    cnn.query(sql, (err,rows)=>{
        if (err) throw err;
        cb(data.id) ;
    });
}

// 로그인 정보 읽기
exports.select = (id,password,cb) => {
    var sql = `select * from ufo where id = '${id}' limit 1`;

    cnn.query (sql, (err, rows) =>{
        if (err) throw err;
        cb (rows[0]);
    });
}

//회원 정보
exports.get_ufo = (id,db)=>{
    let sql = `select*from ufo where id = '${id}'limit1;`;
    cnn.query (sql, function (err,rows){
        if (err) throw err;
        cb(rows);
    });
}

//회원 정보 수정
exports.update = (data,cb)=> {
    var sql = `UPDATE ufo SET name='${data.name}', email='${data.email}', phoneNumber='${data.phoneNumber}', password='${data.password}' WHERE id='${data.id}';`;

    cnn.query(sql, (err,rows)=>{
        if (err) throw err;
        cb (rows);
    });
}

//회원 탈퇴
exports.delete = (id, cb) => {
    var sql = `DELETE FROM ufo WHERE id = '${id}';`;

    cnn.query(sql,(err,rows)=>{
        if (err) throw err;
        cb(rows);
    });
}