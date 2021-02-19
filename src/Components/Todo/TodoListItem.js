

const TodoListItem = ({todo})=>{
    return(
        <div className="todo-item-container">
            <h3>{todo.text}</h3>
            <div className="buttons-container">
                <button className="completed-button">Mark As Complete</button>
                <button className="delete-button">Delete</button>
            </div>
           
        </div>
    );
}

export {TodoListItem};