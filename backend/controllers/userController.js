const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

const User = require("../models/userModel");
const sendToken = require("../utils/jwttoken")
const sendEmail = require("../utils/sendEmail")

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


//logout
exports.logout = catchAsyncErrors(async (req, res, next) => {

    res.cookie("token", null), {
        expires: new Date(Date.now()),
        httpOnly: true,
    }
    res.status(200).json({
        success: true,
        message: "Logged out "
    });
});

//forgot password

exports.forgotPassword = catchAsyncErrors(async (req, res, next) => {

    const user = await User.findOne({ email: req.body.email });

    if (!user) {
        return next(new ErrorHandler("user not found", 404));
    }

    //resetPassword token 
    const resetToken = user.getResetPasswordToken();

    await user.save({ validateBeforeSave: false });

    const resetPasswordUrl = `${req.protocol}://${req.get("host")}/api/v1/password/reset/${resetToken}`;

    const message = `Your password reset token is: \n\n ${resetPasswordUrl} \n\nIf you have not requested this email then, please igonore it`;

    try {
        await sendEmail({
            email: user.email,
            subject: `Ecommerce Password recovery`,
            message,
        });

        res.status(200).json({
            success: true,
            message: `Email sent to ${user.email} successfully`,
        });

    } catch (error) {
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save({ validateBeforeSave: false });

        return next(new ErrorHandler(error.message, 500));

    }
});

exports.resetPassword = catchAsyncErrors(async (req, res, next) => {
    const resetPasswordToken = crypto.createHash("sha256").update(req.param.token).digest("hex");

    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user) {
        return next(new ErrorHandler("Reset Password token is invalid or has been expired", 400));
    }

    if (req.body.password != req.body.confirmPassword) {
        return next(new ErrorHandler("Password does not match", 400));
    }

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    sendToken(user, 200, res);
});

