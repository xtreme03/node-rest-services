const fs=require('fs')
const path=require('path')
const shortId=require('shortid')

const cart=require('./cart')
const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'products.json'
  );

  const getProductsFromFile = cb => {
      console.log(p)
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        console.log("error")
        cb([]);
      } else {
        cb(JSON.parse(fileContent));
      }
    });
  };
  
module.exports=class Product{
    constructor(id,title,imageUrl,price,description){
        this.id=id
        this.title=title
        this.imageUrl=imageUrl
        this.description=description
        this.price=price
    }

    save() {
        getProductsFromFile(products => {
          if(this.id){
            console.log("if")
            const existingProductIndex=products.findIndex(prod=>prod.id===this.id)
            const updatedProducts=[...products]
            updatedProducts[existingProductIndex]=this
            fs.writeFile(p, JSON.stringify(updatedProducts), err => {
              console.log(err);
            });
          }
          else{
          this.id=shortId.generate().toString();
          products.push(this);
          fs.writeFile(p, JSON.stringify(products), err => {
            console.log(err);
          });
        }});
      
      }
   static deleteById(prodId){
    getProductsFromFile(products=>{
      const product=products.find(prod=>prod.id===prodId)
      const updatedProductList=products.filter(p=>p.id !==prodId)
      fs.writeFile(p, JSON.stringify(updatedProductList), err => {
        if(!err){
          cart.deleteProductFromCart(prodId,product.price)
        }
      });
    })

    }

      static fetchAll(cb) {
        getProductsFromFile(cb);
      }
    static findProductById(id,cb){
      getProductsFromFile(products=>{
        const product=products.find(p=>p.id===id)
        cb(product)
      })
    }
}