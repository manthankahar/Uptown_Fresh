<<<<<<< HEAD
# 🛒 UptownFresh – Full Stack Grocery E-Commerce Website

## 📌 Project Overview

UptownFresh is a Full Stack Grocery Shopping Web Application developed using **Node.js, Express.js, EJS, MongoDB, and Mongoose**.

The application allows customers to register, login securely, browse products, search products, filter products, manage cart, place orders, download invoices, write product reviews, manage wishlist, and view their profile.

An Admin Dashboard is also available where administrators can manage products, orders, stock, users, and store analytics.
=======
# 🛒 UptownFresh - Online Grocery Store

## 📌 Project Description

UptownFresh is a Full Stack Grocery Shopping Web Application developed using **Node.js, Express.js, EJS, MongoDB, and Mongoose**.

The application allows users to create an account, login securely, browse grocery products, search products, add products to cart, manage cart quantity, place orders, and view their profile.

It also includes an **Admin Panel** where administrators can add and manage products.
>>>>>>> ee569e7f0243ff31b14cf555478064f48d37a03c

---

# 🚀 Features

## 👤 User Features

<<<<<<< HEAD
- User Registration
- Secure Login (JWT Authentication)
- Logout
- User Profile
- Browse Products
- Product Details Popup
- Product Search
- Category Filter
- Price Filter
- Product Sorting
- Product Rating
- Product Reviews
- Wishlist
- Add To Cart
- Update Cart Quantity
- Remove From Cart
- Checkout
- Place Order
- View Order History
- Download PDF Invoice
=======
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
>>>>>>> ee569e7f0243ff31b14cf555478064f48d37a03c

---

## 👨‍💼 Admin Features

<<<<<<< HEAD
- Admin Login
- Admin Dashboard
- Total Products Counter
- Total Users Counter
- Total Orders Counter
- Total Revenue Counter
- Add Product
- Update Product
- Delete Product
- Update Product Stock
- Manage Customer Orders
- Change Order Status
- Delete Orders

---

# 🛠 Technology Stack

## Frontend
=======
- Secure Admin Login
- Add New Products
- View Products
- Manage Products

---

# 🛠 Tech Stack

### Frontend
>>>>>>> ee569e7f0243ff31b14cf555478064f48d37a03c

- HTML5
- CSS3
- JavaScript
- EJS

<<<<<<< HEAD
## Backend
=======
### Backend
>>>>>>> ee569e7f0243ff31b14cf555478064f48d37a03c

- Node.js
- Express.js

<<<<<<< HEAD
## Database
=======
### Database
>>>>>>> ee569e7f0243ff31b14cf555478064f48d37a03c

- MongoDB
- Mongoose

<<<<<<< HEAD
## Authentication

- JWT
- bcryptjs

## Packages Used

- express
- mongoose
- jsonwebtoken
- bcryptjs
- multer
- dotenv
- cors
- pdfkit
=======
### Authentication

- JWT (JSON Web Token)
- bcryptjs

### Other Packages

- dotenv
- cors
>>>>>>> ee569e7f0243ff31b14cf555478064f48d37a03c
- nodemon

---

<<<<<<< HEAD
# 📂 Project Structure
=======
# 📁 Project Folder Structure
>>>>>>> ee569e7f0243ff31b14cf555478064f48d37a03c

```
UptownFresh
│
├── backend
│   ├── config
<<<<<<< HEAD
│   │      db.js
│   │
│   ├── controllers
│   │      authController.js
│   │      productController.js
│   │      cartController.js
│   │      orderController.js
│   │      adminController.js
│   │      wishlistController.js
│   │
│   ├── middleware
│   │      authMiddleware.js
│   │      adminMiddleware.js
│   │
│   ├── models
│   │      User.js
│   │      Product.js
│   │      Cart.js
│   │      Order.js
│   │
│   ├── routes
│   │      authRoutes.js
│   │      productRoutes.js
│   │      cartRoutes.js
│   │      orderRoutes.js
│   │      adminRoutes.js
│   │      wishlistRoutes.js
│   │
│   ├── uploads
│   ├── views
=======
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
>>>>>>> ee569e7f0243ff31b14cf555478064f48d37a03c
│   │
│   ├── server.js
│   └── package.json
│
├── frontend
<<<<<<< HEAD
│
│   ├── css
│   ├── images
│   ├── products.js
│   ├── cart.js
│   ├── login.js
│   ├── signup.js
│   ├── profile.js
│   ├── wishlist.js
│   ├── toast.js
=======
│     style.css
│     products.js
│     login.js
│     signup.js
│     cart.js
│     admin.js
│     toast.js
>>>>>>> ee569e7f0243ff31b14cf555478064f48d37a03c
│
└── README.md
```

