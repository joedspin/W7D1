import * as APIUtil from '../util/todo_api_util';
import { receiveErrors } from './error_actions';


export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const RECEIVE_STEPS = 'RECEIVE_STEPS';
export const RECEIVE_STEP = 'RECEIVE_STEP';
export const REMOVE_STEP = 'REMOVE_STEP';


export const receiveTodos = (todos) => ({
  type: RECEIVE_TODOS,
  todos
});

export const receiveTodo = (todo) => ({
  type: RECEIVE_TODO,
  id: todo.id,
  title: todo.title,
  body: todo.body,
  done: todo.done,
});

export const removeTodo = (todoId) => ({
  type: REMOVE_TODO,
  id: todoId,
});

export const receiveSteps = (steps) => ({
  type: RECEIVE_STEPS,
  steps
});

export const receiveStep = (step) => ({
  type: RECEIVE_STEP,
  id: step.id,
  todo_id: step.todo_id,
  title: step.title,
  description: step.description,
  done: step.done,
});

export const removeStep = (id) => ({
  type: REMOVE_STEP,
  id,
});

export const fetchTodos = () => {
  return (dispatch) => {
    return APIUtil.fetchTodos().then(todos => {
      dispatch(receiveTodos(todos)); 
    });
  };
};

export const createTodo = (todo) => {
  return (dispatch) => {
    return APIUtil.createTodo(todo).then(
      todo => dispatch(receiveTodo(todo)),
      err => dispatch(receiveErrors(err.responseJSON))
    );
  };
};

export const updateTodo = (todo) => {
  return (dispatch) => {
    return APIUtil.updateTodo(todo).then(
      todo => dispatch(receiveTodo(todo)),
      err => dispatch(receiveErrors(err.responseJSON))
    );
  };
};

export const deleteTodo = (todo) => {
  debugger
  return (dispatch) => {
    const oldTodoId = todo.id;
    return APIUtil.deleteTodo(todo).then(
      () => dispatch(removeTodo(oldTodoId)),
      err => dispatch(receiveErrors(err.responseJSON))
    );
  };
};