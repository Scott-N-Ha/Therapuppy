const Validator = require('validator');

module.exports = function validateLoginInput(data) {
    let errors = {};

    if (Validator.isEmpty(data.ownerId)) {
        errors.ownerId = 'Owner Id field is required'
    };

    if (Validator.isEmpty(data.renterId)) {
        errors.renterId = 'Renter Id field is required'
    };

    if (Validator.isEmpty(data.puppyId)) {
        errors.puppyId = 'Puppy Id field is required'
    };
    
    if (!Validator.isISO8601(data.date)) {
        errors.date = 'Date field must be in date format'
    };

    if (Validator.isEmpty(data.date)) {
        errors.date = 'Date field is required'
    };

    if (!Validator.isISO8601(data.timeStart)) {
        errors.timeStart = 'Start time must be a time format'
    };

    if (Validator.isEmpty(data.timeStart)) {
        errors.timeStart = 'Start time field is required'
    };

    if (!Validator.isFloat(data.duration)) {
        errors.duration = 'Duration field must be a float'
    };

    if (Validator.isEmpty(data.duration)) {
        errors.duration = 'Duration field is required'
    };

    if (Validator.isISO8601(data.timeEnd)) {
        errors.timeEnd = 'End time field must be in time format'
    };

    if (Validator.isEmpty(data.timeEnd)) {
        errors.timeEnd = 'End time field is required'
    };

    if (Validator.isEmpty(data.statusId)) {
        errors.statusId = 'Status field is required'
    };

    if (Validator.isFloat(data.totalCost)) {
        errors.totalCost = 'Total cost field must be a float'
    };

    if (Validator.isEmpty(data.totalCost)) {
        errors.totalCost = 'Total cost field is required'
    };

}