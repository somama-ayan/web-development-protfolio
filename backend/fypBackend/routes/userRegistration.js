const UserRegist = require("../models/UserRegistration")
const userRegistrationRoute = require("express").Router()
const userRegValidSchema = require("../middleware/validation")
const bcrypt = require("bcrypt")

userRegistrationRoute.post("/registration", async (req, res) => {
    const { name, email, password, address, terms } = req.body
    
    const { error } = userRegValidSchema(req.body)
    if (error) return res.status(400).send(error)
    
    const findUser = await UserRegist.findOne({ email: req.body.email })
    if (findUser) return res.status(400).send("Email already exists!")
    
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(req.body.password, salt)


    const user = new UserRegist({
        name: name,
        email: email,
        password: hash,
        address: address,
        terms: terms
    })

    try {
        const savedUser = await user.save()
        res.send(savedUser)
    } catch (err) {
        res.send(err.message)
    }
    // res.send(req.body)
})

userRegistrationRoute.post("/login" , (req,  res) => {
    res.send("flkdlkfdlskf")
})

module.exports = userRegistrationRoute