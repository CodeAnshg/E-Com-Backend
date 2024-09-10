const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/all/products', productController.getAllProducts);
router.get('/all/products/:id', productController.getProductById);


module.exports = router;
