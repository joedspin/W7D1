// container component

import { connect } from 'react-redux';
import { getAllTodos, getFilteredTodos } from '../../reducers/selectors';
import { fetchTodos, removeTodo, updateTodo, deleteTodo } from '../../actions/todo_actions';
import TodoList from './todo_list';

const mapStateToProps = state => ({
  todos: getAllTodos(state),
  filteredTodos: getFilteredTodos(state),
});

const mapDispatchToProps = dispatch => ({
  removeTodo: (todo) => dispatch(removeTodo(todo)),
  fetchTodos: (todos) => dispatch(fetchTodos(todos)),
  updateTodo: (todo) => dispatch(updateTodo(todo)),
  deleteTodo: (todo) => dispatch(deleteTodo(todo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);