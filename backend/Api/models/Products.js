const mongoose = require("mongoose")

const newPrducts = new mongoose.Schema({
    id: Number,
    title: String,
    price: Number,
    description: String,
    category: String,
    image: String,
    rating: {
        rate: Number,
        count: Number
    }
})

module.exports = mongoose.model("products", newPrducts)