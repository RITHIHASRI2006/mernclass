require('dotenv').config()
const express=require('express')
const mongoose=require('mongoose')
const userRoute = require('./routes/user')
const user=require('./models/user')
const app=express()

app.use(express.json());//json convert
const MONGO_URL='mongodb+srv://rithihasri:rithu@cluster.q3vdyz.mongodb.net/'
mongoose.connect(MONGO_URL,{}).then(()=>{
    console.log("mongo connected")
}).catch(()=>{
    console.error("mongo not connected")
})


app.use('/api/user',userRoute)
/*app.get('/',async(req,res)=>{
    try{
        const users=await user.find();
        res.json(users);
    }catch(err){
        re.json("not found")
    }
})
// app.use('/api/users',userRoute)
app.post('/',async(req,res)=>{
    const newUser=new user(
       { name:req.body.name,
        email:req.body.email}
    )
    try{
        await newUser.save();
        res.status(201).json(newUser);
    }catch{
        res.status(400).json('not saved');
    }
})
*/
app.listen(3000,()=>{
    console.log("server running")
})
