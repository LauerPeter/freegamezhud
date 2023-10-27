


const express = require('express');
const router = express.Router();
const userController = require('../../controllers/userController');

//http://localhost:3001/api/signup
router.post('/signup', userController.signup);

//http://localhost:3001/api/signin
router.post('/signin', userController.signin);

//http://localhost:3001/api/users/:userID
router.delete('/users/:userId', userController.deleteUser);

//http://localhost:3001/api/users
router.get('/users', userController.getAllUsers);

module.exports = router;

