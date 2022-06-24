const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter your name"],
        maxlength: [30, "Name cannot exceed 30 characters"],
        minlength: [4,"Name must be 4 character long",]
    },
    email:{
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

    module.exports = mongoose.model("user", userSchema)