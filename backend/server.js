const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

const connectDB = require("./config/db");

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// EJS Setup
app.set("view engine", "ejs");

app.set(
"views",
path.join(__dirname, "views")
);

// Static Files (CSS, JS, Images)

console.log(
path.join(__dirname,"../frontend")
);

app.use(
express.static(
path.join(__dirname, "../frontend")
)
);

// EJS Pages
app.get("/", (req, res) => {
res.render("index");
});

app.get("/login", (req, res) => {
res.render("login");
});

app.get("/signup", (req, res) => {
res.render("signup");
});

app.get("/products", (req, res) => {
res.render("products");
});

// ===============================
// Product Details Page
// ===============================

app.get("/product/:id", (req, res) => {
  res.render("productDetails");
});

app.get("/cart", (req, res) => {
res.render("cart");
});

app.get("/admin", (req, res) => {
res.render("admin");
});

app.get("/adminOrders",(req,res)=>{
res.render("adminOrders");
});


app.get("/addProduct",(req,res)=>{
res.render("addProduct");
});

app.use(
"/api/admin",
require("./routes/adminRoutes")
);


app.get("/forgot-password",(req,res)=>{

res.render("forgotPassword");

});

app.get("/wishlist",(req,res)=>{
res.render("wishlist");
});

// Upload Folder
app.use(
"/uploads",
express.static(
path.join(__dirname, "uploads")
)
);

// check out 

app.get("/checkout",(req,res)=>{
res.render("checkout");
});


// profile.ejs routs

app.get("/profile",(req,res)=>{
res.render("profile");
});


// API Routes
app.use(
"/api/auth",
require("./routes/authRoutes")
);

app.use(
"/api/products",
require("./routes/productRoutes")
);

app.use(
"/api/cart",
require("./routes/cartRoutes")
);


app.use(
"/api/orders",
require("./routes/orderRoutes")
);

app.get("/orders",(req,res)=>{
res.render("orders");
});


app.use(
"/api/wishlist",
require("./routes/wishlistRoutes")
);

app.use(
"/api/reviews",
require("./routes/reviewRoutes")
);


const PORT =
process.env.PORT || 5000;


app.use((err, req, res, next) => {
  console.error("GLOBAL ERROR:");
  console.error(err);

  res.status(500).json({
    success: false,
    message: err.message
  });
});

app.listen(PORT, () => {
console.log(
`Server Running On Port ${PORT}`
);
});

// ===============================
// Global Error Handler
// ===============================

app.use((err, req, res, next) => {

    console.log("=========== GLOBAL ERROR ===========");
    console.log(err);
    console.log(err.message);
    console.log(err.stack);

    res.status(500).json({
        success: false,
        message: err.message
    });

});