import Joi from 'joi'

export const loginSchema = Joi.object({
    Username: Joi.string().alphanum().required(),
    Password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
})

export const registerSchema = Joi.object({
    Firstname: Joi.string().required(),
    Lastname: Joi.string().required(),
    Email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    Username: Joi.string().alphanum().min(6).required(),
    Password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    Repeat_password: Joi.ref('Password'),
    Contact: Joi.number().required()

})

