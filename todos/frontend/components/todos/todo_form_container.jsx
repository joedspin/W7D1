import { connect } from 'react-redux';
import TodoForm from './todo_form';
import { createTodo } from '../../actions/todo_actions';

function uniqueId() {
  return new Date().getTime();
}

const mapStateToProps = (state) => {
  return { errors: state.errors };
};

const mapDispatchToProps = dispatch => ({
  createTodo: (todo) => dispatch(createTodo(todo))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
