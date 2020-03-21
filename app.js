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

const app = express();
const keys = require("./config/keys.js");
app.use(passport.initialize());
require('./config/passport.js')(passport);

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

const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});


