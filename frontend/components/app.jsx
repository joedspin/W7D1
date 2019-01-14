import React from 'react';
import TodoListContainer from './todos/todo_list_container';
import TodoFormContainer from './todos/todo_form_container';

const App = () => {
  return (
    <>
      <h1>Todo App</h1>
      <TodoListContainer />
      <TodoFormContainer />
    </>
  )
}

export default App;