const mongoose = require("mongoose");

// ===============================
// Review Schema
// ===============================

const reviewSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    name: {
      type: String,
      required: true
    },

    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5
    },

    comment: {
      type: String,
      required: true,
      trim: true
    }
  },
  {
    timestamps: true
  }
);

// ===============================
// Product Schema
// ===============================

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    price: {
      type: Number,
      required: true
    },

    category: {
      type: String,
      required: true
    },

    stock: {
      type: Number,
      required: true,
      default: 1
    },

    image: {
      type: String,
      required: true
    },

    description: {
      type: String,
      required: true
    },

    // ⭐ Average Rating
    rating: {
      type: Number,
      default: 0
    },

    // ⭐ Total Reviews
    numReviews: {
      type: Number,
      default: 0
    },

    // ⭐ Reviews
    reviews: [reviewSchema]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model(
  "Product",
  productSchema
);