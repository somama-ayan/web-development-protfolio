// index.js
const express = require("express");
require("dotenv/config");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require('path');
const url = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.g5rcls6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
mongoose.connect(url)
  .then(() => {
    console.log("Connected!");
  })
  .catch((err) => {
    console.log(`Can't connect! ${err}`);
  });

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use('/uploadImages/userProfiles/', express.static(path.join(__dirname, '/uploadImages/userProfiles/')));
app.use(cors());
app.use(cors({
  exposedHeaders:
    [
      "Content-Length", 'token', 'X-Bar',
    ],
  origin: 'http://localhost:3000'
}))
const corsOption = {
  origin: ['http://localhost:3000'],
  credentials: true,
  methods: ["Get, Post, Put, Patch, Delete"]
}
// app.use((req, res, next) => {
//   console.log('Request Body:', req.body);
//   next();
// });

const userRegistrationRoute = require("./routes/userRegistration");
app.use("/api", userRegistrationRoute);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`API running on PORT : ${PORT}`));
