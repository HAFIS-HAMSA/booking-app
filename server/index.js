const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors")
const signupModel = require('./Routes/Mongo')
const paymentRoutes = require("./Routes/Payment");

// const multer = require('multer')

const app = express();
app.use(express.json())
app.use(cors())


mongoose.connect("mongodb://127.0.0.1:27017/applestore");

app.post('/login',(req,res)=>{
    const {name,password} =req.body;
    signupModel.findOne({name: name})
    .then(user =>{
        if(user){
            if (user.password == password) {
                res.json("success")
            } else {
                res.json("The Password is Incorrect")
        
            }
        }else{
            res.json("NO Recored Existed")
        }
    })

})

app.post('/',(req,res)=>{
    if (req.body.name ===undefined || req.body.password ===undefined){
        
        res.json("no data")

        
    } else {
        signupModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))  
    }
   
})

app.use("/api/payment/", paymentRoutes);

app.listen(3002, ()=>{
    console.log("service is running");
    
})
