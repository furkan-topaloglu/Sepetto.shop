import {thumbsActiveFunc} from "./single-product/thumbsActive.js";
import {singleThumbs} from "./glide.js";
import zoomFunc from "./single-product/zoom.js";
import colorsFunc from "./single-product/colors.js";
import valuesFunc from "./single-product/values.js";
import tabsFunc from "./single-product/tabs.js";
import commentsFuncFunc from "./single-product/comments.js";

const productId = localStorage.getItem("productId") ? JSON.parse(localStorage.getItem("productId")) : localStorage.setItem("productId", JSON.stringify(1));
const products = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : localStorage.setItem("products", JSON.stringify([]));

const findProduct = products.find((item) => item.id === Number(productId));
/* product title */
const productTitle = document.querySelector(".urun-title");

productTitle.innerHTML= findProduct.name;
/* product price */
const newPriceDOM = document.querySelector(".new-price");
const oldPriceDOM = document.querySelector(".old-price");

newPriceDOM.innerHTML= findProduct.price.newPrice;
oldPriceDOM.innerHTML= findProduct.price.oldPrice;

/* product gallery */
const singleImageDOM = document.querySelector("#single-image");
singleImageDOM.src = findProduct.img.singleImage;
const galleryThumbs = document.querySelector(".galeri-thumb");
let result =""
findProduct.img.thumbs.forEach((item)=> {
result += ` 
   <li class="glide__slide">
        <img src=${item} alt="" class="img-fluid" >
     </li>
                     
 `;
});
galleryThumbs.innerHTML = result;
singleThumbs();
thumbsActiveFunc();
const prodctThumbs = document.querySelectorAll(".urun-thumb .glide__slide img");
prodctThumbs[0].classList.add("active");

//! add to cart
let cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
const findCart = cart.find((item) => item.id === findProduct.id);
const btnAddToCart = document.getElementById("add-to-cart");
const quantitiyDOM = document.getElementById("quantitiy");
let cartItems = document.querySelector(".header-cart-count");
if(findCart){
    btnAddToCart.setAttribute("disabled", "disabled");

}else{
    btnAddToCart.addEventListener("click", function(){
cart.push({...findProduct, quantitiy: Number(quantitiyDOM.value)});
btnAddToCart.setAttribute("disabled", "disabled");
localStorage.setItem("cart", JSON.stringify(cart));
cartItems.innerHTML = cart.length;
    });
}