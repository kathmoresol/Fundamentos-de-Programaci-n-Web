

// Función para convertir de Colones a Dólares
function convertirAColonesADolares() {
    var tipoCambio = parseFloat(document.getElementById('tipoCambioColonesADolares').value);
    var montoColones = parseFloat(document.getElementById('montoColones').value);

    if (isNaN(tipoCambio) || isNaN(montoColones) || tipoCambio <= 0 || montoColones < 0) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor ingrese un tipo de cambio y un monto en colones válidos.'
        });
        return;
    }

    var resultadoDolares = montoColones / tipoCambio;
    document.getElementById('resultadoDolares').value = resultadoDolares.toFixed(2) + ' USD';

    // Mostrar SweetAlert de éxito
    Swal.fire({
        icon: 'success',
        title: 'Conversión exitosa',
        text: 'Se ha convertido el monto a Dólares correctamente.'
    });
}

// Función para limpiar el formulario de Colones a Dólares
function limpiarFormularioColonesADolares() {
    document.getElementById('tipoCambioColonesADolares').value = '';
    document.getElementById('montoColones').value = '';
    document.getElementById('resultadoDolares').value = '';

    // Mostrar SweetAlert de limpieza
    Swal.fire({
        icon: 'info',
        title: 'Formulario limpio',
        text: 'Se han borrado los campos del formulario.'
    });
}



// Función para convertir de Dólares a Colones
function convertirADolaresAColones() {
    var tipoCambio = parseFloat(document.getElementById('tipoCambioDolaresAColones').value);
    var montoDolares = parseFloat(document.getElementById('montoDolares').value);

    if (isNaN(tipoCambio) || isNaN(montoDolares) || tipoCambio <= 0 || montoDolares < 0) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor ingrese un tipo de cambio y un monto en dólares válidos.'
        });
        return;
    }

    var resultadoColones = montoDolares * tipoCambio;
    document.getElementById('resultadoColones').value = resultadoColones.toFixed(2) +' CRC';

    // Mostrar SweetAlert de éxito
    Swal.fire({
        icon: 'success',
        title: 'Conversión exitosa',
        text: 'Se ha convertido el monto a Colones correctamente.'
    });
}

// Función para limpiar el formulario de Dólares a Colones
function limpiarFormularioDolaresAColones() {
    document.getElementById('tipoCambioDolaresAColones').value = '';
    document.getElementById('montoDolares').value = '';
    document.getElementById('resultadoColones').value = '';

    // Mostrar SweetAlert de limpieza
    Swal.fire({
        icon: 'info',
        title: 'Formulario limpio',
        text: 'Se han borrado los campos del formulario.'
    });
}
