'use strict';
export class Producto{

    constructor(nombre, precio, imagen){
        this.setNombre(nombre);
        this.setPrecio(precio);
    }

    setNombre(nombre){
        if(this.validarNombre(nombre)){
            this.nombre = nombre;
        }
    }
    setPrecio(precio){
        if(this.validarPrecio(precio)){
            this.precio = precio;
        }
    }
    getNombre(){
        var nombre = this.nombre;
        return nombre;
    }
    getPrecio(){
        var precio = this.precio;
        return precio;
    }
    validarPrecio(precio){
        var valido = false;
        try {
            if(precio > 10){
                valido = true;
            }
        } catch (error) {
            console.log(error);
        }
        return valido;
    }
    validarNombre(nombre){
        var expRechazada = /^[0-9]+$/;
        var valido = false;
        try {
            if(!nombre.match(expRechazada)){
                valido = true;
            }
        } catch (error) {
            console.log(error);
        }
        return valido;
    }
  
}