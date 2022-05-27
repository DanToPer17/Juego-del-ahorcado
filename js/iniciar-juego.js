var cantidadLetras; 
function activarGuiones(palabraAleatoria){
    cantidadLetras = parseInt(palabraAleatoria.length);
    //console.log("Cantidad de letras: " + cantidadLetras);
    var tabla = document.querySelector("#palabra-a-divinar");
    
    for (var i=0; i<cantidadLetras; i++){
        const span = document.createElement("span");
        const guion = document.createTextNode("_");
        span.appendChild(guion);
        tabla.appendChild(span);
    }
}
var botonNuevoJuego = document.querySelector(".boton-nuevo-juego");
var tabla = document.querySelector("#palabra-a-divinar");
var botonLetras = document.querySelectorAll("#tecla");
var dibujo = document.querySelector(".dibujo");

var cantidadAciertos = 0;
var cantidadErrores = 0;

botonNuevoJuego.addEventListener("click", function(event){
    event.preventDefault();
    reiniciarSpan();
    reiniciarBotonesLetras();
    reinciarDibujo();
    sorteoNuevoJuego();
});

var botonLetra = 0;
for(var i=0; i<botonLetras.length; i++ ){
    botonLetras[i].addEventListener("click", function(event){
        event.preventDefault();
        botonLetra = event.target.value;
        //console.log(botonLetra);
        const inactivarBoton = event.target;
        inactivarBoton.disabled = true;
        buscarLetraEnPalabra(botonLetra);
    });
}

function buscarLetraEnPalabra(botonLetra){

    var acerto = false;  

    for(var i=0; i<palabraAleatoria.length; i++){

        if(botonLetra == palabraAleatoria[i]){    
            var spans = document.querySelectorAll("#palabra-a-divinar span");
            //console.log(spans[i]);
            spans[i].textContent = botonLetra;
            acerto = true;
            
            cantidadAciertos++;

            //console.log("Cantidad de letras: " + cantidadLetras);
            //console.log("Cantidad de aciertos: " + cantidadAciertos);

            if(cantidadAciertos == cantidadLetras ){
                swal("GANASTE!", "Felicitaciones", "success");
                reiniciarSpan();
                reiniciarBotonesLetras();
                reinciarDibujo();
                sorteoNuevoJuego();  
            }
        }
    }

    if(acerto == false){
        cantidadErrores++;
        //console.log("Cantidad de errores: " + cantidadErrores);

        var source = `img/ahorcado${cantidadErrores}.png`;
        dibujo.src = source;

        if(cantidadErrores == 8){
            swal("Perdiste!", "Palabra en juego: " + palabraAleatoria, "error");
            reiniciarSpan();
            reiniciarBotonesLetras();
            reinciarDibujo();
            sorteoNuevoJuego();
        }
    }
}
function reiniciarSpan(){
    tabla.innerHTML ="";
    cantidadAciertos = 0;
    cantidadErrores = 0;
}
function reiniciarBotonesLetras(){
    for(var i=0; i<botonLetras.length; i++ ){
        botonLetras[i].disabled = false;
    }
    botonLetra = "";
}
function reinciarDibujo(){
    var source = `img/ahorcado0.png`;
    dibujo.src = source;
}