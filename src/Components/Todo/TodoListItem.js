

const TodoListItem = ({todo, onDeletePressed, onMarkCompleted})=>{
    return(
        <div className="todo-item-container">
            <h3>{todo.text}</h3>
            <div className="buttons-container">
                {todo.isCompleted ? null
                :
                <button 
                onClick={()=> onMarkCompleted(todo.text)}
                className="completed-button">Mark As Complete</button>}

                <button 
                    onClick={()=>onDeletePressed(todo.text)}
                    className="delete-button">Delete</button>
            </div>
           
        </div>
    );
}

export {TodoListItem};