
const Cart = require("../models/Cart");

// ===========================
// Add Product To Cart
// ===========================

const addToCart = async (req, res) => {

try{

const { productId } = req.body;

let cart = await Cart.findOne({
userId:req.user.id
});

if(!cart){

cart = new Cart({

userId:req.user.id,

products:[]

});

}

const existingProduct =
cart.products.find(

item=>

item.productId.toString()===productId

);

if(existingProduct){

existingProduct.quantity += 1;

}else{

cart.products.push({

productId,

quantity:1

});

}

await cart.save();

res.status(200).json({

message:"Product Added To Cart",

cart

});

}catch(error){

res.status(500).json({

message:error.message

});

}

};

// ===========================
// Get User Cart
// ===========================

const getCart = async(req,res)=>{

try{

const cart =
await Cart.findOne({

userId:req.user.id

}).populate("products.productId");

res.status(200).json(cart);

}catch(error){

res.status(500).json({

message:error.message

});

}

};

// ===========================
// Remove Item
// ===========================

const removeFromCart =
async(req,res)=>{

try{

let cart =
await Cart.findOne({

userId:req.user.id

});

cart.products =
cart.products.filter(

item=>

item.productId.toString()

!==

req.params.id

);

await cart.save();

res.json({

message:"Product Removed"

});

}catch(error){

res.status(500).json({

message:error.message

});

}

};

// ===========================
// Clear Cart
// ===========================

const clearCart =
async(req,res)=>{

try{

await Cart.findOneAndUpdate(

{

userId:req.user.id

},

{

products:[]

}

);

res.json({

message:"Cart Cleared"

});

}catch(error){

res.status(500).json({

message:error.message

});

}

};

module.exports={

addToCart,

getCart,

removeFromCart,

clearCart

};