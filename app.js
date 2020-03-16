const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');
const db = require("./config/keys.js").mongoURI;
const validateRegisterInput = require("./validations/register");
const User = require('./models/User');

// const users = require("./routes/api/users.js");
// const tweets = require("./routes/api/tweets.js");
// const User = require("./models/User.js");

// const app = express();

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static('frontend/build'));
//   app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'frontend', 'src', 'index.js'));
//   });
// }
// mongoose
//   .connect(db, { useNewUrlParser: true })
//   .then(() => console.log("Connected to MongoDB."))
//   .catch(err => console.log(err));

const u1 = {
  username: "abc2",
  email: "asdasd@aa.io",
  firstName: "aabc",
  lastName: "bcde",
  password: "password",
  password2: "password",
  isOwner: true,
  address1: "1236 jackson street",
  city: "San Francisco",
  state: "WA",
  zip: "98004"
};

const validator = validateRegisterInput(u1); 

if (validator.isValid){
  console.log("valid")
  console.log(u1);
  // User.create(u1);
}
else {
  console.log(validator.errors);
}
  
// app.use(passport.initialize());
// require('./config/passport.js')(passport);

// app.use(bodyParser.urlencoded({
//   extended: false,
// }));

// app.use(bodyParser.json());

// // app.use("/api/users", users);
// // app.use("/api/tweets", tweets);

// const port = process.env.PORT || 5000;

// app.listen(port, () => {
// 	console.log(`Listening on port ${port}`);
// });

// app.get('/', (req, res) => {
//   res.send(path.resolve(__dirname, 'frontend', 'src', 'index.jsx'));
// });
