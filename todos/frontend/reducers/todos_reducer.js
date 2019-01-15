import { RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO } from '../actions/todo_actions';
import { merge } from 'lodash';

// const initialState = {
//   1: {
//     id: 1,
//     title: 'wash car',
//     body: 'with soap',
//     done: false
//   },
//   2: {
//     id: 2,
//     title: 'wash dog',
//     body: 'with shampoo',
//     done: true
//   },
// };

const todosReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_TODOS:
      action.todos.forEach ((todo) => {
        newState[todo.id] = {
          id: todo.id,
          title: todo.title,
          body: todo.body,
          done: todo.done,
        };
      });
      return newState;
    case RECEIVE_TODO:
      newState[action.id] = {
        id: action.id,
        title: action.title,
        body: action.body,
        done: action.done,
      };
      return newState;
    case REMOVE_TODO:
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};


export default todosReducer;