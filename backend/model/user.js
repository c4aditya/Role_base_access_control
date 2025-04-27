const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({

     name :{
        type:String,
        required:true,
        maxLength:30,
        trim:true
     },

     email:{
        type:String,
        required:true,
        trim:true,
     },

     password:{
        type:String,
        required:true,
     },

     role:{
        type:String,
        enum:["admin","user"]
     }

})

module.exports = mongoose.model("userSchemsModel" ,userSchema)