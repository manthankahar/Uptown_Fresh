// const express = require("express");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const path = require("path");

// const connectDB = require("./config/db");

// dotenv.config();

// connectDB();

// const app = express();

// // app.set("view engine", "ejs");

// // app.set(
// //   "views",
// //   path.join(__dirname, "views")
// // );

// app.use(cors());
// app.use(express.json());

// /* EJS Setup */

// // EJS Setup
// app.set("view engine", "ejs");
// app.set(
//   "views",
//   path.join(__dirname, "views")
// );

// // app.set("view engine", "ejs");

// // app.set(
// //   "views",
// //   path.join(__dirname, "views")
// // );


// // EJS Pages

// app.get("/", (req, res) => {
//   res.render("index");
// });

// app.get("/login", (req, res) => {
//   res.render("login");
// });

// app.get("/signup", (req, res) => {
//   res.render("signup");
// });

// app.get("/products", (req, res) => {
//   res.render("products");
// });

// app.get("/cart", (req, res) => {
//   res.render("cart");
// });

// app.get("/admin", (req, res) => {
//   res.render("admin");
// });
// // Frontend Static Files

// app.use(
//   express.static(
//     path.join(__dirname, "frontend")
//   )
// );
// // app.use(
// //   express.static(
// //     path.join(__dirname, "../frontend/css/style.css")
// //   )
// // );

// app.get("/test", (req, res) => {
//   res.render("index");
// });

// // Uploads Folder
// app.use(
//   "/uploads",
//   express.static(
//     path.join(__dirname, "uploads")
//   )
// );

// // // Home Route
// // app.get("/", (req, res) => {
// //   res.send(
// //     "UptownFresh Backend Running Successfully 🚀"
// //   );
// // });

// // Routes
// app.use(
//   "/api/auth",
//   require("./routes/authRoutes")
// );

// app.use(
//   "/api/products",
//   require("./routes/productRoutes")
// );

// app.use(
//   "/api/cart",
//   require("./routes/cartRoutes")
// );

// const PORT =
//   process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(
//     `Server Running On Port ${PORT}`
//   );
// });


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

app.get("/cart", (req, res) => {
res.render("cart");
});

app.get("/admin", (req, res) => {
res.render("admin");
});


app.get("/add-product",(req,res)=>{
res.render("add-product");
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


const PORT =
process.env.PORT || 5000;

app.listen(PORT, () => {
console.log(
`Server Running On Port ${PORT}`
);
});
