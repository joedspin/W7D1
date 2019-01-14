import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/store';
import * as TodoActions from './actions/todo_actions';
import Root from './components/root';
// import { getAllTodos, getFilteredTodos } from './reducers/selectors';

document.addEventListener ('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  window.store = store;
  window.receiveStep = TodoActions.receiveStep;
  window.receiveSteps = TodoActions.receiveSteps;
  window.removeStep = TodoActions.removeStep;


  ReactDOM.render(<Root store={store} />, root);
})