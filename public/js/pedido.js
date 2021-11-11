const arreglo={
    nombre: '', precio: null
}

function productos(){
    var valorProductos = document.formulario.nombre.value;
    arreglo.push(valorProductos);
    console.log(arreglo);
}
// const formulario = document.querySelector('.formulario');
// const nombre = document.querySelector('#nombre');
// const precio = document.querySelector('#precio');

// nombre.addEventListener('input', leerTexto);
// precio.addEventListener('input', leerTexto);

// function leerTexto(evento) {
//     arreglo[evento.target.id] = evento.target.value;
//     console.log(arreglo);
// }

// formulario.addEventListener('click', function(evento){
//     evento.preventDefault();
//     nombre.addEventListener('input', leerTexto);
//     precio.addEventListener('input', leerTexto);
// });

// var i = 0
// formulario.addEventListener('click', function(evento){
//         evento.preventDefault();
//         // condicion solo 10 productos
//         if( i < 10 ){
//             arreglo[evento.target.id] = evento.target.value;
//             console.log(arreglo);
//         }        
//     i++;
// });    

    





// formulario.addEventListener('submit', function(evento){
//     evento.preventDefault();
//     // arreglo.push({
//     //     nombre: document.getElementById("nombre").value, precio: document.getElementById("precio").value
//     // })
//     // Validaciones
//     console.log('Enviando Formulario');
// })


/**
 * Funcion que permite escribir los valores que se ingresan al formulario mediante API Web
 */
// function escribe() {

//     var idNombre;
//     var idNombre;
//     var i = 0;
//     // Forma A
//     arreglo.push({
//         nombre: document.getElementById("nombre").value, precio: document.getElementById("precio").value
//     })
//     // Forma B
//     // for(i=0;i<5;i++){
//     //     idNombre = "nombre" + (i +1);
//     //     idPrecio = "precio" + (i +1);
//     //     arreglo.push({
//     //         nombre: document.getElementById(idNombre).value, precio: document.getElementById(idPrecio).value
//     //     })
//     // }
//     console.log(arreglo);
    
//     escribir = document.getElementById("caja");
//     miTitulo = "<h1>" + "Caja" +"</h1>";
//     totalProductos = "<h3>" + "Total de Productos: " + "<p>"+ i + "</p>"  + "</h3>";
//     costoTotal = "<h3>" + "Costo Total : " + "<p>"+ i + "</p>"  + "</h3>";
    
//     contenedor = '<div class="contenedor__formulario">' + miTitulo + nombre + precio  + "</div>";
//     escribir.innerHTML = contenedor;
// }
// window.onload = function() {
// document.rellenar.ver.onclick = escribe
// }   