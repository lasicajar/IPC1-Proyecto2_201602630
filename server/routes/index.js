const pokemonsRouter = require('./pokemons.router');
const usersRouter = require('./users.router');

function routerApi(app) {
    app.use('/pokemons', pokemonsRouter);
    app.use('/users', usersRouter);


}

module.exports = routerApi;