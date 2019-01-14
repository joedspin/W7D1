import { connect } from 'react-redux';
import TodoDetailView from './todo_detail_view';
import { receiveStep, receiveSteps, removeStep } from '../../actions/todo_actions';
// props = singular todo

const mapStateToProps = (state, ownProps) => {
  // debugger
  return {}
};

const mapDispatchToProps = dispatch => ({
  receiveStep: step => dispatch(receiveStep(step)),
  receiveSteps: steps => dispatch(receiveSteps(steps)),
  removeStep: id => dispatch(removeStep(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoDetailView);