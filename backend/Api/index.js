const express = require("express")
const userRoute = require("./routes/user")
require("dotenv/config")
const mongoose = require("mongoose")
const url = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.g5rcls6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
const cors = require("cors")

const productsRoute = require("./routes/products")
const productRoute = require('./routes/product')

const PORT = process.env.PORT || 3001
const app = express()
app.use(express.json())

app.use(cors({
    exposedHeaders: ['Content-Length', 'token', 'X-Bar'],
    origin: "http://localhost:3000"
  }));
  const corsOption = {
    origin: ['http://localhost:3000'],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
}
app.use(cors())
mongoose.connect(url)
.then( console.log("connected to db atlas"))
.catch(() => {
console.log("can't connect")
})



app.use(express.json())
app.use("/api/user" ,userRoute)
app.use("/api/products", productsRoute)
app.use("/api/product", productRoute)
app.listen(PORT, () => console.log(`API running on PORT : ${PORT}`))