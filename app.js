const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path'); 
let AWS = require("aws-sdk");

const db = require("./config/keys.js").mongoURI;
const validateRegisterInput = require("./validations/register.js");
const validatePuppyInput = require("./validations/puppy.js");
const User = require('./models/User.js');
const users = require("./routes/api/users.js")
const puppies = require("./routes/api/puppies.js")
const bookings = require("./routes/api/bookings.js")

const keys = require("./config/keys.js");

const app = express();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'src', 'index.js'));
  })
}

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

// const samoyed = {
//   name: "samoyed",
//   description: "The Samoyed is a substantial but graceful dog standing anywhere from 19 to a bit over 23 inches at the shoulder. Powerful, tireless, with a thick all-white coat impervious to cold—Sammies are perfectly beautiful but highly functional. Even their most delightful feature, a perpetual smile, has a practical function: The upturned corners of the mouth keep Sammies from drooling, preventing icicles from forming on the face."
// }

// const validator = validatePuppyInput(samoyed);
// if (validator.isValid){
//   Puppy.create(samoyed)
// } else {
//   console.log(validator.errors)
// }

app.use(passport.initialize());
require('./config/passport.js')(passport);

app.use(bodyParser.urlencoded({
  extended: true, 
}));
  
app.use(bodyParser.json());
 
app.get("/test", (req, res) => {
  const urlParams = {
    Bucket: "therapuppy-test",
    Key: "159ccedd-7ea9-420e-a741-61f228d7575a.jpeg"
  };
  let s3bucket = new AWS.S3({
    accessKeyId: keys.accessKeyId,
    secretAccessKey: keys.secretAccessKey,
    region: "us-west-3"
  });

  s3bucket.getSignedUrl("getObject", urlParams, (err, url) => {
    console.log(url);
  });
  
  res.send("its running");
});

app.use("/api/users", users); 
app.use("/api/puppies", puppies); 
app.use("/api/bookings", bookings); 
// app.unsubscribe("/api/bookings", bookings);

const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});


