const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const passport = require('passport');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const path = require('path');
const db = require("./config/keys.js").mongoURI;
const validateRegisterInput = require("./validations/register");
const validatePuppyInput = require("./validations/puppy");
const User = require('./models/User');
const users = require("./routes/api/users");
const puppies = require("./routes/api/puppies");
const bookings = require("./routes/api/bookings");
const Breed = require('./models/Breed');
const Status = require('./models/Status')

const app = express();

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB."))
    .catch(err => console.log(err));

// const samoyed = {
//   name: "huskyD",
//   description: "The Huskyd is a substantial but graceful dog standing anywhere from 19 to a bit over 23 inches at the shoulder. Powerful, tireless, with a thick all-white coat impervious to cold—Sammies are perfectly beautiful but highly functional. Even their most delightful feature, a perpetual smile, has a practical function: The upturned corners of the mouth keep Sammies from drooling, preventing icicles from forming on the face."
// }

// Breed.create(samoyed)

// console.log(samoyed._id);

// const u1 = User.create({
//     username: "testtest",
//     email: "test@aa.io",
//     firstName: "testuser",
//     lastName: "Leung",
//     password: "password",
//     password2: "password",
//     address1: "125 battery",
//     city: "San Francisco",
//     state: "CA",
//     zip: "94133",
//     isOwner: "true"
// })
const u2 = User.create({
  firstName: "Clay",
  lastName: "Renner",
  username: "ClayRenner",
  email: "bobbie@beier.name",
  password: "qoyb6q",
  password2: "qoyb6q",
  city: "San Francisco",
  state: "CA",
  zip: "94133",
  isOwner: "true"
});
const u3 = User.create({
  firstName: "Yuri",
  lastName: "Wuckert",
  username: "YuriWuckert",
  email: "noreen@donnellyzulauf.io",
  password: "xsulul",
  password2: "xsulul",
  city: "San Francisco",
  state: "CA",
  zip: "94133",
  isOwner: "true"
});
const u4 = User.create({
  firstName: "Man",
  lastName: "Oberbrunner",
  username: "ManOberbrunner",
  email: "dorathy@bednar.biz",
  password: "5mxig2",
  password2: "5mxig2",
  city: "San Francisco",
  state: "CA",
  zip: "94133",
  isOwner: "true"
});
const u5 = User.create({
  firstName: "Leon",
  lastName: "Pollich",
  username: "LeonPollich",
  email: "josie.kaulke@kunze.net",
  password: "igdqb4",
  password2: "igdqb4",
  city: "San Francisco",
  state: "CA",
  zip: "94133",
  isOwner: "true"
});
const u6 = User.create({
  firstName: "Blossom",
  lastName: "Bogan",
  username: "BlossomBogan",
  email: "kerry@herzog.org",
  password: "3mba0r",
  password2: "3mba0r",
  city: "San Francisco",
  state: "CA",
  zip: "94133",
  isOwner: "true"
});

User.findById("").then(newUser => {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) throw err;
      newUser.password = hash;
      newUser.save()
      .then(user => {
          console.log(user);
      })
      .catch(err => console.log(err));
    })
  }) 
})
