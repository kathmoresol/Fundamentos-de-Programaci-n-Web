document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productoId = urlParams.get('id');

    // Obtiene los productos desde localStorage
    const productos = JSON.parse(localStorage.getItem('productos')) || [];

    const producto = productos.find(p => p.id == productoId);
    console.log(producto);


    if (producto) {
        document.getElementById('nombreProducto').textContent = producto.title;
        document.getElementById('imagenProducto').src = producto.image;
        document.getElementById('precioProducto').textContent = producto.price.toFixed(2);
        document.getElementById('descripcionProducto').textContent = producto.description;
    }
});

function agregarAlCarrito() {
    const urlParams = new URLSearchParams(window.location.search);
    const productoId = urlParams.get('id');

    // Obtiene los productos desde localStorage
    const productos = JSON.parse(localStorage.getItem('productos')) || [];

    const producto = productos.find(p => p.id == productoId);

    if (producto) {
        let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        carrito.push(producto);
        localStorage.setItem('carrito', JSON.stringify(carrito));

        Swal.fire({
            icon: 'success',
            title: '¡Agregado al Carrito!',
            text: 'El producto ha sido añadido a tu carrito de compras.',
            confirmButtonText: 'OK'
        }).then(() => {
            window.location.href = 'carrito.html'; // Redirige al carrito
        });
    }
}
