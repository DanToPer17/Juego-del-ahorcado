var botonIniciarJuego = document.querySelector(".boton-iniciar")
var botonAgregarPalabra = document.querySelector(".boton-agregar");

var pantallaInicarJuego = document.querySelector(".pantalla-inicio-juego")
var pantallaAdicionarPalabra = document.querySelector(".pantalla-adicionar-Palabra");

var pantallaHome = document.querySelector(".pantalla-home");

botonAgregarPalabra.addEventListener("click", function(event){
    event.preventDefault();
    event.target.parentNode.remove();
    pantallaAdicionarPalabra.classList.add("pantalla-adicionar-Palabra-On");
    incativacionPantallaHome()
});
botonIniciarJuego.addEventListener("click", function(event){
    event.preventDefault();
    event.target.parentNode.remove();
    pantallaInicarJuego.classList.add("pantalla-inicio-juego-on");
    incativacionPantallaHome()
});
function incativacionPantallaHome(){
    pantallaHome.style.display = "none";
}


