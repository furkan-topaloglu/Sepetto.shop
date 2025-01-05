const productsContainer = document.getElementById("product-list");

export function product1() {
    const config = {
        perView: 4,
        gap: 15,
        autoplay: 3000,
        breakpoints: {
            992: {
                perView: 3,
            },
            768: {
                perView: 2,
            },
            575: {
                perView: 1,
            },
        },
    };

    // ".product-carousel" sınıfına sahip bir eleman var mı kontrol et
    const productCarousel = document.querySelector('.product-carousel');
    if (productCarousel) {
        new Glide('.product-carousel', config).mount();
    }
}

const config2 = {
    type: "carousel",
    perView: 4,
    gap: 15,
    bound: true,
    breakpoints: {
        992: {
            perView: 3,
        },
        768: {
            perView: 2,
        },
        575: {
            perView: 1,
        },
    },
};

// ".product-carousel2" sınıfına sahip bir eleman var mı kontrol et
const productCarousel2 = document.querySelector('.product-carousel2');
if (productCarousel2) {
    new Glide('.product-carousel2', config2).mount();
}

export function singleThumbs() {
    const config3 = {
        perView: 5,
        breakpoints: {
            992: {
                perView: 3,
            },
        },
    };

    // ".urun-thumb" sınıfına sahip bir eleman var mı kontrol et
    const urunThumb = document.querySelector('.urun-thumb');
    if (urunThumb) {
        new Glide('.urun-thumb', config3).mount();
    }
}
