const heroes = {
    capi: {
        nombre : 'Capitán América',
        poder: 'Escudo protector'
    },
    iron: {
        nombre : 'Ironman',
        poder: 'Acero inoxidable'
    },
    spider: {
        nombre : 'Spiderman',
        poder: 'Vuela por edificios'
    }
};
// callback retorna...
export const buscarHeroe = ( id, callback ) => {

    const heroe = heroes[id];

    if (heroe) {
        callback( null, heroe);
    } else {
        //Un error
        callback(`No existe un héroe para el id ${id}`)
    }

    // callback(heroe);

}