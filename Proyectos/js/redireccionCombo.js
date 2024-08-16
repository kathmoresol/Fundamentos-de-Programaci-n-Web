document.addEventListener('DOMContentLoaded', function () {
    // Obtener los parámetros de la URL
    const params = new URLSearchParams(window.location.search);
    const imagenSuperior = params.get('superior');
    const imagenInferior = params.get('inferior');

    // Asignar las URLs de las imágenes a los elementos <img>
    if (imagenSuperior) {
        document.getElementById('imagenSuperior').src = `imagenes/${imagenSuperior}`;
    } else {
        document.getElementById('imagenSuperior').alt = 'Imagen Superior No Disponible';
    }

    if (imagenInferior) {
        document.getElementById('imagenInferior').src = `imagenes/${imagenInferior}`;
    } else {
        document.getElementById('imagenInferior').alt = 'Imagen Inferior No Disponible';
    }

    // Manejar el botón de regresar
    const backButton = document.getElementById('backButton');
    backButton.addEventListener('click', function () {
        window.history.back(); // Regresar a la página anterior
    });
});
