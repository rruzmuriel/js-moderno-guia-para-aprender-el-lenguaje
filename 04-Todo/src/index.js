import {Todo, TodoList} from './classes';

import './styles.css';

const todoList = new TodoList();
const tarea = new Todo('Aprender Javascript');
const tarea2 = new Todo('comprar un unicornio');


todoList.nuevoTodo(tarea);
todoList.nuevoTodo(tarea2);

console.log(todoList);
