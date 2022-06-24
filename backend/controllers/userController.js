const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

const User = require("../models/userModel");

//register a user

exports.registerUser = catchAsyncErrors(async (req,res,next) => {
    const {name,email,password} = req.body;

    const user = await User.create({
        name,
        email,
        password,
        avatar:{
            public_id: "this is sample id",
            url: "Publicpicurl",
        },
    });

    res.status(201).json({
        success: true,
        User,
    });
});