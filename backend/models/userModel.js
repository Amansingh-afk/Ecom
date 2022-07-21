const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter your name"],
        maxlength: [30, "Name cannot exceed 30 characters"],
        minlength: [4, "Name must be 4 character long",]
    },
    email: {
        type: String,
        required: [true, " Please Enter your name"],
        unique: true,
        validate: [validator.isEmail, "Please Enter valid Email"],
    },
    password: {
        type: String,
        required: [true, " Please Enter your password"],
        minlength: [8, " Password should be 8 characters long"],
        select: false,                          // Hides password in .find() method.
    },
    avatar: {
        public_id: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        }
    },
    role: {
        type: String,
        default: "user",
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
});

userSchema.pre("save", async function (next) {

    if (!this.isModified("password")) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);

});

//jwt token
userSchema.methods.getJWTToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
    });
};
//compare password

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

//generating password reset token

userSchema.methods.getResetPasswordToken = function () {

    const resetToken = crypto.randomBytes(20).toString("hex");

    this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");

    this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;

    return resetToken;
};

module.exports = mongoose.model("user", userSchema);
