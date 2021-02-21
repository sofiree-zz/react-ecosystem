

const TodoListItem = ({todo, onDeletePressed})=>{
    return(
        <div className="todo-item-container">
            <h3>{todo.text}</h3>
            <div className="buttons-container">
                <button className="completed-button">Mark As Complete</button>
                <button 
                    onClick={()=>onDeletePressed(todo.text)}
                    className="delete-button">Delete</button>
            </div>
           
        </div>
    );
}

export {TodoListItem};