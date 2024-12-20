//DECLARACION DE VARIABLES GLOBALES
let shante = document.getElementById("shante");
// shante.setAttribute("src", "img/Vidas/heart_1.png"); -- como cambiar imagen
let animacion = setInterval(cambiar_imagen, 50); //atributo para cambiar img cada 50 ms
let num_imagen = 0;
let ejeX = 0;
let ejeY = 0;
//DETECCION DE BORDES DE PANTALLA
let ancho = window.innerWidth;
let alto = window.innerHeight;
//Dimension de Shnate
let shanteAncho = shante.offsetWidth;
let shanteAlto = shante.offsetHeight;
//console.log(ancho);
//console.log(alto);

//DECLARACION DE FUNCIONES
function cambiar_imagen() {
  num_imagen = num_imagen + 1;
  let direc; //declaracion de variable de la funcion, no se puede utilizar fuera de ella
  if (num_imagen > 15) {
    num_imagen = 1; //volver a la primer imagen cuando llega al final
  }
  direc = "img/shante/Shante_" + num_imagen + ".png";
  shante.setAttribute("src", direc);
}

//ESCUCHAR EVENTOS
document.addEventListener("keydown", mover);
function mover(e) {
  //Derecha
  if (e.keyCode == 68) {
    if (ejeX + shanteAncho + 5 <= ancho) {
      ejeX = ejeX + 5;
    } else {
      ejeX = ancho - shanteAncho;
    }
  }
  //Izquierda
  if (e.keyCode == 65) {
    if (ejeX - 5 >= 0) {
      ejeX = ejeX - 5;
    } else {
      ejeX = 0;
    }
  }
  //Arriba
  if (e.keyCode == 87) {
    if (ejeY - 5 >= 0) {
      ejeY = ejeY - 5;
    } else {
      ejeY = 0;
    }
  } //Abajo
  if (e.keyCode == 83) {
    if (ejeY + shanteAlto + 5 <= alto) {
      ejeY = ejeY + 5;
    } else {
      ejeY = alto - shanteAlto;
    }
  }
  shante.style.left = ejeX + "px";
  shante.style.top = ejeY + "px";
  // console.log(ejeX);
}
