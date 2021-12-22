import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

import './styles.css';

export const todoList = new TodoList();

todoList.todos.forEach(todo => crearTodoHtml(todo)); // Sintaxis más corta: todoList.todos.forEach ( crearTodoHtml)


console.log('todos', todoList.todos)

// const tarea = new Todo('Aprender Javascript');


// todoList.nuevoTodo(tarea);


// console.log(todoList);

// crearTodoHtml( tarea );

// localStorage.setItem('my-key', 'ABC123');
// // sessionStorage.setItem('my-key', 'ABC123');

// setTimeout ( ()=> {

//     localStorage.removeItem('my-key');
// }, 1500);
