import { promesaLenta, promesaMedia, promesaRapida } from "./js/promesas";


// promesaLenta.then( mensaje  => console.log (mensaje));
// promesaMedia.then(console.log);
// promesaRapida.then(console.log);

Promise.race([promesaLenta, promesaMedia, promesaRapida])
    .then( mensaje => console.log(mensaje))
    .catch(console.warn)