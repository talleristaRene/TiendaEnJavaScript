// ESCUELA DE CÓDIGO
// Se tiene que especificar que es lo que se guardará de la lista de productos
// Ya que cada producto contiene 2 valores, por lo que guardar esos valores en un arreglo
// y aplicar cambios(agregar, eliminar, ordenar) sobre ellos,  los valores se modifican y su recuperacion seria muy complicado
// Ademas si se pretendía utlizar una "matriz" u otra estructura para guardar el valor y el precio
// Se tiene que especificar, pues hay vacios en esa explicación.
function  funcionPrincipal(){
    // let map = new Map();    
    // nombreProducto1 = prompt("Ingresa el nombre del producto1: ");
    // precioProducto1 = prompt("Ingresa el precio del producto 1: ");
    // map.set(nombreProducto1, precioProducto1);
    // nombreProducto2 = prompt("Ingresa el nombre del producto2: ");
    // precioProducto2 = prompt("Ingresa el precio del producto 2: ");
    // map.set(nombreProducto2,precioProducto2);
    // nombreProducto3 = prompt("Ingresa el nombre del producto3: ");
    // precioProducto3 = prompt("Ingresa el precio del producto 3: ");
    // map.set(nombreProducto3,precioProducto3);

    // Inicializacion de Array
    // let arregloProductos = [
    //     {nombre: nombreProducto1, precio: precioProducto1},
    //     {nombre: nombreProducto2, precio: precioProducto2},
    //     {nombre: nombreProducto3, precio: precioProducto3}
    // ];

    console.log("Arreglo antes de las modificaciones\n");
    console.log(arregloProductos);
    
    // Obtenemos tamanio
    tamArreglo  = arregloProductos.length;
    console.log("Tamaño del Array: " + tamArreglo);
    // Agregamos elemento al final
    nombreProductoNuevo = prompt("Ingresa el nombre del Nuevo: ");
    precioProductoNuevo = prompt("Ingresa el precio del Nuevo: ");
    arregloProductos.push({
        nombre: nombreProductoNuevo, precio: precioProductoNuevo
    });
    console.log("Se agreggo otro elemento al final\n");
    console.log(arregloProductos);
    
    // Agregamos elemento al inicio
    nombreProductoNuevo = prompt("Ingresa el nombre del Nuevo: ");
    precioProductoNuevo = prompt("Ingresa el precio del Nuevo: ");
    arregloProductos.unshift({
        nombre:nombreProductoNuevo, precio: precioProductoNuevo
    });
    console.log("Se agrego otro elemento al inicio\n" );
    console.log(arregloProductos);
    
    // Sacamos elemento al final
    console.log("Arreglo antes de sacar elemento del final\n");
    console.log(arregloProductos);
    arregloProductos.pop();
    console.log("Se saco elemento del final\n" );
    console.log(arregloProductos);
    // Sacamos elemento al inicio
    console.log("Arreglo antes de sacar elemento del inicio\n" );
    console.log(arregloProductos);
    arregloProductos.shift();
    console.log("Se saco elemento del incio\n" );
    console.log(arregloProductos);
    // ponemos arreglo en reversa
    console.log("Arreglo antes de volvtearlo \n" );
    console.log(arregloProductos);
    arregloProductos.reverse();
    console.log("Arreglo ya volteado\n" );
    console.log(arregloProductos);
    // copiar porcion del arreglo -> en este caso los elementos en posicion 1,2.
    porcionArreglo = arregloProductos.slice(1,3);
    console.log("Arreglo " );                       console.log(arregloProductos);
    console.log("porcion del arreglo copiado\n");   console.log(porcionArreglo);

    // copiar porcion del arreglo -> en este caso los elementos en posicion (0,0).
    porcionArreglo = arregloProductos.splice(0,0);
    console.log("Arreglo ");                        console.log(arregloProductos );
    console.log("porcion del arreglo copiado\n");   console.log(porcionArreglo);
}


funcionPrincipal();