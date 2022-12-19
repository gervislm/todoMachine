import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import '../styles/TodoContainer.css';

function TodoContainer() {

  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if (todo.text.trim()) {
      todo.text = todo.text.trim();
      const updatedTodo = [todo, ...todos];
      setTodos(updatedTodo)
    }
  };

  const deleteTodo = id => {
    const updatedTodo = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodo);
  };

  const completeTodo = id => {
    const updatedTodo = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodo);
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