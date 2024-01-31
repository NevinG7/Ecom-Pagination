let cardContainer = document.querySelector(".cont");


function cardinsert(){

    var currUser = JSON.parse(localStorage.getItem("currUser")) || [];
    var carts = JSON.parse(localStorage.getItem("carts")) || [];

    var userCart=carts.find(x=>x.email==currUser.email)

    var AllProducts=userCart.CartProducts.filter(x=>x.qty>0);

    AllProducts.map((data)=>{
        const postElement=document.createElement("div");
        postElement.classList.add("card");
        postElement.innerHTML=`
        <img src="${data.Product.imageurl}">
       
        <div class="card__desc">
          <h1>${data.Product.productname}</h1>
          <p class="price">$${data.Product.price}</p>
          <p>Quantity: ${data.qty}</p>
          <button onclick="RemoveItem('${data.Product.productname}')">Remove</button>
         </div>`
         cardContainer.appendChild(postElement)
    })


}

function RemoveItem(productname){
    
    var AllProducts = JSON.parse(localStorage.getItem("products")) || [];

    var ItemToAdd = AllProducts.find(x=>x.productname==productname);

    var currUser = JSON.parse(localStorage.getItem("currUser")) || [];
    var carts = JSON.parse(localStorage.getItem("carts")) || [];

    var userCart=carts.find(x=>x.email==currUser.email)

    var usercartItem = userCart.CartProducts.find(x=>x.Product.productname==ItemToAdd.productname)
    
    
    usercartItem.qty=usercartItem.qty-1;
    localStorage.setItem("carts",JSON.stringify(carts))
    location.reload();
}

cardinsert();