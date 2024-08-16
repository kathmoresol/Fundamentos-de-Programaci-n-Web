document.addEventListener('DOMContentLoaded', () => {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const resumenPedido = document.getElementById('resumen-pedido');
    const subTotalElement = document.getElementById('subTotal');
    const totalElement = document.getElementById('total');
    let total = 0;

    if (carrito.length === 0) {
        Swal.fire({
            icon: 'info',
            title: 'Carrito Vacío',
            text: 'Tu carrito está vacío. Agrega productos para continuar.',
            confirmButtonText: 'OK'
        }).then(() => {
            window.location.href = 'index.html';
        });
        return;
    }

    carrito.forEach(producto => {
        const card = document.createElement('div');
        card.className = 'card mb-3';
        card.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${producto.title}</h5>
                <p class="card-text">$${producto.price.toFixed(2)}</p>
            </div>
        `;
        resumenPedido.appendChild(card);
        total += producto.price;
    });

    subTotalElement.textContent = total.toFixed(2);
    totalElement.textContent = (total + 10).toFixed(2);

    // Initialize EmailJS
    emailjs.init("C3RNVDFIzDN6BQ9gR");

    // Single event listener for form submission
    document.getElementById('checkout-form').addEventListener('submit', async function(event) {
        event.preventDefault();

        // Validate form fields
        const nombre = document.getElementById('nombre').value;
        const direccion = document.getElementById('direccion').value;
        const ciudad = document.getElementById('ciudad').value;
        const telefono = document.getElementById('telefono').value;
        const email = document.getElementById('email').value;
        const tarjeta = document.getElementById('card').value;
        const expiracion = document.getElementById('expiracion').value;
        const cvv = document.getElementById('cvv').value;

        if (!nombre || !direccion || !ciudad || !telefono || !email || !tarjeta || !expiracion || !cvv) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Por favor, completa todos los campos.',
                confirmButtonText: 'OK'
            });
            return;
        }

        try {
            // Send form data via EmailJS
            console.log(JSON.stringify(carrito));
            document.getElementById('compra').value = JSON.stringify(carrito);
            await emailjs.sendForm('service_cr02gyd', 'template_2ld1f79', this);
            
            Swal.fire({
                title: '¡Compra Confirmada!',
                text: 'Gracias por tu compra. Hemos enviado un correo de confirmación a la tienda.',
                icon: 'success',
                confirmButtonText: 'Aceptar'
            }).then(() => {
                window.location.href = 'factura.html'; // Redirect to a confirmation page
            });

        } catch (error) {
            console.error('Error al enviar el correo:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Hubo un problema al enviar el correo de confirmación. Por favor, inténtalo nuevamente.',
                confirmButtonText: 'OK'
            });
        }
    });
});
