const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StatusSchema = new Schema({
    status: {
        type: String,
        required: true
    }
});

const Status = mongoose.model('statuses', StatusSchema);
module.exports = Status;