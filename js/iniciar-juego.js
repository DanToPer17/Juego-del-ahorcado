function mostarPalabra(palabraAleatoria){
    cantidadLetras = palabraAleatoria.length;
    console.log("Cantidad de letras: " + cantidadLetras);
    var tabla = document.querySelector("#palabra-a-divinar");
    
    for (var i=0; i<cantidadLetras; i++){
        const span = document.createElement("span");
        const guion = document.createTextNode("_");
        span.appendChild(guion);
        tabla.appendChild(span);
    }
}

var botonNuevoJuego = document.querySelector(".boton-nuevo-juego");

botonNuevoJuego.addEventListener("click", function(event){
    event.preventDefault();
    inactivarGuiones();
    activarPantallaInicarJuego();
});

function inactivarGuiones(){
    var tabla = document.querySelector("#palabra-a-divinar");
    tabla.innerHTML ="";
}
