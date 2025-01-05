function productRoute() {
    const resultItemDOM = document.querySelectorAll(".arama-sonucu .sonuc-oge");
    resultItemDOM.forEach((item) => {
        item.addEventListener("click", (e) => {
            const id = item.dataset.id;
            if (id) {
                localStorage.setItem("productId", JSON.stringify(id));
                window.location.href = "single-product.html";
            }
        });
    });
}

function searchFunc(products) {
    const searchWrapperDOM = document.querySelector(".arama-sonucu .sonuclar");
    const searchInputDOM = document.querySelector(".arama-form input");

    // Yardımcı fonksiyon: HTML render eder
    function renderResults(items) {
        if (!Array.isArray(items)) return;

        let result = "";
        items.forEach((item) => {
            result += `
                <a href="#" class="sonuc-oge" data-id=${item.id}>
                    <img src=${item.img.singleImage} class="arama-fotograf" alt="">
                    <div class="arama-bilgisi">
                        <h4>${item.name}</h4>
                        <span class="arama-skodu">STOK KODU: PD0014</span>
                        <span class="arama-fiyat">${item.price.newPrice}₺</span>
                    </div>
                </a>
            `;
        });

        searchWrapperDOM.innerHTML = result;
        productRoute(); // Ürünlere tıklama olaylarını yeniden bağla
    }

    // İlk render (tüm ürünler)
    renderResults(products);

    // Arama işlemi
    searchInputDOM.addEventListener("input", (e) => {
        const value = e.target.value.trim().toLowerCase();

        // Filtreleme
        const filtered = products.filter((item) =>
            item.name.trim().toLowerCase().includes(value)
        );

        // Grid düzeni değişimi
        if (filtered.length > 1) {
            searchWrapperDOM.style.gridTemplateColumns = "1fr 1fr";
        } else {
            searchWrapperDOM.style.gridTemplateColumns = "1fr";
        }

        // Filtrelenmiş sonuçları render et
        if (filtered.length > 0) {
            renderResults(filtered);
        } else {
            searchWrapperDOM.innerHTML = `
                <a href="#" class="sonuc-oge" style="justify-content: center">
                   😓Aradığınız Ürün Bulunamadı😓
                </a>
            `;
        }
    });
}

export default searchFunc;
