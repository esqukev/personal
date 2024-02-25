//Evento que carga la función automaticamente 

window.onload = function() {

    document.getElementById("output-imagenes").innerHTML = "<img src='imagenes/.jpg' class='img-fluid rounded' alt='fortuna' />";


    document.getElementById("atracciones").onchange = function(e) {

        let n = e.target.value;
        let imagen = "<img src='imagenes/combo/" + n + ".jpg' class='img-fluid img-thumbnail rounded' alt 'amenidades' />";
        let text = ["Hermosos ríos de agua cristalina",
        "Explore nuestro mariposario",
        "Para los amantes de la fotografía, gran avistamiento de estrellas",
        "A tan solo hora y media del oceano pacífico",
        "Hermosos río y cascadas para los amantes de la naturaleza",
        "Avistamiento de aves durante todo el año",
        "Para los amantes del café, tenemos el tour por nuestras plantaciones",
        "Tour de cuadraciclo con excelentes vistas al volcan y su lago",
    ];
    document.getElementById("output-img").innerHTML = imagen;
    document.getElementById("output-txt").innerHTML = text[n-1];
    };
};

//funcion del boton reiniciar 

document.getElementById("btn-clean").onclick = function(){
    document.getElementById("output-img").innerHTML = "<img src='imagenes/fortuna.jpg' class='img-fluid rounded' alt='fortuna' />";
    document.getElementById("output-txt").innerHTML = "";
    document.getElementById("stadium").value = "";
};


//CARROUSEL-----------


let micarrusel = {};
let foto = 0;
let total = 0;

//arreglo para cargar las imagenes y titulo de cada foto.
micarrusel = [{ imageurl: "imagenes/1.jpg", titulo: "" },
    { imageurl: "imagenes/2.jpg", titulo: "" },
    { imageurl: "imagenes/3.jpg", titulo: "" },
    { imageurl: "imagenes/4.jpg", titulo: "" },
    { imageurl: "imagenes/5.jpg", titulo: "" },
    { imageurl: "imagenes/6.jpg", titulo: "" },
    { imageurl: "imagenes/7.jpg", titulo: "" },
    { imageurl: "imagenes/8.jpg", titulo: "" },
    { imageurl: "imagenes/9.jpg", titulo: "" },
];


//funcion que permite cambiar las imagenes (anterior y siguiente)
let cambiar = function(mas) {
    //almacena la cantidad total de imagenes
    total = micarrusel.length;
    //almacena la proxima foto
    foto = foto + mas;
    //condicionales para determinar la imagen a presentar
    if (foto > total) {
        foto = 1
    }
    if (foto < 1) {
        //tiene la cantidad total de imagenes
        foto = total;
    }

    //instrucciones que apuntan a cada imagen y titulo que brinda cada logotipo
    document.thumb.src = micarrusel[foto - 1].imageurl;
    titulo = document.getElementById('titulo');
    titulo.innerText = micarrusel[foto - 1].titulo;
}

//obtener el modal
var modal = document.getElementById("modal1");

//obtener la imagen y agregarla dentro del modal - 
//Usar el texto alternativo "alt" como subtítulo

//imagen
var img = document.getElementById("myImg");
//contenido
var modalImg = document.getElementById("img01");
//titulo 
var captionText = document.getElementById("caption");


//al dar clic a la foto en pequeño 
img.onclick = function() {
    //desplegar la foto
    modal.style.display = "block";
    //apunta el contenido del modal
    modalImg.src = this.src;
    //asigna el ALT debabo de la imagen
    captionText.innerHTML = this.alt;
}

//obtenga el elemento <span> que cierra el modal
var cerrar = document.getElementsByClassName("close")[0];

//cuando el usuario hace clic en <span> (x), cierre el modal
cerrar.onclick = function() {
    modal.style.display = "none";
}


/*funcionalidad de la galeria evento onchange*/

document.getElementById('menuOpciones').addEventListener('change', galeria);

function galeria() {
    var opciones = document.getElementById('menuOpciones').value;
    switch (opciones) {
        case "animales":
            document.querySelector('.galeriaAnimales').style.display = "block"
            document.querySelector('.galeriaPaisajes').style.display = "none"
            document.querySelector('.galeriaAlimentos').style.display = "none"
            document.querySelector('.galeriaInstalaciones').style.display = "none"
            document.querySelector('.galeriaCostarica').style.display = "none"
            break;
        case "paisajes":
            document.querySelector('.galeriaAnimales').style.display = "none"
            document.querySelector('.galeriaPaisajes').style.display = "block"
            document.querySelector('.galeriaAlimentos').style.display = "none"
            document.querySelector('.galeriaInstalaciones').style.display = "none"
            document.querySelector('.galeriaCostarica').style.display = "none"
            break;
        case "alimentos":
            document.querySelector('.galeriaAnimales').style.display = "none"
            document.querySelector('.galeriaPaisajes').style.display = "none"
            document.querySelector('.galeriaAlimentos').style.display = "block"
            document.querySelector('.galeriaInstalaciones').style.display = "none"
            document.querySelector('.galeriaCostarica').style.display = "none"
            break;
        case "instalaciones":
            document.querySelector('.galeriaAnimales').style.display = "none"
            document.querySelector('.galeriaPaisajes').style.display = "none"
            document.querySelector('.galeriaAlimentos').style.display = "none"
            document.querySelector('.galeriaInstalaciones').style.display = "block"
            document.querySelector('.galeriaCostarica').style.display = "none"
            break;
        case "costarica":
            document.querySelector('.galeriaAnimales').style.display = "none"
            document.querySelector('.galeriaPaisajes').style.display = "none"
            document.querySelector('.galeriaAlimentos').style.display = "none"
            document.querySelector('.galeriaInstalaciones').style.display = "none"
            document.querySelector('.galeriaCostarica').style.display = "block"
            break;
        default:
            document.querySelector('.galeriaAnimales').style.display = "none"
            document.querySelector('.galeriaPaisajes').style.display = "none"
            document.querySelector('.galeriaAlimentos').style.display = "none"
            document.querySelector('.galeriaInstalaciones').style.display = "none"
            document.querySelector('.galeriaCostarica').style.display = "none"
            break;
    }
}