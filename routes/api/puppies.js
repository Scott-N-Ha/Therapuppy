const express = require("express");
const router = express.Router();
const passport = require("passport");
const mongoose = require("mongoose");
const Booking = require("../../models/Booking");
const validatePuppyInput = require("../../validations/puppy");
const User = require("../../models/User");
const Puppy = require("../../models/Puppy");

router.get('/', (req, res) => {
  Puppy.find()
    .populate('owner', '-password')
    .then(puppies => {
      const puppiesResult = {};
      const users = {};
      puppies.forEach( puppy => {
        const owner = puppy.owner;
        users[owner.id] = owner;
        puppy.owner = puppy.owner.id;
        puppiesResult[puppy.id] = puppy;
      }) 
      res.json({puppies: puppiesResult, users});
    })
    .catch(err => res.status(404).json({puppiesnotfound: "no pupppr"})
    ); 
});

router.post('/', 
  // passport.authenticate('jwt', { session: false}),
  (req, res) => {
    const {
      errors,
      isValid
    } = validatePuppyInput(req.body.puppy);

    if (!isValid) {
        return res.status(404).json(errors);
    };
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
    } = req.body.puppy
    const newPuppy = new Puppy ({
        owner,
        name,
        age,
        breed,
        fluffyRating,
        earType,
        sex,
        natureRating,
        price
    });

    newPuppy.save().then(puppy => res.json({puppy}));
  }
);

router.get('/:id', (req, res) => {
  Puppy.findById(req.params.id)
    .populate('owner', '-password')
    .then(puppy => {
      users = puppy.owner
      puppy.owner = puppy.owner.id,
      res.json({puppy, users})
    })
    .catch(err =>
      res.status(404).json({ nopuppyfound: 'No puppy found for id'})    
    );
});


module.exports = router;