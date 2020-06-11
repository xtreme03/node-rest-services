const Product=require('../model/product')
exports.getAddProduct=(req,res,next)=>{
    console.log('In another middleware');
    //res.send('<form action="/admin/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>')
    //res.sendFile(path.join(__dirname,'../','views','add-product.html'))
    res.render('admin/edit-product', { 
        pageTitle: 'Add Product', 
        path: '/admin/add-product',
        formsCSS:true,
        productCSS:true,
        activeAddProduct:true,
        editing:false
    })}
exports.getEditProduct=(req,res,next)=>{
    const editMode=req.query.edit
    console.log(editMode)
    if(!editMode){
        return res.redirect('/')
    }
    const prodId = req.params.productId;
    Product.findProductById(prodId, product => {
      if (!product) {
        return res.redirect('/');
      }
    res.render('admin/edit-product',{
    pageTitle: 'Edit Product',
    path:'/admin/edit-product',
    editing:editMode,
    product:product
})
})}
exports.postAddProduct=(req,res,next)=>{
    //console.log(req.body);
    const title =req.body.title
    const imageUrl=req.body.imageUrl
    const price =req.body.price
    const description=req.body.description

    const product=new Product(null,title,imageUrl,price,description);
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
exports.postEditProduct=(req,res,next)=>{
    const prodid=req.body.productId
    const updatedtitle =req.body.title
    const updatedimageUrl=req.body.imageUrl
    const updatedprice =req.body.price
    const updateddescription=req.body.description

    const updatedProduct=new Product(prodid,updatedtitle,updatedimageUrl,updatedprice,updateddescription);
    updatedProduct.save()
    res.redirect('/admin/products');       

}

exports.postDeleteProduct=(req,res,next)=>{
  const prodId=req.body.productId
  Product.deleteById(prodId)
  res.redirect('/admin/products')
}