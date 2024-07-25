const userRegistrationRoute = require("express").Router();
const UserRegist = require("../models/UserRegistration");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userRegValidSchema = require("../middleware/validation");

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
  console.log(`request body:`, req.body)
  const { email , password} = req.body
  console.log(`Email: ${email} Password: ${password}`)

  // find user of same email an DB
  const findUser = await UserRegist.findOne({email: req.body.email})
  // console.log("user found", findUser)
  if(!findUser) return res.status(400).send("Email or password is Incorrect!")
    
    console.log("user", findUser)
  // compare login password with db password for user
  const comparePassword = await bcrypt.compare(password, findUser.password)
  if(!comparePassword) return res.status(400).send("Email or password is Incorrect!")
  console.log("Logged in....!")

  // sign jwt token for authorization
  const token = jwt.sign({email: findUser.email}, process.env.SECRET_TOKEN)
  console.log("token: " , token)
  res.header("token", token).send(findUser)
});

  

////////////////////////// User Patch /////////////////////
userRegistrationRoute.put("/userprofile", async(req, res) => {
  // Profile update logic here
  // name, email, password, address, checkbox - initial registration
  // profilePicture, bio - additional details
  console.log("request body: ", req.body)
  const {userId, profilePic} = req.body;
  console.log("proile: ", req.body.profilePic, "userId",userId)

  const findUser = await UserRegist.findOne({_id: req.body.userId})

  // try{
  //   const updateData = 

  // }catch(err){

  // }
  console.log(findUser)
  res.send(req.body)
});

module.exports = userRegistrationRoute;
