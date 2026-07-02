const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

const router = express.Router();

// Signup Route
router.post("/signup", async (req, res) => {
  try {
    const { name, email, mobile, password } = req.body;

  const userExists = await User.findOne({ email });

  const mobileExists =
await User.findOne({ mobile });

if(mobileExists){

return res.status(400).json({

message:"Mobile Already Registered"

});

}

    if (userExists) {
      return res.status(400).json({
        message: "User Already Exists"
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({

name,

email,

mobile,

password:hashedPassword

});

    res.status(201).json({
      message: "Signup Successful",
      user
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});



// Login Route
router.post("/login", async (req, res) => {
  try {
    const { login, password } = req.body;

    const user = await User.findOne({

$or: [

{ email: login },

{ mobile: login }

]

});

    if (!user) {
      return res.status(400).json({
        message: "User Not Found"
      });
    }

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return res.status(400).json({
        message: "Wrong Password"
      });
    }

    const token = jwt.sign(
     {
       id:user._id,
       role:user.role
       },
       process.env.JWT_SECRET,
       {
       expiresIn:"7d"
       }
);

    res.status(200).json({
      message: "Login Successful",
      token,
      user
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

module.exports = router;