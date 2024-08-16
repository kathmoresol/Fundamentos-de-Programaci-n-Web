document.addEventListener('DOMContentLoaded', () => {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const resumenPedido = document.getElementById('resumen-pedido');
    const subtotalElement = document.getElementById('subtotal');
    const envioElement = document.getElementById('envio');
    const totalElement = document.getElementById('total');
    let subtotal = 0;
    const costoEnvio = 3000;

    carrito.forEach(producto => {
        const card = document.createElement('div');
        card.className = 'card mb-3';
        card.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">$${producto.precio.toFixed(2)}</p>
            </div>
        `;
        resumenPedido.appendChild(card);
        subtotal += producto.precio;
    });

    // Mostrar subtotal, costo de envío y total
    subtotalElement.textContent = subtotal.toFixed(2);
    envioElement.textContent = costoEnvio.toFixed(2);
    totalElement.textContent = (subtotal + costoEnvio).toFixed(2);

    // Inicializar EmailJS
    emailjs.init('YOUR_USER_ID'); // Reemplaza 'YOUR_USER_ID' con tu User ID de EmailJS

    // Manejo del formulario de checkout
    document.getElementById('checkout-form').addEventListener('submit', (event) => {
        event.preventDefault();

        // Obtener los datos del formulario
        const nombre = document.getElementById('nombre').value;
        const direccion = document.getElementById('direccion').value;
        const ciudad = document.getElementById('ciudad').value;
        const telefono = document.getElementById('telefono').value;
        const email = document.getElementById('email').value;
        const tarjeta = document.getElementById('tarjeta').value;
        const expiracion = document.getElementById('expiracion').value;
        const cvv = document.getElementById('cvv').value;

        // Validar los campos del formulario
        if (!nombre || !direccion || !ciudad || !telefono || !email || !tarjeta || !expiracion || !cvv) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Por favor, completa todos los campos.',
                confirmButtonText: 'OK'
            });
            return;
        }

        // Preparar el contenido del correo
        const mensaje = `
            <h3>Resumen del Pedido</h3>
            <p><strong>Nombre:</strong> ${nombre}</p>
            <p><strong>Dirección:</strong> ${direccion}</p>
            <p><strong>Ciudad:</strong> ${ciudad}</p>
            <p><strong>Teléfono:</strong> ${telefono}</p>
            <p><strong>Email:</strong> ${email}</p>
            <h4>Productos Comprados</h4>
            ${carrito.map(producto => `
                <p>${producto.nombre} - $${producto.precio.toFixed(2)}</p>
            `).join('')}
            <h4>Subtotal: $${subtotal.toFixed(2)}</h4>
            <h4>Envío: $${costoEnvio.toFixed(2)}</h4>
            <h4>Total: $${(subtotal + costoEnvio).toFixed(2)}</h4>
        `;

        // Enviar el correo con EmailJS
        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
            from_name: nombre,
            from_email: email,
            message: mensaje,
        }).then(response => {
            Swal.fire({
                icon: 'success',
                title: 'Compra Confirmada',
                text: 'Gracias por tu compra. Hemos enviado un correo de confirmación.',
                confirmButtonText: 'OK'
            }).then(() => {
                // Redirigir a la página de agradecimiento
                window.location.href = 'factura.html';
            });
        }).catch(error => {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Hubo un problema al enviar el correo. Intenta nuevamente.',
                confirmButtonText: 'OK'
            });
            console.error('Error al enviar el correo:', error);
        });

        // Limpiar el carrito después de mostrar el comprobante
        localStorage.removeItem('carrito');
    });
});
