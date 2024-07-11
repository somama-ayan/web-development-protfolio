const { type } = require("express/lib/response")
const { required, date } = require("joi")
const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        min: 3,
        max: 20,
        required: true
    },
    email: {
        type: String,
        min: 5,
        max: 20,
        required: true
    },
    password: {
        type: String,
        min: 8,
        max: 20,
        required: true
    },
    address: {
        type: String,
        min: 3,
        max: 20,
        required: false
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("usernews", userSchema)

