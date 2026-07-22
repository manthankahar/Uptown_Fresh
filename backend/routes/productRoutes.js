// const express = require("express");
// const router = express.Router();

// const authMiddleware =
// require("../middleware/authMiddleware");

// const adminMiddleware =
// require("../middleware/adminMiddleware");

// const {

//   getProducts,
//   getProductById,
//   addProduct,
//   updateProduct,
//   deleteProduct,
//   restockProduct

// } = require("../controllers/productController");

// // ===============================
// // Get All Products
// // ===============================

// router.get(
//   "/",
//   getProducts
// );

// // ===============================
// // Get Single Product
// // ===============================

// router.get(
//   "/:id",
//   getProductById
// );

// // ===============================
// // Add Product
// // ===============================

// router.post(
//   "/",
//   authMiddleware,
//   adminMiddleware,
//   addProduct
// );

// // ===============================
// // Update Product
// // ===============================

// router.put(
//   "/:id",
//   authMiddleware,
//   adminMiddleware,
//   updateProduct
// );

// // ===============================
// // Restock Product
// // ===============================

// router.put(
//   "/:id/restock",
//   authMiddleware,
//   adminMiddleware,
//   restockProduct
// );

// // ===============================
// // Delete Product
// // ===============================

// router.delete(
//   "/:id",
//   authMiddleware,
//   adminMiddleware,
//   deleteProduct
// );

// module.exports = router;


const express = require("express");
const router = express.Router();

const authMiddleware =
require("../middleware/authMiddleware");

const adminMiddleware =
require("../middleware/adminMiddleware");
const upload = require("../middleware/upload");

const {

  getProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
  restockProduct,

  // ===============================
  // Review Functions
  // ===============================

  addReview,
  updateReview,
  deleteReview

} = require("../controllers/productController");


// ===============================
// Get All Products
// ===============================

router.get(
  "/",
  getProducts
);

// ===============================
// Get Single Product
// ===============================

router.get(
  "/:id",
  getProductById
);

// ===============================
// Add Product
// ===============================

router.post(
    "/",
    authMiddleware,
    adminMiddleware,
    upload.single("image"),
    addProduct
);

router.post(
  "/test",
  (req, res) => {
    console.log("TEST ROUTE HIT");
    res.json({ success: true });
  }
);

// ===============================
// Update Product
// ===============================

router.put(
    "/:id",
    authMiddleware,
    adminMiddleware,
    upload.single("image"),
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

// ===============================
// Add Review
// ===============================

router.post(
  "/:id/review",
  authMiddleware,
  addReview
);

// ===============================
// Update Review
// ===============================

router.put(
  "/:id/review",
  authMiddleware,
  updateReview
);

// ===============================
// Delete Review (Admin)
// ===============================

router.delete(
  "/:id/review/:reviewId",
  authMiddleware,
  adminMiddleware,
  deleteReview
);



module.exports = router;