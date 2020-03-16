const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookingSchema = new Schema({
    ownerId: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    renterId: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    puppyId: {
        type: Schema.Types.ObjectId,
        ref: 'puppies'
    },
    date: {
        type: Date,
        required: true
    },
    timeStart: {
        type: Date,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    timeEnd: {
        type: Date,
        require: true
    },
    statusId: {
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

