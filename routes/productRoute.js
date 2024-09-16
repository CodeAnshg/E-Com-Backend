const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/all/products', productController.getAllProducts);
router.get('/all/products/:id', productController.getProductById);
router.get('/all/products/category/:category', productController.getProductsByCategory);


module.exports = router;
