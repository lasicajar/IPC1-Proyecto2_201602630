class PokemonsService {

   

    constructor() {
        this.dato = 100;
        //this.pokemons = [{id: '100', name: 'lusvin'}];
        //this.cargar();

    }

    cargar() {
        this.pokemons.push(
            {
                id: '1',
                nombre: 'bulbasaur',
                tipo: 'hierba',
                imagen: 'https://projectpokemon.org/images/normal-sprite/bulbasaur.gif',
                ataque: 'Latigazo'
            },
            {
                id: '2',
                nombre: 'charizard',
                tipo: 'fuego',
                imagen: 'https://projectpokemon.org/images/normal-sprite/charizard.gif',
                ataque: 'Lanzallamas'
            });


    }

    buscarId(id) {
        return this.pokemons.find(item => item.id === id);


    }

    buscarTipo() {

    }

    mostrar() {
        
        return this.dato;
    }


}

module.exports = PokemonsService;