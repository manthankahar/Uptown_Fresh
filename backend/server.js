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

app.use(
  "/uploads",
  express.static(
    path.join(__dirname, "uploads")
  )
);

// Home Route
app.get("/", (req, res) => {
  res.send(
    "UptownFresh Backend Running Successfully 🚀"
  );
});

// Routes
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

// Uncomment only if file exists
// app.use(
//   "/api/admin",
//   require("./routes/adminRoutes")
// );

const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server Running On Port ${PORT}`
  );
});