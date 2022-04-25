
## _Proyecto 2 de IPC 1 - F, PokeApi_

## Datos Generales

|  |  |
| -------------- | --------------------- |
| Nombre      |Lusvin Alexander Sicajá Ramírez |
| Carnet      | 201602630 |
| Auxiliar    | Javier Oswaldo Mirón Cifuentes |
| Sección   | F |



## FrontEnd

Tecnologias Utilizadas:
- [AngularJS] - Framework opensource desarrollado por Google para facilitar la creación y programación de aplicaciones web de una sola página.
- [Visual-Studio-Code] - editor de código fuente desarrollado por Microsoft para Windows.
- [markdown-it] - Markdown parser done right. Fast and easy to extend.
- [Bootstrap] - Biblioteca multiplataforma o conjunto de herramientas de código abierto para diseño de sitios y aplicaciones web.
- [Bootswatch] - Temas para bootstrap.

## Manual de Uso


- Como pantalla principal tenemos la autenticación del usuario, debemos colocar los datos correctos para poder ingresar.
<img src="/img/login.png"/>

![](https://raw.githubusercontent.com/lasicajar/IPC1-Proyecto2_201602630/main/img/login.png?token=GHSAT0AAAAAABT33ENJAVNVAYFDFGJFWKWMYTGCI7A) 

- La siguiente pantalla es la ventana de Inicio o Home, en esta se muestra los componentes para el funcionamiento de la API.
<img src="/img/home.png"/>

![](https://raw.githubusercontent.com/lasicajar/IPC1-Proyecto2_201602630/main/img/home.png?token=GHSAT0AAAAAABT33ENJONX6IZOQIPHGUSBYYTGCKZA)
- El componente que utilizaremos es el de Filtrar Pokemon, aquí podremos enviar ciertos parametros para la busqueda del elemento o elementos que necesitemos.
 <img src="/img/busqueda.png"/>
![](https://raw.githubusercontent.com/lasicajar/IPC1-Proyecto2_201602630/main/img/busqueda.png?token=GHSAT0AAAAAABT33ENIYF7FVQKY5S2GROVYYTGCLQQ)
- Al momento de filtrar podemos hacerlo por el filtro seleccionado todos y el espacio de dato en blanco, esto nos mostrará la lista de todos los pokemons.
<img src="/img/filtroTodos.png"/>
![](https://raw.githubusercontent.com/lasicajar/IPC1-Proyecto2_201602630/main/img/filtroTodos.png?token=GHSAT0AAAAAABT33ENI3Q7523EACB3EF276YTGCL5Q)
- Para filtrar por tipo de pokemons debemos ingresar una de las opciones: Fuego, Agua o Hierba y seleccionar el filtro de Tipo, luego al dar clic en el boton buscar se desplegara los pokemons del tipo especifico, con un componente de acuerdo a su poder.
<img src="/img/filtrotipo1.png"/>
![](https://raw.githubusercontent.com/lasicajar/IPC1-Proyecto2_201602630/main/img/filtrotipo1.png?token=GHSAT0AAAAAABT33ENIXSIPOWH7NTBZYM3UYTGCMEA)
-  Filtro de tipo Agua
<img src="/img/filtrotipo2.png"/>
![](https://raw.githubusercontent.com/lasicajar/IPC1-Proyecto2_201602630/main/img/filtrotipo2.png?token=GHSAT0AAAAAABT33ENIJM2ZDLTXERUFBZ7MYTGCMGQ)
- Filtro de tipo Hierba
 <img src="/img/filtrotipo3.png"/>
![](https://raw.githubusercontent.com/lasicajar/IPC1-Proyecto2_201602630/main/img/filtrotipo3.png?token=GHSAT0AAAAAABT33ENII7W2LCDJRCEOYZZQYTGCMJA)
- Para buscar por nombre, se debe de colocar el filtro por nombre e ingresar el nombre del pokemon en el campo de busqueda.
 <img src="/img/filtroNombre.png"/>
![](https://raw.githubusercontent.com/lasicajar/IPC1-Proyecto2_201602630/main/img/filtroNombre.png?token=GHSAT0AAAAAABT33ENJLDUZHG2455ZPO7PEYTGCLZA)
- Para buscar por ID, se debe colocar el ID en el campo de busqueda y seleccionar el filtro de como id.
<img src="/img/filtroId.png"/>
![](https://raw.githubusercontent.com/lasicajar/IPC1-Proyecto2_201602630/main/img/filtroId.png?token=GHSAT0AAAAAABT33ENIU66JYJJVD4OJ6WVOYTGCLUQ)
- Para salir de la app se debe dar clic en el boton Logout, el cual lo redireccionará a la ventana de login.
 <img src="/img/logout.png"/>
![](https://raw.githubusercontent.com/lasicajar/IPC1-Proyecto2_201602630/main/img/logout.png?token=GHSAT0AAAAAABT33ENI4FEYUEKQEK6F7LVKYTGCMNA)


> The overriding design goal for Markdown's
> formatting syntax is to make it as readable


## Backend

Tecnologías utilizadas:

- [node.js] - Node.js es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor basado en el lenguaje de programación JavaScript, asíncrono, con E/S de datos en una arquitectura orientada a eventos y basado en el motor V8 de Google.
- [Express] - Es un marco de aplicación web de back-end para Node.js, lanzado como software gratuito y de código abierto bajo la licencia MIT. Está diseñado para crear aplicaciones web y API. 

Requerimientos del sistema:

> Instalación del NPM
> Instalacion de CORS, para obtener datos desde otro puerto externo.
> Instalación de GIT, para el control de versiones.

Puerto utilizado en el backend:
```sh
127.0.0.1:3000
localhost:3000
```

## Endpoints
- Devuelve un arreglo de objetos en formato JSON, con los datos de todos los pokemons.
```sh
localhost:3000/pokemons/todos
```
- Devuelve un objeto en formato JSON, según el parametro asignado en el campo :id
```sh
localhost:3000/pokemons/id/:id
```
- Devuelve un objeto en formato JSON, según el parametro asignado en el campo :nombre
```sh
localhost:3000/pokemons/nombre/:nombre
```
- Devuelve un arreglo de objetos en formato JSON, con los pokemons de tipo segun el parametro agregado en el campo :tipo.
```sh
localhost:3000/pokemons/tipo/:tipo
```
## License


**Universidad San Carlos de Guatemala, Facultad de Ingenieria, Escuela de Ciencias y Sisteamas**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [node.js]: <http://nodejs.org>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Visual-studio-code]: <https://code.visualstudio.com/>
   [Bootstrap]: <https://getbootstrap.com/>
   [Bootswatch]: <https://bootswatch.com/>
 