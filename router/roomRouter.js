const express = require("express")
const { FindAllRoom, FindOneRoom, UpdateRoom, DeleteRoom  ,CreateRoom} = require("../controller/roomControlleer")
const RoomRouter = express.Router()
RoomRouter.get('/'  , FindAllRoom)
RoomRouter.post('/'  , CreateRoom)
RoomRouter.get('/:id'  , FindOneRoom)
RoomRouter.put('/:id'  , UpdateRoom)
RoomRouter.delete('/:id'  , DeleteRoom)

module.exports  = RoomRouter
    