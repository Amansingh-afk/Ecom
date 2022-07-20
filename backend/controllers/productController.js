const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");



//Product creation
exports.createProduct = catchAsyncErrors(async (req, res, next) => {

    req.body.user = req.user.id;
    
    const product = await Product.create(req.body);

    res.status(201).json({
        success: true,
        product
    })
});

// Get all products
exports.getAllProducts = catchAsyncErrors(async (req, res) => {

    const resultPerPage = 5;
    const productCount = await Product.countDocuments();

    const apifeature = new ApiFeatures(Product.find(), req.query).search().filter().pagination(resultPerPage);

    const products = await apifeature.query;

    res.status(200).json({
        success: true,
        products
    })
});

//update

exports.updateProduct = catchAsyncErrors(async (req, res, next) => {

    let product = await Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorHandler("Product not found", 404));
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });

    res.status(200).json({
        success: true,
        Product
    })
});

//delete

exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {

    const product = await Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorHandler("Product not found", 404));
    }

    await product.remove();

    res.status(200).json({
        success: true,
        message: " Product deleted successfully"
    })


});

//product details

exports.getProductDetails = catchAsyncErrors(async (req, res, next) => {

    const product = await Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorHandler("Product not found", 404));
    }

    res.status(200).json({
        success: true,
        product,
        productCount,
    })
});

//create new review or update review
exports.createProductReview = catchAsyncErrors(async (req, res, next) => {

    const { rating, comment, productId } = req.body;

    const review = {
        user: req.user._id,
        name: req.user.name,
        rating: Number(rating),
        comment,
    };

    const product = await Product.findByID(productId);

    const isReviewed = product.reviews.find(
        (rev) => rev.user.toString() === req.user._id.toString()
    );

    if (isReviewed) {
        product.reviews.foreach((rev) => {
            if (rev.user.toString() === req.user._id.toString())
                (rev.rating = rating), (rev.comment = comment);
        });
    }
    else {
        product.reviews.push(review);
        product.numOfReviews = product.review.length;
    }

    let avg = 0;
    product.ratings = product.reviews.foreach((rev) => {
        avg += rev.raing
    }) / product.reviews.length;

    await product.ssave({ validateBeforeSave: false });

    res.status(200).json({
        success: true,
    });
});
