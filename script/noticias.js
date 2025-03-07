var imagenes1 = ["../images/news/alianza_iquique.png", "../images/news/asumio_eliminacion_iquique.jpeg", "../images/news/tercera_fase.jpeg"];
var imagenes2 = ["../images/news/melgar_cerroPorteno.webp", "../images/news/corinthians_barcelona.avif", "../images/news/CuandoJuegaUniversitario.avif"];

var indice1 = 0;
var indice2 = 0;

function cambiarImagen() {
    indice1++;
    indice2++;
    if (indice1 >= imagenes1.length) {
        indice1 = 0;
    }
    if (indice2 >= imagenes2.length) {
        indice2 = 0;
    }
    document.getElementById("imagen1").src = imagenes1[indice1];
    document.getElementById("imagen2").src = imagenes2[indice2];
}
setInterval(cambiarImagen, 3000);