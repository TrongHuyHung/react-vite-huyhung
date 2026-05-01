import { useState } from "react";

const TodoNew = (props) => {
    // const valueInput = "";
    const [valueInput, setValueInput] = useState("eric");

    const { addNewTodo } = props;

    //addNewTodo("1");
    const handleClick = () => {
        console.log("check value input", valueInput);
    }
    const handOnChange = (event) => {
        setValueInput(event);
    }
    return (
        <div className='todo-input'>
            <input type="text" placeholder='Enter your name'
                onChange={(event) => handOnChange(event.target.value)}
            />
            <button onClick={handleClick}
            >Add
            </button>
            <div>
                My text input is: {valueInput}
            </div>
        </div>
    );
}
export default TodoNew;