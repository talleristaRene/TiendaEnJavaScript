const express = require('express');
const app = express();
const path = require('path');//Para evitar errores con las direcciones en cada sistema operativo, referente al tipo de diagonal '/' '\'

app.use(express.static('public'));   

// app.get('/', (req,res) => {
// 	res.sendFile(path.join(__dirname, 'public/html/catalogo.html'));
// })

app.get('/', (req,res) =>{
	res.sendFile(path.join(__dirname, 'public/html/pedido.html'));
})





app.listen(3000, () => {
	console.log('Open localhost on port 3000!');
});