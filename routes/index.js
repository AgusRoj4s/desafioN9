const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
module.exports = () => {
    router.get('/', (req, res) => {
        res.send('Hello World');
    });
    router.get('/productos/listar', productController.getProducts);
    router.get('/productos/listar/:id', productController.getOneProduct);
    router.post('/productos/guardar', productController.saveProduct);
    router.put('/productos/actualizar/:id', productController.updateProduct);
    router.delete('/productos/borrar/:id', productController.deleteProduct);

    return router;
};