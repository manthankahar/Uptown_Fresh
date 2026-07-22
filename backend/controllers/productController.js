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

    console.log("Product ID =", req.params.id);
    console.log("Product =", product);

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

    console.log("========== ADD PRODUCT ==========");
    console.log("BODY =", req.body);
    console.log("FILE =", req.file);

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Please Upload Product Image"
      });
    }

    const product = await Product.create({

      name: req.body.name,

      price: Number(req.body.price),

      category: req.body.category,

      stock: Number(req.body.stock),

      description: req.body.description,

      image: req.file.path

    });

    console.log("PRODUCT =", product);

    res.status(201).json({

      success: true,

      message: "Product Added Successfully",

      product

    });

  } catch (error) {

    console.log("========== ERROR ==========");
    console.log(error);
    console.log(error.stack);

    res.status(500).json({

      success: false,

      message: error.message

    });

  }

};

// ===============================
// Update Product
// ===============================
const updateProduct = async (req, res) => {

  try {

    const data = {

      ...req.body

    };

    if(req.file){

      data.image = req.file.path;

    }

    const product = await Product.findByIdAndUpdate(

      req.params.id,

      data,

      {

        new:true

      }

    );

    res.json({

      message:"Product Updated Successfully",

      product

    });

  }

  catch(error){

    res.status(500).json({

      message:error.message

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

// ===============================
// Add Review
// ===============================
const addReview = async (req, res) => {

  console.log("REQ.USER =", req.user);
console.log("REQ.BODY =", req.body);

  try {

    const { rating, comment } = req.body;

    const product = await Product.findById(req.params.id);

    if (!product) {

      return res.status(404).json({
        message: "Product Not Found"
      });

    }

 console.log("Reviews =", product.reviews);

const alreadyReviewed = product.reviews.find(
    review => review.user && review.user.toString() === req.user.id
);

console.log("Already Reviewed =", alreadyReviewed);

if (alreadyReviewed) {

    return res.status(400).json({
        message: "You Have Already Reviewed This Product"
    });

}
    console.log(req.user);
    const review = {

      user: req.user.id,
      name: req.user.name,
      rating: Number(rating),
      comment

    };

    product.reviews.push(review);

    product.numReviews = product.reviews.length;

    product.rating =

      product.reviews.reduce(

        (acc, item) => acc + item.rating,

        0

      ) / product.reviews.length;

    await product.save();

    res.status(201).json({

      message: "Review Added Successfully",

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
// Update Review
// ===============================
const updateReview = async (req, res) => {

  try {

    const { rating, comment } = req.body;

    const product = await Product.findById(req.params.id);

    console.log("Product =", product);

    if (!product) {

      return res.status(404).json({
        message: "Product Not Found"
      });

    }

    const review = product.reviews.find(

      review => review.user.toString() === req.user.id

    );

    if (!review) {

      return res.status(404).json({
        message: "Review Not Found"
      });

    }

    review.rating = Number(rating);

    review.comment = comment;

    product.rating =

      product.reviews.reduce(

        (acc, item) => acc + item.rating,

        0

      ) / product.reviews.length;

    await product.save();

    res.json({

      message: "Review Updated Successfully",

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
// Delete Review
// ===============================
const deleteReview = async (req, res) => {

  try {

    const product = await Product.findById(req.params.id);

    if (!product) {

      return res.status(404).json({

        message: "Product Not Found"

      });

    }

    product.reviews = product.reviews.filter(

      review => review._id.toString() !== req.params.reviewId

    );

    product.numReviews = product.reviews.length;

    if (product.reviews.length === 0) {

      product.rating = 0;

    } else {

      product.rating =

        product.reviews.reduce(

          (acc, item) => acc + item.rating,

          0

        ) / product.reviews.length;

    }

    await product.save();

    res.json({

      message: "Review Deleted Successfully",

      product

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

  deleteProduct,

  addReview,

  updateReview,

  deleteReview

};