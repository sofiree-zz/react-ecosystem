import {useState} from 'react';
import {connect} from 'react-redux';
import {createTodo} from './Actions';


// connect functions using higher order components  i.e connect()(NewTodoForm)
// instead of exporting the component norally, we export the component using connect()()
const NewTodoForm =({todos, onCreatePressed})=>{
    const [inputValue, setInputValue] = useState('')
    return(
        <div className="new-todo-form">
            <input
             className="new-todo-input" 
             type="text"
             value={inputValue}
             placeholder ="TYpe your new todo here"
             onChange={e=>setInputValue(e.target.value)}
             />
            <button 
                onClick={()=>{
                    const isDuplicateText=
                        todos.some(todo=>todo.text===inputValue);
                    if (!isDuplicateText){
                        onCreatePressed(inputValue);
                        setInputValue('');
                    }               
                }}
                className="new-todo-button"
            
            >Create Todo</button>
        </div>
    );
}

const mapStateToProps = state=>({
    todos: state.todos,
});                                 //here the state arg passed is an object that represents the entire redux state, can contain a large no. of property representing different data in our application eg, todo, user, videos, article etc
                                    //it takes state object and return another object containing pieces of the state the component needs access to. eg; this component needs access to the todos in our state
const mapDispatchToprops = dispatch =>({
        onCreatePressed: text=> dispatch(createTodo(text))                                //property of the state will be passed to the component as props
                                        //it take dispatch instead of redux state, dispatch is a function that allow the component to trigger actions the redux store will respond to
                                        //e.g we want to trigger an action when a user clicks create todo button on the new todo form
});

export connect(mapStateToProps,mapDispatchToprops)({NewTodoForm});