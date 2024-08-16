document.addEventListener('DOMContentLoaded', () => {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    console.log(carrito);
    const resumenPedido = document.getElementById('resumen-pedido');
    const reciboPago = document.getElementById('recibo-pago');
    let total = 0;

    // Verifica si el carrito está vacío
    if (carrito.length === 0) {
        resumenPedido.innerHTML = '<p>No se ha realizado ninguna compra.</p>';
        reciboPago.innerHTML = '';
        return;
    }
    // Mostrar resumen del pedido
    carrito.forEach(producto => {
        const card = document.createElement('div');
        card.className = 'card mb-3';
        card.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${producto.title}</h5>
                <p class="card-text">₡${producto.price.toFixed(2)}</p>
            </div>
        `;
        resumenPedido.appendChild(card);
        total += producto.price;
    });

    // Mostrar recibo de pago
    const fecha = new Date().toLocaleDateString('es-ES');
    reciboPago.innerHTML = `
        <h4>Recibo de Pago</h4>
        <p><strong>Fecha:</strong> ${fecha}</p>
        <p><strong>Total Pagado:</strong> ₡${total + 10}</p>
        <p>Gracias por tu compra. Tu pedido ha sido procesado exitosamente.</p>
    `;

    // Limpiar el carrito después de mostrar el comprobante
    localStorage.removeItem('carrito');
});
