// Inicializa EmailJS
emailjs.init("YOUR_EMAILJS_USER_ID"); // Reemplaza con tu EmailJS User ID

function sendEmail(event) {
    event.preventDefault(); // Evita el envío del formulario por defecto

    const form = event.target;

    emailjs.sendForm('service_03137d1', 'template_zb0otns', form)
        .then((response) => {
            console.log('Éxito:', response);
            alert('Mensaje enviado con éxito');
            form.reset(); // Opcional: Limpia el formulario después del envío
        }, (error) => {
            console.error('Error:', error);
            alert('Ocurrió un error al enviar el mensaje');
        });
}

// Añade el manejador de eventos al formulario
document.getElementById('contact-form').addEventListener('submit', sendEmail);
