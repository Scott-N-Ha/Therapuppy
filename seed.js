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
const Puppy = require('./models/Puppy');
const users = require("./routes/api/users");
const puppies = require("./routes/api/puppies");
const bookings = require("./routes/api/bookings");
const Breed = require('./models/Breed');
const Status = require('./models/Status')
const keys = require('./config/keys')

const app = express();

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB."))
    .catch(err => console.log(err));

const u1 = {
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
}
const u2 = {"firstName":"Earle","lastName":"Kuhlman","username":"EarleKuhlman","email":"glynis@lindgren.com","password":"yngcp6","password2":"yngcp6","address1":"4637 Brett Islands","city":"San Francisco","state":"CA","zip":"94133","isOwner":"true"}
const u3 = {"firstName":"Janiece","lastName":"Gleason","username":"JanieceGleason","email":"yael_medhurst@rippin.net","password":"80mkrj","password2":"80mkrj","address1":"1226 Blick Landing","city":"San Francisco","state":"CA","zip":"94133","isOwner":"true"}
const u4 = {"firstName":"Myron","lastName":"Rowe","username":"MyronRowe","email":"doug_hodkiewicz@mueller.info","password":"aygq5e","password2":"aygq5e","address1":"94833 Curt Mission","city":"San Francisco","state":"CA","zip":"94133","isOwner":"true"}
const u5 = {"firstName":"Aubrey","lastName":"Balistreri","username":"AubreyBalistreri","email":"alonzo_reinger@harris.io","password":"8qbhkr","password2":"8qbhkr","address1":"960 Bashirian Ridges","city":"San Francisco","state":"CA","zip":"94133","isOwner":"true"}
const u6 = {"firstName":"Benedict","lastName":"Botsford","username":"BenedictBotsford","email":"palmer@kreigeryundt.io","password":"f5amwc","password2":"f5amwc","address1":"258 Ileana Isle","city":"San Francisco","state":"CA","zip":"94133","isOwner":"true"}
const u7 = {"firstName":"Soon","lastName":"Doyle","username":"SoonDoyle","email":"judson@king.io","password":"091oil","password2":"091oil","address1":"2313 Towne Oval","city":"San Francisco","state":"CA","zip":"94133","isOwner":"true"}
const u8 = {"firstName":"Johnie","lastName":"Flatley","username":"JohnieFlatley","email":"marlene_kuhic@gusikowski.name","password":"t3lpvh","password2":"t3lpvh","address1":"8930 Schoen Road","city":"San Francisco","state":"CA","zip":"94133","isOwner":"true"}
const u9 = {"firstName":"Ronnie","lastName":"Carter","username":"RonnieCarter","email":"damon@nienowosinski.com","password":"0aqvco","password2":"0aqvco","address1":"202 Lowell Villages","city":"San Francisco","state":"CA","zip":"94133","isOwner":"true"}
const u10 = {"firstName":"Idalia","lastName":"Grant","username":"IdaliaGrant","email":"yang@koeppharvey.io","password":"nha902","password2":"nha902","address1":"164 Moen Mountains","city":"San Francisco","state":"CA","zip":"94133","isOwner":"true"}
const u11 = {"firstName":"Edmundo","lastName":"Gutkowski","username":"EdmundoGutkowski","email":"paz@hirthe.name","password":"75y8ir","password2":"75y8ir","address1":"3009 Janine Crossroad","city":"San Francisco","state":"CA","zip":"94133","isOwner":"true"}
const u12 = { "firstName": "Norberto", "lastName": "Dickens", "username": "NorbertoDickens", "email": "devin@runolfsdottir.biz", "password": "tjintu", "password2": "tjintu", "address1": "6608 Langworth Wells", "city": "San Francisco", "state": "CA", "zip": "94133", "isOwner": "true" }
const u13 = { "firstName": "Francesco", "lastName": "Powlowski", "username": "FrancescoPowlowski", "email": "henry@lockman.com", "password": "g7vroi", "password2": "g7vroi", "address1": "6540 Beata Mission", "city": "San Francisco", "state": "CA", "zip": "94133", "isOwner": "true" }
const u14 = { "firstName": "Consuelo", "lastName": "Kuphal", "username": "ConsueloKuphal", "email": "fay@collins.name", "password": "sja1uw", "password2": "sja1uw", "address1": "60762 Virgil Springs", "city": "San Francisco", "state": "CA", "zip": "94133", "isOwner": "true" }
const u15 = { "firstName": "Hassie", "lastName": "Koss", "username": "HassieKoss", "email": "david@ziemebergnaum.info", "password": "ukoiio", "password2": "ukoiio", "address1": "886 Armstrong Dam", "city": "San Francisco", "state": "CA", "zip": "94133", "isOwner": "true" }
const u16 = { "firstName": "Ashlea", "lastName": "Ebert", "username": "AshleaEbert", "email": "calvin.harris@king.co", "password": "qk2phd", "password2": "qk2phd", "address1": "56901 Whitney Mountain", "city": "San Francisco", "state": "CA", "zip": "94133", "isOwner": "false" }
const u17 = { "firstName": "Gilbert", "lastName": "Witting", "username": "GilbertWitting", "email": "alfredo@pollich.org", "password": "rfhc0j", "password2": "rfhc0j", "address1": "93378 Williamson Locks", "city": "San Francisco", "state": "CA", "zip": "94133", "isOwner": "false" }
const u18 = { "firstName": "Marcel", "lastName": "Tillman", "username": "MarcelTillman", "email": "annabell_yost@gleichnerosinski.org", "password": "3cibph", "password2": "3cibph", "address1": "29063 Issac Mission", "city": "San Francisco", "state": "CA", "zip": "94133", "isOwner": "false" }
const u19 = { "firstName": "Carrol", "lastName": "Weber", "username": "CarrolWeber", "email": "heriberto_mraz@heaney.co", "password": "me0vb4", "password2": "me0vb4", "address1": "281 Lauren Viaduct", "city": "San Francisco", "state": "CA", "zip": "94133", "isOwner": "false" }
const u20 = { "firstName": "Nelle", "lastName": "Kautzer", "username": "NelleKautzer", "email": "hilario_wiegand@nicolashodkiewicz.com", "password": "2xrk8t", "password2": "2xrk8t", "address1": "7886 Homenick Plaza", "city": "San Francisco", "state": "CA", "zip": "94133", "isOwner": "false" }
const u21 = { "firstName": "Cherryl", "lastName": "Lakin", "username": "CherrylLakin", "email": "evangelina@weimannhaley.com", "password": "4era31", "password2": "4era31", "address1": "743 Rohan Rest", "city": "San Francisco", "state": "CA", "zip": "94133", "isOwner": "false" }
const u22 = { "firstName": "Signe", "lastName": "Windler", "username": "SigneWindler", "email": "rupert.grimes@kling.com", "password": "2nt1ga", "password2": "2nt1ga", "address1": "4222 Torphy Mission", "city": "San Francisco", "state": "CA", "zip": "94133", "isOwner": "false" }
const u23 = { "firstName": "Wilfred", "lastName": "Haag", "username": "WilfredHaag", "email": "orval@macgyver.name", "password": "eujevd", "password2": "eujevd", "address1": "9076 Waylon Inlet", "city": "San Francisco", "state": "CA", "zip": "94133", "isOwner": "false" }
const u24 = { "firstName": "Winnie", "lastName": "Herzog", "username": "WinnieHerzog", "email": "foster@bergstrom.name", "password": "7rbdcm", "password2": "7rbdcm", "address1": "459 Russel Fords", "city": "San Francisco", "state": "CA", "zip": "94133", "isOwner": "false" }
const u25 = { "firstName": "Lily", "lastName": "Parker", "username": "LilyParker", "email": "alfredo@block.biz", "password": "hyhx7n", "password2": "hyhx7n", "address1": "4811 Robel Haven", "city": "San Francisco", "state": "CA", "zip": "94133", "isOwner": "false" }
const u26 = { "firstName": "Jamal", "lastName": "Schiller", "username": "JamalSchiller", "email": "cierra@carroll.com", "password": "8keinj", "password2": "8keinj", "address1": "7718 Wilkinson Place", "city": "San Francisco", "state": "CA", "zip": "94133", "isOwner": "false" }
const u27 = { "firstName": "Cory", "lastName": "Fritsch", "username": "CoryFritsch", "email": "loida@walter.com", "password": "z5fxxq", "password2": "z5fxxq", "address1": "17194 VonRueden Knoll", "city": "San Francisco", "state": "CA", "zip": "94133", "isOwner": "false" }
const u28 = { "firstName": "Deedra", "lastName": "Corwin", "username": "DeedraCorwin", "email": "caleb@kreiger.io", "password": "nknunw", "password2": "nknunw", "address1": "842 Dirk Mission", "city": "San Francisco", "state": "CA", "zip": "94133", "isOwner": "false" }
const u29 = { "firstName": "Josh", "lastName": "Quigley", "username": "JoshQuigley", "email": "alison.vandervort@dibbertpurdy.info", "password": "1z14xr", "password2": "1z14xr", "address1": "52830 Erin Extensions", "city": "San Francisco", "state": "CA", "zip": "94133", "isOwner": "false" }
const u30 = { "firstName": "Emely", "lastName": "Price", "username": "EmelyPrice", "email": "georgiann.kemmer@becker.info", "password": "7c2cg6", "password2": "7c2cg6", "address1": "72328 Alec Burg", "city": "San Francisco", "state": "CA", "zip": "94133", "isOwner": "false" }
const u31 = { "firstName": "Val", "lastName": "McKenzie", "username": "ValMcKenzie", "email": "elvera_rempel@gradyemard.net", "password": "73v48k", "password2": "73v48k", "address1": "8701 Carmon Freeway", "city": "San Francisco", "state": "CA", "zip": "94133", "isOwner": "false" }

