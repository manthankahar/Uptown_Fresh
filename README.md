# 🛒 UptownFresh - Online Grocery Store

## 📌 Project Description

UptownFresh is a Full Stack Grocery Shopping Web Application developed using **Node.js, Express.js, EJS, MongoDB, and Mongoose**.

The application allows users to create an account, login securely, browse grocery products, search products, add products to cart, manage cart quantity, place orders, and view their profile.

It also includes an **Admin Panel** where administrators can add and manage products.

---

# 🚀 Features

## 👤 User Features

- User Signup
- User Login (JWT Authentication)
- Logout
- View Products
- Search Products
- Category Filter
- Add Products to Cart
- Increase Quantity
- Decrease Quantity
- Remove Product from Cart
- Checkout
- Place Order
- View Orders
- User Profile

---

## 👨‍💼 Admin Features

- Secure Admin Login
- Add New Products
- View Products
- Manage Products

---

# 🛠 Tech Stack

### Frontend

- HTML5
- CSS3
- JavaScript
- EJS

### Backend

- Node.js
- Express.js

### Database

- MongoDB
- Mongoose

### Authentication

- JWT (JSON Web Token)
- bcryptjs

### Other Packages

- dotenv
- cors
- nodemon

---

# 📁 Project Folder Structure

```
UptownFresh
│
├── backend
│   ├── config
│   │     db.js
│   │
│   ├── controllers
│   │     authController.js
│   │     productController.js
│   │     cartController.js
│   │     orderController.js
│   │
│   ├── middleware
│   │     authMiddleware.js
│   │     adminMiddleware.js
│   │
│   ├── models
│   │     User.js
│   │     Product.js
│   │     Cart.js
│   │     Order.js
│   │
│   ├── routes
│   │     authRoutes.js
│   │     productRoutes.js
│   │     cartRoutes.js
│   │     orderRoutes.js
│   │
│   ├── uploads
│   │
│   ├── views
│   │     partials
│   │     index.ejs
│   │     login.ejs
│   │     signup.ejs
│   │     products.ejs
│   │     cart.ejs
│   │     checkout.ejs
│   │     orders.ejs
│   │     profile.ejs
│   │     admin.ejs
│   │     addProduct.ejs
│   │
│   ├── server.js
│   └── package.json
│
├── frontend
│     style.css
│     products.js
│     login.js
│     signup.js
│     cart.js
│     admin.js
│     toast.js
│
└── README.md
```

---

# ⚙ Installation

### Clone Repository

```bash
git clone https://github.com/your-username/UptownFresh.git
```

---

### Open Project

```bash
cd UptownFresh
```

---

### Install Packages

```bash
npm install
```

---

### Create .env File

```
PORT=5000

MONGO_URI=your_mongodb_connection

JWT_SECRET=your_secret_key
```

---

### Start Server

```bash
npm run dev
```

or

```bash
node server.js
```

---

# 📷 Project Screens

- Home Page
- Login
- Signup
- Products
- Cart
- Checkout
- Orders
- Profile
- Admin Panel
- Add Product

---

# 🔐 Authentication

- JWT Authentication
- Password Hashing using bcryptjs
- Protected Routes
- Admin Authorization

---

# 📦 CRUD Operations

## Product

- Create Product
- Read Product
- Update Product
- Delete Product

## Cart

- Add Product
- Remove Product
- Increase Quantity
- Decrease Quantity

## Orders

- Place Order
- View Orders

---

# 👨‍💻 Developed By

**Manthan Kahar**

---

# 📚 Future Improvements

- Online Payment Gateway
- Product Reviews
- Wishlist
- Email Verification
- Order Tracking
- Dashboard Analytics
- Responsive Admin Panel
- Image Upload using Multer

---

# ⭐ Thank You