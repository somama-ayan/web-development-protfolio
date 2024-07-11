const userRoute = require("express").Router()
const User = require("../models/User")
const bcrpt = require("bcrypt")
const registrationSchema = require('./validation')
const jwt = require("jsonwebtoken")

const verifyToken = require("./verifyToken")

userRoute.get("/register", verifyToken, (req, res) => {
    res.json({
        "name": "khani",
        "email": "test@test.com",
        "password": "12345678"
    })
})
userRoute.post("/register", async (req, res) => {
    
    // const { name, email, password, address } = req.body
    // res.send(req.body)
    // const { error } = registrationSchema(req.body)

    // if (error) return res.send(error.details[0].message) //guard clause

    // const salt = await bcrpt.genSalt(10)
    // const hash = await bcrpt.hash(req.body.password, salt)
    // // const valid = await bcrpt.compare(req.body.password, hash)
    // const find = await User.findOne({ email: req.body.email })
    // if (find) return res.status(400).send("Email already Exist!")

    // const user = new User({
    //     name: name,
    //     email: email,
    //     password: hash,
    //     address: address
    // })

    // try {
    //     const savedUser = await user.save()
    //     res.send(savedUser)
    // }
    // catch (error) {
    //     res.status(500).send(error)
    // }

})
userRoute.patch("/register", (req, res) => {
    res.send({
        "id": 1,
        "title": "java",
        "author": "robert danial"
    })
})
userRoute.delete("/register", (req, res) => {
res.send("dkljfdkjf")
})

//////////////////////////////////////////////////
/////////// login ///////////////////

userRoute.get("/login", (req, res) => {
res.send("kdkjfkjdkl")
})
userRoute.post("/login", async(req, res) => {
    const {email, password } = req.body

    const findUser = await User.findOne({email: req.body.email})
    if(!findUser) return res.status(400).send("Email not Found!!!!")

    const compareUser = await bcrpt.compare(req.body.password, findUser.password)
    if(!compareUser) return res.status(400).send("Password is Incorrect!!!")

    // if email found and password is correct. so now  
    /// sign jwt token 
    const token =  jwt.sign({email: User.email}, process.env.SECRET_TOKEN)
    // now send token in header
    res.header("token",token).send()
    

})
userRoute.patch("/login", (req, res) => {

})
userRoute.delete("/login", (req, res) => {

})
module.exports = userRoute;