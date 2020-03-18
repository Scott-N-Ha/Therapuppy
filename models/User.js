const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        index: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        index: true,
        unique: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isOwner: {
        type: Boolean,
        required: true
    },
    address1: {
        type: String,
        required: true
    }, 
    address2: {
        type: String
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zip: {
        type: Number,
        required: true
    },
    puppies:{
        type: [Schema.Types.ObjectId],
        ref: "puppies",
        default: undefined
    }
});

const User = mongoose.model('users', UserSchema);
module.exports = User;