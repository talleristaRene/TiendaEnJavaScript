const { Router } = require('express');
const router = Router();
const productos = require('../sample.json');

console.log(productos);

router.get('/', (req, res) =>{
    res.json(productos);
});



module.exports = router;