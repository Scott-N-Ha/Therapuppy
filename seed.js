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
const keys = require('./config/keys')

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
// const u2 = {"firstName":"Earle","lastName":"Kuhlman","username":"EarleKuhlman","email":"glynis@lindgren.com","password":"yngcp6","password2":"yngcp6","address1":"4637 Brett Islands","city":"San Francisco","state":"CA","zip":"94133","isOwner":"false"}
// const u3 = {"firstName":"Janiece","lastName":"Gleason","username":"JanieceGleason","email":"yael_medhurst@rippin.net","password":"80mkrj","password2":"80mkrj","address1":"1226 Blick Landing","city":"San Francisco","state":"CA","zip":"94133","isOwner":"false"}
// const u4 = {"firstName":"Myron","lastName":"Rowe","username":"MyronRowe","email":"doug_hodkiewicz@mueller.info","password":"aygq5e","password2":"aygq5e","address1":"94833 Curt Mission","city":"San Francisco","state":"CA","zip":"94133","isOwner":"false"}
// const u5 = {"firstName":"Aubrey","lastName":"Balistreri","username":"AubreyBalistreri","email":"alonzo_reinger@harris.io","password":"8qbhkr","password2":"8qbhkr","address1":"960 Bashirian Ridges","city":"San Francisco","state":"CA","zip":"94133","isOwner":"false"}
// const u6 = {"firstName":"Benedict","lastName":"Botsford","username":"BenedictBotsford","email":"palmer@kreigeryundt.io","password":"f5amwc","password2":"f5amwc","address1":"258 Ileana Isle","city":"San Francisco","state":"CA","zip":"94133","isOwner":"false"}
// const u7 = {"firstName":"Soon","lastName":"Doyle","username":"SoonDoyle","email":"judson@king.io","password":"091oil","password2":"091oil","address1":"2313 Towne Oval","city":"San Francisco","state":"CA","zip":"94133","isOwner":"false"}
// const u8 = {"firstName":"Johnie","lastName":"Flatley","username":"JohnieFlatley","email":"marlene_kuhic@gusikowski.name","password":"t3lpvh","password2":"t3lpvh","address1":"8930 Schoen Road","city":"San Francisco","state":"CA","zip":"94133","isOwner":"false"}
// const u9 = {"firstName":"Ronnie","lastName":"Carter","username":"RonnieCarter","email":"damon@nienowosinski.com","password":"0aqvco","password2":"0aqvco","address1":"202 Lowell Villages","city":"San Francisco","state":"CA","zip":"94133","isOwner":"false"}
// const u10 = {"firstName":"Idalia","lastName":"Grant","username":"IdaliaGrant","email":"yang@koeppharvey.io","password":"nha902","password2":"nha902","address1":"164 Moen Mountains","city":"San Francisco","state":"CA","zip":"94133","isOwner":"false"}
// const u11 = {"firstName":"Edmundo","lastName":"Gutkowski","username":"EdmundoGutkowski","email":"paz@hirthe.name","password":"75y8ir","password2":"75y8ir","address1":"3009 Janine Crossroad","city":"San Francisco","state":"CA","zip":"94133","isOwner":"false"}
const u12 = { "firstName": "Norberto", "lastName": "Dickens", "username": "NorbertoDickens", "email": "devin@runolfsdottir.biz", "password": "tjintu", "password2": "tjintu", "address1": "6608 Langworth Wells", "city": "San Francisco", "state": "CA", "zip": "94133", "isOwner": "false" }
const u13 = { "firstName": "Francesco", "lastName": "Powlowski", "username": "FrancescoPowlowski", "email": "henry@lockman.com", "password": "g7vroi", "password2": "g7vroi", "address1": "6540 Beata Mission", "city": "San Francisco", "state": "CA", "zip": "94133", "isOwner": "false" }
const u14 = { "firstName": "Consuelo", "lastName": "Kuphal", "username": "ConsueloKuphal", "email": "fay@collins.name", "password": "sja1uw", "password2": "sja1uw", "address1": "60762 Virgil Springs", "city": "San Francisco", "state": "CA", "zip": "94133", "isOwner": "false" }
const u15 = { "firstName": "Hassie", "lastName": "Koss", "username": "HassieKoss", "email": "david@ziemebergnaum.info", "password": "ukoiio", "password2": "ukoiio", "address1": "886 Armstrong Dam", "city": "San Francisco", "state": "CA", "zip": "94133", "isOwner": "false" }
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
const userArray = [u12, u13, u14, u15, u16, u17, u18, u19, u20, u21, u22, u23, u24, u25, u26, u27, u28, u29, u30, u31]
// const userArray = [u2, u3, u4, u5, u6, u7, u8, u9, u10, u11]

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

