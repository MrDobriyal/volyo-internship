const express=require('express')
const app=express()

const mongoose=require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/myapp')
const db=mongoose.connection

db.on('error',(error)=>{console.log(error)});
db.once('open',()=>{console.log("connected to database")})

app.use(express.json());

app.listen(3000,()=>{console.log("server started")})

const subscriberRoute=require('./routes/subscribers')
app.use("/hello",subscriberRoute);