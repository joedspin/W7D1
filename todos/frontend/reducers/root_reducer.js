import { combineReducers } from 'redux';
import todos from './todos_reducer';
import todosSteps from './todo_steps_reducer';
import errors from './error_reducer';

const rootReducer = combineReducers({
  todos,
  todosSteps,
  errors,
});

export default rootReducer;