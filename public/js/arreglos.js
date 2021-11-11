function  funcionPrincipal(){
    // Inicializacion de Array
    let arregloProductos = [
        {nombre: "Alitas", precio: 80},
        {nombre: "papas fritas", precio: 50},
        {nombre: "Boneless", precio: 69.8},
        {nombre: "Brocheta", precio: 81.7},
        {nombre: "Aros de Cebolla", precio: 30}
    ];
    // Obtenemos tamanio
    tamArreglo  = arregloProductos.length;
    console.log("Tamaño del Array: " ); console.log(tamArreglo);
    // Agregamos elemento al final
    arregloProductos.push({
        nombre: "Melon", precio: 10
    });
    console.log(arregloProductos);
    // Agregamos elemento al inicio
    arregloProductos.unshift({
        nombre:"Sandia", precio: 30
    });
    console.log(arregloProductos);
    // Sacamos elemento al final
    arregloProductos.pop();
    console.log(arregloProductos);
    // Sacamos elemento al inicio
    arregloProductos.shift();
    console.log(arregloProductos);
    // ponemos arreglo en reversa
    arregloProductos.reverse();
    console.log(arregloProductos);
    // copiar porcion del arreglo -> en este caso los elementos en posicion 1,2.
    porcionArreglo = arregloProductos.slice(1,3);
    console.log(arregloProductos);
    console.log(porcionArreglo);
    // Remplazar
    arregloProductos.splice(1, 2, {
        nombre: "Waffles", precio: 49.9
    });
    // Eliminar  elementos del Arreglo
    arregloProductos.splice(0, 1);
    console.log(arregloProductos);

    let productos = [
        {nombre: "Papas Francesas", precio: 24.5}
    ];
    productos =  productos.concat(arregloProductos);
    console.log(productos);
}

funcionPrincipal();
