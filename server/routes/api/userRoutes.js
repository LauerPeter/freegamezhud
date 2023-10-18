


const express = require('express');
const router = express.Router();
const { signup } = require('../../controllers/userController');
const { signin } = require('../../controllers/userController');

router.post('/signup', signup);

router.post('/signin', signin);

module.exports = router;

