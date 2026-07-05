const Order = require("../models/Order");
const Cart = require("../models/Cart");
const Product = require("../models/product");
const PDFDocument = require("pdfkit");

// =====================
// Place Order
// =====================

const placeOrder = async (req, res) => {

try{

const cart = await Cart.findOne({
userId:req.user.id
}).populate("products.productId");

if(!cart || cart.products.length===0){

return res.status(400).json({
message:"Cart Empty"
});

}

let total = 0;

for(const item of cart.products){

const product = await Product.findById(item.productId._id);

if(!product){

return res.status(404).json({
message:"Product Not Found"
});

}

if(product.stock < item.quantity){

return res.status(400).json({
message:`${product.name} Out Of Stock`
});

}

total += product.price * item.quantity;

}

const order = await Order.create({

userId:req.user.id,

products:cart.products,

totalPrice:total

});

for(const item of cart.products){

const product = await Product.findById(item.productId._id);

product.stock -= item.quantity;

await product.save();

}

cart.products = [];

await cart.save();

res.json({

message:"Order Placed Successfully"

});

}catch(error){

console.log(error);

res.status(500).json({

message:error.message

});

}

};

// =====================
// My Orders
// =====================

const getOrders = async(req,res)=>{

try{

const orders = await Order.find({

userId:req.user.id

})

.populate("products.productId")

.populate("userId")

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

// =====================
// Download Invoice
// =====================

const downloadInvoice = async(req,res)=>{

try{

const order = await Order.findById(req.params.id)

.populate("products.productId")

.populate("userId");

if(!order){

return res.status(404).json({

message:"Order Not Found"

});

}

const doc = new PDFDocument({

margin:50

});

res.setHeader(

"Content-Type",

"application/pdf"

);

res.setHeader(

"Content-Disposition",

`attachment; filename=Invoice-${order._id}.pdf`

);

doc.pipe(res);

doc.fontSize(24).text("UptownFresh",{

align:"center"

});

doc.moveDown();

doc.fontSize(18).text("Invoice");

doc.moveDown();

doc.fontSize(12).text("Customer : " + order.userId.username);

doc.text("Email : " + order.userId.email);

doc.text("Date : " + new Date(order.createdAt).toLocaleString());

doc.moveDown();

doc.text("--------------------------------------------");

let total = 0;

order.products.forEach(item=>{

const price = item.productId.price * item.quantity;

total += price;

doc.text(

`${item.productId.name}    x${item.quantity}    ₹${price}`

);

});

doc.moveDown();

doc.text("--------------------------------------------");

doc.moveDown();

doc.text("Delivery : ₹50");

doc.fontSize(18).text(

"Grand Total : ₹" + (total + 50)

);

doc.moveDown();

doc.text("Thank You For Shopping With UptownFresh ❤️");

doc.end();

}catch(error){

console.log(error);

res.status(500).json({

message:error.message

});

}

};

// =====================
// Admin - Get All Orders
// =====================

const getAllOrders = async(req,res)=>{

try{

const orders = await Order.find()

.populate("userId")

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

// =====================
// Admin - Update Order Status
// =====================

const updateOrderStatus = async(req,res)=>{

try{

const order = await Order.findById(req.params.id);

if(!order){

return res.status(404).json({

message:"Order Not Found"

});

}

order.status = req.body.status;

await order.save();

res.json({

message:"Order Status Updated Successfully"

});

}catch(error){

res.status(500).json({

message:error.message

});

}

};

// =====================
// Admin - Delete Order
// =====================

const deleteOrder = async(req,res)=>{

try{

const order = await Order.findById(req.params.id);

if(!order){

return res.status(404).json({

message:"Order Not Found"

});

}

await Order.findByIdAndDelete(req.params.id);

res.json({

message:"Order Deleted Successfully"

});

}catch(error){

res.status(500).json({

message:error.message

});

}

};



module.exports = {

placeOrder,

getOrders,

downloadInvoice,

getAllOrders,

updateOrderStatus,

deleteOrder

};