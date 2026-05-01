const TodoNew = (props) => {
    console.log("check point", props);
    const { addNewTodo } = props;

    //addNewTodo("1");
    const handleClick = () => {
        alert("click me");
    }
    const handOnChange = (event) => {
        console.log("==>", event);
    }
    return (
        <div className='todo-input'>
            <input type="text" placeholder='Enter your name'
                onChange={(event) => handOnChange(event.target.value)}
            />
            <button onClick={handleClick}
            >Add
            </button>
        </div>
    );
}
export default TodoNew;