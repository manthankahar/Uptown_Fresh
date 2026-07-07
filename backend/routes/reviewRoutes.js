const express = require("express");

const router = express.Router();

const authMiddleware =
require("../middleware/authMiddleware");

const {

getReviews,

addReview

} = require("../controllers/reviewController");

// ======================================
// Get All Reviews Of Product
// ======================================

router.get(

"/:productId",

getReviews

);

// ======================================
// Add Review
// ======================================

router.post(

"/:productId",

authMiddleware,

addReview

);

module.exports = router;