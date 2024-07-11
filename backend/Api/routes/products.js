const productsRoute = require("express").Router()
const Products = require("../models/Products");
const productRoute = require("./product");
const verifyToken = require('./verifyToken')

productsRoute.get("/", verifyToken, async(req, res) => {
    try {
        // Fetch all products from the database
        const products = await Products.find();
        // console.log(products)
        res.json(products);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    //  res.send(req.body)
    // Products.find()
    // .then((result) => {
    //     res.send(result)
    // })
    // .catch(err => {
    //     console.log(err)
    // })
    
})


productsRoute.post("/", async(req,res) => {
    const newProd = new Products({
        id: req.body.id,
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        category: req.body.category,
        image: req.body.image,
        rating: {
            rate: req.body.rate,
            count: req.body.count
        }
       
    })
    try {
        const savedProducts = await newProd.save()
        res.send(savedProducts)
    }
    catch (error) {
        res.status(500).send(error)
    }
})




module.exports = productsRoute;