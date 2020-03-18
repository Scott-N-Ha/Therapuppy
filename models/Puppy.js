const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PuppySchema = new Schema({
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    name: {
        type: String, 
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    breed: {
        type: Number
        required: true
    },
    fluffyRating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    earType: {
        type: Number,
        required: true
    },
    sex: {
        type: String,
        enum: ['M','F'],
        required: true
    },
    natureRating: {
        type: Number,
        min: 1,
        max: 10,
        required: true
    },
    price: {
        type: Number, 
        required: true
    }
});

const Puppy = mongoose.model('puppies', PuppySchema);
module.exports = Puppy; 