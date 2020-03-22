const express = require("express");
const bcrypt = require('bcryptjs');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;

const validateRegisterInput = require('../../validations/register.js');
const validateLoginInput = require('../../validations/login.js');
const User = require('../../models/User.js');
const keys = require('../../config/keys.js');
const Puppy = require('../../models/Puppy.js');
const Booking = require('../../models/Booking.js');
const { fetchUrl } = require("./util");

const fetchPuppies = user => {
  return Puppy.find({ _id: user.puppies })
    .then(res => {
      const puppies = {};
			res.forEach(puppy => {
				puppy.photo = fetchUrl(puppy);
				(puppies[puppy.id] = puppy)
			}
			);
      return puppies;
    });
};

const fetchBookings = user => {
  const userId = new ObjectId(user._id);
  return Booking.find({
    $or: [{ owner: userId }, { renter: userId }]
	})
	.populate('renter', '-password')
	.populate('owner', '-password')
	.then(res => { 
    const bookings = {};
    res.forEach(el => (bookings[el.id] = el));
    return bookings;
  });
};

const selectFields = (user) => {
	return {
		_id: user.id,
		username: user.username, 
		email: user.email,
		firstName: user.firstName, 
		lastName: user.lastName, 
		address1: user.address1,
		address2: user.address2, 
		city: user.city,
		state: user.state,
		zip: user.zip,
		isOwner: user.isOwner
	};
}

router.post("/register", (req, res) => {
	const {
		errors,
		isValid
	} = validateRegisterInput(req.body.user);

	if (!isValid) {
		return res.status(404).json(errors);
	};

	User.findOne({
			email: req.body.email
		})
		.then(user => {
			if (user) {
				errors.handle = "Email already exists";
				return res.status(404).json(errors);
			} else {
				const {
					username,
					email,
					firstName,
					lastName,
					password,
					isOwner,
					address1,
					address2,
					city,
					state,
					zip
				} = req.body.user
				const newUser = new User({
					username,
					email,
					firstName,
					lastName,
					password,
					isOwner,
					address1,
					address2,
					city,
					state,
					zip,
				});

				bcrypt.genSalt(10, (err, salt) => {
					bcrypt.hash(newUser.password, salt, (err, hash) => {
						if (err) throw err;
						newUser.password = hash;
						newUser.save()
						.then(user => {
								const payload = selectFields(user);;

								jwt.sign(payload, keys.secretOrKey, {
									expiresIn: 3600
								}, (err, token) => {

									res.json({
										success: true,
										token: "Bearer " + token,
										user: payload
									});
								});
							})
							.catch(err => res.status(404).json({registerFail: err}));
					});
				});

			};
		});
});

router.post("/login", (req, res) => {
	const {
		errors,
		isValid
	} = validateLoginInput(req.body.user);

	if (!isValid) {
		return res.status(404).json(errors);
	};

	const {
		email,
		password
	} = req.body.user

	User.findOne({
		email
	})
	.then(user => {
		if (!user) {
			errors.email = "This email does not exist";
			return res.status(404).json(errors);
		};
		console.log("success");

		bcrypt.compare(password, user.password).then(isMatch => {
			if (isMatch) {
				const payload = selectFields(user);

				jwt.sign(payload, keys.secretOrKey, {
					expiresIn: 3600
				}, (err, token) => {
					console.log("Login success");
					return res.json({
						sucess: true,
						token: "Bearer " + token,
						user: payload
					});
				});
			} else {
				errors.password = "Incorrect password";
				return res.status(404).json(errors);
			};
		});
	});
});

router.get('/current', passport.authenticate('jwt', {
	session: false
}), (req, res) => {
	res.json({
		id: req.user.id,
		username: req.user.username,
		email: req.user.email
	});
});

router.get('/', (req, res) => {
	User.find()
		.then(users => res.json(users))
		.catch(err => 
			res.status(404).json({
					noUsersFound: "No users found"
			}) 
		) 
}) 

router.get("/:username", (req,res) => {
	User
	.findOne({username: req.params.username})
	.then( (user) => {
		fetchPuppies(user).then(
				puppies => { 
					fetchBookings(user).then(
						bookings => {
							return res.json({ user, puppies, bookings }) 
					})
		})
	})
	.catch(err => res.status(404).json({userNotFound: "user not found"}))
})

module.exports = router;