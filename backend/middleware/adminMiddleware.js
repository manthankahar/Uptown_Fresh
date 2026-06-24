const User = require("../models/user");

const adminMiddleware = async (req, res, next) => {
  try {

    if (!req.user) {
      return res.status(401).json({
        message: "Unauthorized"
      });
    }

    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({
        message: "User Not Found"
      });
    }

    if (user.role !== "admin") {
      return res.status(403).json({
        message: "Admin Access Required"
      });
    }

    next();

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

module.exports = adminMiddleware;