export class User{
    constructor(email,password,cart=[]){
        this.email=email;
        this.password=password;
    }
}


export class Product{
    constructor(name,price,imageurl,category="New"){
        this.productname=name;
        this.price=price;
        this.imageurl=imageurl;
        this.category=category;
    }
}

export class Order{
    constructor(User,Products){
        this.User=User;
        this.Products=Products;
    }
}

export class Cart{
    constructor(email,CartProducts=[]){
        this.email=email;
        this.CartProducts=CartProducts;
    }
}
export class cartItem{
    constructor(Product,qty=1){
        this.Product=Product;
        this.qty=qty;
    }
}
