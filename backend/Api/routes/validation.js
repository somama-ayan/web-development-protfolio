const Joi = require("joi")

function registrationSchema(data) {
    const schema = Joi.object({
        name: Joi
            .string()
            .min(3)
            .max(20)
            .required(),
        email: Joi
            .string()
            .email()
            .min(5)
            .max(30)
            .required(),
        password: Joi
            .string()
            .min(8)
            .max(20)
            .required(),
        address: Joi
            .string()
            .min(3)
            .max(20)
    })
    const valid = schema.validate(data)
    return valid
}

module.exports = registrationSchema