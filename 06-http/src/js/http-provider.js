const jokeUrl = 'https://api.chucknorris.io/jokes/random';
const urlUsuarios ='https://reqres.in/api/users?page=2';

const obtenerChiste = async()=> {

    try {
        const resp = await fetch( jokeUrl);

        if (!resp.ok) throw 'No se pudo realizar la petición';

        const { icon_url, id, value} = await resp.json();

        return { icon_url, id, value};

    } catch (err) {
        throw err;
    }
}

const obtenerUsuarios = async()=> {

    const resp = await fetch(urlUsuarios);
    // const data = await resp.json();
    // console.log(data)
    
    // Cambiamos la data por el nombre: usuario
    const{data: usuario} = await resp.json();
    return usuario;
}
export {
    obtenerChiste,
    obtenerUsuarios
}