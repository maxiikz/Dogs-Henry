const { Router } = require('express');
const express = require('express');
const dogRoute= require('/dog');
const temperamentRoute= require('/temperament');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = express.Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/dog', dogRoute);
router.use('/temperament', temperamentRoute);



module.exports = router;
