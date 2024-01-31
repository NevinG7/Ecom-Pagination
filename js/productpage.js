class User{
    constructor(email,password,cart=[]){
        this.email=email;
        this.password=password;
    }
}

class Product{
    constructor(name,price,imageurl,category="New"){
        this.productname=name;
        this.price=price;
        this.imageurl=imageurl;
        this.category=category;
    }
}

class Order{
    constructor(User,Products){
        this.User=User;
        this.Products=Products;
    }
}

class Cart{
    constructor(email,CartProducts=[]){
        this.email=email;
        this.CartProducts=CartProducts;
    }
}

class cartItem{
    constructor(Product,qty=1){
        this.Product=Product;
        this.qty=qty;
    }
}

const productname = new URLSearchParams(window.location.search).get('productname');

var AllProducts = JSON.parse(localStorage.getItem("products")) || [];

var ItemToAdd = AllProducts.find(x=>x.productname==productname);

document.getElementById("productImage").src=ItemToAdd.imageurl;
document.getElementById("heading").innerHTML=ItemToAdd.productname;
document.getElementById("productPrice").innerHTML="$"+ ItemToAdd.price;

function AddItem(){

    var h1s = document.getElementsByTagName("h1");
    var productname=h1s[0].innerHTML;

    var price = document.getElementsByClassName('price')[0].innerHTML;

    var currUser = JSON.parse(localStorage.getItem("currUser")) || [];
    var carts = JSON.parse(localStorage.getItem("carts")) || [];

    var userCart=carts.find(x=>x.email==currUser.email)

    var usercartItem = userCart.CartProducts.find(x=>x.Product.productname==ItemToAdd.productname)
    
    if(usercartItem==null){
        var newItem = new cartItem(ItemToAdd)
        userCart.CartProducts.push(newItem);

    }
    else{
        usercartItem.qty=usercartItem.qty+1;
    }

    localStorage.setItem("carts",JSON.stringify(carts))

}




