const Order = require("../models/Order");
const Cart = require("../models/Cart");
const Product = require("../models/product");

// =====================
// Place Order
// =====================

const placeOrder = async(req,res)=>{

try{

const cart =
await Cart.findOne({

userId:req.user.id

}).populate("products.productId");

if(
!cart ||
cart.products.length===0
){

return res.status(400).json({

message:"Cart Empty"

});

}

let total=0;

cart.products.forEach(item=>{

total +=
item.productId.price *
item.quantity;

});

const order =
new Order({

userId:req.user.id,

products:cart.products,

totalPrice:total

});

await order.save();

// Reduce Product Stock

for(const item of cart.products){

const product =
await Product.findById(item.productId._id);

if(product){

// Stock negative na thay
if(product.stock >= item.quantity){

product.stock -= item.quantity;

}else{

product.stock = 0;

}

await product.save();

}

}

cart.products=[];

await cart.save();

res.json({

message:"Order Placed Successfully"

});

}catch(error){

res.status(500).json({

message:error.message

});

}

};

// =====================
// My Orders
// =====================

const getOrders =
async(req,res)=>{

try{

const orders =
await Order.find({

userId:req.user.id

})
.populate("products.productId")
.sort({

createdAt:-1

});

res.json(orders);

}catch(error){

res.status(500).json({

message:error.message

});

}

};

module.exports={

placeOrder,

getOrders

};