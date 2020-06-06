const path=require('path')

const express=require('express')

const productsController=require('../controllers/product')

const router=express.Router();


router.get('/add-product',productsController.getAddProduct)
router.post('/add-product',productsController.addProduct)

//module.exports=router;
module.exports= router;