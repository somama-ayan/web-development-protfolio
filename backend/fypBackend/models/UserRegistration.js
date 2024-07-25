const { required } = require("joi")
const mongoose = require("mongoose")


const UserRegist = new mongoose.Schema({
    name: {
        type: String,
        min: 3,
        max: 40,
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
    profilePic: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})
module.exports = new mongoose.model("users" , UserRegist)