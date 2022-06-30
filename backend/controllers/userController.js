const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

const User = require("../models/userModel");
const sendToken = require("../utils/jwttoken")

//register a user
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
    const { name, email, password } = req.body;

    const user = await User.create({
        name,
        email,
        password,
        avatar: {
            public_id: "this is sample id",
            url: "Publicpicurl",
        },
    });

    sendToken(user, 201, res);
});

//login user
exports.loginUser = catchAsyncErrors(async (req, res, next) => {

    const { email, password } = req.body;

    //checking valid email&pasword
    if (!email || !password)
        return next(new ErrorHandler("Please Enter email & password", 400));

    const user = await User.findOne({ email }).select("+password");

    if (!user)
        return next(new ErrorHandler("Invalid email & password:", 401));

    const isPasswordMatched = user.comparePassword(password);

    if (!isPasswordMatched)
        return next(new ErrorHandler("Invalid email & password", 401));

    sendToken(user, 200, res);
});