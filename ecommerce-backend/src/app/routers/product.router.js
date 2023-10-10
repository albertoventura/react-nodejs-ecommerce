const { Router } = require('express');
const router = Router();
const path = require('../../constant/path');
const productController = require('../controllers/product.controller');


router.get(path.product.getAll, productController.getAll);
router.get(path.product.getById, productController.getById);
router.post(path.product.create, productController.create);
router.put(path.product.update, productController.update);
router.delete(path.product.delete, productController.delete);

module.exports = router;