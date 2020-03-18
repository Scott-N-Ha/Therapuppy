const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');
const db = require("./config/keys.js").mongoURI;
const validateRegisterInput = require("./validations/register");
const validatePuppyInput = require("./validations/puppy");
const User = require('./models/User');
const users = require("./routes/api/users")
const puppies = require("./routes/api/puppies")
const bookings = require("./routes/api/bookings")

const app = express();

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB."))
  .catch(err => console.log(err));
// const user = {
//   username: "testtest",
//   firstName: "test",
//   lastName: "test",
//   email: "test@aa.io",
//   password: "password",
//   password2: "password",
//   isOwner: "",
//   address1: "852 Battery Street",
//   address2: "Bino",
//   city: "San Francisco",
//   state: "CA",
//   zip: "98004"
// };

// const validator  = validateRegisterInput(user);
// if (validator.isValid){
//   User.create(user)
// } else {
//   console.log(validator.errors)
// }

app.use(passport.initialize());
require('./config/passport.js')(passport);

app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("its running");
});

app.use("/api/users", users); 
app.use("/api/puppies", puppies); 
// app.unsubscribe("/api/bookings", bookings);

const port = process.env.PORT || 5000;


app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});


