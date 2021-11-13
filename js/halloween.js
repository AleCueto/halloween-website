/*******   Aquí están las funciones de halloween */

/* función mostrar */

function mostrar(imagen){
    document.getElementById(imagen).style.visibility = "visible";
}

function ocultar(imagen){
    document.getElementById(imagen).style.visibility = "hidden";
}

function sonar(sonido){
    document.getElementById(sonido).play();
}

function parar(sonido){
    document.getElementById(sonido).pause();
}