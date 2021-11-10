// ESCUELA DE CÓDIGO
// Se tiene que especificar que es lo que se guardará de la lista de productos
// Ya que cada producto contiene 2 valores, por lo que guardar esos valores en un arreglo
// y aplicar cambios(agregar, eliminar, ordenar) sobre ellos,  los valores se modifican y su recuperacion seria muy complicado
// Ademas si se pretendía utlizar una "matriz" u otra estructura para guardar el valor y el precio
// Se tiene que especificar, pues hay vacios en esa explicación.
function  funcionPrincipal(){
    let arregloPreciosProductos = [];    
    precioProducto1 = prompt("Ingresa el precio del producto 1: ");
    arregloPreciosProductos[0] = precioProducto1;
    precioProducto2 = prompt("Ingresa el precio del producto 2: ");
    arregloPreciosProductos[1] = precioProducto2;
    precioProducto3 = prompt("Ingresa el precio del producto 3: ");
    arregloPreciosProductos[2] = precioProducto3;
    alert("Arreglo antes de las modificaciones\n" + arregloPreciosProductos);
    // Obtenemos tamanio
    tamArreglo  = arregloPreciosProductos.length;
    alert("Tamanio del arreglo: " + tamArreglo);
    // Agregamos elemento al final
    precioProductoNuevo = prompt("Ingresa el precio del producto Nuevo: ");
    arregloPreciosProductos.push(precioProductoNuevo);
    alert("Se agreggo otro elemento al final\n" + arregloPreciosProductos);
    // Agregamos elemento al inicio
    precioProductoNuevo2 = prompt("Ingresa el precio del producto Nuevo2: ");
    arregloPreciosProductos.unshift(precioProductoNuevo2);
    alert("Se agrego otro elemento al inicio\n" + arregloPreciosProductos);
    // Sacamos elemento al final
    alert("Arreglo antes de sacar elemento del final\n" + arregloPreciosProductos);
    arregloPreciosProductos.pop();
    alert("Se saco elemento del final\n" + arregloPreciosProductos);
    // Sacamos elemento al inicio
    alert("Arreglo antes de sacar elemento del inicio\n" + arregloPreciosProductos);
    arregloPreciosProductos.shift();
    alert("Se saco elemento del incio\n" + arregloPreciosProductos);
    // ponemos arreglo en reversa
    alert("Arreglo antes de volvtearlo \n" + arregloPreciosProductos);
    arregloPreciosProductos.reverse();
    alert("Arreglo ya volteado\n" + arregloPreciosProductos);
    // copiar porcion del arreglo -> en este caso los elementos en posicion 1,2.
    porcionArreglo = arregloPreciosProductos.slice(1,3);
    alert("Arreglo " + arregloPreciosProductos + "porcion del arreglo copiado\n" + porcionArreglo);
    // copiar porcion del arreglo -> en este caso los elementos en posicion (0,0).
    porcionArreglo = arregloPreciosProductos.splice(0,0);
    alert("Arreglo " + arregloPreciosProductos + "porcion del arreglo copiado\n" + porcionArreglo);
}


funcionPrincipal();
