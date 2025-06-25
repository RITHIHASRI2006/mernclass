const express=require('express')
const userRoute=express.Router();
const user=require('../models/user')

userRoute.get('/',async(req,res)=>{
    try{
        const users=await user.find();
        res.json(users);
    }catch(err){
        res.send('err')
    }
})

userRoute.get('/:id',async(req,res)=>{
    try{
        const users=await user.find(req.params.id);
        res.json(users);
    }catch(err){
        res.json(err.message)
    }
})

userRoute.post('/',async(req,res)=>{
    const users=new user({
        name:req.body.name,
        email:req.body.email
    })
    try{
        users.save();
        res.json(users);
    }catch{
        res.json('unable to insert user');
    }
})
userRoute.put('/:id',async(req,res)=>{
    const users=await user.findByIdAndUpdate(
        req.params.id,
        req.body
    )
    res.json(users);
})
userRoute.delete('/:id',async(req,res)=>{
    const users=user.findByIdAndDelete(req.params.id);
    res.json(users);
})



module.exports=userRoute;