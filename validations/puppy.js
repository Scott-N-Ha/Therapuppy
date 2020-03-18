const Validator = require('validator');
const validText = require("./valid_text");

module.exports = function validatePuppyInput(data) {
    let errors = {};

    data.name = validText(data.name) ? data.name : "";
    data.sex = validText(data.sex) ? data.sex : "";
    
    
    // if (Validator.isEmpty(data.owner)) {
    //     errors.owner = "Owner field is required"
    // };
    
    // if (Validator.isEmpty(data.renter)) {
    //     errors.renter = "Renter field is required"
    // };
    
    if (Validator.isEmpty(data.name)){
        errors.name = "Name field is required"
    };

    if (!Validator.isInt(data.age)) {
        errors.age = "Age must be integer"
    };

    if (Validator.isEmpty(data.age)){
        errors.age = "Age field is required"
    };

    if (Validator.isEmpty(data.breed)){
        errors.breed = "Breed field is required"
    };

    if (!Validator.isInt(data.breed)) {
      errors.breed = "Breed field must be an integer"
    }

    if (!Validator.isInt(data.fluffyRating, {min: 1, max: 5})) {
        errors.fluffyRating = "Fluffy rating must be integer"
    };
    
    if (Validator.isEmpty(data.fluffyRating)){
        errors.fluffyRating = "Fluffy rating field is required"
    };

    if (Validator.isEmpty(data.earType)){
        errors.earType = "Ear type field is required"
    };

    if(!Validator.isInt(data.earType)) {
      errors.earType = "Ear type fied must be an integer"
    }

    if (Validator.isEmpty(data.sex)) {
        errors.sex = "Sex field is required"
    };

    if (!Validator.isInt(data.natureRating, {min: 1, max: 10})) {
        errors.natureRating = "Nature rating must be integer"
    };

    if (Validator.isEmpty(data.natureRating)) {
        errors.natureRating = "Nature rating field is required"
    };

    if (!Validator.isInt(data.price)) {
        errors.price = "Price must be integer"
    };

    if (Validator.isEmpty(data.price)) {
        errors.price = "Price field is required"
    };

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }

};