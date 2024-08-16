'use strict';

function searchProducts() {
    let searchInput = document.getElementById("searchInput").value.toLowerCase();
    


    let clothing = ["Vestidos", "Blusas", "Pantalones"];
    let shoes = ["Tacones", "Sandalias", "Botas"];
    let accessories = ["Bolsos", "Sombreros", "Gafas",];

    let productImages = {
        "vestidos": "imagenes/vestidos.jpg",
        "blusas": "imagenes/blusas.jpg",
        "pantalones": "imagenes/pantalones2.jpg",
        "tacones": "imagenes/taones3.jpg",
        "sandalias": "imagenes/zapatos.jpg",
        "botas": "imagenes/botas.jpg",
        "bolsos": "imagenes/bolso3.jpg",
        "sombreros": "imagenes/sombrero1.jpg",
        "gafas": "imagenes/Gafassol.jpg"
        


    };

    let results = [];
    let allProducts = [...clothing, ...shoes, ...accessories];

    if (searchInput === "") {
        swal.fire({
            icon: "error",
            title: "Completa el campo de búsqueda",
            confirmButtonText: "Reintentar",
            confirmButtonColor: "#e91e63",
        });
        return;
    }

    for (let i = 0; i < allProducts.length; i++) {
        if (allProducts[i].toLowerCase().includes(searchInput)) {
            results = [allProducts[i]];
            break;
        }
    }

    if (results.length === 0) {
        if (searchInput === "ropa") {
            results = clothing;
        } else if (searchInput === "zapatos") {
            results = shoes;
        } else if (searchInput === "accesorios") {
            results = accessories;
        }
    }

    displayResults(results, productImages);
}

function displayResults(products, productImages) {
    let resultsContainer = document.getElementById("pResult");
    resultsContainer.innerHTML = "";

    if (products.length === 0) {
        resultsContainer.innerHTML = "<p>No se encontraron productos para la búsqueda especificada.</p>";
    } else {
        for (let i = 0; i < products.length; i++) {
            let imageSrc = productImages[products[i].toLowerCase()] || "default.jpg";
            let card = document.createElement("div");
            card.className = "card mb-3";
            card.style.maxWidth = "100%";
            card.innerHTML = `
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${imageSrc}" class="img-fluid rounded-start" alt="Producto ${products[i]}">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Producto: ${products[i]}</h5>
                            <p class="card-text">Descubre nuestra amplia gama de ${products[i]}. Ideal para cualquier ocasión y siempre a la moda.</p>
                        </div>
                    </div>
                </div>
            `;
            resultsContainer.appendChild(card);
        }
    }
}
