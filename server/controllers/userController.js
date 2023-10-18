

const User = require('../models/User'); 
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config()

const signup = async (req, res) => {
  try {
    const { Uname, email, password } = req.body;

    // Check if the username or email already exists in the database
    const existingUser = await User.findOne({ $or: [{ Uname }, { email }] });
    if (existingUser) {
      return res.status(400).json({ message: 'Username or email already exists.' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user record
    const newUser = new User({
      Uname,
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    await newUser.save();

    // Generate a JWT token for the new user
    const token = jwt.sign({ userId: newUser._id }, JWT_SECRET_KEY, { expiresIn: '1h' });
    ;

    res.status(201).json({ userId: newUser._id, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong.' });
  }
};

const signin = async (req, res) => {
  try {
    const { Uname, password } = req.body;

    // Find the user by username
    const user = await User.findOne({ Uname });
    if (!user) {
      return res.status(401).json({ message: 'Authentication failed.' });
    }

    // Compare the provided password with the stored hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Authentication failed.' });
    }

    // Generate a JWT token for the authenticated user
    const token = jwt.sign({ userId: user._id }, JWT_SECRET_KEY, { expiresIn: '1h' });


    res.json({ userId: user._id, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong.' });
  }
};

module.exports = {
  signup,
  signin,
};




