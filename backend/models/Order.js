const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({

userId:{
type:mongoose.Schema.Types.ObjectId,
ref:"User",
required:true
},

products:[
{
productId:{
type:mongoose.Schema.Types.ObjectId,
ref:"Product",
required:true
},

quantity:{
type:Number,
default:1
}
}
],

totalPrice:{
type:Number,
required:true
},

// ===============================
// Order Status
// ===============================

status:{
type:String,
enum:[
"Pending",
"Confirmed",
"Packed",
"Shipped",
"Delivered",
"Cancelled"
],
default:"Pending"
},

// ===============================
// Payment
// ===============================

paymentMethod:{
type:String,
default:"Cash On Delivery"
},

paymentStatus:{
type:String,
enum:[
"Pending",
"Paid",
"Failed"
],
default:"Pending"
},

// ===============================
// Delivery Address
// ===============================

shippingAddress:{
name:{
type:String,
default:""
},

mobile:{
type:String,
default:""
},

address:{
type:String,
default:""
},

city:{
type:String,
default:""
},

pincode:{
type:String,
default:""
}
},

createdAt:{
type:Date,
default:Date.now
}

});

module.exports = mongoose.model(
"Order",
orderSchema
);