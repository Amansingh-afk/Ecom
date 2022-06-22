const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");



//Product creation
exports.createProduct = catchAsyncErrors(async(req,res,next)=>{
    const product = await Product.create(req.body);

    res.status(201).json({
        success: true,
        product
    })
}); 

// Get all products
exports.getAllProducts = catchAsyncErrors( async(req, res) => {

    const products = await Product.find();
    res.status(200).json({
    success: true,
        products
    })
});

//update

exports.updateProduct = catchAsyncErrors(async(req,res,next) => {
    
    let product = await Product.findById(req.params.id);

    if(!product){
        return next(new ErrorHandler("Product not found", 404));
    }

    product = await Product.findByIdAndUpdate(req.params.id,req.body,{
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

exports.deleteProduct = catchAsyncErrors(async(req,res,next) => {

    const product = await Product.findById(req.params.id);

    if(!product){
        return next(new ErrorHandler("Product not found", 404));
    }

    await product.remove();

    res.status(200).json({
        success: true,
        message: " Product deleted successfully"
    })


});

//product details

exports.getProductDetails = catchAsyncErrors(async(req,res,next) => {

    const product = await Product.findById(req.params.id);

    if(!product){
            return next(new ErrorHandler("Product not found", 404));
    }

    res.status(200).json({
        success: true,
        product
    })
});