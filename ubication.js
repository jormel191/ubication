function comenzar(){
    var miboton= document.getElementById("dame");
    miboton.addEventListener("click", obtener, false);
}

function obtener(){
    var parametros={enableHighAccuracy: true, timeout:10000, maximumAge:1000}
    navigator.geolocation.watchPosition(mostrar_posicion, errores, parametros);
}

function errores(error){
    if(error.message=="User denied Geolocation"){
        alert("Debes presionar permitir")
    }
}

function mostrar_posicion(posicion){
    var ubicacion= document.getElementById("ubication");


 //https://www.google.com/maps/@10.0703188,-69.3385416,17z?hl=es
 /*   var mimapa= "https://www.google.com/maps/@" + posicion.coords.latitude + "," + 
    posicion.coords.longitude + "," + "posicion.coords.accuracy" + "z?hl=es";
    mimapa.innerHTML="<img src= '" + mimapa + "'>";

    */
    var miubicacion="";

    miubicacion+= "Latitud: " + posicion.coords.latitude + "<br>";
    miubicacion+= "longitud: " + posicion.coords.longitude + "<br>";
    miubicacion+= "exactitud: " + posicion.coords.accuracy + "<br>";
    ubicacion.innerHTML=miubicacion;
    console.log("prueba ->   " + miubicacion);


}

function sendMail(){
    var temParams= {
        to_name:miubicacion
    };
    emailjs.send('gmail','template_ki8khud', temParams).then(function(res){
        console.log("succes", res.status);

    })
}

window.onload = function() {
    obtener();
  };
//window.addEventListener("load", comenzar, false);