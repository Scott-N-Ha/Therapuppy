const express = require("express");
const router = express.Router();
const passport = require("passport");
const mongoose = require("mongoose");
const Booking = require("../../models/Booking");
const validatePuppyInput = require("../../validations/puppy");
const User = require("../../models/User");
const Puppy = require("../../models/Puppy");
const multer = require("multer");
const keys = require('../../config/keys');

let AWS = require("aws-sdk");
let storage = multer.memoryStorage();
let upload = multer({ storage: storage });

// router.route("/").get((req, res, next) => {
//   Puppy.find(
//     {},
//     null,
//     {
//       sort: { createdAt: 1 }
//     },
//     (err, docs) => {
//       if (err) {
//         return next(err);
//       }
//       res.status(200).send(docs);
//     }
//   );
// });

router.post("/upload", upload.single("file"), function (req, res) {
  const file = req.file;
  const s3FileURL = process.env.AWS_Uploaded_File_URL_LINK;

  let s3bucket = new AWS.S3({
    accessKeyId: keys.accessKeyId,
    secretAccessKey: keys.secretAccessKey,
    region: "us-west-2",
  });

  let params = {
    Bucket: keys.bucketName, 
    Key: file.originalname, 
    Body: file.buffer,
    ContentType: file.mimetype,
    ACL: "public-read"
  };

  s3bucket.upload(params, function (error, data) {
    if (error) { 
      res.status(500).json({ error });
    } else {
      res.send({ data });
      let newFileUploaded = {
        description: req.body.description,
        fileLink: s3FileURL + file.originalname,
        s3_key: params.Key
      };
      // var document = new DOCUMENT(newFileUploaded);
      res.json({newFileUploaded});
      // document.save( (error, newFile) => {
      //   if (error) {
      //     throw error;
      //   }
      // });
    }
  });
});


router.get('/', (req, res) => {
  Puppy.find()
    .populate('owner', '-password')
    .then(puppies => {
      const puppiesResult = {};
      const users = {};
      puppies.forEach( puppy => {
        const owner = puppy.owner;
        users[owner.id] = owner;
        puppy.owner = puppy.owner.id;
        puppiesResult[puppy.id] = puppy;
      }) 

      res.json({puppies: puppiesResult, users});
    })
    .catch(err => res.status(404).json({puppiesnotfound: "no pupppr"})
    ); 
});

router.post('/', 
  // passport.authenticate('jwt', { session: false}),
  (req, res) => {
    const {
      errors,
      isValid
    } = validatePuppyInput(req.body.puppy);

    if (!isValid) {
        return res.status(404).json(errors);
    };
    const { 
      owner, 
      name, 
      age, 
      breed, 
      fluffyRating, 
      earType, 
      sex, 
      natureRating, 
      price 
    } = req.body.puppy
    const newPuppy = new Puppy ({
        owner,
        name,
        age,
        breed,
        fluffyRating,
        earType,
        sex,
        natureRating,
        price
    });

    newPuppy.save()
      .then(puppy => {
        
        User.findById(newPuppy.owner).then(
          user => {
            user.puppies.push(newPuppy.id);
            user.save();
          })
        res.json({puppy});
    })
      .catch(err => res.status(404).json({cantsave: "cant save purrr"}))
  }
);

router.get('/:id', (req, res) => {
  Puppy.findById(req.params.id)
    .populate('owner', '-password')
    .then(puppy => {
      users = puppy.owner
      puppy.owner = puppy.owner.id,
      res.json({puppy, users})
    })
    .catch(err =>
      res.status(404).json({ nopuppyfound: 'No puppy found for id'})    
    );
});


module.exports = router;