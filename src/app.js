const express=require('express')
const app=express()
require("./db/conn");
const Student=require('./models/students')
const port=process.env.PORT || 8000;
app.use(express.json()); 
app.post("/students",(req,res)=>{
    const user=new Student(req.body);
    console.log(req.body);
    //res.send('Hello from the other sides')
    user.save().then(()=>{
        res.status(201).send(user)
    }).catch((e)=>{
        res.status(400).send(e);
    })
    
})
app.listen(port,()=>{
    console.log(`connection is setup at ${port}`)
})
/*
You don't need express.json() and express.urlencoded()
for GET Requests or DELETE.Requests. We only need it for post and put req.
express.json() is a method inbuilt in express to recognize the incoming
Request Object as a JSON Object.This method is called as a middleware
*/