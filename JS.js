var ciudades = ["Alicante", "Almeria", "Badajoz", "Barcelona", "Bilbao", "Burgos", "Cadiz", "Cordoba", "Granada", "Madrid","Sevilla", "Valencia"];
var index = 0;

function cambiarCiudadYFondo() {
    var ciudad = ciudades[index];
    var imagen = "";

    if (ciudad == "Alicante") {
        imagen = "url(../assets/ciudades/alicante.jpg)";
    }
    if (ciudad == "Almeria") {
        imagen = "url(../assets/ciudades/almeria.jpg)";
    }
    if (ciudad == "Badajoz") {
        imagen = "url(../assets/ciudades/badajoz.jpg)";
    }
    if (ciudad == "Barcelona") {
        imagen = "url(../assets/ciudades/barcelona.jpg)";
    }
    if (ciudad == "Bilbao") {
        imagen = "url(../assets/ciudades/bilbao.jpg)";
    }
    if (ciudad == "Burgos") {
        imagen = "url(../assets/ciudades/burgos.jpg)";
    }
    if (ciudad == "Cadiz") {
        imagen = "url(../assets/ciudades/cadiz.jpg)";
    }
    if (ciudad == "Cordoba") {
        imagen = "url(../assets/ciudades/cordoba.jpg)";
    }
    if (ciudad == "Granada") {
        imagen = "url(../assets/ciudades/granada.jpg)";
    }
    if (ciudad == "Sevilla") {
        imagen = "url(../assets/ciudades/sevilla.jpg)";
    }
    if (ciudad == "Valencia") {
        imagen = "url(../assets/ciudades/valencia.jpg)";
    }
    if (ciudad == "Madrid") {
        imagen = "url(../assets/ciudades/madrid.jpg)";
    }

    document.getElementById("ciudad").innerText = ciudad;
    document.body.style.backgroundImage = imagen;
    document.body.style = "background: linear-gradient(rgba(204, 232, 255, 0.674), rgba(18, 46, 33, 0.623)), " + imagen + "; background-repeat: no-repeat; background-size:cover;";

    index = (index + 1) % ciudades.length;
}

setInterval(cambiarCiudadYFondo, 3000);

document.getElementById('precio').oninput = function () {
    document.querySelector('label[for="precio"]').innerText = 'Max: ' + this.value + '€';
}

//JQuery: para que las tarjetas se vuelvan opacas al pasar el ratón por encima
$(document).ready(function () {
  $(".card").hover(function () {
    $(this).fadeTo("slow", 1);
  }, function () {
    $(this).fadeTo("slow", 0.7);
  });
});
