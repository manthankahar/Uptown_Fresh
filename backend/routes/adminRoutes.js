const express = require("express");

const router = express.Router();

const upload =
require("../middleware/uploadMiddleware");

const authMiddleware =
require("../middleware/authMiddleware");

const adminMiddleware =
require("../middleware/adminMiddleware");

const {

addProduct,

getProducts,

updateProduct,

deleteProduct,

getDashboard

} = require("../controllers/adminController");

// ==========================
// Upload Image
// ==========================

router.post(

"/upload",

authMiddleware,

adminMiddleware,

upload.single("image"),

(req,res)=>{

res.json({

imageUrl:
`http://localhost:5000/uploads/${req.file.filename}`

});

}

);

// ==========================
// Dashboard
// ==========================

router.get(

"/dashboard",

authMiddleware,

adminMiddleware,

getDashboard

);

// ==========================
// Products
// ==========================

router.post(

"/products",

authMiddleware,

adminMiddleware,

addProduct

);

router.get(

"/products",

authMiddleware,

adminMiddleware,

getProducts

);

router.put(

"/products/:id",

authMiddleware,

adminMiddleware,

updateProduct

);

router.delete(

"/products/:id",

authMiddleware,

adminMiddleware,

deleteProduct

);

module.exports = router;