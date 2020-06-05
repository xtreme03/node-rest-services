const path=require('path')

const express=require('express')

const router=express.Router();

const products = [];
router.get('/add-product',(req,res,next)=>{
    console.log('In another middleware');
    //res.send('<form action="/admin/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>')
    //res.sendFile(path.join(__dirname,'../','views','add-product.html'))
    res.render('add-product', { pageTitle: 'Add Product', path: '/admin/add-product' });
})
router.post('/add-product',(req,res,next)=>{
    console.log(req.body);
    products.push({ title: req.body.title });
    res.redirect('/');   
})

//module.exports=router;
exports.routes = router;
exports.products = products;