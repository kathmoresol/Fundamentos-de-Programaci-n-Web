
// nuevo 
function calcular() {
  const modelo = document.getElementById('modelo').value;
  const version = document.getElementById('version').value;
  
  if (modelo === 'seleccione un modelo' || version === 'Seleccione una version:') {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Por favor, seleccione un modelo y una versión.',
    });
    return;
  }
  let cuota = 0;
  if (version === '4x2') {
    cuota = 400;
  } else if (version === '4x4') {
    cuota = 800;
  }


 

  let imgSrc = '';
  switch (modelo) {
    case 'Pathfinder':
      imgSrc = 'img/Pathfinder.jpg';
      break;
    case 'Kicks':
      imgSrc = 'img/kicks.jpg';
      break;
    case 'Xrail':
      imgSrc = 'img/Xrail.jpg';
      break;
    case 'Qashqai':
      imgSrc = 'img/Qashqai.jpg';
      break;
    default:
      imgSrc = '';
  }

  Swal.fire({
    title: `Cuota para ${modelo} ${version}`,
    text: `La cuota es de $${cuota}`,
    imageUrl: imgSrc,
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: modelo,
  });
}
