const express = require("express");
const router = express.Router();
const passport = require("passport");
const validatePuppyInput = require("../../validations/puppy");
const keys = require('../../config/keys');
const multer = require("multer");

const User = require("../../models/User");
const Puppy = require("../../models/Puppy");
const Booking = require("../../models/Booking");
const { s3bucket, fetchUrl } = require("./util");

let storage = multer.memoryStorage();
let upload = multer({
  storage: storage
});

const fetchBookings = puppy => {
  return Booking.where("puppy")
    .populate("renter")
    .in(puppy.id)
    .then(res => {
      const bookings = {};
      const renters = {};

      res.forEach(booking => {
        bookings[booking.id] = booking;
      });

      return { bookings, renters };
    });
};

router.get('/', (req, res) => {
  Puppy.find()
    .sort([['date', -1]])
    .populate('owner', '-password')
    .then(puppies => {
      const puppiesResult = {};
      const users = {};
      puppies.forEach((puppy,idx) => {
        const owner = puppy.owner;
        if (owner){
          users[owner.id] = owner;
          puppy.owner = puppy.owner.id;
        }

        puppiesResult[puppy.id] = puppy;
        puppy.photo = fetchUrl(puppy);
      });
      res.json({
          puppies: puppiesResult,
          users
        });
    })
    .catch(err => res.status(404).json({
      puppiesnotfound: err,
    }));
});

router.post('/',
  passport.authenticate('jwt', { session: false}),
  upload.single("file"),
  (req, res) => {
    const {
      errors,
      isValid
    } = validatePuppyInput(req.body.puppy);

    if (!isValid) {
      return res.status(404).json(errors);
    };

    const file = req.file;

    let params = {
      Bucket: keys.bucketName,
      Key: file.originalname,
      Body: file.buffer,
      ContentType: file.mimetype
    };

    s3bucket.upload(params, (err, data) => {
      if (err) {
        res.status(404).json({
          err
        });
      } else {
        let photo = file.originalname;
        let s3Key = params.Key;

        const {
          owner,
          name,
          age,
          breed,
          fluffyRating,
          earType,
          sex,
          natureRating,
          price
        } = req.body.puppy;

        const newPuppy = new Puppy({
          owner,
          name,
          age,
          breed,
          fluffyRating,
          earType,
          sex,
          natureRating,
          price,
          photo,
          s3Key
        });

        newPuppy.save()
          .then(puppy => {
            User.findById(newPuppy.owner).then(
              user => {
                user.puppies.push(newPuppy.id);
                user.save();
                res.json({
                  puppy,
                  users: user
                });
              })
          })
          .catch(err => res.status(404).json({
            err
          }));
      }
    })
  });

router.get('/:id', (req, res) => {
  Puppy.findById(req.params.id)
    .populate('owner', '-password')
    .then(puppy => {
      users = puppy.owner;
      fetchBookings(puppy).then(({bookings, renters}) => {
        puppy.owner = puppy.owner.id;
        puppy.photo = fetchUrl(puppy);
        res.json({
          puppy,
          users,
          bookings,
        });
      });
    })
    .catch(err =>
      res.status(404).json({
        nopuppyfound: 'No puppy found for id'
      })
    );
});


module.exports = router;
