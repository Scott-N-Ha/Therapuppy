const express = require("express");
const router = express.Router();
const passport = require("passport");
const mongoose = require('mongoose');
const Booking = require("../../models/Booking");
const Puppy = require("../../models/Puppy");
const User = require("../../models/User");
const validateBookingInput = require("../../validations/booking");

router.post("/",
  // passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // const { isValid, errors } = validateBookingInput(req.body);

    // if (!isValid) {
    //     return res.status(400).json(errors);
    // }

    let {
      puppy,
      renter,
      date,
    } = req.body.booking;

    Puppy.findById(puppy)
      .then(puppy => {
        if (puppy) {
          let {
            owner,
            price
          } = puppy
        //   console.log(puppy)
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
            .then(booking => {

                User.findById(owner)
                    .then( owner => {
                        owner.bookings.push(booking.id)
                        owner.save()
                        User.findById(renter)
                            .then(renter => {
                                renter.bookings.push(booking.id)
                                renter.save()
                                return res.json({booking, users: {[owner.id]: owner, [renter.id]: renter} })
                            })
                    });
                })
            .catch(err => console.log(err))
        } else {
          return res.status(400).json({
            puppynotfound: "cannot find puppp"
          });
        }
      })
  }
)

router.get("/", (req, res) => {
  Booking.find()
    .then(bookings => {
      const bookingsResult = {};
      const renters = {};

      bookings.forEach(booking => {
        bookingsResult[booking.id] = booking;
        
        let renter = User.findById(booking.renter);
        if (renter) renters[renter.id] = renter;
      });

      res.json({
        bookings: bookingsResult,
        users: renters,
      })
    });
});

router.patch("/:id", (req, res) => {
  Booking.findByIdAndUpdate(req.params.id, req.body, (err) => {
    res.json({msg: "Success"}); // Replaced with actual Booking
  });
});

router.delete("/:id",
  passport.authenticate('jwt', {
    session: false
  }),
  (req, res) => {
    Booking.deleteOne({
      _id: req.params.id
    }, err => res.status(404).json(err))
  });
// router.get("/puppy/:puppy_id", (req, res) => {
//     Booking.find({puppy: req.params.puppy_id})
//         .then(booking => res.json(booking))
//         .catch( err => 
//             res.status(404).json({ noBookingFound: "No bookings found from that peeee"}))
// })
module.exports = router;