var palabraIngresada = document.querySelector(".caja-texto");
var botonGuardarEmpezar = document.querySelector(".boton-guardar-palabra");
var cajaTexto = document.querySelector(".caja-texto");
var pantallaAdicionarPalabra = document.querySelector(".pantalla-adicionar-Palabra");

var palabras = ["AMAZONAS", "BOGOTA", "TOKIO", "RIO", "MEDELLIN", "MEXICO", "PERU", "ECUADOR", "PORTUGAL"];
var palabraNueva;
var palabraAleatoria;

palabraIngresada.addEventListener("input", function(){
    
    palabraIngresada = document.querySelector(".caja-texto").value;
    palabraNueva = palabraIngresada.toUpperCase();
    
    if(palabraIngresada == ""){
        alert("Por favor ingrese una palabra para iniciar.");
        palabraNueva = null;
    }else if(palabraIngresada.length > 8){
            alert("Garantizar maximo 8 letras por palabra.");
            cajaTexto.value = '';
            palabraNueva = null;
        }     
});
botonGuardarEmpezar.addEventListener("click", function(event){
    event.preventDefault(); 
    if(palabraNueva != undefined){
        agregarpalabra(palabraNueva);
        event.target.parentNode.remove();
        incativacionPantallaAgregarPalabra();
        pantallaInicarJuego.classList.add("pantalla-inicio-juego-on");
    }else{
        alert("Por favor ingrese una palabra para iniciar.")
        return;
    }
});

function agregarpalabra(palabraNueva){
    if(palabraNueva == undefined){
        swal("A jugar!", "Sección: países", "success");
        palabraRandom(palabras);
    }else{
        palabras.push(palabraNueva);
        //console.log("Palabra ingresada: " + palabraNueva);
        swal("A jugar!", "Palabra registrada con exito", "info");
        //console.log(palabras);
        palabraRandom(palabras);
    }
}
function palabraRandom(palabras){
    var random = Math.floor(Math.random()*palabras.length);
    palabraAleatoria = palabras[random];
    //console.log("Palabra Random= " + palabraAleatoria);
    activarGuiones(palabraAleatoria);
}

function sorteoNuevoJuego(palabraNueva){
    if(palabraNueva == undefined){
        palabraRandom(palabras);
    }else{
        palabras.push(palabraNueva);
        //console.log("Palabra ingresada: " + palabraNueva);
        //swal("A jugar!", "Palabra registrada con exito", "success");
        //console.log(palabras);
        palabraRandom(palabras);
    }
}