const express = require("express");

const router = express.Router();

const authMiddleware =
require("../middleware/authMiddleware");

const {

addToCart,

getCart,

removeFromCart,

clearCart

}

=

require("../controllers/cartController");

// Add Product

router.post(

"/add",

authMiddleware,

addToCart

);

// Get Cart

router.get(

"/",

authMiddleware,

getCart

);

// Remove Product

router.delete(

"/remove/:id",

authMiddleware,

removeFromCart

);

// Clear Cart

router.delete(

"/clear",

authMiddleware,

clearCart

);

module.exports = router;