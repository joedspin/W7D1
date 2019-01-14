import React from 'react';

function uniqueId() {
  return new Date().getTime();
}

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: uniqueId(),
      title: "",
      body: "",
      done: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.receiveTodo(this.state);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  render () {
    return (
      <form className="add-form" onSubmit={this.handleSubmit}>
        <label>Title
        <input type="text" onChange={this.update("title")} value={this.state.title} />
        </label>
        <br />
        <label>Body
        <textarea name="body" onChange={this.update("body")} value={this.state.body}></textarea>
        </label>
      <input type="submit" value="Create New Todo!" />
      </form>
    )
  }
}

export default TodoForm;
