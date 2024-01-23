var ciudades = ["albacete", "alicante", "almeria", "badajoz", "barcelona", "bilbao", "burgos", "cadiz", "cartagena", "cordoba", "granada", "jerez de la frontera", "la coruña", "las palmas", "leon", "logroño", "madrid", "malaga", "murcia", "oviedo", "pamplona", "salamanca", "santa cruz de tenerife", "sevilla", "valencia", "valladolid", "zaragoza"];
var index = 0;

function cambiarCiudadYFondo() {
    var ciudad = ciudades[index];
    var imagen = "";

    if (ciudad == "barcelona") {
        imagen = "url(../assets/3.jpg)";
    } else if (ciudad == "madrid") {
        imagen = "url(../assets/3.jpg)";
    }

    document.getElementById("ciudad").innerText = ciudad;
    document.body.style.backgroundImage = imagen;

    // Incrementa el índice y reinícialo si supera el número de ciudades
    index = (index + 1) % ciudades.length;
}

// Cambia la ciudad y la imagen de fondo cada 3 segundos (3000 milisegundos)
setInterval(cambiarCiudadYFondo, 3000);

document.getElementById('precio').oninput = function() {
    document.querySelector('label[for="precio"]').innerText = 'Max: ' + this.value + '€';
}