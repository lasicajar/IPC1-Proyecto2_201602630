const express = require('express');

const routerU = express.Router();

routerU.get('/', (req, res) => {
    res.send('Aqui estarán todos los usuarios...')
});

module.exports = routerU;