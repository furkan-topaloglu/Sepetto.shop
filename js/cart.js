let cart =  localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];


function displayCartProduct(){
    const cartWrapper = document.querySelector(".kart-sarmal");
    let result = "";
cart.forEach((item) => {
    result += ` 
<tr class="kart-oge">
    <td></td>
    <td class="kart-resim">
        <img src=${item.img.singleImage} alt="">
        <i class="bi bi-x-circle-fill" data-id=${item.id}></i>
    </td>
    <td>${item.name} </td>
    <td>${item.price.newPrice}₺</td>
    <td class="urun-miktar">1</td>
    <td class="urun-toplam">${item.price.newPrice}</td>
</tr>
    `;
});
cartWrapper.innerHTML = result;
removeCartItem();
}
displayCartProduct()
function removeCartItem() {
    const btnDeleteCart = document.querySelectorAll(".bi-x-circle-fill");
    let cartItems = document.querySelector(".header-cart-count");
   
    
    btnDeleteCart.forEach((button) => {
    button.addEventListener("click", function(e){
 const id = e.target.dataset.id;
 cart = cart.filter((item) => item.id !== Number(id) );
 displayCartProduct();
 localStorage.setItem("cart", JSON.stringify(cart));
 cartItems.innerHTML = cart.length;
 saveCartValues();
    });
    });
 }

 function saveCartValues() {
    const cartTotal = document.getElementById("cart-total");
    const subTotal = document.getElementById("subtotal");
    const fastCargo = document.getElementById("fast-cargo");
    const fastCargoPrice = 180;
    let itemsTotal = 0;
    
    cart.length > 0 && cart.map((item)=> itemsTotal += item.price.newPrice);
    console.log(itemsTotal);
    subtotal.innerHTML = `${itemsTotal}₺`;
    cartTotal.innerHTML = `${itemsTotal}₺`;
   
    fastCargo.addEventListener("change", function(e){
        if(e.target.checked){
            cartTotal.innerHTML = `${(itemsTotal + fastCargoPrice) }₺`;
        }else{
            cartTotal.innerHTML = `${(itemsTotal) }₺`;
        }
    });
 }
 saveCartValues()