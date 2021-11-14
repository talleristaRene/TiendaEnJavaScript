'use strict';
let productos = [];
let total = 0;



var Catalogo = {
    productos:[],
    agregarProducto: function(producto){
        if(!this.productos){
         this.productos = [producto]
        } else {
         this.productos.push(producto);
        }
      },
    obtenerPrecioTotal: function(){
    return this.productos.reduce((total, p) => total + p.precio, 0);
    }
};

class Producto{
    constructor(nombre, existencia){
        this.nombreProducto = nombre;
        this.existencia = existencia;
    }
    mostrarProducto(){
        console.log("Nombre Producto: " + this.nombreProducto + "Existencia: " + this.existencia);
    }
    isProducto(){
        var val = false;
        if(!this.nombreProducto == null && !this.existencia == null){
            val = true;
        }
        return val;
    }
}

function main() {
    let arrProductos = [];
    var producto1 = new Producto("Papas", 100);
    var producto2 = new Producto("Alitas", 50);
    var producto3 = new Producto("Boneles", 70);
    var producto4 = new Producto("Aros de Cebolla", 100);
    arrProductos.push(producto1);
    arrProductos.push(producto2);
    arrProductos.push(producto3);
    arrProductos.push(producto4);
    console.log("El arreglo de Productos Tiene :" + arrProductos.length + " productos");
}
main();

/**
 * Funcion que va sumando los valores del arreglo para obbtener el Costo Total.
 */
function generarTotal(){
    let suma = 0;
    for(let i = 0; i < productos.length; i++){
        suma += productos[i].precio;
    }
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
    var escribir = document.getElementById("caja");
    var miTitulo = "<h1>" + "Caja" +"</h1>";
    var totalProductos = "<h3>" + "Cantidad de Productos: " + "<p>"+ productos.length + "</p>"  + "</h3>";
    var costoTotal = "<h3>" + "Costo Total : " + "<p>"+ total + "</p>"  + "</h3>";
    var contenedor = '<div class="contenedor__formulario">' + miTitulo + totalProductos + costoTotal  + "</div>";
    escribir.innerHTML = contenedor;

    console.log(  "assaf"  );
}

window.onload = function() {
document.rellenar.ver.onclick = escribe
}   