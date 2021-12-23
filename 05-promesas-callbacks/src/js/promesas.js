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

const promesaLenta = new Promise ((resolve, reject) => {
    setTimeout(() => resolve('Promesa Lenta') , 2000);
});

const promesaMedia = new Promise ((resolve, reject) => {
    setTimeout(() => resolve('Promesa Media') , 1500);
});

const promesaRapida = new Promise ((resolve, reject) => {
    setTimeout(() => reject('Promesa Rápida') , 1000);
});

export {
    promesaLenta,
    promesaMedia,
    promesaRapida
}