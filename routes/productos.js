const { Router } = require('express');
const router = Router();
const productos = require('../sample.json');
const _ = require('underscore');

console.log(productos);

// Get
router.get('/', (req, res) =>{
    res.render('almacen', { productos} ); 
    // res.json(productos);
});

// Post
router.post('/', (req, res) =>{
    const {nombre, precio, cantidad} = req.body;
    if(nombre && precio && cantidad) {
        const id = productos.length + 1;
        const nuevoProducto = {...req.body, id};
        productos.push(nuevoProducto);
        res.json(productos);
    }else{
        res.send('Peticion erronea');
    }
    res.send('recibido');
});

// Put
router.put('/:id', (req,res)=>{
    const {id} = req.params;
    const {nombre, precio, cantidad} = req.body;
    if(nombre && precio && cantidad) {
        _.each(productos, (producto, i) => {
            if(producto.id == id){
                producto.nombre = nombre;
                producto.precio = precio;
                producto.cantidad = cantidad;
            }
        });
        res.json(productos);
    }else{
        res.status(500).json({error: 'Todos los campos son requeridos'});
    }

});


// Delete
router.delete('/:id', (req,res)=>{
    const {id} = req.params;
    _.each(productos, (producto,i) => {
        if(producto.id == id){
            productos.splice(i,1);
        }
    });
    res.send(productos);
});


module.exports = router;