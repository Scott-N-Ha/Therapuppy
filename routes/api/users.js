const express = require("express");
const router = express.Router();
const validateRegisterInput = require('../../validations/register');
const validateLoginInput = require('../../validations/login');
const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const Puppy = require('../../models/Puppy')

router.post("/register", (req, res) => {
    console.log(req.body)
    const { errors, isValid } = validateRegisterInput(req.body.user);

    if (!isValid) {
        return res.status(404).json(errors);
    };

    User.findOne({ email: req.body.email })
        .then(user => {
            if (user) {
                errors.handle = "Email already exists";
                return res.status(404).json(errors);
            } else {
                const { 
                    username, 
                    email, 
                    firstName, 
                    lastName, 
                    password, 
                    isOwner, 
                    address1, 
                    address2, 
                    city, 
                    state, 
                    zip} = req.body.user
                const newUser = new User({
                    username,
                    email,
                    firstName,
                    lastName,
                    password,
                    isOwner,
                    address1,
                    address2,
                    city,
                    state,
                    zip,
                });

                bcrypt.getSalt(10, (err,salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser.save()
                            .then(user => {
                                const payload = { id:user.id, username: user.username, email: user.email };

                                jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                                    res.json({
                                        success: true,
                                        token: "Bearer " + token
                                    });
                                });
                            })
                            .catch(err => console.log(err));
                    });
                });

            };
        });
});

router.post("/login", (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);

    if (!isValid) {
        return res.status(404).json(errors);
    };

    const username = req.body.username;
    const password = req.body.password;

    User.findOne( { username }).then(user => {
        if (!user) {
            errors.username = "This username does not exist";
            return res.status(404).json(errors); 
        };
        console.log("success");

        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                const payload = { id: user.id, username: user.username, email: user.email };

                jwt.sign(payload, keysOrSecret, { expiresIn: 3600 }, (err, token) => {
                    console.log("sucess");
                    return res.json({
                        sucess: true, 
                        token: "Bearer " + token
                    });
                });
            } else {
                errors.password = "Incorrect password";
                return res.status(404).json(errors);
            };
        });
    });
});

router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.json({
        id: req.user.id,
        username: req.user.username, 
        email: req.user.email
    });
});

router.get('users/:user_id/puppies', (req, res) => {
  Puppy.find({ owner: req.params.user_id})
    .then(puppies => res.json(puppies))
    .catch(err => 
      res.status(404).json({ nopuppiesfound: 'No puppies found from user'}
    )
  )
  Booking.find({ owner: req.params.user_id})
    .then(bookings => res.json(bookings))
    .catch(err => 
      res.status(404).json({ nobookingsfound: 'No bookings found from user'})
    );
});

router.get('users/puppies/:puppies_id', (req, res) => {
  Puppy.findById({ id: req.params.puppies_id })
    .then(puppy => res.json(puppy))
    .catch(err => 
      res.status(404).json({ nopuppyfound: 'No puppy found with that Id'}))
}) 

module.exports = router;

