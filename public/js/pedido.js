'use strict';
import {Catalogo} from './catalogo.js';

let productos = [];
let total = 0;



/**
 * Funcion que va sumando los valores del arreglo para obbtener el Costo Total.
 */
function generarTotal(){
    let suma = 0;
    for(let i = 0; i < productos.length; i++){
        suma += productos[i].precio;
    }
    console.log(Catalogo());
    total = suma;
}
/**
 * Funcion que permite escribir los valores que se ingresan al formulario mediante API Web
 */
 function escribe() {
    var nombreP =  document.getElementById("nombre").value;   
    var precioP =  parseInt( document.getElementById("precio").value ) ; 
    console.log(precioP);
    productos.push({
        nombre: nombreP, precio: precioP
    });
    generarTotal();
    escribir = document.getElementById("caja");
    miTitulo = "<h1>" + "Caja" +"</h1>";
    totalProductos = "<h3>" + "Cantidad de Productos: " + "<p>"+ productos.length + "</p>"  + "</h3>";
    costoTotal = "<h3>" + "Costo Total : " + "<p>"+ total + "</p>"  + "</h3>";
    contenedor = '<div class="contenedor__formulario">' + miTitulo + totalProductos + costoTotal  + "</div>";
    escribir.innerHTML = contenedor;

    console.log(  "assaf"  );
}

window.onload = function() {
document.rellenar.ver.onclick = escribe
}   