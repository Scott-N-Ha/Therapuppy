const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path'); 

const db = require("./config/keys.js").mongoURI;
const users = require("./routes/api/users.js")
const puppies = require("./routes/api/puppies.js")
const bookings = require("./routes/api/bookings.js")

const app = express();
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

app.use("/api/users", users); 
app.use("/api/puppies", puppies); 
app.use("/api/bookings", bookings); 

const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});


