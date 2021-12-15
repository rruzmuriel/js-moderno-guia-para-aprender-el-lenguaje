class Persona {

    static porObjeto({ nombre, apellido, pais }) {
        return new Persona( nombre, apellido, pais );
    }

    constructor( nombre, apellido, pais ) {
        this.nombre   = nombre;
        this.apellido = apellido;
        this.pais     = pais;
    }

    getInfo() {
        console.log(`info: ${ this.nombre }, ${ this.apellido }, ${ this.pais }`);
    }
}

const nombre1   = 'Marina',
      apellido1 = 'Serrano',
      pais1     = 'España';

const fher = {
    nombre:   'Rafael',
    apellido: 'Ruz',
    pais:     'España'
}      

const persona1 = new Persona( nombre1, apellido1, pais1 );
const persona2 = Persona.porObjeto( fher );

persona1.getInfo();
persona2.getInfo();
