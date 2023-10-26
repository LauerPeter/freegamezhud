

const User = require('../models/User'); 
const bcrypt = require('bcrypt');
require('dotenv').config();

const userController = {
  async signup(req, res) {
    try {
      const { Uname, email, password } = req.body;
      // Check if the username or email already exists in the database
      const existingUser = await User.findOne({ $or: [{ Uname }, { email }] });
      if (existingUser) {
        return res.status(400).json({ message: 'Username or email already exists.' });
      }
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
      // Create a new user record with the hashed password
      const newUser = new User({
        Uname,
        email,
        password: hashedPassword,
      });
      // Save the user to the database
      await newUser.save();
      res.status(201).json({ userId: newUser._id, message: 'User registered successfully.' });
    } catch (error) {
      console.error('Error in signup:', error);
      res.status(500).json({ message: 'Something went wrong.', error: error.message });
    }
  },

  async signin(req, res) {
    try {
      const { email, password } = req.body;
      console.log('Provided email:', email);
      console.log('Provided password:', password);
  
      // Find the user by their email
      const user = await User.findOne({ email });
      if (!user) {
        console.log('Signin: User not found');
        return res.status(401).json({ message: 'User not found.' });
      }
  
      // Compare the provided password with the stored hashed password
      const isPasswordValid = await bcrypt.compare(password, user.password);
      console.log('Password validation result:', isPasswordValid);
  
      if (!isPasswordValid) {
        console.log('Signin: Password invalid');
        return res.status(401).json({ message: 'Password is incorrect.' });
      }
  
      console.log('Signin: Authentication successful');
      res.json({ userId: user._id, message: 'Authentication successful' });
    } catch (error) {
      console.error('Error in signin:', error);
      res.status(500).json({ message: 'Something went wrong.', error: error.message });
    }
  }  
};  

module.exports = userController;
