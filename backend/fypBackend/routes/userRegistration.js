const userRegistrationRoute = require("express").Router();
const UserRegist = require("../models/UserRegistration");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userRegValidSchema = require("../middleware/validation");
const multer = require("multer");
const verifyToken = require("../middleware/verifyToken");


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
  const { email, password } = req.body
  console.log(`Email: ${email} Password: ${password}`)


  const findUser = await UserRegist.findOne({ email: req.body.email })
  if (!findUser) return res.status(400).send("Email or password is Incorrect!")


  const comparePassword = await bcrypt.compare(password, findUser.password)
  if (!comparePassword) return res.status(400).send("Email or password is Incorrect!")

  // sign jwt token for authorization
  const token = jwt.sign({ email: findUser.email }, process.env.SECRET_TOKEN)
  console.log("token: ", token)
  res.header("token", token).send(findUser)
});




const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploadImages/userProfiles')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname + Date.now()) //Date.now() + if want unique name //
  }
})
const upload = multer({ storage: storage })
// const upload = multer({dest: './uploadImages/profileImages' })


////////////////////////// User Patch /////////////////////
userRegistrationRoute.put("/userprofile", upload.single("image"), async (req, res) => {
  const userId = req.body.userId; // Access the userId from req.body
  const bio = req.body.bio
  // console.log("Request body:", req.body);
  // console.log("Profile image:", req.file);


  try {
    await UserRegist.updateOne(
      { _id: userId },
      {
        $set: {
          image: req.file.filename,
          bio: bio
        }
      }
    )
  } catch (err) {
    console.log("Error", err)
  }
  const findUser = await UserRegist.findOne({ _id: req.body.userId })
  res.send(findUser)


});
/////////////// get ////////////////////////////
userRegistrationRoute.get(`/userprofile/`, async (req, res) => {
  console.log("request body: ", req.query)
  const { userId } = req.query
  console.log(req.query.userId)
  const userProfile = await UserRegist.findOne({ _id: userId }
  )
  console.log(userProfile)
  res.send(userProfile)
})

module.exports = userRegistrationRoute;
