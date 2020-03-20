const express = require("express");
const router = express.Router();
const passport = require("passport");
const mongoose = require("mongoose");
const multer = require("multer");
const validatePuppyInput = require("../../validations/puppy");
const keys = require('../../config/keys');

const User = require("../../models/User");
const Puppy = require("../../models/Puppy");
const Booking = require("../../models/Booking");

let AWS = require("aws-sdk");
let storage = multer.memoryStorage();
let upload = multer({
  storage: storage
});

let s3bucket = new AWS.S3({
  accessKeyId: keys.accessKeyId,
  secretAccessKey: keys.secretAccessKey,
  region: "us-west-2"
});

const fetchUrl = function(puppy) {
  const urlParams = {
    Bucket: "therapuppy-test",
    Key: puppy.s3Key
  };

  return s3bucket.getSignedUrl("getObject", urlParams);
};

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

router.post("/upload", upload.single("file"), function (req, res) {
  const file = req.file;
  const s3FileURL = keys.s3FileURL;
  let params = {
    Bucket: keys.bucketName,
    Key: file.originalname,
    Body: file.buffer,
    ContentType: file.mimetype
  };
  s3bucket.upload(params, function (error, data) {
    if (error) {
      res.status(500).json({
        error
      });
    } else {
      res.send({
        data
      });
      let newFileUploaded = {
        description: req.body.description,
        fileLink: s3FileURL + file.originalname,
        s3_key: params.Key
      };

      res.json({
        newFileUploaded
      });
    }
  });
});

router.get('/', (req, res) => {
  Puppy.find()
    .populate('owner', '-password')
    .then(puppies => {
      const puppiesResult = {};
      const users = {};
      puppies.forEach(puppy => {
        const owner = puppy.owner;
        users[owner.id] = owner;
        puppy.owner = puppy.owner.id;

        puppiesResult[puppy.id] = puppy;
        puppy.photo = fetchUrl(puppy);
      });
      res.json({
          puppies: puppiesResult,
          users
        });
    })
    .catch(err => res.status(404).json({
      puppiesnotfound: "no puppies were found",
    }));
});



router.post('/',
  // passport.authenticate('jwt', { session: false}),
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
    const s3FileURL = keys.s3FileURL;

    let params = {
      Bucket: keys.bucketName,
      Key: file.originalname,
      Body: file.buffer,
      ContentType: file.mimetype
      // ACL: "public-read"
    };

    s3bucket.upload(params, (err, data) => {
      if (err) {
        res.status(404).json({
          err
        });
      } else {
        let photo = s3FileURL + file.originalname
        let newFileUploaded = {
          description: req.body.description,
        };
        let s3Key = params.Key;
        console.log(s3FileURL)

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
            let user = User.findById(newPuppy.owner).then(
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
