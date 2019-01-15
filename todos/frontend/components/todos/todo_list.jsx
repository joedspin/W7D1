// presentational component

import React from 'react';
import TodoListItem from './todo_list_item';

class TodoList extends React.Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    const { todos, removeTodo, receiveTodo, updateTodo, deleteTodo } = this.props;
    return (
      <ul>
        {todos.map(todo => (
          <TodoListItem todo={todo} key={todo.id} removeTodo={removeTodo}
            receiveTodo={receiveTodo} updateTodo={updateTodo} 
            deleteTodo={deleteTodo} />
        ))}
      </ul>
    )
  }
} 

export default TodoList;