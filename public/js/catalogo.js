'use strict';
import {Producto} from './producto.js';


export class Catalogo{
    constructor(){
        this.listaProductos = [];
    }
    getListaProductos(){
        let listaP = this.listaProductos.slice();
        return listaP;
    }
    agregarProducto(producto){
        this.listaProductos.push(producto);
    }
    mostrarListaProductos(){
        this.listaProductos.forEach(element => {
            console.log(element.getNombre()+ "->"+element.getPrecio() );
        });
    }
}


let producto1 = new Producto("Papas", 24.3);
let producto2 = new Producto("Aros de Cebolla", 24.3);
let producto3 = new Producto("Crepas", 24.3);
let catalogo = new Catalogo();
catalogo.agregarProducto(producto1);
catalogo.agregarProducto(producto2);
catalogo.agregarProducto(producto3);
catalogo.mostrarListaProductos();
