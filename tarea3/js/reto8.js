$(document).ready(function() {
    // Array para almacenar los registros
    let registros = [];

    // Manejar el envío del formulario
    $('#registroForm').on('submit', function(event) {
        event.preventDefault();
        
        // Obtener los valores de los campos del formulario
        const nombre = $('#nombre').val();
        const edad = $('#edad').val();

        

        

        // Crear un nuevo objeto de registro
        const nuevoRegistro = { nombre, edad };

        // Agregar el nuevo registro al array
        registros.push(nuevoRegistro);

        // Agregar el nuevo registro al combo select
        $('#consultaSelect').append(new Option(`${nombre} (${edad})`, registros.length - 1));

        // Mostrar SweetAlert de éxito
        Swal.fire({
            title: '¡Registro exitoso!',
            text: `Nombre: ${nombre}\nEdad: ${edad}`,
            icon: 'success',
            confirmButtonText: 'Aceptar'
        });

        // Limpiar el formulario
        $('#registroForm')[0].reset();
    });

    // Manejar la selección en el combo select
    $('#consultaSelect').on('change', function() {
        const index = $(this).val();
        const registro = registros[index];

        // Mostrar los datos del registro seleccionado
        if (registro) {
            $('#resultadoConsulta').html(`<p><strong>Nombre:</strong> ${registro.nombre}</p><p><strong>Edad:</strong> ${registro.edad}</p>`);
        } else {
            $('#resultadoConsulta').html('<p>Seleccione un registro válido.</p>');
        }
    });
    
});
