const asyncHandler = require("express-async-handler");
const User = require("./models/userModel");
const jwt = require("jsonwebtoken");

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    // Validation
    if (!name || !email || !password) {
        res.status(400);
        throw new Error("Please fill all required fields");
    }
    if (password.length < 6) {
        res.status(400);
        throw new Error("Password must be at least 6 characters");
    }

    // Check if user exists
    let userExists;
    try {
        userExists = await User.findOne({ email });
        if (userExists) {
            res.status(400);
            throw new Error("Email has already been registered");
        }
    } catch (error) {
        console.error('Mongoose error:', error);
        res.status(500);
        throw new Error("Internal Server Error");
    }

    // Create new user
    const user = await User.create({
        name,
        email,
        password,
    });

    // Generate token
    const token = generateToken(user._id);

    // Respond with user data and token
    if (user) {
        const { _id, name, email } = user;
        res.status(201).json({
            _id, name, email, token,
        });
    } else {
        res.status(400);
        throw new Error("Invalid user data");
    }
});

module.exports = {
    registerUser,
};
