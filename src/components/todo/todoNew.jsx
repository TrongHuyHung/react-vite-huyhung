const TodoNew = (props) => {
    console.log("check point", props);
    const { addNewTodo } = props;

    //addNewTodo("1");
    return (
        <div className='todo-input'>
            <input type="text" placeholder='Enter your name' />
            <button >Add</button>
        </div>
    );
}
export default TodoNew;