const express = require("express");

const errorhandler = require("./middlewares/errorhandler");

const app = express();

const port = 3000;


const requestTIme = (req, res, next) =>{
    let today = new Date();
    let now = today.toLocaleTimeString();
    req.requestTIme = now;
    next();
}

app.use(requestTIme);

/*
const logger = (req, res, next) =>{
    console.log("User Logged");
    next();
};
*/

app.use(express.json());
app.use(express.urlencoded({extended:true}));


/*app.use(logger); */

app.route("/").get((req,res)=>{
   const responseText = `Hello Node! \n 요청시간 : ${req.requestTIme}`;
   res.set("Content-type", "text/plain");
   res.send(responseText)
})



app.use("/", require("./routes/contactRoutes"));


app.get("/errorerror", (req, res, next) => {
  const error = new Error("테스트용 에러");
  error.status =401;
  next(error);
});

app.use(errorhandler);

app.listen(port, ()=>{
  console.log(`${port}번 포트에서 서버실행중`);
})