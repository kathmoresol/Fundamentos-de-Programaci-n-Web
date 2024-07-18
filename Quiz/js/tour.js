//variables controladoras
var img_panorama = new PANOLENS.ImagePanorama('img/imagen2.jpg');
var contenedor = document.querySelector('#container');
var infospot;

// zona interaccion #1 
var infopoint1 = new PANOLENS.Infospot(30, PANOLENS.DataImage.Info);
// establecen las coordenadas x y y z posicion tridimensional del infospot dentro de la panoramica por ejemplo x= 0, y=0 y z = -500
infopoint1.position.set(500 ,36 , 273);
// -60segundos  indica que el texto permanecera gasta que el usuarui lo cierre manualmente 
infopoint1.addHoverText('este es el numero 1.', -60);
// apariencia del cuadro informativo 
infopoint1.element.innerHTML = '<div style= "background-color: rgba(151, 104, 230, 0.8); color :#FFFF00; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">Los cuadros son obras de arte que decoran y personalizan espacios, reflejando estilo y personalidad.</div>';
// agregar la zona de interaccion al escenario 
img_panorama.add(infopoint1);
console.log(infopoint1);

// zona de interaccion #2 
var infopoint2= new PANOLENS.Infospot(50,PANOLENS.DataImage.Info);
// establecen las coordenadas x y y z posicion tridimensional del infospot dentro de la panoramica por ejemplo x= 0, y=0 y z = -500
infopoint2.position.set(-101 ,-49 , 500);
// -60segundos  indica que el texto permanecera gasta que el usuarui lo cierre manualmente 
infopoint2.addHoverText(' Hola soy un gato muy bonito.', -60);
// apariencia del cuadro informativo 
infopoint2.element.innerHTML = '<div style= "background-color: rgba(245, 40, 145, 0.8); color :#FFFF00; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">Las mesas de comedor son el centro de reuniones familiares y sociales, ofreciendo un espacio para compartir comidas y crear recuerdos.</div>';
// agregar la zona de interaccion al escenario 
img_panorama.add(infopoint2);


// zona de interaccion #3
var infopoint3 = new PANOLENS.Infospot(50,PANOLENS.DataImage.Info);
// establecen las coordenadas x y y z posicion tridimensional del infospot dentro de la panoramica por ejemplo x= 0, y=0 y z = -500
infopoint3.position.set(500 ,-24 , -428);
// -60segundos  indica que el texto permanecera gasta que el usuarui lo cierre manualmente 
infopoint3.addHoverText('ESTA ES LA INTERACCION 3', -60);
// apariencia del cuadro informativo 
infopoint3.element.innerHTML = `
    <div class="" style="">
        <iframe width="720" height="480" src="https://www.youtube.com/embed/GvniuULDLOM"></iframe>
    </div>
`;

img_panorama.add(infopoint3);



// zona de interaccion #4
var infopoint4 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
var infopoint4= new PANOLENS.Infospot(100,'img/emoji.png');
infopoint4.position.set(500 ,-181 , 245);

infopoint4.addHoverText('INTERACCION 4', -60);
// apariencia del cuadro informativo 
infopoint4.element.innerHTML = '<div style= "background-color: rgba(104, 224, 230, 0.8); color :#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">Los sofás son muebles esenciales que brindan comodidad y estilo a los espacios de estar, ideales para relajarse y socializar.</div>';
// agregar la zona de interaccion al escenario 
img_panorama.add(infopoint4);

// zona de interaccion #5
var infopoint5= new PANOLENS.Infospot(25, PANOLENS.DataImage.Info);
infopoint5.position.set(500 ,180 , 36);

infopoint5.addHoverText('INTERACCION 4', -60);
// apariencia del cuadro informativo 
infopoint5.element.innerHTML = '<div style= "background-color: rgba(39, 245, 125, 0.8); color :#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">Una lámpara es un dispositivo que produce luz para iluminar espacios, usando electricidad u otras fuentes de energía.</div>';
// agregar la zona de interaccion al escenario 
img_panorama.add(infopoint5);


// zona de interaccion #6
var infopoint3 = new PANOLENS.Infospot(50,PANOLENS.DataImage.Info);
// establecen las coordenadas x y y z posicion tridimensional del infospot dentro de la panoramica por ejemplo x= 0, y=0 y z = -500
infopoint3.position.set(-500 ,-386 , 131);
// -60segundos  indica que el texto permanecera gasta que el usuarui lo cierre manualmente 
infopoint3.addHoverText('ESTA ES LA INTERACCION 3', -60);
// apariencia del cuadro informativo 
infopoint3.element.innerHTML = `
  
        <audio controls>
            <source src="audios/gatito.mp3" type="audio/mpeg">
            Tu navegador no soporta la etiqueta de audio.
        </audio>

`;

img_panorama.add(infopoint3);

// zona de interaccion #7
var infopoint7= new PANOLENS.Infospot(25, PANOLENS.DataImage.Info);
infopoint7.position.set(-223 ,5 , -500);

infopoint7.addHoverText('INTERACCION 7', -60);
// apariencia del cuadro informativo 
infopoint7.element.innerHTML = '<div style= "background-color: rgba(255, 101, 0, 0.8); color :#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">Los pasillos son áreas de transición que conectan diferentes espacios dentro de un edificio, a menudo decorados para complementar el diseño interior.</div>';
// agregar la zona de interaccion al escenario 
img_panorama.add(infopoint7);

// zona de interaccion #8
var infopoint8= new PANOLENS.Infospot(25, PANOLENS.DataImage.Info);
infopoint8.position.set(500 ,-10 , -93);

infopoint8.addHoverText('INTERACCION 8', -60);
// apariencia del cuadro informativo 
infopoint8.element.innerHTML = '<div style= "background-color: rgba(255, 255, 0, 0.8); color ::#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">Las ventanas permiten la entrada de luz natural y ventilación, además de ofrecer vistas al exterior y contribuir al diseño arquitectónico.</div>';
// agregar la zona de interaccion al escenario 
img_panorama.add(infopoint8);


// zona de interaccion #9
var infopoint9= new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infopoint9.position.set(500 ,-358 , -69);

infopoint9.addHoverText('INTERACCION 8', -60);
// apariencia del cuadro informativo 
infopoint9.element.innerHTML = '<div style= "background-color: rgba(16, 0, 255, 0.8); color :#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">Las alfombras aportan calidez y estilo a cualquier espacio, proporcionando confort bajo los pies y mejorando la acústica de la habitación.</div>';
// agregar la zona de interaccion al escenario 
img_panorama.add(infopoint9);











// agrega la panoramica al visor
var viewer = new PANOLENS.Viewer( { container: contenedor } );
viewer.add(img_panorama);
