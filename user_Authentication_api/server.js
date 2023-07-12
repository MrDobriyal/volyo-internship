const express=require('express');
const app=express();

app.use(express.urlencoded({extended:true}));

const mongoose=require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/user_info");
const db=mongoose.connection
db.on("error",(error)=>{console.log(error)});
db.once("open",()=>{console.log("database connected")});

app.use(express.json());


const userRouter=require("./routes/users");
app.use('/users',userRouter);

app.listen(3000,()=>{console.log("server started")})