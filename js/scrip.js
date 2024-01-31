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

 

function AddItem(){

    var h1s = document.getElementsByTagName("h1");
    var productname=h1s[0].innerHTML;

    var price = document.getElementsByClassName('price')[0].innerHTML;

    var currUser = JSON.parse(localStorage.getItem("currUser")) || [];
    var carts = JSON.parse(localStorage.getItem("carts")) || [];

    var userCart=carts.find(x=>x.email==currUser.email)
    
    var newProduct= new Product(productname,price);
   
    userCart.push(newProduct);

    localStorage.setItem("carts",JSON.stringify(carts))

}

function SignUp(event){

    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var existingAccounts = JSON.parse(localStorage.getItem("accounts")) || [];
    var carts = JSON.parse(localStorage.getItem("cart")) || [];

    var newUser = new User(email,password)
    var newUserCart= new Cart(email);

    carts.push(newUserCart);

    existingAccounts.push(newUser);

    localStorage.setItem("accounts", JSON.stringify(existingAccounts));
    localStorage.setItem("carts", JSON.stringify(carts));
    alert("Account Created");


}

function Login(event){
    event.preventDefault();
    
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var existingAccounts = JSON.parse(localStorage.getItem("accounts")) || [];

    var acc = existingAccounts.find(x=>x.email===email);
    if (acc.password===password){
        
        localStorage.setItem("currUser", JSON.stringify(acc));
        window.location.href="index.html";
    }
    else{
        alert("Wrong Username or Password")
    }

}
