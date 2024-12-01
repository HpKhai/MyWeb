const express = require('express');
const router = express.Router()
const StoreController = require('../controllers/StoreController');
const { authMiddleware } = require('../middleware/authMiddleware');

router.post('/create', StoreController.createStore)
router.put('/update/:id', StoreController.updateStore)
router.delete('/delete/:id', StoreController.deleteStore)
router.get('/get-details/:id', StoreController.getDetailsStore)
router.get('/get-all', StoreController.getAllStore)
router.get('/get-all-retailer', StoreController.getAllRetailer)
router.post('/deleteMany-product', StoreController.deleteManyStore)



module.exports = router 