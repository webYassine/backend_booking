const Booking = require("../model/booking");
const Room = require("./../model/room");
const mongoose = require("mongoose")
async function CreateBooking(req ,res){

    
   
 try{
     // Check if the provided room ID is valid
     if (!mongoose.Types.ObjectId.isValid(req.body.room)) {
        return res.status(400).send({ message: "Invalid room ID" });
      }
    const room = await Room.findOne({_id : req.body.room})
    console.log(req.user_id);

    if(!room){
        return res.status(404).send({message  : "room not found"})
    }
    const newBooking  = {
        Date_started : req.body.Date_started ,
        Date_end : req.body.Date_end ,
        room  : req.body.room , 
        user : req.user_id
    } 
    const booking = await Booking.create(newBooking)

    
 res.status(200).send({"message" : "Booking create with success" ,  booking})
 }catch(error){
    console.error(error);
    res.status(500).send({ message: "Internal server error", error: error.message });
 }

}

module.exports  = {
    CreateBooking
}