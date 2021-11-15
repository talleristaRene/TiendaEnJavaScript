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
    obtenerPrecioTotal: function(){
    return this.productos.reduce((total, p) => total + p.precio, 0);
    },
    getLengthProductos: function(){ return this.productos.length;},
    getProductos: function(){
        let prod = this.productos;
        return prod;
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

function escribe() {
    var producto; 
    var catalogo    =  Object.create(Catalogo);
    var nombreP     =  document.getElementById("nombre").value;   
    var existenciaP = document.getElementById("existencia").value;
    var precioP     = document.getElementById("precio").value;
    producto        = new Producto(nombreP, existenciaP, precioP);
    catalogo.agregarProducto(producto);

    var contenedor = document.getElementById("contenedor__tabla");
    var tabla = '<table class="cabeza-tabla">';
    
    tabla += '<thead>'+
                '<tr>  '+
                    '<th scope="col" >'+"<p>"+"Nombre"+"</p>"+'</th>'+
                    '<th scope="col" >'+"<p>"+"Existencia"+"</p>"+'</th>'+
                    '<th scope="col" >'+"<p>"+"Precio"+"</p>"+'</th>'+
                '</tr>'+
            '</thead>';
    
    for (let i = 0; i < catalogo.getLengthProductos(); i++) {
        var listaProductos = catalogo.getProductos();
        tabla +=    "<tbody>"+
                        "<tr>"+
                            '<th scope="col">'+"<p>"+listaProductos[i].getNombre()+"</p>"+'</th>'+
                            '<th scope="col">'+"<p>"+listaProductos[i].getExistencia()+"</p>"+'</th>'+
                            '<th scope="col">'+"<p>"+listaProductos[i].getPrecio()+"</p>"+'</th>'+
                        "</tr>"+
                    "</tbody>";
        tabla += "</head>"
    }
    tabla += '</table>';

    var cont = '<div class="contenedor__formulario">' + tabla +"</div>";
    contenedor.innerHTML = cont;
}

window.onload = function() {
document.rellenar.ver.onclick = escribe
}   
// main();