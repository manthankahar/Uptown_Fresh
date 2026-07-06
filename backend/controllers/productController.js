const Product = require("../models/product");

// ===============================
// Get All Products + Search + Filter + Sort
// ===============================
const getProducts = async (req, res) => {

  try {

    console.log("GET PRODUCTS HIT");

    const {
      search,
      category,
      minPrice,
      maxPrice,
      sort
    } = req.query;

    let filter = {};

    // ================= Search =================
    if (search) {
      filter.name = {
        $regex: search,
        $options: "i"
      };
    }

    // ================= Category =================
    if (category && category !== "All") {
      filter.category = category;
    }

    // ================= Price =================
    if (minPrice || maxPrice) {

      filter.price = {};

      if (minPrice) {
        filter.price.$gte = Number(minPrice);
      }

      if (maxPrice) {
        filter.price.$lte = Number(maxPrice);
      }

    }

    let query = Product.find(filter);

    // ================= Sorting =================

    if (sort === "priceLow") {

      query = query.sort({ price: 1 });

    }
    else if (sort === "priceHigh") {

      query = query.sort({ price: -1 });

    }
    else if (sort === "name") {

      query = query.sort({ name: 1 });

    }
    else {

      // Latest
      query = query.sort({ createdAt: -1 });

    }

    const products = await query;

    res.json(products);

  }
  catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message
    });

  }

};

// ===============================
// Get Single Product
// ===============================

const getProductById = async (req, res) => {

  try {

    const product = await Product.findById(req.params.id);

    if (!product) {

      return res.status(404).json({
        message: "Product Not Found"
      });

    }

    res.json(product);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

// ===============================
// Add Product
// ===============================
const addProduct = async (req, res) => {

  try {

    console.log("BODY =", req.body);

    const product = await Product.create(req.body);

    res.status(201).json({
      message: "Product Added Successfully",
      product
    });

  }
  catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message
    });

  }

};

// ===============================
// Update Product
// ===============================
const updateProduct = async (req, res) => {

  try {

    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(product);

  }
  catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

// ===============================
// Restock Product
// ===============================
const restockProduct = async (req, res) => {

  try {

    const product = await Product.findById(req.params.id);

    if (!product) {

      return res.status(404).json({
        message: "Product Not Found"
      });

    }

    product.stock = Number(req.body.stock);

    await product.save();

    res.json({
      message: "Stock Updated Successfully",
      product
    });

  }
  catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

// ===============================
// Delete Product
// ===============================
const deleteProduct = async (req, res) => {

  try {

    await Product.findByIdAndDelete(req.params.id);

    res.json({
      message: "Product Deleted"
    });

  }
  catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

module.exports = {

  getProducts,

  getProductById,

  addProduct,

  updateProduct,

  restockProduct,

  deleteProduct

};