---

<<<<<<< HEAD
# 🔐 Authentication

- JWT Authentication
- Password Encryption using bcryptjs
- Protected Routes
- Admin Authorization
- Token Verification Middleware

---

# 📦 CRUD Operations

## Products

- Create Product
- Read Products
- Update Product
- Delete Product
- Search Products
- Filter Products
- Sort Products
- Update Stock
- Product Reviews

---

## Cart

- Add Product
- Remove Product
- Increase Quantity
- Decrease Quantity
- Calculate Total

---

## Orders

- Place Order
- View Orders
- Download Invoice
- Update Status
- Delete Order

---

## Wishlist

- Add Wishlist
- Remove Wishlist
- View Wishlist

---

# 📊 Admin Dashboard

Dashboard provides

- Total Products
- Total Users
- Total Orders
- Total Revenue
- Product Management
- Order Management
- Stock Management

---

# 📄 Invoice

Every user can download their invoice in **PDF format** after placing an order.

Invoice contains:

- Customer Name
- Email
- Ordered Products
- Quantity
- Total Amount
- Delivery Charges
- Grand Total

---

# ⚙ Installation

## Clone Repository
=======
# ⚙ Installation

### Clone Repository
>>>>>>> ee569e7f0243ff31b14cf555478064f48d37a03c

```bash
git clone https://github.com/your-username/UptownFresh.git
```

---

<<<<<<< HEAD
## Open Project
=======
### Open Project
>>>>>>> ee569e7f0243ff31b14cf555478064f48d37a03c

```bash
cd UptownFresh
```

---

<<<<<<< HEAD
## Install Packages
=======
### Install Packages
>>>>>>> ee569e7f0243ff31b14cf555478064f48d37a03c

```bash
npm install
```

---

<<<<<<< HEAD
## Create .env
=======
### Create .env File
>>>>>>> ee569e7f0243ff31b14cf555478064f48d37a03c

```
PORT=5000

<<<<<<< HEAD
MONGO_URI=Your MongoDB URI

JWT_SECRET=Your Secret Key
=======
MONGO_URI=your_mongodb_connection

JWT_SECRET=your_secret_key
>>>>>>> ee569e7f0243ff31b14cf555478064f48d37a03c
```

---

<<<<<<< HEAD
## Start Project
=======
### Start Server
>>>>>>> ee569e7f0243ff31b14cf555478064f48d37a03c

```bash
npm run dev
```

or

```bash
<<<<<<< HEAD
node backend/server.js
=======
node server.js
>>>>>>> ee569e7f0243ff31b14cf555478064f48d37a03c
```

---

<<<<<<< HEAD
# 📸 Project Screens
=======
# 📷 Project Screens
>>>>>>> ee569e7f0243ff31b14cf555478064f48d37a03c

- Home Page
- Login
- Signup
- Products
<<<<<<< HEAD
- Product Details
- Wishlist
=======
>>>>>>> ee569e7f0243ff31b14cf555478064f48d37a03c
- Cart
- Checkout
- Orders
- Profile
<<<<<<< HEAD
- Admin Dashboard
- Add Product
- Manage Orders

---

# 🎯 Learning Outcomes

This project demonstrates practical implementation of

- MVC Architecture
- REST APIs
- CRUD Operations
- Authentication & Authorization
- MongoDB Database Design
- Express Routing
- Middleware
- JWT Security
- PDF Generation
- EJS Templating

---

# 🚀 Future Enhancements

- Razorpay Payment Gateway
- Stripe Integration
- Email Verification
- Forgot Password OTP
- Product Recommendations
- Coupon System
- Sales Analytics
- Responsive Admin Dashboard
- Image Compression
- Multi Vendor Support
- Notifications
- Live Order Tracking
=======
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
>>>>>>> ee569e7f0243ff31b14cf555478064f48d37a03c

---

# 👨‍💻 Developed By

<<<<<<< HEAD
## Manthan Kahar

BCA Final Project

Node.js | Express.js | MongoDB | EJS | JavaScript
=======
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
>>>>>>> ee569e7f0243ff31b14cf555478064f48d37a03c

---

# ⭐ Thank You
<<<<<<< HEAD

Thank you for visiting **UptownFresh** ❤️

If you like this project, don't forget to ⭐ the repository.
=======
>>>>>>> ee569e7f0243ff31b14cf555478064f48d37a03c
