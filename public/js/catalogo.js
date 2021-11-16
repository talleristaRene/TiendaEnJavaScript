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
    obtenerPrecioTotal: function(){
    return this.productos.reduce((total, p) => total + p.precio, 0);
    },
    getLengthProductos: function(){ return this.productos.length;},
    getProductos: function(){
        let prod = this.productos;
        return prod;
    }, 
    mostrarProductos: function(){
        for (let index = 0; index < this.productos.length; index++) {
            // const element = array[index];
            console.log(this.productos[index]);
        }
    }
};

class Producto{
    constructor(nombre, existencia, precio){
        this.nombreProducto = nombre;
        this.existencia = existencia;
        this.precio = precio;
    }
    mostrarProducto(){
        console.log("Nombre Producto: " + this.nombreProducto + "   Existencia: " + this.existencia + "   Precio: " + this.precio);
    }
    isProducto(){
        var val = false;
        if(this.nombreProducto != null && this.existencia != null && this.existencia != null){
            val = true;
        }
        return val;
    }
    getNombre(){
        return this.nombreProducto;
    }
    getExistencia(){
        return this.existencia;
    }
    getPrecio(){
        return this.precio;
    }
    setNombre(nombre){
        this.nombreProducto = nombre;
    }
}

function main() {
    let arrProductos    = [];
    var catalogo        =  Object.create(Catalogo);
    var producto1 = new Producto("Papas", 100,23);
    var producto2 = new Producto("Alitas", 50,64);
    var producto3 = new Producto("Boneles", 70,34);
    var producto4 = new Producto("Aros de Cebolla", 100,20);
    arrProductos.push(producto1);
    arrProductos.push(producto3);
    arrProductos.push(producto2);
    arrProductos.push(producto4);
    
    catalogo.setProductos(arrProductos);
    var listaOrdenada = catalogo.getProductos().sort(ordenarAlfabeticamente);
 
    var suma = sumarPrecioProductos(catalogo.productos);
    console.log(suma);
}

/**
 * Funcion que escribe los productos del catalogo en una tabla
 */
function escribe() {

    var producto; 
    var catalogo    =  Object.create(Catalogo);
    var nombreP     =  document.getElementById("nombre").value;   
    var existenciaP =  document.getElementById("existencia").value;
    var precioP     =  document.getElementById("precio").value;
     

    if( esNumero(precioP) ){
        producto        = new Producto(nombreP, existenciaP, precioP);
    }
    catalogo.agregarProducto(producto);
    
    var contenedor = document.getElementById("contenedor__tabla");
    var tabla = '<table class="tabla">';
    
    tabla += '<thead class="tabla__cabecera">'+
                '<tr>  '+
                    '<th scope="col" id="cabecera__nombre">'+"<p>"+"Nombre"+"</p>"+'</th>'+
                    '<th scope="col" id="cabecera__existencia">'+"<p>"+"Existencia"+"</p>"+'</th>'+
                    '<th scope="col" id="cabecera__precio">'+"<p>"+"Precio"+"</p>"+'</th>'+
                '</tr>'+
            '</thead>';

    var exp = eval(catalogo);
    console.log(  eval(catalogo).getProductos() );
    
    var exp = "";
    var listaProductos = catalogo.getProductos();
    for (let i = 0; i < catalogo.getLengthProductos(); i++) {
        exp += eval(catalogo).getProductos()[i].getNombre();
        console.log("Nombre como una sola cadena: " + exp);
        
        tabla +=    '<tbody class="tabla__cuerpo"'+
                        "<tr>"+
                            '<th scope="col">'+"<p>"+listaProductos[i].getNombre()   +"</p>"+'</th>'+
                            '<th scope="col">'+"<p>"+listaProductos[i].getExistencia()+ "</p>"+'</th>'+
                            '<th scope="col">'+"<p>"+listaProductos[i].getPrecio()+ "</p>"+'</th>'+
                        "</tr>"+
                    "</tbody>";
        tabla += "</head>";
    }
    tabla += '</table>';

    var cont =  '<div class="contenedor__formulario">'+
                    tabla+
                '</div>';

    contenedor.innerHTML = cont;
}


function esNumero(valor){
    var valido = false;
    if( !isNaN(valor) ){
        valido = true;
    }else{
        alert("Debes de ingresar un valor numerico");
    }
    return valido;
}

function ordenarAlfabeticamente(productoA,productoB){
    if (productoA.nombreProducto < productoB.nombreProducto) {return -1;}
    if (productoA.nombreProducto > productoB.nombreProducto) {return 1;}
    return 0;
}
function sumarPrecioProductos(listaP){
    if(listaP.length == 1){
        var elemento = listaP[0];
        return elemento.getPrecio();
    }else{
        return listaP.pop().getPrecio() + sumarPrecioProductos(listaP);
    }
}
window.onload = function() {
document.rellenar.ver.onclick = escribe
}   
// main();