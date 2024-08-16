(function () {
    emailjs.init("C3RNVDFIzDN6BQ9gR");
})();

document.getElementById('satisfaction-survey-form').addEventListener('submit', function (event) {
    event.preventDefault();

    
    const serviceID = 'service_cr02gyd';
    const templateID = 'template_89yknjs';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            alert('¡Suscripción exitosa!');
        }, (err) => {
            alert(JSON.stringify(err));
        });
});