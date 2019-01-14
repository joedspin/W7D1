// container component

import { connect } from 'react-redux';
import { getAllTodos, getFilteredTodos } from '../../reducers/selectors';
import { removeTodo } from '../../actions/todo_actions';
import TodoList from './todo_list';

const mapStateToProps = state => ({
  todos: getAllTodos(state),
  filteredTodos: getFilteredTodos(state),
});

const mapDispatchToProps = dispatch => ({
  removeTodo: (todo) => dispatch(removeTodo(todo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);