import React from 'react';
import { merge } from 'lodash';
import TodoDetailViewContainer from './todo_detail_view_container';

const TodoListItem = ({ todo, deleteTodo, updateTodo }) => {
  const flippedTodo = merge({}, todo);
  flippedTodo.done = !flippedTodo.done;

  return <li>
    {todo.title}
    <button onClick={() => deleteTodo(todo)}>Delete!</button>
    <button onClick={() => updateTodo(flippedTodo)}>{flippedTodo.done ? "Done" : "Undo"}</button>
    <div className="todo-details">
      <TodoDetailViewContainer todo={todo}/>
    </div>
  </li>
};

export default TodoListItem;