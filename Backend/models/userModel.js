const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Please input a first name"],
    },
    lastName: {
        type: String,
        required: [true, "Please input a first name"],
    },
    email: {
        type: String,
        required: [true, "Please input email"],
    },
    password: {
        type: String,
        required: [true, "Please input password"],
        minLength: [8, "Password must be up to 6 characters"],
        // maxLength: [23, "Password must be less than 23 characters"],
    },
});


const User = mongoose.model("User", userSchema);

module.exports = User;