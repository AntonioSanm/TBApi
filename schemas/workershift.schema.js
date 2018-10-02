var Joi = require('joi');

var workersSchema = {
    id: Joi.number().required().error(new Error('Id is required and must be a number')),
    availability: Joi.array().items(Joi.string().valid('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday')).error(new Error('Must be a valid day of the week (Not weekends)')),
    payrate: Joi.number().error(new Error('Payrate must be a number'))
};

var shiftsSchema = {
    id: Joi.number().error(new Error('Id is required and must be a number')),
    day: Joi.array().items(Joi.string().valid('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday')).error(new Error('Must be a valid day of the week (Not weekends)'))
};

module.exports =  Joi.object().keys({
    workers: Joi.array().items(workersSchema).required().error(new Error('Workers are required as an array')),
    shifts: Joi.array().items(shiftsSchema).required().error(new Error('Shifts are required as an array'))
})