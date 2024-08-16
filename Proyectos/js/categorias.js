document.getElementById('menuOpciones').addEventListener('change', function() {
    var galeriaRopa = document.querySelector('.galeriaRopa');
    var galeriaZapatos = document.querySelector('.galeriaZapatos');
    var galeriaAccesorios = document.querySelector('.galeriaAccesorios');
    var galeriaBolsos = document.querySelector('.galeriaBolsos');
    var galeriaJoyeria = document.querySelector('.galeriaJoyeria');
    var galeriaNovedades = document.querySelector('.galeriaNovedades');

    galeriaRopa.style.display = 'none';
    galeriaZapatos.style.display = 'none';
    galeriaAccesorios.style.display = 'none';
    galeriaBolsos.style.display = 'none';
    galeriaJoyeria.style.display = 'none';
    galeriaNovedades.style.display = 'none';

    var opcionSeleccionada = this.value;

    if (opcionSeleccionada === 'ropa') {
        galeriaRopa.style.display = 'block';
    } else if (opcionSeleccionada === 'zapatos') {
        galeriaZapatos.style.display = 'block';
    } else if (opcionSeleccionada === 'accesorios') {
        galeriaAccesorios.style.display = 'block';
    } else if (opcionSeleccionada === 'bolsos') {
        galeriaBolsos.style.display = 'block';
    } else if (opcionSeleccionada === 'joyeria') {
        galeriaJoyeria.style.display = 'block';
    } else if (opcionSeleccionada === 'novedades') {
        galeriaNovedades.style.display = 'block';
    }
});

