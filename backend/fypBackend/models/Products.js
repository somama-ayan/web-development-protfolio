const mongoose = require('mongoose')
const { required } =  require('joi')

const UsersProd = new mongoose.Schema({
    ProductName: {
        type: String,
        required: true
    },
    ProductCategory: {
        type: String,
        required: true
    },
    ProductDescription: {
        type: String,
        required: true
    },
    ProductImage: {
        type: String,
        required: true
    },
    UserId: {
        type: String, 
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
    
})

module.exports = new mongoose.model("products", UsersProd)