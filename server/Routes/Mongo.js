const mongoose =require('mongoose')

const applestore = new mongoose.Schema({

    // name:String,
    // password:String
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const signupModel = mongoose.model("signup", applestore)
module.exports = signupModel