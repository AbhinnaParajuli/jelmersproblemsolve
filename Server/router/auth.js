const jwt = require("jsonwebtoken");
const express = require("express");
const app = express(); // Initialize your Express app

const authenticate = require("../middle/authenticate")
const router = express.Router();
const bcrypt = require("bcryptjs");

// The following line seems incomplete, you need to specify the User model
const conn = require("../DB/conn"); 
const User = require("../model/userSchema"); // Importing the User model
// Define your middleware function
router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;
  console.log(req.body); // Log the incoming data to ensure it's correct

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ status: "error", message: "Please fill in all the required fields" });
  }

  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ status: "error", message: "Email already exists, please try again" });
    } else if (password !== cpassword) {
      return res.status(422).json({ status: "error", message: "Password don't match, please try again." });
    } else {
      const user = new User({ name, email, phone, work, password, cpassword });
      const userRegister = await user.save();

      console.log("User registered successfully");
      res.status(201).json({ status: "success", message: "User Registered Successfully" });
    }
  } catch (err) {
    console.log(err); // Log the error for debugging purposes
    res.status(500).json({ status: "error", message: "Internal Server Error" });
  }
});
///login
router.post("/login", async (req, res) => {
  try {
    let token;
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Please fill the data" });
    }
    const userLogin = await User.findOne({ email: email });
    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);
      token = await userLogin.generateAuthToken();
      console.log(token);
      res.cookie("jwtoken", token,{
        expires:new Date(Date.now()+25892000000),
        httpOnly:true
      });
      if (!isMatch) {
        res.status(400).json({ status: "error", message: "Invalid email or password" });
      } else {
        res.json({ message: "User signed in successfully" });
      }
    } else {
      res.status(400).json({ error: "Invalid Credentials" });
    }
    // console.log(userLogin);
  } catch (err) {
    console.log(err);
  }
});

router.get('/about',authenticate,(req,res)=>{
  console.log("Hellow");
  res.send(req.rootUser);

});
router.post('/logout', async (req,res)=>{
  const token = req.cookies?.jwtoken; // Assuming your token is stored in cookies
    if (!token) {
      return res.status(401).send("Unauthorized: No token provided");
    }

  const verifyToken = jwt.verify(token, process.env.SECRET_KEY);

  await User.findOneAndUpdate({_id: verifyToken._id}, {$set: {token: ""}})

  res.clearCookie("jwtoken");
  res.sendStatus(200);
})
module.exports = router;