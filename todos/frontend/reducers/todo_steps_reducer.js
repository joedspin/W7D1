import { RECEIVE_STEPS, RECEIVE_STEP, REMOVE_STEP } from '../actions/todo_actions';
import { merge } from 'lodash';

const todoStepsReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_STEPS:
      action.steps.forEach((step) => {
        newState[step.id] = {
          id: step.id,
          todo_id: step.todo_id,
          title: step.title,
          description: step.description,
          done: step.done,
        };
      });
      return newState;
    case RECEIVE_STEP:
      newState[action.id] = {
        id: action.id,
        todo_id: step.todo_id,
        title: action.title,
        description: action.description,
        done: action.done,
      };
      return newState;
    case REMOVE_STEP:
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};


export default todoStepsReducer;