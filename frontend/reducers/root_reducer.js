import { combineReducers } from 'redux';
import todos from './todos_reducer';
import todosSteps from './todo_steps_reducer';

const rootReducer = combineReducers({
  todos,
  todosSteps
});

export default rootReducer;