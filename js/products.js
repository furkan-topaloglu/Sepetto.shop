import { product1 } from "./glide.js";

let products = [];
  let cart =  localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];

// Güvenli bir şekilde localStorage'dan veriyi çek ve işle
function getLocalStorageData(key, defaultValue = []) {
    const data = localStorage.getItem(key);
    try {
        return data ? JSON.parse(data) : defaultValue;
    } catch (error) {
        console.error(`Error parsing localStorage key "${key}":`, error);
        return defaultValue;
    }
}

// Veriyi güvenli bir şekilde localStorage'a kaydet
function setLocalStorageData(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

// LocalStorage'dan sepet ve ürün verilerini al
cart = getLocalStorageData("cart");
products = getLocalStorageData("products");


// Sepete ürün ekleme fonksiyonu
function addToCart() {
    const cartItems = document.querySelector(".header-cart-count");
    const buttons = [...document.getElementsByClassName("add-to-cart")];

    buttons.forEach((button) => {
        const inCart = cart.find((item) => item.id === Number(button.dataset.id));
        if (inCart) {
            button.setAttribute("disabled", "disabled");
        } else {
            button.addEventListener("click", function (e) {
                e.preventDefault();
                const id = Number(e.target.dataset.id);
                const findProduct = products.find((product) => product.id === id);

                if (findProduct) {
                    cart.push({ ...findProduct, quantity: 1 });
                    setLocalStorageData("cart", cart);
                    button.setAttribute("disabled", "disabled");
                    cartItems.innerHTML = cart.length;
                } else {
                    console.error(`Product with id ${id} not found.`);
                }
            });
        }
    });

    // Sepet sayacını güncelle
    cartItems.innerHTML = cart.length;
}
function productRoute(){
  const productLink = document.getElementsByClassName("product-link");
 Array.from(productLink).forEach((button)=>{
    button.addEventListener("click", function(e){
e.preventDefault();
const id = e.target.dataset.id;
localStorage.setItem("prodctId", JSON.stringify(id));
window.location.href= "single-product.html";
    });
 });
}
// Ürünleri listeleme fonksiyonu
function productsFunc() {
    const productsContainer = document.getElementById("product-list");
    if (!productsContainer) {
        console.error("Product container element not found.");
        return;
    }

    let results = "";
    products.forEach((item) => {
        results += `
        <li class="urun-oge glide__slide">
            <div class="urun-resim">
                <a href="#">
                    <img src="${item.img.singleImage}" alt="" class="img1">
                    <img src="${item.img.thumbs[1]}" alt="" class="img2">
                </a>
            </div>
            <div class="urun-bilgi">
                <a href="#" class="urun-basligi">${item.name}</a>
                <ul class="urun-yildizi">
                    <li><i class="bi bi-star-fill"></i></li>
                    <li><i class="bi bi-star-fill"></i></li>
                    <li><i class="bi bi-star-fill"></i></li>
                    <li><i class="bi bi-star-fill"></i></li>
                    <li><i class="bi bi-star-half"></i></li>
                </ul>
                <div class="urun-fiyat">
                    <strong class="yeni-fiyat">₺${item.price.newPrice}</strong> 
                    <span class="eski-fiyat">₺${item.price.oldPrice}</span>
                </div>
                <span class="urun-indirimi">-${item.discount}%</span>
                <div class="urun-link">
                    <button class="add-to-cart" data-id="${item.id}">
                        <i class="bi bi-basket-fill"></i>
                    </button>
                    <button>
                        <i class="bi bi-heart-fill"></i>
                    </button>
                    <a href="#" class="product-link" data-id=${item.id}>
                        <i class="bi bi-eye-fill"></i>
                    </a>
                    <a href="#">
                        <i class="bi bi-share-fill"></i>
                    </a>
                </div>
            </div>
        </li>
        `;
        // Ürünleri DOM'a ekle ve "addToCart" fonksiyonunu çağır
    productsContainer ? (productsContainer.innerHTML = results) : "";
    addToCart();
    });

    
}

// Başlangıç fonksiyonu
function initialize() {
    productsFunc();
    product1();
    productRoute();
}

initialize();

export default initialize;
