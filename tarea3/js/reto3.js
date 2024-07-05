// scripts.js
function irAEnlace() {
    // Obtener el valor seleccionado del combo
    var selectedUrl = document.getElementById("enlacesCombo").value;
  
    // Redirigir a la URL seleccionada
    window.location.href = selectedUrl;
  
    // Opcional: Mostrar una alerta con SweetAlert
    Swal.fire({
      title: 'Redirigiendo...',
      html: 'Estás siendo redirigido a ' + selectedUrl,
      icon: 'success',
      timer: 2000,
      timerProgressBar: true,
      showConfirmButton: false
    });
  }
  