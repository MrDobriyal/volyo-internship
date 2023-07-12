const express=require('express')
const router=express.Router()

const Subscriber = require('../models/subscriber');
const subscriber = require('../models/subscriber');


//to get all subscribers
router.get('/',async(req,res)=>{
try{
const subscriber=await Subscriber.find();
res.json(subscriber);
}catch(err){
res.status(500).json({message:err.message})
}

})


// To add all subscribers
router.post('/', async (req,res)=>{
    const subs= new Subscriber({
        name:req.body.name,
        subscribedToChannel:req.body.subscribedToChannel,
    })
    try{
const newSubscriber=await subs.save();
res.status(201).json(newSubscriber);
    }
    catch(err){
        res.status(400).json({message:err.message})
    }
})

//to find subscriber by using id middleware used
router.get('/:id',findSubscriber,async(req,res)=>{
// try{
// const findByName=await Subscriber.findById(req.params.id)
// res.json(findByName);
// }
// catch(err){
// res.json({message:err.message})
// }
const subscriber=await res.subscriber;
res.json(subscriber);
})

//to update specific subscribers
router.patch('/:id', async(req,res)=>{
try{
const subscriber=await Subscriber.findById(req.params.id);
subscriber.name=req.body.name;
subscriber.save();
res.json(subscriber);
}
catch(err){
res.json({message:err.message})
}
})

//to delete subscribers
router.delete('/:id', async(req,res)=>{
try{
const subscriber=await Subscriber.findByIdAndRemove(req.params.id)
if(subscriber!=null){
    res.json({message:"the subscriber is removed"})
}else{
    res.json({message:"could note find any subscriber with this id"})
}
}
catch(err){
    res.json({message:err.message})
}
})

//middleware for finding subscriber by id
async function findSubscriber(req,res,next){
    let subscriber;
try{
 subscriber=await Subscriber.findById(req.params.id);
if(subscriber==null){
   return res.json({message:"no subscriber found"})
}

}
catch(err){
return res.json({message:err.message})
}
res.subscriber=subscriber;
next()
}


module.exports=router;