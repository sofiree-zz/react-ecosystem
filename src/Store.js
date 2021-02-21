import {createStore, combineReducers} from 'redux';
import {todos} from './Components/Todo/Reducers';
const reducers = {
    todos,
};
const rootReducer = combineReducers(reducers);

export const configureStore =()=>createStore(rootReducer);