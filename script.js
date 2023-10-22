//clase1
//alert("Hola este es mi Javascript");
//let nombre = "Luis";
//var nombre1 = "Martha";
//const nombre2 = "Martha";
//console.log(nombre);
//console.log(nombre1);
//console.log(nombre2);

//clase 2 SELECCCIONAR ELEMENTOS

//let contenidoTitulo = "PROYECTO XY";
//let titulo = document.querySelector(".logo");
//titulo.innerHTML = contenidoTitulo;
//let textoTitulo = titulo.innerText;
//console.log(textoTitulo);
//if (textoTitulo=="cualquier palabra"){titulo.innerHTML = "otro";} 
//else {console.log("No se cumple");}

//let valor1 = "Demora";
//let valor2 = "Tardanza";
//let valor3 = "malos";

//let parrafo = document.querySelector(".parrafo2");

//function cambiarTexto(valor1, valor2, valor3) {
   // let contenido = `${valor1}, ${valor2} y ${valor3} son algunos ejemplos de valores que guían la descripción de una empresa. En el caso de Nosotros, el pilar es la sostenibilidad: en las relaciones laborales, en los productos creados y en la preservación del medio ambiente`;
  //  return contenido;
//}
//parrafo.innerText = cambiarTexto(valor1, "buenos", valor3)

//Clase 3

let menu_responsive = document.querySelector(".checkbtn");
menu_responsive.onclick = function () {
  navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");
};


//Formulario
const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});