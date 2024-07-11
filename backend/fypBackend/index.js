const express = require("express")
const userRegistrationRoute = require("./routes/userRegistration")
require("dotenv/config")
const cors = require("cors")
const mongoose  = require("mongoose")
const url = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.g5rcls6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
mongoose.connect(url)
.then(() => {
    console.log("Connected!")
})
.catch((err) => {
    console.log(`Can't connect! ${err}`)
})

const PORT = process.env.PORT || 3001
const app = express()
app.use(express.json())
app.use(cors())
// app.use(cors({
//     exposedHeaders: ['Content-Lenght' , '' , 'X-Bar'],
//     origin: 'http://localhost:3000'
// }))


app.use("/api" , userRegistrationRoute)

app.listen(PORT, ()  =>  console.log(`API running on PORT : ${PORT}`))