import { obtenerChiste } from "./js/http-provider";

obtenerChiste().then(console.log)




// Cómo hacer peticiones http con fetch

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