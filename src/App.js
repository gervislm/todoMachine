import './App.css';
import TodoContainer from './components/TodoContainer';

function App() {
  return (
    <div className="todo-app">
      <div className='main-todo-list'>
        <h1>My Todo List</h1>
        <TodoContainer/>
      </div>
    </div>
  );
}

export default App;
