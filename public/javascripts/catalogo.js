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
    constructor(nombre, precio, cantidad, imagen){
        this.nombreProducto = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.imagen = imagen;
    }
    mostrarProducto(){
        console.log("Nombre Producto: " + this.nombreProducto + "Precio: " + this.precio + "Cantidad: " + this.cantidad);
    }
    isProducto(){
        var val = false;
        if(this.nombreProducto != null && this.cantidad != null && this.precio != null && this.imagen != null) {
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
    getImagen(){
        return this.imagen;
    }
    setNombre(nombre){
        this.nombreProducto = nombre;
    }
    setImagen(imagen){
        this.imagen = imagen;
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


function listarProductos(){
    const producto1 = new Producto("Wings Yellow-Stone", 120, 50, '/images/wings.png');
    const producto2 = new Producto("GoldChip", 50,200, '/images/papas.png');
    const producto3 = new Producto("Frapp'e", 45,100, '/images/frappe.png');
    const producto4 = new Producto("Sandwitch Club ", 35,300, '/images/clubSandwich.png');
    const producto5 = new Producto("Boneless Paradise", 89.90,200, '/images/bounless.png');
    const producto6 = new Producto("Gian't Burrito", 75,150, '/images/burrito.png');
    
    catalogo.agregarProducto(producto1); catalogo.agregarProducto(producto2);
    catalogo.agregarProducto(producto3); catalogo.agregarProducto(producto4);
    catalogo.agregarProducto(producto5); catalogo.agregarProducto(producto6);


}

function main() {

}
// main();
module.exports.listarProductos = listarProductos();
module.exports.Catalogo = Catalogo;
module.exports.Producto = Producto;