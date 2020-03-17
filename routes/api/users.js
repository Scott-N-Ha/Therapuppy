const express = require("express");
const router = express.Router();
const validateRegisterInput = require('../../validations/register');
const validateLoginInput = require('../../validations/login');
const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');

router.post("/register", (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);

    if (!isValid) {
        return res.status(404).json(errors);
    };

    User.findOne({ email: req.body.email })
        .then(user => {
            if (user) {
                errors.handle = "Email already exists";
                return res.status(404).json(errors);
            } else {
                const newUser = new User({
                    username: req.body.username,
                    email: req.body.email,
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    password: req.body.password,
                    isOwner: req.body.isOwner,
                    address1: req.body.address1,
                    address2: req.body.address2,
                    city: req.body.city,
                    state: req.body.state,
                    zip: req.body.zip
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
                        token: "Bearer " + topken
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
    })
})