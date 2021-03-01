// create a type of action 
// this action allows the user to create a todo
export const CREATE_TODO ='CREATE_TODO';

// create a defined function to call the action and what the action will carry in the payload as a object
export const createTodo =text=>({
    type: CREATE_TODO,
    payload: {text},
});

// create an action type that allows the user delete/remove a todo

export const DELETE_TODO = 'DELETE_TODO';
export const deleteTodo = text =>({
    type: DELETE_TODO,
    payload: {text},
});


export const MARK_COMPLETE = 'MARK_COMPLETE';
export const markComplete = text =>({
    type: MARK_COMPLETE,
    payload: {text},
});

// reducers keep track of the state of the actions
