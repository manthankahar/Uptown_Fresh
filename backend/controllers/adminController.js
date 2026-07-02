const Product = require("../models/product");
const User = require("../models/user");
const Order = require("../models/Order");

// Add Product
const addProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);

    res.status(201).json({
      message: "Product Added Successfully",
      product
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// Get All Products
const getProducts = async (req, res) => {
  try {

    const products = await Product.find();

    res.json(products);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// Update Product
const updateProduct = async (req, res) => {
  try {

    const product =
      await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );

    res.json(product);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// Delete Product
const deleteProduct = async (req, res) => {
  try {

    await Product.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message: "Product Deleted Successfully"
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// module.exports = {

// addProduct,

// getProducts,

// updateProduct,

// deleteProduct,

// getDashboard

// };

// ===============================
// Dashboard
// ===============================

const getDashboard = async (req,res)=>{

try{

const totalProducts =
await Product.countDocuments();

const totalUsers =
await User.countDocuments();

const totalOrders =
await Order.countDocuments();

const revenue =
await Order.aggregate([

{

$group:{

_id:null,

totalRevenue:{
$sum:"$totalPrice"
}

}

}

]);

res.json({

totalProducts,

totalUsers,

totalOrders,

totalRevenue:
revenue.length>0
?
revenue[0].totalRevenue
:
0

});

}catch(error){

res.status(500).json({

message:error.message

});

}

};

module.exports = {

addProduct,

getProducts,

updateProduct,

deleteProduct,

getDashboard

};