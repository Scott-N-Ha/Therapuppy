const Validator = require('validator');

module.exports = function validateBookingInput(data) {
    let errors = {};

    if (Validator.isEmpty(data.renter.id)) {
        errors.renterId = 'Renter Id field is required'
    };

    if (Validator.isEmpty(data.puppy)) {
        errors.puppyId = 'Puppy Id field is required'
    };
    
    if (Validator.isEmpty(data.date)) {
        errors.date = 'Date field is required'
    };

    return{
        errors,
        isValid: Object.keys(errors).length === 0 
    }
}