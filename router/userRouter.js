const express = require('express');

const router = express.Router();

const {createProduct, checkProducts, checkSingleProduct, 
updateProduct, deleteProduct} = require('../controller/user');

const logger = require('../middleware/logger')

router.post('/create',logger, createProduct);
router.get('/check', checkProducts);
router.get('/checks/:id', checkSingleProduct);
router.patch('/update/:id',logger, updateProduct);
router.delete('/delete/:id',logger, deleteProduct);

module.exports = router

