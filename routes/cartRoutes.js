const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/cartController');

router.get('/category', categoryController.getAllCategories);


module.exports = router;