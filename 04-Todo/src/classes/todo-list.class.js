export class TodoList {

    constructor(){

        this.todos = [];
    }

    nuevoTodo (todo){
        this.todos.push(todo);
    }

    eliminarTodo (id){

    }
    marcarCompletado (id){

        for (const todo of this.todos) {
     
        if(todo.id == id) { // == porque todo.id es string numero y id es numero, para no comparar tipo de dato
            console.log(todo.id, id)
            todo.completado = !todo.completado;
            break;
        }
        }

    }
    eliminarCompletados (){}

}