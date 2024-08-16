document.addEventListener('DOMContentLoaded', async () => {
    // Función para consumir la API
    async function obtenerProducto() {
        try {
            const res = await fetch('https://fakestoreapi.com/products');
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            const json = await res.json();
            return json; // Retorna el JSON para ser usado fuera de la función
        } catch (error) {
            console.error('Hubo un problema con la solicitud fetch:', error);
        }
    }

    // Verifica si ya hay productos guardados en localStorage
    let productosAPI = JSON.parse(localStorage.getItem('productos'));

    if (!productosAPI) { // Si no hay productos en localStorage, se obtienen de la API
        productosAPI = await obtenerProducto(); // Usa await para esperar la respuesta
        if (productosAPI) {
            localStorage.setItem('productos', JSON.stringify(productosAPI)); // Guarda los productos en localStorage
        } else {
            console.error('No se pudieron obtener los productos de la API');
            return; // Termina la ejecución si no se pueden obtener productos
        }
    }

    console.log(productosAPI);

    if (productosAPI) { // Verifica que productosAPI no sea undefined
        const catalogo = document.getElementById('catalogo');

        productosAPI.forEach(producto => {
            const card = document.createElement('div');
            card.className = 'col-md-4 mb-4 product';
            card.innerHTML = `
                <div class="card product-card">
                    <img src="${producto.image}" class="card-img-top" alt="${producto.title}">
                    <div class="card-body">
                        <h5 class="card-title">${producto.title}</h5>
                        <p class="card-text">$${producto.price.toFixed(2)}</p>
                        <a href="producto.html?id=${producto.id}" class="boton btn-primary w-100">Ver Detalles</a>
                    </div>
                </div>
            `;
            catalogo.appendChild(card);
        });
    }
});
