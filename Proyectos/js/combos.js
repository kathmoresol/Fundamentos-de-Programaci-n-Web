document.addEventListener('DOMContentLoaded', function () {
    // Combo Simple
    const comboSimple = document.getElementById('comboSimple');
    const simpleImage = document.getElementById('simpleImage');

    comboSimple.addEventListener('change', function () {
        const selectedImage = comboSimple.value;
        simpleImage.innerHTML = `<img src="imagenes/${selectedImage}" alt="Imagen de Verano">`;
    });

    // Combo Doble
    const comboDoble1 = document.getElementById('comboDoble1');
    const comboDoble2 = document.getElementById('comboDoble2');
    const dobleImage1 = document.getElementById('dobleImage1');
    const dobleImage2 = document.getElementById('dobleImage2');

    comboDoble1.addEventListener('change', function () {
        const selectedImage = comboDoble1.value;
        dobleImage1.innerHTML = `<img src="imagenes/${selectedImage}" alt="Imagen de Invierno">`;
    });

    comboDoble2.addEventListener('change', function () {
        const selectedImage = comboDoble2.value;
        dobleImage2.innerHTML = `<img src="imagenes/${selectedImage}" alt="Imagen de Invierno">`;
    });

    // Combo Interactivo
    const comboInteractivo1 = document.getElementById('comboInteractivo1');
    const comboInteractivo2 = document.getElementById('comboInteractivo2');
    const interactivoButton = document.getElementById('interactivoButton');

    interactivoButton.addEventListener('click', function () {
        const selectedImage1 = comboInteractivo1.value;
        const selectedImage2 = comboInteractivo2.value;

        if (selectedImage1 && selectedImage2) {
            Swal.fire({
                title: 'Redirigiendo...',
                text: 'Estás siendo redirigido a la página de visualización de imágenes.',
                icon: 'info',
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading();
                }
            });

            // Redirigir después de un pequeño retraso para que el usuario pueda ver el mensaje
            setTimeout(() => {
                window.location.href = `redireccionCombo.html?superior=${selectedImage1}&inferior=${selectedImage2}`;
            }, 1500); // Ajusta el tiempo según sea necesario
        } else {
            Swal.fire({
                title: 'Error',
                text: 'Por favor, selecciona ambas prendas.',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
        }
    });
});
