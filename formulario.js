var formulario = document.querySelector(".formulario")
var listaInvitados = document.getElementById("lista-de-invitados");

formulario.onsubmit = function(e) {

  e.preventDefault();
  
  var n = formulario.elements[0]
  var e = formulario.elements[1]
  var na = formulario.elements[2]

  var nombre = n.value
  var edad = e.value

  var i = na.selectedIndex
  var nacionalidad = na.options[i].value
  console.log(nombre, edad)
  console.log(nacionalidad)

  if (nombre.length === 0) {
    n.classList.add("error");
  } else {
    n.classList.remove("error"); 
  }

  if (edad < 18 || edad > 120) {
    e.classList.add("error");
  } else {
    e.classList.remove("error"); 
  }


if (nombre.length > 0 
  && (edad >= 18 
    && edad <= 100) ) {
  agregarInvitado(nombre, edad, nacionalidad)
  }
}

//var botonBorrar = document.createElement("button")
//botonBorrar.textContent = "Eliminar invitado"
//botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
document.body.appendChild(corteLinea)
//document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

var lista = document.getElementById("lista-de-invitados")

var elementoLista = document.createElement("div")
elementoLista.classList.add("elemento-lista")
lista.appendChild(elementoLista)

var spanNombre = document.createElement("span")
var inputNombre = document.createElement("input")
var espacio = document.createElement("br")
spanNombre.textContent = "Nombre: "
inputNombre.value = nombre 
//elementoLista.appendChild(spanNombre)
//elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)

function crearElemento(descripcion, valor) {
var spanNombre = document.createElement("span")
var inputNombre = document.createElement("input")
var espacio = document.createElement("br")
spanNombre.textContent = descripcion + ": "
inputNombre.value = valor 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)
}

crearElemento("Nombre", nombre)
crearElemento("Edad", edad)
crearElemento("Nacionalidad", nacionalidad)


var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
elementoLista.appendChild(corteLinea)
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove()
  }
}

/*
Se comentaron los elementos de la linea  34,35,36,39 ya que estos hacian que se viera un boton de eliminar invitado el cual no funcionaba y
solo estaba de adorno,
se var listaInvitados = document.getElementById("lista-de-invitados"); trajo el elemento de liste-de-invitados ya que no estaba declarado
en el html se puso el id en:
 <div id="lista-de-invitados">
    <h2>Lista de invitados</h2>
  </div>
  para poder mostrar ahi la lista
  se ha quitado un punto en la declaracion del script

  se puso como comentario:
  //elementoLista.appendChild(spanNombre)
//elementoLista.appendChild(inputNombre)
ya que mostraba doble vez el nombre del invitado

// Quita la clase de error si se proporciona un nombre correcto
 if (nombre.length === 0) {
    n.classList.add("error");
  } else {
    n.classList.remove("error"); 
  }


    if (edad < 18 || edad > 120) {
    e.classList.add("error");
  } else {
    e.classList.remove("error"); // Quita la clase de error si se proporciona una edad valida
  }


*/