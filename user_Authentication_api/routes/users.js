const express = require("express");
const routes = express.Router();

const bcrypt = require("bcrypt");
const newUser = require("../models/users");



routes.get("/", async(req, res) => {
  try{ 
   const userInfo= await newUser.find();
   res.json(userInfo);
  }
  catch(err){
    res.json(err);
  }
});

routes.post("/log_in",fetchUser,async(req,res)=>{
  try{
    if(res.user.length==0) res.json({message:"no user found with this name"})
    const userPassword=await bcrypt.compare(req.body.password,res.user[0].password);
    if(userPassword){
      res.send("user Logged in");
      return;
    }else{
      res.send("Wrong password");
      return;
    }

  }catch(err){
    res.json({message:err.message})
  }
})

routes.post("/sign_in",fetchUser, async (req, res) => {
  try {
if(res.user.length!=0){res.json({message:"user is already defined"})
return;
}
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user_detail = new newUser({
      userName: req.body.userName,
      password: hashedPassword,
    });
   const user =await user_detail.save();

    res.json(user);
  } catch (err) {
    res.json({ message: err.message });
  }
});

async function fetchUser(req,res,next){
  let user;
  try{
user=await newUser.find({userName:req.body.userName})
}catch(err){
res.json({message:err.message})
}
console.log(user);
res.user=user;
next();
}

routes.get("/log_in", (req, res) => {
  res.send("log in");
});

module.exports = routes;
