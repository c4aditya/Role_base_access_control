const mongoose  = require("mongoose");


const postSchema = new mongoose.Schema({

      title:{
        type:String,
        required:true,

      },

      description:{
        type:String,
        requiredL:true,
      },

      createdAt:{
      type:Date,
      default:Date.now(),
      }

})

module.exports = mongoose.model("post" , postSchema);