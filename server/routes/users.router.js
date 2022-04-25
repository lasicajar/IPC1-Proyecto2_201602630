const express = require('express');
const router = require('./pokemons.router');

const routerU = express.Router();

const usersGroup = [
{
    user: 'admin',
    pass: '12345'
},
{
    user: 'lsicaja',
    pass: 'armind'
}

];



routerU.get('/u', (req, res) => {
    res.json(usersGroup)
});

routerU.get('/u/:usuario/p/:password',  (req, res)=>{
        const {usuario} = req.params;
        const {password} = req.params;

        const userlog = usersGroup.filter(item => item.user===usuario, item => item.pass===password);

    res.json(userlog);
});

module.exports = routerU;