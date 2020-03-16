const Validator = require('validator');

module.exports = function validateLoginInput(data) {
    let errors = {};

    if (Validator.isEmpty(data.ownerId)) {
        errors.ownerId = 'Owner Id field is required'
    };

    if (Number.isInteger(data.ownerId)) {
        errors.ownerId = 'Owener Id field must be an integer'
    };

    if (Validator.isEmpty(data.renterId)) {
        errors.renterId = 'Renter Id field is required'
    };

    if (Number.isInteger(data.renterId)) {
        errors.renterId = 'Renter Id field must be an integer'
    };

    if (Validator.isEmpty(data.puppyId)) {
        errors.puppyId = 'Puppy Id field is required'
    };

    if (Number.isInteger(data.puppyId)) {
        errors.puppyId = 'Puppy Id field must be an integer'
    };

    if (Validator.isEmpty(data.date)) {
        errors.date = 'Date field is required'
    };

    if (Validator.isEmpty(data.timeStart)) {
        errors.timeStart = 'Start time field is required'
    };

    if (Validator.isEmpty(data.duration)) {
        errors.duration = 'Duration field is required'
    };

    if (Validator.isEmpty(data.statusId)) {
        errors.statusId = 'Status field is required'
    };

    if (Validator.isEmpty(data.totalCost)) {
        errors.totalCost = 'Total cost field is required'
    };


}