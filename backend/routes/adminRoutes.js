const express = require("express");

const router = express.Router();
const upload =
  require("../middleware/uploadMiddleware");
  router.post(
  "/upload",
  upload.single("image"),
  (req, res) => {

    res.json({
      imageUrl:
        `http://localhost:5000/uploads/${req.file.filename}`
    });

  }
);

const {
  addProduct,
  getProducts,
  updateProduct,
  deleteProduct
} = require("../controllers/adminController");

// Dashboard
router.get("/dashboard", (req, res) => {
  res.json({
    message: "Admin Dashboard"
  });
});

// Products
router.post("/products", addProduct);

router.get("/products", getProducts);

router.put("/products/:id", updateProduct);

router.delete("/products/:id", deleteProduct);

module.exports = router;