import {connect} from 'react-redux';
import {deleteTodo, markComplete} from './Actions';
import NewTodoForm from './NewTodoForm';
import {TodoListItem} from './TodoListItem'
// import {NewTodoForm} from './NewTodoForm';


const TodoList =({todos =[], onDeletePressed, onMarkCompleted,})=>{
    return(
        <div className="list-wrapper">
            <NewTodoForm/>
            {todos.map(todo=> <TodoListItem todo={todo} onDeletePressed={onDeletePressed} onMarkCompleted={onMarkCompleted}/>)}
        </div>
    );
}

const mapStateToProps = state=>({
    todos: state.todos,
});                                 //here the state arg passed is an object that represents the entire redux state, can contain a large no. of property representing different data in our application eg, todo, user, videos, article etc
                                    //it takes state object and return another object containing pieces of the state the component needs access to. eg; this component needs access to the todos in our state
const mapDispatchToprops = dispatch =>({
        onDeletePressed: text=> dispatch(deleteTodo(text)),                                //property of the state will be passed to the component as props
        onMarkCompleted: text=> dispatch(markComplete(text))                                //it take dispatch instead of redux state, dispatch is a function that allow the component to trigger actions the redux store will respond to
                                        //e.g we want to trigger an action when a user clicks create todo button on the new todo form
});

// export {TodoList}
export default connect(mapStateToProps,mapDispatchToprops)(TodoList);