const express = require("express");

const router = express.Router();

const authMiddleware =
require("../middleware/authMiddleware");

const {

placeOrder,

getOrders

} = require("../controllers/orderController");

// Place Order

router.post(

"/place",

authMiddleware,

placeOrder

);

// My Orders

router.get(

"/my",

authMiddleware,

getOrders

);

module.exports = router;