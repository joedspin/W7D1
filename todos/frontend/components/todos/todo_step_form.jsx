import React from 'react';

function uniqueId() {
  return new Date().getTime();
}

class TodoStepForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: uniqueId(),
      todo_id: props.todo.id,
      title: "",
      description: "",
      done: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.receiveStep(this.state);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  render() {
    return (
      <form className="add-form" onSubmit={this.handleSubmit}>
        <label>Title
        <input type="text" onChange={this.update("title")} value={this.state.title} />
        </label>
        <br />
        <label>Description
        <textarea name="description" onChange={this.update("description")} value={this.state.description}></textarea>
        </label>
        <input type="submit" value="Create New Step!" />
      </form>
    )
  }
}

export default TodoStepForm;
