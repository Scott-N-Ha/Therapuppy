const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookingSchema = new Schema({
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    renter: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    puppy: {
        type: Schema.Types.ObjectId,
        ref: 'puppies'
    },
    date: {
        type: Date,
        required: true
    },
    status: {
        type: Schema.Types.ObjectId,
        ref: 'statuses'
    },
    totalCost: {
        type: Number,
        required: true
    }
});

const Booking = mongoose.model('bookings', BookingSchema);
module.exports = Booking;

