(function () {
  emailjs.init("dRfoJXhDlWOE6MBjR");
})();

document.getElementById('subscription-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const serviceID = 'service_03137d1';
  const templateID = 'template_3c2q6zy';

  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      Swal.fire({
        title: '¡Suscripción exitosa!',
        text: 'Gracias por suscribirte.',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });
    }, (err) => {
      Swal.fire({
        title: 'Error',
        text: `No se pudo enviar el formulario: ${err.text}`,
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    });
});

document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const serviceID = 'service_03137d1';
  const templateID = 'template_zb0otns';

  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      Swal.fire({
        title: '¡Mensaje enviado!',
        text: 'Tu mensaje ha sido enviado con éxito.',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });
    }, (err) => {
      Swal.fire({
        title: 'Error',
        text: `No se pudo enviar el mensaje: ${err.text}`,
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    });
});

const texts = {
  es: {
    title: "¡Oferta Especial!",
    description: "Compra ahora y obtén un 20% de descuento en todos la sección de Novedades.",
    subscribe: "Suscríbete a Nuestro Boletín",
    contact: "Contacto",
    emailPlaceholder: "Correo Electrónico",
    namePlaceholder: "Nombre",
    phonePlaceholder: "Teléfono",
    messagePlaceholder: "Mensaje",
    subscribeButton: "Suscribirse",
    sendButton: "Enviar",
    offerTitle: "Promociónes",
    galleryTitle: "Galería de Fotos",
    videoGalleryTitle: "Galería de Videos",
    specialOfferButton: "Ver Novedades",
    footer: "© 2024 Boutique. Todos los derechos reservados.",
    categories: {
      blouses: "Blusas",
      pants: "Pantalones",
      accessories: "Accesorios",
      dresses: "Vestidos",
      shoes: "Zapatos",
      sweaters: "Suéteres"
    },
    nav: {
      home: "Inicio",
      collection: "Colección",
      pages: "Páginas",
      categories: "Categorías",
      testimonials: "Testimonios y Estadísticas",
      object3D: "Figura 3D",
      survey: "Encuesta",
      aboutUs: "Sobre Nosotros",
      projects: "Proyectos",
      exit: "Salir"
    },
    form: {
      emailLabel: "Correo Electrónico",
      nameLabel: "Nombre",
      phoneLabel: "Teléfono",
      messageLabel: "Mensaje"
    }
  },
  en: {
    title: "Special Offer!",
    description: "Shop now and get 20% off on all New Arrivals.",
    subscribe: "Subscribe to Our Newsletter",
    contact: "Contact",
    emailPlaceholder: "Email Address",
    namePlaceholder: "Name",
    phonePlaceholder: "Phone",
    messagePlaceholder: "Message",
    subscribeButton: "Subscribe",
    sendButton: "Send",
    galleryTitle: "Photo Gallery",
    offerTitle: "Offers",
    videoGalleryTitle: "Video Gallery",
    specialOfferButton: "View New Arrivals",
    footer: "© 2024 Boutique. All rights reserved.",
    categories: {
      blouses: "Blouses",
      pants: "Pants",
      accessories: "Accessories",
      dresses: "Dresses",
      shoes: "Shoes",
      sweaters: "Sweaters"
    },
    nav: {
      home: "Home",
      collection: "Collection",
      pages: "Pages",
      categories: "Categories",
      testimonials: "Testimonials and Statistics",
      object3D: "3D Figure",
      survey: "Survey",
      aboutUs: "About Us",
      projects: "Projects",
      exit: "Exit"
    },
    form: {
      emailLabel: "Email Address",
      nameLabel: "Name",
      phoneLabel: "Phone",
      messageLabel: "Message"
    }
  }
};

function changeLanguage(language) {
  document.querySelector('.banner-content h1').textContent = texts[language].title;
  document.querySelector('.banner-content p').textContent = texts[language].description;
  document.querySelector('.subscribe-title').textContent = texts[language].subscribe;
  document.querySelector('.contact-title').textContent = texts[language].contact;
  document.getElementById('email').placeholder = texts[language].emailPlaceholder;
  document.querySelector('.contact-email-input').placeholder = texts[language].emailPlaceholder;
  document.getElementById('name').placeholder = texts[language].namePlaceholder;
  document.getElementById('phone').placeholder = texts[language].phonePlaceholder;
  document.getElementById('message').placeholder = texts[language].messagePlaceholder;
  document.querySelector('#subscription-form button').textContent = texts[language].subscribeButton;
  document.querySelector('#contact-form button').textContent = texts[language].sendButton;
  document.querySelector('.gallery-title').textContent = texts[language].galleryTitle;
  document.querySelector('.video-gallery-title').textContent = texts[language].videoGalleryTitle;
  document.querySelector('.boton-largo').textContent = texts[language].specialOfferButton;
  document.querySelector('footer h4').textContent = texts[language].footer;
  document.querySelector('.offers-title').textContent = texts[language].offerTitle;

  // Actualizar los nombres de las categorías
  document.querySelector('.categories-section .category:nth-child(1) h3').textContent = texts[language].categories.blouses;
  document.querySelector('.categories-section .category:nth-child(2) h3').textContent = texts[language].categories.pants;
  document.querySelector('.categories-section .category:nth-child(3) h3').textContent = texts[language].categories.accessories;
  document.querySelector('.categories-section .category:nth-child(4) h3').textContent = texts[language].categories.dresses;
  document.querySelector('.categories-section .category:nth-child(5) h3').textContent = texts[language].categories.shoes;
  document.querySelector('.categories-section .category:nth-child(6) h3').textContent = texts[language].categories.sweaters;

  //Navbar
  document.querySelector('a[href="inicio.html"]').textContent = texts[language].nav.home;
  document.querySelector('a[href="coleccion.html"]').textContent = texts[language].nav.collection;
  document.querySelector('a.nav-link.dropdown-toggle').textContent = texts[language].nav.pages;
  document.querySelector('a[href="categorias.html"]').textContent = texts[language].nav.categories;
  document.querySelector('a[href="testimonioConta.html"]').textContent = texts[language].nav.testimonials;
  document.querySelector('a[href="objeto3d.html"]').textContent = texts[language].nav.object3D;
  document.querySelector('a[href="encuesta.html"]').textContent = texts[language].nav.survey;
  document.querySelector('a[href="sobreNosotros.html"]').textContent = texts[language].nav.aboutUs;
  document.querySelector('a[href="landing.html"]').textContent = texts[language].nav.projects;
  document.querySelector('a[href="index.html"]').textContent = texts[language].nav.exit;

  // Actualizar las etiquetas de los formularios
  document.querySelector('label[for="email"]').textContent = texts[language].form.emailLabel;
  document.querySelector('.contact-email').textContent = texts[language].form.emailLabel;
  document.querySelector('label[for="name"]').textContent = texts[language].form.nameLabel;
  document.querySelector('label[for="phone"]').textContent = texts[language].form.phoneLabel;
  document.querySelector('label[for="message"]').textContent = texts[language].form.messageLabel;
}

// Inicializar con el idioma predeterminado (Español)
const savedLanguage = localStorage.getItem('language') || 'es';
document.getElementById('language-select').value = savedLanguage;
changeLanguage(savedLanguage);

document.getElementById('language-select').addEventListener('change', function() {
  const selectedLanguage = this.value;
  localStorage.setItem('language', selectedLanguage);
  changeLanguage(selectedLanguage);
});

changeLanguage('es');
