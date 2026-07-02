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

// admin

const {
addProduct,

getProducts,

updateProduct,

deleteProduct,

getDashboard

} =
require("../controllers/adminController");

// Dashboard

router.get(
"/dashboard",
getDashboard
);

// Products
router.post("/products", addProduct);

router.get("/products", getProducts);

router.put("/products/:id", updateProduct);

router.delete("/products/:id", deleteProduct);

module.exports = router;