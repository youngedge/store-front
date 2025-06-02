const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please input a name"],
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

//hash password
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        return next();
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;