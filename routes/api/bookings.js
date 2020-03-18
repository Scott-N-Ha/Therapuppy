const express = require("express");
const router = express.Router();
const passport = require("passport");
const mongoose = require('mongoose');
const Booking = require("../../models/Booking");
const Puppy = require("../../models/Puppy");
const validateBookingInput = require("../../validations/booking");

router.post("/",
    // passport.authenticate("jwt", { session: false }),
    (req, res) => {
        // const { isValid, errors } = validateBookingInput(req.body);

        // if (!isValid) {
        //     return res.status(400).json(errors);
        // }
        const {
            puppyId,
            renter,
            date,
        } = req.body.booking
        Puppy.findById(puppyId)
            .then( puppy => {
                    if (puppy){
                        const {owner, price} = puppy
                        console.log(puppy)
                        const newBooking = new Booking({
                        owner,
                        renter,
                        puppy: puppy.id,
                        date,
                        status: "5e717ae318716c8dc9bd5bf5",
                        totalCost: price
                        });
                            
                        newBooking
                            .save()
                            .then(booking => res.json(booking))
                            .catch(err => console.log(err))
                        }
                    else{
                        return res.status(400).json({puppynotfound: "cannot find puppp"});
                    }
                })
    }
)

router.get("/", (req,res) => {
    Booking.find()
      .then(bookings => {
        const bookingsResult = {}
        bookings.forEach( booking => {
          bookingsResult[booking.id] = booking
        });
        res.json({bookings: bookingsResult})
    });
});    

// router.get("/puppy/:puppy_id", (req, res) => {
//     Booking.find({puppy: req.params.puppy_id})
//         .then(booking => res.json(booking))
//         .catch( err => 
//             res.status(404).json({ noBookingFound: "No bookings found from that peeee"}))
// })
module.exports = router; 