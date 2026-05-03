import './components/todo/todo.css';
import TodoData from './components/todo/todoData';
import TodoNew from './components/todo/todoNew';
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import ReactLogo from './assets/react.svg'
import { useState } from 'react';
import { Outlet } from 'react-router-dom';


const App = () => {

  const [todoList, setTodoList] = useState([
    // { id: 1, name: "Learning ReactJS" },
    // { id: 2, name: "Watching Youtube" },
  ]);


  const addNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 100),
      name: name
    }

    setTodoList([...todoList, newTodo]);
  }

  const randomIntFromInterval = (min, max) => { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


  const deleteTodo = (id) => {
    console.log(id);
    const newTodo = todoList.filter(item => item.id !== id)
    // const newToList = todoList.filter((item) => {
    //   item.id !== id;
    // })
    setTodoList(newTodo);
  }

  return (
    <>
      <Header />
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <TodoNew
          addNewTodo={addNewTodo}
        />
        {todoList.length > 0 ?
          <TodoData
            todoList={todoList}
            deleteTodo={deleteTodo}
          />
          :
          <div className='todo-image'>
            <img src={ReactLogo} className='logo' />
          </div>
        }


        {/* {todoList.length > 0 &&
        <TodoData
          todoList={todoList}
        />
      }

      {todoList.length === 0 &&
        <div className='todo-image'>
          <img src={ReactLogo} className='logo' />
        </div>
      } */}

      </div>
      <Outlet />
      <Footer />
    </>
  )
}

export default App
