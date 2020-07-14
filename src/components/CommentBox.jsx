import React from 'react';

export default class CommentBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { comment: '' };
  }

  handleChange = (e) => {
    this.setState({ comment: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    this.setState({ comment: '' });
  };

  render() {
    return (
      <div
        style={{
          padding: '30px',
          border: '1px solid black',
          backgroundColor: 'red',
          color: 'white',
        }}
      >
        <h2>Enter a comment</h2>
        <form onSubmit={this.submitHandler}>
          <input
            value={this.state.comment}
            onChange={this.handleChange}
            style={{ display: 'block' }}
          ></input>
          <button>submit</button>
        </form>
      </div>
    );
  }
}
