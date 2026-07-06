const express = require("express");

const router = express.Router();

const authMiddleware =
require("../middleware/authMiddleware");

const {

getWishlist,

addWishlist,

removeWishlist

} = require("../controllers/wishlistController");

router.get(
"/",
authMiddleware,
getWishlist
);

router.post(
"/add",
authMiddleware,
addWishlist
);

router.delete(
"/:id",
authMiddleware,
removeWishlist
);

module.exports = router;