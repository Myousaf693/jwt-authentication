const mongoose = require('mongoose')

const user = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    age:{type:Number,required:true},
    // image:{type:String},
    role:{type:Number,required:true},
},{timestamps:true})

module.exports = mongoose.model("Users", user)