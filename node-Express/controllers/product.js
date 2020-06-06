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
const products = [];
exports.addProduct=(req,res,next)=>{
    console.log(req.body);
    products.push({ title: req.body.title });
    res.redirect('/');   
}

exports.getProduct=(req,res,next)=>{
    //console.log('In the last middleware');
    //res.send('<h1>Hello from Pallab</h1>'); 
    console.log('shop.js', products);
    //res.sendFile(path.join(__dirname,'../','views','shop.html'))
    res.render('shop', {
        prods: products, 
        pageTitle: 'Shop', path: '/',
        hasProducts:products.length>0,
        activeShop:true,
        productCSS:true});
}