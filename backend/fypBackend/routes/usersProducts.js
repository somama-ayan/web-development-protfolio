const usersProductsRoute = require('express').Router();
const multer = require('multer');
const UserProd = require('../models/Products')
const productValidationSchema = require('../middleware/productValidation')
const verifyToken = require("../middleware/verifyToken");
////////// get all products ///////////////////////////////////

usersProductsRoute.get('/', async(req, res) => {
    const products = await UserProd.find()
    res.send(products)
})
/////// get single product for product /////
usersProductsRoute.get('/product', async(req,res) =>  {
    const {pid} = req.query.pid
    console.log(pid)
    const findProduct = await UserProd.findOne({_id: req.query.pid})
    console.log(findProduct)
    res.send(findProduct)
})
//////////////////// upload a product ///////////////////
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploadImages/products')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname + Date.now())
    }
})
const upload = multer({ storage: storage })
usersProductsRoute.post('/', upload.single("productImage"), async(req, res) => {
    const { ProductName, ProductCategory, ProductDescription, userId } = req.body
    const ProductImage = req.file.filename
    const data = { ProductName, ProductCategory, ProductDescription, ProductImage }
    const { error } = productValidationSchema(data)
    if (error) return res.send(error.details[0].message)// Guaard clause


    const product = new UserProd({
        ProductName: ProductName,
        ProductCategory: ProductCategory,
        ProductDescription: ProductDescription,
        ProductImage: req.file.filename,
        UserId: userId
    })
    try {
        const savedProductData = await product.save()
        res.send(savedProductData)
    } catch (err) {
        res.status(400).send("Data not saved! ", err)
    }
})


module.exports = usersProductsRoute;