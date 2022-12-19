import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import '../styles/TodoContainer.css';

function TodoContainer() {

  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos;

  if (!localStorageTodos) {
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }

  const saveTodos = (newTodos) => {
    const stringifiedTodos = JSON.stringify(newTodos);
    localStorage.setItem('TODOS_V1', stringifiedTodos);
    setTodos(newTodos);
  };

  const [todos, setTodos] = useState(parsedTodos);

  const addTodo = todo => {
    if (todo.text.trim()) {
      todo.text = todo.text.trim();
      const updatedTodo = [todo, ...todos];
      saveTodos(updatedTodo)
    }
  };

  const deleteTodo = id => {
    const updatedTodo = todos.filter(todo => todo.id !== id);
    saveTodos(updatedTodo);
  };

  const completeTodo = id => {
    const updatedTodo = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    saveTodos(updatedTodo);
  };

  return (
    <>
      <TodoForm onSubmit={addTodo}/>
      <div className='todo-list-container'>
        {
          todos.map((todo) =>
            <Todo
              key={todo.id}
              id={todo.id}
              text={todo.text}
              completed={todo.completed}
              completeTodo={completeTodo}
              deleteTodo={deleteTodo}
            />
          )
        }
      </div>
    </>
  );
}

export default TodoContainer;