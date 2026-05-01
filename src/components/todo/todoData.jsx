const TodoData = (props) => {

    const { todoList } = props;

    console.log("checks -> props", todoList);
    return (
        <div className='todo-data'>
            {todoList.map((item, index) => {
                console.log("Check map", item, index);
                return (
                    <div className="todo-item">
                        <div>{item.name}</div>
                        <button>Detele</button>
                    </div>
                );
            })}
            <div>Learning React</div>
            <div>{JSON.stringify(props.todoList)}</div>
        </div>
    );
}
export default TodoData;