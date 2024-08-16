// Ejemplo de JavaScript adicional para personalizar el comportamiento del carrusel
document.addEventListener('DOMContentLoaded', function () {
    // Aquí puedes agregar código JavaScript personalizado si es necesario
    console.log("Página cargada y lista para personalizaciones.");
    
    // Ejemplo: Personalizar el comportamiento de los controles del carrusel
    const carouselPrev = document.querySelector('.carousel-control-prev');
    const carouselNext = document.querySelector('.carousel-control-next');

    carouselPrev.addEventListener('click', function () {
        console.log("Botón 'Anterior' clickeado.");
    });

    carouselNext.addEventListener('click', function () {
        console.log("Botón 'Siguiente' clickeado.");
    });
});
