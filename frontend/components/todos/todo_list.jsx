// presentational component

import React from 'react';
import TodoListItem from './todo_list_item';

const TodoList = ({ todos, removeTodo, receiveTodo }) => ( // { todos } = props
  <ul>
    {todos.map(todo => (
      <TodoListItem todo={todo} key={todo.id} removeTodo={removeTodo} receiveTodo={receiveTodo} />
    ))}
  </ul>
);

export default TodoList;