
class cartItem{
    constructor(Product,qty=1){
        this.Product=Product;
        this.qty=qty;
    }
}

let cardContainer = document.querySelector(".Cont");
let CurrentPage=1;
let pagesize=2;
let Products = JSON.parse(localStorage.getItem("products")) || [];
let AllProducts = JSON.parse(localStorage.getItem("products")) || [];

function cardinsert(page){

    document.querySelectorAll(".Cont__card").forEach(el => el.remove());

    var StartIndex=pagesize*(page-1)
    var PageProducts=[]
    let loopmax=Math.min(StartIndex+pagesize,Products.length)

    for(let i =StartIndex;i<loopmax;i++ ){
        PageProducts.push(Products[i])
    }

    PageProducts.map((data)=>{
        const postElement=document.createElement("div");
        postElement.classList.add("Cont__card");
        postElement.innerHTML=` <h2>${data.productname} </h2>
        <img src ="${data.imageurl}">
         <p>${data.productname}</p>
         <span>$${data.price}</span>
         <button onclick="AddItem('${data.productname}')">Add to Cart</button>
         <a href="product.html?productname=${data.productname}">Details</a>`
         cardContainer.appendChild(postElement)
    })
}

cardinsert(1);

function NextPage(){

    if(CurrentPage>=(Products.length/pagesize)){
        return;
    }
    CurrentPage++;
    cardinsert(CurrentPage);
}

function PrevPage(){
    
    if (CurrentPage<=1){
        return;
    }
    CurrentPage--;
    cardinsert(CurrentPage);
}




function AddItem(name){

    var currUser = JSON.parse(localStorage.getItem("currUser")) || [];
    var carts = JSON.parse(localStorage.getItem("carts")) || [];

    var ItemToAdd = AllProducts.find(x=>x.productname==name);
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



function Filter(){
  
    var dropdown = document.getElementById("dropdown");
    var selectedOption = dropdown.options[dropdown.selectedIndex];
    var selectedValue = selectedOption.value;
    let products = JSON.parse(localStorage.getItem("products")) || [];
  
  
    if(selectedValue=="All"){
        Products=products
        cardinsert(1)
    }
    else{
    Products=products.filter(x=>x.category==selectedValue)
    cardinsert(1)
    }
  }

searchbar.addEventListener('input', function () {
    const searchTerm = searchbar.value.toLowerCase();
    var filtered = AllProducts.filter(product =>
        product.productname.toLowerCase().includes(searchTerm)
    );
    Products=filtered
    cardinsert(1)
  });