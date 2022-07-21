const Order = require("../models/orderModel");
const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");


//create new order
exports.newOrder = catchAsyncErrors(async (req, res, next) => {

    const { 
        shippingInfo, 
        orderItem, 
        paymentInfo, 
        itemsPrice, 
        taxprice, 
        shippingPrice, 
        totalPrice,
    } = req.body;

    const order = await Order.create({
        shippingInfo, 
        orderItem, 
        paymentInfo, 
        itemsPrice, 
        taxprice, 
        shippingPrice, 
        totalPrice,
        paidAt: Date.now(),
        user: req.user._id,
    });

    res.status(20).json({
        success: true, 
        order,
    });
});