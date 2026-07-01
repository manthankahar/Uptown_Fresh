const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Signup
const signup = async (req, res) => {
  try {

    const { name, email, mobile, password } = req.body;

    const userExists =
      await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({
        message: "User Already Exists"
      });
    }

    const mobileExists =
      await User.findOne({ mobile });

      if(mobileExists){

    return res.status(400).json({
message:"Mobile Number Already Registered"
    });

}

    const hashedPassword =
      await bcrypt.hash(password, 10);

    const user =
    await User.create({

    name,
    email,
    mobile,
    password:hashedPassword

});

    res.status(201).json({
      message: "User Registered Successfully"
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// Login
const login = async (req, res) => {
  try {

    const { login, password } = req.body;

   const user =
await User.findOne({

$or:[
{email:login},
{mobile:login}
]

});

    if (!user) {
      return res.status(400).json({
        message: "Invalid Email"
      });
    }

    const isMatch =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid Password"
      });
    }

    const token =
      jwt.sign(
        {
          id: user._id
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "7d"
        }
      );

    res.status(200).json({
      token,
      message: "Login Successful"
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

module.exports = {
  signup,
  login
};