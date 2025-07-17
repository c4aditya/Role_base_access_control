const mongoose = require("mongoose")

// creating an schema for user 

const user_schema = mongoose.Schema({
    email:{
        type:String,
     
    },
    password:{
        type:String,

    },
    role:{
        type:String,
        enum:["admin", "user"]
    }
})

module.exports = mongoose.model("User" , user_schema)