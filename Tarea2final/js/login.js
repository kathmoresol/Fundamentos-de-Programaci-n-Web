document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = "cenfo";
    const contraseña = "123";

    var usuario = document.getElementsByName("usuario")[0].value;
    var contrasena = document.getElementsByName("contrasena")[0].value;

    if (usuario === nombre && contrasena === contraseña) {
        location.href = "landing.html";
    } else {
        alert("Usuario o contraseña incorrectos");
    }
});
