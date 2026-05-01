import './components/todo/todo.css';
import TodoData from './components/todo/todoData';
import TodoNew from './components/todo/todoNew';
import ReactLogo from './assets/react.svg'
import { useState } from 'react';


const App = () => {

  const [todoList, setTodoList] = useState([
    { id: 1, name: "Learning ReactJS" },
    { id: 2, name: "Watching Youtube" },
  ]);
  const name = "Eric";
  const age = 25
  const data = {
    address: "hanoi",
    country: "vietnam"
  }

  const addNewTodo = (name) => {
    alert(`Call me ${name}`);
  }
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew
        addNewTodo={addNewTodo}
      />
      <TodoData
        name={name}
        age={age}
        data={data}
        todoList={todoList}
      />
      <div className='todo-image'>
        <img src={ReactLogo} className='logo' />
      </div>
    </div>
  )
}

export default App
