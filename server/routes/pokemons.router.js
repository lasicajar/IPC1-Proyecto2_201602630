const express = require('express');
const PokemonsService = require('./../services/pokemons.service');

const router = express.Router();
const servicepoke = new PokemonsService();

const pokemonsGroup = [
    {
        id: '1',
        nombre: 'blastoise',
        tipo: 'agua',
        imagen: 'https://www.pkparaiso.com/imagenes/espada_escudo/sprites/animados-gigante/blastoise.gif',
        ataque: 'Chorro de Agua'
    },
    {
        id: '2',
        nombre: 'squirtle',
        tipo: 'agua',
        imagen: 'https://www.pkparaiso.com/imagenes/espada_escudo/sprites/animados-gigante/squirtle.gif',
        ataque: 'Torrente'
    },
    {
        id: '3',
        nombre: 'lapras',
        tipo: 'agua',
        imagen: 'https://www.pkparaiso.com/imagenes/espada_escudo/sprites/animados-gigante/lapras.gif',
        ataque: 'Pistola de Agua'
    },
    {
        id: '4',
        nombre: 'golduck',
        tipo: 'agua',
        imagen: 'https://videos.cults3d.com/ZfN-j2Qoy3L786kVYs3PBY5u6as=/516x516/filters:format(webp)/https://files.cults3d.com/uploaders/19525216/illustration-file/a2a9767a-473b-4c71-9258-c9e24d3fab19/55.gif',
        ataque: 'Hidro Bomba'
    },
    {
        id: '5',
        nombre: 'vaporeon',
        tipo: 'agua',
        imagen: 'https://www.pkparaiso.com/imagenes/espada_escudo/sprites/animados-gigante/vaporeon.gif',
        ataque: 'Agua Cola'
    },
    {
        id: '6',
        nombre: 'magmar',
        tipo: 'fuego',
        imagen: 'https://img.wattpad.com/be7688b26aebd9ffe0648f197a106aa367c3016e/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f2d557339636f55644e58676832413d3d2d3934393330343637342e313633333037626661623639323839383133333030343735393338332e676966',
        ataque: 'Puño de Fuego'
    },
    {
        id: '7',
        nombre: 'moltres',
        tipo: 'fuego',
        imagen: 'https://images.wikidexcdn.net/mwuploads/wikidex/thumb/d/d7/latest/20201029200614/Moltres_de_Galar_EpEc_variocolor.gif/180px-Moltres_de_Galar_EpEc_variocolor.gif',
        ataque: 'Onda ignea'
    },
    {
        id: '8',
        nombre: 'entei',
        tipo: 'fuego',
        imagen: 'http://pa1.narvii.com/7255/9552a69f9a0b21e1649255012b5da6c787ec7539r1-338-338_00.gif',
        ataque: 'Cabeza de Hierro'
    },
    {
        id: '9',
        nombre: 'ponyta',
        tipo: 'fuego',
        imagen: 'https://projectpokemon.org/images/normal-sprite/ponyta.gif',
        ataque: 'Nitro Carga'
    },
    {
        id: '10',
        nombre: 'charizard',
        tipo: 'fuego',
        imagen: 'https://projectpokemon.org/images/normal-sprite/charizard.gif',
        ataque: 'Garra Dragon'
    },
    {
        id: '11',
        nombre: 'chikorita',
        tipo: 'hierba',
        imagen: 'https://c.tenor.com/l1Lg0EIjZdsAAAAi/chikorita-pokemon.gif',
        ataque: 'Latigo Cepa'
    },
    {
        id: '12',
        nombre: 'venusaur',
        tipo: 'hierba',
        imagen: 'https://projectpokemon.org/images/normal-sprite/venusaur-f.gif',
        ataque: 'Rayo Solar'
    },
    {
        id: '13',
        nombre: 'oddish',
        tipo: 'hierba',
        imagen: 'https://professorlotus.com/Sprites/Oddish.gif',
        ataque: 'Fuerza lunar'
    },
    {
        id: '14',
        nombre: 'sunflora',
        tipo: 'hierba',
        imagen: 'https://files.cults3d.com/uploaders/19525216/illustration-file/8b206d6b-b0a9-4546-8765-b9e0bd79f1be/192.gif',
        ataque: 'Tormenta floral'
    },
    {
        id: '15',
        nombre: 'exeggutor',
        tipo: 'hierba',
        imagen: 'https://c.tenor.com/3O3MyJ72tokAAAAi/exeggutor-dance.gif',
        ataque: 'Cabezazo Zen'
    }

];


router.get('/todos', (req, res) => {
    //const pokemones = servicepoke.mostrar;
    res.json(pokemonsGroup);
});

//metodo get que devuelve un pokemon por id
router.get('/id/:id', (req, res) => {
    const { id } = req.params;
    const pokemon = pokemonsGroup.filter(item => item.id === id);
    res.json(pokemon);
});

//metodo get que devuelve pokemones por tipo
router.get('/tipo/:type', (req, res)=> {
    const {type} = req.params;
    const pokemonesType = pokemonsGroup.filter(item => item.tipo === type);
    res.json(pokemonesType);
})

//metodo get que devuelve un pokemon por nombre
router.get('/nombre/:name', (req, res) => {
    const {name} = req.params;
    const pokemon = pokemonsGroup.filter(item => item.nombre === name);
    res.json(pokemon);
});

module.exports = router;