const Room = require("../model/room")

async function FindAllRoom(req ,res){
 try{
const rooms =  await Room.find()
 res.status(200).send({"message" : "Rooms Find with success" , data : rooms})
 }catch(error){
     console.log(error)
 }

}
async function FindOneRoom(req ,res){
    try{
       const room =  await Room.findOne({_id : req.params.id}).populate('hotel')
   if(!room){
    return res.status(404).send({"message" : "room not found" })
   }
   res.status(200).send({"message" : "Room Find with success" , data : room})
       
    }catch(error){
        console.log(error)
    }
}
async function CreateRoom(req ,res){
           console.log(req.body);
           const room = {
            name : req.body.name , 
            description : req.body.description , 
            hotel : req.body.hotel
           }
           
    try{
       const room =  await  Room.create(req.body)
   res.status(200).send({"message" : "Room Find with success" , data : room})

    }catch(error){
        console.log(error)
    }
}
async function UpdateRoom(req ,res){
    const roomupdated = {
        name : req.body.name , 
        description : req.body.description
       }
    try{
        const room =  await  Room.findOneAndUpdate({_id : req.params.id},roomupdated)
        if(!room){
            return res.status(404).send({"message" : "room not found" })
           }
           res.status(200).send({"message" : "Room updated with success" , data : room})
           
    }catch(error){
        console.log(error)
    }
}
async function DeleteRoom(req ,res){
    try{
        const room = await  Room.findOneAndDelete({_id : req.params.id})
        if(!room){
            return res.status(404).send({"message" : "room not found" })
           }
 res.status(200).send({"message" : "Room deleted with success" })

    }catch(error){
        console.log(error)
    }
}

module.exports  = {
    FindAllRoom , FindOneRoom , CreateRoom , UpdateRoom , DeleteRoom    
}