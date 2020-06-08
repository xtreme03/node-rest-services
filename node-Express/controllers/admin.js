const Product=require('../model/product')
exports.getAddProduct=(req,res,next)=>{
    console.log('In another middleware');
    //res.send('<form action="/admin/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>')
    //res.sendFile(path.join(__dirname,'../','views','add-product.html'))
    res.render('admin/add-product', { 
        pageTitle: 'Add Product', 
        path: '/admin/add-product',
        formsCSS:true,
        productCSS:true,
        activeAddProduct:true
    })}
exports.postAddProduct=(req,res,next)=>{
    //console.log(req.body);
    const title =req.body.title
    const imageUrl=req.body.imageUrl
    const price =req.body.price
    const description=req.body.description

    const product=new Product(title,imageUrl,price,description);
    product.save()
    res.redirect('/');   
}

exports.getAdminProducts=(req,res,next)=>{
    Product.fetchAll(products => {
        res.render('admin/products', {
          prods: products,
          pageTitle: 'Admin Products',
          path: '/admin/products'
        });
      });

}