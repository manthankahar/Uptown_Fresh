# 🛒 UptownFresh – Full Stack Grocery E-Commerce Website

## 📌 Project Overview

UptownFresh is a Full Stack Grocery Shopping Web Application developed using **Node.js, Express.js, EJS, MongoDB, and Mongoose**.

The application allows customers to register, login securely, browse products, search products, filter products, manage cart, place orders, download invoices, write product reviews, manage wishlist, and view their profile.

An Admin Dashboard is also available where administrators can manage products, orders, stock, users, and store analytics.

---

# 🚀 Features

## 👤 User Features

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

---

## 👨‍💼 Admin Features

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

- HTML5
- CSS3
- JavaScript
- EJS

## Backend

- Node.js
- Express.js

## Database

- MongoDB
- Mongoose

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
- nodemon

---

# 📂 Project Structure

```
UptownFresh
│
├── backend
│   ├── config
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
│   │
│   ├── server.js
│   └── package.json
│
├── frontend
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
│
└── README.md
```

---

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

```bash
git clone https://github.com/your-username/UptownFresh.git
```

---

## Open Project

```bash
cd UptownFresh
```

---

## Install Packages

```bash
npm install
```

---

## Create .env

```
PORT=5000

MONGO_URI=Your MongoDB URI

JWT_SECRET=Your Secret Key
```

---

## Start Project

```bash
npm run dev
```

or

```bash
node backend/server.js
```

---

# 📸 Project Screens

- Home Page
- Login
- Signup
- Products
- Product Details
- Wishlist
- Cart
- Checkout
- Orders
- Profile
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

---

# 👨‍💻 Developed By

## Manthan Kahar

BCA Final Project

Node.js | Express.js | MongoDB | EJS | JavaScript

---

# ⭐ Thank You

Thank you for visiting **UptownFresh** ❤️

If you like this project, don't forget to ⭐ the repository.