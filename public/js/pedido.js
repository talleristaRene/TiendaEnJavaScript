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
formulario.addEventListener('submit', function(evento){
    evento.preventDefault();
    const {nombre, precio, cantidad} = datos;
    producto = new Producto(nombre, precio, cantidad);
    catalogo.agregarProducto(producto);



    
});


function leerInformacion(evento){
    datos[evento.target.id ] = evento.target.value;
}



function main() {
    // let arrProductos = [];
    // var producto1 = new Producto("Papas", 100);
    // var producto2 = new Producto("Alitas", 50);
    // var producto3 = new Producto("Boneles", 70);
    // var producto4 = new Producto("Aros de Cebolla", 100);
    // arrProductos.push(producto1);
    // arrProductos.push(producto2);
    // arrProductos.push(producto3);
    // arrProductos.push(producto4);

    

    // validacion

    // Envio

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

var nombreP = document.querySelector('#nombre').value;
var cantidadP = parseInt( document.querySelector('#cantidad').value );
var precioP = parseInt( document.querySelector('#precio').value ) ;
/**
 * Funcion que permite escribir los valores que se ingresan al formulario mediante API Web
 */
function escribe() {
    var producto; 
    var catalogo    =  Object.create(Catalogo);
    
    
    producto = new Producto(nombreP, precioP, cantidadP);
    catalogo.agregarProducto(producto);

    // generarTotal();
    // Se Escribe la informacion
    const contenedor = document.querySelector('#contenedor__tabla');
    contenedor.innerHTML
    const tabla = document.createElement('TABLE');
    contenedor.appendChild(tabla);
    tabla.classList.add('tabla');
    
    const cabecera = document.createElement('THEAD');
    cabecera.classList.add('tabla__cabecera');
    tabla.appendChild(cabecera);

    const columna = document.createElement('TR');
    cabecera.appendChild(columna);

    const valCeldas = ['Nombre', 'Precio', 'Cantidad'];
    
    for (let index = 0; index < 3; index++) {
        const celda = document.createElement('TH');
        celda.textContent = valCeldas[index];
        columna.appendChild(celda);
    }
    
    var listaProductos = catalogo.getProductos();
    const cuerpo = document.createElement('TBODY');
    cuerpo.classList = 'tabla__cuerpo';
    tabla.appendChild(cuerpo);
    // const valFilas = ['Nombre', 'Precio', 'Cantidad'];
    const fila = document.createElement('TR');
    cuerpo.appendChild(fila);
    
    const celdaNombre = document.createElement('TH');
    const celdaPrecio = document.createElement('TH');
    const celdaCantidad = document.createElement('TH');
    for (let i = 0; i < listaProductos.length; i++) {
        console.log(listaProductos[i].getNombre());
            celdaNombre.textContent   = listaProductos[i].getNombre();
            celdaPrecio.textContent   = listaProductos[i].getPrecio();
            celdaCantidad.textContent = listaProductos[i].getCantidad();        
    }
    fila.appendChild(celdaNombre);
    fila.appendChild(celdaPrecio);
    fila.appendChild(celdaCantidad);
    
    
    // contenedor.innerHTML = contenedor;


}



window.onload = function() {
    document.rellenar.ver.onclick = escribe
}   