const p1 = { owner: "", name: "Elyana", age: "4", breed: "111", fluffyRating: "2", earType: "12", sex: "F", natureRating: "3", price: "30", photo: keys.s3FileUrl + "Elyana.jpg", s3_key: "Elyana.jpg"  }
const p2 = { owner: "", name: "Jaehaerys", age: "1", breed: "515", fluffyRating: "3", earType: "1", sex: "M", natureRating: "3", price: "30", photo: keys.s3FileUrl + "Jaehaerys.jpg", s3_key: "Jaehaerys.jpg"  }
const p3 = { owner: "", name: "Edwyd", age: "5", breed: "499", fluffyRating: "1", earType: "1", sex: "M", natureRating: "2", price: "20", photo: keys.s3FileUrl + "Edwyd.jpg", s3_key: "Edwyd.jpg"  }
const p4 = { owner: "", name: "Endehar", age: "3", breed: "260", fluffyRating: "2", earType: "7", sex: "M", natureRating: "4", price: "40", photo: keys.s3FileUrl + "Endehar.jpg", s3_key: "Endehar.jpg"  }
const p5 = { owner: "", name: "Rickard", age: "5", breed: "454", fluffyRating: "3", earType: "3", sex: "M", natureRating: "3", price: "40", photo: keys.s3FileUrl + "Rickard.jpg", s3_key: "Rickard.jpg"  }
const p6 = { owner: "", name: "Sylas", age: "1", breed: "7", fluffyRating: "3", earType: "11", sex: "M", natureRating: "5", price: "50", photo: keys.s3FileUrl + "Sylas.jpg", s3_key: "Sylas.jpg"  }
const p7 = { owner: "", name: "Rolly", age: "1", breed: "130", fluffyRating: "2", earType: "7", sex: "M", natureRating: "3", price: "50", photo: keys.s3FileUrl + "Rolly.jpg", s3_key: "Rolly.jpg"  }
const p8 = { owner: "", name: "Joss", age: "1", breed: "142", fluffyRating: "1", earType: "10", sex: "M", natureRating: "1", price: "30", photo: keys.s3FileUrl + "Joss.jpg", s3_key: "Joss.jpg"  }
const p9 = { owner: "", name: "Arrec", age: "2", breed: "146", fluffyRating: "5", earType: "11", sex: "M", natureRating: "3", price: "50", photo: keys.s3FileUrl + "Arrec.jpg", s3_key: "Arrec.jpg"  }
const p10 = { owner: "", name: "Orbelo", age: "4", breed: "425", fluffyRating: "5", earType: "7", sex: "M", natureRating: "3", price: "50", photo: keys.s3FileUrl + "Orbelo.jpg", s3_key: "Orbelo.jpg"  }
const p11 = { owner: "", name: "Dyah", age: "3", breed: "397", fluffyRating: "1", earType: "7", sex: "F", natureRating: "2", price: "30", photo: keys.s3FileUrl + "Dyah.jpg", s3_key: "Dyah.jpg"  }
const p12 = { owner: "", name: "Mag", age: "4", breed: "473", fluffyRating: "1", earType: "3", sex: "F", natureRating: "5", price: "30", photo: keys.s3FileUrl + "Mag.jpg", s3_key: "Mag.jpg"  }
const p13 = { owner: "", name: "Joyeuse", age: "1", breed: "162", fluffyRating: "1", earType: "7", sex: "F", natureRating: "3", price: "30", photo: keys.s3FileUrl + "Joyeuse.jpg", s3_key: "Joyeuse.jpg"  }
const p14 = { owner: "", name: "Oswyn", age: "2", breed: "431", fluffyRating: "4", earType: "11", sex: "M", natureRating: "4", price: "50", photo: keys.s3FileUrl + "Oswyn.jpg", s3_key: "Oswyn.jpg"  }
const p15 = { owner: "", name: "Sedgekins", age: "1", breed: "521", fluffyRating: "2", earType: "11", sex: "M", natureRating: "3", price: "40", photo: keys.s3FileUrl + "Sedgekins.jpg", s3_key: "Sedgekins.jpg"  }
const p16 = { owner: "", name: "Hake", age: "2", breed: "203", fluffyRating: "1", earType: "11", sex: "M", natureRating: "6", price: "50", photo: keys.s3FileUrl + "Hake.jpg", s3_key: "Hake.jpg"  }
const p17 = { owner: "", name: "Jonothor", age: "3", breed: "221", fluffyRating: "2", earType: "11", sex: "M", natureRating: "5", price: "50", photo: keys.s3FileUrl + "Jonothor.jpg", s3_key: "Jonothor.jpg"  }
const p18 = { owner: "", name: "Belis", age: "4", breed: "448", fluffyRating: "2", earType: "3", sex: "F", natureRating: "3", price: "50", photo: keys.s3FileUrl + "Belis.jpg", s3_key: "Belis.jpg"  }
const p19 = { owner: "", name: "Ramsay", age: "1", breed: "171", fluffyRating: "2", earType: "11", sex: "M", natureRating: "3", price: "50", photo: keys.s3FileUrl + "Ramsay.jpg", s3_key: "Ramsay.jpg"  }
const p20 = { owner: "", name: "Brynden", age: "2", breed: "363", fluffyRating: "2", earType: "3", sex: "M", natureRating: "3", price: "40", photo: keys.s3FileUrl + "Brynden.jpg", s3_key: "Brynden.jpg"  }