const userArray = [u1, u2, u3, u4, u5, u6, u7, u8, u9, u10, u11, u12, u13, u14, u15, u16, u17, u18, u19, u20, u21, u22, u23, u24, u25, u26, u27, u28, u29, u30, u31]

User.find().then( users => {
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
})

const owners = [ 
  "5e75bf8b1a0d110a5e227e38",
  "5e75bf8b1a0d110a5e227e37",
  "5e75bf8b1a0d110a5e227e3a",
  "5e75bf8b1a0d110a5e227e3b",
  "5e75bf8b1a0d110a5e227e39",
  "5e75bf8b1a0d110a5e227e3d",
  "5e75bf8b1a0d110a5e227e3e",
  "5e75bf8b1a0d110a5e227e3c",
  "5e75bf8b1a0d110a5e227e3f",
  "5e75bf8b1a0d110a5e227e41",
  "5e75bf8b1a0d110a5e227e43",
  "5e75bf8b1a0d110a5e227e42",
  "5e75bf8b1a0d110a5e227e44",
  "5e75bf8b1a0d110a5e227e40",
  "5e75bf8b1a0d110a5e227e45" ]

const p1 = Puppy.create({ owner: owners[Math.floor(Math.random() * owners.length)], name: "Elyana",age "4", breed: "111", fluffyRating: "2", earType: "12", sex: "F", natureRating: "3", price: "30", photo: keys.s3FileUrl + "Elyana.jpg", s3Key: "Elyana.jpg"  })
const p2 = Puppy.create({ owner: owners[Math.floor(Math.random() * owners.length)], name: "Jaehaerys", age: "1", breed: "515", fluffyRating: "3", earType: "1", sex: "M", natureRating: "3", price: "30", photo: keys.s3FileUrl + "Jaehaerys.jpg", s3Key: "Jaehaerys.jpg"  })
const p3 = Puppy.create({ owner: owners[Math.floor(Math.random() * owners.length)], name: "Edwyd", age: "5", breed: "499", fluffyRating: "1", earType: "1", sex: "M", natureRating: "2", price: "20", photo: keys.s3FileUrl + "Edwyd.jpg", s3Key: "Edwyd.jpeg"  })
const p4 = Puppy.create({ owner: owners[Math.floor(Math.random() * owners.length)], name: "Endehar", age: "3", breed: "260", fluffyRating: "2", earType: "7", sex: "M", natureRating: "4", price: "40", photo: keys.s3FileUrl + "Endehar.jpg", s3Key: "Endehar.jpg"  })
const p5 = Puppy.create({ owner: owners[Math.floor(Math.random() * owners.length)], name: "Rickard", age: "5", breed: "454", fluffyRating: "3", earType: "3", sex: "M", natureRating: "3", price: "40", photo: keys.s3FileUrl + "Rickard.jpg", s3Key: "Rickard.jpg"  })
const p6 = Puppy.create({ owner: owners[Math.floor(Math.random() * owners.length)], name: "Sylas", age: "1", breed: "7", fluffyRating: "3", earType: "11", sex: "M", natureRating: "5", price: "50", photo: keys.s3FileUrl + "Sylas.jpg", s3Key: "Sylas.jpg"  })
const p7 = Puppy.create({ owner: owners[Math.floor(Math.random() * owners.length)], name: "Rolly", age: "1", breed: "130", fluffyRating: "2", earType: "7", sex: "M", natureRating: "3", price: "50", photo: keys.s3FileUrl + "Rolly.jpg", s3Key: "Rolly.jpg"  })
const p8 = Puppy.create({ owner: owners[Math.floor(Math.random() * owners.length)], name: "Joss", age: "1", breed: "142", fluffyRating: "1", earType: "10", sex: "M", natureRating: "1", price: "30", photo: keys.s3FileUrl + "Joss.jpg", s3Key: "Joss.jpg"  })
const p9 = Puppy.create({ owner: owners[Math.floor(Math.random() * owners.length)], name: "Arrec", age: "2", breed: "146", fluffyRating: "5", earType: "11", sex: "M", natureRating: "3", price: "50", photo: keys.s3FileUrl + "Arrec.jpg", s3Key: "Arrec.jpg"  })
const p10 = Puppy.create({ owner: owners[Math.floor(Math.random() * owners.length)], name: "Orbelo", age: "4", breed: "425", fluffyRating: "5", earType: "7", sex: "M", natureRating: "3", price: "50", photo: keys.s3FileUrl + "Orbelo.jpg", s3Key: "Orbelo.jpg"  })
const p11 = Puppy.create({ owner: owners[Math.floor(Math.random() * owners.length)], name: "Dyah", age: "3", breed: "397", fluffyRating: "1", earType: "7", sex: "F", natureRating: "2", price: "30", photo: keys.s3FileUrl + "Dyah.jpg", s3Key: "Dyah.jpg"  })
const p12 = Puppy.create({ owner: owners[Math.floor(Math.random() * owners.length)], name: "Mag", age: "4", breed: "473", fluffyRating: "1", earType: "3", sex: "F", natureRating: "5", price: "30", photo: keys.s3FileUrl + "Mag.jpg", s3Key: "Mag.jpg"  })
const p13 = Puppy.create({ owner: owners[Math.floor(Math.random() * owners.length)], name: "Joyeuse", age: "1", breed: "162", fluffyRating: "1", earType: "7", sex: "F", natureRating: "3", price: "30", photo: keys.s3FileUrl + "Joyeuse.jpg", s3Key: "Joyeuse.jpg"  })
const p14 = Puppy.create({ owner: owners[Math.floor(Math.random() * owners.length)], name: "Oswyn", age: "2", breed: "431", fluffyRating: "4", earType: "11", sex: "M", natureRating: "4", price: "50", photo: keys.s3FileUrl + "Oswyn.jpg", s3Key: "Oswyn.jpg"  })
const p15 = Puppy.create({ owner: owners[Math.floor(Math.random() * owners.length)], name: "Sedgekins", age: "1", breed: "521", fluffyRating: "2", earType: "11", sex: "M", natureRating: "3", price: "40", photo: keys.s3FileUrl + "Sedgekins.jpg", s3Key: "Sedgekins.jpg"  })
const p16 = Puppy.create({ owner: owners[Math.floor(Math.random() * owners.length)], name: "Hake", age: "2", breed: "203", fluffyRating: "1", earType: "11", sex: "M", natureRating: "6", price: "50", photo: keys.s3FileUrl + "Hake.jpg", s3Key: "Hake.jpg"  })
const p17 = Puppy.create({ owner: owners[Math.floor(Math.random() * owners.length)], name: "Jonothor", age: "3", breed: "221", fluffyRating: "2", earType: "11", sex: "M", natureRating: "5", price: "50", photo: keys.s3FileUrl + "Jonothor.jpg", s3Key: "Jonothor.jpg"  })
const p18 = Puppy.create({ owner: owners[Math.floor(Math.random() * owners.length)], name: "Belis", age: "4", breed: "448", fluffyRating: "2", earType: "3", sex: "F", natureRating: "3", price: "50", photo: keys.s3FileUrl + "Belis.jpg", s3Key: "Belis.jpg"  })
const p19 = Puppy.create({ owner: owners[Math.floor(Math.random() * owners.length)], name: "Ramsay", age: "1", breed: "171", fluffyRating: "2", earType: "11", sex: "M", natureRating: "3", price: "50", photo: keys.s3FileUrl + "Ramsay.jpg", s3Key: "Ramsay.jpg"  })
const p20 = Puppy.create({ owner: owners[Math.floor(Math.random() * owners.length)], name: "Brynden", age: "2", breed: "363", fluffyRating: "2", earType: "3", sex: "M", natureRating: "3", price: "40", photo: keys.s3FileUrl + "Brynden.jpg", s3Key: "Brynden.jpg"  })
Puppy.create({ owner: owners[Math.floor(Math.random() * owners.length)], name: "Chance", age: "3", breed: "450", fluffyRating: "1", earType: "5", sex: "M", natureRating: "7", price: "30", s3Key: "Chance.jpg" })
Puppy.create({ owner: owners[Math.floor(Math.random() * owners.length)], name: "Chico", age: "1", breed: "454", fluffyRating: "4", earType: "10", sex: "M", natureRating: "4", price: "20", s3Key: "Chico.jpg" })
Puppy.create({ owner: owners[Math.floor(Math.random() * owners.length)], name: "Tank", age: "3", breed: "214", fluffyRating: "3", earType: "11", sex: "M", natureRating: "6", price: "40", s3Key: "Tank.jpg" })
Puppy.create({ owner: owners[Math.floor(Math.random() * owners.length)], name: "Jasmine", age: "1", breed: "454", fluffyRating: "4", earType: "11", sex: "F", natureRating: "3", price: "50", s3Key: "Jasmine.jpg" })
Puppy.create({ owner: owners[Math.floor(Math.random() * owners.length)], name: "Diesel", age: "1", breed: "9", fluffyRating: "3", earType: "11", sex: "M", natureRating: "8", price: "60", s3Key: "Diesel.jpg" })
Puppy.create({ owner: owners[Math.floor(Math.random() * owners.length)], name: "Snoopy", age: "5", breed: "298", fluffyRating: "2", earType: "13", sex: "M", natureRating: "6", price: "70", s3Key: "Snoopy.jpg" })
Puppy.create({ owner: owners[Math.floor(Math.random() * owners.length)], name: "Bailey", age: "4", breed: "454", fluffyRating: "3", earType: "6", sex: "M", natureRating: "10", price: "80", s3Key: "Bailey.jpg" })
Puppy.create({ owner: owners[Math.floor(Math.random() * owners.length)], name: "Oscar", age: "2", breed: "221", fluffyRating: "4", earType: "13", sex: "M", natureRating: "5", price: "40", s3Key: "Oscar.jpeg" })
Puppy.create({ owner: owners[Math.floor(Math.random() * owners.length)], name: "Spike", age: "3", breed: "203", fluffyRating: "1", earType: "2", sex: "M", natureRating: "4", price: "30", s3Key: "Spike.jpg" })
Puppy.create({ owner: owners[Math.floor(Math.random() * owners.length)], name: "Tyson", age: "2", breed: "25", fluffyRating: "1", earType: "12", sex: "M", natureRating: "8", price: "20", s3Key: "Tyson.jpg" })