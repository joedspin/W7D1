// presentational component

import React from 'react';
// import TodoSteps from './todo_steps_container';
import TodoStepForm from './todo_step_form';

const TodoDetailView = ({ todo, receiveStep, receiveSteps, removeStep }) => (
  <div className="todo-details">
    <p>{todo.body}</p>
    {/* <TodoSteps todo={todo}/> */}
    <TodoStepForm todo={todo} receiveStep={receiveStep} receiveSteps={receiveSteps} removeStep={removeStep}/>
  </div>
);

export default TodoDetailView;