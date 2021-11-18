var express = require('express');
var router = express.Router();

const Catalogo = require('../public/javascripts/catalogo.js');

/* GET home page. */
router.get('/',(req,res) =>{
    // vistaProducto.display();
    res.render('index.html');
});

router.get('/pedido', function(req, res) {
  res.render('pedido.html', { titulo: 'Lista Productos' });
});

router.get('producto', function(req, res) {
  res.render('producto.html', {titulo: 'safsa'});
})

module.exports = router;