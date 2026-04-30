import './components/todo/todo.css';
import TodoData from './components/todo/todoData';
import TodoNew from './components/todo/todoNew';
import ReactLogo from './assets/react.svg'


const App = () => {
  const name = "Eric";
  const age = 25
  const data = {
    address: "hanoi",
    country: "vietnam"
  }
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew />
      <TodoData
        name={name}
        age={age}
        data={data}
      />
      <div className='todo-image'>
        <img src={ReactLogo} className='logo' />
      </div>
    </div>
  )
}

export default App
