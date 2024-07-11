const productRoute = require("express").Router()
const Products = require("../models/Products")
const verifyToken = require("./verifyToken")

productRoute.get("/",verifyToken, async(req,res) =>  {
    const pid = req.query.pid;
    const product = await Products.findOne({id: pid})
    res.send(product)
})

module.exports = productRoute;