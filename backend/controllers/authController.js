const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Signup
const signup = async (req, res) => {

try{

const { name, email, mobile, password } = req.body;

// Email Check
const emailExists =
await User.findOne({email});

if(emailExists){

return res.status(400).json({
message:"Email Already Registered"
});

}

// Mobile Check
const mobileExists =
await User.findOne({mobile});

if(mobileExists){

return res.status(400).json({
message:"Mobile Number Already Registered"
});

}

const hashedPassword =
await bcrypt.hash(password,10);

await User.create({

name,
email,
mobile,
password:hashedPassword

});

res.status(201).json({

message:"Signup Successful"

});

}catch(error){

res.status(500).json({

message:error.message

});

}

};

// ===============================
// Login
// ===============================

const login = async (req, res) => {

  try {

    console.log("Request Body:", req.body);

    const { email, password } = req.body;

    const user = await User.findOne({

      $or: [
        { email: email },
        { mobile: email }
      ]

    });

    if (!user) {

      return res.status(400).json({

        message: "User Not Found"

      });

    }

    const match = await bcrypt.compare(

      password,
      user.password

    );

    if (!match) {

      return res.status(400).json({

        message: "Wrong Password"

      });

    }

    // ===============================
    // JWT Token
    // ===============================

    const token = jwt.sign(

      {
        id: user._id,
        name: user.name,      // <-- username nai, name
        email: user.email,
        role: user.role
      },

      process.env.JWT_SECRET,

      {
        expiresIn: "7d"
      }

    );

    res.json({

      message: "Login Successful",

      token,

      user

    });

  }

  catch (error) {

    console.log(error);

    res.status(500).json({

      message: error.message

    });

  }

};