const Product=require('../model/product')

exports.getAddProduct=(req,res,next)=>{
    console.log('In another middleware');
    //res.send('<form action="/admin/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>')
    //res.sendFile(path.join(__dirname,'../','views','add-product.html'))
    res.render('add-product', { 
        pageTitle: 'Add Product', 
        path: '/admin/add-product',
        formsCSS:true,
        productCSS:true,
        activeAddProduct:true
    })}
exports.addProduct=(req,res,next)=>{
    console.log(req.body);
    const product=new Product(req.body.title);
    product.save()
    res.redirect('/');   
}

exports.getProduct=(req,res,next)=>{
    //console.log('In the last middleware');
    //res.send('<h1>Hello from Pallab</h1>'); 
    //const products =Product.fetchAll()
    //console.log('shop.js', products);
    //res.sendFile(path.join(__dirname,'../','views','shop.html'))
    Product.fetchAll(products => {
        res.render('shop', {
          prods: products,
          pageTitle: 'Shop',
          path: '/',
          hasProducts: products.length > 0,
          activeShop: true,
          productCSS: true
        });
      });
    
}