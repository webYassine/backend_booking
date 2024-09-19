const mongoose = require("mongoose")
const roomSchema = mongoose.Schema({
  name :  {type : String , required : true} , 
  description : {type : String , required : true} ,
  hotel  : {type : mongoose.Schema.ObjectId, ref:"Hotel"} , 

})
const Room = mongoose.model("Room" , roomSchema )

module.exports = Room

