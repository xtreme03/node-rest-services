const fs=require('fs')
const path=require('path')

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
    constructor(title,imageUrl,price,description){
        this.title=title
        this.imageUrl=imageUrl
        this.description=description
        this.price=price
    }

    save() {
      this.id=Math.random().toString();
        getProductsFromFile(products => {
          products.push(this);
          fs.writeFile(p, JSON.stringify(products), err => {
            console.log(err);
          });
        });
      }
    

      static fetchAll(cb) {
        getProductsFromFile(cb);
      }
    
}