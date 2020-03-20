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
const u2 = {"firstName":"Earle","lastName":"Kuhlman","username":"EarleKuhlman","email":"glynis@lindgren.com","password":"yngcp6","password2":"yngcp6","address1":"4637 Brett Islands","city":"San Francisco","state":"CA","zip":"94133","isOwner":"false"}
const u3 = {"firstName":"Janiece","lastName":"Gleason","username":"JanieceGleason","email":"yael_medhurst@rippin.net","password":"80mkrj","password2":"80mkrj","address1":"1226 Blick Landing","city":"San Francisco","state":"CA","zip":"94133","isOwner":"false"}
const u4 = {"firstName":"Myron","lastName":"Rowe","username":"MyronRowe","email":"doug_hodkiewicz@mueller.info","password":"aygq5e","password2":"aygq5e","address1":"94833 Curt Mission","city":"San Francisco","state":"CA","zip":"94133","isOwner":"false"}
const u5 = {"firstName":"Aubrey","lastName":"Balistreri","username":"AubreyBalistreri","email":"alonzo_reinger@harris.io","password":"8qbhkr","password2":"8qbhkr","address1":"960 Bashirian Ridges","city":"San Francisco","state":"CA","zip":"94133","isOwner":"false"}
const u6 = {"firstName":"Benedict","lastName":"Botsford","username":"BenedictBotsford","email":"palmer@kreigeryundt.io","password":"f5amwc","password2":"f5amwc","address1":"258 Ileana Isle","city":"San Francisco","state":"CA","zip":"94133","isOwner":"false"}
const u7 = {"firstName":"Soon","lastName":"Doyle","username":"SoonDoyle","email":"judson@king.io","password":"091oil","password2":"091oil","address1":"2313 Towne Oval","city":"San Francisco","state":"CA","zip":"94133","isOwner":"false"}
const u8 = {"firstName":"Johnie","lastName":"Flatley","username":"JohnieFlatley","email":"marlene_kuhic@gusikowski.name","password":"t3lpvh","password2":"t3lpvh","address1":"8930 Schoen Road","city":"San Francisco","state":"CA","zip":"94133","isOwner":"false"}
const u9 = {"firstName":"Ronnie","lastName":"Carter","username":"RonnieCarter","email":"damon@nienowosinski.com","password":"0aqvco","password2":"0aqvco","address1":"202 Lowell Villages","city":"San Francisco","state":"CA","zip":"94133","isOwner":"false"}
const u10 = {"firstName":"Idalia","lastName":"Grant","username":"IdaliaGrant","email":"yang@koeppharvey.io","password":"nha902","password2":"nha902","address1":"164 Moen Mountains","city":"San Francisco","state":"CA","zip":"94133","isOwner":"false"}
const u11 = {"firstName":"Edmundo","lastName":"Gutkowski","username":"EdmundoGutkowski","email":"paz@hirthe.name","password":"75y8ir","password2":"75y8ir","address1":"3009 Janine Crossroad","city":"San Francisco","state":"CA","zip":"94133","isOwner":"false"}
["u2", "u3", "u4", "u5", "u6", "u7", "u8", "u9", "u10", "u11"]

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
