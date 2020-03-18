const express = require("express");
const router = express.Router();
const passport = require("passport");
const mongoose = require("mongoose");
const Booking = require("../../models/Booking");
const validatePuppyInput = require("../../validations/puppy");
const Puppy = require("../../models/Puppy");

router.get('/', (req, res) => {
  Puppy.find()
    .then(puppies => {
      const puppiesResult = {};
      const users = {};
      puppies.forEach( puppy => {

        puppiesResult[puppy.id] = puppy
        const owner = puppy.populate('owner')
        users[owner.id] = owner
      })
      res.json({puppies: puppiesResult, users});
    })
    .catch(err => res.status(404).json({ nopuppiesfound: 'No puppies found'})
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

    newPuppy.save().then(puppy => res.json(puppy));
  }
);

router.get('/:id', (req, res) => {
  Puppy.find({ id: req.params.id })
    .then(puppy => res.json(puppy))
    .catch(err =>
      res.status(404).json({ nopuppyfound: 'No puppy found for id'})    
    );
});


module.exports = router;