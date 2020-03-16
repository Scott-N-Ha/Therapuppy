const Validator = require('validator');
const validText = require("./valid_text");

module.exports = function validatePuppyInput(data) {
    let errors = {};

    data.name = validText(data.name) ? data.name : "";
    data.sex = validText(data.sex) ? data.sex : "";
    
    if (Validator.isEmpty(data.name))


};