const Review = require("../models/Review");
const Product = require("../models/product");
const User = require("../models/user");

// ======================================
// Get Reviews Of Product
// ======================================

const getReviews = async (req, res) => {

    try {

        const reviews = await Review.find({

            productId: req.params.productId

        }).sort({

            createdAt: -1

        });

        res.json(reviews);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// ======================================
// Add Review
// ======================================

const addReview = async (req, res) => {

    try {

        const { rating, comment } = req.body;

        const product = await Product.findById(req.params.productId);

        if (!product) {

            return res.status(404).json({
                message: "Product Not Found"
            });

        }

        const user = await User.findById(req.user.id);

        if (!user) {

            return res.status(404).json({
                message: "User Not Found"
            });

        }

        const alreadyReviewed = await Review.findOne({

            productId: req.params.productId,
            userId: req.user.id

        });

        if (alreadyReviewed) {

            return res.status(400).json({
                message: "You Already Reviewed This Product"
            });

        }

        await Review.create({

            productId: req.params.productId,
            userId: req.user.id,
            userName: user.name,
            rating,
            comment

        });

        // ===========================
        // Update Product Rating
        // ===========================

        const reviews = await Review.find({

            productId: req.params.productId

        });

        const total = reviews.reduce(

            (sum, item) => sum + item.rating,

            0

        );

        product.rating = total / reviews.length;

        await product.save();

        res.json({

            message: "Review Added Successfully"

        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

module.exports = {

    getReviews,
    addReview

};