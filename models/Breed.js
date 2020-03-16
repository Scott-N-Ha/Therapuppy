const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BreedSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const Breed = mongoose.model('breeds', BreedSchema);
module.exports = Breed;