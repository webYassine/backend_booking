const express = require("express")
const { FindAllRoom, FindOneRoom, UpdateRoom, DeleteRoom  ,CreateRoom, FindAvailableRoom} = require("../controller/roomControlleer")
const RoomRouter = express.Router()
RoomRouter.get('/'  , FindAllRoom)
RoomRouter.get('/available'  , FindAvailableRoom)

RoomRouter.post('/'  , CreateRoom)
RoomRouter.get('/:id'  , FindOneRoom)
RoomRouter.put('/:id'  , UpdateRoom)
RoomRouter.delete('/:id'  , DeleteRoom)

module.exports  = RoomRouter
    