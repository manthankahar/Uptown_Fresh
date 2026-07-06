const Wishlist = require("../models/Wishlist");

// ==============================
// Get Wishlist
// ==============================

const getWishlist = async(req,res)=>{

try{

let wishlist = await Wishlist.findOne({
userId:req.user.id
}).populate("products");

if(!wishlist){

wishlist = await Wishlist.create({
userId:req.user.id,
products:[]
});

}

res.json(wishlist.products);

}catch(error){

res.status(500).json({
message:error.message
});

}

};

// ==============================
// Add Wishlist
// ==============================

const addWishlist = async(req,res)=>{

try{

const {productId} = req.body;

let wishlist = await Wishlist.findOne({
userId:req.user.id
});

if(!wishlist){

wishlist = await Wishlist.create({
userId:req.user.id,
products:[]
});

}

if(!wishlist.products.includes(productId)){

wishlist.products.push(productId);

await wishlist.save();

}

res.json({
message:"Added To Wishlist ❤️"
});

}catch(error){

res.status(500).json({
message:error.message
});

}

};

// ==============================
// Remove Wishlist
// ==============================

const removeWishlist = async(req,res)=>{

try{

const wishlist = await Wishlist.findOne({
userId:req.user.id
});

wishlist.products =
wishlist.products.filter(

id=>id.toString()!==req.params.id

);

await wishlist.save();

res.json({
message:"Removed From Wishlist"
});

}catch(error){

res.status(500).json({
message:error.message
});

}

};

module.exports={

getWishlist,

addWishlist,

removeWishlist

};