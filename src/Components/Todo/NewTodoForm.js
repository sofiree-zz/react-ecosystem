import {useEffect, useState} from 'react';

const NewTodoForm =()=>{
    const [inputValue, setInputValue] = useState('')
    return(
        <div className="new-todo-form">
            <input
             className="new-todo-input" 
             type="text"
             value={inputValue}
             
             />
            <button className="new-todo-button">Create Todo</button>
        </div>
    );
}

export{NewTodoForm};