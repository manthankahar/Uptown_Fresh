const express = require("express");

const router = express.Router();

const authMiddleware =
require("../middleware/authMiddleware");

const adminMiddleware =
require("../middleware/adminMiddleware");

const {

placeOrder,

getOrders,

downloadInvoice,

getAllOrders,

updateOrderStatus,

deleteOrder

} = require("../controllers/orderController");

// ======================
// Place Order
// ======================

router.post(

"/place",

authMiddleware,

placeOrder

);

// ======================
// My Orders
// ======================

router.get(

"/my",

authMiddleware,

getOrders

);

// ======================
// Download Invoice
// ======================

router.get(

"/invoice/:id",

authMiddleware,

downloadInvoice

);

// ======================
// Admin - Get All Orders
// ======================

router.get(

"/all",

authMiddleware,

adminMiddleware,

getAllOrders

);

// ======================
// Admin - Update Order Status
// ======================

router.put(

"/status/:id",

authMiddleware,

adminMiddleware,

updateOrderStatus

);

// ======================
// Admin - Delete Order
// ======================

router.delete(

"/:id",

authMiddleware,

adminMiddleware,

deleteOrder

);

module.exports = router;