// PARA HACER EJERCICIO CRUD

import * as CRUD from './js/crud-provider';

CRUD.getUsuario(1).then(console.log);



// PARA HACER LLAMADA EJERCICIO de usuarios-page

// import { init } from "./js/usuarios.page";

// init()

// PARA HACER LLAMADA EJERCICIO obtener usuarios

// import { obtenerUsuarios } from "./js/http-provider";

// obtenerUsuarios().then(console.log)

// PARA HACER LLAMADA EJERCICIO CHISTES

// import { init } from "./js/chistes.page";

// init();

// CÓMO HACER PETICIONES HTTP CON FECTH

// const jokeUrl = 'https://api.chucknorris.io/jokes/random';

// fetch( jokeUrl).then( resp => {

//     resp.json().then (({id, value}) => {
//         console.log(id);
//         console.log(value);

//     });
// });

// fetch(jokeUrl)
//     .then( resp => resp.json())
//     .then( ({id, value}) => {

//         console.log(value, id);
//     })