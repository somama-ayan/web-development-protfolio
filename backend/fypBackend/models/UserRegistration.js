const { required } = require("joi")
const mongoose = require("mongoose")


const UserRegist = new mongoose.Schema({
    name: {
        type: String,
        min: 3,
        max: 40,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        min: 3,
        max: 40,
        required: true
    },
    password: {
        type: String,
        min: 5,
        max: 20,
        required: true
    },
    address: {
        type: String,
        min: 3,
        max: 50,
        required: true
    },
    terms: {
        type: Boolean,
        required: true
    },
    image: {
        type: String,
        default: ''
    },
    bio: {
        type: String,
        default: 'No Bio Available...!'
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})
module.exports = new mongoose.model("users" , UserRegist)