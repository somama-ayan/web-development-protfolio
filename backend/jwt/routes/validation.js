const Joi = require("joi")

function regSchema(data) {
    const schema = Joi.object({
        firstName: Joi
            .string()
            .min(3)
            .max(20)
            .required(),
        lastName: Joi
            .string()
            .min(3)
            .max(20)
            .required(),
        email: Joi
            .string()
            .email()
            .required(),
        password: Joi
            .string()
            .min(6)
            .max(20)
            .required(),
        address: Joi
            .string()
            .min(6)
            .max(20)
    })
    const valid = schema.validate(data)
    return valid
}

module.exports = regSchema