const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

// Get all users
const getAllUsers = asyncHandler(async (req, res) => {
    try {
        const users = await User.find().select('-password');
        res.status(200).json(users);
    } catch (error) {
        res.status(500);
        throw new Error("Failed to fetch users");
    }
});

// Register User
const registerUser = asyncHandler(async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    if (!firstName || !lastName || !email || !password) {
        res.status(400);
        throw new Error("Please fill all required fields");
    }
    if (password.length < 6) {
        res.status(400);
        throw new Error("Password must be at least 6 characters");
    }

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

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log(`Registering user - Original password: ${password}, Hashed: ${hashedPassword}`);

    // Combine firstName and lastName into name
    const name = `${firstName} ${lastName}`.trim();

    const user = await User.create({
        name,
        email,
        password: hashedPassword,
    });

    console.log(`User created in DB - Stored password: ${user.password}`);

    const token = generateToken(user._id);

    res.cookie("token", token, {
        path: "/",
        httpOnly: true,
        expires: new Date(Date.now() + 1000 * 86400),
        sameSite: "lax",
        secure: false,
    });

    if (user) {
        const { _id, name, email } = user;
        res.status(201).json({
            _id,
            firstName, // Return firstName separately
            lastName,  // Return lastName separately
            email,
            token,
        });
    } else {
        res.status(400);
        throw new Error("Invalid user data");
    }
});

// Login User
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400);
        throw new Error("Please fill email and password");
    }

    const user = await User.findOne({ email });

    if (!user) {
        res.status(400);
        throw new Error("User not found, please sign up");
    }

    const passwordIsCorrect = await bcrypt.compare(password, user.password);
    console.log(`Password comparison: ${passwordIsCorrect}, Input: ${password}, Hashed: ${user.password}`);

    const token = generateToken(user._id);

    res.cookie("token", token, {
        path: "/",
        httpOnly: true,
        expires: new Date(Date.now() + 1000 * 86400),
        sameSite: "lax",
        secure: false,
    });

    if (user && passwordIsCorrect) {
        const { _id, name, email } = user;
        res.status(200).json({
            _id, name, email,
        });
    } else {
        res.status(400);
        throw new Error("Invalid email or password");
    }
});

// Logout User
const logout = asyncHandler(async (req, res) => {
    res.cookie("token", "", {
        path: "/",
        httpOnly: true,
        expires: new Date(0),
        sameSite: "lax",
        secure: false,
    });
    return res.status(200).json({ message: "Logged out successfully" });
});

module.exports = {
    getAllUsers,
    registerUser,
    loginUser,
    logout,
};