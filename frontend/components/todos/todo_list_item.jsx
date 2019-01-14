import React from 'react';
import { merge } from 'lodash';
import TodoDetailViewContainer from './todo_detail_view_container';

const TodoListItem = ({ todo, removeTodo, receiveTodo }) => {
  const flippedTodo = merge({}, todo);
  flippedTodo.done = !flippedTodo.done;
  return <li>
    {todo.title}
    <button onClick={() => removeTodo(todo)}>Delete!</button>
    <button onClick={() => receiveTodo(flippedTodo)}>{flippedTodo.done ? "Undo" : "Done"}</button>
    <div className="todo-details">
      <TodoDetailViewContainer todo={todo}/>
    </div>
  </li>
};

export default TodoListItem;