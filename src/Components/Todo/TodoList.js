import {TodoListItem} from './TodoListItem'

const TodoList =({todos})=>{
    return(
        <div className="list-wrapper">
            {todos.map(todo=> <TodoListItem todo={todo}/>)}
        </div>
    );
}

export {TodoList}