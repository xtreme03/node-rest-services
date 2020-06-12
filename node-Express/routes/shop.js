const path=require('path')

const express=require('express')

//const adminData = require('./admin');
const shopController=require('../controllers/shop')
const { render } = require('pug')


const router=express.Router()
router.get('/',shopController.getIndex)
router.get('/products',shopController.getProduct)
router.get('/products/:productId',shopController.getProductById)
router.get('/cart',shopController.getCart)
router.post('/cart',shopController.postCart)
router.post('/cart-delete-item',shopController.postCartDeleteProduct)
router.get('/checkout',shopController.getCheckout)

module.exports=router;