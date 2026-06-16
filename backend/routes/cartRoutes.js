const express = require("express");

const Cart = require("../models/Cart");

const authMiddleware =
  require("../middleware/authMiddleware");

const router = express.Router();

router.post(
  "/add",
  authMiddleware,
  async (req, res) => {
    const { productId } = req.body;

    let cart = await Cart.findOne({
      userId: req.user.id
    });

    if (!cart) {
      cart = new Cart({
        userId: req.user.id,
        products: []
      });
    }

    cart.products.push({
      productId,
      quantity: 1
    });

    await cart.save();

    res.json(cart);
  }
);

router.get(
  "/",
  authMiddleware,
  async (req, res) => {
    const cart = await Cart.findOne({
      userId: req.user.id
    }).populate("products.productId");

    res.json(cart);
  }
);

module.exports = router;