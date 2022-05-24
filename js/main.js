var botonIniciarJuego = document.querySelector(".boton-iniciar");
var botonAgregarPalabra = document.querySelector(".boton-agregar");
var pantallaInicarJuego = document.querySelector(".pantalla-inicio-juego");
var pantallaAdicionarPalabra = document.querySelector(".pantalla-adicionar-Palabra");
var pantallaHome = document.querySelector(".pantalla-home");

botonIniciarJuego.addEventListener("click", function(event){
    event.preventDefault();
    incativacionPantallaHome();
    activarPantallaInicarJuego();
});
botonAgregarPalabra.addEventListener("click", function(event){
    event.preventDefault();
    incativacionPantallaHome();
    activarPantallaAdicionarPalabra();
});

function incativacionPantallaHome(){
    pantallaHome.style.display = "none";
}
function incativacionPantallaAgregarPalabra(){
    pantallaAdicionarPalabra.style.display = "none";
}
function activarPantallaInicarJuego(){
    pantallaInicarJuego.classList.add("pantalla-inicio-juego-on");
    agregarpalabra();
}
function activarPantallaAdicionarPalabra(){
    pantallaAdicionarPalabra.classList.add("pantalla-adicionar-Palabra-On");
}