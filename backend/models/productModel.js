const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, " Product name Missing."]
    },
    description: {
        type: String,
        required: [true, "Product description Missing."]
    },
    price: {
        type: Number,
        required: [true, "Product price missing."],
        maxlength: [8, " max lenght reached"]
    },
    rating: {
        type: Number,
        default: 0
    },
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    ],
    category: {
        type: String,
        required: [true, "Enter product category "]
    },
    stock: {
        type: Number,
        required: [true, "Please Enter product stock"],
        maxlength: [4, "Cannot exceed 4 characters"],
        default: 1
    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            name: {
                type: String,
                required: true
            },
            rating: {
                type: Number,
                required: true
            },
            comment: {
                type: String,
                required: true
            }
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model("Product", productSchema)