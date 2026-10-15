const express = require('express');

const router = express.Router();
const {createProduct, checkProducts, checkSingleProduct, updateProduct, deleteProduct} = require('../controller/user');

router.post('/create', createProduct);
router.get('/check', checkProducts);
router.get('/checks/:id', checkSingleProduct);
router.patch('/update/:id', updateProduct);
router.delete('/delete/:id', deleteProduct);

module.exports = router

