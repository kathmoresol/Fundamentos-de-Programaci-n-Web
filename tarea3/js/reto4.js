// scripts.js
function mostrarImagen() {
    // Obtener el valor seleccionado del combo
    var opcionSeleccionada = document.getElementById("opcionesCombo").value;
    var imagenMostrada = document.getElementById("imagenMostrada");
    var textoMostrado = document.getElementById("textoMostrado");
  
    // Mostrar una imagen dependiendo de la opción seleccionada
    let imgSrc = 'placeholder.jpg';
    let texto = '';
    if (opcionSeleccionada === "seleccione un modelo") {
      Swal.fire({
          title: 'Error',
          text: 'Por favor, selecciona una opción válida.',
          icon: 'error',
          confirmButtonText: 'Aceptar'
      });
      return;
  }


    switch (opcionSeleccionada) {
      case "1":
        imagenMostrada.src = "img/ChichénItzá.jpg";
        textoMostrado.innerHTML = "<p>Chichén Itzá, una antigua ciudad maya en la península de Yucatán, México, es famosa por su monumental pirámide de Kukulcán, conocida como El Castillo. Este sitio arqueológico también alberga el Cenote Sagrado, utilizado en rituales religiosos, y el Juego de Pelota, donde se llevaban a cabo importantes competiciones ceremoniales. Chichén Itzá representa la grandeza arquitectónica y el conocimiento astronómico de la civilización maya..</p>";
        break;
      case "2":
        imagenMostrada.src = "img/ColiseoRomano.jpg";
        textoMostrado.innerHTML = "<p>El Coliseo Romano, ubicado en el corazón de Roma, Italia, es un icónico anfiteatro que data del siglo I d.C. Construido para albergar espectáculos públicos, como combates de gladiadores y caza de animales salvajes, simboliza la grandeza del Imperio Romano en su apogeo. Con una capacidad para decenas de miles de espectadores, el Coliseo es un testimonio impresionante de la ingeniería y la cultura romanas, siendo uno de los monumentos más visitados y reconocibles del mundo..</p>";
        break;
      case "3":
        imagenMostrada.src = "img/MachuPicchu.jpg";
        textoMostrado.innerHTML = "<p> Machu Picchu, situada en lo alto de los Andes peruanos, es una ciudadela inca del siglo XV que destaca por su impresionante ubicación y arquitectura meticulosamente construida. Considerada una maravilla del mundo antiguo, esta ciudadela sirvió como centro religioso, político y astronómico. Su diseño cuidadosamente integrado con el entorno natural y sus terrazas agrícolas demuestran un profundo conocimiento de la topografía y el medio ambiente por parte de los incas. Machu Picchu es un testimonio asombroso de la civilización y la ingeniería precolombinas.</p>";
        break;
      case "4":
        imagenMostrada.src = "img/TajMahal.jpg";
        textoMostrado.innerHTML = "<p> El Taj Mahal, ubicado en Agra, India, es un magnífico mausoleo construido en mármol blanco entre 1631 y 1653 por el emperador Shah Jahan en memoria de su esposa Mumtaz Mahal. Celebrado por su elegancia y simetría, el Taj Mahal combina influencias arquitectónicas persas, otomanas, indias e islámicas. Sus jardines meticulosamente diseñados y la precisión de sus detalles ornamentales reflejan el apogeo del arte y la arquitectura mogol. Es considerado uno de los más bellos ejemplos del amor eterno plasmado en piedra.</p>";
        break;
      case "5":
        imagenMostrada.src = "img/CristoRedentor.jpg";
        textoMostrado.innerHTML = "<p> El Cristo Redentor es una imponente estatua de Jesucristo que se encuentra en la cima del Cerro del Corcovado en Río de Janeiro, Brasil. Inaugurada en 1931, esta figura de brazos abiertos mide aproximadamente 30 metros de altura y se sitúa a una altitud de 710 metros sobre el nivel del mar. Es un símbolo emblemático de la ciudad y del cristianismo, además de ser una de las nuevas siete maravillas del mundo moderno. Ofrece impresionantes vistas panorámicas de la ciudad y es un importante destino turístico y religioso en Brasil.</p>";
        break;
      default:
        imagenMostrada.src = "placeholder.jpg";
        textoMostrado.innerHTML = "";
    }
  
    // Mostrar una alerta con SweetAlert
    Swal.fire({
      title: 'Imagen Mostrada',
      text: 'Se ha mostrado la imagen correspondiente a la opción seleccionada.',
      icon: 'success',
      timer: 2000,
      timerProgressBar: true,
      showConfirmButton: true
    });
  }
  