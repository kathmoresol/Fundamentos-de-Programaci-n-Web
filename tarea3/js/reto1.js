


function calcularFactura() {
    var nombreCliente = document.getElementById('nombreCliente').value;
    var articuloComprado = document.getElementById('articuloComprado').value;
    var cantidad = parseFloat(document.getElementById('cantidad').value);
    var precio = parseFloat(document.getElementById('precio').value);

 

      // Validar que se haya ingresado el nombre del cliente y al menos un artículo
      if (nombreCliente === '' || articuloComprado === '' || isNaN(cantidad) || isNaN(precio)) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor complete todos los campos antes de calcular la factura.'
        });
        return;
    }


    var subtotal = cantidad * precio;
    var iva = subtotal * 0.13;
    var servicio = subtotal * 0.05;
    var total = subtotal + iva + servicio;

    document.getElementById('nombreClienteResultado').innerText = nombreCliente;
    document.getElementById('articuloCompradoResultado').innerText = articuloComprado;
    document.getElementById('cantidadResultado').innerText = cantidad;
    document.getElementById('precioResultado').innerText = '₡' + precio.toFixed(2);
    document.getElementById('subtotalResultado').innerText = '₡' + subtotal.toFixed(2);
    document.getElementById('ivaResultado').innerText = '₡' + iva.toFixed(2);
    document.getElementById('servicioResultado').innerText = '₡' + servicio.toFixed(2);
    document.getElementById('totalResultado').innerText = '₡' + total.toFixed(2);

    document.getElementById('resultadoFactura').style.display = 'block';

     // Mostrar Sweet Alert de éxito
     Swal.fire({
        icon: 'success',
        title: 'Factura calculada',
        text: 'Los cálculos de la factura se han realizado correctamente.'
    });

}


function borrarDatos() {
    
    document.getElementById('nombreCliente').value = '';
    document.getElementById('articuloComprado').value = '';
    document.getElementById('cantidad').value = '1';
    document.getElementById('precio').value = '0.00';

    
    document.getElementById('nombreClienteResultado').innerText = '';
    document.getElementById('articuloCompradoResultado').innerText = '';
    document.getElementById('cantidadResultado').innerText = '';
    document.getElementById('precioResultado').innerText = '';
    document.getElementById('subtotalResultado').innerText = '';
    document.getElementById('ivaResultado').innerText = '';
    document.getElementById('servicioResultado').innerText = '';
    document.getElementById('totalResultado').innerText = '';

   
    document.getElementById('resultadoFactura').style.display = 'none';
    
    Swal.fire({
        icon: 'info',
        title: 'Formulario limpio',
        text: 'Se han borrado los campos del formulario.'
    });
}



   
            
