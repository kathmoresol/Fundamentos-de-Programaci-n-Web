document.addEventListener('DOMContentLoaded', () => {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const carritoContainer = document.getElementById('carrito');
    const botonEliminar = document.getElementById('eliminarTodos');
    let total = 0;

    // Mostrar productos en el carrito
    console.log(carrito)
    carrito.forEach(producto => {
        const item = document.createElement('div');
        item.className = 'col-md-4 mb-4';
        item.innerHTML = `
            <div class="card product-card">
                <img src="${producto.image}" class="card-img-top" alt="${producto.title}">
                <div class="card-body">
                    <h5 class="card-title">${producto.title}</h5>
                    <p class="card-text">$${producto.price}</p>
                    <button class="boton" style="font-size: 20px" onclick="eliminarProducto('${producto.id}')">Eliminar</button>
                </div>
            </div>
        `;
        carritoContainer.appendChild(item);
        total += producto.price;
    });

    // Mostrar total del carrito
    document.getElementById('totalCarrito').textContent = total.toFixed(2);

    // Botón para eliminar todos los productos
    const eliminarTodosButton = document.createElement('button');
    eliminarTodosButton.textContent = 'Eliminar Todos';
    eliminarTodosButton.className = 'boton d-block mt-3';
    eliminarTodosButton.style = 'width: 300px; marging-top: 20px; font-size: 20px; margin-right: 0; margin-bottom: 25px;';
    eliminarTodosButton.onclick = eliminarTodosProductos;
    botonEliminar.appendChild(eliminarTodosButton);
});

function eliminarProducto(id) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito = carrito.filter(producto => producto.id != id);
    localStorage.setItem('carrito', JSON.stringify(carrito)); // Elimina el producto del localStorage

    // Actualiza el DOM eliminando el elemento correspondiente sin recargar la página
    const productoElement = document.querySelector(`button[onclick="eliminarProducto('${id}')"]`).closest('.col-md-4');
    productoElement.remove();

    // Recalcula el total y actualiza el texto
    actualizarTotal();
}

function eliminarTodosProductos() {
    localStorage.removeItem('carrito'); // Elimina todos los productos del localStorage
    document.getElementById('carrito').innerHTML = ''; // Limpia el contenido del contenedor del carrito

    // Recalcula el total y actualiza el texto
    actualizarTotal();
    Swal.fire({
        icon: 'info',
        title: 'Se eliminado todos lo productos del carrito',
        confirmButtonText: 'OK'
    }).then(() => {
        window.location.href = 'coleccion.html'; // Redirige a la página de checkout
    });
}

function actualizarTotal() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let total = 0;
    carrito.forEach(producto => total += producto.price);
    document.getElementById('totalCarrito').textContent = total.toFixed(2);
}

function finalizarCompra() {
    Swal.fire({
        icon: 'info',
        title: 'Continuando con Pago y Envío',
        text: 'Estás siendo redirigido al formulario de checkout para completar tu compra.',
        confirmButtonText: 'OK'
    }).then(() => {
        window.location.href = 'checkout.html'; // Redirige a la página de checkout
    });
}
