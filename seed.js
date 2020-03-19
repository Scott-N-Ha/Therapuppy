const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const passport = require('passport');
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

const u1 = User.create({
    username: "testtest",
    email: "test@aa.io",
    firstName: "testuser",
    lastName: "Leung",
    password: "password",
    password2: "password",
    address1: "125 battery",
    city: "San Francisco",
    state: "CA",
    zip: "94133",
    isOwner: "true"
})
const u2 = User.create({
  firstName: "Frederic",
  lastName: "Harber",
  email: "shara.botsford@rempelgislason.name",
  password: "q2aw31",
  password2: "q2aw31",
  city: "San Francisco",
  state: "CA",
  zip: "94133",
  isOwner: "true"
});
const u3 = User.create({
  firstName: "Pearlene",
  lastName: "Terry",
  email: "vanesa_waelchi@steuber.io",
  password: "pmsve5",
  password2: "pmsve5",
  city: "San Francisco",
  state: "CA",
  zip: "94133",
  isOwner: "true"
});
const u4 = User.create({
  firstName: "Mohammad",
  lastName: "O'Reilly",
  email: "ferne@thielwisozk.net",
  password: "ya4dpt",
  password2: "ya4dpt",
  city: "San Francisco",
  state: "CA",
  zip: "94133",
  isOwner: "true"
});
const u5 = User.create({
  firstName: "Teressa",
  lastName: "Beier",
  email: "kip@wunschmcglynn.co",
  password: "m47doe",
  password2: "m47doe",
  city: "San Francisco",
  state: "CA",
  zip: "94133",
  isOwner: "true"
});
const u6 = User.create({
  firstName: "Jerrell",
  lastName: "Price",
  email: "xiao_wunsch@lubowitz.co",
  password: "j068s7",
  password2: "j068s7",
  city: "San Francisco",
  state: "CA",
  zip: "94133",
  isOwner: "true"
});

console.log("test")

// User.create(user)