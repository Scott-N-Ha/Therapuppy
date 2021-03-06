const express = require("express");
const router = express.Router();
const passport = require("passport");
const mongoose = require('mongoose');
const Booking = require("../../models/Booking");
const Puppy = require("../../models/Puppy");
const User = require("../../models/User");
const validateBookingInput = require("../../validations/booking");

router.post("/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const { isValid, errors } = validateBookingInput(req.body.booking);

    if (!isValid) {
        return res.status(400).json(errors);
    }
    let {
      puppy,
      renter,
      date,
    } = req.body.booking;
    try {
          puppy = await Puppy.findById(puppy);
          if (puppy) {
            let { owner, price } = puppy;

            const newBooking = new Booking({
              owner,
              renter,
              puppy: puppy.id,
              date,
              status: "5e717ae318716c8dc9bd5bf5",
              totalCost: price
            });

            owner = await User.findById(owner);
            renter = await User.findById(renter);
              const booking = await newBooking.save();
              
              owner.bookings.push(booking.id);
              owner.save();
              renter.bookings.push(booking.id);
              renter.save();
              return res.json({
                status: "Success",
                booking,
                users: {
                  [owner.id]: owner,
                  [renter.id]: renter
                }
              });
          } else {
            return res.status(404).json({
              puppyNotFound: "Cannot find puppy"
            });
          }
        }
    catch (err) { res.status(404).json({ bookngFail: err })};
  }
)

router.get("/", (req, res) => {
  Booking.find()
    .populate("owner", "-password")
    .populate("renter", "-password")
    .then(bookings => {
      const bookingsResult = {};
      const renters = {};
      bookings.forEach(booking => {
        bookingsResult[booking.id] = booking;
      });

      res.json({
        bookings: bookingsResult,
        users: renters,
      })
    })
    .catch(err => res.status(404).json({bookingsnotfound: err}));
});

router.patch(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Booking.findByIdAndUpdate(req.params.id, req.body.booking, { new: true })
      .then(booking => res.json({ booking }))
      .catch(err => res.status(422).json({ updateFail: err }));
  }
); 

router.delete("/:id",
  passport.authenticate('jwt', 
  {
    session: false
  }),
  (req, res) => {
    Booking.deleteOne({
      _id: req.params.id
    }, err => res.status(404).json(err))
  });

module.exports = router;