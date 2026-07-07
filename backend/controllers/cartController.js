const Cart = require("../models/Cart");

// =========================
// Add Product To Cart
// =========================

const addToCart = async (req, res) => {

try {

const {
  productId,
  quantity
} = req.body;

const qty =
Number(quantity) || 1;

let cart = await Cart.findOne({
userId: req.user.id
});

if (!cart) {

cart = new Cart({
userId: req.user.id,
products: []
});

}

const existingProduct = cart.products.find(

item => item.productId.toString() === productId

);

if (existingProduct) {

existingProduct.quantity += qty;

} else {

cart.products.push({
productId,
quantity: qty
});

}

await cart.save();

res.json({
message: "Product Added To Cart",
cart
});

} catch (error) {

res.status(500).json({
message: error.message
});

}

};

// =========================
// Get User Cart
// =========================

const getCart = async (req, res) => {

try {

const cart = await Cart.findOne({

userId: req.user.id

}).populate("products.productId");

if (!cart) {

return res.json({
products: []
});

}

res.json(cart);

} catch (error) {

res.status(500).json({
message: error.message
});

}

};

// =========================
// Remove Item From Cart
// =========================

const removeItem = async (req, res) => {

try {

const cart = await Cart.findOne({
userId: req.user.id
});

if (!cart) {

return res.status(404).json({
message: "Cart Not Found"
});

}

cart.products = cart.products.filter(

item => item.productId.toString() !== req.params.id

);

await cart.save();

res.json({
message: "Item Removed Successfully"
});

} catch (error) {

res.status(500).json({
message: error.message
});

}

};


// =========================
// Increase Quantity
// =========================

const increaseQuantity = async (req, res) => {

try{

const cart = await Cart.findOne({
userId:req.user.id
});

if(!cart){

return res.status(404).json({
message:"Cart Not Found"
});

}

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

if(!cart){

return res.status(404).json({
message:"Cart Not Found"
});

}

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

module.exports = {

addToCart,

getCart,

removeItem,

increaseQuantity,

decreaseQuantity

};