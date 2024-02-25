window.addEventListener('load', function() {
    // Selecciona el botón por su ID
    var btnEnviar = document.getElementById('btnEnviar');

    // Agrega un evento de clic al botón
    btnEnviar.addEventListener('click', function() {
        // La función que se ejecutará cuando se haga clic en el botón
        Swal.fire({
            //icon: "success",
            showConfirmButton: false,
            //milisegundos equivalen a 5seg
            timer: 4000,
            html: '<iframe width="320" height="240" src="https://lottie.host/embed/552611fa-b591-4207-8d79-fe4b6813c679/RUsb6VhhEc.json"></iframe> <br><br><p>¡Gracias por su interés!</p>',
        });
    });
});