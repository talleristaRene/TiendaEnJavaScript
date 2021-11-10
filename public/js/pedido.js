function escribe() {
    escribir = document.getElementById("caja")
    miTitulo = "<h1>" + document.rellenar.titulo.value + "</h1>"
    miClave = "<h3>" + document.rellenar.clave.value + "</h3>"
    escribir.innerHTML = miTitulo + miClave
    console.log(miTitulo + miClave );
    }
    window.onload = function() {
    document.rellenar.ver.onclick = escribe
} 