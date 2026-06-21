const Product = require("../models/product");


// Get All Products
const getProducts = async (req, res) => {
  try {

    console.log("GET PRODUCTS HIT");

    const products = await Product.find();

    console.log(products);

    res.json(products);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message
    });

  }
};

// Add Product
const addProduct = async (req, res) => {
  try {
    const { name, price, description, image } = req.body;

    const product = await Product.create({
      name,
      price,
      description,
      image
    });

    res.status(201).json(product);

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
      message: "Product Deleted"
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

module.exports = {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct
};