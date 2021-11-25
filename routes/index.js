var express = require('express');
var router = express.Router();

const Catalogo = require('../public/javascripts/catalogo.js');
const listaProductos = Catalogo.Catalogo.getProductos();

/* GET home page. */
router.get('/',(req,res) =>{
    res.render('index');
});

router.get('/pedido', function(req, res) {
  res.render('pedido', { titulo: 'Lista Productos' });
});

router.get('/producto', function(req, res) {  
  res.render('producto',{
    listaProductos
  });
});




module.exports = router; 