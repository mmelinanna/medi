// product.routes.js
const express = require('express');
const router = express.Router();
const products = require('../controllers/product.controller');

// Retrieve all products
router.get('/products', products.getAllProducts);
router.get('/products/search', products.getProductsByHilfsmittelnummer);
router.get('/products/search1', products.getData);

module.exports = router;
