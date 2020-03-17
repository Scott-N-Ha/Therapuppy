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
const bookings = require("./routes/api/bookings")

const app = express();

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB."))
  .catch(err => console.log(err));
  
app.use(passport.initialize());
require('./config/passport.js')(passport);

app.use(bodyParser.urlencoded({
  extended: false,
}));

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("its running");
});

// app.use("/api/users", users); 
app.unsubscribe("/api/bookings", bookings);

const port = process.env.PORT || 5000;


app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});


