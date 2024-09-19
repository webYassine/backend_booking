const express = require("express")
const HotelRouter = require("./router/hotelRouter")
const mongoose  = require('mongoose')
const RoomRouter = require("./router/roomRouter")
const AuthRouter = require("./router/authRouter")
const BookingRouter = require("./router/bookingRouter")

const app = express()

const port = 5555 
const db = "mongodb://localhost:27017/Booking"
app.use(express.json()) 
app.use('/hotels' , HotelRouter) 
app.use('/rooms' , RoomRouter) 
app.use('/auth' , AuthRouter)
app.use('/booking' , BookingRouter) 





mongoose.connect(db).then(()=>{
     console.log("db connected")
    app.listen(port , ()=>{
        console.log("server run at : " + port)
    })
}).catch((err=>{
 console.log(err)
}))
