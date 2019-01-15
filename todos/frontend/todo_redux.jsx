import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/store';
import * as TodoActions from './actions/todo_actions';
import Root from './components/root';
import { fetchTodos } from './actions/todo_actions';

// import { getAllTodos, getFilteredTodos } from './reducers/selectors';

document.addEventListener ('DOMContentLoaded', () => {
  const root = document.getElementById('content');

  window.store = store;
  window.receiveStep = TodoActions.receiveStep;
  window.receiveSteps = TodoActions.receiveSteps;
  window.removeStep = TodoActions.removeStep;
  window.fetchTodos = fetchTodos;


  ReactDOM.render(<Root store={store} />, root);
})