//Declaracion de librería express y app
const express = require('express');
const routerApi = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());

//Configuración de puerto
const port = 3000;

routerApi(app);


app.get('/', (req, res) => {
    res.send('Hola mi server en express');
});


app.listen(port, () => {
    console.log('Mi puerto es: ' + port);
});

