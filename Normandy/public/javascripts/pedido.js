'use strict';
var Catalogo = {
    productos:[],
    agregarProducto: function(producto){
        if(!this.productos){
         this.productos = [producto]
        } else {
         this.productos.push(producto);
        }
      },
    setProductos:function(listaProductos){
        this.productos = listaProductos;
    },
    getLengthProductos: function(){ return this.productos.length;},
    getProductos: function(){
        let prod = this.productos;
        return prod;
    }, 
    mostrarProductos: function(){
        for (let index = 0; index < this.productos.length; index++) {
            console.log(this.productos[index]);
        }
    },
    obtenerPrecioTotal: function(){
        return this.productos.reduce((total, p) => total + p.precio, 0);
    }
};

class Producto{
    constructor(nombre, precio, cantidad){
        this.nombreProducto = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
    mostrarProducto(){
        console.log("Nombre Producto: " + this.nombreProducto + "Precio: " + this.precio + "Cantidad: " + this.cantidad);
    }
    isProducto(){
        var val = false;
        if(this.nombreProducto != null && this.cantidad != null && this.precio != null){
            val = true;
        }
        return val;
    }
    getNombre(){
        return this.nombreProducto;
    }
    getCantidad(){
        return this.cantidad;
    }
    getPrecio(){
        return this.precio;
    }
    setNombre(nombre){
        this.nombreProducto = nombre;
    }
}

let productos   = [];
let total       = 0;
var producto; 
var catalogo    =  Object.create(Catalogo);
const datos     = {
    nombre: '', 
    precio: '', 
    cantidad: '',
};

const formulario    =  document.querySelector('.formulario');
const nombre        = document.querySelector('#nombre');
const precio        = document.querySelector('#precio');
const cantidad      = document.querySelector('#cantidad');


nombre.addEventListener('input', leerInformacion);
precio.addEventListener('input', leerInformacion);
cantidad.addEventListener('input', leerInformacion);



function leerInformacion(evento){
    datos[evento.target.id ] = evento.target.value;
}

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
function escribe(listaProductos) {

    // Se Escribe la informacion
    const cuerpo = document.querySelector('.tabla__cuerpo');
    const fila = document.createElement('TR');
    cuerpo.appendChild(fila);
    const celdaNombre = document.createElement('TH');
    const celdaPrecio = document.createElement('TH');
    const celdaCantidad = document.createElement('TH');
    
    for (let index = 0; index < listaProductos.length; index++) {
        celdaNombre.textContent    = listaProductos[index].getNombre();
        celdaPrecio.textContent    = listaProductos[index].getPrecio();
        celdaCantidad.textContent  = listaProductos[index].getCantidad();
    }
    fila.appendChild(celdaNombre);
    fila.appendChild(celdaPrecio);
    fila.appendChild(celdaCantidad);
}

function main() {
    formulario.addEventListener('submit', function(evento){
        evento.preventDefault();
        const {nombre, precio, cantidad} = datos;
        producto = new Producto(nombre, precio, cantidad);
        catalogo.agregarProducto(producto);
        escribe(catalogo.getProductos());
    });
}


main();