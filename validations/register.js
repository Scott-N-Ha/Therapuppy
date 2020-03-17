const Validator = require('validator');
const validText = require("./valid_text");

module.exports = function validateRegisterInput(data) {
    let errors = {};

    data.username = validText(data.username) ? data.username : ""
    data.email = validText(data.email) ? data.email : ""
    data.firstName = validText(data.firstName) ? data.firstName : ""
    data.lastName = validText(data.lastName) ? data.lastName : ""
    data.password = validText(data.password) ? data.password : ""
    data.password2 = validText(data.password2) ? data.password2 : ""
    data.address1 = validText(data.address1) ? data.address1 : ""
    data.address2 = validText(data.address2) ? data.address2 : ""
    data.city = validText(data.city) ? data.city : ""
    data.state = validText(data.state) ? data.state : ""

    
    if (Validator.isEmpty(data.username)) {
        errors.username = 'Username field is required'
    };
    
    if (Validator.isEmpty(data.email)) {
        errors.email = 'Email field is required'
    };
    
    if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid"
    };
    
    if (Validator.isEmpty(data.password)) {
        errors.password = "Password field is required"
    };

    if (!Validator.isLength(data.password, { min: 6 })) {
        errors.password = 'Password must be at least 6 characters'
    };

    if (!Validator.equals(data.password, data.password2)) {
        errors.password2 = "Passwords must match"
    };

    if (Validator.isEmpty(data.firstName)) {
        errors.firstName = "First name field is required"
    };

    if (Validator.isEmpty(data.lastName)) {
        errors.lastName = "Last name field is required"
    };

    if (Validator.isEmpty(data.address1)) {
        errors.address1 = "Address 1 field is required"
    };

    // if (Validator.isBoolean(data.isOwner)){
    //     errors.isOwner = "isOwner must be a boolean"
    // };

    if (Validator.isEmpty(data.city)) {
        errors.city = "City field is required"
    };

    if (Validator.isEmpty(data.state)) {
        errors.state = "State field is required"
    };

    if (!Validator.isInt(data.zip)){
        errors.zip = "Zip must be integer"
    };

    if (Validator.isEmpty(data.zip)){
        errors.zip = "Zip field is required"
    };

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }

};