import React, { useState } from 'react';
import '../styles/TodoForm.css';
import {v4 as uuidv4} from 'uuid';

function TodoForm(props) {

  const [input, setInput] = useState('');

  const changeManager = e => {
    setInput(e.target.value);
  };

  const submitManage = e => {
    e.preventDefault();
    
    const newTodo = {
      id: uuidv4(),
      text: input,
      completed: false
    }

    props.onSubmit(newTodo);
    setInput('');
  };

  return (
    <form 
      className='todo-form'
      onSubmit={submitManage}>
      <input
        value={input}
        className='todo-input'
        type='text'
        placeholder='Write a Task'
        name='text'
        onChange={changeManager}
      />
      <button className='todo-button'>
        add task
      </button>
    </form>
  )
};

export default TodoForm;