'use strict';
import {Producto} from './producto.js';


export class Catalogo{
    constructor(){
        this.listaProductos = [new Producto()];
    }
    getListaProductos(){
        let listaP = this.listaProductos.slice();
        return listaP;
    }
    agregarProducto(producto){
        this.getListaProductos().push(producto);
    }
}


let producto1 = new Producto("Papas", 24.3);
let producto2 = new Producto("Aros de Cebolla", 24.3);
let producto3 = new Producto("Crepas", 24.3);
let catalogo = new Catalogo();
catalogo.agregarProducto(producto1);
catalogo.agregarProducto(producto2);
catalogo.agregarProducto(producto3);

console.log(catalogo);
