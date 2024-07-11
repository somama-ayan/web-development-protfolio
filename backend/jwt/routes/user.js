const userRoute = require("express").Router()
const bcrpt = require("bcrypt")
const regSchema = require("./validation")
const User = require("../models/User")
const { default: mongoose } = require("mongoose")
const jwt = require("jsonwebtoken")

const verifyToken = require("./verifyToken")
/////////////// register //////////////////////////////
userRoute.get("/register", verifyToken, (req, res) => {
    res.json({
        "name": "khani",
        "email": "test@test.com",
        "password": "12345678"
    })
})
userRoute.post("/register", async (req, res) => {
    const { firstName, lastName, email, password, address } = req.body
    const { error } = regSchema(req.body)
    if (error) return res.send(error.details[0].message)// Guaard clause

    const salt = await bcrpt.genSalt(10)
    const hash = await bcrpt.hash(req.body.password, salt)
    // const valid = await bcrpt.compare(req.body.password, hash)
    const findUser = await User.findOne({ email: req.body.email })
    if (findUser) return res.status(400).send("User already exists!!")

    const user = new User({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: hash,
        address: address
    })

    try {
        const savedUser = await user.save();
        res.send(savedUser);
    }
    catch (err) {
        res.status(400).send(err);
    }
})
userRoute.patch("/register", (req, res) => {
    res.status(400).send()
})
userRoute.delete("/register", (req, res) => {

})



//////////////////// login /////////////////////////////////
userRoute.get("/login", (req, res) => {
    res.send("ï m perfect")
})
userRoute.post("/login", async (req, res) => {
    const { email, password } = req.body

    const findEmail = await User.findOne({ email: req.body.email })
    if (!findEmail) return res.send("email not found")

    const compare = await bcrpt.compare(req.body.password, findEmail.password)
    if (!compare) return res.send("password is incorrect")

    const token = jwt.sign({ email: User.email }, process.env.SECRET_TOKEN)

    res.header("auth-token", token).send(token)
})
userRoute.patch("/login", (req, res) => {

})
userRoute.delete("/login", (req, res) => {

})
userRoute.get("/testing", (req, res) => {
    User.find()
        .then(user => {
            const userList = user.map(u => {
                return ({
                    firstName: u.firstName,
                    lastName: u.lastName,
                    email: u.email,
                    address: u.address
                })
            })
res.send(userList)

        })
        .catch(err => res.json(err))



    // res.send("jdkfjdkfjk")
})

module.exports = userRoute;