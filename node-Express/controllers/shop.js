const Product=require('../model/product')
const Cart=require('../model/cart')

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
  //console.log(productId)
  Product.findProductById(productId,product=>{
    res.render('shop/product-detail',{
      product:product,
      pageTitle: product.title,
    path:'/products'})
  })
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
  Cart.getCartProducts(cart=>{
    Product.fetchAll(products=>{
      const cartProducts=[];
      for (product of products){
        const cartProductData=cart.products.find(prod=>prod.id===product.id);
        if(cartProductData){
          cartProducts.push({productData:product,qty:cartProductData.qty})
        }
      }
      res.render('shop/cart',{
        path:'/cart',
        pageTitle:'Your Cart',
        products:cartProducts
    })
    })
  })
   
}

exports.postCart=(req,res,next)=>{
  const prodId=req.body.productId;
  console.log(prodId);
  Product.findProductById(prodId,(product)=>{
    Cart.addProduct(prodId,product.price)
  }) 
  res.redirect('/')
}

exports.postCartDeleteProduct=(req,res,next)=>{
 const prodId=req.body.productId
 Product.findProductById(prodId,product=>{
   Cart.deleteProductFromCart(prodId,product.price)
   res.redirect('/cart')
 })
}
exports.getCheckout=(req,res,next)=>{
    res.render('shop/checkout',{
        path:'/checkout',
        pageTitle:'Checkout'
    })
     

}