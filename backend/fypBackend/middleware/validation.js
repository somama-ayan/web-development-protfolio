const Joi = require("joi")

function userRegValidSchema(data) {
    const regSchema = Joi.object({
        name: Joi
            .string()
            .min(3)
            .max(40)
            .required(),
        email: Joi
            .string()
            .min(3)
            .max(40)
            .required(),
        password: Joi
            .string()
            .min(5)
            .max(20)
            .required(),
        address: Joi
            .string()
            .min(3)
            .max(50)
            .required(),
        terms: Joi
            .boolean()
            .required()
    })
    const validUser = regSchema.validate(data)
    return validUser
}
module.exports = userRegValidSchema