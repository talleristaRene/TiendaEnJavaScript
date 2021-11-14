'use strict';

let productos = [];
let total = 0;

// Objeto producto
function Producto(nombre, precio, porcion){
    // atributos
    this.nombre = nombre; 
    this.precio = precio;
    this.porcion = porcion;
    // Metodos
    this.getNombre = function(){return this.nombre;}
    this.getPrecio = function(){return precio;},
    this.getPorcion = function(){return porcion;},
    this.setNombre = function(nombre){this.nombre = nombre;},
    this.setPrecio = function(precio){this.precio = precio;},
    this.setPorcion = function(porcion){this.porcion = porcion;}
}

var p1 = new Producto("Papas", 26, 35);
var p2 = new Producto("Alitas", 45, 6);
var p3 = new Producto("Boneles", 30, 10);
var p4 = new Producto("Aros de Cebolla", 30, 10);



// console.log(p1.getPrecio());
// var Producto = {
//     // atributos
//     nombre: " " , precio: 0, porcion: 0,
//     // Metodos
//     getNombre: function(){return nombre;},
//     getPrecio: function(){return precio;},
//     getPorcion: function(){return porcion;},
//     setNombre(nombre){this.nombre = nombre;},
//     setPrecio(precio){this.precio = precio;},
//     setPorcion(porcion){this.porcion = porcion;},
    
// }


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
// const catalogo = Object.create(Catalogo);

// catalogo.agregarProducto(p1);
// catalogo.agregarProducto(p2);
// catalogo.agregarProducto(p3);
// catalogo.agregarProducto(p4);

// console.log(catalogo.obtenerPrecioTotal());

// for (let i = 0; i < catalogo.length; i++) {
//     console.log(catalogo[i]);
// }


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