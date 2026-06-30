const express = require("express");

const router = express.Router();

const authMiddleware =
require("../middleware/authMiddleware");

const {

addToCart,

getCart,

removeItem,

increaseQuantity,

decreaseQuantity

} = require("../controllers/cartController");

// =========================
// Add Product To Cart
// =========================

router.post(

"/add",

authMiddleware,

addToCart

);

// =========================
// Get User Cart
// =========================

router.get(

"/",

authMiddleware,

getCart

);

// =========================
// Remove Item
// =========================

router.delete(

"/:id",

authMiddleware,

removeItem

);

// =========================
// Increase Quantity
// =========================

router.put(

"/increase/:id",

authMiddleware,

increaseQuantity

);

// =========================
// Decrease Quantity
// =========================

router.put(

"/decrease/:id",

authMiddleware,

decreaseQuantity

);

module.exports = router;