import Joi from 'joi'

export const loginSchema = Joi.object({
    Email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
    Password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
})

export const registerSchema = Joi.object({
    Firstname: Joi.string().required(),
    Lastname: Joi.string().required(),
    Email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
    Username: Joi.string().alphanum().min(6).required(),
    Password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    Repeat_password: Joi.ref('Password'),
    Contact: Joi.number().required()

})

export const validateAgent = Joi.object({
    Name: Joi.string().required(),
    Rank: Joi.string().required(),
    Contact: Joi.number().required(),
    Username: Joi.string().alphanum().min(6).required(),
    Id: Joi.string().min(4).required()

})

