const UserRegist = require("../models/UserRegistration");
const userRegistrationRoute = require("express").Router();
const userRegValidSchema = require("../middleware/validation");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

////////////////////////// User Registration /////////////////
userRegistrationRoute.post("/registration", async (req, res) => {
  const { name, email, password, address, terms } = req.body;

  // Validate the request body
  const { error } = userRegValidSchema(req.body);
  if (error) return res.status(400).send(error);

  // Check if the user already exists
  const findUser = await UserRegist.findOne({ email: req.body.email });
  if (findUser) return res.status(400).send("Email already exists!");

  // Hash the password
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(req.body.password, salt);

  // Create a new user
  const user = new UserRegist({
    name,
    email,
    password: hash,
    address,
    terms,
  });

  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

//////////////////// User Login ///////////////////////////////
userRegistrationRoute.post("/login", async (req, res) => {
    console.log('Request Body:', req.body); // Log the request body
    const { email, password } = req.body;
    console.log('Email:', email, 'Password:', password); // Log email and password
  
    try {
      // Find the user by email (case-insensitive)
      const findEmail = await UserRegist.findOne({ email: { $regex: new RegExp("^" + req.body.email + "$", "i") } });
      console.log("User found in DB:", findEmail);
  
      if (!findEmail) {
        console.log("Email not found"); // Log if email not found
        return res.status(400).send("Email not found");
      }
  
      // Compare the provided password with the stored hash
      const comparePass = await bcrypt.compare(req.body.password, findEmail.password);
      if (!comparePass) {
        console.log("Password is incorrect!"); // Log if password is incorrect
        return res.status(400).send("Password is incorrect!");
      }
  
      // Generate a JWT token
      const token = jwt.sign({ email: findEmail.email }, process.env.SECRET_TOKEN);
      res.header("token", token).send(token);
    } catch (error) {
      console.error("Error during login:", error); // Log any other errors
      res.status(500).send("Internal server error");
    }
  });
  

////////////////////////// User Patch /////////////////////
userRegistrationRoute.patch("/user-profile", (req, res) => {
  // Profile update logic here
  // name, email, password, address, checkbox - initial registration
  // profilePicture, bio - additional details
});

module.exports = userRegistrationRoute;
