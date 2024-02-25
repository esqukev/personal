//Elasticidad botones menu

var s = {
    // ... otras opciones
    speed: 500, // Ajusta la velocidad según tus preferencias
    // ... otras opciones
};

$(document).ready(function() {
    smoothScroll.init({
        selector: '[data-scroll]',
        //selector: 'a.nav-link', 
        // 2 seg equivale a 2000)  
        speed: 2000,
        //aceleraciones
        easing: 'easeInCubic',
        //easing: 'easyInCubic'
        //easing: 'easyInOutQuad',
        //easing:'easeInQuart',
        //easing: 'easeInOutCubic',
    });

});


//desaparece el boton ScrollTop al cargar la pagina web
document.getElementById("flechabtn").style.display = "none";

//esconder botón ScrollTop (parte superior)
window.onscroll = function() {
    scrollFunction()
};

//funcion scroll
function scrollFunction() {
    if (document.body.scrollTop > 280 || document.documentElement.scrollTop > 280) {
        document.getElementById("flechabtn").style.display = "block";
    } else {
        document.getElementById("flechabtn").style.display = "none";
    }
}




//Funcián Scrolltop (Jquery)
function topFunction() {
    $('a.scroll-top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 });
    });
}