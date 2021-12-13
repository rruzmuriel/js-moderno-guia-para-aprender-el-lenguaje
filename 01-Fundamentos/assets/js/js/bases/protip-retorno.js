

// function crearPersona( nombre, apellido ) {
//     return { nombre,apellido }
// }
const crearPersona = ( nombre, apellido ) => ({ nombre,apellido });


const persona = crearPersona( 'Rafael', 'Ruz' );
console.log( persona );


function imprimeArgumentos() {
    console.log( arguments );
}

const imprimeArgumentos2 = ( edad, ...args ) => {
    // console.log({ edad, args });
    return args;
}

const [ casado, moreno, nombre, saludo ] = imprimeArgumentos2(10, true, false, 'Fernando', 'Hola');
console.log({ casado, moreno, nombre, saludo });


const {nombre: nuevoNombre, apellido: nuevoApellido } = crearPersona( 'Marina', 'Serrano' );
console.log({ nuevoNombre, nuevoApellido });


const tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    moreno: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};

// const imprimePropiedades = ( personaje ) => {

//     console.log( 'nombre',personaje.nombre );
//     console.log( 'codeName',personaje.codeName );
//     console.log( 'moreno',personaje.moreno );
//     console.log( 'edad',personaje.edad );
//     console.log( 'trajes',personaje.trajes );

// }
const imprimePropiedades = ({ nombre, codeName, moreno, edad = 15, trajes }) => {

    console.log({nombre});
    console.log({codeName});
    console.log({moreno});
    console.log({edad});
    console.log({trajes});
}

imprimePropiedades( tony );
