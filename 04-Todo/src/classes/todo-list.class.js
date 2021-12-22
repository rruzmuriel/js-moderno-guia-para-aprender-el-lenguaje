import { Todo } from "./todo.class";

export class TodoList {

    constructor(){

        // this.todos = [];
        this.cargarLocalStorage ();
    }

    nuevoTodo (todo){
        this.todos.push(todo);
        this.guardarLocalStorage();

    }

    eliminarTodo (id){

        this.todos = this.todos.filter (todo => todo.id != id);
        this.guardarLocalStorage();

    }
    marcarCompletado (id){

        for (const todo of this.todos) {
     
        if(todo.id == id) { // == porque todo.id es string numero y id es numero, para no comparar tipo de dato
            
            todo.completado = !todo.completado;
            this.guardarLocalStorage();
            break;
        }
        }

    }
    eliminarCompletados (){

        this.todos = this.todos.filter (todo => !todo.completado);
        this.guardarLocalStorage();

    }

    guardarLocalStorage (){

        localStorage.setItem('todo', JSON.stringify(this.todos));

    }

    cargarLocalStorage (){

       this.todos = (localStorage.getItem('todo')) 
                    ? JSON.parse(localStorage.getItem('todo'))
                    : [];

        this.todos = this.todos.map(obj => Todo.fromJson(obj)); // Es lo mismo : this.todos = this.todos.map( Todo.fromJson)

        // if(localStorage.getItem('todo')) {

        //     this.todos = JSON.parse(localStorage.getItem('todo'));
        //     console.log('cargar local',this.todos);

        // } else {
        //     this.todos = [];
        // }

    }

}