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

export const removeTodo = (todo) => ({
  type: REMOVE_TODO,
  id: todo.id,
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