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

} =
require("../controllers/cartController");

// Add Product To Cart

router.post(

"/add",

authMiddleware,

addToCart

);

// Get User Cart

router.get(

"/",

authMiddleware,

getCart

);

// Remove Item

router.delete(

"/:id",

authMiddleware,

removeItem

);

// Increase Quantity

router.put(

"/increase/:id",

authMiddleware,

increaseQuantity

);

// Decrease Quantity

router.put(

"/decrease/:id",

authMiddleware,

decreaseQuantity

);

module.exports = router;

// =========================
// Increase Quantity
// =========================

const increaseQuantity = async (req, res) => {

try{

const cart = await Cart.findOne({
userId:req.user.id
});

const item = cart.products.find(

item => item.productId.toString() === req.params.id

);

if(item){

item.quantity += 1;

}

await cart.save();

res.json({
message:"Quantity Increased"
});

}catch(error){

res.status(500).json({
message:error.message
});

}

};

// =========================
// Decrease Quantity
// =========================

const decreaseQuantity = async (req, res) => {

try{

const cart = await Cart.findOne({
userId:req.user.id
});

const item = cart.products.find(

item => item.productId.toString() === req.params.id

);

if(item){

if(item.quantity > 1){

item.quantity -= 1;

}else{

cart.products = cart.products.filter(

p => p.productId.toString() !== req.params.id

);

}

}

await cart.save();

res.json({
message:"Quantity Updated"
});

}catch(error){

res.status(500).json({
message:error.message
});

}

};