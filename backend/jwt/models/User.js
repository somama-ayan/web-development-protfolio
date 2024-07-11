const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        min: 3,
        max: 20,
        required: true 
    },
    lastName: {
        type: String,
        min: 3,
        max: 20,
        required: true
    },
    email: {
        type: String,
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

module.exports = mongoose.model("User", userSchema)