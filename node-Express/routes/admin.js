const path=require('path')

const express=require('express')

const adminController=require('../controllers/admin')

const router=express.Router();


router.get('/add-product',adminController.getAddProduct)

router.get('/products',adminController.getAdminProducts)

router.post('/add-product',adminController.postAddProduct)

router.get('/edit-product/:productId',adminController.getEditProduct)

router.post('/edit-product',adminController.postEditProduct) //will update it to update product route later

router.post('/delete-product',adminController.postDeleteProduct)

//module.exports=router;
module.exports= router;