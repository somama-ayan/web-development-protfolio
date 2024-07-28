const Joi = require('joi')

function productValidationSchema(data) {
    const productvalidSchema = Joi.object({
        ProductName: Joi
            .string()
            .required(),
        ProductCategory: Joi
            .string()
            .required(),
        ProductDescription: Joi
            .string()
            .required(),
        ProductImage: Joi
            .string()
            .required()
    })
    const validProduct = productvalidSchema.validate(data)
    return validProduct
}
module.exports = productValidationSchema