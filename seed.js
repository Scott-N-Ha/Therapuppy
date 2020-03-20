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
const u2 = {
  firstName: "Shan",
  lastName: "Bogan",
  username: "ShanBogan",
  email: "shawn@hegmann.info",
  password: "wqwvgr",
  password2: "wqwvgr",
  address1: "111 Rusty Locks",
  city: "San Francisco",
  state: "CA",
  zip: "94133",
  isOwner: "true"
};
const u3 = {
  firstName: "Dovie",
  lastName: "Mitchell",
  username: "DovieMitchell",
  email: "norene@lueilwitzbeer.io",
  password: "b6lh3o",
  password2: "b6lh3o",
  address1: "95070 Julius Point",
  city: "San Francisco",
  state: "CA",
  zip: "94133",
  isOwner: "true"
};
const u4 = {
  firstName: "Ebony",
  lastName: "Hudson",
  username: "EbonyHudson",
  email: "floria@mills.net",
  password: "renpnp",
  password2: "renpnp",
  address1: "355 Roob Mount",
  city: "San Francisco",
  state: "CA",
  zip: "94133",
  isOwner: "true"
};
const u5 = {
  firstName: "Del",
  lastName: "Torp",
  username: "DelTorp",
  email: "mathilda.rath@emmerich.biz",
  password: "835bdl",
  password2: "835bdl",
  address1: "79390 Armando Knolls",
  city: "San Francisco",
  state: "CA",
  zip: "94133",
  isOwner: "true"
};
const u6 = {
  firstName: "Fritz",
  lastName: "Powlowski",
  username: "FritzPowlowski",
  email: "renee.strosin@turner.com",
  password: "vh168t",
  password2: "vh168t",
  address1: "6844 Zane Gateway",
  city: "San Francisco",
  state: "CA",
  zip: "94133",
  isOwner: "true"
};


const userArray = [u2, u3, u4, u5, u6]

// User.find().then( users => {
  userArray.forEach( newUser => {
    console.log(newUser)
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        User.create(newUser)
        .then(user => {
          console.log(user);
        })
        .catch(err => console.log(err));
      })
    }) 
  })
// })
console.log("seeding ends ")
