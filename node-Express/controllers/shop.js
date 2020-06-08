const Product=require('../model/product')

exports.getProduct=(req,res,next)=>{
    //console.log('In the last middleware');
    //res.send('<h1>Hello from Pallab</h1>'); 
    //const products =Product.fetchAll()
    //console.log('shop.js', products);
    //res.sendFile(path.join(__dirname,'../','views','shop.html'))
    Product.fetchAll(products => {
        res.render('shop/product-list', {
          prods: products,
          pageTitle: 'All products',
          path: '/products'
        });
      });
     
}
exports.getProductById=(req,res,next)=>{
  const productId=req.params.productId;
  console.log(productId)
  res.redirect('/')
}

exports.getIndex=(req,res,next)=>{
    //console.log('In the last middleware');
    //res.send('<h1>Hello from Pallab</h1>'); 
    //const products =Product.fetchAll()
    //console.log('shop.js', products);
    //res.sendFile(path.join(__dirname,'../','views','shop.html'))
    Product.fetchAll(products => {
        res.render('shop/index', {
          prods: products,
          pageTitle: 'Shop',
          path: '/'
        });
      });
    
}

exports.getCart=(req,res,next)=>{
    res.render('shop/cart',{
        path:'/cart',
        pageTitle:'Your Cart'
    })
}

exports.getCheckout=(req,res,next)=>{
    res.render('shop/checkout',{
        path:'/checkout',
        pageTitle:'Checkout'
    })
     

}