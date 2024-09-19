const express = require("express")
const {CreateBooking} = require("../controller/bookingController")
const { auth } = require("../midellwares/auth")
const BookingRouter = express.Router()
BookingRouter.post('/'  ,  auth ,CreateBooking)


module.exports  = BookingRouter
    