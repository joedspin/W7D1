import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      title: "",
      body: "",
      done: false,
      tag_names: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    debugger
    this.props.createTodo(this.state).then(
      () => this.setState({ title: '', body: '' }));
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  addTag(e) {
    e.preventDefault();
    this.state.setState({ tag_names: tag_names.concat([e.currentTarget.children("new_tag").value]) });
  }

  render () {
    // debugger
    return (
      <>
        <ul>{this.props.errors.map((error, idx) => {
          return <li key={idx}>{error}</li>
        })}</ul>
        <form className="add-form" onSubmit={this.handleSubmit}>
          <label>Title
          <input type="text" onChange={this.update("title")} value={this.state.title} />
          </label>
          <br />
          <label>Body
          <input name="body" onChange={this.update("body")} value={this.state.body} />
          </label>
          <ul>{this.state.tag_names.map((tag, idx) => <li key={idx}>{tag}</li>)}</ul>
          <input type="text" name="new_tag" id="new_tag"/>
          <button onClick={this.addTag.bind(this)} type="button">Add Tag</button>
        <input type="submit" value="Create New Todo!" />
        </form>
      </>
    )
  }
}

export default TodoForm;
