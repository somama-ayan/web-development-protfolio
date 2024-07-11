const express = require("express")
const userRoute = require("./routes/user")
const cors = require("cors")
require("dotenv/config")
const mongoose = require("mongoose")
const url = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.g5rcls6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

const PORT = process.env.PORT || 5001
const app = express()
app.use(express.json())
app.use(cors())


mongoose.connect(url)
.then(() => {
    console.log("connected to db atlas!")
})
.catch(() => {
    console.log("can't connect! ")
})

app.use("/api/user", userRoute)
app.get("/test/", (req,res) => {
    res.send("heloo")
})
app.listen(PORT, () => console.log(`Running APi on PORT ${PORT}`))

