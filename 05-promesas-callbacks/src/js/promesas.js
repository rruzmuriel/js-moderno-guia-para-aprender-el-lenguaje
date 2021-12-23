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

export const buscarHeroe = (id)=> {

    const heroe = heroes[id];

    return new Promise ( ( resolve, reject )=> {

        if (heroe) {
            resolve(heroe);
        } else {
            reject(`No existe un héroe para el id ${id}`);
        }

    })


}