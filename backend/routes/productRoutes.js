const express = require("express");
const router = express.Router();

const authMiddleware =
require("../middleware/authMiddleware");

const adminMiddleware =
require("../middleware/adminMiddleware");

const {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  restockProduct
} = require("../controllers/productController");

// ===============================
// Get All Products
// ===============================
router.get(
  "/",
  getProducts
);

// ===============================
// Add Product
// ===============================
router.post(
  "/",
  authMiddleware,
  adminMiddleware,
  addProduct
);

// ===============================
// Update Product
// ===============================
router.put(
  "/:id",
  authMiddleware,
  adminMiddleware,
  updateProduct
);

// ===============================
// Restock Product
// ===============================
router.put(
  "/:id/restock",
  authMiddleware,
  adminMiddleware,
  restockProduct
);

// ===============================
// Delete Product
// ===============================
router.delete(
  "/:id",
  authMiddleware,
  adminMiddleware,
  deleteProduct
);

module.exports = router;