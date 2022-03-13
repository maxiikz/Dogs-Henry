
const express = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = express.Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/', (req,res)=>{
    res.send('hola')
})
router.post('/',(req,res)=>{
    res.send('soy el post dog')
})



module.exports = dogis;