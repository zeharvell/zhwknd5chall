import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentPage extends Component {
  onCommentClick = (comment) => (event) => {
    console.log(comment);
    this.props.dispatch({ comment: 'SET_COMMENT_TYPE', payload: comment });
  };

  render() {
    return (
      <div>
        <h1>Comment Page</h1>
        <button>Any Comments you want to leave?</button>
      </div>
    );
  }
}

export default CommentPage;
