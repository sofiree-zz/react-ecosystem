// a function named after a resource in the redux store it's in charge of managing
// reducer takes the current state of the application and the action that was called and decides what happends as a result of this action called.

import {CREATE_TODO, DELETE_TODO} from './Actions';
export const todos= (state=[], action)=>{
    const {type, payload} = action;

    switch (type){
    case CREATE_TODO:{      // we want to get the text from the payload when we run 
        const {text} = payload;
        const newTodo={
            text,
            isCompleted: false,
        };
        return state.concat(newTodo);
    }
    case DELETE_TODO:{
        const {text}= payload;
        return state.filter(todo=> todo.text !== text);
    }
    default:
        return state;
    }

}