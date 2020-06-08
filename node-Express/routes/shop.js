const path=require('path')

const express=require('express')

//const adminData = require('./admin');
const shopController=require('../controllers/shop')


const router=express.Router()
router.get('/',shopController.getIndex)
router.get('/products',shopController.getProduct)
router.get('/products/:productId',shopController.getProductById)
router.get('/cart',shopController.getCart)
router.get('/checkout',shopController.getCheckout)

module.exports=router;